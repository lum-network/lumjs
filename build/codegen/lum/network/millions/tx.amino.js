"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/lum.network.millions.MsgDeposit": {
        aminoType: "/lum.network.millions.MsgDeposit",
        toAmino: tx_1.MsgDeposit.toAmino,
        fromAmino: tx_1.MsgDeposit.fromAmino
    },
    "/lum.network.millions.MsgDepositRetry": {
        aminoType: "/lum.network.millions.MsgDepositRetry",
        toAmino: tx_1.MsgDepositRetry.toAmino,
        fromAmino: tx_1.MsgDepositRetry.fromAmino
    },
    "/lum.network.millions.MsgDepositEdit": {
        aminoType: "/lum.network.millions.MsgDepositEdit",
        toAmino: tx_1.MsgDepositEdit.toAmino,
        fromAmino: tx_1.MsgDepositEdit.fromAmino
    },
    "/lum.network.millions.MsgClaimPrize": {
        aminoType: "/lum.network.millions.MsgClaimPrize",
        toAmino: tx_1.MsgClaimPrize.toAmino,
        fromAmino: tx_1.MsgClaimPrize.fromAmino
    },
    "/lum.network.millions.MsgWithdrawDeposit": {
        aminoType: "/lum.network.millions.MsgWithdrawDeposit",
        toAmino: tx_1.MsgWithdrawDeposit.toAmino,
        fromAmino: tx_1.MsgWithdrawDeposit.fromAmino
    },
    "/lum.network.millions.MsgWithdrawDepositRetry": {
        aminoType: "/lum.network.millions.MsgWithdrawDepositRetry",
        toAmino: tx_1.MsgWithdrawDepositRetry.toAmino,
        fromAmino: tx_1.MsgWithdrawDepositRetry.fromAmino
    },
    "/lum.network.millions.MsgDrawRetry": {
        aminoType: "/lum.network.millions.MsgDrawRetry",
        toAmino: tx_1.MsgDrawRetry.toAmino,
        fromAmino: tx_1.MsgDrawRetry.fromAmino
    },
    "/lum.network.millions.MsgRestoreInterchainAccounts": {
        aminoType: "/lum.network.millions.MsgRestoreInterchainAccounts",
        toAmino: tx_1.MsgRestoreInterchainAccounts.toAmino,
        fromAmino: tx_1.MsgRestoreInterchainAccounts.fromAmino
    },
    "/lum.network.millions.MsgGenerateSeed": {
        aminoType: "/lum.network.millions.MsgGenerateSeed",
        toAmino: tx_1.MsgGenerateSeed.toAmino,
        fromAmino: tx_1.MsgGenerateSeed.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map