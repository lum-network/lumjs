import Long from 'long';
import { Message, Coin } from '../types';
import { Period } from '../../codegen/cosmos/vesting/v1beta1/vesting';
export declare const BuildMsgCreateVestingAccount: (fromAddress: string, toAddress: string, amount: Coin[], endTime: Long, delayed: boolean) => Message;
export declare const BuildMsgCreatePermanentLock: (fromAddress: string, toAddress: string, amount: Coin[]) => Message;
export declare const BuildMsgCreatePeriodicVestingAccount: (fromAddress: string, toAddress: string, amount: Coin[], startTime: Long, vestingPeriods: Period[]) => Message;
declare const vestingMsgUrl: {
    [key: string]: string;
};
export { vestingMsgUrl };
