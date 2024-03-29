import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
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
  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new BinaryReader(data)));
  }
  depositRetry(request: MsgDepositRetry): Promise<MsgDepositRetryResponse> {
    const data = MsgDepositRetry.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Msg", "DepositRetry", data);
    return promise.then(data => MsgDepositRetryResponse.decode(new BinaryReader(data)));
  }
  depositEdit(request: MsgDepositEdit): Promise<MsgDepositEditResponse> {
    const data = MsgDepositEdit.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Msg", "DepositEdit", data);
    return promise.then(data => MsgDepositEditResponse.decode(new BinaryReader(data)));
  }
  claimPrize(request: MsgClaimPrize): Promise<MsgClaimPrizeResponse> {
    const data = MsgClaimPrize.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Msg", "ClaimPrize", data);
    return promise.then(data => MsgClaimPrizeResponse.decode(new BinaryReader(data)));
  }
  withdrawDeposit(request: MsgWithdrawDeposit): Promise<MsgWithdrawDepositResponse> {
    const data = MsgWithdrawDeposit.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Msg", "WithdrawDeposit", data);
    return promise.then(data => MsgWithdrawDepositResponse.decode(new BinaryReader(data)));
  }
  withdrawDepositRetry(request: MsgWithdrawDepositRetry): Promise<MsgWithdrawDepositRetryResponse> {
    const data = MsgWithdrawDepositRetry.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Msg", "WithdrawDepositRetry", data);
    return promise.then(data => MsgWithdrawDepositRetryResponse.decode(new BinaryReader(data)));
  }
  drawRetry(request: MsgDrawRetry): Promise<MsgDrawRetryResponse> {
    const data = MsgDrawRetry.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Msg", "DrawRetry", data);
    return promise.then(data => MsgDrawRetryResponse.decode(new BinaryReader(data)));
  }
  restoreInterchainAccounts(request: MsgRestoreInterchainAccounts): Promise<MsgRestoreInterchainAccountsResponse> {
    const data = MsgRestoreInterchainAccounts.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Msg", "RestoreInterchainAccounts", data);
    return promise.then(data => MsgRestoreInterchainAccountsResponse.decode(new BinaryReader(data)));
  }
  generateSeed(request: MsgGenerateSeed): Promise<MsgGenerateSeedResponse> {
    const data = MsgGenerateSeed.encode(request).finish();
    const promise = this.rpc.request("lum.network.millions.Msg", "GenerateSeed", data);
    return promise.then(data => MsgGenerateSeedResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};