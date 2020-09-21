"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThanosPageMessageType = exports.ThanosDAppErrorType = exports.ThanosDAppMessageType = void 0;
var ThanosDAppMessageType;
(function (ThanosDAppMessageType) {
    ThanosDAppMessageType["PermissionRequest"] = "PERMISSION_REQUEST";
    ThanosDAppMessageType["PermissionResponse"] = "PERMISSION_RESPONSE";
    ThanosDAppMessageType["OperationRequest"] = "OPERATION_REQUEST";
    ThanosDAppMessageType["OperationResponse"] = "OPERATION_RESPONSE";
    ThanosDAppMessageType["SignRequest"] = "SIGN_REQUEST";
    ThanosDAppMessageType["SignResponse"] = "SIGN_RESPONSE";
    ThanosDAppMessageType["BroadcastRequest"] = "BROADCAST_REQUEST";
    ThanosDAppMessageType["BroadcastResponse"] = "BROADCAST_RESPONSE";
})(ThanosDAppMessageType = exports.ThanosDAppMessageType || (exports.ThanosDAppMessageType = {}));
var ThanosDAppErrorType;
(function (ThanosDAppErrorType) {
    ThanosDAppErrorType["NotGranted"] = "NOT_GRANTED";
    ThanosDAppErrorType["NotFound"] = "NOT_FOUND";
    ThanosDAppErrorType["InvalidParams"] = "INVALID_PARAMS";
})(ThanosDAppErrorType = exports.ThanosDAppErrorType || (exports.ThanosDAppErrorType = {}));
var ThanosPageMessageType;
(function (ThanosPageMessageType) {
    ThanosPageMessageType["Request"] = "THANOS_PAGE_REQUEST";
    ThanosPageMessageType["Response"] = "THANOS_PAGE_RESPONSE";
    ThanosPageMessageType["ErrorResponse"] = "THANOS_PAGE_ERROR_RESPONSE";
})(ThanosPageMessageType = exports.ThanosPageMessageType || (exports.ThanosPageMessageType = {}));
//# sourceMappingURL=types.js.map