/// <reference types="long" />
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * DEPRECATED:
 * For easier management, we moved the WithdrawAndMintProposal to tx based
 * minting. The withdrawal address specified in the dFract module parameters is
 * the one authorized to withdraw and mint udfr tokens based on the
 * micro mint rate
 */
export interface WithdrawAndMintProposal {
    title: string;
    description: string;
    withdrawalAddress: string;
    microMintRate: Long;
}
export interface WithdrawAndMintProposalProtoMsg {
    typeUrl: "/lum.network.dfract.WithdrawAndMintProposal";
    value: Uint8Array;
}
/**
 * DEPRECATED:
 * For easier management, we moved the WithdrawAndMintProposal to tx based
 * minting. The withdrawal address specified in the dFract module parameters is
 * the one authorized to withdraw and mint udfr tokens based on the
 * micro mint rate
 */
export interface WithdrawAndMintProposalAmino {
    title: string;
    description: string;
    withdrawal_address: string;
    micro_mint_rate: string;
}
export interface WithdrawAndMintProposalAminoMsg {
    type: "/lum.network.dfract.WithdrawAndMintProposal";
    value: WithdrawAndMintProposalAmino;
}
/**
 * DEPRECATED:
 * For easier management, we moved the WithdrawAndMintProposal to tx based
 * minting. The withdrawal address specified in the dFract module parameters is
 * the one authorized to withdraw and mint udfr tokens based on the
 * micro mint rate
 */
export interface WithdrawAndMintProposalSDKType {
    title: string;
    description: string;
    withdrawal_address: string;
    micro_mint_rate: Long;
}
export declare const WithdrawAndMintProposal: {
    encode(message: WithdrawAndMintProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawAndMintProposal;
    fromPartial(object: DeepPartial<WithdrawAndMintProposal>): WithdrawAndMintProposal;
    fromAmino(object: WithdrawAndMintProposalAmino): WithdrawAndMintProposal;
    toAmino(message: WithdrawAndMintProposal): WithdrawAndMintProposalAmino;
    fromAminoMsg(object: WithdrawAndMintProposalAminoMsg): WithdrawAndMintProposal;
    fromProtoMsg(message: WithdrawAndMintProposalProtoMsg): WithdrawAndMintProposal;
    toProto(message: WithdrawAndMintProposal): Uint8Array;
    toProtoMsg(message: WithdrawAndMintProposal): WithdrawAndMintProposalProtoMsg;
};
