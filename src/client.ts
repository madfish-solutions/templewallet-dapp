import { nanoid } from "nanoid";
import {
  ThanosPageMessageType,
  ThanosPageMessage,
  ThanosDAppMessageType,
  ThanosDAppRequest,
  ThanosDAppResponse,
  ThanosDAppErrorType,
  ThanosDAppNetwork,
  ThanosDAppMetadata,
} from "./types";

export function isAvailable() {
  return new Promise<boolean>((resolve) => {
    const handleMessage = (evt: MessageEvent) => {
      if (
        evt.source === window &&
        evt.data?.type === ThanosPageMessageType.Response &&
        evt.data?.payload === "PONG"
      ) {
        done(true);
      }
    };

    const done = (result: boolean) => {
      resolve(result);
      window.removeEventListener("message", handleMessage);
      clearTimeout(t);
    };

    send({
      type: ThanosPageMessageType.Request,
      payload: "PING",
    });
    window.addEventListener("message", handleMessage);
    const t = setTimeout(() => done(false), 100);
  });
}

export function onAvailabilityChange(callback: (available: boolean) => void) {
  let t: any;
  let currentStatus = false;
  const check = async (attempt = 0) => {
    const initial = attempt < 5;
    const available = await isAvailable();
    if (currentStatus !== available) {
      callback(available);
      currentStatus = available;
    }
    t = setTimeout(
      check,
      available ? 10_000 : !initial ? 5_000 : 250,
      initial ? attempt + 1 : attempt
    );
  };
  check();
  return () => clearTimeout(t);
}

export async function requestPermission(
  network: ThanosDAppNetwork,
  appMeta: ThanosDAppMetadata,
  force: boolean
) {
  const res = await request({
    type: ThanosDAppMessageType.PermissionRequest,
    network,
    appMeta,
    force,
  });
  assertResponse(res.type === ThanosDAppMessageType.PermissionResponse);
  return { pkh: res.pkh, rpc: res.rpc };
}

export async function requestOperation(sourcePkh: string, opParams: any) {
  const res = await request({
    type: ThanosDAppMessageType.OperationRequest,
    sourcePkh,
    opParams,
  });
  assertResponse(res.type === ThanosDAppMessageType.OperationResponse);
  return res.opHash;
}

function request(payload: ThanosDAppRequest) {
  return new Promise<ThanosDAppResponse>((resolve, reject) => {
    const reqId = nanoid();
    const handleMessage = (evt: MessageEvent) => {
      const res = evt.data as ThanosPageMessage;
      switch (true) {
        case evt.source !== window || res?.reqId !== reqId:
          return;

        case res?.type === ThanosPageMessageType.Response:
          resolve(res.payload);
          window.removeEventListener("message", handleMessage);
          break;

        case res?.type === ThanosPageMessageType.ErrorResponse:
          reject(createError(res.payload));
          window.removeEventListener("message", handleMessage);
          break;
      }
    };

    send({
      type: ThanosPageMessageType.Request,
      payload,
      reqId,
    });

    window.addEventListener("message", handleMessage);
  });
}

function createError(payload: any) {
  switch (true) {
    case payload === ThanosDAppErrorType.NotGranted:
      return new NotGrantedThanosWalletError();

    case payload === ThanosDAppErrorType.NotFound:
      return new NotFoundThanosWalletError();

    case payload === ThanosDAppErrorType.InvalidParams:
      return new InvalidParamsThanosWalletError();

    case payload?.startsWith("__tezos__"):
      return new Error(payload.replace("__tezos__", ""));

    default:
      return new ThanosWalletError();
  }
}

function assertResponse(condition: any): asserts condition {
  if (!condition) {
    throw new Error("Invalid response recieved");
  }
}

function send(msg: ThanosPageMessage) {
  window.postMessage(msg, "*");
}

export class ThanosWalletError implements Error {
  name = "ThanosWalletError";
  message = "An unknown error occured. Please try again or report it";
}

export class NotGrantedThanosWalletError extends ThanosWalletError {
  name = "NotGrantedThanosWalletError";
  message = "Permission Not Granted";
}

export class NotFoundThanosWalletError extends ThanosWalletError {
  name = "NotFoundThanosWalletError";
  message = "Account Not Found. Try connect again";
}

export class InvalidParamsThanosWalletError extends ThanosWalletError {
  name = "InvalidParamsThanosWalletError";
  message = "Some of the parameters you provided are invalid";
}
