"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/lum.network.beam.MsgOpenBeam": {
        aminoType: "/lum.network.beam.MsgOpenBeam",
        toAmino: tx_1.MsgOpenBeam.toAmino,
        fromAmino: tx_1.MsgOpenBeam.fromAmino
    },
    "/lum.network.beam.MsgUpdateBeam": {
        aminoType: "/lum.network.beam.MsgUpdateBeam",
        toAmino: tx_1.MsgUpdateBeam.toAmino,
        fromAmino: tx_1.MsgUpdateBeam.fromAmino
    },
    "/lum.network.beam.MsgClaimBeam": {
        aminoType: "/lum.network.beam.MsgClaimBeam",
        toAmino: tx_1.MsgClaimBeam.toAmino,
        fromAmino: tx_1.MsgClaimBeam.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map