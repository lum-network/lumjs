import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
export interface EpochUnbonding {
  epochIdentifier: string;
  epochNumber: bigint;
  poolId: bigint;
  withdrawalIds: bigint[];
  withdrawalIdsCount: bigint;
  totalAmount: Coin | undefined;
  /** metadata */
  createdAtHeight: bigint;
  updatedAtHeight: bigint;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}
export interface EpochUnbondingProtoMsg {
  typeUrl: "/lum.network.millions.EpochUnbonding";
  value: Uint8Array;
}
export interface EpochUnbondingAmino {
  epoch_identifier?: string;
  epoch_number?: string;
  pool_id?: string;
  withdrawal_ids?: string[];
  withdrawal_ids_count?: string;
  total_amount?: CoinAmino | undefined;
  /** metadata */
  created_at_height?: string;
  updated_at_height?: string;
  created_at?: string | undefined;
  updated_at?: string | undefined;
}
export interface EpochUnbondingAminoMsg {
  type: "/lum.network.millions.EpochUnbonding";
  value: EpochUnbondingAmino;
}
export interface EpochUnbondingSDKType {
  epoch_identifier: string;
  epoch_number: bigint;
  pool_id: bigint;
  withdrawal_ids: bigint[];
  withdrawal_ids_count: bigint;
  total_amount: CoinSDKType | undefined;
  created_at_height: bigint;
  updated_at_height: bigint;
  created_at: Date | undefined;
  updated_at: Date | undefined;
}
export interface EpochTracker {
  epochTrackerType: string;
  epochIdentifier: string;
  epochNumber: bigint;
  nextEpochNumber: bigint;
  previousEpochNumber: bigint;
  nextEpochStartTime: Date | undefined;
}
export interface EpochTrackerProtoMsg {
  typeUrl: "/lum.network.millions.EpochTracker";
  value: Uint8Array;
}
export interface EpochTrackerAmino {
  epoch_tracker_type?: string;
  epoch_identifier?: string;
  epoch_number?: string;
  next_epoch_number?: string;
  previous_epoch_number?: string;
  next_epoch_start_time?: string | undefined;
}
export interface EpochTrackerAminoMsg {
  type: "/lum.network.millions.EpochTracker";
  value: EpochTrackerAmino;
}
export interface EpochTrackerSDKType {
  epoch_tracker_type: string;
  epoch_identifier: string;
  epoch_number: bigint;
  next_epoch_number: bigint;
  previous_epoch_number: bigint;
  next_epoch_start_time: Date | undefined;
}
function createBaseEpochUnbonding(): EpochUnbonding {
  return {
    epochIdentifier: "",
    epochNumber: BigInt(0),
    poolId: BigInt(0),
    withdrawalIds: [],
    withdrawalIdsCount: BigInt(0),
    totalAmount: Coin.fromPartial({}),
    createdAtHeight: BigInt(0),
    updatedAtHeight: BigInt(0),
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
export const EpochUnbonding = {
  typeUrl: "/lum.network.millions.EpochUnbonding",
  encode(message: EpochUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochIdentifier !== "") {
      writer.uint32(10).string(message.epochIdentifier);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochNumber);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    writer.uint32(34).fork();
    for (const v of message.withdrawalIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.withdrawalIdsCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.withdrawalIdsCount);
    }
    if (message.totalAmount !== undefined) {
      Coin.encode(message.totalAmount, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAtHeight !== BigInt(0)) {
      writer.uint32(56).int64(message.createdAtHeight);
    }
    if (message.updatedAtHeight !== BigInt(0)) {
      writer.uint32(64).int64(message.updatedAtHeight);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochIdentifier = reader.string();
          break;
        case 2:
          message.epochNumber = reader.uint64();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.withdrawalIds.push(reader.uint64());
            }
          } else {
            message.withdrawalIds.push(reader.uint64());
          }
          break;
        case 5:
          message.withdrawalIdsCount = reader.uint64();
          break;
        case 6:
          message.totalAmount = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.createdAtHeight = reader.int64();
          break;
        case 8:
          message.updatedAtHeight = reader.int64();
          break;
        case 9:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EpochUnbonding>): EpochUnbonding {
    const message = createBaseEpochUnbonding();
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.withdrawalIds = object.withdrawalIds?.map(e => BigInt(e.toString())) || [];
    message.withdrawalIdsCount = object.withdrawalIdsCount !== undefined && object.withdrawalIdsCount !== null ? BigInt(object.withdrawalIdsCount.toString()) : BigInt(0);
    message.totalAmount = object.totalAmount !== undefined && object.totalAmount !== null ? Coin.fromPartial(object.totalAmount) : undefined;
    message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? BigInt(object.createdAtHeight.toString()) : BigInt(0);
    message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? BigInt(object.updatedAtHeight.toString()) : BigInt(0);
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
  fromAmino(object: EpochUnbondingAmino): EpochUnbonding {
    const message = createBaseEpochUnbonding();
    if (object.epoch_identifier !== undefined && object.epoch_identifier !== null) {
      message.epochIdentifier = object.epoch_identifier;
    }
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.withdrawalIds = object.withdrawal_ids?.map(e => BigInt(e)) || [];
    if (object.withdrawal_ids_count !== undefined && object.withdrawal_ids_count !== null) {
      message.withdrawalIdsCount = BigInt(object.withdrawal_ids_count);
    }
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.totalAmount = Coin.fromAmino(object.total_amount);
    }
    if (object.created_at_height !== undefined && object.created_at_height !== null) {
      message.createdAtHeight = BigInt(object.created_at_height);
    }
    if (object.updated_at_height !== undefined && object.updated_at_height !== null) {
      message.updatedAtHeight = BigInt(object.updated_at_height);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
    }
    if (object.updated_at !== undefined && object.updated_at !== null) {
      message.updatedAt = fromTimestamp(Timestamp.fromAmino(object.updated_at));
    }
    return message;
  },
  toAmino(message: EpochUnbonding): EpochUnbondingAmino {
    const obj: any = {};
    obj.epoch_identifier = message.epochIdentifier === "" ? undefined : message.epochIdentifier;
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber.toString() : undefined;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    if (message.withdrawalIds) {
      obj.withdrawal_ids = message.withdrawalIds.map(e => e.toString());
    } else {
      obj.withdrawal_ids = message.withdrawalIds;
    }
    obj.withdrawal_ids_count = message.withdrawalIdsCount !== BigInt(0) ? message.withdrawalIdsCount.toString() : undefined;
    obj.total_amount = message.totalAmount ? Coin.toAmino(message.totalAmount) : undefined;
    obj.created_at_height = message.createdAtHeight !== BigInt(0) ? message.createdAtHeight.toString() : undefined;
    obj.updated_at_height = message.updatedAtHeight !== BigInt(0) ? message.updatedAtHeight.toString() : undefined;
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    obj.updated_at = message.updatedAt ? Timestamp.toAmino(toTimestamp(message.updatedAt)) : undefined;
    return obj;
  },
  fromAminoMsg(object: EpochUnbondingAminoMsg): EpochUnbonding {
    return EpochUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochUnbondingProtoMsg): EpochUnbonding {
    return EpochUnbonding.decode(message.value);
  },
  toProto(message: EpochUnbonding): Uint8Array {
    return EpochUnbonding.encode(message).finish();
  },
  toProtoMsg(message: EpochUnbonding): EpochUnbondingProtoMsg {
    return {
      typeUrl: "/lum.network.millions.EpochUnbonding",
      value: EpochUnbonding.encode(message).finish()
    };
  }
};
function createBaseEpochTracker(): EpochTracker {
  return {
    epochTrackerType: "",
    epochIdentifier: "",
    epochNumber: BigInt(0),
    nextEpochNumber: BigInt(0),
    previousEpochNumber: BigInt(0),
    nextEpochStartTime: new Date()
  };
}
export const EpochTracker = {
  typeUrl: "/lum.network.millions.EpochTracker",
  encode(message: EpochTracker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochTrackerType !== "") {
      writer.uint32(10).string(message.epochTrackerType);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(18).string(message.epochIdentifier);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.epochNumber);
    }
    if (message.nextEpochNumber !== BigInt(0)) {
      writer.uint32(32).uint64(message.nextEpochNumber);
    }
    if (message.previousEpochNumber !== BigInt(0)) {
      writer.uint32(40).uint64(message.previousEpochNumber);
    }
    if (message.nextEpochStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.nextEpochStartTime), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochTracker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochTrackerType = reader.string();
          break;
        case 2:
          message.epochIdentifier = reader.string();
          break;
        case 3:
          message.epochNumber = reader.uint64();
          break;
        case 4:
          message.nextEpochNumber = reader.uint64();
          break;
        case 5:
          message.previousEpochNumber = reader.uint64();
          break;
        case 6:
          message.nextEpochStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EpochTracker>): EpochTracker {
    const message = createBaseEpochTracker();
    message.epochTrackerType = object.epochTrackerType ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.nextEpochNumber = object.nextEpochNumber !== undefined && object.nextEpochNumber !== null ? BigInt(object.nextEpochNumber.toString()) : BigInt(0);
    message.previousEpochNumber = object.previousEpochNumber !== undefined && object.previousEpochNumber !== null ? BigInt(object.previousEpochNumber.toString()) : BigInt(0);
    message.nextEpochStartTime = object.nextEpochStartTime ?? undefined;
    return message;
  },
  fromAmino(object: EpochTrackerAmino): EpochTracker {
    const message = createBaseEpochTracker();
    if (object.epoch_tracker_type !== undefined && object.epoch_tracker_type !== null) {
      message.epochTrackerType = object.epoch_tracker_type;
    }
    if (object.epoch_identifier !== undefined && object.epoch_identifier !== null) {
      message.epochIdentifier = object.epoch_identifier;
    }
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    if (object.next_epoch_number !== undefined && object.next_epoch_number !== null) {
      message.nextEpochNumber = BigInt(object.next_epoch_number);
    }
    if (object.previous_epoch_number !== undefined && object.previous_epoch_number !== null) {
      message.previousEpochNumber = BigInt(object.previous_epoch_number);
    }
    if (object.next_epoch_start_time !== undefined && object.next_epoch_start_time !== null) {
      message.nextEpochStartTime = fromTimestamp(Timestamp.fromAmino(object.next_epoch_start_time));
    }
    return message;
  },
  toAmino(message: EpochTracker): EpochTrackerAmino {
    const obj: any = {};
    obj.epoch_tracker_type = message.epochTrackerType === "" ? undefined : message.epochTrackerType;
    obj.epoch_identifier = message.epochIdentifier === "" ? undefined : message.epochIdentifier;
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber.toString() : undefined;
    obj.next_epoch_number = message.nextEpochNumber !== BigInt(0) ? message.nextEpochNumber.toString() : undefined;
    obj.previous_epoch_number = message.previousEpochNumber !== BigInt(0) ? message.previousEpochNumber.toString() : undefined;
    obj.next_epoch_start_time = message.nextEpochStartTime ? Timestamp.toAmino(toTimestamp(message.nextEpochStartTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: EpochTrackerAminoMsg): EpochTracker {
    return EpochTracker.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochTrackerProtoMsg): EpochTracker {
    return EpochTracker.decode(message.value);
  },
  toProto(message: EpochTracker): Uint8Array {
    return EpochTracker.encode(message).finish();
  },
  toProtoMsg(message: EpochTracker): EpochTrackerProtoMsg {
    return {
      typeUrl: "/lum.network.millions.EpochTracker",
      value: EpochTracker.encode(message).finish()
    };
  }
};