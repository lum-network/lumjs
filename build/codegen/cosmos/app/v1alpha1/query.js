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
exports.QueryConfigResponse = exports.QueryConfigRequest = void 0;
const config_1 = require("./config");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQueryConfigRequest() {
    return {};
}
exports.QueryConfigRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConfigRequest();
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
        const message = createBaseQueryConfigRequest();
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
        return exports.QueryConfigRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConfigRequest",
            value: exports.QueryConfigRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConfigRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConfigRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
            value: exports.QueryConfigRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConfigResponse() {
    return {
        config: config_1.Config.fromPartial({})
    };
}
exports.QueryConfigResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            config_1.Config.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = config_1.Config.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryConfigResponse();
        message.config = object.config !== undefined && object.config !== null ? config_1.Config.fromPartial(object.config) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            config: object?.config ? config_1.Config.fromAmino(object.config) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.config = message.config ? config_1.Config.toAmino(message.config) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConfigResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConfigResponse",
            value: exports.QueryConfigResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConfigResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConfigResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
            value: exports.QueryConfigResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map