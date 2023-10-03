/// <reference types="long" />
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Query {
    id: string;
    connectionId: string;
    chainId: string;
    queryType: string;
    request: Uint8Array;
    callbackId: string;
    ttl: Long;
    requestSent: boolean;
    extraId: string;
}
export interface QueryProtoMsg {
    typeUrl: "/stride.interchainquery.v1.Query";
    value: Uint8Array;
}
export interface QueryAmino {
    id: string;
    connection_id: string;
    chain_id: string;
    query_type: string;
    request: Uint8Array;
    callback_id: string;
    ttl: string;
    request_sent: boolean;
    extra_id: string;
}
export interface QueryAminoMsg {
    type: "/stride.interchainquery.v1.Query";
    value: QueryAmino;
}
export interface QuerySDKType {
    id: string;
    connection_id: string;
    chain_id: string;
    query_type: string;
    request: Uint8Array;
    callback_id: string;
    ttl: Long;
    request_sent: boolean;
    extra_id: string;
}
export interface DataPoint {
    id: string;
    remoteHeight: string;
    localHeight: string;
    value: Uint8Array;
}
export interface DataPointProtoMsg {
    typeUrl: "/stride.interchainquery.v1.DataPoint";
    value: Uint8Array;
}
export interface DataPointAmino {
    id: string;
    remote_height: string;
    local_height: string;
    value: Uint8Array;
}
export interface DataPointAminoMsg {
    type: "/stride.interchainquery.v1.DataPoint";
    value: DataPointAmino;
}
export interface DataPointSDKType {
    id: string;
    remote_height: string;
    local_height: string;
    value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    queries: Query[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.interchainquery.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateAmino {
    queries: QueryAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/stride.interchainquery.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
    queries: QuerySDKType[];
}
export declare const Query: {
    encode(message: Query, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Query;
    fromPartial(object: DeepPartial<Query>): Query;
    fromAmino(object: QueryAmino): Query;
    toAmino(message: Query): QueryAmino;
    fromAminoMsg(object: QueryAminoMsg): Query;
    fromProtoMsg(message: QueryProtoMsg): Query;
    toProto(message: Query): Uint8Array;
    toProtoMsg(message: Query): QueryProtoMsg;
};
export declare const DataPoint: {
    encode(message: DataPoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataPoint;
    fromPartial(object: DeepPartial<DataPoint>): DataPoint;
    fromAmino(object: DataPointAmino): DataPoint;
    toAmino(message: DataPoint): DataPointAmino;
    fromAminoMsg(object: DataPointAminoMsg): DataPoint;
    fromProtoMsg(message: DataPointProtoMsg): DataPoint;
    toProto(message: DataPoint): Uint8Array;
    toProtoMsg(message: DataPoint): DataPointProtoMsg;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
