import { BinaryReader, BinaryWriter } from "../../../binary";
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
  microMintRate: bigint;
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
  title?: string;
  description?: string;
  withdrawal_address?: string;
  micro_mint_rate?: string;
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
  micro_mint_rate: bigint;
}
function createBaseWithdrawAndMintProposal(): WithdrawAndMintProposal {
  return {
    title: "",
    description: "",
    withdrawalAddress: "",
    microMintRate: BigInt(0)
  };
}
export const WithdrawAndMintProposal = {
  typeUrl: "/lum.network.dfract.WithdrawAndMintProposal",
  encode(message: WithdrawAndMintProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.withdrawalAddress !== "") {
      writer.uint32(26).string(message.withdrawalAddress);
    }
    if (message.microMintRate !== BigInt(0)) {
      writer.uint32(32).int64(message.microMintRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WithdrawAndMintProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.microMintRate = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WithdrawAndMintProposal>): WithdrawAndMintProposal {
    const message = createBaseWithdrawAndMintProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.withdrawalAddress = object.withdrawalAddress ?? "";
    message.microMintRate = object.microMintRate !== undefined && object.microMintRate !== null ? BigInt(object.microMintRate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: WithdrawAndMintProposalAmino): WithdrawAndMintProposal {
    const message = createBaseWithdrawAndMintProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.withdrawal_address !== undefined && object.withdrawal_address !== null) {
      message.withdrawalAddress = object.withdrawal_address;
    }
    if (object.micro_mint_rate !== undefined && object.micro_mint_rate !== null) {
      message.microMintRate = BigInt(object.micro_mint_rate);
    }
    return message;
  },
  toAmino(message: WithdrawAndMintProposal): WithdrawAndMintProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.withdrawal_address = message.withdrawalAddress === "" ? undefined : message.withdrawalAddress;
    obj.micro_mint_rate = message.microMintRate !== BigInt(0) ? message.microMintRate.toString() : undefined;
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