import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EpochUnbonding {
  epochIdentifier: string;
  epochNumber: Long;
  poolId: Long;
  withdrawalIds: Long[];
  withdrawalIdsCount: Long;
  totalAmount: Coin | undefined;
  /** metadata */
  createdAtHeight: Long;
  updatedAtHeight: Long;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}
export interface EpochUnbondingProtoMsg {
  typeUrl: "/lum.network.millions.EpochUnbonding";
  value: Uint8Array;
}
export interface EpochUnbondingAmino {
  epoch_identifier: string;
  epoch_number: string;
  pool_id: string;
  withdrawal_ids: string[];
  withdrawal_ids_count: string;
  total_amount?: CoinAmino | undefined;
  /** metadata */
  created_at_height: string;
  updated_at_height: string;
  created_at?: Date | undefined;
  updated_at?: Date | undefined;
}
export interface EpochUnbondingAminoMsg {
  type: "/lum.network.millions.EpochUnbonding";
  value: EpochUnbondingAmino;
}
export interface EpochUnbondingSDKType {
  epoch_identifier: string;
  epoch_number: Long;
  pool_id: Long;
  withdrawal_ids: Long[];
  withdrawal_ids_count: Long;
  total_amount: CoinSDKType | undefined;
  created_at_height: Long;
  updated_at_height: Long;
  created_at: Date | undefined;
  updated_at: Date | undefined;
}
export interface EpochTracker {
  epochTrackerType: string;
  epochIdentifier: string;
  epochNumber: Long;
  nextEpochNumber: Long;
  previousEpochNumber: Long;
  nextEpochStartTime: Date | undefined;
}
export interface EpochTrackerProtoMsg {
  typeUrl: "/lum.network.millions.EpochTracker";
  value: Uint8Array;
}
export interface EpochTrackerAmino {
  epoch_tracker_type: string;
  epoch_identifier: string;
  epoch_number: string;
  next_epoch_number: string;
  previous_epoch_number: string;
  next_epoch_start_time?: Date | undefined;
}
export interface EpochTrackerAminoMsg {
  type: "/lum.network.millions.EpochTracker";
  value: EpochTrackerAmino;
}
export interface EpochTrackerSDKType {
  epoch_tracker_type: string;
  epoch_identifier: string;
  epoch_number: Long;
  next_epoch_number: Long;
  previous_epoch_number: Long;
  next_epoch_start_time: Date | undefined;
}
function createBaseEpochUnbonding(): EpochUnbonding {
  return {
    epochIdentifier: "",
    epochNumber: Long.UZERO,
    poolId: Long.UZERO,
    withdrawalIds: [],
    withdrawalIdsCount: Long.UZERO,
    totalAmount: Coin.fromPartial({}),
    createdAtHeight: Long.ZERO,
    updatedAtHeight: Long.ZERO,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
export const EpochUnbonding = {
  encode(message: EpochUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochIdentifier !== "") {
      writer.uint32(10).string(message.epochIdentifier);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(16).uint64(message.epochNumber);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }
    writer.uint32(34).fork();
    for (const v of message.withdrawalIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (!message.withdrawalIdsCount.isZero()) {
      writer.uint32(40).uint64(message.withdrawalIdsCount);
    }
    if (message.totalAmount !== undefined) {
      Coin.encode(message.totalAmount, writer.uint32(50).fork()).ldelim();
    }
    if (!message.createdAtHeight.isZero()) {
      writer.uint32(56).int64(message.createdAtHeight);
    }
    if (!message.updatedAtHeight.isZero()) {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): EpochUnbonding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochIdentifier = reader.string();
          break;
        case 2:
          message.epochNumber = (reader.uint64() as Long);
          break;
        case 3:
          message.poolId = (reader.uint64() as Long);
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.withdrawalIds.push((reader.uint64() as Long));
            }
          } else {
            message.withdrawalIds.push((reader.uint64() as Long));
          }
          break;
        case 5:
          message.withdrawalIdsCount = (reader.uint64() as Long);
          break;
        case 6:
          message.totalAmount = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.createdAtHeight = (reader.int64() as Long);
          break;
        case 8:
          message.updatedAtHeight = (reader.int64() as Long);
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
  fromPartial(object: DeepPartial<EpochUnbonding>): EpochUnbonding {
    const message = createBaseEpochUnbonding();
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.withdrawalIds = object.withdrawalIds?.map(e => Long.fromValue(e)) || [];
    message.withdrawalIdsCount = object.withdrawalIdsCount !== undefined && object.withdrawalIdsCount !== null ? Long.fromValue(object.withdrawalIdsCount) : Long.UZERO;
    message.totalAmount = object.totalAmount !== undefined && object.totalAmount !== null ? Coin.fromPartial(object.totalAmount) : undefined;
    message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? Long.fromValue(object.createdAtHeight) : Long.ZERO;
    message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? Long.fromValue(object.updatedAtHeight) : Long.ZERO;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
  fromAmino(object: EpochUnbondingAmino): EpochUnbonding {
    return {
      epochIdentifier: object.epoch_identifier,
      epochNumber: Long.fromString(object.epoch_number),
      poolId: Long.fromString(object.pool_id),
      withdrawalIds: Array.isArray(object?.withdrawal_ids) ? object.withdrawal_ids.map((e: any) => e) : [],
      withdrawalIdsCount: Long.fromString(object.withdrawal_ids_count),
      totalAmount: object?.total_amount ? Coin.fromAmino(object.total_amount) : undefined,
      createdAtHeight: Long.fromString(object.created_at_height),
      updatedAtHeight: Long.fromString(object.updated_at_height),
      createdAt: object.created_at,
      updatedAt: object.updated_at
    };
  },
  toAmino(message: EpochUnbonding): EpochUnbondingAmino {
    const obj: any = {};
    obj.epoch_identifier = message.epochIdentifier;
    obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.withdrawalIds) {
      obj.withdrawal_ids = message.withdrawalIds.map(e => e);
    } else {
      obj.withdrawal_ids = [];
    }
    obj.withdrawal_ids_count = message.withdrawalIdsCount ? message.withdrawalIdsCount.toString() : undefined;
    obj.total_amount = message.totalAmount ? Coin.toAmino(message.totalAmount) : undefined;
    obj.created_at_height = message.createdAtHeight ? message.createdAtHeight.toString() : undefined;
    obj.updated_at_height = message.updatedAtHeight ? message.updatedAtHeight.toString() : undefined;
    obj.created_at = message.createdAt;
    obj.updated_at = message.updatedAt;
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
    epochNumber: Long.UZERO,
    nextEpochNumber: Long.UZERO,
    previousEpochNumber: Long.UZERO,
    nextEpochStartTime: new Date()
  };
}
export const EpochTracker = {
  encode(message: EpochTracker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochTrackerType !== "") {
      writer.uint32(10).string(message.epochTrackerType);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(18).string(message.epochIdentifier);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(24).uint64(message.epochNumber);
    }
    if (!message.nextEpochNumber.isZero()) {
      writer.uint32(32).uint64(message.nextEpochNumber);
    }
    if (!message.previousEpochNumber.isZero()) {
      writer.uint32(40).uint64(message.previousEpochNumber);
    }
    if (message.nextEpochStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.nextEpochStartTime), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EpochTracker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.epochNumber = (reader.uint64() as Long);
          break;
        case 4:
          message.nextEpochNumber = (reader.uint64() as Long);
          break;
        case 5:
          message.previousEpochNumber = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<EpochTracker>): EpochTracker {
    const message = createBaseEpochTracker();
    message.epochTrackerType = object.epochTrackerType ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    message.nextEpochNumber = object.nextEpochNumber !== undefined && object.nextEpochNumber !== null ? Long.fromValue(object.nextEpochNumber) : Long.UZERO;
    message.previousEpochNumber = object.previousEpochNumber !== undefined && object.previousEpochNumber !== null ? Long.fromValue(object.previousEpochNumber) : Long.UZERO;
    message.nextEpochStartTime = object.nextEpochStartTime ?? undefined;
    return message;
  },
  fromAmino(object: EpochTrackerAmino): EpochTracker {
    return {
      epochTrackerType: object.epoch_tracker_type,
      epochIdentifier: object.epoch_identifier,
      epochNumber: Long.fromString(object.epoch_number),
      nextEpochNumber: Long.fromString(object.next_epoch_number),
      previousEpochNumber: Long.fromString(object.previous_epoch_number),
      nextEpochStartTime: object.next_epoch_start_time
    };
  },
  toAmino(message: EpochTracker): EpochTrackerAmino {
    const obj: any = {};
    obj.epoch_tracker_type = message.epochTrackerType;
    obj.epoch_identifier = message.epochIdentifier;
    obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
    obj.next_epoch_number = message.nextEpochNumber ? message.nextEpochNumber.toString() : undefined;
    obj.previous_epoch_number = message.previousEpochNumber ? message.previousEpochNumber.toString() : undefined;
    obj.next_epoch_start_time = message.nextEpochStartTime;
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