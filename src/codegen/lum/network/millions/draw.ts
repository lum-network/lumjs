import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PrizeRef, PrizeRefAmino, PrizeRefSDKType } from "./prize_ref";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, DeepPartial, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum DrawState {
  DRAW_STATE_UNSPECIFIED = 0,
  DRAW_STATE_ICA_WITHDRAWREWARDS = 1,
  DRAW_STATE_QUERY_BALANCE = 2,
  DRAW_STATE_IBC_TRANSFER = 3,
  DRAW_STATE_DRAWING = 4,
  DRAW_STATE_SUCCESS = 5,
  DRAW_STATE_FAILURE = 6,
  UNRECOGNIZED = -1,
}
export const DrawStateSDKType = DrawState;
export const DrawStateAmino = DrawState;
export function drawStateFromJSON(object: any): DrawState {
  switch (object) {
    case 0:
    case "DRAW_STATE_UNSPECIFIED":
      return DrawState.DRAW_STATE_UNSPECIFIED;
    case 1:
    case "DRAW_STATE_ICA_WITHDRAWREWARDS":
      return DrawState.DRAW_STATE_ICA_WITHDRAWREWARDS;
    case 2:
    case "DRAW_STATE_QUERY_BALANCE":
      return DrawState.DRAW_STATE_QUERY_BALANCE;
    case 3:
    case "DRAW_STATE_IBC_TRANSFER":
      return DrawState.DRAW_STATE_IBC_TRANSFER;
    case 4:
    case "DRAW_STATE_DRAWING":
      return DrawState.DRAW_STATE_DRAWING;
    case 5:
    case "DRAW_STATE_SUCCESS":
      return DrawState.DRAW_STATE_SUCCESS;
    case 6:
    case "DRAW_STATE_FAILURE":
      return DrawState.DRAW_STATE_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DrawState.UNRECOGNIZED;
  }
}
export function drawStateToJSON(object: DrawState): string {
  switch (object) {
    case DrawState.DRAW_STATE_UNSPECIFIED:
      return "DRAW_STATE_UNSPECIFIED";
    case DrawState.DRAW_STATE_ICA_WITHDRAWREWARDS:
      return "DRAW_STATE_ICA_WITHDRAWREWARDS";
    case DrawState.DRAW_STATE_QUERY_BALANCE:
      return "DRAW_STATE_QUERY_BALANCE";
    case DrawState.DRAW_STATE_IBC_TRANSFER:
      return "DRAW_STATE_IBC_TRANSFER";
    case DrawState.DRAW_STATE_DRAWING:
      return "DRAW_STATE_DRAWING";
    case DrawState.DRAW_STATE_SUCCESS:
      return "DRAW_STATE_SUCCESS";
    case DrawState.DRAW_STATE_FAILURE:
      return "DRAW_STATE_FAILURE";
    case DrawState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Draw {
  /** Draw IDs */
  poolId: Long;
  drawId: Long;
  /**
   * Draw states
   * error_state is only set in case of failure
   */
  state: DrawState;
  errorState: DrawState;
  /** Draw state done data */
  randSeed: Long;
  prizePool: Coin | undefined;
  prizePoolFreshAmount: string;
  prizePoolRemainsAmount: string;
  prizesRefs: PrizeRef[];
  totalWinCount: Long;
  totalWinAmount: string;
  /** Draw creation and updates */
  createdAtHeight: Long;
  updatedAtHeight: Long;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}
export interface DrawProtoMsg {
  typeUrl: "/lum.network.millions.Draw";
  value: Uint8Array;
}
export interface DrawAmino {
  /** Draw IDs */
  pool_id: string;
  draw_id: string;
  /**
   * Draw states
   * error_state is only set in case of failure
   */
  state: DrawState;
  error_state: DrawState;
  /** Draw state done data */
  rand_seed: string;
  prize_pool?: CoinAmino | undefined;
  prize_pool_fresh_amount: string;
  prize_pool_remains_amount: string;
  prizes_refs: PrizeRefAmino[];
  total_win_count: string;
  total_win_amount: string;
  /** Draw creation and updates */
  created_at_height: string;
  updated_at_height: string;
  created_at?: Date | undefined;
  updated_at?: Date | undefined;
}
export interface DrawAminoMsg {
  type: "/lum.network.millions.Draw";
  value: DrawAmino;
}
export interface DrawSDKType {
  pool_id: Long;
  draw_id: Long;
  state: DrawState;
  error_state: DrawState;
  rand_seed: Long;
  prize_pool: CoinSDKType | undefined;
  prize_pool_fresh_amount: string;
  prize_pool_remains_amount: string;
  prizes_refs: PrizeRefSDKType[];
  total_win_count: Long;
  total_win_amount: string;
  created_at_height: Long;
  updated_at_height: Long;
  created_at: Date | undefined;
  updated_at: Date | undefined;
}
function createBaseDraw(): Draw {
  return {
    poolId: Long.UZERO,
    drawId: Long.UZERO,
    state: 0,
    errorState: 0,
    randSeed: Long.ZERO,
    prizePool: Coin.fromPartial({}),
    prizePoolFreshAmount: "",
    prizePoolRemainsAmount: "",
    prizesRefs: [],
    totalWinCount: Long.UZERO,
    totalWinAmount: "",
    createdAtHeight: Long.ZERO,
    updatedAtHeight: Long.ZERO,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
export const Draw = {
  encode(message: Draw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.drawId.isZero()) {
      writer.uint32(16).uint64(message.drawId);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.errorState !== 0) {
      writer.uint32(32).int32(message.errorState);
    }
    if (!message.randSeed.isZero()) {
      writer.uint32(40).int64(message.randSeed);
    }
    if (message.prizePool !== undefined) {
      Coin.encode(message.prizePool, writer.uint32(50).fork()).ldelim();
    }
    if (message.prizePoolFreshAmount !== "") {
      writer.uint32(58).string(message.prizePoolFreshAmount);
    }
    if (message.prizePoolRemainsAmount !== "") {
      writer.uint32(66).string(message.prizePoolRemainsAmount);
    }
    for (const v of message.prizesRefs) {
      PrizeRef.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (!message.totalWinCount.isZero()) {
      writer.uint32(96).uint64(message.totalWinCount);
    }
    if (message.totalWinAmount !== "") {
      writer.uint32(106).string(message.totalWinAmount);
    }
    if (!message.createdAtHeight.isZero()) {
      writer.uint32(120).int64(message.createdAtHeight);
    }
    if (!message.updatedAtHeight.isZero()) {
      writer.uint32(128).int64(message.updatedAtHeight);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(138).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Draw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.drawId = (reader.uint64() as Long);
          break;
        case 3:
          message.state = (reader.int32() as any);
          break;
        case 4:
          message.errorState = (reader.int32() as any);
          break;
        case 5:
          message.randSeed = (reader.int64() as Long);
          break;
        case 6:
          message.prizePool = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.prizePoolFreshAmount = reader.string();
          break;
        case 8:
          message.prizePoolRemainsAmount = reader.string();
          break;
        case 11:
          message.prizesRefs.push(PrizeRef.decode(reader, reader.uint32()));
          break;
        case 12:
          message.totalWinCount = (reader.uint64() as Long);
          break;
        case 13:
          message.totalWinAmount = reader.string();
          break;
        case 15:
          message.createdAtHeight = (reader.int64() as Long);
          break;
        case 16:
          message.updatedAtHeight = (reader.int64() as Long);
          break;
        case 17:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 18:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Draw>): Draw {
    const message = createBaseDraw();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
    message.state = object.state ?? 0;
    message.errorState = object.errorState ?? 0;
    message.randSeed = object.randSeed !== undefined && object.randSeed !== null ? Long.fromValue(object.randSeed) : Long.ZERO;
    message.prizePool = object.prizePool !== undefined && object.prizePool !== null ? Coin.fromPartial(object.prizePool) : undefined;
    message.prizePoolFreshAmount = object.prizePoolFreshAmount ?? "";
    message.prizePoolRemainsAmount = object.prizePoolRemainsAmount ?? "";
    message.prizesRefs = object.prizesRefs?.map(e => PrizeRef.fromPartial(e)) || [];
    message.totalWinCount = object.totalWinCount !== undefined && object.totalWinCount !== null ? Long.fromValue(object.totalWinCount) : Long.UZERO;
    message.totalWinAmount = object.totalWinAmount ?? "";
    message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? Long.fromValue(object.createdAtHeight) : Long.ZERO;
    message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? Long.fromValue(object.updatedAtHeight) : Long.ZERO;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
  fromAmino(object: DrawAmino): Draw {
    return {
      poolId: Long.fromString(object.pool_id),
      drawId: Long.fromString(object.draw_id),
      state: isSet(object.state) ? drawStateFromJSON(object.state) : -1,
      errorState: isSet(object.error_state) ? drawStateFromJSON(object.error_state) : -1,
      randSeed: Long.fromString(object.rand_seed),
      prizePool: object?.prize_pool ? Coin.fromAmino(object.prize_pool) : undefined,
      prizePoolFreshAmount: object.prize_pool_fresh_amount,
      prizePoolRemainsAmount: object.prize_pool_remains_amount,
      prizesRefs: Array.isArray(object?.prizes_refs) ? object.prizes_refs.map((e: any) => PrizeRef.fromAmino(e)) : [],
      totalWinCount: Long.fromString(object.total_win_count),
      totalWinAmount: object.total_win_amount,
      createdAtHeight: Long.fromString(object.created_at_height),
      updatedAtHeight: Long.fromString(object.updated_at_height),
      createdAt: object.created_at,
      updatedAt: object.updated_at
    };
  },
  toAmino(message: Draw): DrawAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
    obj.state = message.state;
    obj.error_state = message.errorState;
    obj.rand_seed = message.randSeed ? message.randSeed.toString() : undefined;
    obj.prize_pool = message.prizePool ? Coin.toAmino(message.prizePool) : undefined;
    obj.prize_pool_fresh_amount = message.prizePoolFreshAmount;
    obj.prize_pool_remains_amount = message.prizePoolRemainsAmount;
    if (message.prizesRefs) {
      obj.prizes_refs = message.prizesRefs.map(e => e ? PrizeRef.toAmino(e) : undefined);
    } else {
      obj.prizes_refs = [];
    }
    obj.total_win_count = message.totalWinCount ? message.totalWinCount.toString() : undefined;
    obj.total_win_amount = message.totalWinAmount;
    obj.created_at_height = message.createdAtHeight ? message.createdAtHeight.toString() : undefined;
    obj.updated_at_height = message.updatedAtHeight ? message.updatedAtHeight.toString() : undefined;
    obj.created_at = message.createdAt;
    obj.updated_at = message.updatedAt;
    return obj;
  },
  fromAminoMsg(object: DrawAminoMsg): Draw {
    return Draw.fromAmino(object.value);
  },
  fromProtoMsg(message: DrawProtoMsg): Draw {
    return Draw.decode(message.value);
  },
  toProto(message: Draw): Uint8Array {
    return Draw.encode(message).finish();
  },
  toProtoMsg(message: Draw): DrawProtoMsg {
    return {
      typeUrl: "/lum.network.millions.Draw",
      value: Draw.encode(message).finish()
    };
  }
};