import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Deposit, DepositAmino, DepositSDKType } from "./deposit";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "../../../helpers";
export enum DepositsQueryType {
  PENDING_WITHDRAWAL = 0,
  PENDING_MINT = 1,
  MINTED = 2,
  UNRECOGNIZED = -1,
}
export const DepositsQueryTypeSDKType = DepositsQueryType;
export const DepositsQueryTypeAmino = DepositsQueryType;
export function depositsQueryTypeFromJSON(object: any): DepositsQueryType {
  switch (object) {
    case 0:
    case "PENDING_WITHDRAWAL":
      return DepositsQueryType.PENDING_WITHDRAWAL;
    case 1:
    case "PENDING_MINT":
      return DepositsQueryType.PENDING_MINT;
    case 2:
    case "MINTED":
      return DepositsQueryType.MINTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositsQueryType.UNRECOGNIZED;
  }
}
export function depositsQueryTypeToJSON(object: DepositsQueryType): string {
  switch (object) {
    case DepositsQueryType.PENDING_WITHDRAWAL:
      return "PENDING_WITHDRAWAL";
    case DepositsQueryType.PENDING_MINT:
      return "PENDING_MINT";
    case DepositsQueryType.MINTED:
      return "MINTED";
    case DepositsQueryType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface QueryModuleAccountBalanceRequest {}
export interface QueryModuleAccountBalanceRequestProtoMsg {
  typeUrl: "/lum.network.dfract.QueryModuleAccountBalanceRequest";
  value: Uint8Array;
}
export interface QueryModuleAccountBalanceRequestAmino {}
export interface QueryModuleAccountBalanceRequestAminoMsg {
  type: "/lum.network.dfract.QueryModuleAccountBalanceRequest";
  value: QueryModuleAccountBalanceRequestAmino;
}
export interface QueryModuleAccountBalanceRequestSDKType {}
export interface QueryModuleAccountBalanceResponse {
  moduleAccountBalance: Coin[];
}
export interface QueryModuleAccountBalanceResponseProtoMsg {
  typeUrl: "/lum.network.dfract.QueryModuleAccountBalanceResponse";
  value: Uint8Array;
}
export interface QueryModuleAccountBalanceResponseAmino {
  module_account_balance: CoinAmino[];
}
export interface QueryModuleAccountBalanceResponseAminoMsg {
  type: "/lum.network.dfract.QueryModuleAccountBalanceResponse";
  value: QueryModuleAccountBalanceResponseAmino;
}
export interface QueryModuleAccountBalanceResponseSDKType {
  module_account_balance: CoinSDKType[];
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lum.network.dfract.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lum.network.dfract.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/lum.network.dfract.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lum.network.dfract.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType | undefined;
}
export interface QueryGetDepositsForAddressRequest {
  address: string;
}
export interface QueryGetDepositsForAddressRequestProtoMsg {
  typeUrl: "/lum.network.dfract.QueryGetDepositsForAddressRequest";
  value: Uint8Array;
}
export interface QueryGetDepositsForAddressRequestAmino {
  address: string;
}
export interface QueryGetDepositsForAddressRequestAminoMsg {
  type: "/lum.network.dfract.QueryGetDepositsForAddressRequest";
  value: QueryGetDepositsForAddressRequestAmino;
}
export interface QueryGetDepositsForAddressRequestSDKType {
  address: string;
}
export interface QueryFetchDepositsRequest {
  pagination: PageRequest | undefined;
  type: DepositsQueryType;
}
export interface QueryFetchDepositsRequestProtoMsg {
  typeUrl: "/lum.network.dfract.QueryFetchDepositsRequest";
  value: Uint8Array;
}
export interface QueryFetchDepositsRequestAmino {
  pagination?: PageRequestAmino | undefined;
  type: DepositsQueryType;
}
export interface QueryFetchDepositsRequestAminoMsg {
  type: "/lum.network.dfract.QueryFetchDepositsRequest";
  value: QueryFetchDepositsRequestAmino;
}
export interface QueryFetchDepositsRequestSDKType {
  pagination: PageRequestSDKType | undefined;
  type: DepositsQueryType;
}
export interface QueryGetDepositsForAddressResponse {
  depositsPendingWithdrawal: Deposit | undefined;
  depositsPendingMint: Deposit | undefined;
  depositsMinted: Deposit | undefined;
}
export interface QueryGetDepositsForAddressResponseProtoMsg {
  typeUrl: "/lum.network.dfract.QueryGetDepositsForAddressResponse";
  value: Uint8Array;
}
export interface QueryGetDepositsForAddressResponseAmino {
  deposits_pending_withdrawal?: DepositAmino | undefined;
  deposits_pending_mint?: DepositAmino | undefined;
  deposits_minted?: DepositAmino | undefined;
}
export interface QueryGetDepositsForAddressResponseAminoMsg {
  type: "/lum.network.dfract.QueryGetDepositsForAddressResponse";
  value: QueryGetDepositsForAddressResponseAmino;
}
export interface QueryGetDepositsForAddressResponseSDKType {
  deposits_pending_withdrawal: DepositSDKType | undefined;
  deposits_pending_mint: DepositSDKType | undefined;
  deposits_minted: DepositSDKType | undefined;
}
export interface QueryFetchDepositsResponse {
  deposits: Deposit[];
  pagination: PageResponse | undefined;
}
export interface QueryFetchDepositsResponseProtoMsg {
  typeUrl: "/lum.network.dfract.QueryFetchDepositsResponse";
  value: Uint8Array;
}
export interface QueryFetchDepositsResponseAmino {
  deposits: DepositAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryFetchDepositsResponseAminoMsg {
  type: "/lum.network.dfract.QueryFetchDepositsResponse";
  value: QueryFetchDepositsResponseAmino;
}
export interface QueryFetchDepositsResponseSDKType {
  deposits: DepositSDKType[];
  pagination: PageResponseSDKType | undefined;
}
function createBaseQueryModuleAccountBalanceRequest(): QueryModuleAccountBalanceRequest {
  return {};
}
export const QueryModuleAccountBalanceRequest = {
  encode(_: QueryModuleAccountBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountBalanceRequest();
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
  fromPartial(_: DeepPartial<QueryModuleAccountBalanceRequest>): QueryModuleAccountBalanceRequest {
    const message = createBaseQueryModuleAccountBalanceRequest();
    return message;
  },
  fromAmino(_: QueryModuleAccountBalanceRequestAmino): QueryModuleAccountBalanceRequest {
    return {};
  },
  toAmino(_: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleAccountBalanceRequestAminoMsg): QueryModuleAccountBalanceRequest {
    return QueryModuleAccountBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleAccountBalanceRequestProtoMsg): QueryModuleAccountBalanceRequest {
    return QueryModuleAccountBalanceRequest.decode(message.value);
  },
  toProto(message: QueryModuleAccountBalanceRequest): Uint8Array {
    return QueryModuleAccountBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestProtoMsg {
    return {
      typeUrl: "/lum.network.dfract.QueryModuleAccountBalanceRequest",
      value: QueryModuleAccountBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleAccountBalanceResponse(): QueryModuleAccountBalanceResponse {
  return {
    moduleAccountBalance: []
  };
}
export const QueryModuleAccountBalanceResponse = {
  encode(message: QueryModuleAccountBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.moduleAccountBalance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleAccountBalance.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryModuleAccountBalanceResponse>): QueryModuleAccountBalanceResponse {
    const message = createBaseQueryModuleAccountBalanceResponse();
    message.moduleAccountBalance = object.moduleAccountBalance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryModuleAccountBalanceResponseAmino): QueryModuleAccountBalanceResponse {
    return {
      moduleAccountBalance: Array.isArray(object?.module_account_balance) ? object.module_account_balance.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseAmino {
    const obj: any = {};
    if (message.moduleAccountBalance) {
      obj.module_account_balance = message.moduleAccountBalance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.module_account_balance = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryModuleAccountBalanceResponseAminoMsg): QueryModuleAccountBalanceResponse {
    return QueryModuleAccountBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleAccountBalanceResponseProtoMsg): QueryModuleAccountBalanceResponse {
    return QueryModuleAccountBalanceResponse.decode(message.value);
  },
  toProto(message: QueryModuleAccountBalanceResponse): Uint8Array {
    return QueryModuleAccountBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseProtoMsg {
    return {
      typeUrl: "/lum.network.dfract.QueryModuleAccountBalanceResponse",
      value: QueryModuleAccountBalanceResponse.encode(message).finish()
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
      typeUrl: "/lum.network.dfract.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
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
      typeUrl: "/lum.network.dfract.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetDepositsForAddressRequest(): QueryGetDepositsForAddressRequest {
  return {
    address: ""
  };
}
export const QueryGetDepositsForAddressRequest = {
  encode(message: QueryGetDepositsForAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositsForAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDepositsForAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetDepositsForAddressRequest>): QueryGetDepositsForAddressRequest {
    const message = createBaseQueryGetDepositsForAddressRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGetDepositsForAddressRequestAmino): QueryGetDepositsForAddressRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryGetDepositsForAddressRequest): QueryGetDepositsForAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGetDepositsForAddressRequestAminoMsg): QueryGetDepositsForAddressRequest {
    return QueryGetDepositsForAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDepositsForAddressRequestProtoMsg): QueryGetDepositsForAddressRequest {
    return QueryGetDepositsForAddressRequest.decode(message.value);
  },
  toProto(message: QueryGetDepositsForAddressRequest): Uint8Array {
    return QueryGetDepositsForAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDepositsForAddressRequest): QueryGetDepositsForAddressRequestProtoMsg {
    return {
      typeUrl: "/lum.network.dfract.QueryGetDepositsForAddressRequest",
      value: QueryGetDepositsForAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFetchDepositsRequest(): QueryFetchDepositsRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    type: 0
  };
}
export const QueryFetchDepositsRequest = {
  encode(message: QueryFetchDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFetchDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFetchDepositsRequest>): QueryFetchDepositsRequest {
    const message = createBaseQueryFetchDepositsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.type = object.type ?? 0;
    return message;
  },
  fromAmino(object: QueryFetchDepositsRequestAmino): QueryFetchDepositsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      type: isSet(object.type) ? depositsQueryTypeFromJSON(object.type) : -1
    };
  },
  toAmino(message: QueryFetchDepositsRequest): QueryFetchDepositsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.type = message.type;
    return obj;
  },
  fromAminoMsg(object: QueryFetchDepositsRequestAminoMsg): QueryFetchDepositsRequest {
    return QueryFetchDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFetchDepositsRequestProtoMsg): QueryFetchDepositsRequest {
    return QueryFetchDepositsRequest.decode(message.value);
  },
  toProto(message: QueryFetchDepositsRequest): Uint8Array {
    return QueryFetchDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFetchDepositsRequest): QueryFetchDepositsRequestProtoMsg {
    return {
      typeUrl: "/lum.network.dfract.QueryFetchDepositsRequest",
      value: QueryFetchDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetDepositsForAddressResponse(): QueryGetDepositsForAddressResponse {
  return {
    depositsPendingWithdrawal: Deposit.fromPartial({}),
    depositsPendingMint: Deposit.fromPartial({}),
    depositsMinted: Deposit.fromPartial({})
  };
}
export const QueryGetDepositsForAddressResponse = {
  encode(message: QueryGetDepositsForAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositsPendingWithdrawal !== undefined) {
      Deposit.encode(message.depositsPendingWithdrawal, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositsPendingMint !== undefined) {
      Deposit.encode(message.depositsPendingMint, writer.uint32(18).fork()).ldelim();
    }
    if (message.depositsMinted !== undefined) {
      Deposit.encode(message.depositsMinted, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositsForAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDepositsForAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositsPendingWithdrawal = Deposit.decode(reader, reader.uint32());
          break;
        case 2:
          message.depositsPendingMint = Deposit.decode(reader, reader.uint32());
          break;
        case 3:
          message.depositsMinted = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetDepositsForAddressResponse>): QueryGetDepositsForAddressResponse {
    const message = createBaseQueryGetDepositsForAddressResponse();
    message.depositsPendingWithdrawal = object.depositsPendingWithdrawal !== undefined && object.depositsPendingWithdrawal !== null ? Deposit.fromPartial(object.depositsPendingWithdrawal) : undefined;
    message.depositsPendingMint = object.depositsPendingMint !== undefined && object.depositsPendingMint !== null ? Deposit.fromPartial(object.depositsPendingMint) : undefined;
    message.depositsMinted = object.depositsMinted !== undefined && object.depositsMinted !== null ? Deposit.fromPartial(object.depositsMinted) : undefined;
    return message;
  },
  fromAmino(object: QueryGetDepositsForAddressResponseAmino): QueryGetDepositsForAddressResponse {
    return {
      depositsPendingWithdrawal: object?.deposits_pending_withdrawal ? Deposit.fromAmino(object.deposits_pending_withdrawal) : undefined,
      depositsPendingMint: object?.deposits_pending_mint ? Deposit.fromAmino(object.deposits_pending_mint) : undefined,
      depositsMinted: object?.deposits_minted ? Deposit.fromAmino(object.deposits_minted) : undefined
    };
  },
  toAmino(message: QueryGetDepositsForAddressResponse): QueryGetDepositsForAddressResponseAmino {
    const obj: any = {};
    obj.deposits_pending_withdrawal = message.depositsPendingWithdrawal ? Deposit.toAmino(message.depositsPendingWithdrawal) : undefined;
    obj.deposits_pending_mint = message.depositsPendingMint ? Deposit.toAmino(message.depositsPendingMint) : undefined;
    obj.deposits_minted = message.depositsMinted ? Deposit.toAmino(message.depositsMinted) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDepositsForAddressResponseAminoMsg): QueryGetDepositsForAddressResponse {
    return QueryGetDepositsForAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDepositsForAddressResponseProtoMsg): QueryGetDepositsForAddressResponse {
    return QueryGetDepositsForAddressResponse.decode(message.value);
  },
  toProto(message: QueryGetDepositsForAddressResponse): Uint8Array {
    return QueryGetDepositsForAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDepositsForAddressResponse): QueryGetDepositsForAddressResponseProtoMsg {
    return {
      typeUrl: "/lum.network.dfract.QueryGetDepositsForAddressResponse",
      value: QueryGetDepositsForAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFetchDepositsResponse(): QueryFetchDepositsResponse {
  return {
    deposits: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryFetchDepositsResponse = {
  encode(message: QueryFetchDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchDepositsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFetchDepositsResponse();
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
  fromPartial(object: DeepPartial<QueryFetchDepositsResponse>): QueryFetchDepositsResponse {
    const message = createBaseQueryFetchDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFetchDepositsResponseAmino): QueryFetchDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryFetchDepositsResponse): QueryFetchDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFetchDepositsResponseAminoMsg): QueryFetchDepositsResponse {
    return QueryFetchDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFetchDepositsResponseProtoMsg): QueryFetchDepositsResponse {
    return QueryFetchDepositsResponse.decode(message.value);
  },
  toProto(message: QueryFetchDepositsResponse): Uint8Array {
    return QueryFetchDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFetchDepositsResponse): QueryFetchDepositsResponseProtoMsg {
    return {
      typeUrl: "/lum.network.dfract.QueryFetchDepositsResponse",
      value: QueryFetchDepositsResponse.encode(message).finish()
    };
  }
};