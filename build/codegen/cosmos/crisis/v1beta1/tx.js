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
exports.MsgVerifyInvariantResponse = exports.MsgVerifyInvariant = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgVerifyInvariant() {
    return {
        sender: "",
        invariantModuleName: "",
        invariantRoute: ""
    };
}
exports.MsgVerifyInvariant = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.invariantModuleName !== "") {
            writer.uint32(18).string(message.invariantModuleName);
        }
        if (message.invariantRoute !== "") {
            writer.uint32(26).string(message.invariantRoute);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVerifyInvariant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.invariantModuleName = reader.string();
                    break;
                case 3:
                    message.invariantRoute = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgVerifyInvariant();
        message.sender = object.sender ?? "";
        message.invariantModuleName = object.invariantModuleName ?? "";
        message.invariantRoute = object.invariantRoute ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            invariantModuleName: object.invariant_module_name,
            invariantRoute: object.invariant_route
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.invariant_module_name = message.invariantModuleName;
        obj.invariant_route = message.invariantRoute;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVerifyInvariant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVerifyInvariant",
            value: exports.MsgVerifyInvariant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVerifyInvariant.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVerifyInvariant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
            value: exports.MsgVerifyInvariant.encode(message).finish()
        };
    }
};
function createBaseMsgVerifyInvariantResponse() {
    return {};
}
exports.MsgVerifyInvariantResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVerifyInvariantResponse();
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
        const message = createBaseMsgVerifyInvariantResponse();
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
        return exports.MsgVerifyInvariantResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVerifyInvariantResponse",
            value: exports.MsgVerifyInvariantResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVerifyInvariantResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVerifyInvariantResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
            value: exports.MsgVerifyInvariantResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map