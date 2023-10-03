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
exports.QueryAllCallbackDataResponse = exports.QueryAllCallbackDataRequest = exports.QueryGetCallbackDataResponse = exports.QueryGetCallbackDataRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const callback_data_1 = require("./callback_data");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetCallbackDataRequest() {
    return {
        callbackKey: ""
    };
}
exports.QueryGetCallbackDataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.callbackKey !== "") {
            writer.uint32(10).string(message.callbackKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetCallbackDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.callbackKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetCallbackDataRequest();
        message.callbackKey = object.callbackKey ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            callbackKey: object.callback_key
        };
    },
    toAmino(message) {
        const obj = {};
        obj.callback_key = message.callbackKey;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetCallbackDataRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetCallbackDataRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetCallbackDataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.QueryGetCallbackDataRequest",
            value: exports.QueryGetCallbackDataRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetCallbackDataResponse() {
    return {
        callbackData: callback_data_1.CallbackData.fromPartial({})
    };
}
exports.QueryGetCallbackDataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.callbackData !== undefined) {
            callback_data_1.CallbackData.encode(message.callbackData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetCallbackDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.callbackData = callback_data_1.CallbackData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetCallbackDataResponse();
        message.callbackData = object.callbackData !== undefined && object.callbackData !== null ? callback_data_1.CallbackData.fromPartial(object.callbackData) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            callbackData: object?.callback_data ? callback_data_1.CallbackData.fromAmino(object.callback_data) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.callback_data = message.callbackData ? callback_data_1.CallbackData.toAmino(message.callbackData) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetCallbackDataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetCallbackDataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetCallbackDataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.QueryGetCallbackDataResponse",
            value: exports.QueryGetCallbackDataResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllCallbackDataRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAllCallbackDataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllCallbackDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllCallbackDataRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllCallbackDataRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllCallbackDataRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllCallbackDataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.QueryAllCallbackDataRequest",
            value: exports.QueryAllCallbackDataRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllCallbackDataResponse() {
    return {
        callbackData: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryAllCallbackDataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.callbackData) {
            callback_data_1.CallbackData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllCallbackDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.callbackData.push(callback_data_1.CallbackData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllCallbackDataResponse();
        message.callbackData = object.callbackData?.map(e => callback_data_1.CallbackData.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            callbackData: Array.isArray(object?.callback_data) ? object.callback_data.map((e) => callback_data_1.CallbackData.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.callbackData) {
            obj.callback_data = message.callbackData.map(e => e ? callback_data_1.CallbackData.toAmino(e) : undefined);
        }
        else {
            obj.callback_data = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllCallbackDataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllCallbackDataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllCallbackDataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.QueryAllCallbackDataResponse",
            value: exports.QueryAllCallbackDataResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map