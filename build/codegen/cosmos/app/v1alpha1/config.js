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
exports.ModuleConfig = exports.Config = void 0;
const any_1 = require("../../../google/protobuf/any");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseConfig() {
    return {
        modules: []
    };
}
exports.Config = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.modules) {
            exports.ModuleConfig.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modules.push(exports.ModuleConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConfig();
        message.modules = object.modules?.map(e => exports.ModuleConfig.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            modules: Array.isArray(object?.modules) ? object.modules.map((e) => exports.ModuleConfig.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.modules) {
            obj.modules = message.modules.map(e => e ? exports.ModuleConfig.toAmino(e) : undefined);
        }
        else {
            obj.modules = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Config.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Config",
            value: exports.Config.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Config.decode(message.value);
    },
    toProto(message) {
        return exports.Config.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.Config",
            value: exports.Config.encode(message).finish()
        };
    }
};
function createBaseModuleConfig() {
    return {
        name: "",
        config: any_1.Any.fromPartial({})
    };
}
exports.ModuleConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.config !== undefined) {
            any_1.Any.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.config = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleConfig();
        message.name = object.name ?? "";
        message.config = object.config !== undefined && object.config !== null ? any_1.Any.fromPartial(object.config) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            config: object?.config ? any_1.Any.fromAmino(object.config) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.config = message.config ? any_1.Any.toAmino(message.config) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleConfig.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleConfig",
            value: exports.ModuleConfig.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleConfig.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleConfig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.ModuleConfig",
            value: exports.ModuleConfig.encode(message).finish()
        };
    }
};
//# sourceMappingURL=config.js.map