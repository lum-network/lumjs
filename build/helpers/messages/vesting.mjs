import { registry, MessageComposer } from '../../codegen/cosmos/vesting/v1beta1/tx.registry';
const { createVestingAccount, createPermanentLockedAccount, createPeriodicVestingAccount } = MessageComposer.withTypeUrl;
export const BuildMsgCreateVestingAccount = (fromAddress, toAddress, amount, endTime, delayed) => {
    const value = {
        fromAddress,
        toAddress,
        amount,
        endTime,
        delayed,
    };
    return createVestingAccount(value);
};
export const BuildMsgCreatePermanentLock = (fromAddress, toAddress, amount) => {
    const value = {
        fromAddress,
        toAddress,
        amount,
    };
    return createPermanentLockedAccount(value);
};
export const BuildMsgCreatePeriodicVestingAccount = (fromAddress, toAddress, amount, startTime, vestingPeriods) => {
    const value = {
        fromAddress,
        toAddress,
        startTime,
        vestingPeriods,
    };
    return createPeriodicVestingAccount(value);
};
const vestingMsgUrl = {};
registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    vestingMsgUrl[msgType] = url;
});
export { vestingMsgUrl };
//# sourceMappingURL=vesting.js.map