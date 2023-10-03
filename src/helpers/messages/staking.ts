import { Any } from '../../codegen/google/protobuf/any';
import { Coin, Description, CommissionRates, Message } from '../types';
import { MsgBeginRedelegate, MsgCreateValidator, MsgDelegate, MsgEditValidator, MsgUndelegate } from '../../codegen/cosmos/staking/v1beta1/tx';
import { registry, MessageComposer } from '../../codegen/cosmos/staking/v1beta1/tx.registry';

const { beginRedelegate, createValidator, delegate, editValidator, undelegate } = MessageComposer.withTypeUrl;

export const BuildMsgBeginRedelegate = (delegatorAddress: string, validatorSrcAddress: string, validatorDstAddress: string, amount?: Coin): Message => {
    const value: MsgBeginRedelegate = {
        delegatorAddress,
        validatorSrcAddress,
        validatorDstAddress,
        amount,
    };
    return beginRedelegate(value);
};

export const BuildMsgCreateValidator = (
    validatorAddress: string,
    delegatorAddress: string,
    minSelfDelegation: string,
    commission?: CommissionRates,
    description?: Description,
    amountValue?: Coin,
    pubkey?: Any,
): Message => {
    const value: MsgCreateValidator = {
        description,
        commission,
        minSelfDelegation,
        delegatorAddress,
        validatorAddress,
        pubkey,
        value: amountValue,
    };
    return createValidator(value);
};

export const BuildMsgDelegate = (delegatorAddress: string, validatorAddress: string, amount?: Coin): Message => {
    const value: MsgDelegate = {
        delegatorAddress,
        validatorAddress,
        amount,
    };
    return delegate(value);
};

export const BuildMsgEditValidator = (validatorAddress: string, commissionRate: string, minSelfDelegation: string, description?: Description): Message => {
    const value: MsgEditValidator = {
        validatorAddress,
        commissionRate,
        minSelfDelegation,
        description,
    };
    return editValidator(value);
};

export const BuildMsgUndelegate = (delegatorAddress: string, validatorAddress: string, amount?: Coin): Message => {
    const value: MsgUndelegate = {
        delegatorAddress,
        validatorAddress,
        amount,
    };
    return undelegate(value);
};

const stakingMsgUrl: { [key: string]: string } = {};

registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    stakingMsgUrl[msgType] = url;
});

export { stakingMsgUrl };
