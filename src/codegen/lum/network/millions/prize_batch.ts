import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PrizeBatch {
  poolPercent: Long;
  quantity: Long;
  drawProbability: string;
  isUnique: boolean;
}
export interface PrizeBatchProtoMsg {
  typeUrl: "/lum.network.millions.PrizeBatch";
  value: Uint8Array;
}
export interface PrizeBatchAmino {
  pool_percent: string;
  quantity: string;
  draw_probability: string;
  is_unique: boolean;
}
export interface PrizeBatchAminoMsg {
  type: "/lum.network.millions.PrizeBatch";
  value: PrizeBatchAmino;
}
export interface PrizeBatchSDKType {
  pool_percent: Long;
  quantity: Long;
  draw_probability: string;
  is_unique: boolean;
}
function createBasePrizeBatch(): PrizeBatch {
  return {
    poolPercent: Long.UZERO,
    quantity: Long.UZERO,
    drawProbability: "",
    isUnique: false
  };
}
export const PrizeBatch = {
  encode(message: PrizeBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolPercent.isZero()) {
      writer.uint32(8).uint64(message.poolPercent);
    }
    if (!message.quantity.isZero()) {
      writer.uint32(16).uint64(message.quantity);
    }
    if (message.drawProbability !== "") {
      writer.uint32(26).string(message.drawProbability);
    }
    if (message.isUnique === true) {
      writer.uint32(32).bool(message.isUnique);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PrizeBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrizeBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolPercent = (reader.uint64() as Long);
          break;
        case 2:
          message.quantity = (reader.uint64() as Long);
          break;
        case 3:
          message.drawProbability = reader.string();
          break;
        case 4:
          message.isUnique = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PrizeBatch>): PrizeBatch {
    const message = createBasePrizeBatch();
    message.poolPercent = object.poolPercent !== undefined && object.poolPercent !== null ? Long.fromValue(object.poolPercent) : Long.UZERO;
    message.quantity = object.quantity !== undefined && object.quantity !== null ? Long.fromValue(object.quantity) : Long.UZERO;
    message.drawProbability = object.drawProbability ?? "";
    message.isUnique = object.isUnique ?? false;
    return message;
  },
  fromAmino(object: PrizeBatchAmino): PrizeBatch {
    return {
      poolPercent: Long.fromString(object.pool_percent),
      quantity: Long.fromString(object.quantity),
      drawProbability: object.draw_probability,
      isUnique: object.is_unique
    };
  },
  toAmino(message: PrizeBatch): PrizeBatchAmino {
    const obj: any = {};
    obj.pool_percent = message.poolPercent ? message.poolPercent.toString() : undefined;
    obj.quantity = message.quantity ? message.quantity.toString() : undefined;
    obj.draw_probability = message.drawProbability;
    obj.is_unique = message.isUnique;
    return obj;
  },
  fromAminoMsg(object: PrizeBatchAminoMsg): PrizeBatch {
    return PrizeBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: PrizeBatchProtoMsg): PrizeBatch {
    return PrizeBatch.decode(message.value);
  },
  toProto(message: PrizeBatch): Uint8Array {
    return PrizeBatch.encode(message).finish();
  },
  toProtoMsg(message: PrizeBatch): PrizeBatchProtoMsg {
    return {
      typeUrl: "/lum.network.millions.PrizeBatch",
      value: PrizeBatch.encode(message).finish()
    };
  }
};