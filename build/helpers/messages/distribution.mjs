import { MessageComposer } from '../../codegen/cosmos/distribution/v1beta1/tx.registry';
const { fundCommunityPool, setWithdrawAddress, withdrawDelegatorReward, withdrawValidatorCommission } = MessageComposer.withTypeUrl;
export const BuildMsgFundCommunityPool = (depositor, amount) => {
    const value = {
        depositor,
        amount,
    };
    return fundCommunityPool(value);
};
export const BuildMsgSetWithdrawAddress = (delegatorAddress, withdrawAddress) => {
    const value = {
        delegatorAddress,
        withdrawAddress,
    };
    return setWithdrawAddress(value);
};
export const BuildMsgWithdrawDelegatorReward = (delegatorAddress, validatorAddress) => {
    const value = {
        delegatorAddress,
        validatorAddress,
    };
    return withdrawDelegatorReward(value);
};
export const BuildMsgWithdrawValidatorCommission = (validatorAddress) => {
    const value = {
        validatorAddress,
    };
    return withdrawValidatorCommission(value);
};
//# sourceMappingURL=distribution.js.map