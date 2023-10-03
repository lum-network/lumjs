/// <reference types="long" />
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { Deposit, DepositAmino, DepositSDKType } from "./deposit";
import { Draw, DrawAmino, DrawSDKType } from "./draw";
import { Prize, PrizeAmino, PrizeSDKType } from "./prize";
import { Withdrawal, WithdrawalAmino, WithdrawalSDKType } from "./withdrawal";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsResponse {
    params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/lum.network.millions.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "/lum.network.millions.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType | undefined;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/lum.network.millions.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryPoolResponse {
    pool: Pool | undefined;
}
export interface QueryPoolResponseProtoMsg {
    typeUrl: "/lum.network.millions.QueryPoolResponse";
    value: Uint8Array;
}
export interface QueryPoolResponseAmino {
    pool?: PoolAmino | undefined;
}
export interface QueryPoolResponseAminoMsg {
    type: "/lum.network.millions.QueryPoolResponse";
    value: QueryPoolResponseAmino;
}
export interface QueryPoolResponseSDKType {
    pool: PoolSDKType | undefined;
}
export interface QueryPoolsResponse {
    pools: Pool[];
    pagination: PageResponse | undefined;
}
export interface QueryPoolsResponseProtoMsg {
    typeUrl: "/lum.network.millions.QueryPoolsResponse";
    value: Uint8Array;
}
export interface QueryPoolsResponseAmino {
    pools: PoolAmino[];
    pagination?: PageResponseAmino | undefined;
}
export interface QueryPoolsResponseAminoMsg {
    type: "/lum.network.millions.QueryPoolsResponse";
    value: QueryPoolsResponseAmino;
}
export interface QueryPoolsResponseSDKType {
    pools: PoolSDKType[];
    pagination: PageResponseSDKType | undefined;
}
export interface QueryPoolRequest {
    poolId: Long;
}
export interface QueryPoolRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryPoolRequest";
    value: Uint8Array;
}
export interface QueryPoolRequestAmino {
    pool_id: string;
}
export interface QueryPoolRequestAminoMsg {
    type: "/lum.network.millions.QueryPoolRequest";
    value: QueryPoolRequestAmino;
}
export interface QueryPoolRequestSDKType {
    pool_id: Long;
}
export interface QueryPoolsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryPoolsRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryPoolsRequest";
    value: Uint8Array;
}
export interface QueryPoolsRequestAmino {
    pagination?: PageRequestAmino | undefined;
}
export interface QueryPoolsRequestAminoMsg {
    type: "/lum.network.millions.QueryPoolsRequest";
    value: QueryPoolsRequestAmino;
}
export interface QueryPoolsRequestSDKType {
    pagination: PageRequestSDKType | undefined;
}
export interface QueryDepositResponse {
    deposit: Deposit | undefined;
}
export interface QueryDepositResponseProtoMsg {
    typeUrl: "/lum.network.millions.QueryDepositResponse";
    value: Uint8Array;
}
export interface QueryDepositResponseAmino {
    deposit?: DepositAmino | undefined;
}
export interface QueryDepositResponseAminoMsg {
    type: "/lum.network.millions.QueryDepositResponse";
    value: QueryDepositResponseAmino;
}
export interface QueryDepositResponseSDKType {
    deposit: DepositSDKType | undefined;
}
export interface QueryDepositsResponse {
    deposits: Deposit[];
    pagination: PageResponse | undefined;
}
export interface QueryDepositsResponseProtoMsg {
    typeUrl: "/lum.network.millions.QueryDepositsResponse";
    value: Uint8Array;
}
export interface QueryDepositsResponseAmino {
    deposits: DepositAmino[];
    pagination?: PageResponseAmino | undefined;
}
export interface QueryDepositsResponseAminoMsg {
    type: "/lum.network.millions.QueryDepositsResponse";
    value: QueryDepositsResponseAmino;
}
export interface QueryDepositsResponseSDKType {
    deposits: DepositSDKType[];
    pagination: PageResponseSDKType | undefined;
}
export interface QueryDepositsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryDepositsRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryDepositsRequest";
    value: Uint8Array;
}
export interface QueryDepositsRequestAmino {
    pagination?: PageRequestAmino | undefined;
}
export interface QueryDepositsRequestAminoMsg {
    type: "/lum.network.millions.QueryDepositsRequest";
    value: QueryDepositsRequestAmino;
}
export interface QueryDepositsRequestSDKType {
    pagination: PageRequestSDKType | undefined;
}
export interface QueryPoolDepositRequest {
    poolId: Long;
    depositId: Long;
}
export interface QueryPoolDepositRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryPoolDepositRequest";
    value: Uint8Array;
}
export interface QueryPoolDepositRequestAmino {
    pool_id: string;
    deposit_id: string;
}
export interface QueryPoolDepositRequestAminoMsg {
    type: "/lum.network.millions.QueryPoolDepositRequest";
    value: QueryPoolDepositRequestAmino;
}
export interface QueryPoolDepositRequestSDKType {
    pool_id: Long;
    deposit_id: Long;
}
export interface QueryPoolDepositsRequest {
    poolId: Long;
    pagination: PageRequest | undefined;
}
export interface QueryPoolDepositsRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryPoolDepositsRequest";
    value: Uint8Array;
}
export interface QueryPoolDepositsRequestAmino {
    pool_id: string;
    pagination?: PageRequestAmino | undefined;
}
export interface QueryPoolDepositsRequestAminoMsg {
    type: "/lum.network.millions.QueryPoolDepositsRequest";
    value: QueryPoolDepositsRequestAmino;
}
export interface QueryPoolDepositsRequestSDKType {
    pool_id: Long;
    pagination: PageRequestSDKType | undefined;
}
export interface QueryAccountDepositsRequest {
    depositorAddress: string;
    pagination: PageRequest | undefined;
}
export interface QueryAccountDepositsRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryAccountDepositsRequest";
    value: Uint8Array;
}
export interface QueryAccountDepositsRequestAmino {
    depositor_address: string;
    pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountDepositsRequestAminoMsg {
    type: "/lum.network.millions.QueryAccountDepositsRequest";
    value: QueryAccountDepositsRequestAmino;
}
export interface QueryAccountDepositsRequestSDKType {
    depositor_address: string;
    pagination: PageRequestSDKType | undefined;
}
export interface QueryAccountPoolDepositsRequest {
    depositorAddress: string;
    poolId: Long;
    pagination: PageRequest | undefined;
}
export interface QueryAccountPoolDepositsRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryAccountPoolDepositsRequest";
    value: Uint8Array;
}
export interface QueryAccountPoolDepositsRequestAmino {
    depositor_address: string;
    pool_id: string;
    pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountPoolDepositsRequestAminoMsg {
    type: "/lum.network.millions.QueryAccountPoolDepositsRequest";
    value: QueryAccountPoolDepositsRequestAmino;
}
export interface QueryAccountPoolDepositsRequestSDKType {
    depositor_address: string;
    pool_id: Long;
    pagination: PageRequestSDKType | undefined;
}
export interface QueryDrawResponse {
    draw: Draw | undefined;
}
export interface QueryDrawResponseProtoMsg {
    typeUrl: "/lum.network.millions.QueryDrawResponse";
    value: Uint8Array;
}
export interface QueryDrawResponseAmino {
    draw?: DrawAmino | undefined;
}
export interface QueryDrawResponseAminoMsg {
    type: "/lum.network.millions.QueryDrawResponse";
    value: QueryDrawResponseAmino;
}
export interface QueryDrawResponseSDKType {
    draw: DrawSDKType | undefined;
}
export interface QueryDrawsResponse {
    draws: Draw[];
    pagination: PageResponse | undefined;
}
export interface QueryDrawsResponseProtoMsg {
    typeUrl: "/lum.network.millions.QueryDrawsResponse";
    value: Uint8Array;
}
export interface QueryDrawsResponseAmino {
    draws: DrawAmino[];
    pagination?: PageResponseAmino | undefined;
}
export interface QueryDrawsResponseAminoMsg {
    type: "/lum.network.millions.QueryDrawsResponse";
    value: QueryDrawsResponseAmino;
}
export interface QueryDrawsResponseSDKType {
    draws: DrawSDKType[];
    pagination: PageResponseSDKType | undefined;
}
export interface QueryDrawsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryDrawsRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryDrawsRequest";
    value: Uint8Array;
}
export interface QueryDrawsRequestAmino {
    pagination?: PageRequestAmino | undefined;
}
export interface QueryDrawsRequestAminoMsg {
    type: "/lum.network.millions.QueryDrawsRequest";
    value: QueryDrawsRequestAmino;
}
export interface QueryDrawsRequestSDKType {
    pagination: PageRequestSDKType | undefined;
}
export interface QueryPoolDrawsRequest {
    poolId: Long;
    pagination: PageRequest | undefined;
}
export interface QueryPoolDrawsRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryPoolDrawsRequest";
    value: Uint8Array;
}
export interface QueryPoolDrawsRequestAmino {
    pool_id: string;
    pagination?: PageRequestAmino | undefined;
}
export interface QueryPoolDrawsRequestAminoMsg {
    type: "/lum.network.millions.QueryPoolDrawsRequest";
    value: QueryPoolDrawsRequestAmino;
}
export interface QueryPoolDrawsRequestSDKType {
    pool_id: Long;
    pagination: PageRequestSDKType | undefined;
}
export interface QueryPoolDrawRequest {
    poolId: Long;
    drawId: Long;
}
export interface QueryPoolDrawRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryPoolDrawRequest";
    value: Uint8Array;
}
export interface QueryPoolDrawRequestAmino {
    pool_id: string;
    draw_id: string;
}
export interface QueryPoolDrawRequestAminoMsg {
    type: "/lum.network.millions.QueryPoolDrawRequest";
    value: QueryPoolDrawRequestAmino;
}
export interface QueryPoolDrawRequestSDKType {
    pool_id: Long;
    draw_id: Long;
}
export interface QueryPrizeResponse {
    prize: Prize | undefined;
}
export interface QueryPrizeResponseProtoMsg {
    typeUrl: "/lum.network.millions.QueryPrizeResponse";
    value: Uint8Array;
}
export interface QueryPrizeResponseAmino {
    prize?: PrizeAmino | undefined;
}
export interface QueryPrizeResponseAminoMsg {
    type: "/lum.network.millions.QueryPrizeResponse";
    value: QueryPrizeResponseAmino;
}
export interface QueryPrizeResponseSDKType {
    prize: PrizeSDKType | undefined;
}
export interface QueryPrizesResponse {
    prizes: Prize[];
    pagination: PageResponse | undefined;
}
export interface QueryPrizesResponseProtoMsg {
    typeUrl: "/lum.network.millions.QueryPrizesResponse";
    value: Uint8Array;
}
export interface QueryPrizesResponseAmino {
    prizes: PrizeAmino[];
    pagination?: PageResponseAmino | undefined;
}
export interface QueryPrizesResponseAminoMsg {
    type: "/lum.network.millions.QueryPrizesResponse";
    value: QueryPrizesResponseAmino;
}
export interface QueryPrizesResponseSDKType {
    prizes: PrizeSDKType[];
    pagination: PageResponseSDKType | undefined;
}
export interface QueryPoolDrawPrizeRequest {
    poolId: Long;
    drawId: Long;
    prizeId: Long;
}
export interface QueryPoolDrawPrizeRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryPoolDrawPrizeRequest";
    value: Uint8Array;
}
export interface QueryPoolDrawPrizeRequestAmino {
    pool_id: string;
    draw_id: string;
    prize_id: string;
}
export interface QueryPoolDrawPrizeRequestAminoMsg {
    type: "/lum.network.millions.QueryPoolDrawPrizeRequest";
    value: QueryPoolDrawPrizeRequestAmino;
}
export interface QueryPoolDrawPrizeRequestSDKType {
    pool_id: Long;
    draw_id: Long;
    prize_id: Long;
}
export interface QueryPrizesRequest {
    pagination: PageRequest | undefined;
}
export interface QueryPrizesRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryPrizesRequest";
    value: Uint8Array;
}
export interface QueryPrizesRequestAmino {
    pagination?: PageRequestAmino | undefined;
}
export interface QueryPrizesRequestAminoMsg {
    type: "/lum.network.millions.QueryPrizesRequest";
    value: QueryPrizesRequestAmino;
}
export interface QueryPrizesRequestSDKType {
    pagination: PageRequestSDKType | undefined;
}
export interface QueryPoolPrizesRequest {
    poolId: Long;
    pagination: PageRequest | undefined;
}
export interface QueryPoolPrizesRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryPoolPrizesRequest";
    value: Uint8Array;
}
export interface QueryPoolPrizesRequestAmino {
    pool_id: string;
    pagination?: PageRequestAmino | undefined;
}
export interface QueryPoolPrizesRequestAminoMsg {
    type: "/lum.network.millions.QueryPoolPrizesRequest";
    value: QueryPoolPrizesRequestAmino;
}
export interface QueryPoolPrizesRequestSDKType {
    pool_id: Long;
    pagination: PageRequestSDKType | undefined;
}
export interface QueryPoolDrawPrizesRequest {
    poolId: Long;
    drawId: Long;
    pagination: PageRequest | undefined;
}
export interface QueryPoolDrawPrizesRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryPoolDrawPrizesRequest";
    value: Uint8Array;
}
export interface QueryPoolDrawPrizesRequestAmino {
    pool_id: string;
    draw_id: string;
    pagination?: PageRequestAmino | undefined;
}
export interface QueryPoolDrawPrizesRequestAminoMsg {
    type: "/lum.network.millions.QueryPoolDrawPrizesRequest";
    value: QueryPoolDrawPrizesRequestAmino;
}
export interface QueryPoolDrawPrizesRequestSDKType {
    pool_id: Long;
    draw_id: Long;
    pagination: PageRequestSDKType | undefined;
}
export interface QueryAccountPrizesRequest {
    winnerAddress: string;
    pagination: PageRequest | undefined;
}
export interface QueryAccountPrizesRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryAccountPrizesRequest";
    value: Uint8Array;
}
export interface QueryAccountPrizesRequestAmino {
    winner_address: string;
    pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountPrizesRequestAminoMsg {
    type: "/lum.network.millions.QueryAccountPrizesRequest";
    value: QueryAccountPrizesRequestAmino;
}
export interface QueryAccountPrizesRequestSDKType {
    winner_address: string;
    pagination: PageRequestSDKType | undefined;
}
export interface QueryAccountPoolPrizesRequest {
    winnerAddress: string;
    poolId: Long;
    pagination: PageRequest | undefined;
}
export interface QueryAccountPoolPrizesRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryAccountPoolPrizesRequest";
    value: Uint8Array;
}
export interface QueryAccountPoolPrizesRequestAmino {
    winner_address: string;
    pool_id: string;
    pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountPoolPrizesRequestAminoMsg {
    type: "/lum.network.millions.QueryAccountPoolPrizesRequest";
    value: QueryAccountPoolPrizesRequestAmino;
}
export interface QueryAccountPoolPrizesRequestSDKType {
    winner_address: string;
    pool_id: Long;
    pagination: PageRequestSDKType | undefined;
}
export interface QueryAccountPoolDrawPrizesRequest {
    winnerAddress: string;
    poolId: Long;
    drawId: Long;
    pagination: PageRequest | undefined;
}
export interface QueryAccountPoolDrawPrizesRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryAccountPoolDrawPrizesRequest";
    value: Uint8Array;
}
export interface QueryAccountPoolDrawPrizesRequestAmino {
    winner_address: string;
    pool_id: string;
    draw_id: string;
    pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountPoolDrawPrizesRequestAminoMsg {
    type: "/lum.network.millions.QueryAccountPoolDrawPrizesRequest";
    value: QueryAccountPoolDrawPrizesRequestAmino;
}
export interface QueryAccountPoolDrawPrizesRequestSDKType {
    winner_address: string;
    pool_id: Long;
    draw_id: Long;
    pagination: PageRequestSDKType | undefined;
}
export interface QueryWithdrawalResponse {
    withdrawal: Withdrawal | undefined;
}
export interface QueryWithdrawalResponseProtoMsg {
    typeUrl: "/lum.network.millions.QueryWithdrawalResponse";
    value: Uint8Array;
}
export interface QueryWithdrawalResponseAmino {
    withdrawal?: WithdrawalAmino | undefined;
}
export interface QueryWithdrawalResponseAminoMsg {
    type: "/lum.network.millions.QueryWithdrawalResponse";
    value: QueryWithdrawalResponseAmino;
}
export interface QueryWithdrawalResponseSDKType {
    withdrawal: WithdrawalSDKType | undefined;
}
export interface QueryWithdrawalsResponse {
    withdrawals: Withdrawal[];
    pagination: PageResponse | undefined;
}
export interface QueryWithdrawalsResponseProtoMsg {
    typeUrl: "/lum.network.millions.QueryWithdrawalsResponse";
    value: Uint8Array;
}
export interface QueryWithdrawalsResponseAmino {
    withdrawals: WithdrawalAmino[];
    pagination?: PageResponseAmino | undefined;
}
export interface QueryWithdrawalsResponseAminoMsg {
    type: "/lum.network.millions.QueryWithdrawalsResponse";
    value: QueryWithdrawalsResponseAmino;
}
export interface QueryWithdrawalsResponseSDKType {
    withdrawals: WithdrawalSDKType[];
    pagination: PageResponseSDKType | undefined;
}
export interface QueryPoolWithdrawalRequest {
    poolId: Long;
    withdrawalId: Long;
}
export interface QueryPoolWithdrawalRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryPoolWithdrawalRequest";
    value: Uint8Array;
}
export interface QueryPoolWithdrawalRequestAmino {
    pool_id: string;
    withdrawal_id: string;
}
export interface QueryPoolWithdrawalRequestAminoMsg {
    type: "/lum.network.millions.QueryPoolWithdrawalRequest";
    value: QueryPoolWithdrawalRequestAmino;
}
export interface QueryPoolWithdrawalRequestSDKType {
    pool_id: Long;
    withdrawal_id: Long;
}
export interface QueryWithdrawalsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryWithdrawalsRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryWithdrawalsRequest";
    value: Uint8Array;
}
export interface QueryWithdrawalsRequestAmino {
    pagination?: PageRequestAmino | undefined;
}
export interface QueryWithdrawalsRequestAminoMsg {
    type: "/lum.network.millions.QueryWithdrawalsRequest";
    value: QueryWithdrawalsRequestAmino;
}
export interface QueryWithdrawalsRequestSDKType {
    pagination: PageRequestSDKType | undefined;
}
export interface QueryPoolWithdrawalsRequest {
    poolId: Long;
    pagination: PageRequest | undefined;
}
export interface QueryPoolWithdrawalsRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryPoolWithdrawalsRequest";
    value: Uint8Array;
}
export interface QueryPoolWithdrawalsRequestAmino {
    pool_id: string;
    pagination?: PageRequestAmino | undefined;
}
export interface QueryPoolWithdrawalsRequestAminoMsg {
    type: "/lum.network.millions.QueryPoolWithdrawalsRequest";
    value: QueryPoolWithdrawalsRequestAmino;
}
export interface QueryPoolWithdrawalsRequestSDKType {
    pool_id: Long;
    pagination: PageRequestSDKType | undefined;
}
export interface QueryAccountWithdrawalsRequest {
    depositorAddress: string;
    pagination: PageRequest | undefined;
}
export interface QueryAccountWithdrawalsRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryAccountWithdrawalsRequest";
    value: Uint8Array;
}
export interface QueryAccountWithdrawalsRequestAmino {
    depositor_address: string;
    pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountWithdrawalsRequestAminoMsg {
    type: "/lum.network.millions.QueryAccountWithdrawalsRequest";
    value: QueryAccountWithdrawalsRequestAmino;
}
export interface QueryAccountWithdrawalsRequestSDKType {
    depositor_address: string;
    pagination: PageRequestSDKType | undefined;
}
export interface QueryAccountPoolWithdrawalsRequest {
    depositorAddress: string;
    poolId: Long;
    pagination: PageRequest | undefined;
}
export interface QueryAccountPoolWithdrawalsRequestProtoMsg {
    typeUrl: "/lum.network.millions.QueryAccountPoolWithdrawalsRequest";
    value: Uint8Array;
}
export interface QueryAccountPoolWithdrawalsRequestAmino {
    depositor_address: string;
    pool_id: string;
    pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountPoolWithdrawalsRequestAminoMsg {
    type: "/lum.network.millions.QueryAccountPoolWithdrawalsRequest";
    value: QueryAccountPoolWithdrawalsRequestAmino;
}
export interface QueryAccountPoolWithdrawalsRequestSDKType {
    depositor_address: string;
    pool_id: Long;
    pagination: PageRequestSDKType | undefined;
}
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse;
    fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse;
    fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse;
    toAmino(message: QueryPoolResponse): QueryPoolResponseAmino;
    fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse;
    fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse;
    toProto(message: QueryPoolResponse): Uint8Array;
    toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg;
};
export declare const QueryPoolsResponse: {
    encode(message: QueryPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse;
    fromPartial(object: DeepPartial<QueryPoolsResponse>): QueryPoolsResponse;
    fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse;
    toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino;
    fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse;
    fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse;
    toProto(message: QueryPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg;
};
export declare const QueryPoolRequest: {
    encode(message: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest;
    fromPartial(object: DeepPartial<QueryPoolRequest>): QueryPoolRequest;
    fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest;
    toAmino(message: QueryPoolRequest): QueryPoolRequestAmino;
    fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest;
    fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest;
    toProto(message: QueryPoolRequest): Uint8Array;
    toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg;
};
export declare const QueryPoolsRequest: {
    encode(message: QueryPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest;
    fromPartial(object: DeepPartial<QueryPoolsRequest>): QueryPoolsRequest;
    fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest;
    toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino;
    fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest;
    fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest;
    toProto(message: QueryPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg;
};
export declare const QueryDepositResponse: {
    encode(message: QueryDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositResponse;
    fromPartial(object: DeepPartial<QueryDepositResponse>): QueryDepositResponse;
    fromAmino(object: QueryDepositResponseAmino): QueryDepositResponse;
    toAmino(message: QueryDepositResponse): QueryDepositResponseAmino;
    fromAminoMsg(object: QueryDepositResponseAminoMsg): QueryDepositResponse;
    fromProtoMsg(message: QueryDepositResponseProtoMsg): QueryDepositResponse;
    toProto(message: QueryDepositResponse): Uint8Array;
    toProtoMsg(message: QueryDepositResponse): QueryDepositResponseProtoMsg;
};
export declare const QueryDepositsResponse: {
    encode(message: QueryDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponse;
    fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse;
    fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse;
    toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino;
    fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse;
    fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse;
    toProto(message: QueryDepositsResponse): Uint8Array;
    toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg;
};
export declare const QueryDepositsRequest: {
    encode(message: QueryDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest;
    fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest;
    fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest;
    toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino;
    fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest;
    fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest;
    toProto(message: QueryDepositsRequest): Uint8Array;
    toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg;
};
export declare const QueryPoolDepositRequest: {
    encode(message: QueryPoolDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDepositRequest;
    fromPartial(object: DeepPartial<QueryPoolDepositRequest>): QueryPoolDepositRequest;
    fromAmino(object: QueryPoolDepositRequestAmino): QueryPoolDepositRequest;
    toAmino(message: QueryPoolDepositRequest): QueryPoolDepositRequestAmino;
    fromAminoMsg(object: QueryPoolDepositRequestAminoMsg): QueryPoolDepositRequest;
    fromProtoMsg(message: QueryPoolDepositRequestProtoMsg): QueryPoolDepositRequest;
    toProto(message: QueryPoolDepositRequest): Uint8Array;
    toProtoMsg(message: QueryPoolDepositRequest): QueryPoolDepositRequestProtoMsg;
};
export declare const QueryPoolDepositsRequest: {
    encode(message: QueryPoolDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDepositsRequest;
    fromPartial(object: DeepPartial<QueryPoolDepositsRequest>): QueryPoolDepositsRequest;
    fromAmino(object: QueryPoolDepositsRequestAmino): QueryPoolDepositsRequest;
    toAmino(message: QueryPoolDepositsRequest): QueryPoolDepositsRequestAmino;
    fromAminoMsg(object: QueryPoolDepositsRequestAminoMsg): QueryPoolDepositsRequest;
    fromProtoMsg(message: QueryPoolDepositsRequestProtoMsg): QueryPoolDepositsRequest;
    toProto(message: QueryPoolDepositsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolDepositsRequest): QueryPoolDepositsRequestProtoMsg;
};
export declare const QueryAccountDepositsRequest: {
    encode(message: QueryAccountDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDepositsRequest;
    fromPartial(object: DeepPartial<QueryAccountDepositsRequest>): QueryAccountDepositsRequest;
    fromAmino(object: QueryAccountDepositsRequestAmino): QueryAccountDepositsRequest;
    toAmino(message: QueryAccountDepositsRequest): QueryAccountDepositsRequestAmino;
    fromAminoMsg(object: QueryAccountDepositsRequestAminoMsg): QueryAccountDepositsRequest;
    fromProtoMsg(message: QueryAccountDepositsRequestProtoMsg): QueryAccountDepositsRequest;
    toProto(message: QueryAccountDepositsRequest): Uint8Array;
    toProtoMsg(message: QueryAccountDepositsRequest): QueryAccountDepositsRequestProtoMsg;
};
export declare const QueryAccountPoolDepositsRequest: {
    encode(message: QueryAccountPoolDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPoolDepositsRequest;
    fromPartial(object: DeepPartial<QueryAccountPoolDepositsRequest>): QueryAccountPoolDepositsRequest;
    fromAmino(object: QueryAccountPoolDepositsRequestAmino): QueryAccountPoolDepositsRequest;
    toAmino(message: QueryAccountPoolDepositsRequest): QueryAccountPoolDepositsRequestAmino;
    fromAminoMsg(object: QueryAccountPoolDepositsRequestAminoMsg): QueryAccountPoolDepositsRequest;
    fromProtoMsg(message: QueryAccountPoolDepositsRequestProtoMsg): QueryAccountPoolDepositsRequest;
    toProto(message: QueryAccountPoolDepositsRequest): Uint8Array;
    toProtoMsg(message: QueryAccountPoolDepositsRequest): QueryAccountPoolDepositsRequestProtoMsg;
};
export declare const QueryDrawResponse: {
    encode(message: QueryDrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDrawResponse;
    fromPartial(object: DeepPartial<QueryDrawResponse>): QueryDrawResponse;
    fromAmino(object: QueryDrawResponseAmino): QueryDrawResponse;
    toAmino(message: QueryDrawResponse): QueryDrawResponseAmino;
    fromAminoMsg(object: QueryDrawResponseAminoMsg): QueryDrawResponse;
    fromProtoMsg(message: QueryDrawResponseProtoMsg): QueryDrawResponse;
    toProto(message: QueryDrawResponse): Uint8Array;
    toProtoMsg(message: QueryDrawResponse): QueryDrawResponseProtoMsg;
};
export declare const QueryDrawsResponse: {
    encode(message: QueryDrawsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDrawsResponse;
    fromPartial(object: DeepPartial<QueryDrawsResponse>): QueryDrawsResponse;
    fromAmino(object: QueryDrawsResponseAmino): QueryDrawsResponse;
    toAmino(message: QueryDrawsResponse): QueryDrawsResponseAmino;
    fromAminoMsg(object: QueryDrawsResponseAminoMsg): QueryDrawsResponse;
    fromProtoMsg(message: QueryDrawsResponseProtoMsg): QueryDrawsResponse;
    toProto(message: QueryDrawsResponse): Uint8Array;
    toProtoMsg(message: QueryDrawsResponse): QueryDrawsResponseProtoMsg;
};
export declare const QueryDrawsRequest: {
    encode(message: QueryDrawsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDrawsRequest;
    fromPartial(object: DeepPartial<QueryDrawsRequest>): QueryDrawsRequest;
    fromAmino(object: QueryDrawsRequestAmino): QueryDrawsRequest;
    toAmino(message: QueryDrawsRequest): QueryDrawsRequestAmino;
    fromAminoMsg(object: QueryDrawsRequestAminoMsg): QueryDrawsRequest;
    fromProtoMsg(message: QueryDrawsRequestProtoMsg): QueryDrawsRequest;
    toProto(message: QueryDrawsRequest): Uint8Array;
    toProtoMsg(message: QueryDrawsRequest): QueryDrawsRequestProtoMsg;
};
export declare const QueryPoolDrawsRequest: {
    encode(message: QueryPoolDrawsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDrawsRequest;
    fromPartial(object: DeepPartial<QueryPoolDrawsRequest>): QueryPoolDrawsRequest;
    fromAmino(object: QueryPoolDrawsRequestAmino): QueryPoolDrawsRequest;
    toAmino(message: QueryPoolDrawsRequest): QueryPoolDrawsRequestAmino;
    fromAminoMsg(object: QueryPoolDrawsRequestAminoMsg): QueryPoolDrawsRequest;
    fromProtoMsg(message: QueryPoolDrawsRequestProtoMsg): QueryPoolDrawsRequest;
    toProto(message: QueryPoolDrawsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolDrawsRequest): QueryPoolDrawsRequestProtoMsg;
};
export declare const QueryPoolDrawRequest: {
    encode(message: QueryPoolDrawRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDrawRequest;
    fromPartial(object: DeepPartial<QueryPoolDrawRequest>): QueryPoolDrawRequest;
    fromAmino(object: QueryPoolDrawRequestAmino): QueryPoolDrawRequest;
    toAmino(message: QueryPoolDrawRequest): QueryPoolDrawRequestAmino;
    fromAminoMsg(object: QueryPoolDrawRequestAminoMsg): QueryPoolDrawRequest;
    fromProtoMsg(message: QueryPoolDrawRequestProtoMsg): QueryPoolDrawRequest;
    toProto(message: QueryPoolDrawRequest): Uint8Array;
    toProtoMsg(message: QueryPoolDrawRequest): QueryPoolDrawRequestProtoMsg;
};
export declare const QueryPrizeResponse: {
    encode(message: QueryPrizeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrizeResponse;
    fromPartial(object: DeepPartial<QueryPrizeResponse>): QueryPrizeResponse;
    fromAmino(object: QueryPrizeResponseAmino): QueryPrizeResponse;
    toAmino(message: QueryPrizeResponse): QueryPrizeResponseAmino;
    fromAminoMsg(object: QueryPrizeResponseAminoMsg): QueryPrizeResponse;
    fromProtoMsg(message: QueryPrizeResponseProtoMsg): QueryPrizeResponse;
    toProto(message: QueryPrizeResponse): Uint8Array;
    toProtoMsg(message: QueryPrizeResponse): QueryPrizeResponseProtoMsg;
};
export declare const QueryPrizesResponse: {
    encode(message: QueryPrizesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrizesResponse;
    fromPartial(object: DeepPartial<QueryPrizesResponse>): QueryPrizesResponse;
    fromAmino(object: QueryPrizesResponseAmino): QueryPrizesResponse;
    toAmino(message: QueryPrizesResponse): QueryPrizesResponseAmino;
    fromAminoMsg(object: QueryPrizesResponseAminoMsg): QueryPrizesResponse;
    fromProtoMsg(message: QueryPrizesResponseProtoMsg): QueryPrizesResponse;
    toProto(message: QueryPrizesResponse): Uint8Array;
    toProtoMsg(message: QueryPrizesResponse): QueryPrizesResponseProtoMsg;
};
export declare const QueryPoolDrawPrizeRequest: {
    encode(message: QueryPoolDrawPrizeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDrawPrizeRequest;
    fromPartial(object: DeepPartial<QueryPoolDrawPrizeRequest>): QueryPoolDrawPrizeRequest;
    fromAmino(object: QueryPoolDrawPrizeRequestAmino): QueryPoolDrawPrizeRequest;
    toAmino(message: QueryPoolDrawPrizeRequest): QueryPoolDrawPrizeRequestAmino;
    fromAminoMsg(object: QueryPoolDrawPrizeRequestAminoMsg): QueryPoolDrawPrizeRequest;
    fromProtoMsg(message: QueryPoolDrawPrizeRequestProtoMsg): QueryPoolDrawPrizeRequest;
    toProto(message: QueryPoolDrawPrizeRequest): Uint8Array;
    toProtoMsg(message: QueryPoolDrawPrizeRequest): QueryPoolDrawPrizeRequestProtoMsg;
};
export declare const QueryPrizesRequest: {
    encode(message: QueryPrizesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrizesRequest;
    fromPartial(object: DeepPartial<QueryPrizesRequest>): QueryPrizesRequest;
    fromAmino(object: QueryPrizesRequestAmino): QueryPrizesRequest;
    toAmino(message: QueryPrizesRequest): QueryPrizesRequestAmino;
    fromAminoMsg(object: QueryPrizesRequestAminoMsg): QueryPrizesRequest;
    fromProtoMsg(message: QueryPrizesRequestProtoMsg): QueryPrizesRequest;
    toProto(message: QueryPrizesRequest): Uint8Array;
    toProtoMsg(message: QueryPrizesRequest): QueryPrizesRequestProtoMsg;
};
export declare const QueryPoolPrizesRequest: {
    encode(message: QueryPoolPrizesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolPrizesRequest;
    fromPartial(object: DeepPartial<QueryPoolPrizesRequest>): QueryPoolPrizesRequest;
    fromAmino(object: QueryPoolPrizesRequestAmino): QueryPoolPrizesRequest;
    toAmino(message: QueryPoolPrizesRequest): QueryPoolPrizesRequestAmino;
    fromAminoMsg(object: QueryPoolPrizesRequestAminoMsg): QueryPoolPrizesRequest;
    fromProtoMsg(message: QueryPoolPrizesRequestProtoMsg): QueryPoolPrizesRequest;
    toProto(message: QueryPoolPrizesRequest): Uint8Array;
    toProtoMsg(message: QueryPoolPrizesRequest): QueryPoolPrizesRequestProtoMsg;
};
export declare const QueryPoolDrawPrizesRequest: {
    encode(message: QueryPoolDrawPrizesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDrawPrizesRequest;
    fromPartial(object: DeepPartial<QueryPoolDrawPrizesRequest>): QueryPoolDrawPrizesRequest;
    fromAmino(object: QueryPoolDrawPrizesRequestAmino): QueryPoolDrawPrizesRequest;
    toAmino(message: QueryPoolDrawPrizesRequest): QueryPoolDrawPrizesRequestAmino;
    fromAminoMsg(object: QueryPoolDrawPrizesRequestAminoMsg): QueryPoolDrawPrizesRequest;
    fromProtoMsg(message: QueryPoolDrawPrizesRequestProtoMsg): QueryPoolDrawPrizesRequest;
    toProto(message: QueryPoolDrawPrizesRequest): Uint8Array;
    toProtoMsg(message: QueryPoolDrawPrizesRequest): QueryPoolDrawPrizesRequestProtoMsg;
};
export declare const QueryAccountPrizesRequest: {
    encode(message: QueryAccountPrizesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPrizesRequest;
    fromPartial(object: DeepPartial<QueryAccountPrizesRequest>): QueryAccountPrizesRequest;
    fromAmino(object: QueryAccountPrizesRequestAmino): QueryAccountPrizesRequest;
    toAmino(message: QueryAccountPrizesRequest): QueryAccountPrizesRequestAmino;
    fromAminoMsg(object: QueryAccountPrizesRequestAminoMsg): QueryAccountPrizesRequest;
    fromProtoMsg(message: QueryAccountPrizesRequestProtoMsg): QueryAccountPrizesRequest;
    toProto(message: QueryAccountPrizesRequest): Uint8Array;
    toProtoMsg(message: QueryAccountPrizesRequest): QueryAccountPrizesRequestProtoMsg;
};
export declare const QueryAccountPoolPrizesRequest: {
    encode(message: QueryAccountPoolPrizesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPoolPrizesRequest;
    fromPartial(object: DeepPartial<QueryAccountPoolPrizesRequest>): QueryAccountPoolPrizesRequest;
    fromAmino(object: QueryAccountPoolPrizesRequestAmino): QueryAccountPoolPrizesRequest;
    toAmino(message: QueryAccountPoolPrizesRequest): QueryAccountPoolPrizesRequestAmino;
    fromAminoMsg(object: QueryAccountPoolPrizesRequestAminoMsg): QueryAccountPoolPrizesRequest;
    fromProtoMsg(message: QueryAccountPoolPrizesRequestProtoMsg): QueryAccountPoolPrizesRequest;
    toProto(message: QueryAccountPoolPrizesRequest): Uint8Array;
    toProtoMsg(message: QueryAccountPoolPrizesRequest): QueryAccountPoolPrizesRequestProtoMsg;
};
export declare const QueryAccountPoolDrawPrizesRequest: {
    encode(message: QueryAccountPoolDrawPrizesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPoolDrawPrizesRequest;
    fromPartial(object: DeepPartial<QueryAccountPoolDrawPrizesRequest>): QueryAccountPoolDrawPrizesRequest;
    fromAmino(object: QueryAccountPoolDrawPrizesRequestAmino): QueryAccountPoolDrawPrizesRequest;
    toAmino(message: QueryAccountPoolDrawPrizesRequest): QueryAccountPoolDrawPrizesRequestAmino;
    fromAminoMsg(object: QueryAccountPoolDrawPrizesRequestAminoMsg): QueryAccountPoolDrawPrizesRequest;
    fromProtoMsg(message: QueryAccountPoolDrawPrizesRequestProtoMsg): QueryAccountPoolDrawPrizesRequest;
    toProto(message: QueryAccountPoolDrawPrizesRequest): Uint8Array;
    toProtoMsg(message: QueryAccountPoolDrawPrizesRequest): QueryAccountPoolDrawPrizesRequestProtoMsg;
};
export declare const QueryWithdrawalResponse: {
    encode(message: QueryWithdrawalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalResponse;
    fromPartial(object: DeepPartial<QueryWithdrawalResponse>): QueryWithdrawalResponse;
    fromAmino(object: QueryWithdrawalResponseAmino): QueryWithdrawalResponse;
    toAmino(message: QueryWithdrawalResponse): QueryWithdrawalResponseAmino;
    fromAminoMsg(object: QueryWithdrawalResponseAminoMsg): QueryWithdrawalResponse;
    fromProtoMsg(message: QueryWithdrawalResponseProtoMsg): QueryWithdrawalResponse;
    toProto(message: QueryWithdrawalResponse): Uint8Array;
    toProtoMsg(message: QueryWithdrawalResponse): QueryWithdrawalResponseProtoMsg;
};
export declare const QueryWithdrawalsResponse: {
    encode(message: QueryWithdrawalsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalsResponse;
    fromPartial(object: DeepPartial<QueryWithdrawalsResponse>): QueryWithdrawalsResponse;
    fromAmino(object: QueryWithdrawalsResponseAmino): QueryWithdrawalsResponse;
    toAmino(message: QueryWithdrawalsResponse): QueryWithdrawalsResponseAmino;
    fromAminoMsg(object: QueryWithdrawalsResponseAminoMsg): QueryWithdrawalsResponse;
    fromProtoMsg(message: QueryWithdrawalsResponseProtoMsg): QueryWithdrawalsResponse;
    toProto(message: QueryWithdrawalsResponse): Uint8Array;
    toProtoMsg(message: QueryWithdrawalsResponse): QueryWithdrawalsResponseProtoMsg;
};
export declare const QueryPoolWithdrawalRequest: {
    encode(message: QueryPoolWithdrawalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolWithdrawalRequest;
    fromPartial(object: DeepPartial<QueryPoolWithdrawalRequest>): QueryPoolWithdrawalRequest;
    fromAmino(object: QueryPoolWithdrawalRequestAmino): QueryPoolWithdrawalRequest;
    toAmino(message: QueryPoolWithdrawalRequest): QueryPoolWithdrawalRequestAmino;
    fromAminoMsg(object: QueryPoolWithdrawalRequestAminoMsg): QueryPoolWithdrawalRequest;
    fromProtoMsg(message: QueryPoolWithdrawalRequestProtoMsg): QueryPoolWithdrawalRequest;
    toProto(message: QueryPoolWithdrawalRequest): Uint8Array;
    toProtoMsg(message: QueryPoolWithdrawalRequest): QueryPoolWithdrawalRequestProtoMsg;
};
export declare const QueryWithdrawalsRequest: {
    encode(message: QueryWithdrawalsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalsRequest;
    fromPartial(object: DeepPartial<QueryWithdrawalsRequest>): QueryWithdrawalsRequest;
    fromAmino(object: QueryWithdrawalsRequestAmino): QueryWithdrawalsRequest;
    toAmino(message: QueryWithdrawalsRequest): QueryWithdrawalsRequestAmino;
    fromAminoMsg(object: QueryWithdrawalsRequestAminoMsg): QueryWithdrawalsRequest;
    fromProtoMsg(message: QueryWithdrawalsRequestProtoMsg): QueryWithdrawalsRequest;
    toProto(message: QueryWithdrawalsRequest): Uint8Array;
    toProtoMsg(message: QueryWithdrawalsRequest): QueryWithdrawalsRequestProtoMsg;
};
export declare const QueryPoolWithdrawalsRequest: {
    encode(message: QueryPoolWithdrawalsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolWithdrawalsRequest;
    fromPartial(object: DeepPartial<QueryPoolWithdrawalsRequest>): QueryPoolWithdrawalsRequest;
    fromAmino(object: QueryPoolWithdrawalsRequestAmino): QueryPoolWithdrawalsRequest;
    toAmino(message: QueryPoolWithdrawalsRequest): QueryPoolWithdrawalsRequestAmino;
    fromAminoMsg(object: QueryPoolWithdrawalsRequestAminoMsg): QueryPoolWithdrawalsRequest;
    fromProtoMsg(message: QueryPoolWithdrawalsRequestProtoMsg): QueryPoolWithdrawalsRequest;
    toProto(message: QueryPoolWithdrawalsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolWithdrawalsRequest): QueryPoolWithdrawalsRequestProtoMsg;
};
export declare const QueryAccountWithdrawalsRequest: {
    encode(message: QueryAccountWithdrawalsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountWithdrawalsRequest;
    fromPartial(object: DeepPartial<QueryAccountWithdrawalsRequest>): QueryAccountWithdrawalsRequest;
    fromAmino(object: QueryAccountWithdrawalsRequestAmino): QueryAccountWithdrawalsRequest;
    toAmino(message: QueryAccountWithdrawalsRequest): QueryAccountWithdrawalsRequestAmino;
    fromAminoMsg(object: QueryAccountWithdrawalsRequestAminoMsg): QueryAccountWithdrawalsRequest;
    fromProtoMsg(message: QueryAccountWithdrawalsRequestProtoMsg): QueryAccountWithdrawalsRequest;
    toProto(message: QueryAccountWithdrawalsRequest): Uint8Array;
    toProtoMsg(message: QueryAccountWithdrawalsRequest): QueryAccountWithdrawalsRequestProtoMsg;
};
export declare const QueryAccountPoolWithdrawalsRequest: {
    encode(message: QueryAccountPoolWithdrawalsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPoolWithdrawalsRequest;
    fromPartial(object: DeepPartial<QueryAccountPoolWithdrawalsRequest>): QueryAccountPoolWithdrawalsRequest;
    fromAmino(object: QueryAccountPoolWithdrawalsRequestAmino): QueryAccountPoolWithdrawalsRequest;
    toAmino(message: QueryAccountPoolWithdrawalsRequest): QueryAccountPoolWithdrawalsRequestAmino;
    fromAminoMsg(object: QueryAccountPoolWithdrawalsRequestAminoMsg): QueryAccountPoolWithdrawalsRequest;
    fromProtoMsg(message: QueryAccountPoolWithdrawalsRequestProtoMsg): QueryAccountPoolWithdrawalsRequest;
    toProto(message: QueryAccountPoolWithdrawalsRequest): Uint8Array;
    toProtoMsg(message: QueryAccountPoolWithdrawalsRequest): QueryAccountPoolWithdrawalsRequestProtoMsg;
};
