"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildMsgCreatePeriodicVestingAccount = exports.BuildMsgCreatePermanentLock = exports.BuildMsgCreateVestingAccount = void 0;
const tx_registry_1 = require("../../codegen/cosmos/vesting/v1beta1/tx.registry");
const { createVestingAccount, createPermanentLockedAccount, createPeriodicVestingAccount } = tx_registry_1.MessageComposer.withTypeUrl;
const BuildMsgCreateVestingAccount = (fromAddress, toAddress, amount, endTime, delayed) => {
    const value = {
        fromAddress,
        toAddress,
        amount,
        endTime,
        delayed,
    };
    return createVestingAccount(value);
};
exports.BuildMsgCreateVestingAccount = BuildMsgCreateVestingAccount;
const BuildMsgCreatePermanentLock = (fromAddress, toAddress, amount) => {
    const value = {
        fromAddress,
        toAddress,
        amount,
    };
    return createPermanentLockedAccount(value);
};
exports.BuildMsgCreatePermanentLock = BuildMsgCreatePermanentLock;
const BuildMsgCreatePeriodicVestingAccount = (fromAddress, toAddress, amount, startTime, vestingPeriods) => {
    const value = {
        fromAddress,
        toAddress,
        startTime,
        vestingPeriods,
    };
    return createPeriodicVestingAccount(value);
};
exports.BuildMsgCreatePeriodicVestingAccount = BuildMsgCreatePeriodicVestingAccount;
//# sourceMappingURL=vesting.js.map