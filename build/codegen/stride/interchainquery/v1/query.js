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
exports.QueryQueriesResponse = exports.QueryQueriesRequest = exports.QueryPendingQueriesResponse = exports.QueryPendingQueriesRequest = void 0;
const genesis_1 = require("./genesis");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQueryPendingQueriesRequest() {
    return {};
}
exports.QueryPendingQueriesRequest = {
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
        return exports.QueryPendingQueriesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPendingQueriesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPendingQueriesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest",
            value: exports.QueryPendingQueriesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPendingQueriesResponse() {
    return {
        pendingQueries: []
    };
}
exports.QueryPendingQueriesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pendingQueries) {
            genesis_1.Query.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.pendingQueries.push(genesis_1.Query.decode(reader, reader.uint32()));
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
        message.pendingQueries = object.pendingQueries?.map(e => genesis_1.Query.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            pendingQueries: Array.isArray(object?.pending_queries) ? object.pending_queries.map((e) => genesis_1.Query.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pendingQueries) {
            obj.pending_queries = message.pendingQueries.map(e => e ? genesis_1.Query.toAmino(e) : undefined);
        }
        else {
            obj.pending_queries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPendingQueriesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPendingQueriesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPendingQueriesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesResponse",
            value: exports.QueryPendingQueriesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryQueriesRequest() {
    return {};
}
exports.QueryQueriesRequest = {
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
        return exports.QueryQueriesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryQueriesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryQueriesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stride.interchainquery.v1.QueryQueriesRequest",
            value: exports.QueryQueriesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryQueriesResponse() {
    return {
        queries: []
    };
}
exports.QueryQueriesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.queries) {
            genesis_1.Query.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.queries.push(genesis_1.Query.decode(reader, reader.uint32()));
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
        message.queries = object.queries?.map(e => genesis_1.Query.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => genesis_1.Query.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.queries) {
            obj.queries = message.queries.map(e => e ? genesis_1.Query.toAmino(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryQueriesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryQueriesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryQueriesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stride.interchainquery.v1.QueryQueriesResponse",
            value: exports.QueryQueriesResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map