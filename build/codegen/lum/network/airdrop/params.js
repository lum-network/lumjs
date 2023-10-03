"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseParams() {
    return {
        airdropStartTime: new Date(),
        durationUntilDecay: duration_1.Duration.fromPartial({}),
        durationOfDecay: duration_1.Duration.fromPartial({}),
        claimDenom: ""
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.airdropStartTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.airdropStartTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.durationUntilDecay !== undefined) {
            duration_1.Duration.encode(message.durationUntilDecay, writer.uint32(18).fork()).ldelim();
        }
        if (message.durationOfDecay !== undefined) {
            duration_1.Duration.encode(message.durationOfDecay, writer.uint32(26).fork()).ldelim();
        }
        if (message.claimDenom !== "") {
            writer.uint32(34).string(message.claimDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.airdropStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.durationUntilDecay = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.durationOfDecay = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.claimDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.airdropStartTime = object.airdropStartTime ?? undefined;
        message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? duration_1.Duration.fromPartial(object.durationUntilDecay) : undefined;
        message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? duration_1.Duration.fromPartial(object.durationOfDecay) : undefined;
        message.claimDenom = object.claimDenom ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            airdropStartTime: object.airdrop_start_time,
            durationUntilDecay: object?.duration_until_decay ? duration_1.Duration.fromAmino(object.duration_until_decay) : undefined,
            durationOfDecay: object?.duration_of_decay ? duration_1.Duration.fromAmino(object.duration_of_decay) : undefined,
            claimDenom: object.claim_denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.airdrop_start_time = message.airdropStartTime;
        obj.duration_until_decay = message.durationUntilDecay ? duration_1.Duration.toAmino(message.durationUntilDecay) : undefined;
        obj.duration_of_decay = message.durationOfDecay ? duration_1.Duration.toAmino(message.durationOfDecay) : undefined;
        obj.claim_denom = message.claimDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.airdrop.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map