import { MessageComposer } from '../../codegen/cosmos/distribution/v1beta1/tx.registry';
import { MsgFundCommunityPool, MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission } from '../../codegen/cosmos/distribution/v1beta1/tx';
import { Message, Coin } from '../types';

const { fundCommunityPool, setWithdrawAddress, withdrawDelegatorReward, withdrawValidatorCommission } = MessageComposer.withTypeUrl;

export const BuildMsgFundCommunityPool = (depositor: string, amount: Coin[]): Message => {
    const value: MsgFundCommunityPool = {
        depositor,
        amount,
    };
    return fundCommunityPool(value);
};

export const BuildMsgSetWithdrawAddress = (delegatorAddress: string, withdrawAddress: string): Message => {
    const value: MsgSetWithdrawAddress = {
        delegatorAddress,
        withdrawAddress,
    };
    return setWithdrawAddress(value);
};

export const BuildMsgWithdrawDelegatorReward = (delegatorAddress: string, validatorAddress: string): Message => {
    const value: MsgWithdrawDelegatorReward = {
        delegatorAddress,
        validatorAddress,
    };
    return withdrawDelegatorReward(value);
};

export const BuildMsgWithdrawValidatorCommission = (validatorAddress: string): Message => {
    const value: MsgWithdrawValidatorCommission = {
        validatorAddress,
    };
    return withdrawValidatorCommission(value);
};
