import Long from 'long';

import { Message, Coin } from '../types';
import { BoolValue } from '../../codegen/google/protobuf/wrappers';
import {
    MsgDeposit,
    MsgDepositEdit,
    MsgClaimPrize,
    MsgDepositRetry,
    MsgDrawRetry,
    MsgWithdrawDeposit,
    MsgWithdrawDepositRetry,
    MsgRestoreInterchainAccounts,
    MsgGenerateSeed,
} from '../../codegen/lum/network/millions/tx';
import { registry, MessageComposer } from '../../codegen/lum/network/millions/tx.registry';

const { deposit, depositEdit, depositRetry, claimPrize, drawRetry, withdrawDeposit, withdrawDepositRetry, restoreInterchainAccounts, generateSeed } = MessageComposer.withTypeUrl;

export const BuildMsgMillionsDeposit = (poolId: Long, depositorAddress: string, winnerAddress: string, isSponsor: boolean, amount?: Coin): Message => {
    const value: MsgDeposit = {
        poolId,
        amount,
        depositorAddress,
        winnerAddress,
        isSponsor,
    };
    return deposit(value);
};

export const BuildMsgDepositEdit = (poolId: Long, depositId: Long, winnerAddress: string, isSponsor: boolean, depositorAddress: string): Message => {
    const isSponsorValue: BoolValue = {
        value: isSponsor,
    };
    const value: MsgDepositEdit = {
        poolId,
        depositId,
        winnerAddress,
        isSponsor: isSponsorValue,
        depositorAddress,
    };
    return depositEdit(value);
};

export const BuildMsgDepositRetry = (poolId: Long, depositId: Long, depositorAddress: string): Message => {
    const value: MsgDepositRetry = {
        poolId,
        depositId,
        depositorAddress,
    };
    return depositRetry(value);
};

export const BuildMsgClaimPrize = (poolId: Long, drawId: Long, prizeId: Long, winnerAddress: string): Message => {
    const value: MsgClaimPrize = {
        poolId,
        drawId,
        prizeId,
        winnerAddress,
    };
    return claimPrize(value);
};

export const BuildMsgDrawRetry = (poolId: Long, drawId: Long, drawRetryAddress: string): Message => {
    const value: MsgDrawRetry = {
        poolId,
        drawId,
        drawRetryAddress,
    };
    return drawRetry(value);
};

export const BuildMsgWithdrawDeposit = (poolId: Long, depositId: Long, depositorAddress: string, toAddress: string): Message => {
    const value: MsgWithdrawDeposit = {
        poolId,
        depositId,
        depositorAddress,
        toAddress,
    };
    return withdrawDeposit(value);
};

export const BuildMsgWithdrawDepositRetry = (poolId: Long, withdrawalId: Long, depositorAddress: string): Message => {
    const value: MsgWithdrawDepositRetry = {
        poolId,
        withdrawalId,
        depositorAddress,
    };
    return withdrawDepositRetry(value);
};

export const BuildMsgRestoreInterchainAccounts = (poolId: Long, restorerAddress: string): Message => {
    const value: MsgRestoreInterchainAccounts = {
        poolId,
        restorerAddress,
    };
    return restoreInterchainAccounts(value);
};

export const BuildMsgGenerateSeed = (requesterAddress: string): Message => {
    const value: MsgGenerateSeed = {
        requesterAddress,
    };
    return generateSeed(value);
};

const millionsMsgUrl: { [key: string]: string } = {};

registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    millionsMsgUrl[msgType] = url;
});

export { millionsMsgUrl };
