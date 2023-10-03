import { PrizeBatch, PrizeBatchAmino, PrizeBatchSDKType } from "./prize_batch";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface PrizeStrategy {
    prizeBatches: PrizeBatch[];
}
export interface PrizeStrategyProtoMsg {
    typeUrl: "/lum.network.millions.PrizeStrategy";
    value: Uint8Array;
}
export interface PrizeStrategyAmino {
    prize_batches: PrizeBatchAmino[];
}
export interface PrizeStrategyAminoMsg {
    type: "/lum.network.millions.PrizeStrategy";
    value: PrizeStrategyAmino;
}
export interface PrizeStrategySDKType {
    prize_batches: PrizeBatchSDKType[];
}
export declare const PrizeStrategy: {
    encode(message: PrizeStrategy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrizeStrategy;
    fromPartial(object: DeepPartial<PrizeStrategy>): PrizeStrategy;
    fromAmino(object: PrizeStrategyAmino): PrizeStrategy;
    toAmino(message: PrizeStrategy): PrizeStrategyAmino;
    fromAminoMsg(object: PrizeStrategyAminoMsg): PrizeStrategy;
    fromProtoMsg(message: PrizeStrategyProtoMsg): PrizeStrategy;
    toProto(message: PrizeStrategy): Uint8Array;
    toProtoMsg(message: PrizeStrategy): PrizeStrategyProtoMsg;
};
