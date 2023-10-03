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
exports.DrawSchedule = void 0;
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseDrawSchedule() {
    return {
        initialDrawAt: new Date(),
        drawDelta: duration_1.Duration.fromPartial({})
    };
}
exports.DrawSchedule = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.initialDrawAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.initialDrawAt), writer.uint32(10).fork()).ldelim();
        }
        if (message.drawDelta !== undefined) {
            duration_1.Duration.encode(message.drawDelta, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDrawSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.initialDrawAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.drawDelta = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDrawSchedule();
        message.initialDrawAt = object.initialDrawAt ?? undefined;
        message.drawDelta = object.drawDelta !== undefined && object.drawDelta !== null ? duration_1.Duration.fromPartial(object.drawDelta) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            initialDrawAt: object.initial_draw_at,
            drawDelta: object?.draw_delta ? duration_1.Duration.fromAmino(object.draw_delta) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.initial_draw_at = message.initialDrawAt;
        obj.draw_delta = message.drawDelta ? duration_1.Duration.toAmino(message.drawDelta) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DrawSchedule.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DrawSchedule.decode(message.value);
    },
    toProto(message) {
        return exports.DrawSchedule.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.DrawSchedule",
            value: exports.DrawSchedule.encode(message).finish()
        };
    }
};
//# sourceMappingURL=draw_schedule.js.map