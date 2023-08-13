import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PrizeRef {
  amount: string;
  prizeId?: Long;
  winnerAddress?: string;
}
export interface PrizeRefProtoMsg {
  typeUrl: "/lum.network.millions.PrizeRef";
  value: Uint8Array;
}
export interface PrizeRefAmino {
  amount: string;
  prize_id: string;
  winner_address: string;
}
export interface PrizeRefAminoMsg {
  type: "/lum.network.millions.PrizeRef";
  value: PrizeRefAmino;
}
export interface PrizeRefSDKType {
  amount: string;
  prize_id?: Long;
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
  encode(message: PrizeRef, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): PrizeRef {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrizeRef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.prizeId = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<PrizeRef>): PrizeRef {
    const message = createBasePrizeRef();
    message.amount = object.amount ?? "";
    message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? Long.fromValue(object.prizeId) : undefined;
    message.winnerAddress = object.winnerAddress ?? undefined;
    return message;
  },
  fromAmino(object: PrizeRefAmino): PrizeRef {
    return {
      amount: object.amount,
      prizeId: object?.prize_id ? Long.fromString(object.prize_id) : undefined,
      winnerAddress: object?.winner_address
    };
  },
  toAmino(message: PrizeRef): PrizeRefAmino {
    const obj: any = {};
    obj.amount = message.amount;
    obj.prize_id = message.prizeId ? message.prizeId.toString() : undefined;
    obj.winner_address = message.winnerAddress;
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