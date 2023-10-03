import * as _m0 from "protobufjs/minimal";
import { MsgDeposit, MsgDepositResponse, MsgDepositRetry, MsgDepositRetryResponse, MsgDepositEdit, MsgDepositEditResponse, MsgClaimPrize, MsgClaimPrizeResponse, MsgWithdrawDeposit, MsgWithdrawDepositResponse, MsgWithdrawDepositRetry, MsgWithdrawDepositRetryResponse, MsgDrawRetry, MsgDrawRetryResponse, MsgRestoreInterchainAccounts, MsgRestoreInterchainAccountsResponse, MsgGenerateSeed, MsgGenerateSeedResponse } from "./tx";
export class MsgClientImpl {
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
        const data = MsgDeposit.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "Deposit", data);
        return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
    }
    depositRetry(request) {
        const data = MsgDepositRetry.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "DepositRetry", data);
        return promise.then(data => MsgDepositRetryResponse.decode(new _m0.Reader(data)));
    }
    depositEdit(request) {
        const data = MsgDepositEdit.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "DepositEdit", data);
        return promise.then(data => MsgDepositEditResponse.decode(new _m0.Reader(data)));
    }
    claimPrize(request) {
        const data = MsgClaimPrize.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "ClaimPrize", data);
        return promise.then(data => MsgClaimPrizeResponse.decode(new _m0.Reader(data)));
    }
    withdrawDeposit(request) {
        const data = MsgWithdrawDeposit.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "WithdrawDeposit", data);
        return promise.then(data => MsgWithdrawDepositResponse.decode(new _m0.Reader(data)));
    }
    withdrawDepositRetry(request) {
        const data = MsgWithdrawDepositRetry.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "WithdrawDepositRetry", data);
        return promise.then(data => MsgWithdrawDepositRetryResponse.decode(new _m0.Reader(data)));
    }
    drawRetry(request) {
        const data = MsgDrawRetry.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "DrawRetry", data);
        return promise.then(data => MsgDrawRetryResponse.decode(new _m0.Reader(data)));
    }
    restoreInterchainAccounts(request) {
        const data = MsgRestoreInterchainAccounts.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "RestoreInterchainAccounts", data);
        return promise.then(data => MsgRestoreInterchainAccountsResponse.decode(new _m0.Reader(data)));
    }
    generateSeed(request) {
        const data = MsgGenerateSeed.encode(request).finish();
        const promise = this.rpc.request("lum.network.millions.Msg", "GenerateSeed", data);
        return promise.then(data => MsgGenerateSeedResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map