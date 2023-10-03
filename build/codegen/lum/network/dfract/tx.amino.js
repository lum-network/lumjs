"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/lum.network.dfract.MsgDeposit": {
        aminoType: "/lum.network.dfract.MsgDeposit",
        toAmino: tx_1.MsgDeposit.toAmino,
        fromAmino: tx_1.MsgDeposit.fromAmino
    },
    "/lum.network.dfract.MsgWithdrawAndMint": {
        aminoType: "/lum.network.dfract.MsgWithdrawAndMint",
        toAmino: tx_1.MsgWithdrawAndMint.toAmino,
        fromAmino: tx_1.MsgWithdrawAndMint.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map