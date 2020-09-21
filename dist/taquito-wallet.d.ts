import { TezosToolkit, WalletProvider, WalletDelegateParams, WalletOriginateParams, WalletTransferParams } from "@taquito/taquito";
import { isAvailable, onAvailabilityChange, ThanosWalletError } from "./client";
import { ThanosDAppNetwork } from "./types";
export declare class ThanosWallet implements WalletProvider {
    private appName;
    static isAvailable: typeof isAvailable;
    static onAvailabilityChange: typeof onAvailabilityChange;
    private pkh?;
    rpc?: string;
    constructor(appName: string);
    get connected(): boolean;
    toTezos(): TezosToolkit;
    connect(network: ThanosDAppNetwork, opts?: {
        forcePermission: boolean;
    }): Promise<void>;
    getPKH(): Promise<string>;
    mapTransferParamsToWalletParams(params: WalletTransferParams): Promise<import("@taquito/taquito/dist/types/operations/types").RPCTransferOperation>;
    mapOriginateParamsToWalletParams(params: WalletOriginateParams): Promise<import("@taquito/taquito/dist/types/operations/types").RPCOriginationOperation>;
    mapDelegateParamsToWalletParams(params: WalletDelegateParams): Promise<import("@taquito/taquito/dist/types/operations/types").RPCDelegateOperation>;
    sendOperations(opParams: any[]): Promise<string>;
    sign(payload: string): Promise<string>;
    broadcast(signedOpBytes: string): Promise<string>;
}
export declare class NotConnectedThanosWalletError extends ThanosWalletError {
    name: string;
    message: string;
}
//# sourceMappingURL=taquito-wallet.d.ts.map