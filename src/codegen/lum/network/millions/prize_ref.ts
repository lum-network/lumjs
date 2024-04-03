import { BinaryReader, BinaryWriter } from "../../../binary";
export interface PrizeRef {
  amount: string;
  prizeId?: bigint;
  winnerAddress?: string;
}
export interface PrizeRefProtoMsg {
  typeUrl: "/lum.network.millions.PrizeRef";
  value: Uint8Array;
}
export interface PrizeRefAmino {
  amount?: string;
  prize_id?: string;
  winner_address?: string;
}
export interface PrizeRefAminoMsg {
  type: "/lum.network.millions.PrizeRef";
  value: PrizeRefAmino;
}
export interface PrizeRefSDKType {
  amount: string;
  prize_id?: bigint;
  winner_address?: string;
}
function createBasePrizeRef(): PrizeRef {
  return {
    amount: "",
    prizeId: undefined,
    winnerAddress: undefined
  };
}
export const PrizeRef = {
  typeUrl: "/lum.network.millions.PrizeRef",
  encode(message: PrizeRef, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.prizeId !== undefined) {
      writer.uint32(16).uint64(message.prizeId);
    }
    if (message.winnerAddress !== undefined) {
      writer.uint32(26).string(message.winnerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrizeRef {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrizeRef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.prizeId = reader.uint64();
          break;
        case 3:
          message.winnerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PrizeRef>): PrizeRef {
    const message = createBasePrizeRef();
    message.amount = object.amount ?? "";
    message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? BigInt(object.prizeId.toString()) : undefined;
    message.winnerAddress = object.winnerAddress ?? undefined;
    return message;
  },
  fromAmino(object: PrizeRefAmino): PrizeRef {
    const message = createBasePrizeRef();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.prize_id !== undefined && object.prize_id !== null) {
      message.prizeId = BigInt(object.prize_id);
    }
    if (object.winner_address !== undefined && object.winner_address !== null) {
      message.winnerAddress = object.winner_address;
    }
    return message;
  },
  toAmino(message: PrizeRef): PrizeRefAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.prize_id = message.prizeId !== BigInt(0) ? message.prizeId.toString() : undefined;
    obj.winner_address = message.winnerAddress === null ? undefined : message.winnerAddress;
    return obj;
  },
  fromAminoMsg(object: PrizeRefAminoMsg): PrizeRef {
    return PrizeRef.fromAmino(object.value);
  },
  fromProtoMsg(message: PrizeRefProtoMsg): PrizeRef {
    return PrizeRef.decode(message.value);
  },
  toProto(message: PrizeRef): Uint8Array {
    return PrizeRef.encode(message).finish();
  },
  toProtoMsg(message: PrizeRef): PrizeRefProtoMsg {
    return {
      typeUrl: "/lum.network.millions.PrizeRef",
      value: PrizeRef.encode(message).finish()
    };
  }
};