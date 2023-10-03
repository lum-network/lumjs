import { Query, QueryAmino, QuerySDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface QueryPendingQueriesRequest {
}
export interface QueryPendingQueriesRequestProtoMsg {
    typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest";
    value: Uint8Array;
}
export interface QueryPendingQueriesRequestAmino {
}
export interface QueryPendingQueriesRequestAminoMsg {
    type: "/stride.interchainquery.v1.QueryPendingQueriesRequest";
    value: QueryPendingQueriesRequestAmino;
}
export interface QueryPendingQueriesRequestSDKType {
}
export interface QueryPendingQueriesResponse {
    pendingQueries: Query[];
}
export interface QueryPendingQueriesResponseProtoMsg {
    typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesResponse";
    value: Uint8Array;
}
export interface QueryPendingQueriesResponseAmino {
    pending_queries: QueryAmino[];
}
export interface QueryPendingQueriesResponseAminoMsg {
    type: "/stride.interchainquery.v1.QueryPendingQueriesResponse";
    value: QueryPendingQueriesResponseAmino;
}
export interface QueryPendingQueriesResponseSDKType {
    pending_queries: QuerySDKType[];
}
export interface QueryQueriesRequest {
}
export interface QueryQueriesRequestProtoMsg {
    typeUrl: "/stride.interchainquery.v1.QueryQueriesRequest";
    value: Uint8Array;
}
export interface QueryQueriesRequestAmino {
}
export interface QueryQueriesRequestAminoMsg {
    type: "/stride.interchainquery.v1.QueryQueriesRequest";
    value: QueryQueriesRequestAmino;
}
export interface QueryQueriesRequestSDKType {
}
export interface QueryQueriesResponse {
    queries: Query[];
}
export interface QueryQueriesResponseProtoMsg {
    typeUrl: "/stride.interchainquery.v1.QueryQueriesResponse";
    value: Uint8Array;
}
export interface QueryQueriesResponseAmino {
    queries: QueryAmino[];
}
export interface QueryQueriesResponseAminoMsg {
    type: "/stride.interchainquery.v1.QueryQueriesResponse";
    value: QueryQueriesResponseAmino;
}
export interface QueryQueriesResponseSDKType {
    queries: QuerySDKType[];
}
export declare const QueryPendingQueriesRequest: {
    encode(_: QueryPendingQueriesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingQueriesRequest;
    fromPartial(_: DeepPartial<QueryPendingQueriesRequest>): QueryPendingQueriesRequest;
    fromAmino(_: QueryPendingQueriesRequestAmino): QueryPendingQueriesRequest;
    toAmino(_: QueryPendingQueriesRequest): QueryPendingQueriesRequestAmino;
    fromAminoMsg(object: QueryPendingQueriesRequestAminoMsg): QueryPendingQueriesRequest;
    fromProtoMsg(message: QueryPendingQueriesRequestProtoMsg): QueryPendingQueriesRequest;
    toProto(message: QueryPendingQueriesRequest): Uint8Array;
    toProtoMsg(message: QueryPendingQueriesRequest): QueryPendingQueriesRequestProtoMsg;
};
export declare const QueryPendingQueriesResponse: {
    encode(message: QueryPendingQueriesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingQueriesResponse;
    fromPartial(object: DeepPartial<QueryPendingQueriesResponse>): QueryPendingQueriesResponse;
    fromAmino(object: QueryPendingQueriesResponseAmino): QueryPendingQueriesResponse;
    toAmino(message: QueryPendingQueriesResponse): QueryPendingQueriesResponseAmino;
    fromAminoMsg(object: QueryPendingQueriesResponseAminoMsg): QueryPendingQueriesResponse;
    fromProtoMsg(message: QueryPendingQueriesResponseProtoMsg): QueryPendingQueriesResponse;
    toProto(message: QueryPendingQueriesResponse): Uint8Array;
    toProtoMsg(message: QueryPendingQueriesResponse): QueryPendingQueriesResponseProtoMsg;
};
export declare const QueryQueriesRequest: {
    encode(_: QueryQueriesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryQueriesRequest;
    fromPartial(_: DeepPartial<QueryQueriesRequest>): QueryQueriesRequest;
    fromAmino(_: QueryQueriesRequestAmino): QueryQueriesRequest;
    toAmino(_: QueryQueriesRequest): QueryQueriesRequestAmino;
    fromAminoMsg(object: QueryQueriesRequestAminoMsg): QueryQueriesRequest;
    fromProtoMsg(message: QueryQueriesRequestProtoMsg): QueryQueriesRequest;
    toProto(message: QueryQueriesRequest): Uint8Array;
    toProtoMsg(message: QueryQueriesRequest): QueryQueriesRequestProtoMsg;
};
export declare const QueryQueriesResponse: {
    encode(message: QueryQueriesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryQueriesResponse;
    fromPartial(object: DeepPartial<QueryQueriesResponse>): QueryQueriesResponse;
    fromAmino(object: QueryQueriesResponseAmino): QueryQueriesResponse;
    toAmino(message: QueryQueriesResponse): QueryQueriesResponseAmino;
    fromAminoMsg(object: QueryQueriesResponseAminoMsg): QueryQueriesResponse;
    fromProtoMsg(message: QueryQueriesResponseProtoMsg): QueryQueriesResponse;
    toProto(message: QueryQueriesResponse): Uint8Array;
    toProtoMsg(message: QueryQueriesResponse): QueryQueriesResponseProtoMsg;
};
