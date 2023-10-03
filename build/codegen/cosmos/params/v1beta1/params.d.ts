import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
    title: string;
    description: string;
    changes: ParamChange[];
}
export interface ParameterChangeProposalProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal";
    value: Uint8Array;
}
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposalAmino {
    title: string;
    description: string;
    changes: ParamChangeAmino[];
}
export interface ParameterChangeProposalAminoMsg {
    type: "cosmos-sdk/ParameterChangeProposal";
    value: ParameterChangeProposalAmino;
}
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposalSDKType {
    title: string;
    description: string;
    changes: ParamChangeSDKType[];
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChange {
    subspace: string;
    key: string;
    value: string;
}
export interface ParamChangeProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.ParamChange";
    value: Uint8Array;
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChangeAmino {
    subspace: string;
    key: string;
    value: string;
}
export interface ParamChangeAminoMsg {
    type: "cosmos-sdk/ParamChange";
    value: ParamChangeAmino;
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChangeSDKType {
    subspace: string;
    key: string;
    value: string;
}
export declare const ParameterChangeProposal: {
    encode(message: ParameterChangeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParameterChangeProposal;
    fromPartial(object: DeepPartial<ParameterChangeProposal>): ParameterChangeProposal;
    fromAmino(object: ParameterChangeProposalAmino): ParameterChangeProposal;
    toAmino(message: ParameterChangeProposal): ParameterChangeProposalAmino;
    fromAminoMsg(object: ParameterChangeProposalAminoMsg): ParameterChangeProposal;
    toAminoMsg(message: ParameterChangeProposal): ParameterChangeProposalAminoMsg;
    fromProtoMsg(message: ParameterChangeProposalProtoMsg): ParameterChangeProposal;
    toProto(message: ParameterChangeProposal): Uint8Array;
    toProtoMsg(message: ParameterChangeProposal): ParameterChangeProposalProtoMsg;
};
export declare const ParamChange: {
    encode(message: ParamChange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamChange;
    fromPartial(object: DeepPartial<ParamChange>): ParamChange;
    fromAmino(object: ParamChangeAmino): ParamChange;
    toAmino(message: ParamChange): ParamChangeAmino;
    fromAminoMsg(object: ParamChangeAminoMsg): ParamChange;
    toAminoMsg(message: ParamChange): ParamChangeAminoMsg;
    fromProtoMsg(message: ParamChangeProtoMsg): ParamChange;
    toProto(message: ParamChange): Uint8Array;
    toProtoMsg(message: ParamChange): ParamChangeProtoMsg;
};
