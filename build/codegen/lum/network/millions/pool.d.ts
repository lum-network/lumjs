/// <reference types="long" />
import { DrawSchedule, DrawScheduleAmino, DrawScheduleSDKType } from "./draw_schedule";
import { PrizeStrategy, PrizeStrategyAmino, PrizeStrategySDKType } from "./prize_strategy";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { DrawState } from "./draw";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * PoolState the state of a Pool
 * Deposits are only accepted for Pools in a Ready state
 *
 * TODO:
 * Pool state KILLED is not available in the current implementation
 * Introduce the capability to:
 * - Kill a Pool and withdraw or migrate all deposits to another Pool via
 * Governance proposal
 */
export declare enum PoolState {
    POOL_STATE_UNSPECIFIED = 0,
    POOL_STATE_CREATED = 1,
    POOL_STATE_READY = 2,
    POOL_STATE_PAUSED = 3,
    POOL_STATE_KILLED = 4,
    UNRECOGNIZED = -1
}
export declare const PoolStateSDKType: typeof PoolState;
export declare const PoolStateAmino: typeof PoolState;
export declare function poolStateFromJSON(object: any): PoolState;
export declare function poolStateToJSON(object: PoolState): string;
/**
 * PoolType the type of Pool
 * Each PoolType implements a dedicated runner which applies its own Pool
 * Lifecycle in order to deliver yield and distribute prizes
 */
export declare enum PoolType {
    POOL_TYPE_UNSPECIFIED = 0,
    POOL_TYPE_STAKING = 1,
    UNRECOGNIZED = -1
}
export declare const PoolTypeSDKType: typeof PoolType;
export declare const PoolTypeAmino: typeof PoolType;
export declare function poolTypeFromJSON(object: any): PoolType;
export declare function poolTypeToJSON(object: PoolType): string;
export interface Pool {
    poolId: Long;
    denom: string;
    nativeDenom: string;
    chainId: string;
    connectionId: string;
    transferChannelId: string;
    icaDepositPortId: string;
    icaPrizepoolPortId: string;
    poolType: PoolType;
    validators: PoolValidator[];
    bech32PrefixAccAddr: string;
    bech32PrefixValAddr: string;
    minDepositAmount: string;
    drawSchedule: DrawSchedule | undefined;
    prizeStrategy: PrizeStrategy | undefined;
    unbondingDuration: Duration | undefined;
    maxUnbondingEntries: string;
    localAddress: string;
    icaDepositAddress: string;
    icaPrizepoolAddress: string;
    nextDrawId: Long;
    tvlAmount: string;
    depositorsCount: Long;
    sponsorshipAmount: string;
    lastDrawCreatedAt?: Date | undefined;
    lastDrawState: DrawState;
    availablePrizePool: Coin | undefined;
    state: PoolState;
    createdAtHeight: Long;
    updatedAtHeight: Long;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}
export interface PoolProtoMsg {
    typeUrl: "/lum.network.millions.Pool";
    value: Uint8Array;
}
export interface PoolAmino {
    pool_id: string;
    denom: string;
    native_denom: string;
    chain_id: string;
    connection_id: string;
    transfer_channel_id: string;
    ica_deposit_port_id: string;
    ica_prizepool_port_id: string;
    pool_type: PoolType;
    validators: PoolValidatorAmino[];
    bech32_prefix_acc_addr: string;
    bech32_prefix_val_addr: string;
    min_deposit_amount: string;
    draw_schedule?: DrawScheduleAmino | undefined;
    prize_strategy?: PrizeStrategyAmino | undefined;
    unbonding_duration?: DurationAmino | undefined;
    max_unbonding_entries: string;
    local_address: string;
    ica_deposit_address: string;
    ica_prizepool_address: string;
    next_draw_id: string;
    tvl_amount: string;
    depositors_count: string;
    sponsorship_amount: string;
    last_draw_created_at?: Date | undefined;
    last_draw_state: DrawState;
    available_prize_pool?: CoinAmino | undefined;
    state: PoolState;
    created_at_height: string;
    updated_at_height: string;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
export interface PoolAminoMsg {
    type: "/lum.network.millions.Pool";
    value: PoolAmino;
}
export interface PoolSDKType {
    pool_id: Long;
    denom: string;
    native_denom: string;
    chain_id: string;
    connection_id: string;
    transfer_channel_id: string;
    ica_deposit_port_id: string;
    ica_prizepool_port_id: string;
    pool_type: PoolType;
    validators: PoolValidatorSDKType[];
    bech32_prefix_acc_addr: string;
    bech32_prefix_val_addr: string;
    min_deposit_amount: string;
    draw_schedule: DrawScheduleSDKType | undefined;
    prize_strategy: PrizeStrategySDKType | undefined;
    unbonding_duration: DurationSDKType | undefined;
    max_unbonding_entries: string;
    local_address: string;
    ica_deposit_address: string;
    ica_prizepool_address: string;
    next_draw_id: Long;
    tvl_amount: string;
    depositors_count: Long;
    sponsorship_amount: string;
    last_draw_created_at?: Date | undefined;
    last_draw_state: DrawState;
    available_prize_pool: CoinSDKType | undefined;
    state: PoolState;
    created_at_height: Long;
    updated_at_height: Long;
    created_at: Date | undefined;
    updated_at: Date | undefined;
}
export interface PoolValidator {
    operatorAddress: string;
    isEnabled: boolean;
    bondedAmount: string;
}
export interface PoolValidatorProtoMsg {
    typeUrl: "/lum.network.millions.PoolValidator";
    value: Uint8Array;
}
export interface PoolValidatorAmino {
    operator_address: string;
    is_enabled: boolean;
    bonded_amount: string;
}
export interface PoolValidatorAminoMsg {
    type: "/lum.network.millions.PoolValidator";
    value: PoolValidatorAmino;
}
export interface PoolValidatorSDKType {
    operator_address: string;
    is_enabled: boolean;
    bonded_amount: string;
}
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromPartial(object: DeepPartial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
export declare const PoolValidator: {
    encode(message: PoolValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolValidator;
    fromPartial(object: DeepPartial<PoolValidator>): PoolValidator;
    fromAmino(object: PoolValidatorAmino): PoolValidator;
    toAmino(message: PoolValidator): PoolValidatorAmino;
    fromAminoMsg(object: PoolValidatorAminoMsg): PoolValidator;
    fromProtoMsg(message: PoolValidatorProtoMsg): PoolValidator;
    toProto(message: PoolValidator): Uint8Array;
    toProtoMsg(message: PoolValidator): PoolValidatorProtoMsg;
};
