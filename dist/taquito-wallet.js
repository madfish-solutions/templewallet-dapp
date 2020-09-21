"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotConnectedThanosWalletError = exports.ThanosWallet = void 0;
const taquito_1 = require("@taquito/taquito");
const client_1 = require("./client");
class ThanosWallet {
    constructor(appName) {
        this.appName = appName;
    }
    get connected() {
        return Boolean(this.pkh);
    }
    toTezos() {
        assertConnected(this.pkh);
        const tezos = new taquito_1.TezosToolkit();
        tezos.setProvider({ wallet: this, rpc: this.rpc });
        return tezos;
    }
    async connect(network, opts = { forcePermission: false }) {
        const { pkh, rpc } = await client_1.requestPermission(network, { name: this.appName }, opts.forcePermission);
        this.pkh = pkh;
        this.rpc = rpc;
    }
    async getPKH() {
        assertConnected(this.pkh);
        return this.pkh;
    }
    async mapTransferParamsToWalletParams(params) {
        return taquito_1.createTransferOperation(params);
    }
    async mapOriginateParamsToWalletParams(params) {
        return taquito_1.createOriginationOperation(params);
    }
    async mapDelegateParamsToWalletParams(params) {
        return taquito_1.createSetDelegateOperation(params);
    }
    async sendOperations(opParams) {
        assertConnected(this.pkh);
        return client_1.requestOperation(this.pkh, opParams.map(formatOpParams));
    }
    async sign(payload) {
        assertConnected(this.pkh);
        return client_1.requestSign(this.pkh, payload);
    }
    async broadcast(signedOpBytes) {
        assertConnected(this.pkh);
        return client_1.requestBroadcast(signedOpBytes);
    }
}
exports.ThanosWallet = ThanosWallet;
ThanosWallet.isAvailable = client_1.isAvailable;
ThanosWallet.onAvailabilityChange = client_1.onAvailabilityChange;
class NotConnectedThanosWalletError extends client_1.ThanosWalletError {
    constructor() {
        super(...arguments);
        this.name = "ThanosWalletNotConnected";
        this.message = "You need to connect ThanosWallet by calling thanosWallet.connect() first";
    }
}
exports.NotConnectedThanosWalletError = NotConnectedThanosWalletError;
function assertConnected(pkh) {
    if (!pkh) {
        throw new NotConnectedThanosWalletError();
    }
}
function formatOpParams(op) {
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
//# sourceMappingURL=taquito-wallet.js.map