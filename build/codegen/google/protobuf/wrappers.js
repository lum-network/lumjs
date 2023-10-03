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
exports.BytesValue = exports.StringValue = exports.BoolValue = exports.UInt32Value = exports.Int32Value = exports.UInt64Value = exports.Int64Value = exports.FloatValue = exports.DoubleValue = void 0;
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseDoubleValue() {
    return {
        value: 0
    };
}
exports.DoubleValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(9).double(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDoubleValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDoubleValue();
        message.value = object.value ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DoubleValue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DoubleValue.decode(message.value);
    },
    toProto(message) {
        return exports.DoubleValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.DoubleValue",
            value: exports.DoubleValue.encode(message).finish()
        };
    }
};
function createBaseFloatValue() {
    return {
        value: 0
    };
}
exports.FloatValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(13).float(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFloatValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFloatValue();
        message.value = object.value ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FloatValue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FloatValue.decode(message.value);
    },
    toProto(message) {
        return exports.FloatValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.FloatValue",
            value: exports.FloatValue.encode(message).finish()
        };
    }
};
function createBaseInt64Value() {
    return {
        value: helpers_1.Long.ZERO
    };
}
exports.Int64Value = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.value.isZero()) {
            writer.uint32(8).int64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInt64Value();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInt64Value();
        message.value = object.value !== undefined && object.value !== null ? helpers_1.Long.fromValue(object.value) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            value: helpers_1.Long.fromString(object.value)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value ? message.value.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Int64Value.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Int64Value.decode(message.value);
    },
    toProto(message) {
        return exports.Int64Value.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Int64Value",
            value: exports.Int64Value.encode(message).finish()
        };
    }
};
function createBaseUInt64Value() {
    return {
        value: helpers_1.Long.UZERO
    };
}
exports.UInt64Value = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.value.isZero()) {
            writer.uint32(8).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUInt64Value();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUInt64Value();
        message.value = object.value !== undefined && object.value !== null ? helpers_1.Long.fromValue(object.value) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            value: helpers_1.Long.fromString(object.value)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value ? message.value.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UInt64Value.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.UInt64Value.decode(message.value);
    },
    toProto(message) {
        return exports.UInt64Value.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.UInt64Value",
            value: exports.UInt64Value.encode(message).finish()
        };
    }
};
function createBaseInt32Value() {
    return {
        value: 0
    };
}
exports.Int32Value = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(8).int32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInt32Value();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInt32Value();
        message.value = object.value ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Int32Value.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Int32Value.decode(message.value);
    },
    toProto(message) {
        return exports.Int32Value.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Int32Value",
            value: exports.Int32Value.encode(message).finish()
        };
    }
};
function createBaseUInt32Value() {
    return {
        value: 0
    };
}
exports.UInt32Value = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(8).uint32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUInt32Value();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUInt32Value();
        message.value = object.value ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UInt32Value.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.UInt32Value.decode(message.value);
    },
    toProto(message) {
        return exports.UInt32Value.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.UInt32Value",
            value: exports.UInt32Value.encode(message).finish()
        };
    }
};
function createBaseBoolValue() {
    return {
        value: false
    };
}
exports.BoolValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value === true) {
            writer.uint32(8).bool(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoolValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBoolValue();
        message.value = object.value ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BoolValue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BoolValue.decode(message.value);
    },
    toProto(message) {
        return exports.BoolValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.BoolValue",
            value: exports.BoolValue.encode(message).finish()
        };
    }
};
function createBaseStringValue() {
    return {
        value: ""
    };
}
exports.StringValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStringValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStringValue();
        message.value = object.value ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StringValue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.StringValue.decode(message.value);
    },
    toProto(message) {
        return exports.StringValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.StringValue",
            value: exports.StringValue.encode(message).finish()
        };
    }
};
function createBaseBytesValue() {
    return {
        value: new Uint8Array()
    };
}
exports.BytesValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value.length !== 0) {
            writer.uint32(10).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBytesValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBytesValue();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BytesValue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BytesValue.decode(message.value);
    },
    toProto(message) {
        return exports.BytesValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.BytesValue",
            value: exports.BytesValue.encode(message).finish()
        };
    }
};
//# sourceMappingURL=wrappers.js.map