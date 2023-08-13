//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgOpenBeam, MsgUpdateBeam, MsgClaimBeam } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/lum.network.beam.MsgOpenBeam", MsgOpenBeam], ["/lum.network.beam.MsgUpdateBeam", MsgUpdateBeam], ["/lum.network.beam.MsgClaimBeam", MsgClaimBeam]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    openBeam(value: MsgOpenBeam) {
      return {
        typeUrl: "/lum.network.beam.MsgOpenBeam",
        value: MsgOpenBeam.encode(value).finish()
      };
    },
    updateBeam(value: MsgUpdateBeam) {
      return {
        typeUrl: "/lum.network.beam.MsgUpdateBeam",
        value: MsgUpdateBeam.encode(value).finish()
      };
    },
    claimBeam(value: MsgClaimBeam) {
      return {
        typeUrl: "/lum.network.beam.MsgClaimBeam",
        value: MsgClaimBeam.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    openBeam(value: MsgOpenBeam) {
      return {
        typeUrl: "/lum.network.beam.MsgOpenBeam",
        value
      };
    },
    updateBeam(value: MsgUpdateBeam) {
      return {
        typeUrl: "/lum.network.beam.MsgUpdateBeam",
        value
      };
    },
    claimBeam(value: MsgClaimBeam) {
      return {
        typeUrl: "/lum.network.beam.MsgClaimBeam",
        value
      };
    }
  },
  fromPartial: {
    openBeam(value: MsgOpenBeam) {
      return {
        typeUrl: "/lum.network.beam.MsgOpenBeam",
        value: MsgOpenBeam.fromPartial(value)
      };
    },
    updateBeam(value: MsgUpdateBeam) {
      return {
        typeUrl: "/lum.network.beam.MsgUpdateBeam",
        value: MsgUpdateBeam.fromPartial(value)
      };
    },
    claimBeam(value: MsgClaimBeam) {
      return {
        typeUrl: "/lum.network.beam.MsgClaimBeam",
        value: MsgClaimBeam.fromPartial(value)
      };
    }
  }
};