import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { CallbackData } from "./callback_data";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
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
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetCallbackDataRequest() {
    return {
        callbackKey: ""
    };
}
export const QueryGetCallbackDataRequest = {
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
        return QueryGetCallbackDataRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetCallbackDataRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetCallbackDataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.QueryGetCallbackDataRequest",
            value: QueryGetCallbackDataRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetCallbackDataResponse() {
    return {
        callbackData: CallbackData.fromPartial({})
    };
}
export const QueryGetCallbackDataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.callbackData !== undefined) {
            CallbackData.encode(message.callbackData, writer.uint32(10).fork()).ldelim();
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
                    message.callbackData = CallbackData.decode(reader, reader.uint32());
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
        message.callbackData = object.callbackData !== undefined && object.callbackData !== null ? CallbackData.fromPartial(object.callbackData) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            callbackData: object?.callback_data ? CallbackData.fromAmino(object.callback_data) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.callback_data = message.callbackData ? CallbackData.toAmino(message.callbackData) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetCallbackDataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetCallbackDataResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetCallbackDataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.QueryGetCallbackDataResponse",
            value: QueryGetCallbackDataResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllCallbackDataRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAllCallbackDataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllCallbackDataRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllCallbackDataRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllCallbackDataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.QueryAllCallbackDataRequest",
            value: QueryAllCallbackDataRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllCallbackDataResponse() {
    return {
        callbackData: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryAllCallbackDataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.callbackData) {
            CallbackData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.callbackData.push(CallbackData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.callbackData = object.callbackData?.map(e => CallbackData.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            callbackData: Array.isArray(object?.callback_data) ? object.callback_data.map((e) => CallbackData.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.callbackData) {
            obj.callback_data = message.callbackData.map(e => e ? CallbackData.toAmino(e) : undefined);
        }
        else {
            obj.callback_data = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllCallbackDataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllCallbackDataResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllCallbackDataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.icacallbacks.QueryAllCallbackDataResponse",
            value: QueryAllCallbackDataResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map