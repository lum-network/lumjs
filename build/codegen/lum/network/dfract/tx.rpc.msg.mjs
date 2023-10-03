import * as _m0 from "protobufjs/minimal";
import { MsgDeposit, MsgDepositResponse, MsgWithdrawAndMint, MsgWithdrawAndMintResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.deposit = this.deposit.bind(this);
        this.withdrawAndMint = this.withdrawAndMint.bind(this);
    }
    deposit(request) {
        const data = MsgDeposit.encode(request).finish();
        const promise = this.rpc.request("lum.network.dfract.Msg", "Deposit", data);
        return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
    }
    withdrawAndMint(request) {
        const data = MsgWithdrawAndMint.encode(request).finish();
        const promise = this.rpc.request("lum.network.dfract.Msg", "WithdrawAndMint", data);
        return promise.then(data => MsgWithdrawAndMintResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map