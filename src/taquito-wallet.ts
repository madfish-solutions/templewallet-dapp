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
  requestPermission,
  requestOperation,
  ThanosWalletError,
} from "./client";

import { ThanosDAppNetwork } from "./types";

export class ThanosWallet implements WalletProvider {
  static isAvailable = isAvailable;
  static onAvailabilityChange = onAvailabilityChange;

  private pkh?: string;
  public rpc?: string;

  constructor(private appName: string) {}

  get connected() {
    return Boolean(this.pkh);
  }

  toTezos() {
    assertConnected(this.pkh);
    const tezos = new TezosToolkit();
    tezos.setProvider({ wallet: this, rpc: this.rpc });
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
