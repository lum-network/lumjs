//@ts-nocheck
import { MsgOpenBeam, MsgUpdateBeam, MsgClaimBeam } from "./tx";
export const AminoConverter = {
    "/lum.network.beam.MsgOpenBeam": {
        aminoType: "/lum.network.beam.MsgOpenBeam",
        toAmino: MsgOpenBeam.toAmino,
        fromAmino: MsgOpenBeam.fromAmino
    },
    "/lum.network.beam.MsgUpdateBeam": {
        aminoType: "/lum.network.beam.MsgUpdateBeam",
        toAmino: MsgUpdateBeam.toAmino,
        fromAmino: MsgUpdateBeam.fromAmino
    },
    "/lum.network.beam.MsgClaimBeam": {
        aminoType: "/lum.network.beam.MsgClaimBeam",
        toAmino: MsgClaimBeam.toAmino,
        fromAmino: MsgClaimBeam.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map