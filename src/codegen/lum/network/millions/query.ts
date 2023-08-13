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
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lum.network.millions.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
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
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    return {
      pool: object?.pool ? Pool.fromAmino(object.pool) : undefined
    };
  },
  toAmino(message: QueryPoolResponse): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse {
    return QueryPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryPoolsResponse = {
  encode(message: QueryPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Pool.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.decode(message.value);
  },
  toProto(message: QueryPoolsResponse): Uint8Array {
    return QueryPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPoolsResponse",
      value: QueryPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    poolId: Long.UZERO
  };
}
export const QueryPoolRequest = {
  encode(message: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest {
    return {
      poolId: Long.fromString(object.pool_id)
    };
  },
  toAmino(message: QueryPoolRequest): QueryPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest {
    return QueryPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest {
    return QueryPoolRequest.decode(message.value);
  },
  toProto(message: QueryPoolRequest): Uint8Array {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryPoolsRequest = {
  encode(message: QueryPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.decode(message.value);
  },
  toProto(message: QueryPoolsRequest): Uint8Array {
    return QueryPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPoolsRequest",
      value: QueryPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositResponse(): QueryDepositResponse {
  return {
    deposit: Deposit.fromPartial({})
  };
}
export const QueryDepositResponse = {
  encode(message: QueryDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDepositResponse>): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositResponseAmino): QueryDepositResponse {
    return {
      deposit: object?.deposit ? Deposit.fromAmino(object.deposit) : undefined
    };
  },
  toAmino(message: QueryDepositResponse): QueryDepositResponseAmino {
    const obj: any = {};
    obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositResponseAminoMsg): QueryDepositResponse {
    return QueryDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositResponseProtoMsg): QueryDepositResponse {
    return QueryDepositResponse.decode(message.value);
  },
  toProto(message: QueryDepositResponse): Uint8Array {
    return QueryDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositResponse): QueryDepositResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryDepositResponse",
      value: QueryDepositResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDepositsResponse = {
  encode(message: QueryDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.decode(message.value);
  },
  toProto(message: QueryDepositsResponse): Uint8Array {
    return QueryDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryDepositsResponse",
      value: QueryDepositsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDepositsRequest = {
  encode(message: QueryDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.decode(message.value);
  },
  toProto(message: QueryDepositsRequest): Uint8Array {
    return QueryDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryDepositsRequest",
      value: QueryDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolDepositRequest(): QueryPoolDepositRequest {
  return {
    poolId: Long.UZERO,
    depositId: Long.UZERO
  };
}
export const QueryPoolDepositRequest = {
  encode(message: QueryPoolDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.depositId.isZero()) {
      writer.uint32(16).uint64(message.depositId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.depositId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolDepositRequest>): QueryPoolDepositRequest {
    const message = createBaseQueryPoolDepositRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryPoolDepositRequestAmino): QueryPoolDepositRequest {
    return {
      poolId: Long.fromString(object.pool_id),
      depositId: Long.fromString(object.deposit_id)
    };
  },
  toAmino(message: QueryPoolDepositRequest): QueryPoolDepositRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolDepositRequestAminoMsg): QueryPoolDepositRequest {
    return QueryPoolDepositRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolDepositRequestProtoMsg): QueryPoolDepositRequest {
    return QueryPoolDepositRequest.decode(message.value);
  },
  toProto(message: QueryPoolDepositRequest): Uint8Array {
    return QueryPoolDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolDepositRequest): QueryPoolDepositRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPoolDepositRequest",
      value: QueryPoolDepositRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolDepositsRequest(): QueryPoolDepositsRequest {
  return {
    poolId: Long.UZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryPoolDepositsRequest = {
  encode(message: QueryPoolDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolDepositsRequest>): QueryPoolDepositsRequest {
    const message = createBaseQueryPoolDepositsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolDepositsRequestAmino): QueryPoolDepositsRequest {
    return {
      poolId: Long.fromString(object.pool_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPoolDepositsRequest): QueryPoolDepositsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolDepositsRequestAminoMsg): QueryPoolDepositsRequest {
    return QueryPoolDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolDepositsRequestProtoMsg): QueryPoolDepositsRequest {
    return QueryPoolDepositsRequest.decode(message.value);
  },
  toProto(message: QueryPoolDepositsRequest): Uint8Array {
    return QueryPoolDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolDepositsRequest): QueryPoolDepositsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPoolDepositsRequest",
      value: QueryPoolDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountDepositsRequest(): QueryAccountDepositsRequest {
  return {
    depositorAddress: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAccountDepositsRequest = {
  encode(message: QueryAccountDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositorAddress !== "") {
      writer.uint32(10).string(message.depositorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountDepositsRequest>): QueryAccountDepositsRequest {
    const message = createBaseQueryAccountDepositsRequest();
    message.depositorAddress = object.depositorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountDepositsRequestAmino): QueryAccountDepositsRequest {
    return {
      depositorAddress: object.depositor_address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAccountDepositsRequest): QueryAccountDepositsRequestAmino {
    const obj: any = {};
    obj.depositor_address = message.depositorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountDepositsRequestAminoMsg): QueryAccountDepositsRequest {
    return QueryAccountDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountDepositsRequestProtoMsg): QueryAccountDepositsRequest {
    return QueryAccountDepositsRequest.decode(message.value);
  },
  toProto(message: QueryAccountDepositsRequest): Uint8Array {
    return QueryAccountDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountDepositsRequest): QueryAccountDepositsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryAccountDepositsRequest",
      value: QueryAccountDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountPoolDepositsRequest(): QueryAccountPoolDepositsRequest {
  return {
    depositorAddress: "",
    poolId: Long.UZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAccountPoolDepositsRequest = {
  encode(message: QueryAccountPoolDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositorAddress !== "") {
      writer.uint32(10).string(message.depositorAddress);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPoolDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountPoolDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositorAddress = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
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
  fromPartial(object: DeepPartial<QueryAccountPoolDepositsRequest>): QueryAccountPoolDepositsRequest {
    const message = createBaseQueryAccountPoolDepositsRequest();
    message.depositorAddress = object.depositorAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountPoolDepositsRequestAmino): QueryAccountPoolDepositsRequest {
    return {
      depositorAddress: object.depositor_address,
      poolId: Long.fromString(object.pool_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAccountPoolDepositsRequest): QueryAccountPoolDepositsRequestAmino {
    const obj: any = {};
    obj.depositor_address = message.depositorAddress;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountPoolDepositsRequestAminoMsg): QueryAccountPoolDepositsRequest {
    return QueryAccountPoolDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountPoolDepositsRequestProtoMsg): QueryAccountPoolDepositsRequest {
    return QueryAccountPoolDepositsRequest.decode(message.value);
  },
  toProto(message: QueryAccountPoolDepositsRequest): Uint8Array {
    return QueryAccountPoolDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountPoolDepositsRequest): QueryAccountPoolDepositsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryAccountPoolDepositsRequest",
      value: QueryAccountPoolDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDrawResponse(): QueryDrawResponse {
  return {
    draw: Draw.fromPartial({})
  };
}
export const QueryDrawResponse = {
  encode(message: QueryDrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.draw !== undefined) {
      Draw.encode(message.draw, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDrawResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.draw = Draw.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDrawResponse>): QueryDrawResponse {
    const message = createBaseQueryDrawResponse();
    message.draw = object.draw !== undefined && object.draw !== null ? Draw.fromPartial(object.draw) : undefined;
    return message;
  },
  fromAmino(object: QueryDrawResponseAmino): QueryDrawResponse {
    return {
      draw: object?.draw ? Draw.fromAmino(object.draw) : undefined
    };
  },
  toAmino(message: QueryDrawResponse): QueryDrawResponseAmino {
    const obj: any = {};
    obj.draw = message.draw ? Draw.toAmino(message.draw) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDrawResponseAminoMsg): QueryDrawResponse {
    return QueryDrawResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDrawResponseProtoMsg): QueryDrawResponse {
    return QueryDrawResponse.decode(message.value);
  },
  toProto(message: QueryDrawResponse): Uint8Array {
    return QueryDrawResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDrawResponse): QueryDrawResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryDrawResponse",
      value: QueryDrawResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDrawsResponse(): QueryDrawsResponse {
  return {
    draws: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDrawsResponse = {
  encode(message: QueryDrawsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.draws) {
      Draw.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDrawsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDrawsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.draws.push(Draw.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryDrawsResponse>): QueryDrawsResponse {
    const message = createBaseQueryDrawsResponse();
    message.draws = object.draws?.map(e => Draw.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDrawsResponseAmino): QueryDrawsResponse {
    return {
      draws: Array.isArray(object?.draws) ? object.draws.map((e: any) => Draw.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDrawsResponse): QueryDrawsResponseAmino {
    const obj: any = {};
    if (message.draws) {
      obj.draws = message.draws.map(e => e ? Draw.toAmino(e) : undefined);
    } else {
      obj.draws = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDrawsResponseAminoMsg): QueryDrawsResponse {
    return QueryDrawsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDrawsResponseProtoMsg): QueryDrawsResponse {
    return QueryDrawsResponse.decode(message.value);
  },
  toProto(message: QueryDrawsResponse): Uint8Array {
    return QueryDrawsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDrawsResponse): QueryDrawsResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryDrawsResponse",
      value: QueryDrawsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDrawsRequest(): QueryDrawsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDrawsRequest = {
  encode(message: QueryDrawsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDrawsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDrawsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDrawsRequest>): QueryDrawsRequest {
    const message = createBaseQueryDrawsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDrawsRequestAmino): QueryDrawsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDrawsRequest): QueryDrawsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDrawsRequestAminoMsg): QueryDrawsRequest {
    return QueryDrawsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDrawsRequestProtoMsg): QueryDrawsRequest {
    return QueryDrawsRequest.decode(message.value);
  },
  toProto(message: QueryDrawsRequest): Uint8Array {
    return QueryDrawsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDrawsRequest): QueryDrawsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryDrawsRequest",
      value: QueryDrawsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolDrawsRequest(): QueryPoolDrawsRequest {
  return {
    poolId: Long.UZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryPoolDrawsRequest = {
  encode(message: QueryPoolDrawsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDrawsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDrawsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolDrawsRequest>): QueryPoolDrawsRequest {
    const message = createBaseQueryPoolDrawsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolDrawsRequestAmino): QueryPoolDrawsRequest {
    return {
      poolId: Long.fromString(object.pool_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPoolDrawsRequest): QueryPoolDrawsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolDrawsRequestAminoMsg): QueryPoolDrawsRequest {
    return QueryPoolDrawsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolDrawsRequestProtoMsg): QueryPoolDrawsRequest {
    return QueryPoolDrawsRequest.decode(message.value);
  },
  toProto(message: QueryPoolDrawsRequest): Uint8Array {
    return QueryPoolDrawsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolDrawsRequest): QueryPoolDrawsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPoolDrawsRequest",
      value: QueryPoolDrawsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolDrawRequest(): QueryPoolDrawRequest {
  return {
    poolId: Long.UZERO,
    drawId: Long.UZERO
  };
}
export const QueryPoolDrawRequest = {
  encode(message: QueryPoolDrawRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.drawId.isZero()) {
      writer.uint32(16).uint64(message.drawId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDrawRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDrawRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.drawId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolDrawRequest>): QueryPoolDrawRequest {
    const message = createBaseQueryPoolDrawRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryPoolDrawRequestAmino): QueryPoolDrawRequest {
    return {
      poolId: Long.fromString(object.pool_id),
      drawId: Long.fromString(object.draw_id)
    };
  },
  toAmino(message: QueryPoolDrawRequest): QueryPoolDrawRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolDrawRequestAminoMsg): QueryPoolDrawRequest {
    return QueryPoolDrawRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolDrawRequestProtoMsg): QueryPoolDrawRequest {
    return QueryPoolDrawRequest.decode(message.value);
  },
  toProto(message: QueryPoolDrawRequest): Uint8Array {
    return QueryPoolDrawRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolDrawRequest): QueryPoolDrawRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPoolDrawRequest",
      value: QueryPoolDrawRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPrizeResponse(): QueryPrizeResponse {
  return {
    prize: Prize.fromPartial({})
  };
}
export const QueryPrizeResponse = {
  encode(message: QueryPrizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prize !== undefined) {
      Prize.encode(message.prize, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrizeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPrizeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prize = Prize.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPrizeResponse>): QueryPrizeResponse {
    const message = createBaseQueryPrizeResponse();
    message.prize = object.prize !== undefined && object.prize !== null ? Prize.fromPartial(object.prize) : undefined;
    return message;
  },
  fromAmino(object: QueryPrizeResponseAmino): QueryPrizeResponse {
    return {
      prize: object?.prize ? Prize.fromAmino(object.prize) : undefined
    };
  },
  toAmino(message: QueryPrizeResponse): QueryPrizeResponseAmino {
    const obj: any = {};
    obj.prize = message.prize ? Prize.toAmino(message.prize) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPrizeResponseAminoMsg): QueryPrizeResponse {
    return QueryPrizeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPrizeResponseProtoMsg): QueryPrizeResponse {
    return QueryPrizeResponse.decode(message.value);
  },
  toProto(message: QueryPrizeResponse): Uint8Array {
    return QueryPrizeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPrizeResponse): QueryPrizeResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPrizeResponse",
      value: QueryPrizeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPrizesResponse(): QueryPrizesResponse {
  return {
    prizes: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryPrizesResponse = {
  encode(message: QueryPrizesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.prizes) {
      Prize.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrizesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPrizesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prizes.push(Prize.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryPrizesResponse>): QueryPrizesResponse {
    const message = createBaseQueryPrizesResponse();
    message.prizes = object.prizes?.map(e => Prize.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPrizesResponseAmino): QueryPrizesResponse {
    return {
      prizes: Array.isArray(object?.prizes) ? object.prizes.map((e: any) => Prize.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPrizesResponse): QueryPrizesResponseAmino {
    const obj: any = {};
    if (message.prizes) {
      obj.prizes = message.prizes.map(e => e ? Prize.toAmino(e) : undefined);
    } else {
      obj.prizes = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPrizesResponseAminoMsg): QueryPrizesResponse {
    return QueryPrizesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPrizesResponseProtoMsg): QueryPrizesResponse {
    return QueryPrizesResponse.decode(message.value);
  },
  toProto(message: QueryPrizesResponse): Uint8Array {
    return QueryPrizesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPrizesResponse): QueryPrizesResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPrizesResponse",
      value: QueryPrizesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolDrawPrizeRequest(): QueryPoolDrawPrizeRequest {
  return {
    poolId: Long.UZERO,
    drawId: Long.UZERO,
    prizeId: Long.UZERO
  };
}
export const QueryPoolDrawPrizeRequest = {
  encode(message: QueryPoolDrawPrizeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.drawId.isZero()) {
      writer.uint32(16).uint64(message.drawId);
    }
    if (!message.prizeId.isZero()) {
      writer.uint32(24).uint64(message.prizeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDrawPrizeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDrawPrizeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.drawId = (reader.uint64() as Long);
          break;
        case 3:
          message.prizeId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolDrawPrizeRequest>): QueryPoolDrawPrizeRequest {
    const message = createBaseQueryPoolDrawPrizeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
    message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? Long.fromValue(object.prizeId) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryPoolDrawPrizeRequestAmino): QueryPoolDrawPrizeRequest {
    return {
      poolId: Long.fromString(object.pool_id),
      drawId: Long.fromString(object.draw_id),
      prizeId: Long.fromString(object.prize_id)
    };
  },
  toAmino(message: QueryPoolDrawPrizeRequest): QueryPoolDrawPrizeRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
    obj.prize_id = message.prizeId ? message.prizeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolDrawPrizeRequestAminoMsg): QueryPoolDrawPrizeRequest {
    return QueryPoolDrawPrizeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolDrawPrizeRequestProtoMsg): QueryPoolDrawPrizeRequest {
    return QueryPoolDrawPrizeRequest.decode(message.value);
  },
  toProto(message: QueryPoolDrawPrizeRequest): Uint8Array {
    return QueryPoolDrawPrizeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolDrawPrizeRequest): QueryPoolDrawPrizeRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPoolDrawPrizeRequest",
      value: QueryPoolDrawPrizeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPrizesRequest(): QueryPrizesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryPrizesRequest = {
  encode(message: QueryPrizesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrizesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPrizesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPrizesRequest>): QueryPrizesRequest {
    const message = createBaseQueryPrizesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPrizesRequestAmino): QueryPrizesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPrizesRequest): QueryPrizesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPrizesRequestAminoMsg): QueryPrizesRequest {
    return QueryPrizesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPrizesRequestProtoMsg): QueryPrizesRequest {
    return QueryPrizesRequest.decode(message.value);
  },
  toProto(message: QueryPrizesRequest): Uint8Array {
    return QueryPrizesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPrizesRequest): QueryPrizesRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPrizesRequest",
      value: QueryPrizesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolPrizesRequest(): QueryPoolPrizesRequest {
  return {
    poolId: Long.UZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryPoolPrizesRequest = {
  encode(message: QueryPoolPrizesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolPrizesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolPrizesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolPrizesRequest>): QueryPoolPrizesRequest {
    const message = createBaseQueryPoolPrizesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolPrizesRequestAmino): QueryPoolPrizesRequest {
    return {
      poolId: Long.fromString(object.pool_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPoolPrizesRequest): QueryPoolPrizesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolPrizesRequestAminoMsg): QueryPoolPrizesRequest {
    return QueryPoolPrizesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolPrizesRequestProtoMsg): QueryPoolPrizesRequest {
    return QueryPoolPrizesRequest.decode(message.value);
  },
  toProto(message: QueryPoolPrizesRequest): Uint8Array {
    return QueryPoolPrizesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolPrizesRequest): QueryPoolPrizesRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPoolPrizesRequest",
      value: QueryPoolPrizesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolDrawPrizesRequest(): QueryPoolDrawPrizesRequest {
  return {
    poolId: Long.UZERO,
    drawId: Long.UZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryPoolDrawPrizesRequest = {
  encode(message: QueryPoolDrawPrizesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.drawId.isZero()) {
      writer.uint32(16).uint64(message.drawId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDrawPrizesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDrawPrizesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.drawId = (reader.uint64() as Long);
          break;
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
  fromPartial(object: DeepPartial<QueryPoolDrawPrizesRequest>): QueryPoolDrawPrizesRequest {
    const message = createBaseQueryPoolDrawPrizesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolDrawPrizesRequestAmino): QueryPoolDrawPrizesRequest {
    return {
      poolId: Long.fromString(object.pool_id),
      drawId: Long.fromString(object.draw_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPoolDrawPrizesRequest): QueryPoolDrawPrizesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolDrawPrizesRequestAminoMsg): QueryPoolDrawPrizesRequest {
    return QueryPoolDrawPrizesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolDrawPrizesRequestProtoMsg): QueryPoolDrawPrizesRequest {
    return QueryPoolDrawPrizesRequest.decode(message.value);
  },
  toProto(message: QueryPoolDrawPrizesRequest): Uint8Array {
    return QueryPoolDrawPrizesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolDrawPrizesRequest): QueryPoolDrawPrizesRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPoolDrawPrizesRequest",
      value: QueryPoolDrawPrizesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountPrizesRequest(): QueryAccountPrizesRequest {
  return {
    winnerAddress: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAccountPrizesRequest = {
  encode(message: QueryAccountPrizesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.winnerAddress !== "") {
      writer.uint32(10).string(message.winnerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPrizesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountPrizesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.winnerAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountPrizesRequest>): QueryAccountPrizesRequest {
    const message = createBaseQueryAccountPrizesRequest();
    message.winnerAddress = object.winnerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountPrizesRequestAmino): QueryAccountPrizesRequest {
    return {
      winnerAddress: object.winner_address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAccountPrizesRequest): QueryAccountPrizesRequestAmino {
    const obj: any = {};
    obj.winner_address = message.winnerAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountPrizesRequestAminoMsg): QueryAccountPrizesRequest {
    return QueryAccountPrizesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountPrizesRequestProtoMsg): QueryAccountPrizesRequest {
    return QueryAccountPrizesRequest.decode(message.value);
  },
  toProto(message: QueryAccountPrizesRequest): Uint8Array {
    return QueryAccountPrizesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountPrizesRequest): QueryAccountPrizesRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryAccountPrizesRequest",
      value: QueryAccountPrizesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountPoolPrizesRequest(): QueryAccountPoolPrizesRequest {
  return {
    winnerAddress: "",
    poolId: Long.UZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAccountPoolPrizesRequest = {
  encode(message: QueryAccountPoolPrizesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.winnerAddress !== "") {
      writer.uint32(10).string(message.winnerAddress);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPoolPrizesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountPoolPrizesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.winnerAddress = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
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
  fromPartial(object: DeepPartial<QueryAccountPoolPrizesRequest>): QueryAccountPoolPrizesRequest {
    const message = createBaseQueryAccountPoolPrizesRequest();
    message.winnerAddress = object.winnerAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountPoolPrizesRequestAmino): QueryAccountPoolPrizesRequest {
    return {
      winnerAddress: object.winner_address,
      poolId: Long.fromString(object.pool_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAccountPoolPrizesRequest): QueryAccountPoolPrizesRequestAmino {
    const obj: any = {};
    obj.winner_address = message.winnerAddress;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountPoolPrizesRequestAminoMsg): QueryAccountPoolPrizesRequest {
    return QueryAccountPoolPrizesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountPoolPrizesRequestProtoMsg): QueryAccountPoolPrizesRequest {
    return QueryAccountPoolPrizesRequest.decode(message.value);
  },
  toProto(message: QueryAccountPoolPrizesRequest): Uint8Array {
    return QueryAccountPoolPrizesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountPoolPrizesRequest): QueryAccountPoolPrizesRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryAccountPoolPrizesRequest",
      value: QueryAccountPoolPrizesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountPoolDrawPrizesRequest(): QueryAccountPoolDrawPrizesRequest {
  return {
    winnerAddress: "",
    poolId: Long.UZERO,
    drawId: Long.UZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAccountPoolDrawPrizesRequest = {
  encode(message: QueryAccountPoolDrawPrizesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.winnerAddress !== "") {
      writer.uint32(10).string(message.winnerAddress);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (!message.drawId.isZero()) {
      writer.uint32(24).uint64(message.drawId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPoolDrawPrizesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountPoolDrawPrizesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.winnerAddress = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.drawId = (reader.uint64() as Long);
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountPoolDrawPrizesRequest>): QueryAccountPoolDrawPrizesRequest {
    const message = createBaseQueryAccountPoolDrawPrizesRequest();
    message.winnerAddress = object.winnerAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountPoolDrawPrizesRequestAmino): QueryAccountPoolDrawPrizesRequest {
    return {
      winnerAddress: object.winner_address,
      poolId: Long.fromString(object.pool_id),
      drawId: Long.fromString(object.draw_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAccountPoolDrawPrizesRequest): QueryAccountPoolDrawPrizesRequestAmino {
    const obj: any = {};
    obj.winner_address = message.winnerAddress;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountPoolDrawPrizesRequestAminoMsg): QueryAccountPoolDrawPrizesRequest {
    return QueryAccountPoolDrawPrizesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountPoolDrawPrizesRequestProtoMsg): QueryAccountPoolDrawPrizesRequest {
    return QueryAccountPoolDrawPrizesRequest.decode(message.value);
  },
  toProto(message: QueryAccountPoolDrawPrizesRequest): Uint8Array {
    return QueryAccountPoolDrawPrizesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountPoolDrawPrizesRequest): QueryAccountPoolDrawPrizesRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryAccountPoolDrawPrizesRequest",
      value: QueryAccountPoolDrawPrizesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWithdrawalResponse(): QueryWithdrawalResponse {
  return {
    withdrawal: Withdrawal.fromPartial({})
  };
}
export const QueryWithdrawalResponse = {
  encode(message: QueryWithdrawalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawal !== undefined) {
      Withdrawal.encode(message.withdrawal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawal = Withdrawal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryWithdrawalResponse>): QueryWithdrawalResponse {
    const message = createBaseQueryWithdrawalResponse();
    message.withdrawal = object.withdrawal !== undefined && object.withdrawal !== null ? Withdrawal.fromPartial(object.withdrawal) : undefined;
    return message;
  },
  fromAmino(object: QueryWithdrawalResponseAmino): QueryWithdrawalResponse {
    return {
      withdrawal: object?.withdrawal ? Withdrawal.fromAmino(object.withdrawal) : undefined
    };
  },
  toAmino(message: QueryWithdrawalResponse): QueryWithdrawalResponseAmino {
    const obj: any = {};
    obj.withdrawal = message.withdrawal ? Withdrawal.toAmino(message.withdrawal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWithdrawalResponseAminoMsg): QueryWithdrawalResponse {
    return QueryWithdrawalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWithdrawalResponseProtoMsg): QueryWithdrawalResponse {
    return QueryWithdrawalResponse.decode(message.value);
  },
  toProto(message: QueryWithdrawalResponse): Uint8Array {
    return QueryWithdrawalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWithdrawalResponse): QueryWithdrawalResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryWithdrawalResponse",
      value: QueryWithdrawalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWithdrawalsResponse(): QueryWithdrawalsResponse {
  return {
    withdrawals: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryWithdrawalsResponse = {
  encode(message: QueryWithdrawalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.withdrawals) {
      Withdrawal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawals.push(Withdrawal.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryWithdrawalsResponse>): QueryWithdrawalsResponse {
    const message = createBaseQueryWithdrawalsResponse();
    message.withdrawals = object.withdrawals?.map(e => Withdrawal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryWithdrawalsResponseAmino): QueryWithdrawalsResponse {
    return {
      withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e: any) => Withdrawal.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryWithdrawalsResponse): QueryWithdrawalsResponseAmino {
    const obj: any = {};
    if (message.withdrawals) {
      obj.withdrawals = message.withdrawals.map(e => e ? Withdrawal.toAmino(e) : undefined);
    } else {
      obj.withdrawals = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWithdrawalsResponseAminoMsg): QueryWithdrawalsResponse {
    return QueryWithdrawalsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWithdrawalsResponseProtoMsg): QueryWithdrawalsResponse {
    return QueryWithdrawalsResponse.decode(message.value);
  },
  toProto(message: QueryWithdrawalsResponse): Uint8Array {
    return QueryWithdrawalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWithdrawalsResponse): QueryWithdrawalsResponseProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryWithdrawalsResponse",
      value: QueryWithdrawalsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolWithdrawalRequest(): QueryPoolWithdrawalRequest {
  return {
    poolId: Long.UZERO,
    withdrawalId: Long.UZERO
  };
}
export const QueryPoolWithdrawalRequest = {
  encode(message: QueryPoolWithdrawalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.withdrawalId.isZero()) {
      writer.uint32(16).uint64(message.withdrawalId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolWithdrawalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolWithdrawalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.withdrawalId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolWithdrawalRequest>): QueryPoolWithdrawalRequest {
    const message = createBaseQueryPoolWithdrawalRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryPoolWithdrawalRequestAmino): QueryPoolWithdrawalRequest {
    return {
      poolId: Long.fromString(object.pool_id),
      withdrawalId: Long.fromString(object.withdrawal_id)
    };
  },
  toAmino(message: QueryPoolWithdrawalRequest): QueryPoolWithdrawalRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolWithdrawalRequestAminoMsg): QueryPoolWithdrawalRequest {
    return QueryPoolWithdrawalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolWithdrawalRequestProtoMsg): QueryPoolWithdrawalRequest {
    return QueryPoolWithdrawalRequest.decode(message.value);
  },
  toProto(message: QueryPoolWithdrawalRequest): Uint8Array {
    return QueryPoolWithdrawalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolWithdrawalRequest): QueryPoolWithdrawalRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPoolWithdrawalRequest",
      value: QueryPoolWithdrawalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWithdrawalsRequest(): QueryWithdrawalsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryWithdrawalsRequest = {
  encode(message: QueryWithdrawalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryWithdrawalsRequest>): QueryWithdrawalsRequest {
    const message = createBaseQueryWithdrawalsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryWithdrawalsRequestAmino): QueryWithdrawalsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryWithdrawalsRequest): QueryWithdrawalsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWithdrawalsRequestAminoMsg): QueryWithdrawalsRequest {
    return QueryWithdrawalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWithdrawalsRequestProtoMsg): QueryWithdrawalsRequest {
    return QueryWithdrawalsRequest.decode(message.value);
  },
  toProto(message: QueryWithdrawalsRequest): Uint8Array {
    return QueryWithdrawalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWithdrawalsRequest): QueryWithdrawalsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryWithdrawalsRequest",
      value: QueryWithdrawalsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolWithdrawalsRequest(): QueryPoolWithdrawalsRequest {
  return {
    poolId: Long.UZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryPoolWithdrawalsRequest = {
  encode(message: QueryPoolWithdrawalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolWithdrawalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolWithdrawalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolWithdrawalsRequest>): QueryPoolWithdrawalsRequest {
    const message = createBaseQueryPoolWithdrawalsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolWithdrawalsRequestAmino): QueryPoolWithdrawalsRequest {
    return {
      poolId: Long.fromString(object.pool_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPoolWithdrawalsRequest): QueryPoolWithdrawalsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolWithdrawalsRequestAminoMsg): QueryPoolWithdrawalsRequest {
    return QueryPoolWithdrawalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolWithdrawalsRequestProtoMsg): QueryPoolWithdrawalsRequest {
    return QueryPoolWithdrawalsRequest.decode(message.value);
  },
  toProto(message: QueryPoolWithdrawalsRequest): Uint8Array {
    return QueryPoolWithdrawalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolWithdrawalsRequest): QueryPoolWithdrawalsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryPoolWithdrawalsRequest",
      value: QueryPoolWithdrawalsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountWithdrawalsRequest(): QueryAccountWithdrawalsRequest {
  return {
    depositorAddress: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAccountWithdrawalsRequest = {
  encode(message: QueryAccountWithdrawalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositorAddress !== "") {
      writer.uint32(10).string(message.depositorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountWithdrawalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountWithdrawalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountWithdrawalsRequest>): QueryAccountWithdrawalsRequest {
    const message = createBaseQueryAccountWithdrawalsRequest();
    message.depositorAddress = object.depositorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountWithdrawalsRequestAmino): QueryAccountWithdrawalsRequest {
    return {
      depositorAddress: object.depositor_address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAccountWithdrawalsRequest): QueryAccountWithdrawalsRequestAmino {
    const obj: any = {};
    obj.depositor_address = message.depositorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountWithdrawalsRequestAminoMsg): QueryAccountWithdrawalsRequest {
    return QueryAccountWithdrawalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountWithdrawalsRequestProtoMsg): QueryAccountWithdrawalsRequest {
    return QueryAccountWithdrawalsRequest.decode(message.value);
  },
  toProto(message: QueryAccountWithdrawalsRequest): Uint8Array {
    return QueryAccountWithdrawalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountWithdrawalsRequest): QueryAccountWithdrawalsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryAccountWithdrawalsRequest",
      value: QueryAccountWithdrawalsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountPoolWithdrawalsRequest(): QueryAccountPoolWithdrawalsRequest {
  return {
    depositorAddress: "",
    poolId: Long.UZERO,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAccountPoolWithdrawalsRequest = {
  encode(message: QueryAccountPoolWithdrawalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositorAddress !== "") {
      writer.uint32(10).string(message.depositorAddress);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPoolWithdrawalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountPoolWithdrawalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositorAddress = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
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
  fromPartial(object: DeepPartial<QueryAccountPoolWithdrawalsRequest>): QueryAccountPoolWithdrawalsRequest {
    const message = createBaseQueryAccountPoolWithdrawalsRequest();
    message.depositorAddress = object.depositorAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountPoolWithdrawalsRequestAmino): QueryAccountPoolWithdrawalsRequest {
    return {
      depositorAddress: object.depositor_address,
      poolId: Long.fromString(object.pool_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAccountPoolWithdrawalsRequest): QueryAccountPoolWithdrawalsRequestAmino {
    const obj: any = {};
    obj.depositor_address = message.depositorAddress;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountPoolWithdrawalsRequestAminoMsg): QueryAccountPoolWithdrawalsRequest {
    return QueryAccountPoolWithdrawalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountPoolWithdrawalsRequestProtoMsg): QueryAccountPoolWithdrawalsRequest {
    return QueryAccountPoolWithdrawalsRequest.decode(message.value);
  },
  toProto(message: QueryAccountPoolWithdrawalsRequest): Uint8Array {
    return QueryAccountPoolWithdrawalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountPoolWithdrawalsRequest): QueryAccountPoolWithdrawalsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.millions.QueryAccountPoolWithdrawalsRequest",
      value: QueryAccountPoolWithdrawalsRequest.encode(message).finish()
    };
  }
};