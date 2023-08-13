import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BeamState, Beam, BeamAmino, BeamSDKType, beamStateFromJSON } from "./beam";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "../../../helpers";
export interface QueryGetBeamRequest {
  id: string;
}
export interface QueryGetBeamRequestProtoMsg {
  typeUrl: "/lum.network.beam.QueryGetBeamRequest";
  value: Uint8Array;
}
export interface QueryGetBeamRequestAmino {
  id: string;
}
export interface QueryGetBeamRequestAminoMsg {
  type: "/lum.network.beam.QueryGetBeamRequest";
  value: QueryGetBeamRequestAmino;
}
export interface QueryGetBeamRequestSDKType {
  id: string;
}
export interface QueryGetBeamResponse {
  beam: Beam | undefined;
}
export interface QueryGetBeamResponseProtoMsg {
  typeUrl: "/lum.network.beam.QueryGetBeamResponse";
  value: Uint8Array;
}
export interface QueryGetBeamResponseAmino {
  beam?: BeamAmino | undefined;
}
export interface QueryGetBeamResponseAminoMsg {
  type: "/lum.network.beam.QueryGetBeamResponse";
  value: QueryGetBeamResponseAmino;
}
export interface QueryGetBeamResponseSDKType {
  beam: BeamSDKType | undefined;
}
export interface QueryFetchBeamsRequest {
  pagination: PageRequest | undefined;
  state: BeamState;
}
export interface QueryFetchBeamsRequestProtoMsg {
  typeUrl: "/lum.network.beam.QueryFetchBeamsRequest";
  value: Uint8Array;
}
export interface QueryFetchBeamsRequestAmino {
  pagination?: PageRequestAmino | undefined;
  state: BeamState;
}
export interface QueryFetchBeamsRequestAminoMsg {
  type: "/lum.network.beam.QueryFetchBeamsRequest";
  value: QueryFetchBeamsRequestAmino;
}
export interface QueryFetchBeamsRequestSDKType {
  pagination: PageRequestSDKType | undefined;
  state: BeamState;
}
export interface QueryFetchBeamsResponse {
  beams: Beam[];
  pagination: PageResponse | undefined;
}
export interface QueryFetchBeamsResponseProtoMsg {
  typeUrl: "/lum.network.beam.QueryFetchBeamsResponse";
  value: Uint8Array;
}
export interface QueryFetchBeamsResponseAmino {
  beams: BeamAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryFetchBeamsResponseAminoMsg {
  type: "/lum.network.beam.QueryFetchBeamsResponse";
  value: QueryFetchBeamsResponseAmino;
}
export interface QueryFetchBeamsResponseSDKType {
  beams: BeamSDKType[];
  pagination: PageResponseSDKType | undefined;
}
export interface QueryFetchBeamsOpenQueueRequest {
  pagination: PageRequest | undefined;
}
export interface QueryFetchBeamsOpenQueueRequestProtoMsg {
  typeUrl: "/lum.network.beam.QueryFetchBeamsOpenQueueRequest";
  value: Uint8Array;
}
export interface QueryFetchBeamsOpenQueueRequestAmino {
  pagination?: PageRequestAmino | undefined;
}
export interface QueryFetchBeamsOpenQueueRequestAminoMsg {
  type: "/lum.network.beam.QueryFetchBeamsOpenQueueRequest";
  value: QueryFetchBeamsOpenQueueRequestAmino;
}
export interface QueryFetchBeamsOpenQueueRequestSDKType {
  pagination: PageRequestSDKType | undefined;
}
export interface QueryFetchBeamsOpenQueueResponse {
  beamIds: string[];
  pagination: PageResponse | undefined;
}
export interface QueryFetchBeamsOpenQueueResponseProtoMsg {
  typeUrl: "/lum.network.beam.QueryFetchBeamsOpenQueueResponse";
  value: Uint8Array;
}
export interface QueryFetchBeamsOpenQueueResponseAmino {
  beam_ids: string[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryFetchBeamsOpenQueueResponseAminoMsg {
  type: "/lum.network.beam.QueryFetchBeamsOpenQueueResponse";
  value: QueryFetchBeamsOpenQueueResponseAmino;
}
export interface QueryFetchBeamsOpenQueueResponseSDKType {
  beam_ids: string[];
  pagination: PageResponseSDKType | undefined;
}
function createBaseQueryGetBeamRequest(): QueryGetBeamRequest {
  return {
    id: ""
  };
}
export const QueryGetBeamRequest = {
  encode(message: QueryGetBeamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBeamRequest {
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
  fromPartial(object: DeepPartial<QueryGetBeamRequest>): QueryGetBeamRequest {
    const message = createBaseQueryGetBeamRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryGetBeamRequestAmino): QueryGetBeamRequest {
    return {
      id: object.id
    };
  },
  toAmino(message: QueryGetBeamRequest): QueryGetBeamRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryGetBeamRequestAminoMsg): QueryGetBeamRequest {
    return QueryGetBeamRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBeamRequestProtoMsg): QueryGetBeamRequest {
    return QueryGetBeamRequest.decode(message.value);
  },
  toProto(message: QueryGetBeamRequest): Uint8Array {
    return QueryGetBeamRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBeamRequest): QueryGetBeamRequestProtoMsg {
    return {
      typeUrl: "/lum.network.beam.QueryGetBeamRequest",
      value: QueryGetBeamRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetBeamResponse(): QueryGetBeamResponse {
  return {
    beam: Beam.fromPartial({})
  };
}
export const QueryGetBeamResponse = {
  encode(message: QueryGetBeamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beam !== undefined) {
      Beam.encode(message.beam, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBeamResponse {
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
  fromPartial(object: DeepPartial<QueryGetBeamResponse>): QueryGetBeamResponse {
    const message = createBaseQueryGetBeamResponse();
    message.beam = object.beam !== undefined && object.beam !== null ? Beam.fromPartial(object.beam) : undefined;
    return message;
  },
  fromAmino(object: QueryGetBeamResponseAmino): QueryGetBeamResponse {
    return {
      beam: object?.beam ? Beam.fromAmino(object.beam) : undefined
    };
  },
  toAmino(message: QueryGetBeamResponse): QueryGetBeamResponseAmino {
    const obj: any = {};
    obj.beam = message.beam ? Beam.toAmino(message.beam) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBeamResponseAminoMsg): QueryGetBeamResponse {
    return QueryGetBeamResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBeamResponseProtoMsg): QueryGetBeamResponse {
    return QueryGetBeamResponse.decode(message.value);
  },
  toProto(message: QueryGetBeamResponse): Uint8Array {
    return QueryGetBeamResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBeamResponse): QueryGetBeamResponseProtoMsg {
    return {
      typeUrl: "/lum.network.beam.QueryGetBeamResponse",
      value: QueryGetBeamResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFetchBeamsRequest(): QueryFetchBeamsRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    state: 0
  };
}
export const QueryFetchBeamsRequest = {
  encode(message: QueryFetchBeamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchBeamsRequest {
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
          message.state = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFetchBeamsRequest>): QueryFetchBeamsRequest {
    const message = createBaseQueryFetchBeamsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.state = object.state ?? 0;
    return message;
  },
  fromAmino(object: QueryFetchBeamsRequestAmino): QueryFetchBeamsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      state: isSet(object.state) ? beamStateFromJSON(object.state) : -1
    };
  },
  toAmino(message: QueryFetchBeamsRequest): QueryFetchBeamsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.state = message.state;
    return obj;
  },
  fromAminoMsg(object: QueryFetchBeamsRequestAminoMsg): QueryFetchBeamsRequest {
    return QueryFetchBeamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFetchBeamsRequestProtoMsg): QueryFetchBeamsRequest {
    return QueryFetchBeamsRequest.decode(message.value);
  },
  toProto(message: QueryFetchBeamsRequest): Uint8Array {
    return QueryFetchBeamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFetchBeamsRequest): QueryFetchBeamsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.beam.QueryFetchBeamsRequest",
      value: QueryFetchBeamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFetchBeamsResponse(): QueryFetchBeamsResponse {
  return {
    beams: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryFetchBeamsResponse = {
  encode(message: QueryFetchBeamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.beams) {
      Beam.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchBeamsResponse {
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
  fromPartial(object: DeepPartial<QueryFetchBeamsResponse>): QueryFetchBeamsResponse {
    const message = createBaseQueryFetchBeamsResponse();
    message.beams = object.beams?.map(e => Beam.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFetchBeamsResponseAmino): QueryFetchBeamsResponse {
    return {
      beams: Array.isArray(object?.beams) ? object.beams.map((e: any) => Beam.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryFetchBeamsResponse): QueryFetchBeamsResponseAmino {
    const obj: any = {};
    if (message.beams) {
      obj.beams = message.beams.map(e => e ? Beam.toAmino(e) : undefined);
    } else {
      obj.beams = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFetchBeamsResponseAminoMsg): QueryFetchBeamsResponse {
    return QueryFetchBeamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFetchBeamsResponseProtoMsg): QueryFetchBeamsResponse {
    return QueryFetchBeamsResponse.decode(message.value);
  },
  toProto(message: QueryFetchBeamsResponse): Uint8Array {
    return QueryFetchBeamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFetchBeamsResponse): QueryFetchBeamsResponseProtoMsg {
    return {
      typeUrl: "/lum.network.beam.QueryFetchBeamsResponse",
      value: QueryFetchBeamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFetchBeamsOpenQueueRequest(): QueryFetchBeamsOpenQueueRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryFetchBeamsOpenQueueRequest = {
  encode(message: QueryFetchBeamsOpenQueueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchBeamsOpenQueueRequest {
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
  fromPartial(object: DeepPartial<QueryFetchBeamsOpenQueueRequest>): QueryFetchBeamsOpenQueueRequest {
    const message = createBaseQueryFetchBeamsOpenQueueRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFetchBeamsOpenQueueRequestAmino): QueryFetchBeamsOpenQueueRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryFetchBeamsOpenQueueRequest): QueryFetchBeamsOpenQueueRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFetchBeamsOpenQueueRequestAminoMsg): QueryFetchBeamsOpenQueueRequest {
    return QueryFetchBeamsOpenQueueRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFetchBeamsOpenQueueRequestProtoMsg): QueryFetchBeamsOpenQueueRequest {
    return QueryFetchBeamsOpenQueueRequest.decode(message.value);
  },
  toProto(message: QueryFetchBeamsOpenQueueRequest): Uint8Array {
    return QueryFetchBeamsOpenQueueRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFetchBeamsOpenQueueRequest): QueryFetchBeamsOpenQueueRequestProtoMsg {
    return {
      typeUrl: "/lum.network.beam.QueryFetchBeamsOpenQueueRequest",
      value: QueryFetchBeamsOpenQueueRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFetchBeamsOpenQueueResponse(): QueryFetchBeamsOpenQueueResponse {
  return {
    beamIds: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryFetchBeamsOpenQueueResponse = {
  encode(message: QueryFetchBeamsOpenQueueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.beamIds) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchBeamsOpenQueueResponse {
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
  fromPartial(object: DeepPartial<QueryFetchBeamsOpenQueueResponse>): QueryFetchBeamsOpenQueueResponse {
    const message = createBaseQueryFetchBeamsOpenQueueResponse();
    message.beamIds = object.beamIds?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFetchBeamsOpenQueueResponseAmino): QueryFetchBeamsOpenQueueResponse {
    return {
      beamIds: Array.isArray(object?.beam_ids) ? object.beam_ids.map((e: any) => e) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryFetchBeamsOpenQueueResponse): QueryFetchBeamsOpenQueueResponseAmino {
    const obj: any = {};
    if (message.beamIds) {
      obj.beam_ids = message.beamIds.map(e => e);
    } else {
      obj.beam_ids = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFetchBeamsOpenQueueResponseAminoMsg): QueryFetchBeamsOpenQueueResponse {
    return QueryFetchBeamsOpenQueueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFetchBeamsOpenQueueResponseProtoMsg): QueryFetchBeamsOpenQueueResponse {
    return QueryFetchBeamsOpenQueueResponse.decode(message.value);
  },
  toProto(message: QueryFetchBeamsOpenQueueResponse): Uint8Array {
    return QueryFetchBeamsOpenQueueResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFetchBeamsOpenQueueResponse): QueryFetchBeamsOpenQueueResponseProtoMsg {
    return {
      typeUrl: "/lum.network.beam.QueryFetchBeamsOpenQueueResponse",
      value: QueryFetchBeamsOpenQueueResponse.encode(message).finish()
    };
  }
};