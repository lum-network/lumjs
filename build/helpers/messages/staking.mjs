import { registry, MessageComposer } from '../../codegen/cosmos/staking/v1beta1/tx.registry';
const { beginRedelegate, createValidator, delegate, editValidator, undelegate } = MessageComposer.withTypeUrl;
export const BuildMsgBeginRedelegate = (delegatorAddress, validatorSrcAddress, validatorDstAddress, amount) => {
    const value = {
        delegatorAddress,
        validatorSrcAddress,
        validatorDstAddress,
        amount,
    };
    return beginRedelegate(value);
};
export const BuildMsgCreateValidator = (validatorAddress, delegatorAddress, minSelfDelegation, commission, description, amountValue, pubkey) => {
    const value = {
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
export const BuildMsgDelegate = (delegatorAddress, validatorAddress, amount) => {
    const value = {
        delegatorAddress,
        validatorAddress,
        amount,
    };
    return delegate(value);
};
export const BuildMsgEditValidator = (validatorAddress, commissionRate, minSelfDelegation, description) => {
    const value = {
        validatorAddress,
        commissionRate,
        minSelfDelegation,
        description,
    };
    return editValidator(value);
};
export const BuildMsgUndelegate = (delegatorAddress, validatorAddress, amount) => {
    const value = {
        delegatorAddress,
        validatorAddress,
        amount,
    };
    return undelegate(value);
};
const stakingMsgUrl = {};
registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    stakingMsgUrl[msgType] = url;
});
export { stakingMsgUrl };
//# sourceMappingURL=staking.js.map