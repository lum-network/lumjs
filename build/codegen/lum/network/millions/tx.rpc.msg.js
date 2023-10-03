"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.deposit = this.deposit.bind(this);
        this.depositRetry = this.depositRetry.bind(this);
        this.depositEdit = this.depositEdit.bind(this);
        this.claimPrize = this.claimPrize.bind(this);
        this.withdrawDeposit = this.withdrawDeposit.bind(this);
        this.withdrawDepositRetry = this.withdrawDepositRetry.bind(this);
        this.drawRetry = this.drawRetry.bind(this);
        this.restoreInterchainAccounts = this.restoreInterchainAccounts.bind(this);
        this.generateSeed = this.generateSeed.bind(this);
    }
    deposit(request) {
        const data = tx_1.MsgDeposit.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "Deposit", data);
        return promise.then(data => tx_1.MsgDepositResponse.decode(new _m0.Reader(data)));
    }
    depositRetry(request) {
        const data = tx_1.MsgDepositRetry.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "DepositRetry", data);
        return promise.then(data => tx_1.MsgDepositRetryResponse.decode(new _m0.Reader(data)));
    }
    depositEdit(request) {
        const data = tx_1.MsgDepositEdit.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "DepositEdit", data);
        return promise.then(data => tx_1.MsgDepositEditResponse.decode(new _m0.Reader(data)));
    }
    claimPrize(request) {
        const data = tx_1.MsgClaimPrize.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "ClaimPrize", data);
        return promise.then(data => tx_1.MsgClaimPrizeResponse.decode(new _m0.Reader(data)));
    }
    withdrawDeposit(request) {
        const data = tx_1.MsgWithdrawDeposit.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "WithdrawDeposit", data);
        return promise.then(data => tx_1.MsgWithdrawDepositResponse.decode(new _m0.Reader(data)));
    }
    withdrawDepositRetry(request) {
        const data = tx_1.MsgWithdrawDepositRetry.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "WithdrawDepositRetry", data);
        return promise.then(data => tx_1.MsgWithdrawDepositRetryResponse.decode(new _m0.Reader(data)));
    }
    drawRetry(request) {
        const data = tx_1.MsgDrawRetry.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "DrawRetry", data);
        return promise.then(data => tx_1.MsgDrawRetryResponse.decode(new _m0.Reader(data)));
    }
    restoreInterchainAccounts(request) {
        const data = tx_1.MsgRestoreInterchainAccounts.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "RestoreInterchainAccounts", data);
        return promise.then(data => tx_1.MsgRestoreInterchainAccountsResponse.decode(new _m0.Reader(data)));
    }
    generateSeed(request) {
        const data = tx_1.MsgGenerateSeed.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "GenerateSeed", data);
        return promise.then(data => tx_1.MsgGenerateSeedResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map