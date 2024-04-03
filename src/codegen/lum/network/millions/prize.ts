import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
export enum PrizeState {
  PRIZE_STATE_UNSPECIFIED = 0,
  PRIZE_STATE_PENDING = 1,
  UNRECOGNIZED = -1,
}
export const PrizeStateSDKType = PrizeState;
export const PrizeStateAmino = PrizeState;
export function prizeStateFromJSON(object: any): PrizeState {
  switch (object) {
    case 0:
    case "PRIZE_STATE_UNSPECIFIED":
      return PrizeState.PRIZE_STATE_UNSPECIFIED;
    case 1:
    case "PRIZE_STATE_PENDING":
      return PrizeState.PRIZE_STATE_PENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PrizeState.UNRECOGNIZED;
  }
}
export function prizeStateToJSON(object: PrizeState): string {
  switch (object) {
    case PrizeState.PRIZE_STATE_UNSPECIFIED:
      return "PRIZE_STATE_UNSPECIFIED";
    case PrizeState.PRIZE_STATE_PENDING:
      return "PRIZE_STATE_PENDING";
    case PrizeState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Prize {
  poolId: bigint;
  drawId: bigint;
  prizeId: bigint;
  state: PrizeState;
  winnerAddress: string;
  amount: Coin | undefined;
  createdAtHeight: bigint;
  updatedAtHeight: bigint;
  expiresAt: Date | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}
export interface PrizeProtoMsg {
  typeUrl: "/lum.network.millions.Prize";
  value: Uint8Array;
}
export interface PrizeAmino {
  pool_id?: string;
  draw_id?: string;
  prize_id?: string;
  state?: PrizeState;
  winner_address?: string;
  amount?: CoinAmino | undefined;
  created_at_height?: string;
  updated_at_height?: string;
  expires_at?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
}
export interface PrizeAminoMsg {
  type: "/lum.network.millions.Prize";
  value: PrizeAmino;
}
export interface PrizeSDKType {
  pool_id: bigint;
  draw_id: bigint;
  prize_id: bigint;
  state: PrizeState;
  winner_address: string;
  amount: CoinSDKType | undefined;
  created_at_height: bigint;
  updated_at_height: bigint;
  expires_at: Date | undefined;
  created_at: Date | undefined;
  updated_at: Date | undefined;
}
export interface PrizeIDs {
  poolId: bigint;
  drawId: bigint;
  prizeId: bigint;
}
export interface PrizeIDsProtoMsg {
  typeUrl: "/lum.network.millions.PrizeIDs";
  value: Uint8Array;
}
export interface PrizeIDsAmino {
  pool_id?: string;
  draw_id?: string;
  prize_id?: string;
}
export interface PrizeIDsAminoMsg {
  type: "/lum.network.millions.PrizeIDs";
  value: PrizeIDsAmino;
}
export interface PrizeIDsSDKType {
  pool_id: bigint;
  draw_id: bigint;
  prize_id: bigint;
}
export interface PrizeIDsCollection {
  prizesIds: PrizeIDs[];
}
export interface PrizeIDsCollectionProtoMsg {
  typeUrl: "/lum.network.millions.PrizeIDsCollection";
  value: Uint8Array;
}
export interface PrizeIDsCollectionAmino {
  prizes_ids?: PrizeIDsAmino[];
}
export interface PrizeIDsCollectionAminoMsg {
  type: "/lum.network.millions.PrizeIDsCollection";
  value: PrizeIDsCollectionAmino;
}
export interface PrizeIDsCollectionSDKType {
  prizes_ids: PrizeIDsSDKType[];
}
function createBasePrize(): Prize {
  return {
    poolId: BigInt(0),
    drawId: BigInt(0),
    prizeId: BigInt(0),
    state: 0,
    winnerAddress: "",
    amount: Coin.fromPartial({}),
    createdAtHeight: BigInt(0),
    updatedAtHeight: BigInt(0),
    expiresAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
export const Prize = {
  typeUrl: "/lum.network.millions.Prize",
  encode(message: Prize, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.drawId !== BigInt(0)) {
      writer.uint32(16).uint64(message.drawId);
    }
    if (message.prizeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.prizeId);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.winnerAddress !== "") {
      writer.uint32(42).string(message.winnerAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAtHeight !== BigInt(0)) {
      writer.uint32(56).int64(message.createdAtHeight);
    }
    if (message.updatedAtHeight !== BigInt(0)) {
      writer.uint32(64).int64(message.updatedAtHeight);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(74).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Prize {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.drawId = reader.uint64();
          break;
        case 3:
          message.prizeId = reader.uint64();
          break;
        case 4:
          message.state = (reader.int32() as any);
          break;
        case 5:
          message.winnerAddress = reader.string();
          break;
        case 6:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.createdAtHeight = reader.int64();
          break;
        case 8:
          message.updatedAtHeight = reader.int64();
          break;
        case 9:
          message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 11:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Prize>): Prize {
    const message = createBasePrize();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.drawId = object.drawId !== undefined && object.drawId !== null ? BigInt(object.drawId.toString()) : BigInt(0);
    message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? BigInt(object.prizeId.toString()) : BigInt(0);
    message.state = object.state ?? 0;
    message.winnerAddress = object.winnerAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? BigInt(object.createdAtHeight.toString()) : BigInt(0);
    message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? BigInt(object.updatedAtHeight.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
  fromAmino(object: PrizeAmino): Prize {
    const message = createBasePrize();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.draw_id !== undefined && object.draw_id !== null) {
      message.drawId = BigInt(object.draw_id);
    }
    if (object.prize_id !== undefined && object.prize_id !== null) {
      message.prizeId = BigInt(object.prize_id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.winner_address !== undefined && object.winner_address !== null) {
      message.winnerAddress = object.winner_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.created_at_height !== undefined && object.created_at_height !== null) {
      message.createdAtHeight = BigInt(object.created_at_height);
    }
    if (object.updated_at_height !== undefined && object.updated_at_height !== null) {
      message.updatedAtHeight = BigInt(object.updated_at_height);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = fromTimestamp(Timestamp.fromAmino(object.expires_at));
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
    }
    if (object.updated_at !== undefined && object.updated_at !== null) {
      message.updatedAt = fromTimestamp(Timestamp.fromAmino(object.updated_at));
    }
    return message;
  },
  toAmino(message: Prize): PrizeAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.draw_id = message.drawId !== BigInt(0) ? message.drawId.toString() : undefined;
    obj.prize_id = message.prizeId !== BigInt(0) ? message.prizeId.toString() : undefined;
    obj.state = message.state === 0 ? undefined : message.state;
    obj.winner_address = message.winnerAddress === "" ? undefined : message.winnerAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.created_at_height = message.createdAtHeight !== BigInt(0) ? message.createdAtHeight.toString() : undefined;
    obj.updated_at_height = message.updatedAtHeight !== BigInt(0) ? message.updatedAtHeight.toString() : undefined;
    obj.expires_at = message.expiresAt ? Timestamp.toAmino(toTimestamp(message.expiresAt)) : undefined;
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    obj.updated_at = message.updatedAt ? Timestamp.toAmino(toTimestamp(message.updatedAt)) : undefined;
    return obj;
  },
  fromAminoMsg(object: PrizeAminoMsg): Prize {
    return Prize.fromAmino(object.value);
  },
  fromProtoMsg(message: PrizeProtoMsg): Prize {
    return Prize.decode(message.value);
  },
  toProto(message: Prize): Uint8Array {
    return Prize.encode(message).finish();
  },
  toProtoMsg(message: Prize): PrizeProtoMsg {
    return {
      typeUrl: "/lum.network.millions.Prize",
      value: Prize.encode(message).finish()
    };
  }
};
function createBasePrizeIDs(): PrizeIDs {
  return {
    poolId: BigInt(0),
    drawId: BigInt(0),
    prizeId: BigInt(0)
  };
}
export const PrizeIDs = {
  typeUrl: "/lum.network.millions.PrizeIDs",
  encode(message: PrizeIDs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.drawId !== BigInt(0)) {
      writer.uint32(16).uint64(message.drawId);
    }
    if (message.prizeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.prizeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrizeIDs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrizeIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.drawId = reader.uint64();
          break;
        case 3:
          message.prizeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PrizeIDs>): PrizeIDs {
    const message = createBasePrizeIDs();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.drawId = object.drawId !== undefined && object.drawId !== null ? BigInt(object.drawId.toString()) : BigInt(0);
    message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? BigInt(object.prizeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PrizeIDsAmino): PrizeIDs {
    const message = createBasePrizeIDs();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.draw_id !== undefined && object.draw_id !== null) {
      message.drawId = BigInt(object.draw_id);
    }
    if (object.prize_id !== undefined && object.prize_id !== null) {
      message.prizeId = BigInt(object.prize_id);
    }
    return message;
  },
  toAmino(message: PrizeIDs): PrizeIDsAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.draw_id = message.drawId !== BigInt(0) ? message.drawId.toString() : undefined;
    obj.prize_id = message.prizeId !== BigInt(0) ? message.prizeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PrizeIDsAminoMsg): PrizeIDs {
    return PrizeIDs.fromAmino(object.value);
  },
  fromProtoMsg(message: PrizeIDsProtoMsg): PrizeIDs {
    return PrizeIDs.decode(message.value);
  },
  toProto(message: PrizeIDs): Uint8Array {
    return PrizeIDs.encode(message).finish();
  },
  toProtoMsg(message: PrizeIDs): PrizeIDsProtoMsg {
    return {
      typeUrl: "/lum.network.millions.PrizeIDs",
      value: PrizeIDs.encode(message).finish()
    };
  }
};
function createBasePrizeIDsCollection(): PrizeIDsCollection {
  return {
    prizesIds: []
  };
}
export const PrizeIDsCollection = {
  typeUrl: "/lum.network.millions.PrizeIDsCollection",
  encode(message: PrizeIDsCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prizesIds) {
      PrizeIDs.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrizeIDsCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrizeIDsCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prizesIds.push(PrizeIDs.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PrizeIDsCollection>): PrizeIDsCollection {
    const message = createBasePrizeIDsCollection();
    message.prizesIds = object.prizesIds?.map(e => PrizeIDs.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PrizeIDsCollectionAmino): PrizeIDsCollection {
    const message = createBasePrizeIDsCollection();
    message.prizesIds = object.prizes_ids?.map(e => PrizeIDs.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PrizeIDsCollection): PrizeIDsCollectionAmino {
    const obj: any = {};
    if (message.prizesIds) {
      obj.prizes_ids = message.prizesIds.map(e => e ? PrizeIDs.toAmino(e) : undefined);
    } else {
      obj.prizes_ids = message.prizesIds;
    }
    return obj;
  },
  fromAminoMsg(object: PrizeIDsCollectionAminoMsg): PrizeIDsCollection {
    return PrizeIDsCollection.fromAmino(object.value);
  },
  fromProtoMsg(message: PrizeIDsCollectionProtoMsg): PrizeIDsCollection {
    return PrizeIDsCollection.decode(message.value);
  },
  toProto(message: PrizeIDsCollection): Uint8Array {
    return PrizeIDsCollection.encode(message).finish();
  },
  toProtoMsg(message: PrizeIDsCollection): PrizeIDsCollectionProtoMsg {
    return {
      typeUrl: "/lum.network.millions.PrizeIDsCollection",
      value: PrizeIDsCollection.encode(message).finish()
    };
  }
};