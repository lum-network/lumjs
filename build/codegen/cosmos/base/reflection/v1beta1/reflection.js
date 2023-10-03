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
exports.ListImplementationsResponse = exports.ListImplementationsRequest = exports.ListAllInterfacesResponse = exports.ListAllInterfacesRequest = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseListAllInterfacesRequest() {
    return {};
}
exports.ListAllInterfacesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAllInterfacesRequest();
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
        const message = createBaseListAllInterfacesRequest();
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
        return exports.ListAllInterfacesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListAllInterfacesRequest",
            value: exports.ListAllInterfacesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ListAllInterfacesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ListAllInterfacesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
            value: exports.ListAllInterfacesRequest.encode(message).finish()
        };
    }
};
function createBaseListAllInterfacesResponse() {
    return {
        interfaceNames: []
    };
}
exports.ListAllInterfacesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.interfaceNames) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAllInterfacesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaceNames.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseListAllInterfacesResponse();
        message.interfaceNames = object.interfaceNames?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            interfaceNames: Array.isArray(object?.interface_names) ? object.interface_names.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.interfaceNames) {
            obj.interface_names = message.interfaceNames.map(e => e);
        }
        else {
            obj.interface_names = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ListAllInterfacesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListAllInterfacesResponse",
            value: exports.ListAllInterfacesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ListAllInterfacesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ListAllInterfacesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
            value: exports.ListAllInterfacesResponse.encode(message).finish()
        };
    }
};
function createBaseListImplementationsRequest() {
    return {
        interfaceName: ""
    };
}
exports.ListImplementationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.interfaceName !== "") {
            writer.uint32(10).string(message.interfaceName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListImplementationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseListImplementationsRequest();
        message.interfaceName = object.interfaceName ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            interfaceName: object.interface_name
        };
    },
    toAmino(message) {
        const obj = {};
        obj.interface_name = message.interfaceName;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ListImplementationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListImplementationsRequest",
            value: exports.ListImplementationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ListImplementationsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ListImplementationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest",
            value: exports.ListImplementationsRequest.encode(message).finish()
        };
    }
};
function createBaseListImplementationsResponse() {
    return {
        implementationMessageNames: []
    };
}
exports.ListImplementationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.implementationMessageNames) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListImplementationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.implementationMessageNames.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseListImplementationsResponse();
        message.implementationMessageNames = object.implementationMessageNames?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            implementationMessageNames: Array.isArray(object?.implementation_message_names) ? object.implementation_message_names.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.implementationMessageNames) {
            obj.implementation_message_names = message.implementationMessageNames.map(e => e);
        }
        else {
            obj.implementation_message_names = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ListImplementationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListImplementationsResponse",
            value: exports.ListImplementationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ListImplementationsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ListImplementationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse",
            value: exports.ListImplementationsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=reflection.js.map