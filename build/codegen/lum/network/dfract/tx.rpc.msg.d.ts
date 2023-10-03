import { Rpc } from "../../../helpers";
import { MsgDeposit, MsgDepositResponse, MsgWithdrawAndMint, MsgWithdrawAndMintResponse } from "./tx";
export interface Msg {
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    withdrawAndMint(request: MsgWithdrawAndMint): Promise<MsgWithdrawAndMintResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    withdrawAndMint(request: MsgWithdrawAndMint): Promise<MsgWithdrawAndMintResponse>;
}
