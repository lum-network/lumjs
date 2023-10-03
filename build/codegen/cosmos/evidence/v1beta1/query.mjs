import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryEvidenceRequest() {
    return {
        evidenceHash: new Uint8Array()
    };
}
export const QueryEvidenceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.evidenceHash.length !== 0) {
            writer.uint32(10).bytes(message.evidenceHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEvidenceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidenceHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEvidenceRequest();
        message.evidenceHash = object.evidenceHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            evidenceHash: object.evidence_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.evidence_hash = message.evidenceHash;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEvidenceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryEvidenceRequest",
            value: QueryEvidenceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryEvidenceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryEvidenceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest",
            value: QueryEvidenceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEvidenceResponse() {
    return {
        evidence: Any.fromPartial({})
    };
}
export const QueryEvidenceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.evidence !== undefined) {
            Any.encode(message.evidence, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEvidenceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEvidenceResponse();
        message.evidence = object.evidence !== undefined && object.evidence !== null ? Any.fromPartial(object.evidence) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            evidence: object?.evidence ? Any.fromAmino(object.evidence) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.evidence = message.evidence ? Any.toAmino(message.evidence) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEvidenceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryEvidenceResponse",
            value: QueryEvidenceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryEvidenceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryEvidenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse",
            value: QueryEvidenceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllEvidenceRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAllEvidenceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllEvidenceRequest();
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
        const message = createBaseQueryAllEvidenceRequest();
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
        return QueryAllEvidenceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllEvidenceRequest",
            value: QueryAllEvidenceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllEvidenceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllEvidenceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest",
            value: QueryAllEvidenceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllEvidenceResponse() {
    return {
        evidence: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryAllEvidenceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.evidence) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllEvidenceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(Any.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAllEvidenceResponse();
        message.evidence = object.evidence?.map(e => Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            evidence: Array.isArray(object?.evidence) ? object.evidence.map((e) => Any.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllEvidenceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllEvidenceResponse",
            value: QueryAllEvidenceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllEvidenceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllEvidenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse",
            value: QueryAllEvidenceResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map