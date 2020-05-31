import { ThanosDAppNetwork, ThanosDAppMetadata } from "./types";
export declare function isAvailable(): Promise<boolean>;
export declare function onAvailabilityChange(callback: (available: boolean) => void): () => void;
export declare function requestPermission(network: ThanosDAppNetwork, appMeta: ThanosDAppMetadata, force: boolean): Promise<{
    pkh: string;
    rpc: string;
}>;
export declare function requestOperation(sourcePkh: string, opParams: any): Promise<string>;
export declare class ThanosWalletError implements Error {
    name: string;
    message: string;
}
export declare class NotConnectedThanosWalletError extends ThanosWalletError {
    name: string;
    message: string;
}
export declare class NotGrantedThanosWalletError extends ThanosWalletError {
    name: string;
    message: string;
}
export declare class NotFoundThanosWalletError extends ThanosWalletError {
    name: string;
    message: string;
}
export declare class InvalidParamsThanosWalletError extends ThanosWalletError {
    name: string;
    message: string;
}
//# sourceMappingURL=client.d.ts.map