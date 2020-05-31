export declare type ThanosDAppMessage = ThanosDAppRequest | ThanosDAppResponse;
export declare type ThanosDAppRequest = ThanosDAppPermissionRequest | ThanosDAppOperationRequest;
export declare type ThanosDAppResponse = ThanosDAppPermissionResponse | ThanosDAppOperationResponse;
export interface ThanosDAppMessageBase {
    type: ThanosDAppMessageType;
}
export declare enum ThanosDAppMessageType {
    PermissionRequest = "PERMISSION_REQUEST",
    PermissionResponse = "PERMISSION_RESPONSE",
    OperationRequest = "OPERATION_REQUEST",
    OperationResponse = "OPERATION_RESPONSE"
}
export interface ThanosDAppPermissionRequest extends ThanosDAppMessageBase {
    type: ThanosDAppMessageType.PermissionRequest;
    network: ThanosDAppNetwork;
    appMeta: ThanosDAppMetadata;
    force?: boolean;
}
export interface ThanosDAppPermissionResponse extends ThanosDAppMessageBase {
    type: ThanosDAppMessageType.PermissionResponse;
    pkh: string;
    rpc: string;
}
export interface ThanosDAppOperationRequest extends ThanosDAppMessageBase {
    type: ThanosDAppMessageType.OperationRequest;
    sourcePkh: string;
    opParams: any[];
}
export interface ThanosDAppOperationResponse extends ThanosDAppMessageBase {
    type: ThanosDAppMessageType.OperationResponse;
    opHash: string;
}
export declare enum ThanosDAppErrorType {
    NotGranted = "NOT_GRANTED",
    NotFound = "NOT_FOUND",
    InvalidParams = "INVALID_PARAMS"
}
export declare type ThanosDAppNetwork = "mainnet" | "carthagenet";
export interface ThanosDAppMetadata {
    name: string;
}
export interface ThanosPageMessage {
    type: ThanosPageMessageType;
    payload: any;
    reqId?: string | number;
}
export declare enum ThanosPageMessageType {
    Request = "THANOS_PAGE_REQUEST",
    Response = "THANOS_PAGE_RESPONSE",
    ErrorResponse = "THANOS_PAGE_ERROR_RESPONSE"
}
//# sourceMappingURL=types.d.ts.map