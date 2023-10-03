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
exports.NoData = exports.IcacallbacksPacketData = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseIcacallbacksPacketData() {
    return {
        noData: undefined
    };
}
exports.IcacallbacksPacketData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.noData !== undefined) {
            exports.NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIcacallbacksPacketData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.noData = exports.NoData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIcacallbacksPacketData();
        message.noData = object.noData !== undefined && object.noData !== null ? exports.NoData.fromPartial(object.noData) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            noData: object?.no_data ? exports.NoData.fromAmino(object.no_data) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.no_data = message.noData ? exports.NoData.toAmino(message.noData) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IcacallbacksPacketData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.IcacallbacksPacketData.decode(message.value);
    },
    toProto(message) {
        return exports.IcacallbacksPacketData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.IcacallbacksPacketData",
            value: exports.IcacallbacksPacketData.encode(message).finish()
        };
    }
};
function createBaseNoData() {
    return {};
}
exports.NoData = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNoData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseNoData();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NoData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.NoData.decode(message.value);
    },
    toProto(message) {
        return exports.NoData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.NoData",
            value: exports.NoData.encode(message).finish()
        };
    }
};
//# sourceMappingURL=packet.js.map