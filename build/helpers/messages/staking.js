"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildMsgUndelegate = exports.BuildMsgEditValidator = exports.BuildMsgDelegate = exports.BuildMsgCreateValidator = exports.BuildMsgBeginRedelegate = void 0;
const tx_registry_1 = require("../../codegen/cosmos/staking/v1beta1/tx.registry");
const { beginRedelegate, createValidator, delegate, editValidator, undelegate } = tx_registry_1.MessageComposer.withTypeUrl;
const BuildMsgBeginRedelegate = (delegatorAddress, validatorSrcAddress, validatorDstAddress, amount) => {
    const value = {
        delegatorAddress,
        validatorSrcAddress,
        validatorDstAddress,
        amount,
    };
    return beginRedelegate(value);
};
exports.BuildMsgBeginRedelegate = BuildMsgBeginRedelegate;
const BuildMsgCreateValidator = (validatorAddress, delegatorAddress, minSelfDelegation, commission, description, amountValue, pubkey) => {
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
exports.BuildMsgCreateValidator = BuildMsgCreateValidator;
const BuildMsgDelegate = (delegatorAddress, validatorAddress, amount) => {
    const value = {
        delegatorAddress,
        validatorAddress,
        amount,
    };
    return delegate(value);
};
exports.BuildMsgDelegate = BuildMsgDelegate;
const BuildMsgEditValidator = (validatorAddress, commissionRate, minSelfDelegation, description) => {
    const value = {
        validatorAddress,
        commissionRate,
        minSelfDelegation,
        description,
    };
    return editValidator(value);
};
exports.BuildMsgEditValidator = BuildMsgEditValidator;
const BuildMsgUndelegate = (delegatorAddress, validatorAddress, amount) => {
    const value = {
        delegatorAddress,
        validatorAddress,
        amount,
    };
    return undelegate(value);
};
exports.BuildMsgUndelegate = BuildMsgUndelegate;
//# sourceMappingURL=staking.js.map