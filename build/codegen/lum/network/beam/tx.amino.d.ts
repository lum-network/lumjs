import { MsgOpenBeam, MsgUpdateBeam, MsgClaimBeam } from "./tx";
export declare const AminoConverter: {
    "/lum.network.beam.MsgOpenBeam": {
        aminoType: string;
        toAmino: (message: MsgOpenBeam) => import("./tx").MsgOpenBeamAmino;
        fromAmino: (object: import("./tx").MsgOpenBeamAmino) => MsgOpenBeam;
    };
    "/lum.network.beam.MsgUpdateBeam": {
        aminoType: string;
        toAmino: (message: MsgUpdateBeam) => import("./tx").MsgUpdateBeamAmino;
        fromAmino: (object: import("./tx").MsgUpdateBeamAmino) => MsgUpdateBeam;
    };
    "/lum.network.beam.MsgClaimBeam": {
        aminoType: string;
        toAmino: (message: MsgClaimBeam) => import("./tx").MsgClaimBeamAmino;
        fromAmino: (object: import("./tx").MsgClaimBeamAmino) => MsgClaimBeam;
    };
};
