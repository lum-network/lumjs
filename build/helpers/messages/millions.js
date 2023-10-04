"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.millionsMsgUrl = exports.BuildMsgGenerateSeed = exports.BuildMsgRestoreInterchainAccounts = exports.BuildMsgWithdrawDepositRetry = exports.BuildMsgWithdrawDeposit = exports.BuildMsgDrawRetry = exports.BuildMsgClaimPrize = exports.BuildMsgDepositRetry = exports.BuildMsgDepositEdit = exports.BuildMsgMillionsDeposit = void 0;
const tx_registry_1 = require("../../codegen/lum/network/millions/tx.registry");
const { deposit, depositEdit, depositRetry, claimPrize, drawRetry, withdrawDeposit, withdrawDepositRetry, restoreInterchainAccounts, generateSeed } = tx_registry_1.MessageComposer.withTypeUrl;
const BuildMsgMillionsDeposit = (poolId, depositorAddress, winnerAddress, isSponsor, amount) => {
    const value = {
        poolId,
        amount,
        depositorAddress,
        winnerAddress,
        isSponsor,
    };
    return deposit(value);
};
exports.BuildMsgMillionsDeposit = BuildMsgMillionsDeposit;
const BuildMsgDepositEdit = (poolId, depositId, winnerAddress, isSponsor, depositorAddress) => {
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
exports.BuildMsgDepositEdit = BuildMsgDepositEdit;
const BuildMsgDepositRetry = (poolId, depositId, depositorAddress) => {
    const value = {
        poolId,
        depositId,
        depositorAddress,
    };
    return depositRetry(value);
};
exports.BuildMsgDepositRetry = BuildMsgDepositRetry;
const BuildMsgClaimPrize = (poolId, drawId, prizeId, winnerAddress) => {
    const value = {
        poolId,
        drawId,
        prizeId,
        winnerAddress,
    };
    return claimPrize(value);
};
exports.BuildMsgClaimPrize = BuildMsgClaimPrize;
const BuildMsgDrawRetry = (poolId, drawId, drawRetryAddress) => {
    const value = {
        poolId,
        drawId,
        drawRetryAddress,
    };
    return drawRetry(value);
};
exports.BuildMsgDrawRetry = BuildMsgDrawRetry;
const BuildMsgWithdrawDeposit = (poolId, depositId, depositorAddress, toAddress) => {
    const value = {
        poolId,
        depositId,
        depositorAddress,
        toAddress,
    };
    return withdrawDeposit(value);
};
exports.BuildMsgWithdrawDeposit = BuildMsgWithdrawDeposit;
const BuildMsgWithdrawDepositRetry = (poolId, withdrawalId, depositorAddress) => {
    const value = {
        poolId,
        withdrawalId,
        depositorAddress,
    };
    return withdrawDepositRetry(value);
};
exports.BuildMsgWithdrawDepositRetry = BuildMsgWithdrawDepositRetry;
const BuildMsgRestoreInterchainAccounts = (poolId, restorerAddress) => {
    const value = {
        poolId,
        restorerAddress,
    };
    return restoreInterchainAccounts(value);
};
exports.BuildMsgRestoreInterchainAccounts = BuildMsgRestoreInterchainAccounts;
const BuildMsgGenerateSeed = (requesterAddress) => {
    const value = {
        requesterAddress,
    };
    return generateSeed(value);
};
exports.BuildMsgGenerateSeed = BuildMsgGenerateSeed;
const millionsMsgUrl = {};
exports.millionsMsgUrl = millionsMsgUrl;
tx_registry_1.registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    millionsMsgUrl[msgType] = url;
});
//# sourceMappingURL=millions.js.map