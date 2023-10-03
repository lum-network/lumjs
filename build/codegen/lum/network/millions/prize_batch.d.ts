/// <reference types="long" />
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PrizeBatch {
    poolPercent: Long;
    quantity: Long;
    drawProbability: string;
    isUnique: boolean;
}
export interface PrizeBatchProtoMsg {
    typeUrl: "/lum.network.millions.PrizeBatch";
    value: Uint8Array;
}
export interface PrizeBatchAmino {
    pool_percent: string;
    quantity: string;
    draw_probability: string;
    is_unique: boolean;
}
export interface PrizeBatchAminoMsg {
    type: "/lum.network.millions.PrizeBatch";
    value: PrizeBatchAmino;
}
export interface PrizeBatchSDKType {
    pool_percent: Long;
    quantity: Long;
    draw_probability: string;
    is_unique: boolean;
}
export declare const PrizeBatch: {
    encode(message: PrizeBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrizeBatch;
    fromPartial(object: DeepPartial<PrizeBatch>): PrizeBatch;
    fromAmino(object: PrizeBatchAmino): PrizeBatch;
    toAmino(message: PrizeBatch): PrizeBatchAmino;
    fromAminoMsg(object: PrizeBatchAminoMsg): PrizeBatch;
    fromProtoMsg(message: PrizeBatchProtoMsg): PrizeBatch;
    toProto(message: PrizeBatch): Uint8Array;
    toProtoMsg(message: PrizeBatch): PrizeBatchProtoMsg;
};
