import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
export interface PrizeBatch {
  poolPercent: bigint;
  quantity: bigint;
  drawProbability: string;
  isUnique: boolean;
}
export interface PrizeBatchProtoMsg {
  typeUrl: "/lum.network.millions.PrizeBatch";
  value: Uint8Array;
}
export interface PrizeBatchAmino {
  pool_percent?: string;
  quantity?: string;
  draw_probability?: string;
  is_unique?: boolean;
}
export interface PrizeBatchAminoMsg {
  type: "/lum.network.millions.PrizeBatch";
  value: PrizeBatchAmino;
}
export interface PrizeBatchSDKType {
  pool_percent: bigint;
  quantity: bigint;
  draw_probability: string;
  is_unique: boolean;
}
function createBasePrizeBatch(): PrizeBatch {
  return {
    poolPercent: BigInt(0),
    quantity: BigInt(0),
    drawProbability: "",
    isUnique: false
  };
}
export const PrizeBatch = {
  typeUrl: "/lum.network.millions.PrizeBatch",
  encode(message: PrizeBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolPercent !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolPercent);
    }
    if (message.quantity !== BigInt(0)) {
      writer.uint32(16).uint64(message.quantity);
    }
    if (message.drawProbability !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.drawProbability, 18).atomics);
    }
    if (message.isUnique === true) {
      writer.uint32(32).bool(message.isUnique);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrizeBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrizeBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolPercent = reader.uint64();
          break;
        case 2:
          message.quantity = reader.uint64();
          break;
        case 3:
          message.drawProbability = Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromPartial(object: Partial<PrizeBatch>): PrizeBatch {
    const message = createBasePrizeBatch();
    message.poolPercent = object.poolPercent !== undefined && object.poolPercent !== null ? BigInt(object.poolPercent.toString()) : BigInt(0);
    message.quantity = object.quantity !== undefined && object.quantity !== null ? BigInt(object.quantity.toString()) : BigInt(0);
    message.drawProbability = object.drawProbability ?? "";
    message.isUnique = object.isUnique ?? false;
    return message;
  },
  fromAmino(object: PrizeBatchAmino): PrizeBatch {
    const message = createBasePrizeBatch();
    if (object.pool_percent !== undefined && object.pool_percent !== null) {
      message.poolPercent = BigInt(object.pool_percent);
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = BigInt(object.quantity);
    }
    if (object.draw_probability !== undefined && object.draw_probability !== null) {
      message.drawProbability = object.draw_probability;
    }
    if (object.is_unique !== undefined && object.is_unique !== null) {
      message.isUnique = object.is_unique;
    }
    return message;
  },
  toAmino(message: PrizeBatch): PrizeBatchAmino {
    const obj: any = {};
    obj.pool_percent = message.poolPercent !== BigInt(0) ? message.poolPercent.toString() : undefined;
    obj.quantity = message.quantity !== BigInt(0) ? message.quantity.toString() : undefined;
    obj.draw_probability = message.drawProbability === "" ? undefined : message.drawProbability;
    obj.is_unique = message.isUnique === false ? undefined : message.isUnique;
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