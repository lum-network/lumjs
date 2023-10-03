import { MessageComposer } from '../../codegen/lum/network/millions/tx.registry';
const { deposit, depositEdit, depositRetry, claimPrize, drawRetry, withdrawDeposit, withdrawDepositRetry, restoreInterchainAccounts, generateSeed } = MessageComposer.withTypeUrl;
export const BuildMsgMillionsDeposit = (poolId, depositorAddress, winnerAddress, isSponsor, amount) => {
    const value = {
        poolId,
        amount,
        depositorAddress,
        winnerAddress,
        isSponsor,
    };
    return deposit(value);
};
export const BuildMsgDepositEdit = (poolId, depositId, winnerAddress, isSponsor, depositorAddress) => {
    const isSponsorValue = {
        value: isSponsor,
    };
    const value = {
        poolId,
        depositId,
        winnerAddress,
        isSponsor: isSponsorValue,
        depositorAddress,
    };
    return depositEdit(value);
};
export const BuildMsgDepositRetry = (poolId, depositId, depositorAddress) => {
    const value = {
        poolId,
        depositId,
        depositorAddress,
    };
    return depositRetry(value);
};
export const BuildMsgClaimPrize = (poolId, drawId, prizeId, winnerAddress) => {
    const value = {
        poolId,
        drawId,
        prizeId,
        winnerAddress,
    };
    return claimPrize(value);
};
export const BuildMsgDrawRetry = (poolId, drawId, drawRetryAddress) => {
    const value = {
        poolId,
        drawId,
        drawRetryAddress,
    };
    return drawRetry(value);
};
export const BuildMsgWithdrawDeposit = (poolId, depositId, depositorAddress, toAddress) => {
    const value = {
        poolId,
        depositId,
        depositorAddress,
        toAddress,
    };
    return withdrawDeposit(value);
};
export const BuildMsgWithdrawDepositRetry = (poolId, withdrawalId, depositorAddress) => {
    const value = {
        poolId,
        withdrawalId,
        depositorAddress,
    };
    return withdrawDepositRetry(value);
};
export const BuildMsgRestoreInterchainAccounts = (poolId, restorerAddress) => {
    const value = {
        poolId,
        restorerAddress,
    };
    return restoreInterchainAccounts(value);
};
export const BuildMsgGenerateSeed = (requesterAddress) => {
    const value = {
        requesterAddress,
    };
    return generateSeed(value);
};
//# sourceMappingURL=millions.js.map