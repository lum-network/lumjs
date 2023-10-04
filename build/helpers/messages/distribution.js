"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distributionMsgUrl = exports.BuildMsgWithdrawValidatorCommission = exports.BuildMsgWithdrawDelegatorReward = exports.BuildMsgSetWithdrawAddress = exports.BuildMsgFundCommunityPool = void 0;
const tx_registry_1 = require("../../codegen/cosmos/distribution/v1beta1/tx.registry");
const { fundCommunityPool, setWithdrawAddress, withdrawDelegatorReward, withdrawValidatorCommission } = tx_registry_1.MessageComposer.withTypeUrl;
const BuildMsgFundCommunityPool = (depositor, amount) => {
    const value = {
        depositor,
        amount,
    };
    return fundCommunityPool(value);
};
exports.BuildMsgFundCommunityPool = BuildMsgFundCommunityPool;
const BuildMsgSetWithdrawAddress = (delegatorAddress, withdrawAddress) => {
    const value = {
        delegatorAddress,
        withdrawAddress,
    };
    return setWithdrawAddress(value);
};
exports.BuildMsgSetWithdrawAddress = BuildMsgSetWithdrawAddress;
const BuildMsgWithdrawDelegatorReward = (delegatorAddress, validatorAddress) => {
    const value = {
        delegatorAddress,
        validatorAddress,
    };
    return withdrawDelegatorReward(value);
};
exports.BuildMsgWithdrawDelegatorReward = BuildMsgWithdrawDelegatorReward;
const BuildMsgWithdrawValidatorCommission = (validatorAddress) => {
    const value = {
        validatorAddress,
    };
    return withdrawValidatorCommission(value);
};
exports.BuildMsgWithdrawValidatorCommission = BuildMsgWithdrawValidatorCommission;
const distributionMsgUrl = {};
exports.distributionMsgUrl = distributionMsgUrl;
tx_registry_1.registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    distributionMsgUrl[msgType] = url;
});
//# sourceMappingURL=distribution.js.map