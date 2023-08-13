import { PrizeBatch, PrizeBatchAmino, PrizeBatchSDKType } from "./prize_batch";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface PrizeStrategy {
  prizeBatches: PrizeBatch[];
}
export interface PrizeStrategyProtoMsg {
  typeUrl: "/lum.network.millions.PrizeStrategy";
  value: Uint8Array;
}
export interface PrizeStrategyAmino {
  prize_batches: PrizeBatchAmino[];
}
export interface PrizeStrategyAminoMsg {
  type: "/lum.network.millions.PrizeStrategy";
  value: PrizeStrategyAmino;
}
export interface PrizeStrategySDKType {
  prize_batches: PrizeBatchSDKType[];
}
function createBasePrizeStrategy(): PrizeStrategy {
  return {
    prizeBatches: []
  };
}
export const PrizeStrategy = {
  encode(message: PrizeStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.prizeBatches) {
      PrizeBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PrizeStrategy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrizeStrategy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prizeBatches.push(PrizeBatch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PrizeStrategy>): PrizeStrategy {
    const message = createBasePrizeStrategy();
    message.prizeBatches = object.prizeBatches?.map(e => PrizeBatch.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PrizeStrategyAmino): PrizeStrategy {
    return {
      prizeBatches: Array.isArray(object?.prize_batches) ? object.prize_batches.map((e: any) => PrizeBatch.fromAmino(e)) : []
    };
  },
  toAmino(message: PrizeStrategy): PrizeStrategyAmino {
    const obj: any = {};
    if (message.prizeBatches) {
      obj.prize_batches = message.prizeBatches.map(e => e ? PrizeBatch.toAmino(e) : undefined);
    } else {
      obj.prize_batches = [];
    }
    return obj;
  },
  fromAminoMsg(object: PrizeStrategyAminoMsg): PrizeStrategy {
    return PrizeStrategy.fromAmino(object.value);
  },
  fromProtoMsg(message: PrizeStrategyProtoMsg): PrizeStrategy {
    return PrizeStrategy.decode(message.value);
  },
  toProto(message: PrizeStrategy): Uint8Array {
    return PrizeStrategy.encode(message).finish();
  },
  toProtoMsg(message: PrizeStrategy): PrizeStrategyProtoMsg {
    return {
      typeUrl: "/lum.network.millions.PrizeStrategy",
      value: PrizeStrategy.encode(message).finish()
    };
  }
};