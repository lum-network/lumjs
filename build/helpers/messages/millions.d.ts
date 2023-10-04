import Long from 'long';
import { Message, Coin } from '../types';
export declare const BuildMsgMillionsDeposit: (poolId: Long, depositorAddress: string, winnerAddress: string, isSponsor: boolean, amount?: Coin) => Message;
export declare const BuildMsgDepositEdit: (poolId: Long, depositId: Long, winnerAddress: string, isSponsor: boolean, depositorAddress: string) => Message;
export declare const BuildMsgDepositRetry: (poolId: Long, depositId: Long, depositorAddress: string) => Message;
export declare const BuildMsgClaimPrize: (poolId: Long, drawId: Long, prizeId: Long, winnerAddress: string) => Message;
export declare const BuildMsgDrawRetry: (poolId: Long, drawId: Long, drawRetryAddress: string) => Message;
export declare const BuildMsgWithdrawDeposit: (poolId: Long, depositId: Long, depositorAddress: string, toAddress: string) => Message;
export declare const BuildMsgWithdrawDepositRetry: (poolId: Long, withdrawalId: Long, depositorAddress: string) => Message;
export declare const BuildMsgRestoreInterchainAccounts: (poolId: Long, restorerAddress: string) => Message;
export declare const BuildMsgGenerateSeed: (requesterAddress: string) => Message;
declare const millionsMsgUrl: {
    [key: string]: string;
};
export { millionsMsgUrl };
