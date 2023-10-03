import Long from 'long';

import { Message, Coin } from '../types';
import { registry, MessageComposer } from '../../codegen/cosmos/vesting/v1beta1/tx.registry';
import { MsgCreatePeriodicVestingAccount, MsgCreatePermanentLockedAccount, MsgCreateVestingAccount } from '../../codegen/cosmos/vesting/v1beta1/tx';
import { Period } from '../../codegen/cosmos/vesting/v1beta1/vesting';

const { createVestingAccount, createPermanentLockedAccount, createPeriodicVestingAccount } = MessageComposer.withTypeUrl;

export const BuildMsgCreateVestingAccount = (fromAddress: string, toAddress: string, amount: Coin[], endTime: Long, delayed: boolean): Message => {
    const value: MsgCreateVestingAccount = {
        fromAddress,
        toAddress,
        amount,
        endTime,
        delayed,
    };
    return createVestingAccount(value);
};

export const BuildMsgCreatePermanentLock = (fromAddress: string, toAddress: string, amount: Coin[]): Message => {
    const value: MsgCreatePermanentLockedAccount = {
        fromAddress,
        toAddress,
        amount,
    };
    return createPermanentLockedAccount(value);
};

export const BuildMsgCreatePeriodicVestingAccount = (fromAddress: string, toAddress: string, amount: Coin[], startTime: Long, vestingPeriods: Period[]): Message => {
    const value: MsgCreatePeriodicVestingAccount = {
        fromAddress,
        toAddress,
        startTime,
        vestingPeriods,
    };
    return createPeriodicVestingAccount(value);
};

const vestingMsgUrl: { [key: string]: string } = {};

registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    vestingMsgUrl[msgType] = url;
});

export { vestingMsgUrl };
