import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType } from "./auth";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
export interface QueryAccountsRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest";
    value: Uint8Array;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountsRequestAminoMsg {
    type: "cosmos-sdk/QueryAccountsRequest";
    value: QueryAccountsRequestAmino;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequestSDKType {
    pagination: PageRequestSDKType | undefined;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
    /** accounts are the existing accounts */
    accounts: Any[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
export interface QueryAccountsResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse";
    value: Uint8Array;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponseAmino {
    /** accounts are the existing accounts */
    accounts: AnyAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryAccountsResponseAminoMsg {
    type: "cosmos-sdk/QueryAccountsResponse";
    value: QueryAccountsResponseAmino;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponseSDKType {
    accounts: AnySDKType[];
    pagination: PageResponseSDKType | undefined;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    /** address defines the address to query for. */
    address: string;
}
export interface QueryAccountRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest";
    value: Uint8Array;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestAmino {
    /** address defines the address to query for. */
    address: string;
}
export interface QueryAccountRequestAminoMsg {
    type: "cosmos-sdk/QueryAccountRequest";
    value: QueryAccountRequestAmino;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestSDKType {
    address: string;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequest {
}
export interface QueryModuleAccountsRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest";
    value: Uint8Array;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequestAmino {
}
export interface QueryModuleAccountsRequestAminoMsg {
    type: "cosmos-sdk/QueryModuleAccountsRequest";
    value: QueryModuleAccountsRequestAmino;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType | undefined;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
    /** account defines the account of the corresponding address. */
    account: Any | undefined;
}
export interface QueryAccountResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse";
    value: Uint8Array;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseAmino {
    /** account defines the account of the corresponding address. */
    account?: AnyAmino | undefined;
}
export interface QueryAccountResponseAminoMsg {
    type: "cosmos-sdk/QueryAccountResponse";
    value: QueryAccountResponseAmino;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseSDKType {
    account: AnySDKType | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponse {
    accounts: Any[];
}
export interface QueryModuleAccountsResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse";
    value: Uint8Array;
}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponseAmino {
    accounts: AnyAmino[];
}
export interface QueryModuleAccountsResponseAminoMsg {
    type: "cosmos-sdk/QueryModuleAccountsResponse";
    value: QueryModuleAccountsResponseAmino;
}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponseSDKType {
    accounts: AnySDKType[];
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequest {
}
export interface Bech32PrefixRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest";
    value: Uint8Array;
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequestAmino {
}
export interface Bech32PrefixRequestAminoMsg {
    type: "cosmos-sdk/Bech32PrefixRequest";
    value: Bech32PrefixRequestAmino;
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequestSDKType {
}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponse {
    bech32Prefix: string;
}
export interface Bech32PrefixResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse";
    value: Uint8Array;
}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponseAmino {
    bech32_prefix: string;
}
export interface Bech32PrefixResponseAminoMsg {
    type: "cosmos-sdk/Bech32PrefixResponse";
    value: Bech32PrefixResponseAmino;
}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponseSDKType {
    bech32_prefix: string;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequest {
    addressBytes: Uint8Array;
}
export interface AddressBytesToStringRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest";
    value: Uint8Array;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequestAmino {
    address_bytes: Uint8Array;
}
export interface AddressBytesToStringRequestAminoMsg {
    type: "cosmos-sdk/AddressBytesToStringRequest";
    value: AddressBytesToStringRequestAmino;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequestSDKType {
    address_bytes: Uint8Array;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponse {
    addressString: string;
}
export interface AddressBytesToStringResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse";
    value: Uint8Array;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponseAmino {
    address_string: string;
}
export interface AddressBytesToStringResponseAminoMsg {
    type: "cosmos-sdk/AddressBytesToStringResponse";
    value: AddressBytesToStringResponseAmino;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponseSDKType {
    address_string: string;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequest {
    addressString: string;
}
export interface AddressStringToBytesRequestProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest";
    value: Uint8Array;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequestAmino {
    address_string: string;
}
export interface AddressStringToBytesRequestAminoMsg {
    type: "cosmos-sdk/AddressStringToBytesRequest";
    value: AddressStringToBytesRequestAmino;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequestSDKType {
    address_string: string;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponse {
    addressBytes: Uint8Array;
}
export interface AddressStringToBytesResponseProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse";
    value: Uint8Array;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponseAmino {
    address_bytes: Uint8Array;
}
export interface AddressStringToBytesResponseAminoMsg {
    type: "cosmos-sdk/AddressStringToBytesResponse";
    value: AddressStringToBytesResponseAmino;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponseSDKType {
    address_bytes: Uint8Array;
}
export declare const QueryAccountsRequest: {
    encode(message: QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest;
    fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest;
    fromAmino(object: QueryAccountsRequestAmino): QueryAccountsRequest;
    toAmino(message: QueryAccountsRequest): QueryAccountsRequestAmino;
    fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest;
    toAminoMsg(message: QueryAccountsRequest): QueryAccountsRequestAminoMsg;
    fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest;
    toProto(message: QueryAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg;
};
export declare const QueryAccountsResponse: {
    encode(message: QueryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse;
    fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse;
    fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse;
    toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino;
    fromAminoMsg(object: QueryAccountsResponseAminoMsg): QueryAccountsResponse;
    toAminoMsg(message: QueryAccountsResponse): QueryAccountsResponseAminoMsg;
    fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse;
    toProto(message: QueryAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg;
};
export declare const QueryAccountRequest: {
    encode(message: QueryAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest;
    fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest;
    fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest;
    toAmino(message: QueryAccountRequest): QueryAccountRequestAmino;
    fromAminoMsg(object: QueryAccountRequestAminoMsg): QueryAccountRequest;
    toAminoMsg(message: QueryAccountRequest): QueryAccountRequestAminoMsg;
    fromProtoMsg(message: QueryAccountRequestProtoMsg): QueryAccountRequest;
    toProto(message: QueryAccountRequest): Uint8Array;
    toProtoMsg(message: QueryAccountRequest): QueryAccountRequestProtoMsg;
};
export declare const QueryModuleAccountsRequest: {
    encode(_: QueryModuleAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsRequest;
    fromPartial(_: DeepPartial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest;
    fromAmino(_: QueryModuleAccountsRequestAmino): QueryModuleAccountsRequest;
    toAmino(_: QueryModuleAccountsRequest): QueryModuleAccountsRequestAmino;
    fromAminoMsg(object: QueryModuleAccountsRequestAminoMsg): QueryModuleAccountsRequest;
    toAminoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestAminoMsg;
    fromProtoMsg(message: QueryModuleAccountsRequestProtoMsg): QueryModuleAccountsRequest;
    toProto(message: QueryModuleAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryAccountResponse: {
    encode(message: QueryAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse;
    fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse;
    fromAmino(object: QueryAccountResponseAmino): QueryAccountResponse;
    toAmino(message: QueryAccountResponse): QueryAccountResponseAmino;
    fromAminoMsg(object: QueryAccountResponseAminoMsg): QueryAccountResponse;
    toAminoMsg(message: QueryAccountResponse): QueryAccountResponseAminoMsg;
    fromProtoMsg(message: QueryAccountResponseProtoMsg): QueryAccountResponse;
    toProto(message: QueryAccountResponse): Uint8Array;
    toProtoMsg(message: QueryAccountResponse): QueryAccountResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryModuleAccountsResponse: {
    encode(message: QueryModuleAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsResponse;
    fromPartial(object: DeepPartial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse;
    fromAmino(object: QueryModuleAccountsResponseAmino): QueryModuleAccountsResponse;
    toAmino(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAmino;
    fromAminoMsg(object: QueryModuleAccountsResponseAminoMsg): QueryModuleAccountsResponse;
    toAminoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAminoMsg;
    fromProtoMsg(message: QueryModuleAccountsResponseProtoMsg): QueryModuleAccountsResponse;
    toProto(message: QueryModuleAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseProtoMsg;
};
export declare const Bech32PrefixRequest: {
    encode(_: Bech32PrefixRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixRequest;
    fromPartial(_: DeepPartial<Bech32PrefixRequest>): Bech32PrefixRequest;
    fromAmino(_: Bech32PrefixRequestAmino): Bech32PrefixRequest;
    toAmino(_: Bech32PrefixRequest): Bech32PrefixRequestAmino;
    fromAminoMsg(object: Bech32PrefixRequestAminoMsg): Bech32PrefixRequest;
    toAminoMsg(message: Bech32PrefixRequest): Bech32PrefixRequestAminoMsg;
    fromProtoMsg(message: Bech32PrefixRequestProtoMsg): Bech32PrefixRequest;
    toProto(message: Bech32PrefixRequest): Uint8Array;
    toProtoMsg(message: Bech32PrefixRequest): Bech32PrefixRequestProtoMsg;
};
export declare const Bech32PrefixResponse: {
    encode(message: Bech32PrefixResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixResponse;
    fromPartial(object: DeepPartial<Bech32PrefixResponse>): Bech32PrefixResponse;
    fromAmino(object: Bech32PrefixResponseAmino): Bech32PrefixResponse;
    toAmino(message: Bech32PrefixResponse): Bech32PrefixResponseAmino;
    fromAminoMsg(object: Bech32PrefixResponseAminoMsg): Bech32PrefixResponse;
    toAminoMsg(message: Bech32PrefixResponse): Bech32PrefixResponseAminoMsg;
    fromProtoMsg(message: Bech32PrefixResponseProtoMsg): Bech32PrefixResponse;
    toProto(message: Bech32PrefixResponse): Uint8Array;
    toProtoMsg(message: Bech32PrefixResponse): Bech32PrefixResponseProtoMsg;
};
export declare const AddressBytesToStringRequest: {
    encode(message: AddressBytesToStringRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddressBytesToStringRequest;
    fromPartial(object: DeepPartial<AddressBytesToStringRequest>): AddressBytesToStringRequest;
    fromAmino(object: AddressBytesToStringRequestAmino): AddressBytesToStringRequest;
    toAmino(message: AddressBytesToStringRequest): AddressBytesToStringRequestAmino;
    fromAminoMsg(object: AddressBytesToStringRequestAminoMsg): AddressBytesToStringRequest;
    toAminoMsg(message: AddressBytesToStringRequest): AddressBytesToStringRequestAminoMsg;
    fromProtoMsg(message: AddressBytesToStringRequestProtoMsg): AddressBytesToStringRequest;
    toProto(message: AddressBytesToStringRequest): Uint8Array;
    toProtoMsg(message: AddressBytesToStringRequest): AddressBytesToStringRequestProtoMsg;
};
export declare const AddressBytesToStringResponse: {
    encode(message: AddressBytesToStringResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddressBytesToStringResponse;
    fromPartial(object: DeepPartial<AddressBytesToStringResponse>): AddressBytesToStringResponse;
    fromAmino(object: AddressBytesToStringResponseAmino): AddressBytesToStringResponse;
    toAmino(message: AddressBytesToStringResponse): AddressBytesToStringResponseAmino;
    fromAminoMsg(object: AddressBytesToStringResponseAminoMsg): AddressBytesToStringResponse;
    toAminoMsg(message: AddressBytesToStringResponse): AddressBytesToStringResponseAminoMsg;
    fromProtoMsg(message: AddressBytesToStringResponseProtoMsg): AddressBytesToStringResponse;
    toProto(message: AddressBytesToStringResponse): Uint8Array;
    toProtoMsg(message: AddressBytesToStringResponse): AddressBytesToStringResponseProtoMsg;
};
export declare const AddressStringToBytesRequest: {
    encode(message: AddressStringToBytesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddressStringToBytesRequest;
    fromPartial(object: DeepPartial<AddressStringToBytesRequest>): AddressStringToBytesRequest;
    fromAmino(object: AddressStringToBytesRequestAmino): AddressStringToBytesRequest;
    toAmino(message: AddressStringToBytesRequest): AddressStringToBytesRequestAmino;
    fromAminoMsg(object: AddressStringToBytesRequestAminoMsg): AddressStringToBytesRequest;
    toAminoMsg(message: AddressStringToBytesRequest): AddressStringToBytesRequestAminoMsg;
    fromProtoMsg(message: AddressStringToBytesRequestProtoMsg): AddressStringToBytesRequest;
    toProto(message: AddressStringToBytesRequest): Uint8Array;
    toProtoMsg(message: AddressStringToBytesRequest): AddressStringToBytesRequestProtoMsg;
};
export declare const AddressStringToBytesResponse: {
    encode(message: AddressStringToBytesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddressStringToBytesResponse;
    fromPartial(object: DeepPartial<AddressStringToBytesResponse>): AddressStringToBytesResponse;
    fromAmino(object: AddressStringToBytesResponseAmino): AddressStringToBytesResponse;
    toAmino(message: AddressStringToBytesResponse): AddressStringToBytesResponseAmino;
    fromAminoMsg(object: AddressStringToBytesResponseAminoMsg): AddressStringToBytesResponse;
    toAminoMsg(message: AddressStringToBytesResponse): AddressStringToBytesResponseAminoMsg;
    fromProtoMsg(message: AddressStringToBytesResponseProtoMsg): AddressStringToBytesResponse;
    toProto(message: AddressStringToBytesResponse): Uint8Array;
    toProtoMsg(message: AddressStringToBytesResponse): AddressStringToBytesResponseProtoMsg;
};
