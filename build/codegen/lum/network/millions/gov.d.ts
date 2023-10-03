/// <reference types="long" />
import { DrawSchedule, DrawScheduleAmino, DrawScheduleSDKType } from "./draw_schedule";
import { PrizeStrategy, PrizeStrategyAmino, PrizeStrategySDKType } from "./prize_strategy";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { PoolType, PoolState } from "./pool";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ProposalRegisterPool {
    title: string;
    description: string;
    chainId: string;
    denom: string;
    nativeDenom: string;
    connectionId: string;
    validators: string[];
    minDepositAmount: string;
    drawSchedule: DrawSchedule | undefined;
    prizeStrategy: PrizeStrategy | undefined;
    bech32PrefixAccAddr: string;
    bech32PrefixValAddr: string;
    transferChannelId: string;
    unbondingDuration: Duration | undefined;
    maxUnbondingEntries: string;
    poolType: PoolType;
}
export interface ProposalRegisterPoolProtoMsg {
    typeUrl: "/lum.network.millions.ProposalRegisterPool";
    value: Uint8Array;
}
export interface ProposalRegisterPoolAmino {
    title: string;
    description: string;
    chain_id: string;
    denom: string;
    native_denom: string;
    connection_id: string;
    validators: string[];
    min_deposit_amount: string;
    draw_schedule?: DrawScheduleAmino | undefined;
    prize_strategy?: PrizeStrategyAmino | undefined;
    bech32_prefix_acc_addr: string;
    bech32_prefix_val_addr: string;
    transfer_channel_id: string;
    unbonding_duration?: DurationAmino | undefined;
    max_unbonding_entries: string;
    pool_type: PoolType;
}
export interface ProposalRegisterPoolAminoMsg {
    type: "/lum.network.millions.ProposalRegisterPool";
    value: ProposalRegisterPoolAmino;
}
export interface ProposalRegisterPoolSDKType {
    title: string;
    description: string;
    chain_id: string;
    denom: string;
    native_denom: string;
    connection_id: string;
    validators: string[];
    min_deposit_amount: string;
    draw_schedule: DrawScheduleSDKType | undefined;
    prize_strategy: PrizeStrategySDKType | undefined;
    bech32_prefix_acc_addr: string;
    bech32_prefix_val_addr: string;
    transfer_channel_id: string;
    unbonding_duration: DurationSDKType | undefined;
    max_unbonding_entries: string;
    pool_type: PoolType;
}
export interface ProposalUpdatePool {
    title: string;
    description: string;
    poolId: Long;
    validators?: string[];
    minDepositAmount?: string;
    drawSchedule?: DrawSchedule | undefined;
    prizeStrategy?: PrizeStrategy | undefined;
    state: PoolState;
    unbondingDuration?: Duration | undefined;
    maxUnbondingEntries?: string;
}
export interface ProposalUpdatePoolProtoMsg {
    typeUrl: "/lum.network.millions.ProposalUpdatePool";
    value: Uint8Array;
}
export interface ProposalUpdatePoolAmino {
    title: string;
    description: string;
    pool_id: string;
    validators: string[];
    min_deposit_amount: string;
    draw_schedule?: DrawScheduleAmino | undefined;
    prize_strategy?: PrizeStrategyAmino | undefined;
    state: PoolState;
    unbonding_duration?: DurationAmino | undefined;
    max_unbonding_entries: string;
}
export interface ProposalUpdatePoolAminoMsg {
    type: "/lum.network.millions.ProposalUpdatePool";
    value: ProposalUpdatePoolAmino;
}
export interface ProposalUpdatePoolSDKType {
    title: string;
    description: string;
    pool_id: Long;
    validators?: string[];
    min_deposit_amount?: string;
    draw_schedule?: DrawScheduleSDKType | undefined;
    prize_strategy?: PrizeStrategySDKType | undefined;
    state: PoolState;
    unbonding_duration?: DurationSDKType | undefined;
    max_unbonding_entries?: string;
}
export interface ProposalUpdateParams {
    title: string;
    description: string;
    minDepositAmount?: string;
    maxPrizeStrategyBatches?: string;
    maxPrizeBatchQuantity?: string;
    minDrawScheduleDelta?: Duration | undefined;
    maxDrawScheduleDelta?: Duration | undefined;
    prizeExpirationDelta?: Duration | undefined;
    feesStakers?: string;
    minDepositDrawDelta?: Duration | undefined;
}
export interface ProposalUpdateParamsProtoMsg {
    typeUrl: "/lum.network.millions.ProposalUpdateParams";
    value: Uint8Array;
}
export interface ProposalUpdateParamsAmino {
    title: string;
    description: string;
    min_deposit_amount: string;
    max_prize_strategy_batches: string;
    max_prize_batch_quantity: string;
    min_draw_schedule_delta?: DurationAmino | undefined;
    max_draw_schedule_delta?: DurationAmino | undefined;
    prize_expiration_delta?: DurationAmino | undefined;
    fees_stakers: string;
    min_deposit_draw_delta?: DurationAmino | undefined;
}
export interface ProposalUpdateParamsAminoMsg {
    type: "/lum.network.millions.ProposalUpdateParams";
    value: ProposalUpdateParamsAmino;
}
export interface ProposalUpdateParamsSDKType {
    title: string;
    description: string;
    min_deposit_amount?: string;
    max_prize_strategy_batches?: string;
    max_prize_batch_quantity?: string;
    min_draw_schedule_delta?: DurationSDKType | undefined;
    max_draw_schedule_delta?: DurationSDKType | undefined;
    prize_expiration_delta?: DurationSDKType | undefined;
    fees_stakers?: string;
    min_deposit_draw_delta?: DurationSDKType | undefined;
}
export declare const ProposalRegisterPool: {
    encode(message: ProposalRegisterPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalRegisterPool;
    fromPartial(object: DeepPartial<ProposalRegisterPool>): ProposalRegisterPool;
    fromAmino(object: ProposalRegisterPoolAmino): ProposalRegisterPool;
    toAmino(message: ProposalRegisterPool): ProposalRegisterPoolAmino;
    fromAminoMsg(object: ProposalRegisterPoolAminoMsg): ProposalRegisterPool;
    fromProtoMsg(message: ProposalRegisterPoolProtoMsg): ProposalRegisterPool;
    toProto(message: ProposalRegisterPool): Uint8Array;
    toProtoMsg(message: ProposalRegisterPool): ProposalRegisterPoolProtoMsg;
};
export declare const ProposalUpdatePool: {
    encode(message: ProposalUpdatePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalUpdatePool;
    fromPartial(object: DeepPartial<ProposalUpdatePool>): ProposalUpdatePool;
    fromAmino(object: ProposalUpdatePoolAmino): ProposalUpdatePool;
    toAmino(message: ProposalUpdatePool): ProposalUpdatePoolAmino;
    fromAminoMsg(object: ProposalUpdatePoolAminoMsg): ProposalUpdatePool;
    fromProtoMsg(message: ProposalUpdatePoolProtoMsg): ProposalUpdatePool;
    toProto(message: ProposalUpdatePool): Uint8Array;
    toProtoMsg(message: ProposalUpdatePool): ProposalUpdatePoolProtoMsg;
};
export declare const ProposalUpdateParams: {
    encode(message: ProposalUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalUpdateParams;
    fromPartial(object: DeepPartial<ProposalUpdateParams>): ProposalUpdateParams;
    fromAmino(object: ProposalUpdateParamsAmino): ProposalUpdateParams;
    toAmino(message: ProposalUpdateParams): ProposalUpdateParamsAmino;
    fromAminoMsg(object: ProposalUpdateParamsAminoMsg): ProposalUpdateParams;
    fromProtoMsg(message: ProposalUpdateParamsProtoMsg): ProposalUpdateParams;
    toProto(message: ProposalUpdateParams): Uint8Array;
    toProtoMsg(message: ProposalUpdateParams): ProposalUpdateParamsProtoMsg;
};
