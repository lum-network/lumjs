import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Beam, beamStateFromJSON } from "./beam";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseQueryGetBeamRequest() {
    return {
        id: ""
    };
}
export const QueryGetBeamRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetBeamRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetBeamRequest();
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetBeamRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetBeamRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetBeamRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.QueryGetBeamRequest",
            value: QueryGetBeamRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetBeamResponse() {
    return {
        beam: Beam.fromPartial({})
    };
}
export const QueryGetBeamResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.beam !== undefined) {
            Beam.encode(message.beam, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetBeamResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beam = Beam.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetBeamResponse();
        message.beam = object.beam !== undefined && object.beam !== null ? Beam.fromPartial(object.beam) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            beam: object?.beam ? Beam.fromAmino(object.beam) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.beam = message.beam ? Beam.toAmino(message.beam) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetBeamResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetBeamResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetBeamResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.QueryGetBeamResponse",
            value: QueryGetBeamResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFetchBeamsRequest() {
    return {
        pagination: PageRequest.fromPartial({}),
        state: 0
    };
}
export const QueryFetchBeamsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFetchBeamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFetchBeamsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.state = object.state ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
            state: isSet(object.state) ? beamStateFromJSON(object.state) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        obj.state = message.state;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFetchBeamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFetchBeamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryFetchBeamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.QueryFetchBeamsRequest",
            value: QueryFetchBeamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFetchBeamsResponse() {
    return {
        beams: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryFetchBeamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.beams) {
            Beam.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFetchBeamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beams.push(Beam.decode(reader, reader.uint32()));
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
        const message = createBaseQueryFetchBeamsResponse();
        message.beams = object.beams?.map(e => Beam.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            beams: Array.isArray(object?.beams) ? object.beams.map((e) => Beam.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.beams) {
            obj.beams = message.beams.map(e => e ? Beam.toAmino(e) : undefined);
        }
        else {
            obj.beams = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFetchBeamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFetchBeamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFetchBeamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.QueryFetchBeamsResponse",
            value: QueryFetchBeamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFetchBeamsOpenQueueRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryFetchBeamsOpenQueueRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFetchBeamsOpenQueueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
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
        const message = createBaseQueryFetchBeamsOpenQueueRequest();
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
        return QueryFetchBeamsOpenQueueRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFetchBeamsOpenQueueRequest.decode(message.value);
    },
    toProto(message) {
        return QueryFetchBeamsOpenQueueRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.QueryFetchBeamsOpenQueueRequest",
            value: QueryFetchBeamsOpenQueueRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFetchBeamsOpenQueueResponse() {
    return {
        beamIds: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryFetchBeamsOpenQueueResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.beamIds) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFetchBeamsOpenQueueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beamIds.push(reader.string());
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
        const message = createBaseQueryFetchBeamsOpenQueueResponse();
        message.beamIds = object.beamIds?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            beamIds: Array.isArray(object?.beam_ids) ? object.beam_ids.map((e) => e) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.beamIds) {
            obj.beam_ids = message.beamIds.map(e => e);
        }
        else {
            obj.beam_ids = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFetchBeamsOpenQueueResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFetchBeamsOpenQueueResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFetchBeamsOpenQueueResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.QueryFetchBeamsOpenQueueResponse",
            value: QueryFetchBeamsOpenQueueResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map