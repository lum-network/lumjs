import { MsgDeposit, MsgDepositRetry, MsgDepositEdit, MsgClaimPrize, MsgWithdrawDeposit, MsgWithdrawDepositRetry, MsgDrawRetry, MsgRestoreInterchainAccounts, MsgGenerateSeed } from "./tx";
export const registry = [["/lum.network.millions.MsgDeposit", MsgDeposit], ["/lum.network.millions.MsgDepositRetry", MsgDepositRetry], ["/lum.network.millions.MsgDepositEdit", MsgDepositEdit], ["/lum.network.millions.MsgClaimPrize", MsgClaimPrize], ["/lum.network.millions.MsgWithdrawDeposit", MsgWithdrawDeposit], ["/lum.network.millions.MsgWithdrawDepositRetry", MsgWithdrawDepositRetry], ["/lum.network.millions.MsgDrawRetry", MsgDrawRetry], ["/lum.network.millions.MsgRestoreInterchainAccounts", MsgRestoreInterchainAccounts], ["/lum.network.millions.MsgGenerateSeed", MsgGenerateSeed]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        deposit(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDeposit",
                value: MsgDeposit.encode(value).finish()
            };
        },
        depositRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDepositRetry",
                value: MsgDepositRetry.encode(value).finish()
            };
        },
        depositEdit(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDepositEdit",
                value: MsgDepositEdit.encode(value).finish()
            };
        },
        claimPrize(value) {
            return {
                typeUrl: "/lum.network.millions.MsgClaimPrize",
                value: MsgClaimPrize.encode(value).finish()
            };
        },
        withdrawDeposit(value) {
            return {
                typeUrl: "/lum.network.millions.MsgWithdrawDeposit",
                value: MsgWithdrawDeposit.encode(value).finish()
            };
        },
        withdrawDepositRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgWithdrawDepositRetry",
                value: MsgWithdrawDepositRetry.encode(value).finish()
            };
        },
        drawRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDrawRetry",
                value: MsgDrawRetry.encode(value).finish()
            };
        },
        restoreInterchainAccounts(value) {
            return {
                typeUrl: "/lum.network.millions.MsgRestoreInterchainAccounts",
                value: MsgRestoreInterchainAccounts.encode(value).finish()
            };
        },
        generateSeed(value) {
            return {
                typeUrl: "/lum.network.millions.MsgGenerateSeed",
                value: MsgGenerateSeed.encode(value).finish()
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
                value: MsgDeposit.fromPartial(value)
            };
        },
        depositRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDepositRetry",
                value: MsgDepositRetry.fromPartial(value)
            };
        },
        depositEdit(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDepositEdit",
                value: MsgDepositEdit.fromPartial(value)
            };
        },
        claimPrize(value) {
            return {
                typeUrl: "/lum.network.millions.MsgClaimPrize",
                value: MsgClaimPrize.fromPartial(value)
            };
        },
        withdrawDeposit(value) {
            return {
                typeUrl: "/lum.network.millions.MsgWithdrawDeposit",
                value: MsgWithdrawDeposit.fromPartial(value)
            };
        },
        withdrawDepositRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgWithdrawDepositRetry",
                value: MsgWithdrawDepositRetry.fromPartial(value)
            };
        },
        drawRetry(value) {
            return {
                typeUrl: "/lum.network.millions.MsgDrawRetry",
                value: MsgDrawRetry.fromPartial(value)
            };
        },
        restoreInterchainAccounts(value) {
            return {
                typeUrl: "/lum.network.millions.MsgRestoreInterchainAccounts",
                value: MsgRestoreInterchainAccounts.fromPartial(value)
            };
        },
        generateSeed(value) {
            return {
                typeUrl: "/lum.network.millions.MsgGenerateSeed",
                value: MsgGenerateSeed.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map