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
exports.CallbackData = void 0;
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseCallbackData() {
    return {
        callbackKey: "",
        portId: "",
        channelId: "",
        sequence: helpers_1.Long.UZERO,
        callbackId: "",
        callbackArgs: new Uint8Array()
    };
}
exports.CallbackData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.callbackKey !== "") {
            writer.uint32(10).string(message.callbackKey);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(26).string(message.channelId);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(32).uint64(message.sequence);
        }
        if (message.callbackId !== "") {
            writer.uint32(42).string(message.callbackId);
        }
        if (message.callbackArgs.length !== 0) {
            writer.uint32(50).bytes(message.callbackArgs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCallbackData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.callbackKey = reader.string();
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.channelId = reader.string();
                    break;
                case 4:
                    message.sequence = reader.uint64();
                    break;
                case 5:
                    message.callbackId = reader.string();
                    break;
                case 6:
                    message.callbackArgs = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCallbackData();
        message.callbackKey = object.callbackKey ?? "";
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO;
        message.callbackId = object.callbackId ?? "";
        message.callbackArgs = object.callbackArgs ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            callbackKey: object.callback_key,
            portId: object.port_id,
            channelId: object.channel_id,
            sequence: helpers_1.Long.fromString(object.sequence),
            callbackId: object.callback_id,
            callbackArgs: object.callback_args
        };
    },
    toAmino(message) {
        const obj = {};
        obj.callback_key = message.callbackKey;
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.callback_id = message.callbackId;
        obj.callback_args = message.callbackArgs;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CallbackData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CallbackData.decode(message.value);
    },
    toProto(message) {
        return exports.CallbackData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.CallbackData",
            value: exports.CallbackData.encode(message).finish()
        };
    }
};
//# sourceMappingURL=callback_data.js.map