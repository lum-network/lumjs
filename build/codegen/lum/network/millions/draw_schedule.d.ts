import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface DrawSchedule {
    initialDrawAt: Date | undefined;
    drawDelta: Duration | undefined;
}
export interface DrawScheduleProtoMsg {
    typeUrl: "/lum.network.millions.DrawSchedule";
    value: Uint8Array;
}
export interface DrawScheduleAmino {
    initial_draw_at?: Date | undefined;
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
export declare const DrawSchedule: {
    encode(message: DrawSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DrawSchedule;
    fromPartial(object: DeepPartial<DrawSchedule>): DrawSchedule;
    fromAmino(object: DrawScheduleAmino): DrawSchedule;
    toAmino(message: DrawSchedule): DrawScheduleAmino;
    fromAminoMsg(object: DrawScheduleAminoMsg): DrawSchedule;
    fromProtoMsg(message: DrawScheduleProtoMsg): DrawSchedule;
    toProto(message: DrawSchedule): Uint8Array;
    toProtoMsg(message: DrawSchedule): DrawScheduleProtoMsg;
};
