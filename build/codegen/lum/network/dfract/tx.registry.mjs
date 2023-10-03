import { MsgDeposit, MsgWithdrawAndMint } from "./tx";
export const registry = [["/lum.network.dfract.MsgDeposit", MsgDeposit], ["/lum.network.dfract.MsgWithdrawAndMint", MsgWithdrawAndMint]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        deposit(value) {
            return {
                typeUrl: "/lum.network.dfract.MsgDeposit",
                value: MsgDeposit.encode(value).finish()
            };
        },
        withdrawAndMint(value) {
            return {
                typeUrl: "/lum.network.dfract.MsgWithdrawAndMint",
                value: MsgWithdrawAndMint.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        deposit(value) {
            return {
                typeUrl: "/lum.network.dfract.MsgDeposit",
                value
            };
        },
        withdrawAndMint(value) {
            return {
                typeUrl: "/lum.network.dfract.MsgWithdrawAndMint",
                value
            };
        }
    },
    fromPartial: {
        deposit(value) {
            return {
                typeUrl: "/lum.network.dfract.MsgDeposit",
                value: MsgDeposit.fromPartial(value)
            };
        },
        withdrawAndMint(value) {
            return {
                typeUrl: "/lum.network.dfract.MsgWithdrawAndMint",
                value: MsgWithdrawAndMint.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map