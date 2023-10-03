"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/lum.network.dfract.MsgDeposit", tx_1.MsgDeposit], ["/lum.network.dfract.MsgWithdrawAndMint", tx_1.MsgWithdrawAndMint]];
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
                typeUrl: "/lum.network.dfract.MsgDeposit",
                value: tx_1.MsgDeposit.encode(value).finish()
            };
        },
        withdrawAndMint(value) {
            return {
                typeUrl: "/lum.network.dfract.MsgWithdrawAndMint",
                value: tx_1.MsgWithdrawAndMint.encode(value).finish()
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
                value: tx_1.MsgDeposit.fromPartial(value)
            };
        },
        withdrawAndMint(value) {
            return {
                typeUrl: "/lum.network.dfract.MsgWithdrawAndMint",
                value: tx_1.MsgWithdrawAndMint.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map