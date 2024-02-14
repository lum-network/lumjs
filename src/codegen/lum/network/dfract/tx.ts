import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface MsgDeposit {
  depositorAddress: string;
  amount: Coin | undefined;
}
export interface MsgDepositProtoMsg {
  typeUrl: "/lum.network.dfract.MsgDeposit";
  value: Uint8Array;
}
export interface MsgDepositAmino {
  depositor_address?: string;
  amount?: CoinAmino | undefined;
}
export interface MsgDepositAminoMsg {
  type: "/lum.network.dfract.MsgDeposit";
  value: MsgDepositAmino;
}
export interface MsgDepositSDKType {
  depositor_address: string;
  amount: CoinSDKType | undefined;
}
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/lum.network.dfract.MsgDepositResponse";
  value: Uint8Array;
}
export interface MsgDepositResponseAmino {}
export interface MsgDepositResponseAminoMsg {
  type: "/lum.network.dfract.MsgDepositResponse";
  value: MsgDepositResponseAmino;
}
export interface MsgDepositResponseSDKType {}
export interface MsgWithdrawAndMint {
  address: string;
  microMintRate: bigint;
}
export interface MsgWithdrawAndMintProtoMsg {
  typeUrl: "/lum.network.dfract.MsgWithdrawAndMint";
  value: Uint8Array;
}
export interface MsgWithdrawAndMintAmino {
  address?: string;
  micro_mint_rate?: string;
}
export interface MsgWithdrawAndMintAminoMsg {
  type: "/lum.network.dfract.MsgWithdrawAndMint";
  value: MsgWithdrawAndMintAmino;
}
export interface MsgWithdrawAndMintSDKType {
  address: string;
  micro_mint_rate: bigint;
}
export interface MsgWithdrawAndMintResponse {}
export interface MsgWithdrawAndMintResponseProtoMsg {
  typeUrl: "/lum.network.dfract.MsgWithdrawAndMintResponse";
  value: Uint8Array;
}
export interface MsgWithdrawAndMintResponseAmino {}
export interface MsgWithdrawAndMintResponseAminoMsg {
  type: "/lum.network.dfract.MsgWithdrawAndMintResponse";
  value: MsgWithdrawAndMintResponseAmino;
}
export interface MsgWithdrawAndMintResponseSDKType {}
function createBaseMsgDeposit(): MsgDeposit {
  return {
    depositorAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgDeposit = {
  typeUrl: "/lum.network.dfract.MsgDeposit",
  encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositorAddress !== "") {
      writer.uint32(10).string(message.depositorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositorAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.depositorAddress = object.depositorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    const message = createBaseMsgDeposit();
    if (object.depositor_address !== undefined && object.depositor_address !== null) {
      message.depositorAddress = object.depositor_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.depositor_address = message.depositorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit {
    return MsgDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit {
    return MsgDeposit.decode(message.value);
  },
  toProto(message: MsgDeposit): Uint8Array {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg {
    return {
      typeUrl: "/lum.network.dfract.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  typeUrl: "/lum.network.dfract.MsgDepositResponse",
  encode(_: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
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
  fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  toAmino(_: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
    return MsgDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message: MsgDepositResponse): Uint8Array {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg {
    return {
      typeUrl: "/lum.network.dfract.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawAndMint(): MsgWithdrawAndMint {
  return {
    address: "",
    microMintRate: BigInt(0)
  };
}
export const MsgWithdrawAndMint = {
  typeUrl: "/lum.network.dfract.MsgWithdrawAndMint",
  encode(message: MsgWithdrawAndMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.microMintRate !== BigInt(0)) {
      writer.uint32(16).int64(message.microMintRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAndMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAndMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.microMintRate = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawAndMint>): MsgWithdrawAndMint {
    const message = createBaseMsgWithdrawAndMint();
    message.address = object.address ?? "";
    message.microMintRate = object.microMintRate !== undefined && object.microMintRate !== null ? BigInt(object.microMintRate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgWithdrawAndMintAmino): MsgWithdrawAndMint {
    const message = createBaseMsgWithdrawAndMint();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.micro_mint_rate !== undefined && object.micro_mint_rate !== null) {
      message.microMintRate = BigInt(object.micro_mint_rate);
    }
    return message;
  },
  toAmino(message: MsgWithdrawAndMint): MsgWithdrawAndMintAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.micro_mint_rate = message.microMintRate ? message.microMintRate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAndMintAminoMsg): MsgWithdrawAndMint {
    return MsgWithdrawAndMint.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawAndMintProtoMsg): MsgWithdrawAndMint {
    return MsgWithdrawAndMint.decode(message.value);
  },
  toProto(message: MsgWithdrawAndMint): Uint8Array {
    return MsgWithdrawAndMint.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawAndMint): MsgWithdrawAndMintProtoMsg {
    return {
      typeUrl: "/lum.network.dfract.MsgWithdrawAndMint",
      value: MsgWithdrawAndMint.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawAndMintResponse(): MsgWithdrawAndMintResponse {
  return {};
}
export const MsgWithdrawAndMintResponse = {
  typeUrl: "/lum.network.dfract.MsgWithdrawAndMintResponse",
  encode(_: MsgWithdrawAndMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAndMintResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAndMintResponse();
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
  fromPartial(_: Partial<MsgWithdrawAndMintResponse>): MsgWithdrawAndMintResponse {
    const message = createBaseMsgWithdrawAndMintResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawAndMintResponseAmino): MsgWithdrawAndMintResponse {
    const message = createBaseMsgWithdrawAndMintResponse();
    return message;
  },
  toAmino(_: MsgWithdrawAndMintResponse): MsgWithdrawAndMintResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAndMintResponseAminoMsg): MsgWithdrawAndMintResponse {
    return MsgWithdrawAndMintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawAndMintResponseProtoMsg): MsgWithdrawAndMintResponse {
    return MsgWithdrawAndMintResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawAndMintResponse): Uint8Array {
    return MsgWithdrawAndMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawAndMintResponse): MsgWithdrawAndMintResponseProtoMsg {
    return {
      typeUrl: "/lum.network.dfract.MsgWithdrawAndMintResponse",
      value: MsgWithdrawAndMintResponse.encode(message).finish()
    };
  }
};