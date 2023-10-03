"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/lum.network.beam.MsgOpenBeam", tx_1.MsgOpenBeam], ["/lum.network.beam.MsgUpdateBeam", tx_1.MsgUpdateBeam], ["/lum.network.beam.MsgClaimBeam", tx_1.MsgClaimBeam]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        openBeam(value) {
            return {
                typeUrl: "/lum.network.beam.MsgOpenBeam",
                value: tx_1.MsgOpenBeam.encode(value).finish()
            };
        },
        updateBeam(value) {
            return {
                typeUrl: "/lum.network.beam.MsgUpdateBeam",
                value: tx_1.MsgUpdateBeam.encode(value).finish()
            };
        },
        claimBeam(value) {
            return {
                typeUrl: "/lum.network.beam.MsgClaimBeam",
                value: tx_1.MsgClaimBeam.encode(value).finish()
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
                value: tx_1.MsgOpenBeam.fromPartial(value)
            };
        },
        updateBeam(value) {
            return {
                typeUrl: "/lum.network.beam.MsgUpdateBeam",
                value: tx_1.MsgUpdateBeam.fromPartial(value)
            };
        },
        claimBeam(value) {
            return {
                typeUrl: "/lum.network.beam.MsgClaimBeam",
                value: tx_1.MsgClaimBeam.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map