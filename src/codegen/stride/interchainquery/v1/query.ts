import { Query, QueryAmino, QuerySDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface QueryPendingQueriesRequest {}
export interface QueryPendingQueriesRequestProtoMsg {
  typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest";
  value: Uint8Array;
}
export interface QueryPendingQueriesRequestAmino {}
export interface QueryPendingQueriesRequestAminoMsg {
  type: "/stride.interchainquery.v1.QueryPendingQueriesRequest";
  value: QueryPendingQueriesRequestAmino;
}
export interface QueryPendingQueriesRequestSDKType {}
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
export interface QueryQueriesRequest {}
export interface QueryQueriesRequestProtoMsg {
  typeUrl: "/stride.interchainquery.v1.QueryQueriesRequest";
  value: Uint8Array;
}
export interface QueryQueriesRequestAmino {}
export interface QueryQueriesRequestAminoMsg {
  type: "/stride.interchainquery.v1.QueryQueriesRequest";
  value: QueryQueriesRequestAmino;
}
export interface QueryQueriesRequestSDKType {}
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
function createBaseQueryPendingQueriesRequest(): QueryPendingQueriesRequest {
  return {};
}
export const QueryPendingQueriesRequest = {
  encode(_: QueryPendingQueriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingQueriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingQueriesRequest();
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
  fromPartial(_: DeepPartial<QueryPendingQueriesRequest>): QueryPendingQueriesRequest {
    const message = createBaseQueryPendingQueriesRequest();
    return message;
  },
  fromAmino(_: QueryPendingQueriesRequestAmino): QueryPendingQueriesRequest {
    return {};
  },
  toAmino(_: QueryPendingQueriesRequest): QueryPendingQueriesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPendingQueriesRequestAminoMsg): QueryPendingQueriesRequest {
    return QueryPendingQueriesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingQueriesRequestProtoMsg): QueryPendingQueriesRequest {
    return QueryPendingQueriesRequest.decode(message.value);
  },
  toProto(message: QueryPendingQueriesRequest): Uint8Array {
    return QueryPendingQueriesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingQueriesRequest): QueryPendingQueriesRequestProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest",
      value: QueryPendingQueriesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingQueriesResponse(): QueryPendingQueriesResponse {
  return {
    pendingQueries: []
  };
}
export const QueryPendingQueriesResponse = {
  encode(message: QueryPendingQueriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pendingQueries) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingQueriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingQueriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingQueries.push(Query.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPendingQueriesResponse>): QueryPendingQueriesResponse {
    const message = createBaseQueryPendingQueriesResponse();
    message.pendingQueries = object.pendingQueries?.map(e => Query.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPendingQueriesResponseAmino): QueryPendingQueriesResponse {
    return {
      pendingQueries: Array.isArray(object?.pending_queries) ? object.pending_queries.map((e: any) => Query.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryPendingQueriesResponse): QueryPendingQueriesResponseAmino {
    const obj: any = {};
    if (message.pendingQueries) {
      obj.pending_queries = message.pendingQueries.map(e => e ? Query.toAmino(e) : undefined);
    } else {
      obj.pending_queries = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingQueriesResponseAminoMsg): QueryPendingQueriesResponse {
    return QueryPendingQueriesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingQueriesResponseProtoMsg): QueryPendingQueriesResponse {
    return QueryPendingQueriesResponse.decode(message.value);
  },
  toProto(message: QueryPendingQueriesResponse): Uint8Array {
    return QueryPendingQueriesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingQueriesResponse): QueryPendingQueriesResponseProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesResponse",
      value: QueryPendingQueriesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryQueriesRequest(): QueryQueriesRequest {
  return {};
}
export const QueryQueriesRequest = {
  encode(_: QueryQueriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQueriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQueriesRequest();
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
  fromPartial(_: DeepPartial<QueryQueriesRequest>): QueryQueriesRequest {
    const message = createBaseQueryQueriesRequest();
    return message;
  },
  fromAmino(_: QueryQueriesRequestAmino): QueryQueriesRequest {
    return {};
  },
  toAmino(_: QueryQueriesRequest): QueryQueriesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryQueriesRequestAminoMsg): QueryQueriesRequest {
    return QueryQueriesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQueriesRequestProtoMsg): QueryQueriesRequest {
    return QueryQueriesRequest.decode(message.value);
  },
  toProto(message: QueryQueriesRequest): Uint8Array {
    return QueryQueriesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryQueriesRequest): QueryQueriesRequestProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.QueryQueriesRequest",
      value: QueryQueriesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryQueriesResponse(): QueryQueriesResponse {
  return {
    queries: []
  };
}
export const QueryQueriesResponse = {
  encode(message: QueryQueriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQueriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQueriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries.push(Query.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryQueriesResponse>): QueryQueriesResponse {
    const message = createBaseQueryQueriesResponse();
    message.queries = object.queries?.map(e => Query.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryQueriesResponseAmino): QueryQueriesResponse {
    return {
      queries: Array.isArray(object?.queries) ? object.queries.map((e: any) => Query.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryQueriesResponse): QueryQueriesResponseAmino {
    const obj: any = {};
    if (message.queries) {
      obj.queries = message.queries.map(e => e ? Query.toAmino(e) : undefined);
    } else {
      obj.queries = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryQueriesResponseAminoMsg): QueryQueriesResponse {
    return QueryQueriesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQueriesResponseProtoMsg): QueryQueriesResponse {
    return QueryQueriesResponse.decode(message.value);
  },
  toProto(message: QueryQueriesResponse): Uint8Array {
    return QueryQueriesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryQueriesResponse): QueryQueriesResponseProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.QueryQueriesResponse",
      value: QueryQueriesResponse.encode(message).finish()
    };
  }
};