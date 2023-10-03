import { MsgOpenBeam, MsgUpdateBeam, MsgClaimBeam } from "./tx";
export const registry = [["/lum.network.beam.MsgOpenBeam", MsgOpenBeam], ["/lum.network.beam.MsgUpdateBeam", MsgUpdateBeam], ["/lum.network.beam.MsgClaimBeam", MsgClaimBeam]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        openBeam(value) {
            return {
                typeUrl: "/lum.network.beam.MsgOpenBeam",
                value: MsgOpenBeam.encode(value).finish()
            };
        },
        updateBeam(value) {
            return {
                typeUrl: "/lum.network.beam.MsgUpdateBeam",
                value: MsgUpdateBeam.encode(value).finish()
            };
        },
        claimBeam(value) {
            return {
                typeUrl: "/lum.network.beam.MsgClaimBeam",
                value: MsgClaimBeam.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        openBeam(value) {
            return {
                typeUrl: "/lum.network.beam.MsgOpenBeam",
                value
            };
        },
        updateBeam(value) {
            return {
                typeUrl: "/lum.network.beam.MsgUpdateBeam",
                value
            };
        },
        claimBeam(value) {
            return {
                typeUrl: "/lum.network.beam.MsgClaimBeam",
                value
            };
        }
    },
    fromPartial: {
        openBeam(value) {
            return {
                typeUrl: "/lum.network.beam.MsgOpenBeam",
                value: MsgOpenBeam.fromPartial(value)
            };
        },
        updateBeam(value) {
            return {
                typeUrl: "/lum.network.beam.MsgUpdateBeam",
                value: MsgUpdateBeam.fromPartial(value)
            };
        },
        claimBeam(value) {
            return {
                typeUrl: "/lum.network.beam.MsgClaimBeam",
                value: MsgClaimBeam.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map