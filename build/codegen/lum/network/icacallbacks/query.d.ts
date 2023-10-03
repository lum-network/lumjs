import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { CallbackData, CallbackDataAmino, CallbackDataSDKType } from "./callback_data";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/lum.network.icacallbacks.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/lum.network.icacallbacks.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
    callback_key: string;
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
    pagination: PageRequest | undefined;
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
    pagination: PageRequestSDKType | undefined;
}
export interface QueryAllCallbackDataResponse {
    callbackData: CallbackData[];
    pagination: PageResponse | undefined;
}
export interface QueryAllCallbackDataResponseProtoMsg {
    typeUrl: "/lum.network.icacallbacks.QueryAllCallbackDataResponse";
    value: Uint8Array;
}
export interface QueryAllCallbackDataResponseAmino {
    callback_data: CallbackDataAmino[];
    pagination?: PageResponseAmino | undefined;
}
export interface QueryAllCallbackDataResponseAminoMsg {
    type: "/lum.network.icacallbacks.QueryAllCallbackDataResponse";
    value: QueryAllCallbackDataResponseAmino;
}
export interface QueryAllCallbackDataResponseSDKType {
    callback_data: CallbackDataSDKType[];
    pagination: PageResponseSDKType | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryGetCallbackDataRequest: {
    encode(message: QueryGetCallbackDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCallbackDataRequest;
    fromPartial(object: DeepPartial<QueryGetCallbackDataRequest>): QueryGetCallbackDataRequest;
    fromAmino(object: QueryGetCallbackDataRequestAmino): QueryGetCallbackDataRequest;
    toAmino(message: QueryGetCallbackDataRequest): QueryGetCallbackDataRequestAmino;
    fromAminoMsg(object: QueryGetCallbackDataRequestAminoMsg): QueryGetCallbackDataRequest;
    fromProtoMsg(message: QueryGetCallbackDataRequestProtoMsg): QueryGetCallbackDataRequest;
    toProto(message: QueryGetCallbackDataRequest): Uint8Array;
    toProtoMsg(message: QueryGetCallbackDataRequest): QueryGetCallbackDataRequestProtoMsg;
};
export declare const QueryGetCallbackDataResponse: {
    encode(message: QueryGetCallbackDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCallbackDataResponse;
    fromPartial(object: DeepPartial<QueryGetCallbackDataResponse>): QueryGetCallbackDataResponse;
    fromAmino(object: QueryGetCallbackDataResponseAmino): QueryGetCallbackDataResponse;
    toAmino(message: QueryGetCallbackDataResponse): QueryGetCallbackDataResponseAmino;
    fromAminoMsg(object: QueryGetCallbackDataResponseAminoMsg): QueryGetCallbackDataResponse;
    fromProtoMsg(message: QueryGetCallbackDataResponseProtoMsg): QueryGetCallbackDataResponse;
    toProto(message: QueryGetCallbackDataResponse): Uint8Array;
    toProtoMsg(message: QueryGetCallbackDataResponse): QueryGetCallbackDataResponseProtoMsg;
};
export declare const QueryAllCallbackDataRequest: {
    encode(message: QueryAllCallbackDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCallbackDataRequest;
    fromPartial(object: DeepPartial<QueryAllCallbackDataRequest>): QueryAllCallbackDataRequest;
    fromAmino(object: QueryAllCallbackDataRequestAmino): QueryAllCallbackDataRequest;
    toAmino(message: QueryAllCallbackDataRequest): QueryAllCallbackDataRequestAmino;
    fromAminoMsg(object: QueryAllCallbackDataRequestAminoMsg): QueryAllCallbackDataRequest;
    fromProtoMsg(message: QueryAllCallbackDataRequestProtoMsg): QueryAllCallbackDataRequest;
    toProto(message: QueryAllCallbackDataRequest): Uint8Array;
    toProtoMsg(message: QueryAllCallbackDataRequest): QueryAllCallbackDataRequestProtoMsg;
};
export declare const QueryAllCallbackDataResponse: {
    encode(message: QueryAllCallbackDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCallbackDataResponse;
    fromPartial(object: DeepPartial<QueryAllCallbackDataResponse>): QueryAllCallbackDataResponse;
    fromAmino(object: QueryAllCallbackDataResponseAmino): QueryAllCallbackDataResponse;
    toAmino(message: QueryAllCallbackDataResponse): QueryAllCallbackDataResponseAmino;
    fromAminoMsg(object: QueryAllCallbackDataResponseAminoMsg): QueryAllCallbackDataResponse;
    fromProtoMsg(message: QueryAllCallbackDataResponseProtoMsg): QueryAllCallbackDataResponse;
    toProto(message: QueryAllCallbackDataResponse): Uint8Array;
    toProtoMsg(message: QueryAllCallbackDataResponse): QueryAllCallbackDataResponseProtoMsg;
};
