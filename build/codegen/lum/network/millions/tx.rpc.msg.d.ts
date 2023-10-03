import { Rpc } from "../../../helpers";
import { MsgDeposit, MsgDepositResponse, MsgDepositRetry, MsgDepositRetryResponse, MsgDepositEdit, MsgDepositEditResponse, MsgClaimPrize, MsgClaimPrizeResponse, MsgWithdrawDeposit, MsgWithdrawDepositResponse, MsgWithdrawDepositRetry, MsgWithdrawDepositRetryResponse, MsgDrawRetry, MsgDrawRetryResponse, MsgRestoreInterchainAccounts, MsgRestoreInterchainAccountsResponse, MsgGenerateSeed, MsgGenerateSeedResponse } from "./tx";
export interface Msg {
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    depositRetry(request: MsgDepositRetry): Promise<MsgDepositRetryResponse>;
    depositEdit(request: MsgDepositEdit): Promise<MsgDepositEditResponse>;
    claimPrize(request: MsgClaimPrize): Promise<MsgClaimPrizeResponse>;
    withdrawDeposit(request: MsgWithdrawDeposit): Promise<MsgWithdrawDepositResponse>;
    withdrawDepositRetry(request: MsgWithdrawDepositRetry): Promise<MsgWithdrawDepositRetryResponse>;
    drawRetry(request: MsgDrawRetry): Promise<MsgDrawRetryResponse>;
    restoreInterchainAccounts(request: MsgRestoreInterchainAccounts): Promise<MsgRestoreInterchainAccountsResponse>;
    generateSeed(request: MsgGenerateSeed): Promise<MsgGenerateSeedResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    depositRetry(request: MsgDepositRetry): Promise<MsgDepositRetryResponse>;
    depositEdit(request: MsgDepositEdit): Promise<MsgDepositEditResponse>;
    claimPrize(request: MsgClaimPrize): Promise<MsgClaimPrizeResponse>;
    withdrawDeposit(request: MsgWithdrawDeposit): Promise<MsgWithdrawDepositResponse>;
    withdrawDepositRetry(request: MsgWithdrawDepositRetry): Promise<MsgWithdrawDepositRetryResponse>;
    drawRetry(request: MsgDrawRetry): Promise<MsgDrawRetryResponse>;
    restoreInterchainAccounts(request: MsgRestoreInterchainAccounts): Promise<MsgRestoreInterchainAccountsResponse>;
    generateSeed(request: MsgGenerateSeed): Promise<MsgGenerateSeedResponse>;
}
