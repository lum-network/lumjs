import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgDeposit, MsgDepositResponse, MsgWithdrawAndMint, MsgWithdrawAndMintResponse } from "./tx";
export interface Msg {
  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  withdrawAndMint(request: MsgWithdrawAndMint): Promise<MsgWithdrawAndMintResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.deposit = this.deposit.bind(this);
    this.withdrawAndMint = this.withdrawAndMint.bind(this);
  }
  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("lum.network.dfract.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }
  withdrawAndMint(request: MsgWithdrawAndMint): Promise<MsgWithdrawAndMintResponse> {
    const data = MsgWithdrawAndMint.encode(request).finish();
    const promise = this.rpc.request("lum.network.dfract.Msg", "WithdrawAndMint", data);
    return promise.then(data => MsgWithdrawAndMintResponse.decode(new _m0.Reader(data)));
  }
}