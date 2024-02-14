import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { CallbackData, CallbackDataAmino, CallbackDataSDKType } from "./callback_data";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lum.network.icacallbacks.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lum.network.icacallbacks.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/lum.network.icacallbacks.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lum.network.icacallbacks.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType | undefined;
}
export interface QueryGetCallbackDataRequest {
  callbackKey: string;
}
export interface QueryGetCallbackDataRequestProtoMsg {
  typeUrl: "/lum.network.icacallbacks.QueryGetCallbackDataRequest";
  value: Uint8Array;
}
export interface QueryGetCallbackDataRequestAmino {
  callback_key?: string;
}
export interface QueryGetCallbackDataRequestAminoMsg {
  type: "/lum.network.icacallbacks.QueryGetCallbackDataRequest";
  value: QueryGetCallbackDataRequestAmino;
}
export interface QueryGetCallbackDataRequestSDKType {
  callback_key: string;
}
export interface QueryGetCallbackDataResponse {
  callbackData: CallbackData | undefined;
}
export interface QueryGetCallbackDataResponseProtoMsg {
  typeUrl: "/lum.network.icacallbacks.QueryGetCallbackDataResponse";
  value: Uint8Array;
}
export interface QueryGetCallbackDataResponseAmino {
  callback_data?: CallbackDataAmino | undefined;
}
export interface QueryGetCallbackDataResponseAminoMsg {
  type: "/lum.network.icacallbacks.QueryGetCallbackDataResponse";
  value: QueryGetCallbackDataResponseAmino;
}
export interface QueryGetCallbackDataResponseSDKType {
  callback_data: CallbackDataSDKType | undefined;
}
export interface QueryAllCallbackDataRequest {
  pagination?: PageRequest | undefined;
}
export interface QueryAllCallbackDataRequestProtoMsg {
  typeUrl: "/lum.network.icacallbacks.QueryAllCallbackDataRequest";
  value: Uint8Array;
}
export interface QueryAllCallbackDataRequestAmino {
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAllCallbackDataRequestAminoMsg {
  type: "/lum.network.icacallbacks.QueryAllCallbackDataRequest";
  value: QueryAllCallbackDataRequestAmino;
}
export interface QueryAllCallbackDataRequestSDKType {
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryAllCallbackDataResponse {
  callbackData: CallbackData[];
  pagination?: PageResponse | undefined;
}
export interface QueryAllCallbackDataResponseProtoMsg {
  typeUrl: "/lum.network.icacallbacks.QueryAllCallbackDataResponse";
  value: Uint8Array;
}
export interface QueryAllCallbackDataResponseAmino {
  callback_data?: CallbackDataAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryAllCallbackDataResponseAminoMsg {
  type: "/lum.network.icacallbacks.QueryAllCallbackDataResponse";
  value: QueryAllCallbackDataResponseAmino;
}
export interface QueryAllCallbackDataResponseSDKType {
  callback_data: CallbackDataSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lum.network.icacallbacks.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.icacallbacks.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lum.network.icacallbacks.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/lum.network.icacallbacks.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetCallbackDataRequest(): QueryGetCallbackDataRequest {
  return {
    callbackKey: ""
  };
}
export const QueryGetCallbackDataRequest = {
  typeUrl: "/lum.network.icacallbacks.QueryGetCallbackDataRequest",
  encode(message: QueryGetCallbackDataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.callbackKey !== "") {
      writer.uint32(10).string(message.callbackKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCallbackDataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryGetCallbackDataRequest>): QueryGetCallbackDataRequest {
    const message = createBaseQueryGetCallbackDataRequest();
    message.callbackKey = object.callbackKey ?? "";
    return message;
  },
  fromAmino(object: QueryGetCallbackDataRequestAmino): QueryGetCallbackDataRequest {
    const message = createBaseQueryGetCallbackDataRequest();
    if (object.callback_key !== undefined && object.callback_key !== null) {
      message.callbackKey = object.callback_key;
    }
    return message;
  },
  toAmino(message: QueryGetCallbackDataRequest): QueryGetCallbackDataRequestAmino {
    const obj: any = {};
    obj.callback_key = message.callbackKey;
    return obj;
  },
  fromAminoMsg(object: QueryGetCallbackDataRequestAminoMsg): QueryGetCallbackDataRequest {
    return QueryGetCallbackDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCallbackDataRequestProtoMsg): QueryGetCallbackDataRequest {
    return QueryGetCallbackDataRequest.decode(message.value);
  },
  toProto(message: QueryGetCallbackDataRequest): Uint8Array {
    return QueryGetCallbackDataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCallbackDataRequest): QueryGetCallbackDataRequestProtoMsg {
    return {
      typeUrl: "/lum.network.icacallbacks.QueryGetCallbackDataRequest",
      value: QueryGetCallbackDataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetCallbackDataResponse(): QueryGetCallbackDataResponse {
  return {
    callbackData: CallbackData.fromPartial({})
  };
}
export const QueryGetCallbackDataResponse = {
  typeUrl: "/lum.network.icacallbacks.QueryGetCallbackDataResponse",
  encode(message: QueryGetCallbackDataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.callbackData !== undefined) {
      CallbackData.encode(message.callbackData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCallbackDataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryGetCallbackDataResponse>): QueryGetCallbackDataResponse {
    const message = createBaseQueryGetCallbackDataResponse();
    message.callbackData = object.callbackData !== undefined && object.callbackData !== null ? CallbackData.fromPartial(object.callbackData) : undefined;
    return message;
  },
  fromAmino(object: QueryGetCallbackDataResponseAmino): QueryGetCallbackDataResponse {
    const message = createBaseQueryGetCallbackDataResponse();
    if (object.callback_data !== undefined && object.callback_data !== null) {
      message.callbackData = CallbackData.fromAmino(object.callback_data);
    }
    return message;
  },
  toAmino(message: QueryGetCallbackDataResponse): QueryGetCallbackDataResponseAmino {
    const obj: any = {};
    obj.callback_data = message.callbackData ? CallbackData.toAmino(message.callbackData) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetCallbackDataResponseAminoMsg): QueryGetCallbackDataResponse {
    return QueryGetCallbackDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCallbackDataResponseProtoMsg): QueryGetCallbackDataResponse {
    return QueryGetCallbackDataResponse.decode(message.value);
  },
  toProto(message: QueryGetCallbackDataResponse): Uint8Array {
    return QueryGetCallbackDataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCallbackDataResponse): QueryGetCallbackDataResponseProtoMsg {
    return {
      typeUrl: "/lum.network.icacallbacks.QueryGetCallbackDataResponse",
      value: QueryGetCallbackDataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllCallbackDataRequest(): QueryAllCallbackDataRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllCallbackDataRequest = {
  typeUrl: "/lum.network.icacallbacks.QueryAllCallbackDataRequest",
  encode(message: QueryAllCallbackDataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllCallbackDataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAllCallbackDataRequest>): QueryAllCallbackDataRequest {
    const message = createBaseQueryAllCallbackDataRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllCallbackDataRequestAmino): QueryAllCallbackDataRequest {
    const message = createBaseQueryAllCallbackDataRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllCallbackDataRequest): QueryAllCallbackDataRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllCallbackDataRequestAminoMsg): QueryAllCallbackDataRequest {
    return QueryAllCallbackDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllCallbackDataRequestProtoMsg): QueryAllCallbackDataRequest {
    return QueryAllCallbackDataRequest.decode(message.value);
  },
  toProto(message: QueryAllCallbackDataRequest): Uint8Array {
    return QueryAllCallbackDataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllCallbackDataRequest): QueryAllCallbackDataRequestProtoMsg {
    return {
      typeUrl: "/lum.network.icacallbacks.QueryAllCallbackDataRequest",
      value: QueryAllCallbackDataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllCallbackDataResponse(): QueryAllCallbackDataResponse {
  return {
    callbackData: [],
    pagination: undefined
  };
}
export const QueryAllCallbackDataResponse = {
  typeUrl: "/lum.network.icacallbacks.QueryAllCallbackDataResponse",
  encode(message: QueryAllCallbackDataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.callbackData) {
      CallbackData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllCallbackDataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAllCallbackDataResponse>): QueryAllCallbackDataResponse {
    const message = createBaseQueryAllCallbackDataResponse();
    message.callbackData = object.callbackData?.map(e => CallbackData.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllCallbackDataResponseAmino): QueryAllCallbackDataResponse {
    const message = createBaseQueryAllCallbackDataResponse();
    message.callbackData = object.callback_data?.map(e => CallbackData.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllCallbackDataResponse): QueryAllCallbackDataResponseAmino {
    const obj: any = {};
    if (message.callbackData) {
      obj.callback_data = message.callbackData.map(e => e ? CallbackData.toAmino(e) : undefined);
    } else {
      obj.callback_data = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllCallbackDataResponseAminoMsg): QueryAllCallbackDataResponse {
    return QueryAllCallbackDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllCallbackDataResponseProtoMsg): QueryAllCallbackDataResponse {
    return QueryAllCallbackDataResponse.decode(message.value);
  },
  toProto(message: QueryAllCallbackDataResponse): Uint8Array {
    return QueryAllCallbackDataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllCallbackDataResponse): QueryAllCallbackDataResponseProtoMsg {
    return {
      typeUrl: "/lum.network.icacallbacks.QueryAllCallbackDataResponse",
      value: QueryAllCallbackDataResponse.encode(message).finish()
    };
  }
};