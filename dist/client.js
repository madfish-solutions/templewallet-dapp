"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidParamsThanosWalletError = exports.NotFoundThanosWalletError = exports.NotGrantedThanosWalletError = exports.ThanosWalletError = exports.requestBroadcast = exports.requestSign = exports.requestOperation = exports.requestPermission = exports.onAvailabilityChange = exports.isAvailable = void 0;
const nanoid_1 = require("nanoid");
const types_1 = require("./types");
function isAvailable() {
    return new Promise((resolve) => {
        const handleMessage = (evt) => {
            if (evt.source === window &&
                evt.data?.type === types_1.ThanosPageMessageType.Response &&
                evt.data?.payload === "PONG") {
                done(true);
            }
        };
        const done = (result) => {
            resolve(result);
            window.removeEventListener("message", handleMessage);
            clearTimeout(t);
        };
        send({
            type: types_1.ThanosPageMessageType.Request,
            payload: "PING",
        });
        window.addEventListener("message", handleMessage);
        const t = setTimeout(() => done(false), 500);
    });
}
exports.isAvailable = isAvailable;
function onAvailabilityChange(callback) {
    let t;
    let currentStatus = false;
    const check = async (attempt = 0) => {
        const initial = attempt < 5;
        const available = await isAvailable();
        if (currentStatus !== available) {
            callback(available);
            currentStatus = available;
        }
        t = setTimeout(check, available ? 10000 : !initial ? 5000 : 0, initial ? attempt + 1 : attempt);
    };
    check();
    return () => clearTimeout(t);
}
exports.onAvailabilityChange = onAvailabilityChange;
async function requestPermission(network, appMeta, force) {
    const res = await request({
        type: types_1.ThanosDAppMessageType.PermissionRequest,
        network,
        appMeta,
        force,
    });
    assertResponse(res.type === types_1.ThanosDAppMessageType.PermissionResponse);
    return { pkh: res.pkh, rpc: res.rpc };
}
exports.requestPermission = requestPermission;
async function requestOperation(sourcePkh, opParams) {
    const res = await request({
        type: types_1.ThanosDAppMessageType.OperationRequest,
        sourcePkh,
        opParams,
    });
    assertResponse(res.type === types_1.ThanosDAppMessageType.OperationResponse);
    return res.opHash;
}
exports.requestOperation = requestOperation;
async function requestSign(sourcePkh, payload) {
    const res = await request({
        type: types_1.ThanosDAppMessageType.SignRequest,
        sourcePkh,
        payload,
    });
    assertResponse(res.type === types_1.ThanosDAppMessageType.SignResponse);
    return res.signature;
}
exports.requestSign = requestSign;
async function requestBroadcast(signedOpBytes) {
    const res = await request({
        type: types_1.ThanosDAppMessageType.BroadcastRequest,
        signedOpBytes,
    });
    assertResponse(res.type === types_1.ThanosDAppMessageType.BroadcastResponse);
    return res.opHash;
}
exports.requestBroadcast = requestBroadcast;
function request(payload) {
    return new Promise((resolve, reject) => {
        const reqId = nanoid_1.nanoid();
        const handleMessage = (evt) => {
            const res = evt.data;
            switch (true) {
                case evt.source !== window || res?.reqId !== reqId:
                    return;
                case res?.type === types_1.ThanosPageMessageType.Response:
                    resolve(res.payload);
                    window.removeEventListener("message", handleMessage);
                    break;
                case res?.type === types_1.ThanosPageMessageType.ErrorResponse:
                    reject(createError(res.payload));
                    window.removeEventListener("message", handleMessage);
                    break;
            }
        };
        send({
            type: types_1.ThanosPageMessageType.Request,
            payload,
            reqId,
        });
        window.addEventListener("message", handleMessage);
    });
}
function createError(payload) {
    switch (true) {
        case payload === types_1.ThanosDAppErrorType.NotGranted:
            return new NotGrantedThanosWalletError();
        case payload === types_1.ThanosDAppErrorType.NotFound:
            return new NotFoundThanosWalletError();
        case payload === types_1.ThanosDAppErrorType.InvalidParams:
            return new InvalidParamsThanosWalletError();
        case payload?.startsWith("__tezos__"):
            return new Error(payload.replace("__tezos__", ""));
        default:
            return new ThanosWalletError();
    }
}
function assertResponse(condition) {
    if (!condition) {
        throw new Error("Invalid response recieved");
    }
}
function send(msg) {
    window.postMessage(msg, "*");
}
class ThanosWalletError {
    constructor() {
        this.name = "ThanosWalletError";
        this.message = "An unknown error occured. Please try again or report it";
    }
}
exports.ThanosWalletError = ThanosWalletError;
class NotGrantedThanosWalletError extends ThanosWalletError {
    constructor() {
        super(...arguments);
        this.name = "NotGrantedThanosWalletError";
        this.message = "Permission Not Granted";
    }
}
exports.NotGrantedThanosWalletError = NotGrantedThanosWalletError;
class NotFoundThanosWalletError extends ThanosWalletError {
    constructor() {
        super(...arguments);
        this.name = "NotFoundThanosWalletError";
        this.message = "Account Not Found. Try connect again";
    }
}
exports.NotFoundThanosWalletError = NotFoundThanosWalletError;
class InvalidParamsThanosWalletError extends ThanosWalletError {
    constructor() {
        super(...arguments);
        this.name = "InvalidParamsThanosWalletError";
        this.message = "Some of the parameters you provided are invalid";
    }
}
exports.InvalidParamsThanosWalletError = InvalidParamsThanosWalletError;
//# sourceMappingURL=client.js.map