import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BeamState, Beam, BeamAmino, BeamSDKType } from "./beam";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
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
export declare const QueryGetBeamRequest: {
    encode(message: QueryGetBeamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBeamRequest;
    fromPartial(object: DeepPartial<QueryGetBeamRequest>): QueryGetBeamRequest;
    fromAmino(object: QueryGetBeamRequestAmino): QueryGetBeamRequest;
    toAmino(message: QueryGetBeamRequest): QueryGetBeamRequestAmino;
    fromAminoMsg(object: QueryGetBeamRequestAminoMsg): QueryGetBeamRequest;
    fromProtoMsg(message: QueryGetBeamRequestProtoMsg): QueryGetBeamRequest;
    toProto(message: QueryGetBeamRequest): Uint8Array;
    toProtoMsg(message: QueryGetBeamRequest): QueryGetBeamRequestProtoMsg;
};
export declare const QueryGetBeamResponse: {
    encode(message: QueryGetBeamResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBeamResponse;
    fromPartial(object: DeepPartial<QueryGetBeamResponse>): QueryGetBeamResponse;
    fromAmino(object: QueryGetBeamResponseAmino): QueryGetBeamResponse;
    toAmino(message: QueryGetBeamResponse): QueryGetBeamResponseAmino;
    fromAminoMsg(object: QueryGetBeamResponseAminoMsg): QueryGetBeamResponse;
    fromProtoMsg(message: QueryGetBeamResponseProtoMsg): QueryGetBeamResponse;
    toProto(message: QueryGetBeamResponse): Uint8Array;
    toProtoMsg(message: QueryGetBeamResponse): QueryGetBeamResponseProtoMsg;
};
export declare const QueryFetchBeamsRequest: {
    encode(message: QueryFetchBeamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchBeamsRequest;
    fromPartial(object: DeepPartial<QueryFetchBeamsRequest>): QueryFetchBeamsRequest;
    fromAmino(object: QueryFetchBeamsRequestAmino): QueryFetchBeamsRequest;
    toAmino(message: QueryFetchBeamsRequest): QueryFetchBeamsRequestAmino;
    fromAminoMsg(object: QueryFetchBeamsRequestAminoMsg): QueryFetchBeamsRequest;
    fromProtoMsg(message: QueryFetchBeamsRequestProtoMsg): QueryFetchBeamsRequest;
    toProto(message: QueryFetchBeamsRequest): Uint8Array;
    toProtoMsg(message: QueryFetchBeamsRequest): QueryFetchBeamsRequestProtoMsg;
};
export declare const QueryFetchBeamsResponse: {
    encode(message: QueryFetchBeamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchBeamsResponse;
    fromPartial(object: DeepPartial<QueryFetchBeamsResponse>): QueryFetchBeamsResponse;
    fromAmino(object: QueryFetchBeamsResponseAmino): QueryFetchBeamsResponse;
    toAmino(message: QueryFetchBeamsResponse): QueryFetchBeamsResponseAmino;
    fromAminoMsg(object: QueryFetchBeamsResponseAminoMsg): QueryFetchBeamsResponse;
    fromProtoMsg(message: QueryFetchBeamsResponseProtoMsg): QueryFetchBeamsResponse;
    toProto(message: QueryFetchBeamsResponse): Uint8Array;
    toProtoMsg(message: QueryFetchBeamsResponse): QueryFetchBeamsResponseProtoMsg;
};
export declare const QueryFetchBeamsOpenQueueRequest: {
    encode(message: QueryFetchBeamsOpenQueueRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchBeamsOpenQueueRequest;
    fromPartial(object: DeepPartial<QueryFetchBeamsOpenQueueRequest>): QueryFetchBeamsOpenQueueRequest;
    fromAmino(object: QueryFetchBeamsOpenQueueRequestAmino): QueryFetchBeamsOpenQueueRequest;
    toAmino(message: QueryFetchBeamsOpenQueueRequest): QueryFetchBeamsOpenQueueRequestAmino;
    fromAminoMsg(object: QueryFetchBeamsOpenQueueRequestAminoMsg): QueryFetchBeamsOpenQueueRequest;
    fromProtoMsg(message: QueryFetchBeamsOpenQueueRequestProtoMsg): QueryFetchBeamsOpenQueueRequest;
    toProto(message: QueryFetchBeamsOpenQueueRequest): Uint8Array;
    toProtoMsg(message: QueryFetchBeamsOpenQueueRequest): QueryFetchBeamsOpenQueueRequestProtoMsg;
};
export declare const QueryFetchBeamsOpenQueueResponse: {
    encode(message: QueryFetchBeamsOpenQueueResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchBeamsOpenQueueResponse;
    fromPartial(object: DeepPartial<QueryFetchBeamsOpenQueueResponse>): QueryFetchBeamsOpenQueueResponse;
    fromAmino(object: QueryFetchBeamsOpenQueueResponseAmino): QueryFetchBeamsOpenQueueResponse;
    toAmino(message: QueryFetchBeamsOpenQueueResponse): QueryFetchBeamsOpenQueueResponseAmino;
    fromAminoMsg(object: QueryFetchBeamsOpenQueueResponseAminoMsg): QueryFetchBeamsOpenQueueResponse;
    fromProtoMsg(message: QueryFetchBeamsOpenQueueResponseProtoMsg): QueryFetchBeamsOpenQueueResponse;
    toProto(message: QueryFetchBeamsOpenQueueResponse): Uint8Array;
    toProtoMsg(message: QueryFetchBeamsOpenQueueResponse): QueryFetchBeamsOpenQueueResponseProtoMsg;
};
