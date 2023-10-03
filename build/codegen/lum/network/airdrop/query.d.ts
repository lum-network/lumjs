import { Action, ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType } from "./claim";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequest {
}
export interface QueryModuleAccountBalanceRequestProtoMsg {
    typeUrl: "/lum.network.airdrop.QueryModuleAccountBalanceRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequestAmino {
}
export interface QueryModuleAccountBalanceRequestAminoMsg {
    type: "/lum.network.airdrop.QueryModuleAccountBalanceRequest";
    value: QueryModuleAccountBalanceRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponse {
    /** params defines the parameters of the module. */
    moduleAccountBalance: Coin[];
}
export interface QueryModuleAccountBalanceResponseProtoMsg {
    typeUrl: "/lum.network.airdrop.QueryModuleAccountBalanceResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponseAmino {
    /** params defines the parameters of the module. */
    module_account_balance: CoinAmino[];
}
export interface QueryModuleAccountBalanceResponseAminoMsg {
    type: "/lum.network.airdrop.QueryModuleAccountBalanceResponse";
    value: QueryModuleAccountBalanceResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponseSDKType {
    module_account_balance: CoinSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/lum.network.airdrop.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/lum.network.airdrop.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/lum.network.airdrop.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "/lum.network.airdrop.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType | undefined;
}
export interface QueryClaimRecordRequest {
    address: string;
}
export interface QueryClaimRecordRequestProtoMsg {
    typeUrl: "/lum.network.airdrop.QueryClaimRecordRequest";
    value: Uint8Array;
}
export interface QueryClaimRecordRequestAmino {
    address: string;
}
export interface QueryClaimRecordRequestAminoMsg {
    type: "/lum.network.airdrop.QueryClaimRecordRequest";
    value: QueryClaimRecordRequestAmino;
}
export interface QueryClaimRecordRequestSDKType {
    address: string;
}
export interface QueryClaimRecordResponse {
    claimRecord: ClaimRecord | undefined;
}
export interface QueryClaimRecordResponseProtoMsg {
    typeUrl: "/lum.network.airdrop.QueryClaimRecordResponse";
    value: Uint8Array;
}
export interface QueryClaimRecordResponseAmino {
    claim_record?: ClaimRecordAmino | undefined;
}
export interface QueryClaimRecordResponseAminoMsg {
    type: "/lum.network.airdrop.QueryClaimRecordResponse";
    value: QueryClaimRecordResponseAmino;
}
export interface QueryClaimRecordResponseSDKType {
    claim_record: ClaimRecordSDKType | undefined;
}
export interface QueryClaimableForActionRequest {
    address: string;
    action: Action;
}
export interface QueryClaimableForActionRequestProtoMsg {
    typeUrl: "/lum.network.airdrop.QueryClaimableForActionRequest";
    value: Uint8Array;
}
export interface QueryClaimableForActionRequestAmino {
    address: string;
    action: Action;
}
export interface QueryClaimableForActionRequestAminoMsg {
    type: "/lum.network.airdrop.QueryClaimableForActionRequest";
    value: QueryClaimableForActionRequestAmino;
}
export interface QueryClaimableForActionRequestSDKType {
    address: string;
    action: Action;
}
export interface QueryClaimableForActionResponse {
    coins: Coin[];
}
export interface QueryClaimableForActionResponseProtoMsg {
    typeUrl: "/lum.network.airdrop.QueryClaimableForActionResponse";
    value: Uint8Array;
}
export interface QueryClaimableForActionResponseAmino {
    coins: CoinAmino[];
}
export interface QueryClaimableForActionResponseAminoMsg {
    type: "/lum.network.airdrop.QueryClaimableForActionResponse";
    value: QueryClaimableForActionResponseAmino;
}
export interface QueryClaimableForActionResponseSDKType {
    coins: CoinSDKType[];
}
export interface QueryTotalClaimableRequest {
    address: string;
}
export interface QueryTotalClaimableRequestProtoMsg {
    typeUrl: "/lum.network.airdrop.QueryTotalClaimableRequest";
    value: Uint8Array;
}
export interface QueryTotalClaimableRequestAmino {
    address: string;
}
export interface QueryTotalClaimableRequestAminoMsg {
    type: "/lum.network.airdrop.QueryTotalClaimableRequest";
    value: QueryTotalClaimableRequestAmino;
}
export interface QueryTotalClaimableRequestSDKType {
    address: string;
}
export interface QueryTotalClaimableResponse {
    coins: Coin[];
}
export interface QueryTotalClaimableResponseProtoMsg {
    typeUrl: "/lum.network.airdrop.QueryTotalClaimableResponse";
    value: Uint8Array;
}
export interface QueryTotalClaimableResponseAmino {
    coins: CoinAmino[];
}
export interface QueryTotalClaimableResponseAminoMsg {
    type: "/lum.network.airdrop.QueryTotalClaimableResponse";
    value: QueryTotalClaimableResponseAmino;
}
export interface QueryTotalClaimableResponseSDKType {
    coins: CoinSDKType[];
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
export declare const QueryClaimRecordRequest: {
    encode(message: QueryClaimRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordRequest;
    fromPartial(object: DeepPartial<QueryClaimRecordRequest>): QueryClaimRecordRequest;
    fromAmino(object: QueryClaimRecordRequestAmino): QueryClaimRecordRequest;
    toAmino(message: QueryClaimRecordRequest): QueryClaimRecordRequestAmino;
    fromAminoMsg(object: QueryClaimRecordRequestAminoMsg): QueryClaimRecordRequest;
    fromProtoMsg(message: QueryClaimRecordRequestProtoMsg): QueryClaimRecordRequest;
    toProto(message: QueryClaimRecordRequest): Uint8Array;
    toProtoMsg(message: QueryClaimRecordRequest): QueryClaimRecordRequestProtoMsg;
};
export declare const QueryClaimRecordResponse: {
    encode(message: QueryClaimRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordResponse;
    fromPartial(object: DeepPartial<QueryClaimRecordResponse>): QueryClaimRecordResponse;
    fromAmino(object: QueryClaimRecordResponseAmino): QueryClaimRecordResponse;
    toAmino(message: QueryClaimRecordResponse): QueryClaimRecordResponseAmino;
    fromAminoMsg(object: QueryClaimRecordResponseAminoMsg): QueryClaimRecordResponse;
    fromProtoMsg(message: QueryClaimRecordResponseProtoMsg): QueryClaimRecordResponse;
    toProto(message: QueryClaimRecordResponse): Uint8Array;
    toProtoMsg(message: QueryClaimRecordResponse): QueryClaimRecordResponseProtoMsg;
};
export declare const QueryClaimableForActionRequest: {
    encode(message: QueryClaimableForActionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionRequest;
    fromPartial(object: DeepPartial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest;
    fromAmino(object: QueryClaimableForActionRequestAmino): QueryClaimableForActionRequest;
    toAmino(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestAmino;
    fromAminoMsg(object: QueryClaimableForActionRequestAminoMsg): QueryClaimableForActionRequest;
    fromProtoMsg(message: QueryClaimableForActionRequestProtoMsg): QueryClaimableForActionRequest;
    toProto(message: QueryClaimableForActionRequest): Uint8Array;
    toProtoMsg(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestProtoMsg;
};
export declare const QueryClaimableForActionResponse: {
    encode(message: QueryClaimableForActionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionResponse;
    fromPartial(object: DeepPartial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse;
    fromAmino(object: QueryClaimableForActionResponseAmino): QueryClaimableForActionResponse;
    toAmino(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseAmino;
    fromAminoMsg(object: QueryClaimableForActionResponseAminoMsg): QueryClaimableForActionResponse;
    fromProtoMsg(message: QueryClaimableForActionResponseProtoMsg): QueryClaimableForActionResponse;
    toProto(message: QueryClaimableForActionResponse): Uint8Array;
    toProtoMsg(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseProtoMsg;
};
export declare const QueryTotalClaimableRequest: {
    encode(message: QueryTotalClaimableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableRequest;
    fromPartial(object: DeepPartial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest;
    fromAmino(object: QueryTotalClaimableRequestAmino): QueryTotalClaimableRequest;
    toAmino(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestAmino;
    fromAminoMsg(object: QueryTotalClaimableRequestAminoMsg): QueryTotalClaimableRequest;
    fromProtoMsg(message: QueryTotalClaimableRequestProtoMsg): QueryTotalClaimableRequest;
    toProto(message: QueryTotalClaimableRequest): Uint8Array;
    toProtoMsg(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestProtoMsg;
};
export declare const QueryTotalClaimableResponse: {
    encode(message: QueryTotalClaimableResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableResponse;
    fromPartial(object: DeepPartial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse;
    fromAmino(object: QueryTotalClaimableResponseAmino): QueryTotalClaimableResponse;
    toAmino(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseAmino;
    fromAminoMsg(object: QueryTotalClaimableResponseAminoMsg): QueryTotalClaimableResponse;
    fromProtoMsg(message: QueryTotalClaimableResponseProtoMsg): QueryTotalClaimableResponse;
    toProto(message: QueryTotalClaimableResponse): Uint8Array;
    toProtoMsg(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseProtoMsg;
};
