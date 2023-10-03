/// <reference types="long" />
import { ProofOps, ProofOpsAmino, ProofOpsSDKType } from "../../../tendermint/crypto/proof";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponse {
    chainId: string;
    queryId: string;
    result: Uint8Array;
    proofOps: ProofOps | undefined;
    height: Long;
    fromAddress: string;
}
export interface MsgSubmitQueryResponseProtoMsg {
    typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse";
    value: Uint8Array;
}
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponseAmino {
    chain_id: string;
    query_id: string;
    result: Uint8Array;
    proof_ops?: ProofOpsAmino | undefined;
    height: string;
    from_address: string;
}
export interface MsgSubmitQueryResponseAminoMsg {
    type: "/stride.interchainquery.v1.MsgSubmitQueryResponse";
    value: MsgSubmitQueryResponseAmino;
}
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponseSDKType {
    chain_id: string;
    query_id: string;
    result: Uint8Array;
    proof_ops: ProofOpsSDKType | undefined;
    height: Long;
    from_address: string;
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponse {
}
export interface MsgSubmitQueryResponseResponseProtoMsg {
    typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponseResponse";
    value: Uint8Array;
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponseAmino {
}
export interface MsgSubmitQueryResponseResponseAminoMsg {
    type: "/stride.interchainquery.v1.MsgSubmitQueryResponseResponse";
    value: MsgSubmitQueryResponseResponseAmino;
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponseSDKType {
}
export declare const MsgSubmitQueryResponse: {
    encode(message: MsgSubmitQueryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitQueryResponse;
    fromPartial(object: DeepPartial<MsgSubmitQueryResponse>): MsgSubmitQueryResponse;
    fromAmino(object: MsgSubmitQueryResponseAmino): MsgSubmitQueryResponse;
    toAmino(message: MsgSubmitQueryResponse): MsgSubmitQueryResponseAmino;
    fromAminoMsg(object: MsgSubmitQueryResponseAminoMsg): MsgSubmitQueryResponse;
    fromProtoMsg(message: MsgSubmitQueryResponseProtoMsg): MsgSubmitQueryResponse;
    toProto(message: MsgSubmitQueryResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitQueryResponse): MsgSubmitQueryResponseProtoMsg;
};
export declare const MsgSubmitQueryResponseResponse: {
    encode(_: MsgSubmitQueryResponseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitQueryResponseResponse;
    fromPartial(_: DeepPartial<MsgSubmitQueryResponseResponse>): MsgSubmitQueryResponseResponse;
    fromAmino(_: MsgSubmitQueryResponseResponseAmino): MsgSubmitQueryResponseResponse;
    toAmino(_: MsgSubmitQueryResponseResponse): MsgSubmitQueryResponseResponseAmino;
    fromAminoMsg(object: MsgSubmitQueryResponseResponseAminoMsg): MsgSubmitQueryResponseResponse;
    fromProtoMsg(message: MsgSubmitQueryResponseResponseProtoMsg): MsgSubmitQueryResponseResponse;
    toProto(message: MsgSubmitQueryResponseResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitQueryResponseResponse): MsgSubmitQueryResponseResponseProtoMsg;
};
