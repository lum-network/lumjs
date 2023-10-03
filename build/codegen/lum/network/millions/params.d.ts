/// <reference types="long" />
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
    /**
     * min_deposit_amount the minimum deposit amount accepted by pool
     * configurations
     */
    minDepositAmount: string;
    /**
     * max_prize_strategy_batches the maximum prize strategy batches accepted by
     * pool configurations
     */
    maxPrizeStrategyBatches: Long;
    /**
     * max_prize_batch_quantity the maximum prize batch quantity accepted by pool
     * configurations
     */
    maxPrizeBatchQuantity: Long;
    /**
     * min_draw_schedule_delta the minimum delta between draws accepted by pool
     * configurations
     */
    minDrawScheduleDelta: Duration | undefined;
    /**
     * max_draw_schedule_delta the maximum delta between draws accepted by pool
     * configurations
     */
    maxDrawScheduleDelta: Duration | undefined;
    /**
     * prize_expiration_delta the prize clawback expiration delta (common to all
     * pools)
     */
    prizeExpirationDelta: Duration | undefined;
    /**
     * fees_stakers the fees distributed by stakers over prize won (common to all
     * pools)
     */
    feesStakers: string;
    /**
     * min_deposit_draw_delta the minimum delta before a draw for a deposit to be
     * accepted during the time weighted balance computation for a draw
     */
    minDepositDrawDelta: Duration | undefined;
}
export interface ParamsProtoMsg {
    typeUrl: "/lum.network.millions.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    /**
     * min_deposit_amount the minimum deposit amount accepted by pool
     * configurations
     */
    min_deposit_amount: string;
    /**
     * max_prize_strategy_batches the maximum prize strategy batches accepted by
     * pool configurations
     */
    max_prize_strategy_batches: string;
    /**
     * max_prize_batch_quantity the maximum prize batch quantity accepted by pool
     * configurations
     */
    max_prize_batch_quantity: string;
    /**
     * min_draw_schedule_delta the minimum delta between draws accepted by pool
     * configurations
     */
    min_draw_schedule_delta?: DurationAmino | undefined;
    /**
     * max_draw_schedule_delta the maximum delta between draws accepted by pool
     * configurations
     */
    max_draw_schedule_delta?: DurationAmino | undefined;
    /**
     * prize_expiration_delta the prize clawback expiration delta (common to all
     * pools)
     */
    prize_expiration_delta?: DurationAmino | undefined;
    /**
     * fees_stakers the fees distributed by stakers over prize won (common to all
     * pools)
     */
    fees_stakers: string;
    /**
     * min_deposit_draw_delta the minimum delta before a draw for a deposit to be
     * accepted during the time weighted balance computation for a draw
     */
    min_deposit_draw_delta?: DurationAmino | undefined;
}
export interface ParamsAminoMsg {
    type: "/lum.network.millions.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    min_deposit_amount: string;
    max_prize_strategy_batches: Long;
    max_prize_batch_quantity: Long;
    min_draw_schedule_delta: DurationSDKType | undefined;
    max_draw_schedule_delta: DurationSDKType | undefined;
    prize_expiration_delta: DurationSDKType | undefined;
    fees_stakers: string;
    min_deposit_draw_delta: DurationSDKType | undefined;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
