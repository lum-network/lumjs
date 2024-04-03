import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Params {
  /**
   * min_deposit_amount the minimum deposit amount accepted by pool
   * configurations
   */
  minDepositAmount: string;
  /**
   * max_prize_strategy_batches the maximum prize strategy batches accepted by
   * pool configurations
   */
  maxPrizeStrategyBatches: bigint;
  /**
   * max_prize_batch_quantity the maximum prize batch quantity accepted by pool
   * configurations
   */
  maxPrizeBatchQuantity: bigint;
  /**
   * min_draw_schedule_delta the minimum delta between draws accepted by pool
   * configurations
   */
  minDrawScheduleDelta: Duration | undefined;
  /**
   * max_draw_schedule_delta the maximum delta between draws accepted by pool
   * configurations
   */
  maxDrawScheduleDelta: Duration | undefined;
  /**
   * prize_expiration_delta the prize clawback expiration delta (common to all
   * pools)
   */
  prizeExpirationDelta: Duration | undefined;
  /**
   * min_deposit_draw_delta the minimum delta before a draw for a deposit to be
   * accepted during the time weighted balance computation for a draw
   */
  minDepositDrawDelta: Duration | undefined;
}
export interface ParamsProtoMsg {
  typeUrl: "/lum.network.millions.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /**
   * min_deposit_amount the minimum deposit amount accepted by pool
   * configurations
   */
  min_deposit_amount?: string;
  /**
   * max_prize_strategy_batches the maximum prize strategy batches accepted by
   * pool configurations
   */
  max_prize_strategy_batches?: string;
  /**
   * max_prize_batch_quantity the maximum prize batch quantity accepted by pool
   * configurations
   */
  max_prize_batch_quantity?: string;
  /**
   * min_draw_schedule_delta the minimum delta between draws accepted by pool
   * configurations
   */
  min_draw_schedule_delta?: DurationAmino | undefined;
  /**
   * max_draw_schedule_delta the maximum delta between draws accepted by pool
   * configurations
   */
  max_draw_schedule_delta?: DurationAmino | undefined;
  /**
   * prize_expiration_delta the prize clawback expiration delta (common to all
   * pools)
   */
  prize_expiration_delta?: DurationAmino | undefined;
  /**
   * min_deposit_draw_delta the minimum delta before a draw for a deposit to be
   * accepted during the time weighted balance computation for a draw
   */
  min_deposit_draw_delta?: DurationAmino | undefined;
}
export interface ParamsAminoMsg {
  type: "/lum.network.millions.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  min_deposit_amount: string;
  max_prize_strategy_batches: bigint;
  max_prize_batch_quantity: bigint;
  min_draw_schedule_delta: DurationSDKType | undefined;
  max_draw_schedule_delta: DurationSDKType | undefined;
  prize_expiration_delta: DurationSDKType | undefined;
  min_deposit_draw_delta: DurationSDKType | undefined;
}
function createBaseParams(): Params {
  return {
    minDepositAmount: "",
    maxPrizeStrategyBatches: BigInt(0),
    maxPrizeBatchQuantity: BigInt(0),
    minDrawScheduleDelta: Duration.fromPartial({}),
    maxDrawScheduleDelta: Duration.fromPartial({}),
    prizeExpirationDelta: Duration.fromPartial({}),
    minDepositDrawDelta: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/lum.network.millions.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minDepositAmount !== "") {
      writer.uint32(10).string(message.minDepositAmount);
    }
    if (message.maxPrizeStrategyBatches !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxPrizeStrategyBatches);
    }
    if (message.maxPrizeBatchQuantity !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxPrizeBatchQuantity);
    }
    if (message.minDrawScheduleDelta !== undefined) {
      Duration.encode(message.minDrawScheduleDelta, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxDrawScheduleDelta !== undefined) {
      Duration.encode(message.maxDrawScheduleDelta, writer.uint32(42).fork()).ldelim();
    }
    if (message.prizeExpirationDelta !== undefined) {
      Duration.encode(message.prizeExpirationDelta, writer.uint32(50).fork()).ldelim();
    }
    if (message.minDepositDrawDelta !== undefined) {
      Duration.encode(message.minDepositDrawDelta, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDepositAmount = reader.string();
          break;
        case 2:
          message.maxPrizeStrategyBatches = reader.uint64();
          break;
        case 3:
          message.maxPrizeBatchQuantity = reader.uint64();
          break;
        case 4:
          message.minDrawScheduleDelta = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxDrawScheduleDelta = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.prizeExpirationDelta = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.minDepositDrawDelta = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minDepositAmount = object.minDepositAmount ?? "";
    message.maxPrizeStrategyBatches = object.maxPrizeStrategyBatches !== undefined && object.maxPrizeStrategyBatches !== null ? BigInt(object.maxPrizeStrategyBatches.toString()) : BigInt(0);
    message.maxPrizeBatchQuantity = object.maxPrizeBatchQuantity !== undefined && object.maxPrizeBatchQuantity !== null ? BigInt(object.maxPrizeBatchQuantity.toString()) : BigInt(0);
    message.minDrawScheduleDelta = object.minDrawScheduleDelta !== undefined && object.minDrawScheduleDelta !== null ? Duration.fromPartial(object.minDrawScheduleDelta) : undefined;
    message.maxDrawScheduleDelta = object.maxDrawScheduleDelta !== undefined && object.maxDrawScheduleDelta !== null ? Duration.fromPartial(object.maxDrawScheduleDelta) : undefined;
    message.prizeExpirationDelta = object.prizeExpirationDelta !== undefined && object.prizeExpirationDelta !== null ? Duration.fromPartial(object.prizeExpirationDelta) : undefined;
    message.minDepositDrawDelta = object.minDepositDrawDelta !== undefined && object.minDepositDrawDelta !== null ? Duration.fromPartial(object.minDepositDrawDelta) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_deposit_amount !== undefined && object.min_deposit_amount !== null) {
      message.minDepositAmount = object.min_deposit_amount;
    }
    if (object.max_prize_strategy_batches !== undefined && object.max_prize_strategy_batches !== null) {
      message.maxPrizeStrategyBatches = BigInt(object.max_prize_strategy_batches);
    }
    if (object.max_prize_batch_quantity !== undefined && object.max_prize_batch_quantity !== null) {
      message.maxPrizeBatchQuantity = BigInt(object.max_prize_batch_quantity);
    }
    if (object.min_draw_schedule_delta !== undefined && object.min_draw_schedule_delta !== null) {
      message.minDrawScheduleDelta = Duration.fromAmino(object.min_draw_schedule_delta);
    }
    if (object.max_draw_schedule_delta !== undefined && object.max_draw_schedule_delta !== null) {
      message.maxDrawScheduleDelta = Duration.fromAmino(object.max_draw_schedule_delta);
    }
    if (object.prize_expiration_delta !== undefined && object.prize_expiration_delta !== null) {
      message.prizeExpirationDelta = Duration.fromAmino(object.prize_expiration_delta);
    }
    if (object.min_deposit_draw_delta !== undefined && object.min_deposit_draw_delta !== null) {
      message.minDepositDrawDelta = Duration.fromAmino(object.min_deposit_draw_delta);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_deposit_amount = message.minDepositAmount === "" ? undefined : message.minDepositAmount;
    obj.max_prize_strategy_batches = message.maxPrizeStrategyBatches !== BigInt(0) ? message.maxPrizeStrategyBatches.toString() : undefined;
    obj.max_prize_batch_quantity = message.maxPrizeBatchQuantity !== BigInt(0) ? message.maxPrizeBatchQuantity.toString() : undefined;
    obj.min_draw_schedule_delta = message.minDrawScheduleDelta ? Duration.toAmino(message.minDrawScheduleDelta) : undefined;
    obj.max_draw_schedule_delta = message.maxDrawScheduleDelta ? Duration.toAmino(message.maxDrawScheduleDelta) : undefined;
    obj.prize_expiration_delta = message.prizeExpirationDelta ? Duration.toAmino(message.prizeExpirationDelta) : undefined;
    obj.min_deposit_draw_delta = message.minDepositDrawDelta ? Duration.toAmino(message.minDepositDrawDelta) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/lum.network.millions.Params",
      value: Params.encode(message).finish()
    };
  }
};