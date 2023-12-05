import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
export interface EpochInfo {
  identifier: string;
  startTime: Date | undefined;
  duration: Duration | undefined;
  currentEpoch: bigint;
  currentEpochStartTime: Date | undefined;
  epochCountingStarted: boolean;
  currentEpochStartHeight: bigint;
}
export interface EpochInfoProtoMsg {
  typeUrl: "/lum.network.epochs.EpochInfo";
  value: Uint8Array;
}
export interface EpochInfoAmino {
  identifier: string;
  start_time?: string | undefined;
  duration?: DurationAmino | undefined;
  current_epoch: string;
  current_epoch_start_time?: string | undefined;
  epoch_counting_started: boolean;
  current_epoch_start_height: string;
}
export interface EpochInfoAminoMsg {
  type: "/lum.network.epochs.EpochInfo";
  value: EpochInfoAmino;
}
export interface EpochInfoSDKType {
  identifier: string;
  start_time: Date | undefined;
  duration: DurationSDKType | undefined;
  current_epoch: bigint;
  current_epoch_start_time: Date | undefined;
  epoch_counting_started: boolean;
  current_epoch_start_height: bigint;
}
export interface GenesisState {
  epochs: EpochInfo[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lum.network.epochs.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  epochs: EpochInfoAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lum.network.epochs.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  epochs: EpochInfoSDKType[];
}
function createBaseEpochInfo(): EpochInfo {
  return {
    identifier: "",
    startTime: new Date(),
    duration: Duration.fromPartial({}),
    currentEpoch: BigInt(0),
    currentEpochStartTime: new Date(),
    epochCountingStarted: false,
    currentEpochStartHeight: BigInt(0)
  };
}
export const EpochInfo = {
  typeUrl: "/lum.network.epochs.EpochInfo",
  encode(message: EpochInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(32).int64(message.currentEpoch);
    }
    if (message.currentEpochStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.currentEpochStartTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.epochCountingStarted === true) {
      writer.uint32(48).bool(message.epochCountingStarted);
    }
    if (message.currentEpochStartHeight !== BigInt(0)) {
      writer.uint32(56).int64(message.currentEpochStartHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.currentEpoch = reader.int64();
          break;
        case 5:
          message.currentEpochStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.epochCountingStarted = reader.bool();
          break;
        case 7:
          message.currentEpochStartHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EpochInfo>): EpochInfo {
    const message = createBaseEpochInfo();
    message.identifier = object.identifier ?? "";
    message.startTime = object.startTime ?? undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    message.currentEpochStartTime = object.currentEpochStartTime ?? undefined;
    message.epochCountingStarted = object.epochCountingStarted ?? false;
    message.currentEpochStartHeight = object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null ? BigInt(object.currentEpochStartHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EpochInfoAmino): EpochInfo {
    return {
      identifier: object.identifier,
      startTime: object?.start_time ? fromTimestamp(Timestamp.fromAmino(object.start_time)) : undefined,
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
      currentEpoch: BigInt(object.current_epoch),
      currentEpochStartTime: object?.current_epoch_start_time ? fromTimestamp(Timestamp.fromAmino(object.current_epoch_start_time)) : undefined,
      epochCountingStarted: object.epoch_counting_started,
      currentEpochStartHeight: BigInt(object.current_epoch_start_height)
    };
  },
  toAmino(message: EpochInfo): EpochInfoAmino {
    const obj: any = {};
    obj.identifier = message.identifier;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.current_epoch = message.currentEpoch ? message.currentEpoch.toString() : undefined;
    obj.current_epoch_start_time = message.currentEpochStartTime ? Timestamp.toAmino(toTimestamp(message.currentEpochStartTime)) : undefined;
    obj.epoch_counting_started = message.epochCountingStarted;
    obj.current_epoch_start_height = message.currentEpochStartHeight ? message.currentEpochStartHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EpochInfoAminoMsg): EpochInfo {
    return EpochInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochInfoProtoMsg): EpochInfo {
    return EpochInfo.decode(message.value);
  },
  toProto(message: EpochInfo): Uint8Array {
    return EpochInfo.encode(message).finish();
  },
  toProtoMsg(message: EpochInfo): EpochInfoProtoMsg {
    return {
      typeUrl: "/lum.network.epochs.EpochInfo",
      value: EpochInfo.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    epochs: []
  };
}
export const GenesisState = {
  typeUrl: "/lum.network.epochs.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toAmino(e) : undefined);
    } else {
      obj.epochs = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/lum.network.epochs.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};