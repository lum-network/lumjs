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
exports.Params = exports.ValidatorSigningInfo = void 0;
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseValidatorSigningInfo() {
    return {
        address: "",
        startHeight: helpers_1.Long.ZERO,
        indexOffset: helpers_1.Long.ZERO,
        jailedUntil: new Date(),
        tombstoned: false,
        missedBlocksCounter: helpers_1.Long.ZERO
    };
}
exports.ValidatorSigningInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.startHeight.isZero()) {
            writer.uint32(16).int64(message.startHeight);
        }
        if (!message.indexOffset.isZero()) {
            writer.uint32(24).int64(message.indexOffset);
        }
        if (message.jailedUntil !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.jailedUntil), writer.uint32(34).fork()).ldelim();
        }
        if (message.tombstoned === true) {
            writer.uint32(40).bool(message.tombstoned);
        }
        if (!message.missedBlocksCounter.isZero()) {
            writer.uint32(48).int64(message.missedBlocksCounter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.startHeight = reader.int64();
                    break;
                case 3:
                    message.indexOffset = reader.int64();
                    break;
                case 4:
                    message.jailedUntil = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.tombstoned = reader.bool();
                    break;
                case 6:
                    message.missedBlocksCounter = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorSigningInfo();
        message.address = object.address ?? "";
        message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? helpers_1.Long.fromValue(object.startHeight) : helpers_1.Long.ZERO;
        message.indexOffset = object.indexOffset !== undefined && object.indexOffset !== null ? helpers_1.Long.fromValue(object.indexOffset) : helpers_1.Long.ZERO;
        message.jailedUntil = object.jailedUntil ?? undefined;
        message.tombstoned = object.tombstoned ?? false;
        message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? helpers_1.Long.fromValue(object.missedBlocksCounter) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            startHeight: helpers_1.Long.fromString(object.start_height),
            indexOffset: helpers_1.Long.fromString(object.index_offset),
            jailedUntil: object.jailed_until,
            tombstoned: object.tombstoned,
            missedBlocksCounter: helpers_1.Long.fromString(object.missed_blocks_counter)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.start_height = message.startHeight ? message.startHeight.toString() : undefined;
        obj.index_offset = message.indexOffset ? message.indexOffset.toString() : undefined;
        obj.jailed_until = message.jailedUntil;
        obj.tombstoned = message.tombstoned;
        obj.missed_blocks_counter = message.missedBlocksCounter ? message.missedBlocksCounter.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSigningInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSigningInfo",
            value: exports.ValidatorSigningInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorSigningInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSigningInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
            value: exports.ValidatorSigningInfo.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        signedBlocksWindow: helpers_1.Long.ZERO,
        minSignedPerWindow: new Uint8Array(),
        downtimeJailDuration: duration_1.Duration.fromPartial({}),
        slashFractionDoubleSign: new Uint8Array(),
        slashFractionDowntime: new Uint8Array()
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.signedBlocksWindow.isZero()) {
            writer.uint32(8).int64(message.signedBlocksWindow);
        }
        if (message.minSignedPerWindow.length !== 0) {
            writer.uint32(18).bytes(message.minSignedPerWindow);
        }
        if (message.downtimeJailDuration !== undefined) {
            duration_1.Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.slashFractionDoubleSign.length !== 0) {
            writer.uint32(34).bytes(message.slashFractionDoubleSign);
        }
        if (message.slashFractionDowntime.length !== 0) {
            writer.uint32(42).bytes(message.slashFractionDowntime);
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
                    message.signedBlocksWindow = reader.int64();
                    break;
                case 2:
                    message.minSignedPerWindow = reader.bytes();
                    break;
                case 3:
                    message.downtimeJailDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.slashFractionDoubleSign = reader.bytes();
                    break;
                case 5:
                    message.slashFractionDowntime = reader.bytes();
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
        message.signedBlocksWindow = object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null ? helpers_1.Long.fromValue(object.signedBlocksWindow) : helpers_1.Long.ZERO;
        message.minSignedPerWindow = object.minSignedPerWindow ?? new Uint8Array();
        message.downtimeJailDuration = object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null ? duration_1.Duration.fromPartial(object.downtimeJailDuration) : undefined;
        message.slashFractionDoubleSign = object.slashFractionDoubleSign ?? new Uint8Array();
        message.slashFractionDowntime = object.slashFractionDowntime ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            signedBlocksWindow: helpers_1.Long.fromString(object.signed_blocks_window),
            minSignedPerWindow: object.min_signed_per_window,
            downtimeJailDuration: object?.downtime_jail_duration ? duration_1.Duration.fromAmino(object.downtime_jail_duration) : undefined,
            slashFractionDoubleSign: object.slash_fraction_double_sign,
            slashFractionDowntime: object.slash_fraction_downtime
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signed_blocks_window = message.signedBlocksWindow ? message.signedBlocksWindow.toString() : undefined;
        obj.min_signed_per_window = message.minSignedPerWindow;
        obj.downtime_jail_duration = message.downtimeJailDuration ? duration_1.Duration.toAmino(message.downtimeJailDuration) : undefined;
        obj.slash_fraction_double_sign = message.slashFractionDoubleSign;
        obj.slash_fraction_downtime = message.slashFractionDowntime;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=slashing.js.map