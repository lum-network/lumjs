import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseDoubleValue() {
    return {
        value: 0
    };
}
export const DoubleValue = {
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
        return DoubleValue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DoubleValue.decode(message.value);
    },
    toProto(message) {
        return DoubleValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.DoubleValue",
            value: DoubleValue.encode(message).finish()
        };
    }
};
function createBaseFloatValue() {
    return {
        value: 0
    };
}
export const FloatValue = {
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
        return FloatValue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FloatValue.decode(message.value);
    },
    toProto(message) {
        return FloatValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.FloatValue",
            value: FloatValue.encode(message).finish()
        };
    }
};
function createBaseInt64Value() {
    return {
        value: Long.ZERO
    };
}
export const Int64Value = {
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
        message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            value: Long.fromString(object.value)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value ? message.value.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Int64Value.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Int64Value.decode(message.value);
    },
    toProto(message) {
        return Int64Value.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Int64Value",
            value: Int64Value.encode(message).finish()
        };
    }
};
function createBaseUInt64Value() {
    return {
        value: Long.UZERO
    };
}
export const UInt64Value = {
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
        message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            value: Long.fromString(object.value)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value ? message.value.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UInt64Value.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UInt64Value.decode(message.value);
    },
    toProto(message) {
        return UInt64Value.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.UInt64Value",
            value: UInt64Value.encode(message).finish()
        };
    }
};
function createBaseInt32Value() {
    return {
        value: 0
    };
}
export const Int32Value = {
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
        return Int32Value.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Int32Value.decode(message.value);
    },
    toProto(message) {
        return Int32Value.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Int32Value",
            value: Int32Value.encode(message).finish()
        };
    }
};
function createBaseUInt32Value() {
    return {
        value: 0
    };
}
export const UInt32Value = {
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
        return UInt32Value.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UInt32Value.decode(message.value);
    },
    toProto(message) {
        return UInt32Value.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.UInt32Value",
            value: UInt32Value.encode(message).finish()
        };
    }
};
function createBaseBoolValue() {
    return {
        value: false
    };
}
export const BoolValue = {
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
        return BoolValue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BoolValue.decode(message.value);
    },
    toProto(message) {
        return BoolValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.BoolValue",
            value: BoolValue.encode(message).finish()
        };
    }
};
function createBaseStringValue() {
    return {
        value: ""
    };
}
export const StringValue = {
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
        return StringValue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return StringValue.decode(message.value);
    },
    toProto(message) {
        return StringValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.StringValue",
            value: StringValue.encode(message).finish()
        };
    }
};
function createBaseBytesValue() {
    return {
        value: new Uint8Array()
    };
}
export const BytesValue = {
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
        return BytesValue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BytesValue.decode(message.value);
    },
    toProto(message) {
        return BytesValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.BytesValue",
            value: BytesValue.encode(message).finish()
        };
    }
};
//# sourceMappingURL=wrappers.js.map