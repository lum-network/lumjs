import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAmino, GrantSDKType } from "./feegrant";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequest {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
export interface QueryAllowanceRequestProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest";
    value: Uint8Array;
}
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequestAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
export interface QueryAllowanceRequestAminoMsg {
    type: "cosmos-sdk/QueryAllowanceRequest";
    value: QueryAllowanceRequestAmino;
}
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequestSDKType {
    granter: string;
    grantee: string;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponse {
    /** allowance is a allowance granted for grantee by granter. */
    allowance: Grant | undefined;
}
export interface QueryAllowanceResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse";
    value: Uint8Array;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponseAmino {
    /** allowance is a allowance granted for grantee by granter. */
    allowance?: GrantAmino | undefined;
}
export interface QueryAllowanceResponseAminoMsg {
    type: "cosmos-sdk/QueryAllowanceResponse";
    value: QueryAllowanceResponseAmino;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponseSDKType {
    allowance: GrantSDKType | undefined;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequest {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination: PageRequest | undefined;
}
export interface QueryAllowancesRequestProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest";
    value: Uint8Array;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequestAmino {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryAllowancesRequestAminoMsg {
    type: "cosmos-sdk/QueryAllowancesRequest";
    value: QueryAllowancesRequestAmino;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequestSDKType {
    grantee: string;
    pagination: PageRequestSDKType | undefined;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponse {
    /** allowances are allowance's granted for grantee by granter. */
    allowances: Grant[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse | undefined;
}
export interface QueryAllowancesResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse";
    value: Uint8Array;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponseAmino {
    /** allowances are allowance's granted for grantee by granter. */
    allowances: GrantAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryAllowancesResponseAminoMsg {
    type: "cosmos-sdk/QueryAllowancesResponse";
    value: QueryAllowancesResponseAmino;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponseSDKType {
    allowances: GrantSDKType[];
    pagination: PageResponseSDKType | undefined;
}
/** QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterRequest {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination: PageRequest | undefined;
}
export interface QueryAllowancesByGranterRequestProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest";
    value: Uint8Array;
}
/** QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterRequestAmino {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryAllowancesByGranterRequestAminoMsg {
    type: "cosmos-sdk/QueryAllowancesByGranterRequest";
    value: QueryAllowancesByGranterRequestAmino;
}
/** QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterRequestSDKType {
    granter: string;
    pagination: PageRequestSDKType | undefined;
}
/** QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterResponse {
    /** allowances that have been issued by the granter. */
    allowances: Grant[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse | undefined;
}
export interface QueryAllowancesByGranterResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse";
    value: Uint8Array;
}
/** QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterResponseAmino {
    /** allowances that have been issued by the granter. */
    allowances: GrantAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryAllowancesByGranterResponseAminoMsg {
    type: "cosmos-sdk/QueryAllowancesByGranterResponse";
    value: QueryAllowancesByGranterResponseAmino;
}
/** QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterResponseSDKType {
    allowances: GrantSDKType[];
    pagination: PageResponseSDKType | undefined;
}
export declare const QueryAllowanceRequest: {
    encode(message: QueryAllowanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowanceRequest;
    fromPartial(object: DeepPartial<QueryAllowanceRequest>): QueryAllowanceRequest;
    fromAmino(object: QueryAllowanceRequestAmino): QueryAllowanceRequest;
    toAmino(message: QueryAllowanceRequest): QueryAllowanceRequestAmino;
    fromAminoMsg(object: QueryAllowanceRequestAminoMsg): QueryAllowanceRequest;
    toAminoMsg(message: QueryAllowanceRequest): QueryAllowanceRequestAminoMsg;
    fromProtoMsg(message: QueryAllowanceRequestProtoMsg): QueryAllowanceRequest;
    toProto(message: QueryAllowanceRequest): Uint8Array;
    toProtoMsg(message: QueryAllowanceRequest): QueryAllowanceRequestProtoMsg;
};
export declare const QueryAllowanceResponse: {
    encode(message: QueryAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowanceResponse;
    fromPartial(object: DeepPartial<QueryAllowanceResponse>): QueryAllowanceResponse;
    fromAmino(object: QueryAllowanceResponseAmino): QueryAllowanceResponse;
    toAmino(message: QueryAllowanceResponse): QueryAllowanceResponseAmino;
    fromAminoMsg(object: QueryAllowanceResponseAminoMsg): QueryAllowanceResponse;
    toAminoMsg(message: QueryAllowanceResponse): QueryAllowanceResponseAminoMsg;
    fromProtoMsg(message: QueryAllowanceResponseProtoMsg): QueryAllowanceResponse;
    toProto(message: QueryAllowanceResponse): Uint8Array;
    toProtoMsg(message: QueryAllowanceResponse): QueryAllowanceResponseProtoMsg;
};
export declare const QueryAllowancesRequest: {
    encode(message: QueryAllowancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesRequest;
    fromPartial(object: DeepPartial<QueryAllowancesRequest>): QueryAllowancesRequest;
    fromAmino(object: QueryAllowancesRequestAmino): QueryAllowancesRequest;
    toAmino(message: QueryAllowancesRequest): QueryAllowancesRequestAmino;
    fromAminoMsg(object: QueryAllowancesRequestAminoMsg): QueryAllowancesRequest;
    toAminoMsg(message: QueryAllowancesRequest): QueryAllowancesRequestAminoMsg;
    fromProtoMsg(message: QueryAllowancesRequestProtoMsg): QueryAllowancesRequest;
    toProto(message: QueryAllowancesRequest): Uint8Array;
    toProtoMsg(message: QueryAllowancesRequest): QueryAllowancesRequestProtoMsg;
};
export declare const QueryAllowancesResponse: {
    encode(message: QueryAllowancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesResponse;
    fromPartial(object: DeepPartial<QueryAllowancesResponse>): QueryAllowancesResponse;
    fromAmino(object: QueryAllowancesResponseAmino): QueryAllowancesResponse;
    toAmino(message: QueryAllowancesResponse): QueryAllowancesResponseAmino;
    fromAminoMsg(object: QueryAllowancesResponseAminoMsg): QueryAllowancesResponse;
    toAminoMsg(message: QueryAllowancesResponse): QueryAllowancesResponseAminoMsg;
    fromProtoMsg(message: QueryAllowancesResponseProtoMsg): QueryAllowancesResponse;
    toProto(message: QueryAllowancesResponse): Uint8Array;
    toProtoMsg(message: QueryAllowancesResponse): QueryAllowancesResponseProtoMsg;
};
export declare const QueryAllowancesByGranterRequest: {
    encode(message: QueryAllowancesByGranterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesByGranterRequest;
    fromPartial(object: DeepPartial<QueryAllowancesByGranterRequest>): QueryAllowancesByGranterRequest;
    fromAmino(object: QueryAllowancesByGranterRequestAmino): QueryAllowancesByGranterRequest;
    toAmino(message: QueryAllowancesByGranterRequest): QueryAllowancesByGranterRequestAmino;
    fromAminoMsg(object: QueryAllowancesByGranterRequestAminoMsg): QueryAllowancesByGranterRequest;
    toAminoMsg(message: QueryAllowancesByGranterRequest): QueryAllowancesByGranterRequestAminoMsg;
    fromProtoMsg(message: QueryAllowancesByGranterRequestProtoMsg): QueryAllowancesByGranterRequest;
    toProto(message: QueryAllowancesByGranterRequest): Uint8Array;
    toProtoMsg(message: QueryAllowancesByGranterRequest): QueryAllowancesByGranterRequestProtoMsg;
};
export declare const QueryAllowancesByGranterResponse: {
    encode(message: QueryAllowancesByGranterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesByGranterResponse;
    fromPartial(object: DeepPartial<QueryAllowancesByGranterResponse>): QueryAllowancesByGranterResponse;
    fromAmino(object: QueryAllowancesByGranterResponseAmino): QueryAllowancesByGranterResponse;
    toAmino(message: QueryAllowancesByGranterResponse): QueryAllowancesByGranterResponseAmino;
    fromAminoMsg(object: QueryAllowancesByGranterResponseAminoMsg): QueryAllowancesByGranterResponse;
    toAminoMsg(message: QueryAllowancesByGranterResponse): QueryAllowancesByGranterResponseAminoMsg;
    fromProtoMsg(message: QueryAllowancesByGranterResponseProtoMsg): QueryAllowancesByGranterResponse;
    toProto(message: QueryAllowancesByGranterResponse): Uint8Array;
    toProtoMsg(message: QueryAllowancesByGranterResponse): QueryAllowancesByGranterResponseProtoMsg;
};
