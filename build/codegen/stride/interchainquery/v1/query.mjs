import { Query } from "./genesis";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryPendingQueriesRequest() {
    return {};
}
export const QueryPendingQueriesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromPartial(_) {
        const message = createBaseQueryPendingQueriesRequest();
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
        return QueryPendingQueriesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPendingQueriesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPendingQueriesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest",
            value: QueryPendingQueriesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPendingQueriesResponse() {
    return {
        pendingQueries: []
    };
}
export const QueryPendingQueriesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pendingQueries) {
            Query.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryPendingQueriesResponse();
        message.pendingQueries = object.pendingQueries?.map(e => Query.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            pendingQueries: Array.isArray(object?.pending_queries) ? object.pending_queries.map((e) => Query.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pendingQueries) {
            obj.pending_queries = message.pendingQueries.map(e => e ? Query.toAmino(e) : undefined);
        }
        else {
            obj.pending_queries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPendingQueriesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPendingQueriesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPendingQueriesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesResponse",
            value: QueryPendingQueriesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryQueriesRequest() {
    return {};
}
export const QueryQueriesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromPartial(_) {
        const message = createBaseQueryQueriesRequest();
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
        return QueryQueriesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryQueriesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryQueriesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stride.interchainquery.v1.QueryQueriesRequest",
            value: QueryQueriesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryQueriesResponse() {
    return {
        queries: []
    };
}
export const QueryQueriesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.queries) {
            Query.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryQueriesResponse();
        message.queries = object.queries?.map(e => Query.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => Query.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.queries) {
            obj.queries = message.queries.map(e => e ? Query.toAmino(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryQueriesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryQueriesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryQueriesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stride.interchainquery.v1.QueryQueriesResponse",
            value: QueryQueriesResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map