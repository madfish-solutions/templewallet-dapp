import {
  TezosToolkit,
  WalletProvider,
  createOriginationOperation,
  createSetDelegateOperation,
  createTransferOperation,
  WalletDelegateParams,
  WalletOriginateParams,
  WalletTransferParams,
} from "@taquito/taquito";

import {
  isAvailable,
  onAvailabilityChange,
  getCurrentPermission,
  onPermissionChange,
  requestPermission,
  requestOperation,
  requestSign,
  requestBroadcast,
  ThanosWalletError,
} from "./client";

import { ThanosDAppNetwork, ThanosDAppPermission } from "./types";

export class ThanosWallet implements WalletProvider {
  static isAvailable = isAvailable;
  static onAvailabilityChange = onAvailabilityChange;
  static getCurrentPermission = getCurrentPermission;
  static onPermissionChange = onPermissionChange;

  permission: ThanosDAppPermission = null;

  constructor(
    private appName: string,
    existingPermission?: ThanosDAppPermission
  ) {
    if (existingPermission) {
      this.permission = existingPermission;
    }
  }

  get connected() {
    return Boolean(this.permission);
  }

  toTezos() {
    assertConnected(this.permission);
    const tezos = new TezosToolkit(this.permission.rpc);
    tezos.setProvider({ wallet: this });
    return tezos;
  }

  async connect(network: ThanosDAppNetwork, opts = { forcePermission: false }) {
    const perm = await requestPermission(
      network,
      { name: this.appName },
      opts.forcePermission
    );
    this.permission = perm;
  }

  reconnect(network: ThanosDAppNetwork) {
    return this.connect(network, { forcePermission: true });
  }

  async getPKH() {
    assertConnected(this.permission);
    return this.permission.pkh;
  }

  async mapTransferParamsToWalletParams(params: WalletTransferParams) {
    return createTransferOperation(params);
  }

  async mapOriginateParamsToWalletParams(params: WalletOriginateParams) {
    return createOriginationOperation(params as any);
  }

  async mapDelegateParamsToWalletParams(params: WalletDelegateParams) {
    return createSetDelegateOperation(params as any);
  }

  async sendOperations(opParams: any[]) {
    assertConnected(this.permission);
    return requestOperation(this.permission.pkh, opParams.map(formatOpParams));
  }

  async sign(payload: string) {
    assertConnected(this.permission);
    return requestSign(this.permission.pkh, payload);
  }

  async broadcast(signedOpBytes: string) {
    assertConnected(this.permission);
    return requestBroadcast(signedOpBytes);
  }
}

export class NotConnectedThanosWalletError extends ThanosWalletError {
  name = "ThanosWalletNotConnected";
  message =
    "You need to connect ThanosWallet by calling thanosWallet.connect() first";
}

function assertConnected(perm: ThanosDAppPermission): asserts perm {
  if (!perm) {
    throw new NotConnectedThanosWalletError();
  }
}

function formatOpParams(op: any) {
  const { fee, gas_limit, storage_limit, ...rest } = op;
  if (op.kind === "transaction") {
    const { destination, amount, parameters, ...txRest } = rest;
    return {
      ...txRest,
      to: destination,
      amount: +amount,
      mutez: true,
      parameter: parameters,
    };
  }
  return rest;
}
