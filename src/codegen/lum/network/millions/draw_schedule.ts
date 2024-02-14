import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
export interface DrawSchedule {
  initialDrawAt: Date | undefined;
  drawDelta: Duration | undefined;
}
export interface DrawScheduleProtoMsg {
  typeUrl: "/lum.network.millions.DrawSchedule";
  value: Uint8Array;
}
export interface DrawScheduleAmino {
  initial_draw_at?: string | undefined;
  draw_delta?: DurationAmino | undefined;
}
export interface DrawScheduleAminoMsg {
  type: "/lum.network.millions.DrawSchedule";
  value: DrawScheduleAmino;
}
export interface DrawScheduleSDKType {
  initial_draw_at: Date | undefined;
  draw_delta: DurationSDKType | undefined;
}
function createBaseDrawSchedule(): DrawSchedule {
  return {
    initialDrawAt: new Date(),
    drawDelta: Duration.fromPartial({})
  };
}
export const DrawSchedule = {
  typeUrl: "/lum.network.millions.DrawSchedule",
  encode(message: DrawSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initialDrawAt !== undefined) {
      Timestamp.encode(toTimestamp(message.initialDrawAt), writer.uint32(10).fork()).ldelim();
    }
    if (message.drawDelta !== undefined) {
      Duration.encode(message.drawDelta, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DrawSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDrawSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initialDrawAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.drawDelta = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DrawSchedule>): DrawSchedule {
    const message = createBaseDrawSchedule();
    message.initialDrawAt = object.initialDrawAt ?? undefined;
    message.drawDelta = object.drawDelta !== undefined && object.drawDelta !== null ? Duration.fromPartial(object.drawDelta) : undefined;
    return message;
  },
  fromAmino(object: DrawScheduleAmino): DrawSchedule {
    const message = createBaseDrawSchedule();
    if (object.initial_draw_at !== undefined && object.initial_draw_at !== null) {
      message.initialDrawAt = fromTimestamp(Timestamp.fromAmino(object.initial_draw_at));
    }
    if (object.draw_delta !== undefined && object.draw_delta !== null) {
      message.drawDelta = Duration.fromAmino(object.draw_delta);
    }
    return message;
  },
  toAmino(message: DrawSchedule): DrawScheduleAmino {
    const obj: any = {};
    obj.initial_draw_at = message.initialDrawAt ? Timestamp.toAmino(toTimestamp(message.initialDrawAt)) : undefined;
    obj.draw_delta = message.drawDelta ? Duration.toAmino(message.drawDelta) : undefined;
    return obj;
  },
  fromAminoMsg(object: DrawScheduleAminoMsg): DrawSchedule {
    return DrawSchedule.fromAmino(object.value);
  },
  fromProtoMsg(message: DrawScheduleProtoMsg): DrawSchedule {
    return DrawSchedule.decode(message.value);
  },
  toProto(message: DrawSchedule): Uint8Array {
    return DrawSchedule.encode(message).finish();
  },
  toProtoMsg(message: DrawSchedule): DrawScheduleProtoMsg {
    return {
      typeUrl: "/lum.network.millions.DrawSchedule",
      value: DrawSchedule.encode(message).finish()
    };
  }
};