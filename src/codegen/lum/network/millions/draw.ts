import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PrizeRef, PrizeRefAmino, PrizeRefSDKType } from "./prize_ref";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
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
  poolId: bigint;
  drawId: bigint;
  /**
   * Draw states
   * error_state is only set in case of failure
   */
  state: DrawState;
  errorState: DrawState;
  /** Draw state done data */
  randSeed: bigint;
  prizePool: Coin | undefined;
  prizePoolFreshAmount: string;
  prizePoolRemainsAmount: string;
  prizesRefs: PrizeRef[];
  totalWinCount: bigint;
  totalWinAmount: string;
  /** Draw creation and updates */
  createdAtHeight: bigint;
  updatedAtHeight: bigint;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}
export interface DrawProtoMsg {
  typeUrl: "/lum.network.millions.Draw";
  value: Uint8Array;
}
export interface DrawAmino {
  /** Draw IDs */
  pool_id?: string;
  draw_id?: string;
  /**
   * Draw states
   * error_state is only set in case of failure
   */
  state?: DrawState;
  error_state?: DrawState;
  /** Draw state done data */
  rand_seed?: string;
  prize_pool?: CoinAmino | undefined;
  prize_pool_fresh_amount?: string;
  prize_pool_remains_amount?: string;
  prizes_refs?: PrizeRefAmino[];
  total_win_count?: string;
  total_win_amount?: string;
  /** Draw creation and updates */
  created_at_height?: string;
  updated_at_height?: string;
  created_at?: string | undefined;
  updated_at?: string | undefined;
}
export interface DrawAminoMsg {
  type: "/lum.network.millions.Draw";
  value: DrawAmino;
}
export interface DrawSDKType {
  pool_id: bigint;
  draw_id: bigint;
  state: DrawState;
  error_state: DrawState;
  rand_seed: bigint;
  prize_pool: CoinSDKType | undefined;
  prize_pool_fresh_amount: string;
  prize_pool_remains_amount: string;
  prizes_refs: PrizeRefSDKType[];
  total_win_count: bigint;
  total_win_amount: string;
  created_at_height: bigint;
  updated_at_height: bigint;
  created_at: Date | undefined;
  updated_at: Date | undefined;
}
function createBaseDraw(): Draw {
  return {
    poolId: BigInt(0),
    drawId: BigInt(0),
    state: 0,
    errorState: 0,
    randSeed: BigInt(0),
    prizePool: Coin.fromPartial({}),
    prizePoolFreshAmount: "",
    prizePoolRemainsAmount: "",
    prizesRefs: [],
    totalWinCount: BigInt(0),
    totalWinAmount: "",
    createdAtHeight: BigInt(0),
    updatedAtHeight: BigInt(0),
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
export const Draw = {
  typeUrl: "/lum.network.millions.Draw",
  encode(message: Draw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.drawId !== BigInt(0)) {
      writer.uint32(16).uint64(message.drawId);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.errorState !== 0) {
      writer.uint32(32).int32(message.errorState);
    }
    if (message.randSeed !== BigInt(0)) {
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
    if (message.totalWinCount !== BigInt(0)) {
      writer.uint32(96).uint64(message.totalWinCount);
    }
    if (message.totalWinAmount !== "") {
      writer.uint32(106).string(message.totalWinAmount);
    }
    if (message.createdAtHeight !== BigInt(0)) {
      writer.uint32(120).int64(message.createdAtHeight);
    }
    if (message.updatedAtHeight !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Draw {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDraw();
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
          message.state = (reader.int32() as any);
          break;
        case 4:
          message.errorState = (reader.int32() as any);
          break;
        case 5:
          message.randSeed = reader.int64();
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
          message.totalWinCount = reader.uint64();
          break;
        case 13:
          message.totalWinAmount = reader.string();
          break;
        case 15:
          message.createdAtHeight = reader.int64();
          break;
        case 16:
          message.updatedAtHeight = reader.int64();
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
  fromPartial(object: Partial<Draw>): Draw {
    const message = createBaseDraw();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.drawId = object.drawId !== undefined && object.drawId !== null ? BigInt(object.drawId.toString()) : BigInt(0);
    message.state = object.state ?? 0;
    message.errorState = object.errorState ?? 0;
    message.randSeed = object.randSeed !== undefined && object.randSeed !== null ? BigInt(object.randSeed.toString()) : BigInt(0);
    message.prizePool = object.prizePool !== undefined && object.prizePool !== null ? Coin.fromPartial(object.prizePool) : undefined;
    message.prizePoolFreshAmount = object.prizePoolFreshAmount ?? "";
    message.prizePoolRemainsAmount = object.prizePoolRemainsAmount ?? "";
    message.prizesRefs = object.prizesRefs?.map(e => PrizeRef.fromPartial(e)) || [];
    message.totalWinCount = object.totalWinCount !== undefined && object.totalWinCount !== null ? BigInt(object.totalWinCount.toString()) : BigInt(0);
    message.totalWinAmount = object.totalWinAmount ?? "";
    message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? BigInt(object.createdAtHeight.toString()) : BigInt(0);
    message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? BigInt(object.updatedAtHeight.toString()) : BigInt(0);
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
  fromAmino(object: DrawAmino): Draw {
    const message = createBaseDraw();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.draw_id !== undefined && object.draw_id !== null) {
      message.drawId = BigInt(object.draw_id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.error_state !== undefined && object.error_state !== null) {
      message.errorState = object.error_state;
    }
    if (object.rand_seed !== undefined && object.rand_seed !== null) {
      message.randSeed = BigInt(object.rand_seed);
    }
    if (object.prize_pool !== undefined && object.prize_pool !== null) {
      message.prizePool = Coin.fromAmino(object.prize_pool);
    }
    if (object.prize_pool_fresh_amount !== undefined && object.prize_pool_fresh_amount !== null) {
      message.prizePoolFreshAmount = object.prize_pool_fresh_amount;
    }
    if (object.prize_pool_remains_amount !== undefined && object.prize_pool_remains_amount !== null) {
      message.prizePoolRemainsAmount = object.prize_pool_remains_amount;
    }
    message.prizesRefs = object.prizes_refs?.map(e => PrizeRef.fromAmino(e)) || [];
    if (object.total_win_count !== undefined && object.total_win_count !== null) {
      message.totalWinCount = BigInt(object.total_win_count);
    }
    if (object.total_win_amount !== undefined && object.total_win_amount !== null) {
      message.totalWinAmount = object.total_win_amount;
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
  toAmino(message: Draw): DrawAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.draw_id = message.drawId !== BigInt(0) ? message.drawId.toString() : undefined;
    obj.state = message.state === 0 ? undefined : message.state;
    obj.error_state = message.errorState === 0 ? undefined : message.errorState;
    obj.rand_seed = message.randSeed !== BigInt(0) ? message.randSeed.toString() : undefined;
    obj.prize_pool = message.prizePool ? Coin.toAmino(message.prizePool) : undefined;
    obj.prize_pool_fresh_amount = message.prizePoolFreshAmount === "" ? undefined : message.prizePoolFreshAmount;
    obj.prize_pool_remains_amount = message.prizePoolRemainsAmount === "" ? undefined : message.prizePoolRemainsAmount;
    if (message.prizesRefs) {
      obj.prizes_refs = message.prizesRefs.map(e => e ? PrizeRef.toAmino(e) : undefined);
    } else {
      obj.prizes_refs = message.prizesRefs;
    }
    obj.total_win_count = message.totalWinCount !== BigInt(0) ? message.totalWinCount.toString() : undefined;
    obj.total_win_amount = message.totalWinAmount === "" ? undefined : message.totalWinAmount;
    obj.created_at_height = message.createdAtHeight !== BigInt(0) ? message.createdAtHeight.toString() : undefined;
    obj.updated_at_height = message.updatedAtHeight !== BigInt(0) ? message.updatedAtHeight.toString() : undefined;
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    obj.updated_at = message.updatedAt ? Timestamp.toAmino(toTimestamp(message.updatedAt)) : undefined;
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