/// <reference types="long" />
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BoolValue, BoolValueAmino, BoolValueSDKType } from "../../../google/protobuf/wrappers";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { DrawSchedule, DrawScheduleAmino, DrawScheduleSDKType } from "./draw_schedule";
import { PrizeStrategy, PrizeStrategyAmino, PrizeStrategySDKType } from "./prize_strategy";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgUpdateParams {
    minDepositAmount?: string;
    maxPrizeStrategyBatches?: string;
    maxPrizeBatchQuantity?: string;
    minDrawScheduleDelta?: Duration | undefined;
    maxDrawScheduleDelta?: Duration | undefined;
    prizeExpirationDelta?: Duration | undefined;
    feesStakers?: string;
    minDepositDrawDelta?: Duration | undefined;
    updaterAddress: string;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/lum.network.millions.MsgUpdateParams";
    value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
    min_deposit_amount: string;
    max_prize_strategy_batches: string;
    max_prize_batch_quantity: string;
    min_draw_schedule_delta?: DurationAmino | undefined;
    max_draw_schedule_delta?: DurationAmino | undefined;
    prize_expiration_delta?: DurationAmino | undefined;
    fees_stakers: string;
    min_deposit_draw_delta?: DurationAmino | undefined;
    updater_address: string;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/lum.network.millions.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
    min_deposit_amount?: string;
    max_prize_strategy_batches?: string;
    max_prize_batch_quantity?: string;
    min_draw_schedule_delta?: DurationSDKType | undefined;
    max_draw_schedule_delta?: DurationSDKType | undefined;
    prize_expiration_delta?: DurationSDKType | undefined;
    fees_stakers?: string;
    min_deposit_draw_delta?: DurationSDKType | undefined;
    updater_address: string;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/lum.network.millions.MsgUpdateParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/lum.network.millions.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {
}
export interface MsgRegisterPool {
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
    creatorAddress: string;
}
export interface MsgRegisterPoolProtoMsg {
    typeUrl: "/lum.network.millions.MsgRegisterPool";
    value: Uint8Array;
}
export interface MsgRegisterPoolAmino {
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
    creator_address: string;
}
export interface MsgRegisterPoolAminoMsg {
    type: "/lum.network.millions.MsgRegisterPool";
    value: MsgRegisterPoolAmino;
}
export interface MsgRegisterPoolSDKType {
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
    creator_address: string;
}
export interface MsgRegisterPoolResponse {
    poolId: Long;
}
export interface MsgRegisterPoolResponseProtoMsg {
    typeUrl: "/lum.network.millions.MsgRegisterPoolResponse";
    value: Uint8Array;
}
export interface MsgRegisterPoolResponseAmino {
    pool_id: string;
}
export interface MsgRegisterPoolResponseAminoMsg {
    type: "/lum.network.millions.MsgRegisterPoolResponse";
    value: MsgRegisterPoolResponseAmino;
}
export interface MsgRegisterPoolResponseSDKType {
    pool_id: Long;
}
export interface MsgUpdatePool {
    poolId: Long;
    validators?: string[];
    minDepositAmount?: string;
    drawSchedule?: DrawSchedule | undefined;
    prizeStrategy?: PrizeStrategy | undefined;
    updaterAddress: string;
}
export interface MsgUpdatePoolProtoMsg {
    typeUrl: "/lum.network.millions.MsgUpdatePool";
    value: Uint8Array;
}
export interface MsgUpdatePoolAmino {
    pool_id: string;
    validators: string[];
    min_deposit_amount: string;
    draw_schedule?: DrawScheduleAmino | undefined;
    prize_strategy?: PrizeStrategyAmino | undefined;
    updater_address: string;
}
export interface MsgUpdatePoolAminoMsg {
    type: "/lum.network.millions.MsgUpdatePool";
    value: MsgUpdatePoolAmino;
}
export interface MsgUpdatePoolSDKType {
    pool_id: Long;
    validators?: string[];
    min_deposit_amount?: string;
    draw_schedule?: DrawScheduleSDKType | undefined;
    prize_strategy?: PrizeStrategySDKType | undefined;
    updater_address: string;
}
export interface MsgUpdatePoolResponse {
}
export interface MsgUpdatePoolResponseProtoMsg {
    typeUrl: "/lum.network.millions.MsgUpdatePoolResponse";
    value: Uint8Array;
}
export interface MsgUpdatePoolResponseAmino {
}
export interface MsgUpdatePoolResponseAminoMsg {
    type: "/lum.network.millions.MsgUpdatePoolResponse";
    value: MsgUpdatePoolResponseAmino;
}
export interface MsgUpdatePoolResponseSDKType {
}
export interface MsgDeposit {
    poolId: Long;
    amount: Coin | undefined;
    depositorAddress: string;
    winnerAddress: string;
    isSponsor: boolean;
}
export interface MsgDepositProtoMsg {
    typeUrl: "/lum.network.millions.MsgDeposit";
    value: Uint8Array;
}
export interface MsgDepositAmino {
    pool_id: string;
    amount?: CoinAmino | undefined;
    depositor_address: string;
    winner_address: string;
    is_sponsor: boolean;
}
export interface MsgDepositAminoMsg {
    type: "/lum.network.millions.MsgDeposit";
    value: MsgDepositAmino;
}
export interface MsgDepositSDKType {
    pool_id: Long;
    amount: CoinSDKType | undefined;
    depositor_address: string;
    winner_address: string;
    is_sponsor: boolean;
}
export interface MsgDepositResponse {
    depositId: Long;
}
export interface MsgDepositResponseProtoMsg {
    typeUrl: "/lum.network.millions.MsgDepositResponse";
    value: Uint8Array;
}
export interface MsgDepositResponseAmino {
    deposit_id: string;
}
export interface MsgDepositResponseAminoMsg {
    type: "/lum.network.millions.MsgDepositResponse";
    value: MsgDepositResponseAmino;
}
export interface MsgDepositResponseSDKType {
    deposit_id: Long;
}
export interface MsgDepositRetry {
    poolId: Long;
    depositId: Long;
    depositorAddress: string;
}
export interface MsgDepositRetryProtoMsg {
    typeUrl: "/lum.network.millions.MsgDepositRetry";
    value: Uint8Array;
}
export interface MsgDepositRetryAmino {
    pool_id: string;
    deposit_id: string;
    depositor_address: string;
}
export interface MsgDepositRetryAminoMsg {
    type: "/lum.network.millions.MsgDepositRetry";
    value: MsgDepositRetryAmino;
}
export interface MsgDepositRetrySDKType {
    pool_id: Long;
    deposit_id: Long;
    depositor_address: string;
}
export interface MsgDepositEdit {
    poolId: Long;
    depositId: Long;
    winnerAddress: string;
    isSponsor: BoolValue | undefined;
    depositorAddress: string;
}
export interface MsgDepositEditProtoMsg {
    typeUrl: "/lum.network.millions.MsgDepositEdit";
    value: Uint8Array;
}
export interface MsgDepositEditAmino {
    pool_id: string;
    deposit_id: string;
    winner_address: string;
    is_sponsor?: BoolValueAmino | undefined;
    depositor_address: string;
}
export interface MsgDepositEditAminoMsg {
    type: "/lum.network.millions.MsgDepositEdit";
    value: MsgDepositEditAmino;
}
export interface MsgDepositEditSDKType {
    pool_id: Long;
    deposit_id: Long;
    winner_address: string;
    is_sponsor: BoolValueSDKType | undefined;
    depositor_address: string;
}
export interface MsgDepositEditResponse {
}
export interface MsgDepositEditResponseProtoMsg {
    typeUrl: "/lum.network.millions.MsgDepositEditResponse";
    value: Uint8Array;
}
export interface MsgDepositEditResponseAmino {
}
export interface MsgDepositEditResponseAminoMsg {
    type: "/lum.network.millions.MsgDepositEditResponse";
    value: MsgDepositEditResponseAmino;
}
export interface MsgDepositEditResponseSDKType {
}
export interface MsgDepositRetryResponse {
}
export interface MsgDepositRetryResponseProtoMsg {
    typeUrl: "/lum.network.millions.MsgDepositRetryResponse";
    value: Uint8Array;
}
export interface MsgDepositRetryResponseAmino {
}
export interface MsgDepositRetryResponseAminoMsg {
    type: "/lum.network.millions.MsgDepositRetryResponse";
    value: MsgDepositRetryResponseAmino;
}
export interface MsgDepositRetryResponseSDKType {
}
export interface MsgClaimPrize {
    poolId: Long;
    drawId: Long;
    prizeId: Long;
    winnerAddress: string;
}
export interface MsgClaimPrizeProtoMsg {
    typeUrl: "/lum.network.millions.MsgClaimPrize";
    value: Uint8Array;
}
export interface MsgClaimPrizeAmino {
    pool_id: string;
    draw_id: string;
    prize_id: string;
    winner_address: string;
}
export interface MsgClaimPrizeAminoMsg {
    type: "/lum.network.millions.MsgClaimPrize";
    value: MsgClaimPrizeAmino;
}
export interface MsgClaimPrizeSDKType {
    pool_id: Long;
    draw_id: Long;
    prize_id: Long;
    winner_address: string;
}
export interface MsgClaimPrizeResponse {
}
export interface MsgClaimPrizeResponseProtoMsg {
    typeUrl: "/lum.network.millions.MsgClaimPrizeResponse";
    value: Uint8Array;
}
export interface MsgClaimPrizeResponseAmino {
}
export interface MsgClaimPrizeResponseAminoMsg {
    type: "/lum.network.millions.MsgClaimPrizeResponse";
    value: MsgClaimPrizeResponseAmino;
}
export interface MsgClaimPrizeResponseSDKType {
}
export interface MsgWithdrawDeposit {
    poolId: Long;
    depositId: Long;
    depositorAddress: string;
    toAddress: string;
}
export interface MsgWithdrawDepositProtoMsg {
    typeUrl: "/lum.network.millions.MsgWithdrawDeposit";
    value: Uint8Array;
}
export interface MsgWithdrawDepositAmino {
    pool_id: string;
    deposit_id: string;
    depositor_address: string;
    to_address: string;
}
export interface MsgWithdrawDepositAminoMsg {
    type: "/lum.network.millions.MsgWithdrawDeposit";
    value: MsgWithdrawDepositAmino;
}
export interface MsgWithdrawDepositSDKType {
    pool_id: Long;
    deposit_id: Long;
    depositor_address: string;
    to_address: string;
}
export interface MsgWithdrawDepositResponse {
    withdrawalId: Long;
}
export interface MsgWithdrawDepositResponseProtoMsg {
    typeUrl: "/lum.network.millions.MsgWithdrawDepositResponse";
    value: Uint8Array;
}
export interface MsgWithdrawDepositResponseAmino {
    withdrawal_id: string;
}
export interface MsgWithdrawDepositResponseAminoMsg {
    type: "/lum.network.millions.MsgWithdrawDepositResponse";
    value: MsgWithdrawDepositResponseAmino;
}
export interface MsgWithdrawDepositResponseSDKType {
    withdrawal_id: Long;
}
export interface MsgWithdrawDepositRetry {
    poolId: Long;
    withdrawalId: Long;
    depositorAddress: string;
}
export interface MsgWithdrawDepositRetryProtoMsg {
    typeUrl: "/lum.network.millions.MsgWithdrawDepositRetry";
    value: Uint8Array;
}
export interface MsgWithdrawDepositRetryAmino {
    pool_id: string;
    withdrawal_id: string;
    depositor_address: string;
}
export interface MsgWithdrawDepositRetryAminoMsg {
    type: "/lum.network.millions.MsgWithdrawDepositRetry";
    value: MsgWithdrawDepositRetryAmino;
}
export interface MsgWithdrawDepositRetrySDKType {
    pool_id: Long;
    withdrawal_id: Long;
    depositor_address: string;
}
export interface MsgWithdrawDepositRetryResponse {
}
export interface MsgWithdrawDepositRetryResponseProtoMsg {
    typeUrl: "/lum.network.millions.MsgWithdrawDepositRetryResponse";
    value: Uint8Array;
}
export interface MsgWithdrawDepositRetryResponseAmino {
}
export interface MsgWithdrawDepositRetryResponseAminoMsg {
    type: "/lum.network.millions.MsgWithdrawDepositRetryResponse";
    value: MsgWithdrawDepositRetryResponseAmino;
}
export interface MsgWithdrawDepositRetryResponseSDKType {
}
export interface MsgDrawRetry {
    poolId: Long;
    drawId: Long;
    drawRetryAddress: string;
}
export interface MsgDrawRetryProtoMsg {
    typeUrl: "/lum.network.millions.MsgDrawRetry";
    value: Uint8Array;
}
export interface MsgDrawRetryAmino {
    pool_id: string;
    draw_id: string;
    draw_retry_address: string;
}
export interface MsgDrawRetryAminoMsg {
    type: "/lum.network.millions.MsgDrawRetry";
    value: MsgDrawRetryAmino;
}
export interface MsgDrawRetrySDKType {
    pool_id: Long;
    draw_id: Long;
    draw_retry_address: string;
}
export interface MsgDrawRetryResponse {
}
export interface MsgDrawRetryResponseProtoMsg {
    typeUrl: "/lum.network.millions.MsgDrawRetryResponse";
    value: Uint8Array;
}
export interface MsgDrawRetryResponseAmino {
}
export interface MsgDrawRetryResponseAminoMsg {
    type: "/lum.network.millions.MsgDrawRetryResponse";
    value: MsgDrawRetryResponseAmino;
}
export interface MsgDrawRetryResponseSDKType {
}
export interface MsgRestoreInterchainAccounts {
    poolId: Long;
    restorerAddress: string;
}
export interface MsgRestoreInterchainAccountsProtoMsg {
    typeUrl: "/lum.network.millions.MsgRestoreInterchainAccounts";
    value: Uint8Array;
}
export interface MsgRestoreInterchainAccountsAmino {
    pool_id: string;
    restorer_address: string;
}
export interface MsgRestoreInterchainAccountsAminoMsg {
    type: "/lum.network.millions.MsgRestoreInterchainAccounts";
    value: MsgRestoreInterchainAccountsAmino;
}
export interface MsgRestoreInterchainAccountsSDKType {
    pool_id: Long;
    restorer_address: string;
}
export interface MsgRestoreInterchainAccountsResponse {
}
export interface MsgRestoreInterchainAccountsResponseProtoMsg {
    typeUrl: "/lum.network.millions.MsgRestoreInterchainAccountsResponse";
    value: Uint8Array;
}
export interface MsgRestoreInterchainAccountsResponseAmino {
}
export interface MsgRestoreInterchainAccountsResponseAminoMsg {
    type: "/lum.network.millions.MsgRestoreInterchainAccountsResponse";
    value: MsgRestoreInterchainAccountsResponseAmino;
}
export interface MsgRestoreInterchainAccountsResponseSDKType {
}
export interface MsgGenerateSeed {
    requesterAddress: string;
}
export interface MsgGenerateSeedProtoMsg {
    typeUrl: "/lum.network.millions.MsgGenerateSeed";
    value: Uint8Array;
}
export interface MsgGenerateSeedAmino {
    requester_address: string;
}
export interface MsgGenerateSeedAminoMsg {
    type: "/lum.network.millions.MsgGenerateSeed";
    value: MsgGenerateSeedAmino;
}
export interface MsgGenerateSeedSDKType {
    requester_address: string;
}
export interface MsgGenerateSeedResponse {
    seed: Long;
}
export interface MsgGenerateSeedResponseProtoMsg {
    typeUrl: "/lum.network.millions.MsgGenerateSeedResponse";
    value: Uint8Array;
}
export interface MsgGenerateSeedResponseAmino {
    seed: string;
}
export interface MsgGenerateSeedResponseAminoMsg {
    type: "/lum.network.millions.MsgGenerateSeedResponse";
    value: MsgGenerateSeedResponseAmino;
}
export interface MsgGenerateSeedResponseSDKType {
    seed: Long;
}
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgRegisterPool: {
    encode(message: MsgRegisterPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPool;
    fromPartial(object: DeepPartial<MsgRegisterPool>): MsgRegisterPool;
    fromAmino(object: MsgRegisterPoolAmino): MsgRegisterPool;
    toAmino(message: MsgRegisterPool): MsgRegisterPoolAmino;
    fromAminoMsg(object: MsgRegisterPoolAminoMsg): MsgRegisterPool;
    fromProtoMsg(message: MsgRegisterPoolProtoMsg): MsgRegisterPool;
    toProto(message: MsgRegisterPool): Uint8Array;
    toProtoMsg(message: MsgRegisterPool): MsgRegisterPoolProtoMsg;
};
export declare const MsgRegisterPoolResponse: {
    encode(message: MsgRegisterPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPoolResponse;
    fromPartial(object: DeepPartial<MsgRegisterPoolResponse>): MsgRegisterPoolResponse;
    fromAmino(object: MsgRegisterPoolResponseAmino): MsgRegisterPoolResponse;
    toAmino(message: MsgRegisterPoolResponse): MsgRegisterPoolResponseAmino;
    fromAminoMsg(object: MsgRegisterPoolResponseAminoMsg): MsgRegisterPoolResponse;
    fromProtoMsg(message: MsgRegisterPoolResponseProtoMsg): MsgRegisterPoolResponse;
    toProto(message: MsgRegisterPoolResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterPoolResponse): MsgRegisterPoolResponseProtoMsg;
};
export declare const MsgUpdatePool: {
    encode(message: MsgUpdatePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePool;
    fromPartial(object: DeepPartial<MsgUpdatePool>): MsgUpdatePool;
    fromAmino(object: MsgUpdatePoolAmino): MsgUpdatePool;
    toAmino(message: MsgUpdatePool): MsgUpdatePoolAmino;
    fromAminoMsg(object: MsgUpdatePoolAminoMsg): MsgUpdatePool;
    fromProtoMsg(message: MsgUpdatePoolProtoMsg): MsgUpdatePool;
    toProto(message: MsgUpdatePool): Uint8Array;
    toProtoMsg(message: MsgUpdatePool): MsgUpdatePoolProtoMsg;
};
export declare const MsgUpdatePoolResponse: {
    encode(_: MsgUpdatePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolResponse;
    fromPartial(_: DeepPartial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse;
    fromAmino(_: MsgUpdatePoolResponseAmino): MsgUpdatePoolResponse;
    toAmino(_: MsgUpdatePoolResponse): MsgUpdatePoolResponseAmino;
    fromAminoMsg(object: MsgUpdatePoolResponseAminoMsg): MsgUpdatePoolResponse;
    fromProtoMsg(message: MsgUpdatePoolResponseProtoMsg): MsgUpdatePoolResponse;
    toProto(message: MsgUpdatePoolResponse): Uint8Array;
    toProtoMsg(message: MsgUpdatePoolResponse): MsgUpdatePoolResponseProtoMsg;
};
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit;
    fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit;
    fromAmino(object: MsgDepositAmino): MsgDeposit;
    toAmino(message: MsgDeposit): MsgDepositAmino;
    fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit;
    fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit;
    toProto(message: MsgDeposit): Uint8Array;
    toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg;
};
export declare const MsgDepositResponse: {
    encode(message: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromPartial(object: DeepPartial<MsgDepositResponse>): MsgDepositResponse;
    fromAmino(object: MsgDepositResponseAmino): MsgDepositResponse;
    toAmino(message: MsgDepositResponse): MsgDepositResponseAmino;
    fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse;
    fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse;
    toProto(message: MsgDepositResponse): Uint8Array;
    toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg;
};
export declare const MsgDepositRetry: {
    encode(message: MsgDepositRetry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositRetry;
    fromPartial(object: DeepPartial<MsgDepositRetry>): MsgDepositRetry;
    fromAmino(object: MsgDepositRetryAmino): MsgDepositRetry;
    toAmino(message: MsgDepositRetry): MsgDepositRetryAmino;
    fromAminoMsg(object: MsgDepositRetryAminoMsg): MsgDepositRetry;
    fromProtoMsg(message: MsgDepositRetryProtoMsg): MsgDepositRetry;
    toProto(message: MsgDepositRetry): Uint8Array;
    toProtoMsg(message: MsgDepositRetry): MsgDepositRetryProtoMsg;
};
export declare const MsgDepositEdit: {
    encode(message: MsgDepositEdit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositEdit;
    fromPartial(object: DeepPartial<MsgDepositEdit>): MsgDepositEdit;
    fromAmino(object: MsgDepositEditAmino): MsgDepositEdit;
    toAmino(message: MsgDepositEdit): MsgDepositEditAmino;
    fromAminoMsg(object: MsgDepositEditAminoMsg): MsgDepositEdit;
    fromProtoMsg(message: MsgDepositEditProtoMsg): MsgDepositEdit;
    toProto(message: MsgDepositEdit): Uint8Array;
    toProtoMsg(message: MsgDepositEdit): MsgDepositEditProtoMsg;
};
export declare const MsgDepositEditResponse: {
    encode(_: MsgDepositEditResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositEditResponse;
    fromPartial(_: DeepPartial<MsgDepositEditResponse>): MsgDepositEditResponse;
    fromAmino(_: MsgDepositEditResponseAmino): MsgDepositEditResponse;
    toAmino(_: MsgDepositEditResponse): MsgDepositEditResponseAmino;
    fromAminoMsg(object: MsgDepositEditResponseAminoMsg): MsgDepositEditResponse;
    fromProtoMsg(message: MsgDepositEditResponseProtoMsg): MsgDepositEditResponse;
    toProto(message: MsgDepositEditResponse): Uint8Array;
    toProtoMsg(message: MsgDepositEditResponse): MsgDepositEditResponseProtoMsg;
};
export declare const MsgDepositRetryResponse: {
    encode(_: MsgDepositRetryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositRetryResponse;
    fromPartial(_: DeepPartial<MsgDepositRetryResponse>): MsgDepositRetryResponse;
    fromAmino(_: MsgDepositRetryResponseAmino): MsgDepositRetryResponse;
    toAmino(_: MsgDepositRetryResponse): MsgDepositRetryResponseAmino;
    fromAminoMsg(object: MsgDepositRetryResponseAminoMsg): MsgDepositRetryResponse;
    fromProtoMsg(message: MsgDepositRetryResponseProtoMsg): MsgDepositRetryResponse;
    toProto(message: MsgDepositRetryResponse): Uint8Array;
    toProtoMsg(message: MsgDepositRetryResponse): MsgDepositRetryResponseProtoMsg;
};
export declare const MsgClaimPrize: {
    encode(message: MsgClaimPrize, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimPrize;
    fromPartial(object: DeepPartial<MsgClaimPrize>): MsgClaimPrize;
    fromAmino(object: MsgClaimPrizeAmino): MsgClaimPrize;
    toAmino(message: MsgClaimPrize): MsgClaimPrizeAmino;
    fromAminoMsg(object: MsgClaimPrizeAminoMsg): MsgClaimPrize;
    fromProtoMsg(message: MsgClaimPrizeProtoMsg): MsgClaimPrize;
    toProto(message: MsgClaimPrize): Uint8Array;
    toProtoMsg(message: MsgClaimPrize): MsgClaimPrizeProtoMsg;
};
export declare const MsgClaimPrizeResponse: {
    encode(_: MsgClaimPrizeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimPrizeResponse;
    fromPartial(_: DeepPartial<MsgClaimPrizeResponse>): MsgClaimPrizeResponse;
    fromAmino(_: MsgClaimPrizeResponseAmino): MsgClaimPrizeResponse;
    toAmino(_: MsgClaimPrizeResponse): MsgClaimPrizeResponseAmino;
    fromAminoMsg(object: MsgClaimPrizeResponseAminoMsg): MsgClaimPrizeResponse;
    fromProtoMsg(message: MsgClaimPrizeResponseProtoMsg): MsgClaimPrizeResponse;
    toProto(message: MsgClaimPrizeResponse): Uint8Array;
    toProtoMsg(message: MsgClaimPrizeResponse): MsgClaimPrizeResponseProtoMsg;
};
export declare const MsgWithdrawDeposit: {
    encode(message: MsgWithdrawDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDeposit;
    fromPartial(object: DeepPartial<MsgWithdrawDeposit>): MsgWithdrawDeposit;
    fromAmino(object: MsgWithdrawDepositAmino): MsgWithdrawDeposit;
    toAmino(message: MsgWithdrawDeposit): MsgWithdrawDepositAmino;
    fromAminoMsg(object: MsgWithdrawDepositAminoMsg): MsgWithdrawDeposit;
    fromProtoMsg(message: MsgWithdrawDepositProtoMsg): MsgWithdrawDeposit;
    toProto(message: MsgWithdrawDeposit): Uint8Array;
    toProtoMsg(message: MsgWithdrawDeposit): MsgWithdrawDepositProtoMsg;
};
export declare const MsgWithdrawDepositResponse: {
    encode(message: MsgWithdrawDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDepositResponse;
    fromPartial(object: DeepPartial<MsgWithdrawDepositResponse>): MsgWithdrawDepositResponse;
    fromAmino(object: MsgWithdrawDepositResponseAmino): MsgWithdrawDepositResponse;
    toAmino(message: MsgWithdrawDepositResponse): MsgWithdrawDepositResponseAmino;
    fromAminoMsg(object: MsgWithdrawDepositResponseAminoMsg): MsgWithdrawDepositResponse;
    fromProtoMsg(message: MsgWithdrawDepositResponseProtoMsg): MsgWithdrawDepositResponse;
    toProto(message: MsgWithdrawDepositResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawDepositResponse): MsgWithdrawDepositResponseProtoMsg;
};
export declare const MsgWithdrawDepositRetry: {
    encode(message: MsgWithdrawDepositRetry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDepositRetry;
    fromPartial(object: DeepPartial<MsgWithdrawDepositRetry>): MsgWithdrawDepositRetry;
    fromAmino(object: MsgWithdrawDepositRetryAmino): MsgWithdrawDepositRetry;
    toAmino(message: MsgWithdrawDepositRetry): MsgWithdrawDepositRetryAmino;
    fromAminoMsg(object: MsgWithdrawDepositRetryAminoMsg): MsgWithdrawDepositRetry;
    fromProtoMsg(message: MsgWithdrawDepositRetryProtoMsg): MsgWithdrawDepositRetry;
    toProto(message: MsgWithdrawDepositRetry): Uint8Array;
    toProtoMsg(message: MsgWithdrawDepositRetry): MsgWithdrawDepositRetryProtoMsg;
};
export declare const MsgWithdrawDepositRetryResponse: {
    encode(_: MsgWithdrawDepositRetryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDepositRetryResponse;
    fromPartial(_: DeepPartial<MsgWithdrawDepositRetryResponse>): MsgWithdrawDepositRetryResponse;
    fromAmino(_: MsgWithdrawDepositRetryResponseAmino): MsgWithdrawDepositRetryResponse;
    toAmino(_: MsgWithdrawDepositRetryResponse): MsgWithdrawDepositRetryResponseAmino;
    fromAminoMsg(object: MsgWithdrawDepositRetryResponseAminoMsg): MsgWithdrawDepositRetryResponse;
    fromProtoMsg(message: MsgWithdrawDepositRetryResponseProtoMsg): MsgWithdrawDepositRetryResponse;
    toProto(message: MsgWithdrawDepositRetryResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawDepositRetryResponse): MsgWithdrawDepositRetryResponseProtoMsg;
};
export declare const MsgDrawRetry: {
    encode(message: MsgDrawRetry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawRetry;
    fromPartial(object: DeepPartial<MsgDrawRetry>): MsgDrawRetry;
    fromAmino(object: MsgDrawRetryAmino): MsgDrawRetry;
    toAmino(message: MsgDrawRetry): MsgDrawRetryAmino;
    fromAminoMsg(object: MsgDrawRetryAminoMsg): MsgDrawRetry;
    fromProtoMsg(message: MsgDrawRetryProtoMsg): MsgDrawRetry;
    toProto(message: MsgDrawRetry): Uint8Array;
    toProtoMsg(message: MsgDrawRetry): MsgDrawRetryProtoMsg;
};
export declare const MsgDrawRetryResponse: {
    encode(_: MsgDrawRetryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawRetryResponse;
    fromPartial(_: DeepPartial<MsgDrawRetryResponse>): MsgDrawRetryResponse;
    fromAmino(_: MsgDrawRetryResponseAmino): MsgDrawRetryResponse;
    toAmino(_: MsgDrawRetryResponse): MsgDrawRetryResponseAmino;
    fromAminoMsg(object: MsgDrawRetryResponseAminoMsg): MsgDrawRetryResponse;
    fromProtoMsg(message: MsgDrawRetryResponseProtoMsg): MsgDrawRetryResponse;
    toProto(message: MsgDrawRetryResponse): Uint8Array;
    toProtoMsg(message: MsgDrawRetryResponse): MsgDrawRetryResponseProtoMsg;
};
export declare const MsgRestoreInterchainAccounts: {
    encode(message: MsgRestoreInterchainAccounts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccounts;
    fromPartial(object: DeepPartial<MsgRestoreInterchainAccounts>): MsgRestoreInterchainAccounts;
    fromAmino(object: MsgRestoreInterchainAccountsAmino): MsgRestoreInterchainAccounts;
    toAmino(message: MsgRestoreInterchainAccounts): MsgRestoreInterchainAccountsAmino;
    fromAminoMsg(object: MsgRestoreInterchainAccountsAminoMsg): MsgRestoreInterchainAccounts;
    fromProtoMsg(message: MsgRestoreInterchainAccountsProtoMsg): MsgRestoreInterchainAccounts;
    toProto(message: MsgRestoreInterchainAccounts): Uint8Array;
    toProtoMsg(message: MsgRestoreInterchainAccounts): MsgRestoreInterchainAccountsProtoMsg;
};
export declare const MsgRestoreInterchainAccountsResponse: {
    encode(_: MsgRestoreInterchainAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccountsResponse;
    fromPartial(_: DeepPartial<MsgRestoreInterchainAccountsResponse>): MsgRestoreInterchainAccountsResponse;
    fromAmino(_: MsgRestoreInterchainAccountsResponseAmino): MsgRestoreInterchainAccountsResponse;
    toAmino(_: MsgRestoreInterchainAccountsResponse): MsgRestoreInterchainAccountsResponseAmino;
    fromAminoMsg(object: MsgRestoreInterchainAccountsResponseAminoMsg): MsgRestoreInterchainAccountsResponse;
    fromProtoMsg(message: MsgRestoreInterchainAccountsResponseProtoMsg): MsgRestoreInterchainAccountsResponse;
    toProto(message: MsgRestoreInterchainAccountsResponse): Uint8Array;
    toProtoMsg(message: MsgRestoreInterchainAccountsResponse): MsgRestoreInterchainAccountsResponseProtoMsg;
};
export declare const MsgGenerateSeed: {
    encode(message: MsgGenerateSeed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGenerateSeed;
    fromPartial(object: DeepPartial<MsgGenerateSeed>): MsgGenerateSeed;
    fromAmino(object: MsgGenerateSeedAmino): MsgGenerateSeed;
    toAmino(message: MsgGenerateSeed): MsgGenerateSeedAmino;
    fromAminoMsg(object: MsgGenerateSeedAminoMsg): MsgGenerateSeed;
    fromProtoMsg(message: MsgGenerateSeedProtoMsg): MsgGenerateSeed;
    toProto(message: MsgGenerateSeed): Uint8Array;
    toProtoMsg(message: MsgGenerateSeed): MsgGenerateSeedProtoMsg;
};
export declare const MsgGenerateSeedResponse: {
    encode(message: MsgGenerateSeedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGenerateSeedResponse;
    fromPartial(object: DeepPartial<MsgGenerateSeedResponse>): MsgGenerateSeedResponse;
    fromAmino(object: MsgGenerateSeedResponseAmino): MsgGenerateSeedResponse;
    toAmino(message: MsgGenerateSeedResponse): MsgGenerateSeedResponseAmino;
    fromAminoMsg(object: MsgGenerateSeedResponseAminoMsg): MsgGenerateSeedResponse;
    fromProtoMsg(message: MsgGenerateSeedResponseProtoMsg): MsgGenerateSeedResponse;
    toProto(message: MsgGenerateSeedResponse): Uint8Array;
    toProtoMsg(message: MsgGenerateSeedResponse): MsgGenerateSeedResponseProtoMsg;
};
