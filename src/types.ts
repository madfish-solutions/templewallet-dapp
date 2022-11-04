export interface AppMetadata extends TempleDAppMetadata {
  senderId: string;
  icon?: string;
};

export interface BlockchainMessage extends TempleDAppMessageBase {
  blockchainIdentifier: string;
  type: unknown;
  blockchainData: unknown;
}

export interface BeaconMessageWrapper<T extends TempleDAppMessageBase> {
  id: string // ID of the message. The same ID is used in the request and response
  version: string
  senderId: string // ID of the sender. This is used to identify the
  message: T
}

export type TempleDAppMessage = TempleDAppRequest | TempleDAppResponse;

export type TempleDAppRequest =
  | TempleDAppGetCurrentPermissionRequest
  | TempleDAppPermissionRequest
  | TempleDAppOperationRequest
  | TempleDAppSignRequest
  | TempleDAppBroadcastRequest;

export type TempleDAppRequestV3 =
  | BeaconMessageWrapper<TempleDAppPermissionRequestV3>
  | BeaconMessageWrapper<TempleDAppBlockchainRequestV3>;

export type TempleDAppResponse =
  | TempleDAppGetCurrentPermissionResponse
  | TempleDAppPermissionResponse
  | TempleDAppOperationResponse
  | TempleDAppSignResponse
  | TempleDAppBroadcastResponse

export type TempleDAppResponseV3 =
  | BeaconMessageWrapper<TempleDAppPermissionResponseV3>
  | BeaconMessageWrapper<TempleDAppBlockchainResponseV3>;

export interface TempleDAppMessageBase {
  type: unknown;
}

export enum TempleDAppMessageType {
  GetCurrentPermissionRequest = "GET_CURRENT_PERMISSION_REQUEST",
  GetCurrentPermissionResponse = "GET_CURRENT_PERMISSION_RESPONSE",
  PermissionRequest = "permission_request",
  PermissionResponse = "PERMISSION_RESPONSE",
  OperationRequest = "OPERATION_REQUEST",
  BlockchainRequest = "blockchain_request",
  BlockchainResponse = "blockchain_response",
  OperationResponse = "OPERATION_RESPONSE",
  SignRequest = "SIGN_REQUEST",
  SignResponse = "SIGN_RESPONSE",
  BroadcastRequest = "BROADCAST_REQUEST",
  BroadcastResponse = "BROADCAST_RESPONSE",
}

/**
 * Messages
 */

export interface TempleDAppGetCurrentPermissionRequest
  extends TempleDAppMessageBase {
  type: TempleDAppMessageType.GetCurrentPermissionRequest;
}

export interface TempleDAppGetCurrentPermissionResponse
  extends TempleDAppMessageBase {
  type: TempleDAppMessageType.GetCurrentPermissionResponse;
  permission: TempleDAppPermission;
}

export interface TempleDAppPermissionRequest extends TempleDAppMessageBase {
  type: TempleDAppMessageType.PermissionRequest;
  network: TempleDAppNetwork;
  appMeta: TempleDAppMetadata;
  force?: boolean;
}

export interface TempleDAppPermissionRequestV3 extends BlockchainMessage {
  type: TempleDAppMessageType.PermissionRequest;
  blockchainData: {
    appMetadata: AppMetadata;
    scopes: string[];
    network: TempleDAppNetwork;
  };
}

export interface TempleDAppPermissionResponse extends TempleDAppMessageBase {
  type: TempleDAppMessageType.PermissionResponse;
  pkh: string;
  publicKey: string;
  rpc: string;
}

export interface TempleDAppPermissionResponseV3 extends BlockchainMessage {
  type: TempleDAppMessageType.PermissionResponse;
  blockchainData: {
    appMetadata: AppMetadata;
    scopes: string[];
  };
}

export interface TempleDAppOperationRequest extends TempleDAppMessageBase {
  type: TempleDAppMessageType.OperationRequest;
  sourcePkh: string;
  opParams: any[];
}

export interface TempleDAppBlockchainRequestV3 extends BlockchainMessage {
  type: TempleDAppMessageType.BlockchainRequest;
  blockchainData: {
    type: TempleDAppMessageType.OperationRequest;
    scope: string;
    sourceAddress: string;
    amount: string;
    recipient: string;
    mode: 'submit' | 'submit-and-return' | 'return';
    ticketer: string;
    data: string;
    options: {
      nonce?: number;
      level?: number;
    }
  };
}

export interface TempleDAppBlockchainResponseV3 extends TempleDAppMessageBase {
  type: TempleDAppMessageType.BlockchainResponse;
  transactionHash: string;
  signature?: string;
  payload?: string;
}

export interface TempleDAppOperationResponse extends TempleDAppMessageBase {
  type: TempleDAppMessageType.OperationResponse;
  opHash: string;
}

export interface TempleDAppSignRequest extends TempleDAppMessageBase {
  type: TempleDAppMessageType.SignRequest;
  sourcePkh: string;
  payload: string;
}

export interface TempleDAppSignResponse extends TempleDAppMessageBase {
  type: TempleDAppMessageType.SignResponse;
  signature: string;
}

export interface TempleDAppBroadcastRequest extends TempleDAppMessageBase {
  type: TempleDAppMessageType.BroadcastRequest;
  signedOpBytes: string;
}

export interface TempleDAppBroadcastResponse extends TempleDAppMessageBase {
  type: TempleDAppMessageType.BroadcastResponse;
  opHash: string;
}

/**
 * Errors
 */
export enum TempleDAppErrorType {
  NotGranted = "NOT_GRANTED",
  NotFound = "NOT_FOUND",
  InvalidParams = "INVALID_PARAMS",
  TezosOperation = "TEZOS_OPERATION",
  BlockchainOperation = "BLOCKCHAIN_OPERATION",
}

/**
 * Misc
 */

export type TempleDAppPermission = {
  rpc: string;
  pkh: string;
  publicKey: string;
} | null;

export type TempleDAppNetwork = { name: string; rpcUrl: string; type?: string };

export interface TempleDAppMetadata {
  name: string;
}

export interface TemplePageMessage {
  type: TemplePageMessageType;
  payload: any;
  reqId?: string | number;
}

export enum TemplePageMessageType {
  Request = "TEMPLE_PAGE_REQUEST",
  Response = "TEMPLE_PAGE_RESPONSE",
  ErrorResponse = "TEMPLE_PAGE_ERROR_RESPONSE",
}
