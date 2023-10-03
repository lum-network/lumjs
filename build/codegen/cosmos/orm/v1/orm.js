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
exports.SingletonDescriptor = exports.SecondaryIndexDescriptor = exports.PrimaryKeyDescriptor = exports.TableDescriptor = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseTableDescriptor() {
    return {
        primaryKey: exports.PrimaryKeyDescriptor.fromPartial({}),
        index: [],
        id: 0
    };
}
exports.TableDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.primaryKey !== undefined) {
            exports.PrimaryKeyDescriptor.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.index) {
            exports.SecondaryIndexDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.id !== 0) {
            writer.uint32(24).uint32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTableDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.primaryKey = exports.PrimaryKeyDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.index.push(exports.SecondaryIndexDescriptor.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTableDescriptor();
        message.primaryKey = object.primaryKey !== undefined && object.primaryKey !== null ? exports.PrimaryKeyDescriptor.fromPartial(object.primaryKey) : undefined;
        message.index = object.index?.map(e => exports.SecondaryIndexDescriptor.fromPartial(e)) || [];
        message.id = object.id ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            primaryKey: object?.primary_key ? exports.PrimaryKeyDescriptor.fromAmino(object.primary_key) : undefined,
            index: Array.isArray(object?.index) ? object.index.map((e) => exports.SecondaryIndexDescriptor.fromAmino(e)) : [],
            id: object.id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.primary_key = message.primaryKey ? exports.PrimaryKeyDescriptor.toAmino(message.primaryKey) : undefined;
        if (message.index) {
            obj.index = message.index.map(e => e ? exports.SecondaryIndexDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.index = [];
        }
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TableDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TableDescriptor",
            value: exports.TableDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TableDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.TableDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.v1.TableDescriptor",
            value: exports.TableDescriptor.encode(message).finish()
        };
    }
};
function createBasePrimaryKeyDescriptor() {
    return {
        fields: "",
        autoIncrement: false
    };
}
exports.PrimaryKeyDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.autoIncrement === true) {
            writer.uint32(16).bool(message.autoIncrement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrimaryKeyDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = reader.string();
                    break;
                case 2:
                    message.autoIncrement = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePrimaryKeyDescriptor();
        message.fields = object.fields ?? "";
        message.autoIncrement = object.autoIncrement ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            fields: object.fields,
            autoIncrement: object.auto_increment
        };
    },
    toAmino(message) {
        const obj = {};
        obj.fields = message.fields;
        obj.auto_increment = message.autoIncrement;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PrimaryKeyDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PrimaryKeyDescriptor",
            value: exports.PrimaryKeyDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PrimaryKeyDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.PrimaryKeyDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor",
            value: exports.PrimaryKeyDescriptor.encode(message).finish()
        };
    }
};
function createBaseSecondaryIndexDescriptor() {
    return {
        fields: "",
        id: 0,
        unique: false
    };
}
exports.SecondaryIndexDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint32(message.id);
        }
        if (message.unique === true) {
            writer.uint32(24).bool(message.unique);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecondaryIndexDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = reader.string();
                    break;
                case 2:
                    message.id = reader.uint32();
                    break;
                case 3:
                    message.unique = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSecondaryIndexDescriptor();
        message.fields = object.fields ?? "";
        message.id = object.id ?? 0;
        message.unique = object.unique ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            fields: object.fields,
            id: object.id,
            unique: object.unique
        };
    },
    toAmino(message) {
        const obj = {};
        obj.fields = message.fields;
        obj.id = message.id;
        obj.unique = message.unique;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SecondaryIndexDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SecondaryIndexDescriptor",
            value: exports.SecondaryIndexDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SecondaryIndexDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.SecondaryIndexDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor",
            value: exports.SecondaryIndexDescriptor.encode(message).finish()
        };
    }
};
function createBaseSingletonDescriptor() {
    return {
        id: 0
    };
}
exports.SingletonDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSingletonDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSingletonDescriptor();
        message.id = object.id ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SingletonDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SingletonDescriptor",
            value: exports.SingletonDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SingletonDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.SingletonDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.v1.SingletonDescriptor",
            value: exports.SingletonDescriptor.encode(message).finish()
        };
    }
};
//# sourceMappingURL=orm.js.map