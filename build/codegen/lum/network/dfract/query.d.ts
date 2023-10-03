import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Deposit, DepositAmino, DepositSDKType } from "./deposit";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export declare enum DepositsQueryType {
    PENDING_WITHDRAWAL = 0,
    PENDING_MINT = 1,
    MINTED = 2,
    UNRECOGNIZED = -1
}
export declare const DepositsQueryTypeSDKType: typeof DepositsQueryType;
export declare const DepositsQueryTypeAmino: typeof DepositsQueryType;
export declare function depositsQueryTypeFromJSON(object: any): DepositsQueryType;
export declare function depositsQueryTypeToJSON(object: DepositsQueryType): string;
export interface QueryModuleAccountBalanceRequest {
}
export interface QueryModuleAccountBalanceRequestProtoMsg {
    typeUrl: "/lum.network.dfract.QueryModuleAccountBalanceRequest";
    value: Uint8Array;
}
export interface QueryModuleAccountBalanceRequestAmino {
}
export interface QueryModuleAccountBalanceRequestAminoMsg {
    type: "/lum.network.dfract.QueryModuleAccountBalanceRequest";
    value: QueryModuleAccountBalanceRequestAmino;
}
export interface QueryModuleAccountBalanceRequestSDKType {
}
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
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/lum.network.dfract.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/lum.network.dfract.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
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
export declare const QueryModuleAccountBalanceRequest: {
    encode(_: QueryModuleAccountBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceRequest;
    fromPartial(_: DeepPartial<QueryModuleAccountBalanceRequest>): QueryModuleAccountBalanceRequest;
    fromAmino(_: QueryModuleAccountBalanceRequestAmino): QueryModuleAccountBalanceRequest;
    toAmino(_: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestAmino;
    fromAminoMsg(object: QueryModuleAccountBalanceRequestAminoMsg): QueryModuleAccountBalanceRequest;
    fromProtoMsg(message: QueryModuleAccountBalanceRequestProtoMsg): QueryModuleAccountBalanceRequest;
    toProto(message: QueryModuleAccountBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestProtoMsg;
};
export declare const QueryModuleAccountBalanceResponse: {
    encode(message: QueryModuleAccountBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceResponse;
    fromPartial(object: DeepPartial<QueryModuleAccountBalanceResponse>): QueryModuleAccountBalanceResponse;
    fromAmino(object: QueryModuleAccountBalanceResponseAmino): QueryModuleAccountBalanceResponse;
    toAmino(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseAmino;
    fromAminoMsg(object: QueryModuleAccountBalanceResponseAminoMsg): QueryModuleAccountBalanceResponse;
    fromProtoMsg(message: QueryModuleAccountBalanceResponseProtoMsg): QueryModuleAccountBalanceResponse;
    toProto(message: QueryModuleAccountBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseProtoMsg;
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
export declare const QueryGetDepositsForAddressRequest: {
    encode(message: QueryGetDepositsForAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositsForAddressRequest;
    fromPartial(object: DeepPartial<QueryGetDepositsForAddressRequest>): QueryGetDepositsForAddressRequest;
    fromAmino(object: QueryGetDepositsForAddressRequestAmino): QueryGetDepositsForAddressRequest;
    toAmino(message: QueryGetDepositsForAddressRequest): QueryGetDepositsForAddressRequestAmino;
    fromAminoMsg(object: QueryGetDepositsForAddressRequestAminoMsg): QueryGetDepositsForAddressRequest;
    fromProtoMsg(message: QueryGetDepositsForAddressRequestProtoMsg): QueryGetDepositsForAddressRequest;
    toProto(message: QueryGetDepositsForAddressRequest): Uint8Array;
    toProtoMsg(message: QueryGetDepositsForAddressRequest): QueryGetDepositsForAddressRequestProtoMsg;
};
export declare const QueryFetchDepositsRequest: {
    encode(message: QueryFetchDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchDepositsRequest;
    fromPartial(object: DeepPartial<QueryFetchDepositsRequest>): QueryFetchDepositsRequest;
    fromAmino(object: QueryFetchDepositsRequestAmino): QueryFetchDepositsRequest;
    toAmino(message: QueryFetchDepositsRequest): QueryFetchDepositsRequestAmino;
    fromAminoMsg(object: QueryFetchDepositsRequestAminoMsg): QueryFetchDepositsRequest;
    fromProtoMsg(message: QueryFetchDepositsRequestProtoMsg): QueryFetchDepositsRequest;
    toProto(message: QueryFetchDepositsRequest): Uint8Array;
    toProtoMsg(message: QueryFetchDepositsRequest): QueryFetchDepositsRequestProtoMsg;
};
export declare const QueryGetDepositsForAddressResponse: {
    encode(message: QueryGetDepositsForAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositsForAddressResponse;
    fromPartial(object: DeepPartial<QueryGetDepositsForAddressResponse>): QueryGetDepositsForAddressResponse;
    fromAmino(object: QueryGetDepositsForAddressResponseAmino): QueryGetDepositsForAddressResponse;
    toAmino(message: QueryGetDepositsForAddressResponse): QueryGetDepositsForAddressResponseAmino;
    fromAminoMsg(object: QueryGetDepositsForAddressResponseAminoMsg): QueryGetDepositsForAddressResponse;
    fromProtoMsg(message: QueryGetDepositsForAddressResponseProtoMsg): QueryGetDepositsForAddressResponse;
    toProto(message: QueryGetDepositsForAddressResponse): Uint8Array;
    toProtoMsg(message: QueryGetDepositsForAddressResponse): QueryGetDepositsForAddressResponseProtoMsg;
};
export declare const QueryFetchDepositsResponse: {
    encode(message: QueryFetchDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchDepositsResponse;
    fromPartial(object: DeepPartial<QueryFetchDepositsResponse>): QueryFetchDepositsResponse;
    fromAmino(object: QueryFetchDepositsResponseAmino): QueryFetchDepositsResponse;
    toAmino(message: QueryFetchDepositsResponse): QueryFetchDepositsResponseAmino;
    fromAminoMsg(object: QueryFetchDepositsResponseAminoMsg): QueryFetchDepositsResponse;
    fromProtoMsg(message: QueryFetchDepositsResponseProtoMsg): QueryFetchDepositsResponse;
    toProto(message: QueryFetchDepositsResponse): Uint8Array;
    toProtoMsg(message: QueryFetchDepositsResponse): QueryFetchDepositsResponseProtoMsg;
};
