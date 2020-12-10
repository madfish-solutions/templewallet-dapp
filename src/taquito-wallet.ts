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

  private pkh?: string;
  public rpc?: string;

  constructor(
    private appName: string,
    existingPermission?: ThanosDAppPermission
  ) {
    if (existingPermission) {
      this.pkh = existingPermission.pkh;
      this.rpc = existingPermission.rpc;
    }
  }

  get connected() {
    return Boolean(this.pkh);
  }

  toTezos() {
    assertConnected(this.pkh);
    const tezos = new TezosToolkit(this.rpc!);
    tezos.setProvider({ wallet: this });
    return tezos;
  }

  async connect(network: ThanosDAppNetwork, opts = { forcePermission: false }) {
    const { pkh, rpc } = await requestPermission(
      network,
      { name: this.appName },
      opts.forcePermission
    );
    this.pkh = pkh;
    this.rpc = rpc;
  }

  reconnect(network: ThanosDAppNetwork) {
    return this.connect(network, { forcePermission: true });
  }

  async getPKH() {
    assertConnected(this.pkh);
    return this.pkh;
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
    assertConnected(this.pkh);
    return requestOperation(this.pkh, opParams.map(formatOpParams));
  }

  async sign(payload: string) {
    assertConnected(this.pkh);
    return requestSign(this.pkh, payload);
  }

  async broadcast(signedOpBytes: string) {
    assertConnected(this.pkh);
    return requestBroadcast(signedOpBytes);
  }
}

export class NotConnectedThanosWalletError extends ThanosWalletError {
  name = "ThanosWalletNotConnected";
  message =
    "You need to connect ThanosWallet by calling thanosWallet.connect() first";
}

function assertConnected(pkh?: string): asserts pkh {
  if (!pkh) {
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
