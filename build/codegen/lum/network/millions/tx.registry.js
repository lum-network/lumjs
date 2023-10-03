"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/lum.network.millions.MsgDeposit", tx_1.MsgDeposit], ["/lum.network.millions.MsgDepositRetry", tx_1.MsgDepositRetry], ["/lum.network.millions.MsgDepositEdit", tx_1.MsgDepositEdit], ["/lum.network.millions.MsgClaimPrize", tx_1.MsgClaimPrize], ["/lum.network.millions.MsgWithdrawDeposit", tx_1.MsgWithdrawDeposit], ["/lum.network.millions.MsgWithdrawDepositRetry", tx_1.MsgWithdrawDepositRetry], ["/lum.network.millions.MsgDrawRetry", tx_1.MsgDrawRetry], ["/lum.network.millions.MsgRestoreInterchainAccounts", tx_1.MsgRestoreInterchainAccounts], ["/lum.network.millions.MsgGenerateSeed", tx_1.MsgGenerateSeed]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        deposit(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDeposit",
                value: tx_1.MsgDeposit.encode(value).finish()
            };
        },
        depositRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDepositRetry",
                value: tx_1.MsgDepositRetry.encode(value).finish()
            };
        },
        depositEdit(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDepositEdit",
                value: tx_1.MsgDepositEdit.encode(value).finish()
            };
        },
        claimPrize(value) {
            return {
                typeUrl: "/lum.network.millions.MsgClaimPrize",
                value: tx_1.MsgClaimPrize.encode(value).finish()
            };
        },
        withdrawDeposit(value) {
            return {
                typeUrl: "/lum.network.millions.MsgWithdrawDeposit",
                value: tx_1.MsgWithdrawDeposit.encode(value).finish()
            };
        },
        withdrawDepositRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgWithdrawDepositRetry",
                value: tx_1.MsgWithdrawDepositRetry.encode(value).finish()
            };
        },
        drawRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDrawRetry",
                value: tx_1.MsgDrawRetry.encode(value).finish()
            };
        },
        restoreInterchainAccounts(value) {
            return {
                typeUrl: "/lum.network.millions.MsgRestoreInterchainAccounts",
                value: tx_1.MsgRestoreInterchainAccounts.encode(value).finish()
            };
        },
        generateSeed(value) {
            return {
                typeUrl: "/lum.network.millions.MsgGenerateSeed",
                value: tx_1.MsgGenerateSeed.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        deposit(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDeposit",
                value
            };
        },
        depositRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDepositRetry",
                value
            };
        },
        depositEdit(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDepositEdit",
                value
            };
        },
        claimPrize(value) {
            return {
                typeUrl: "/lum.network.millions.MsgClaimPrize",
                value
            };
        },
        withdrawDeposit(value) {
            return {
                typeUrl: "/lum.network.millions.MsgWithdrawDeposit",
                value
            };
        },
        withdrawDepositRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgWithdrawDepositRetry",
                value
            };
        },
        drawRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDrawRetry",
                value
            };
        },
        restoreInterchainAccounts(value) {
            return {
                typeUrl: "/lum.network.millions.MsgRestoreInterchainAccounts",
                value
            };
        },
        generateSeed(value) {
            return {
                typeUrl: "/lum.network.millions.MsgGenerateSeed",
                value
            };
        }
    },
    fromPartial: {
        deposit(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDeposit",
                value: tx_1.MsgDeposit.fromPartial(value)
            };
        },
        depositRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDepositRetry",
                value: tx_1.MsgDepositRetry.fromPartial(value)
            };
        },
        depositEdit(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDepositEdit",
                value: tx_1.MsgDepositEdit.fromPartial(value)
            };
        },
        claimPrize(value) {
            return {
                typeUrl: "/lum.network.millions.MsgClaimPrize",
                value: tx_1.MsgClaimPrize.fromPartial(value)
            };
        },
        withdrawDeposit(value) {
            return {
                typeUrl: "/lum.network.millions.MsgWithdrawDeposit",
                value: tx_1.MsgWithdrawDeposit.fromPartial(value)
            };
        },
        withdrawDepositRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgWithdrawDepositRetry",
                value: tx_1.MsgWithdrawDepositRetry.fromPartial(value)
            };
        },
        drawRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDrawRetry",
                value: tx_1.MsgDrawRetry.fromPartial(value)
            };
        },
        restoreInterchainAccounts(value) {
            return {
                typeUrl: "/lum.network.millions.MsgRestoreInterchainAccounts",
                value: tx_1.MsgRestoreInterchainAccounts.fromPartial(value)
            };
        },
        generateSeed(value) {
            return {
                typeUrl: "/lum.network.millions.MsgGenerateSeed",
                value: tx_1.MsgGenerateSeed.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map