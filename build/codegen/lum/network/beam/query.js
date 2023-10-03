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
exports.QueryFetchBeamsOpenQueueResponse = exports.QueryFetchBeamsOpenQueueRequest = exports.QueryFetchBeamsResponse = exports.QueryFetchBeamsRequest = exports.QueryGetBeamResponse = exports.QueryGetBeamRequest = void 0;
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const beam_1 = require("./beam");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseQueryGetBeamRequest() {
    return {
        id: ""
    };
}
exports.QueryGetBeamRequest = {
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
        return exports.QueryGetBeamRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetBeamRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetBeamRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.QueryGetBeamRequest",
            value: exports.QueryGetBeamRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetBeamResponse() {
    return {
        beam: beam_1.Beam.fromPartial({})
    };
}
exports.QueryGetBeamResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.beam !== undefined) {
            beam_1.Beam.encode(message.beam, writer.uint32(10).fork()).ldelim();
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
                    message.beam = beam_1.Beam.decode(reader, reader.uint32());
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
        message.beam = object.beam !== undefined && object.beam !== null ? beam_1.Beam.fromPartial(object.beam) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            beam: object?.beam ? beam_1.Beam.fromAmino(object.beam) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.beam = message.beam ? beam_1.Beam.toAmino(message.beam) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetBeamResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetBeamResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetBeamResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.QueryGetBeamResponse",
            value: exports.QueryGetBeamResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFetchBeamsRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({}),
        state: 0
    };
}
exports.QueryFetchBeamsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        message.state = object.state ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined,
            state: (0, helpers_1.isSet)(object.state) ? (0, beam_1.beamStateFromJSON)(object.state) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        obj.state = message.state;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFetchBeamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFetchBeamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFetchBeamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.QueryFetchBeamsRequest",
            value: exports.QueryFetchBeamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFetchBeamsResponse() {
    return {
        beams: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryFetchBeamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.beams) {
            beam_1.Beam.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.beams.push(beam_1.Beam.decode(reader, reader.uint32()));
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
        const message = createBaseQueryFetchBeamsResponse();
        message.beams = object.beams?.map(e => beam_1.Beam.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            beams: Array.isArray(object?.beams) ? object.beams.map((e) => beam_1.Beam.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.beams) {
            obj.beams = message.beams.map(e => e ? beam_1.Beam.toAmino(e) : undefined);
        }
        else {
            obj.beams = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFetchBeamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFetchBeamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFetchBeamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.QueryFetchBeamsResponse",
            value: exports.QueryFetchBeamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFetchBeamsOpenQueueRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryFetchBeamsOpenQueueRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
        const message = createBaseQueryFetchBeamsOpenQueueRequest();
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
        return exports.QueryFetchBeamsOpenQueueRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFetchBeamsOpenQueueRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFetchBeamsOpenQueueRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.QueryFetchBeamsOpenQueueRequest",
            value: exports.QueryFetchBeamsOpenQueueRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFetchBeamsOpenQueueResponse() {
    return {
        beamIds: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryFetchBeamsOpenQueueResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.beamIds) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
        const message = createBaseQueryFetchBeamsOpenQueueResponse();
        message.beamIds = object.beamIds?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            beamIds: Array.isArray(object?.beam_ids) ? object.beam_ids.map((e) => e) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
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
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFetchBeamsOpenQueueResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFetchBeamsOpenQueueResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFetchBeamsOpenQueueResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.QueryFetchBeamsOpenQueueResponse",
            value: exports.QueryFetchBeamsOpenQueueResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map