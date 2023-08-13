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
function createBaseWithdrawAndMintProposal(): WithdrawAndMintProposal {
  return {
    title: "",
    description: "",
    withdrawalAddress: "",
    microMintRate: Long.ZERO
  };
}
export const WithdrawAndMintProposal = {
  encode(message: WithdrawAndMintProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.withdrawalAddress !== "") {
      writer.uint32(26).string(message.withdrawalAddress);
    }
    if (!message.microMintRate.isZero()) {
      writer.uint32(32).int64(message.microMintRate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawAndMintProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawAndMintProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.withdrawalAddress = reader.string();
          break;
        case 4:
          message.microMintRate = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<WithdrawAndMintProposal>): WithdrawAndMintProposal {
    const message = createBaseWithdrawAndMintProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.withdrawalAddress = object.withdrawalAddress ?? "";
    message.microMintRate = object.microMintRate !== undefined && object.microMintRate !== null ? Long.fromValue(object.microMintRate) : Long.ZERO;
    return message;
  },
  fromAmino(object: WithdrawAndMintProposalAmino): WithdrawAndMintProposal {
    return {
      title: object.title,
      description: object.description,
      withdrawalAddress: object.withdrawal_address,
      microMintRate: Long.fromString(object.micro_mint_rate)
    };
  },
  toAmino(message: WithdrawAndMintProposal): WithdrawAndMintProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.withdrawal_address = message.withdrawalAddress;
    obj.micro_mint_rate = message.microMintRate ? message.microMintRate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: WithdrawAndMintProposalAminoMsg): WithdrawAndMintProposal {
    return WithdrawAndMintProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: WithdrawAndMintProposalProtoMsg): WithdrawAndMintProposal {
    return WithdrawAndMintProposal.decode(message.value);
  },
  toProto(message: WithdrawAndMintProposal): Uint8Array {
    return WithdrawAndMintProposal.encode(message).finish();
  },
  toProtoMsg(message: WithdrawAndMintProposal): WithdrawAndMintProposalProtoMsg {
    return {
      typeUrl: "/lum.network.dfract.WithdrawAndMintProposal",
      value: WithdrawAndMintProposal.encode(message).finish()
    };
  }
};