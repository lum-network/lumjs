import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { Deposit, DepositAmino, DepositSDKType } from "./deposit";
import { Draw, DrawAmino, DrawSDKType } from "./draw";
import { Prize, PrizeAmino, PrizeSDKType } from "./prize";
import { Withdrawal, WithdrawalAmino, WithdrawalSDKType } from "./withdrawal";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
  pagination?: PageResponse | undefined;
}
export interface QueryPoolsResponseProtoMsg {
  typeUrl: "/lum.network.millions.QueryPoolsResponse";
  value: Uint8Array;
}
export interface QueryPoolsResponseAmino {
  pools?: PoolAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryPoolsResponseAminoMsg {
  type: "/lum.network.millions.QueryPoolsResponse";
  value: QueryPoolsResponseAmino;
}
export interface QueryPoolsResponseSDKType {
  pools: PoolSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
export interface QueryPoolRequest {
  poolId: bigint;
}
export interface QueryPoolRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryPoolRequest";
  value: Uint8Array;
}
export interface QueryPoolRequestAmino {
  pool_id?: string;
}
export interface QueryPoolRequestAminoMsg {
  type: "/lum.network.millions.QueryPoolRequest";
  value: QueryPoolRequestAmino;
}
export interface QueryPoolRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolsRequest {
  pagination?: PageRequest | undefined;
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
  pagination?: PageRequestSDKType | undefined;
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
  pagination?: PageResponse | undefined;
}
export interface QueryDepositsResponseProtoMsg {
  typeUrl: "/lum.network.millions.QueryDepositsResponse";
  value: Uint8Array;
}
export interface QueryDepositsResponseAmino {
  deposits?: DepositAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryDepositsResponseAminoMsg {
  type: "/lum.network.millions.QueryDepositsResponse";
  value: QueryDepositsResponseAmino;
}
export interface QueryDepositsResponseSDKType {
  deposits: DepositSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
export interface QueryDepositsRequest {
  pagination?: PageRequest | undefined;
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
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryPoolDepositRequest {
  poolId: bigint;
  depositId: bigint;
}
export interface QueryPoolDepositRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryPoolDepositRequest";
  value: Uint8Array;
}
export interface QueryPoolDepositRequestAmino {
  pool_id?: string;
  deposit_id?: string;
}
export interface QueryPoolDepositRequestAminoMsg {
  type: "/lum.network.millions.QueryPoolDepositRequest";
  value: QueryPoolDepositRequestAmino;
}
export interface QueryPoolDepositRequestSDKType {
  pool_id: bigint;
  deposit_id: bigint;
}
export interface QueryPoolDepositsRequest {
  poolId: bigint;
  pagination?: PageRequest | undefined;
}
export interface QueryPoolDepositsRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryPoolDepositsRequest";
  value: Uint8Array;
}
export interface QueryPoolDepositsRequestAmino {
  pool_id?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryPoolDepositsRequestAminoMsg {
  type: "/lum.network.millions.QueryPoolDepositsRequest";
  value: QueryPoolDepositsRequestAmino;
}
export interface QueryPoolDepositsRequestSDKType {
  pool_id: bigint;
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryAccountDepositsRequest {
  depositorAddress: string;
  pagination?: PageRequest | undefined;
}
export interface QueryAccountDepositsRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryAccountDepositsRequest";
  value: Uint8Array;
}
export interface QueryAccountDepositsRequestAmino {
  depositor_address?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountDepositsRequestAminoMsg {
  type: "/lum.network.millions.QueryAccountDepositsRequest";
  value: QueryAccountDepositsRequestAmino;
}
export interface QueryAccountDepositsRequestSDKType {
  depositor_address: string;
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryAccountPoolDepositsRequest {
  depositorAddress: string;
  poolId: bigint;
  pagination?: PageRequest | undefined;
}
export interface QueryAccountPoolDepositsRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryAccountPoolDepositsRequest";
  value: Uint8Array;
}
export interface QueryAccountPoolDepositsRequestAmino {
  depositor_address?: string;
  pool_id?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountPoolDepositsRequestAminoMsg {
  type: "/lum.network.millions.QueryAccountPoolDepositsRequest";
  value: QueryAccountPoolDepositsRequestAmino;
}
export interface QueryAccountPoolDepositsRequestSDKType {
  depositor_address: string;
  pool_id: bigint;
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryDrawResponse {
  draw?: Draw | undefined;
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
  draw?: DrawSDKType | undefined;
}
export interface QueryDrawsResponse {
  draws: Draw[];
  pagination?: PageResponse | undefined;
}
export interface QueryDrawsResponseProtoMsg {
  typeUrl: "/lum.network.millions.QueryDrawsResponse";
  value: Uint8Array;
}
export interface QueryDrawsResponseAmino {
  draws?: DrawAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryDrawsResponseAminoMsg {
  type: "/lum.network.millions.QueryDrawsResponse";
  value: QueryDrawsResponseAmino;
}
export interface QueryDrawsResponseSDKType {
  draws: DrawSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
export interface QueryDrawsRequest {
  pagination?: PageRequest | undefined;
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
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryPoolDrawsRequest {
  poolId: bigint;
  pagination?: PageRequest | undefined;
}
export interface QueryPoolDrawsRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryPoolDrawsRequest";
  value: Uint8Array;
}
export interface QueryPoolDrawsRequestAmino {
  pool_id?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryPoolDrawsRequestAminoMsg {
  type: "/lum.network.millions.QueryPoolDrawsRequest";
  value: QueryPoolDrawsRequestAmino;
}
export interface QueryPoolDrawsRequestSDKType {
  pool_id: bigint;
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryPoolDrawRequest {
  poolId: bigint;
  drawId: bigint;
}
export interface QueryPoolDrawRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryPoolDrawRequest";
  value: Uint8Array;
}
export interface QueryPoolDrawRequestAmino {
  pool_id?: string;
  draw_id?: string;
}
export interface QueryPoolDrawRequestAminoMsg {
  type: "/lum.network.millions.QueryPoolDrawRequest";
  value: QueryPoolDrawRequestAmino;
}
export interface QueryPoolDrawRequestSDKType {
  pool_id: bigint;
  draw_id: bigint;
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
  pagination?: PageResponse | undefined;
}
export interface QueryPrizesResponseProtoMsg {
  typeUrl: "/lum.network.millions.QueryPrizesResponse";
  value: Uint8Array;
}
export interface QueryPrizesResponseAmino {
  prizes?: PrizeAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryPrizesResponseAminoMsg {
  type: "/lum.network.millions.QueryPrizesResponse";
  value: QueryPrizesResponseAmino;
}
export interface QueryPrizesResponseSDKType {
  prizes: PrizeSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
export interface QueryPoolDrawPrizeRequest {
  poolId: bigint;
  drawId: bigint;
  prizeId: bigint;
}
export interface QueryPoolDrawPrizeRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryPoolDrawPrizeRequest";
  value: Uint8Array;
}
export interface QueryPoolDrawPrizeRequestAmino {
  pool_id?: string;
  draw_id?: string;
  prize_id?: string;
}
export interface QueryPoolDrawPrizeRequestAminoMsg {
  type: "/lum.network.millions.QueryPoolDrawPrizeRequest";
  value: QueryPoolDrawPrizeRequestAmino;
}
export interface QueryPoolDrawPrizeRequestSDKType {
  pool_id: bigint;
  draw_id: bigint;
  prize_id: bigint;
}
export interface QueryPrizesRequest {
  pagination?: PageRequest | undefined;
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
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryPoolPrizesRequest {
  poolId: bigint;
  pagination?: PageRequest | undefined;
}
export interface QueryPoolPrizesRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryPoolPrizesRequest";
  value: Uint8Array;
}
export interface QueryPoolPrizesRequestAmino {
  pool_id?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryPoolPrizesRequestAminoMsg {
  type: "/lum.network.millions.QueryPoolPrizesRequest";
  value: QueryPoolPrizesRequestAmino;
}
export interface QueryPoolPrizesRequestSDKType {
  pool_id: bigint;
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryPoolDrawPrizesRequest {
  poolId: bigint;
  drawId: bigint;
  pagination?: PageRequest | undefined;
}
export interface QueryPoolDrawPrizesRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryPoolDrawPrizesRequest";
  value: Uint8Array;
}
export interface QueryPoolDrawPrizesRequestAmino {
  pool_id?: string;
  draw_id?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryPoolDrawPrizesRequestAminoMsg {
  type: "/lum.network.millions.QueryPoolDrawPrizesRequest";
  value: QueryPoolDrawPrizesRequestAmino;
}
export interface QueryPoolDrawPrizesRequestSDKType {
  pool_id: bigint;
  draw_id: bigint;
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryAccountPrizesRequest {
  winnerAddress: string;
  pagination?: PageRequest | undefined;
}
export interface QueryAccountPrizesRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryAccountPrizesRequest";
  value: Uint8Array;
}
export interface QueryAccountPrizesRequestAmino {
  winner_address?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountPrizesRequestAminoMsg {
  type: "/lum.network.millions.QueryAccountPrizesRequest";
  value: QueryAccountPrizesRequestAmino;
}
export interface QueryAccountPrizesRequestSDKType {
  winner_address: string;
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryAccountPoolPrizesRequest {
  winnerAddress: string;
  poolId: bigint;
  pagination?: PageRequest | undefined;
}
export interface QueryAccountPoolPrizesRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryAccountPoolPrizesRequest";
  value: Uint8Array;
}
export interface QueryAccountPoolPrizesRequestAmino {
  winner_address?: string;
  pool_id?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountPoolPrizesRequestAminoMsg {
  type: "/lum.network.millions.QueryAccountPoolPrizesRequest";
  value: QueryAccountPoolPrizesRequestAmino;
}
export interface QueryAccountPoolPrizesRequestSDKType {
  winner_address: string;
  pool_id: bigint;
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryAccountPoolDrawPrizesRequest {
  winnerAddress: string;
  poolId: bigint;
  drawId: bigint;
  pagination?: PageRequest | undefined;
}
export interface QueryAccountPoolDrawPrizesRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryAccountPoolDrawPrizesRequest";
  value: Uint8Array;
}
export interface QueryAccountPoolDrawPrizesRequestAmino {
  winner_address?: string;
  pool_id?: string;
  draw_id?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountPoolDrawPrizesRequestAminoMsg {
  type: "/lum.network.millions.QueryAccountPoolDrawPrizesRequest";
  value: QueryAccountPoolDrawPrizesRequestAmino;
}
export interface QueryAccountPoolDrawPrizesRequestSDKType {
  winner_address: string;
  pool_id: bigint;
  draw_id: bigint;
  pagination?: PageRequestSDKType | undefined;
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
  pagination?: PageResponse | undefined;
}
export interface QueryWithdrawalsResponseProtoMsg {
  typeUrl: "/lum.network.millions.QueryWithdrawalsResponse";
  value: Uint8Array;
}
export interface QueryWithdrawalsResponseAmino {
  withdrawals?: WithdrawalAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryWithdrawalsResponseAminoMsg {
  type: "/lum.network.millions.QueryWithdrawalsResponse";
  value: QueryWithdrawalsResponseAmino;
}
export interface QueryWithdrawalsResponseSDKType {
  withdrawals: WithdrawalSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
export interface QueryPoolWithdrawalRequest {
  poolId: bigint;
  withdrawalId: bigint;
}
export interface QueryPoolWithdrawalRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryPoolWithdrawalRequest";
  value: Uint8Array;
}
export interface QueryPoolWithdrawalRequestAmino {
  pool_id?: string;
  withdrawal_id?: string;
}
export interface QueryPoolWithdrawalRequestAminoMsg {
  type: "/lum.network.millions.QueryPoolWithdrawalRequest";
  value: QueryPoolWithdrawalRequestAmino;
}
export interface QueryPoolWithdrawalRequestSDKType {
  pool_id: bigint;
  withdrawal_id: bigint;
}
export interface QueryWithdrawalsRequest {
  pagination?: PageRequest | undefined;
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
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryPoolWithdrawalsRequest {
  poolId: bigint;
  pagination?: PageRequest | undefined;
}
export interface QueryPoolWithdrawalsRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryPoolWithdrawalsRequest";
  value: Uint8Array;
}
export interface QueryPoolWithdrawalsRequestAmino {
  pool_id?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryPoolWithdrawalsRequestAminoMsg {
  type: "/lum.network.millions.QueryPoolWithdrawalsRequest";
  value: QueryPoolWithdrawalsRequestAmino;
}
export interface QueryPoolWithdrawalsRequestSDKType {
  pool_id: bigint;
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryAccountWithdrawalsRequest {
  depositorAddress: string;
  pagination?: PageRequest | undefined;
}
export interface QueryAccountWithdrawalsRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryAccountWithdrawalsRequest";
  value: Uint8Array;
}
export interface QueryAccountWithdrawalsRequestAmino {
  depositor_address?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountWithdrawalsRequestAminoMsg {
  type: "/lum.network.millions.QueryAccountWithdrawalsRequest";
  value: QueryAccountWithdrawalsRequestAmino;
}
export interface QueryAccountWithdrawalsRequestSDKType {
  depositor_address: string;
  pagination?: PageRequestSDKType | undefined;
}
export interface QueryAccountPoolWithdrawalsRequest {
  depositorAddress: string;
  poolId: bigint;
  pagination?: PageRequest | undefined;
}
export interface QueryAccountPoolWithdrawalsRequestProtoMsg {
  typeUrl: "/lum.network.millions.QueryAccountPoolWithdrawalsRequest";
  value: Uint8Array;
}
export interface QueryAccountPoolWithdrawalsRequestAmino {
  depositor_address?: string;
  pool_id?: string;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountPoolWithdrawalsRequestAminoMsg {
  type: "/lum.network.millions.QueryAccountPoolWithdrawalsRequest";
  value: QueryAccountPoolWithdrawalsRequestAmino;
}
export interface QueryAccountPoolWithdrawalsRequestSDKType {
  depositor_address: string;
  pool_id: bigint;
  pagination?: PageRequestSDKType | undefined;
}
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lum.network.millions.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
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
  typeUrl: "/lum.network.millions.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
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
  typeUrl: "/lum.network.millions.QueryPoolResponse",
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
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
    pagination: undefined
  };
}
export const QueryPoolsResponse = {
  typeUrl: "/lum.network.millions.QueryPoolsResponse",
  encode(message: QueryPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => Pool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
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
    poolId: BigInt(0)
  };
}
export const QueryPoolRequest = {
  typeUrl: "/lum.network.millions.QueryPoolRequest",
  encode(message: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
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
    pagination: undefined
  };
}
export const QueryPoolsRequest = {
  typeUrl: "/lum.network.millions.QueryPoolsRequest",
  encode(message: QueryPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
  typeUrl: "/lum.network.millions.QueryDepositResponse",
  encode(message: QueryDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryDepositResponse>): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositResponseAmino): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Deposit.fromAmino(object.deposit);
    }
    return message;
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
    pagination: undefined
  };
}
export const QueryDepositsResponse = {
  typeUrl: "/lum.network.millions.QueryDepositsResponse",
  encode(message: QueryDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
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
    pagination: undefined
  };
}
export const QueryDepositsRequest = {
  typeUrl: "/lum.network.millions.QueryDepositsRequest",
  encode(message: QueryDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    poolId: BigInt(0),
    depositId: BigInt(0)
  };
}
export const QueryPoolDepositRequest = {
  typeUrl: "/lum.network.millions.QueryPoolDepositRequest",
  encode(message: QueryPoolDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.depositId !== BigInt(0)) {
      writer.uint32(16).uint64(message.depositId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDepositRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.depositId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolDepositRequest>): QueryPoolDepositRequest {
    const message = createBaseQueryPoolDepositRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.depositId = object.depositId !== undefined && object.depositId !== null ? BigInt(object.depositId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolDepositRequestAmino): QueryPoolDepositRequest {
    const message = createBaseQueryPoolDepositRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.deposit_id !== undefined && object.deposit_id !== null) {
      message.depositId = BigInt(object.deposit_id);
    }
    return message;
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
    poolId: BigInt(0),
    pagination: undefined
  };
}
export const QueryPoolDepositsRequest = {
  typeUrl: "/lum.network.millions.QueryPoolDepositsRequest",
  encode(message: QueryPoolDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
  fromPartial(object: Partial<QueryPoolDepositsRequest>): QueryPoolDepositsRequest {
    const message = createBaseQueryPoolDepositsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolDepositsRequestAmino): QueryPoolDepositsRequest {
    const message = createBaseQueryPoolDepositsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    pagination: undefined
  };
}
export const QueryAccountDepositsRequest = {
  typeUrl: "/lum.network.millions.QueryAccountDepositsRequest",
  encode(message: QueryAccountDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositorAddress !== "") {
      writer.uint32(10).string(message.depositorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAccountDepositsRequest>): QueryAccountDepositsRequest {
    const message = createBaseQueryAccountDepositsRequest();
    message.depositorAddress = object.depositorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountDepositsRequestAmino): QueryAccountDepositsRequest {
    const message = createBaseQueryAccountDepositsRequest();
    if (object.depositor_address !== undefined && object.depositor_address !== null) {
      message.depositorAddress = object.depositor_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    poolId: BigInt(0),
    pagination: undefined
  };
}
export const QueryAccountPoolDepositsRequest = {
  typeUrl: "/lum.network.millions.QueryAccountPoolDepositsRequest",
  encode(message: QueryAccountPoolDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositorAddress !== "") {
      writer.uint32(10).string(message.depositorAddress);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountPoolDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountPoolDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositorAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
  fromPartial(object: Partial<QueryAccountPoolDepositsRequest>): QueryAccountPoolDepositsRequest {
    const message = createBaseQueryAccountPoolDepositsRequest();
    message.depositorAddress = object.depositorAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountPoolDepositsRequestAmino): QueryAccountPoolDepositsRequest {
    const message = createBaseQueryAccountPoolDepositsRequest();
    if (object.depositor_address !== undefined && object.depositor_address !== null) {
      message.depositorAddress = object.depositor_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    draw: undefined
  };
}
export const QueryDrawResponse = {
  typeUrl: "/lum.network.millions.QueryDrawResponse",
  encode(message: QueryDrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.draw !== undefined) {
      Draw.encode(message.draw, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDrawResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryDrawResponse>): QueryDrawResponse {
    const message = createBaseQueryDrawResponse();
    message.draw = object.draw !== undefined && object.draw !== null ? Draw.fromPartial(object.draw) : undefined;
    return message;
  },
  fromAmino(object: QueryDrawResponseAmino): QueryDrawResponse {
    const message = createBaseQueryDrawResponse();
    if (object.draw !== undefined && object.draw !== null) {
      message.draw = Draw.fromAmino(object.draw);
    }
    return message;
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
    pagination: undefined
  };
}
export const QueryDrawsResponse = {
  typeUrl: "/lum.network.millions.QueryDrawsResponse",
  encode(message: QueryDrawsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.draws) {
      Draw.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDrawsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryDrawsResponse>): QueryDrawsResponse {
    const message = createBaseQueryDrawsResponse();
    message.draws = object.draws?.map(e => Draw.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDrawsResponseAmino): QueryDrawsResponse {
    const message = createBaseQueryDrawsResponse();
    message.draws = object.draws?.map(e => Draw.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
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
    pagination: undefined
  };
}
export const QueryDrawsRequest = {
  typeUrl: "/lum.network.millions.QueryDrawsRequest",
  encode(message: QueryDrawsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDrawsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryDrawsRequest>): QueryDrawsRequest {
    const message = createBaseQueryDrawsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDrawsRequestAmino): QueryDrawsRequest {
    const message = createBaseQueryDrawsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    poolId: BigInt(0),
    pagination: undefined
  };
}
export const QueryPoolDrawsRequest = {
  typeUrl: "/lum.network.millions.QueryPoolDrawsRequest",
  encode(message: QueryPoolDrawsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDrawsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDrawsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
  fromPartial(object: Partial<QueryPoolDrawsRequest>): QueryPoolDrawsRequest {
    const message = createBaseQueryPoolDrawsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolDrawsRequestAmino): QueryPoolDrawsRequest {
    const message = createBaseQueryPoolDrawsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    poolId: BigInt(0),
    drawId: BigInt(0)
  };
}
export const QueryPoolDrawRequest = {
  typeUrl: "/lum.network.millions.QueryPoolDrawRequest",
  encode(message: QueryPoolDrawRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.drawId !== BigInt(0)) {
      writer.uint32(16).uint64(message.drawId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDrawRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDrawRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.drawId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolDrawRequest>): QueryPoolDrawRequest {
    const message = createBaseQueryPoolDrawRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.drawId = object.drawId !== undefined && object.drawId !== null ? BigInt(object.drawId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolDrawRequestAmino): QueryPoolDrawRequest {
    const message = createBaseQueryPoolDrawRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.draw_id !== undefined && object.draw_id !== null) {
      message.drawId = BigInt(object.draw_id);
    }
    return message;
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
  typeUrl: "/lum.network.millions.QueryPrizeResponse",
  encode(message: QueryPrizeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.prize !== undefined) {
      Prize.encode(message.prize, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPrizeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryPrizeResponse>): QueryPrizeResponse {
    const message = createBaseQueryPrizeResponse();
    message.prize = object.prize !== undefined && object.prize !== null ? Prize.fromPartial(object.prize) : undefined;
    return message;
  },
  fromAmino(object: QueryPrizeResponseAmino): QueryPrizeResponse {
    const message = createBaseQueryPrizeResponse();
    if (object.prize !== undefined && object.prize !== null) {
      message.prize = Prize.fromAmino(object.prize);
    }
    return message;
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
    pagination: undefined
  };
}
export const QueryPrizesResponse = {
  typeUrl: "/lum.network.millions.QueryPrizesResponse",
  encode(message: QueryPrizesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prizes) {
      Prize.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPrizesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryPrizesResponse>): QueryPrizesResponse {
    const message = createBaseQueryPrizesResponse();
    message.prizes = object.prizes?.map(e => Prize.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPrizesResponseAmino): QueryPrizesResponse {
    const message = createBaseQueryPrizesResponse();
    message.prizes = object.prizes?.map(e => Prize.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
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
    poolId: BigInt(0),
    drawId: BigInt(0),
    prizeId: BigInt(0)
  };
}
export const QueryPoolDrawPrizeRequest = {
  typeUrl: "/lum.network.millions.QueryPoolDrawPrizeRequest",
  encode(message: QueryPoolDrawPrizeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.drawId !== BigInt(0)) {
      writer.uint32(16).uint64(message.drawId);
    }
    if (message.prizeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.prizeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDrawPrizeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDrawPrizeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.drawId = reader.uint64();
          break;
        case 3:
          message.prizeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolDrawPrizeRequest>): QueryPoolDrawPrizeRequest {
    const message = createBaseQueryPoolDrawPrizeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.drawId = object.drawId !== undefined && object.drawId !== null ? BigInt(object.drawId.toString()) : BigInt(0);
    message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? BigInt(object.prizeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolDrawPrizeRequestAmino): QueryPoolDrawPrizeRequest {
    const message = createBaseQueryPoolDrawPrizeRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.draw_id !== undefined && object.draw_id !== null) {
      message.drawId = BigInt(object.draw_id);
    }
    if (object.prize_id !== undefined && object.prize_id !== null) {
      message.prizeId = BigInt(object.prize_id);
    }
    return message;
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
    pagination: undefined
  };
}
export const QueryPrizesRequest = {
  typeUrl: "/lum.network.millions.QueryPrizesRequest",
  encode(message: QueryPrizesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPrizesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryPrizesRequest>): QueryPrizesRequest {
    const message = createBaseQueryPrizesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPrizesRequestAmino): QueryPrizesRequest {
    const message = createBaseQueryPrizesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    poolId: BigInt(0),
    pagination: undefined
  };
}
export const QueryPoolPrizesRequest = {
  typeUrl: "/lum.network.millions.QueryPoolPrizesRequest",
  encode(message: QueryPoolPrizesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolPrizesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolPrizesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
  fromPartial(object: Partial<QueryPoolPrizesRequest>): QueryPoolPrizesRequest {
    const message = createBaseQueryPoolPrizesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolPrizesRequestAmino): QueryPoolPrizesRequest {
    const message = createBaseQueryPoolPrizesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    poolId: BigInt(0),
    drawId: BigInt(0),
    pagination: undefined
  };
}
export const QueryPoolDrawPrizesRequest = {
  typeUrl: "/lum.network.millions.QueryPoolDrawPrizesRequest",
  encode(message: QueryPoolDrawPrizesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.drawId !== BigInt(0)) {
      writer.uint32(16).uint64(message.drawId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDrawPrizesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDrawPrizesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.drawId = reader.uint64();
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
  fromPartial(object: Partial<QueryPoolDrawPrizesRequest>): QueryPoolDrawPrizesRequest {
    const message = createBaseQueryPoolDrawPrizesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.drawId = object.drawId !== undefined && object.drawId !== null ? BigInt(object.drawId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolDrawPrizesRequestAmino): QueryPoolDrawPrizesRequest {
    const message = createBaseQueryPoolDrawPrizesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.draw_id !== undefined && object.draw_id !== null) {
      message.drawId = BigInt(object.draw_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    pagination: undefined
  };
}
export const QueryAccountPrizesRequest = {
  typeUrl: "/lum.network.millions.QueryAccountPrizesRequest",
  encode(message: QueryAccountPrizesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.winnerAddress !== "") {
      writer.uint32(10).string(message.winnerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountPrizesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAccountPrizesRequest>): QueryAccountPrizesRequest {
    const message = createBaseQueryAccountPrizesRequest();
    message.winnerAddress = object.winnerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountPrizesRequestAmino): QueryAccountPrizesRequest {
    const message = createBaseQueryAccountPrizesRequest();
    if (object.winner_address !== undefined && object.winner_address !== null) {
      message.winnerAddress = object.winner_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    poolId: BigInt(0),
    pagination: undefined
  };
}
export const QueryAccountPoolPrizesRequest = {
  typeUrl: "/lum.network.millions.QueryAccountPoolPrizesRequest",
  encode(message: QueryAccountPoolPrizesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.winnerAddress !== "") {
      writer.uint32(10).string(message.winnerAddress);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountPoolPrizesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountPoolPrizesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.winnerAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
  fromPartial(object: Partial<QueryAccountPoolPrizesRequest>): QueryAccountPoolPrizesRequest {
    const message = createBaseQueryAccountPoolPrizesRequest();
    message.winnerAddress = object.winnerAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountPoolPrizesRequestAmino): QueryAccountPoolPrizesRequest {
    const message = createBaseQueryAccountPoolPrizesRequest();
    if (object.winner_address !== undefined && object.winner_address !== null) {
      message.winnerAddress = object.winner_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    poolId: BigInt(0),
    drawId: BigInt(0),
    pagination: undefined
  };
}
export const QueryAccountPoolDrawPrizesRequest = {
  typeUrl: "/lum.network.millions.QueryAccountPoolDrawPrizesRequest",
  encode(message: QueryAccountPoolDrawPrizesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.winnerAddress !== "") {
      writer.uint32(10).string(message.winnerAddress);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.drawId !== BigInt(0)) {
      writer.uint32(24).uint64(message.drawId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountPoolDrawPrizesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountPoolDrawPrizesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.winnerAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.drawId = reader.uint64();
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
  fromPartial(object: Partial<QueryAccountPoolDrawPrizesRequest>): QueryAccountPoolDrawPrizesRequest {
    const message = createBaseQueryAccountPoolDrawPrizesRequest();
    message.winnerAddress = object.winnerAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.drawId = object.drawId !== undefined && object.drawId !== null ? BigInt(object.drawId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountPoolDrawPrizesRequestAmino): QueryAccountPoolDrawPrizesRequest {
    const message = createBaseQueryAccountPoolDrawPrizesRequest();
    if (object.winner_address !== undefined && object.winner_address !== null) {
      message.winnerAddress = object.winner_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.draw_id !== undefined && object.draw_id !== null) {
      message.drawId = BigInt(object.draw_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
  typeUrl: "/lum.network.millions.QueryWithdrawalResponse",
  encode(message: QueryWithdrawalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawal !== undefined) {
      Withdrawal.encode(message.withdrawal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWithdrawalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryWithdrawalResponse>): QueryWithdrawalResponse {
    const message = createBaseQueryWithdrawalResponse();
    message.withdrawal = object.withdrawal !== undefined && object.withdrawal !== null ? Withdrawal.fromPartial(object.withdrawal) : undefined;
    return message;
  },
  fromAmino(object: QueryWithdrawalResponseAmino): QueryWithdrawalResponse {
    const message = createBaseQueryWithdrawalResponse();
    if (object.withdrawal !== undefined && object.withdrawal !== null) {
      message.withdrawal = Withdrawal.fromAmino(object.withdrawal);
    }
    return message;
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
    pagination: undefined
  };
}
export const QueryWithdrawalsResponse = {
  typeUrl: "/lum.network.millions.QueryWithdrawalsResponse",
  encode(message: QueryWithdrawalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.withdrawals) {
      Withdrawal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWithdrawalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryWithdrawalsResponse>): QueryWithdrawalsResponse {
    const message = createBaseQueryWithdrawalsResponse();
    message.withdrawals = object.withdrawals?.map(e => Withdrawal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryWithdrawalsResponseAmino): QueryWithdrawalsResponse {
    const message = createBaseQueryWithdrawalsResponse();
    message.withdrawals = object.withdrawals?.map(e => Withdrawal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
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
    poolId: BigInt(0),
    withdrawalId: BigInt(0)
  };
}
export const QueryPoolWithdrawalRequest = {
  typeUrl: "/lum.network.millions.QueryPoolWithdrawalRequest",
  encode(message: QueryPoolWithdrawalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.withdrawalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.withdrawalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolWithdrawalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolWithdrawalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.withdrawalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolWithdrawalRequest>): QueryPoolWithdrawalRequest {
    const message = createBaseQueryPoolWithdrawalRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? BigInt(object.withdrawalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolWithdrawalRequestAmino): QueryPoolWithdrawalRequest {
    const message = createBaseQueryPoolWithdrawalRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.withdrawal_id !== undefined && object.withdrawal_id !== null) {
      message.withdrawalId = BigInt(object.withdrawal_id);
    }
    return message;
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
    pagination: undefined
  };
}
export const QueryWithdrawalsRequest = {
  typeUrl: "/lum.network.millions.QueryWithdrawalsRequest",
  encode(message: QueryWithdrawalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWithdrawalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryWithdrawalsRequest>): QueryWithdrawalsRequest {
    const message = createBaseQueryWithdrawalsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryWithdrawalsRequestAmino): QueryWithdrawalsRequest {
    const message = createBaseQueryWithdrawalsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    poolId: BigInt(0),
    pagination: undefined
  };
}
export const QueryPoolWithdrawalsRequest = {
  typeUrl: "/lum.network.millions.QueryPoolWithdrawalsRequest",
  encode(message: QueryPoolWithdrawalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolWithdrawalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolWithdrawalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
  fromPartial(object: Partial<QueryPoolWithdrawalsRequest>): QueryPoolWithdrawalsRequest {
    const message = createBaseQueryPoolWithdrawalsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolWithdrawalsRequestAmino): QueryPoolWithdrawalsRequest {
    const message = createBaseQueryPoolWithdrawalsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    pagination: undefined
  };
}
export const QueryAccountWithdrawalsRequest = {
  typeUrl: "/lum.network.millions.QueryAccountWithdrawalsRequest",
  encode(message: QueryAccountWithdrawalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositorAddress !== "") {
      writer.uint32(10).string(message.depositorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountWithdrawalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAccountWithdrawalsRequest>): QueryAccountWithdrawalsRequest {
    const message = createBaseQueryAccountWithdrawalsRequest();
    message.depositorAddress = object.depositorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountWithdrawalsRequestAmino): QueryAccountWithdrawalsRequest {
    const message = createBaseQueryAccountWithdrawalsRequest();
    if (object.depositor_address !== undefined && object.depositor_address !== null) {
      message.depositorAddress = object.depositor_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
    poolId: BigInt(0),
    pagination: undefined
  };
}
export const QueryAccountPoolWithdrawalsRequest = {
  typeUrl: "/lum.network.millions.QueryAccountPoolWithdrawalsRequest",
  encode(message: QueryAccountPoolWithdrawalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositorAddress !== "") {
      writer.uint32(10).string(message.depositorAddress);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountPoolWithdrawalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountPoolWithdrawalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositorAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
  fromPartial(object: Partial<QueryAccountPoolWithdrawalsRequest>): QueryAccountPoolWithdrawalsRequest {
    const message = createBaseQueryAccountPoolWithdrawalsRequest();
    message.depositorAddress = object.depositorAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountPoolWithdrawalsRequestAmino): QueryAccountPoolWithdrawalsRequest {
    const message = createBaseQueryAccountPoolWithdrawalsRequest();
    if (object.depositor_address !== undefined && object.depositor_address !== null) {
      message.depositorAddress = object.depositor_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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