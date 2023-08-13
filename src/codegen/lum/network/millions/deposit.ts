import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, DeepPartial, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum DepositState {
  DEPOSIT_STATE_UNSPECIFIED = 0,
  DEPOSIT_STATE_IBC_TRANSFER = 1,
  DEPOSIT_STATE_ICA_DELEGATE = 2,
  DEPOSIT_STATE_SUCCESS = 3,
  DEPOSIT_STATE_FAILURE = 4,
  UNRECOGNIZED = -1,
}
export const DepositStateSDKType = DepositState;
export const DepositStateAmino = DepositState;
export function depositStateFromJSON(object: any): DepositState {
  switch (object) {
    case 0:
    case "DEPOSIT_STATE_UNSPECIFIED":
      return DepositState.DEPOSIT_STATE_UNSPECIFIED;
    case 1:
    case "DEPOSIT_STATE_IBC_TRANSFER":
      return DepositState.DEPOSIT_STATE_IBC_TRANSFER;
    case 2:
    case "DEPOSIT_STATE_ICA_DELEGATE":
      return DepositState.DEPOSIT_STATE_ICA_DELEGATE;
    case 3:
    case "DEPOSIT_STATE_SUCCESS":
      return DepositState.DEPOSIT_STATE_SUCCESS;
    case 4:
    case "DEPOSIT_STATE_FAILURE":
      return DepositState.DEPOSIT_STATE_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositState.UNRECOGNIZED;
  }
}
export function depositStateToJSON(object: DepositState): string {
  switch (object) {
    case DepositState.DEPOSIT_STATE_UNSPECIFIED:
      return "DEPOSIT_STATE_UNSPECIFIED";
    case DepositState.DEPOSIT_STATE_IBC_TRANSFER:
      return "DEPOSIT_STATE_IBC_TRANSFER";
    case DepositState.DEPOSIT_STATE_ICA_DELEGATE:
      return "DEPOSIT_STATE_ICA_DELEGATE";
    case DepositState.DEPOSIT_STATE_SUCCESS:
      return "DEPOSIT_STATE_SUCCESS";
    case DepositState.DEPOSIT_STATE_FAILURE:
      return "DEPOSIT_STATE_FAILURE";
    case DepositState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Deposit {
  poolId: Long;
  depositId: Long;
  state: DepositState;
  errorState: DepositState;
  depositorAddress: string;
  amount: Coin | undefined;
  winnerAddress: string;
  isSponsor: boolean;
  createdAtHeight: Long;
  updatedAtHeight: Long;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}
export interface DepositProtoMsg {
  typeUrl: "/lum.network.millions.Deposit";
  value: Uint8Array;
}
export interface DepositAmino {
  pool_id: string;
  deposit_id: string;
  state: DepositState;
  error_state: DepositState;
  depositor_address: string;
  amount?: CoinAmino | undefined;
  winner_address: string;
  is_sponsor: boolean;
  created_at_height: string;
  updated_at_height: string;
  created_at?: Date | undefined;
  updated_at?: Date | undefined;
}
export interface DepositAminoMsg {
  type: "/lum.network.millions.Deposit";
  value: DepositAmino;
}
export interface DepositSDKType {
  pool_id: Long;
  deposit_id: Long;
  state: DepositState;
  error_state: DepositState;
  depositor_address: string;
  amount: CoinSDKType | undefined;
  winner_address: string;
  is_sponsor: boolean;
  created_at_height: Long;
  updated_at_height: Long;
  created_at: Date | undefined;
  updated_at: Date | undefined;
}
function createBaseDeposit(): Deposit {
  return {
    poolId: Long.UZERO,
    depositId: Long.UZERO,
    state: 0,
    errorState: 0,
    depositorAddress: "",
    amount: Coin.fromPartial({}),
    winnerAddress: "",
    isSponsor: false,
    createdAtHeight: Long.ZERO,
    updatedAtHeight: Long.ZERO,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
export const Deposit = {
  encode(message: Deposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.depositId.isZero()) {
      writer.uint32(16).uint64(message.depositId);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.errorState !== 0) {
      writer.uint32(32).int32(message.errorState);
    }
    if (message.depositorAddress !== "") {
      writer.uint32(42).string(message.depositorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
    }
    if (message.winnerAddress !== "") {
      writer.uint32(58).string(message.winnerAddress);
    }
    if (message.isSponsor === true) {
      writer.uint32(64).bool(message.isSponsor);
    }
    if (!message.createdAtHeight.isZero()) {
      writer.uint32(80).int64(message.createdAtHeight);
    }
    if (!message.updatedAtHeight.isZero()) {
      writer.uint32(88).int64(message.updatedAtHeight);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(98).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.depositId = (reader.uint64() as Long);
          break;
        case 3:
          message.state = (reader.int32() as any);
          break;
        case 4:
          message.errorState = (reader.int32() as any);
          break;
        case 5:
          message.depositorAddress = reader.string();
          break;
        case 6:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.winnerAddress = reader.string();
          break;
        case 8:
          message.isSponsor = reader.bool();
          break;
        case 10:
          message.createdAtHeight = (reader.int64() as Long);
          break;
        case 11:
          message.updatedAtHeight = (reader.int64() as Long);
          break;
        case 12:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 13:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
    message.state = object.state ?? 0;
    message.errorState = object.errorState ?? 0;
    message.depositorAddress = object.depositorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.winnerAddress = object.winnerAddress ?? "";
    message.isSponsor = object.isSponsor ?? false;
    message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? Long.fromValue(object.createdAtHeight) : Long.ZERO;
    message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? Long.fromValue(object.updatedAtHeight) : Long.ZERO;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
  fromAmino(object: DepositAmino): Deposit {
    return {
      poolId: Long.fromString(object.pool_id),
      depositId: Long.fromString(object.deposit_id),
      state: isSet(object.state) ? depositStateFromJSON(object.state) : -1,
      errorState: isSet(object.error_state) ? depositStateFromJSON(object.error_state) : -1,
      depositorAddress: object.depositor_address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      winnerAddress: object.winner_address,
      isSponsor: object.is_sponsor,
      createdAtHeight: Long.fromString(object.created_at_height),
      updatedAtHeight: Long.fromString(object.updated_at_height),
      createdAt: object.created_at,
      updatedAt: object.updated_at
    };
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
    obj.state = message.state;
    obj.error_state = message.errorState;
    obj.depositor_address = message.depositorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.winner_address = message.winnerAddress;
    obj.is_sponsor = message.isSponsor;
    obj.created_at_height = message.createdAtHeight ? message.createdAtHeight.toString() : undefined;
    obj.updated_at_height = message.updatedAtHeight ? message.updatedAtHeight.toString() : undefined;
    obj.created_at = message.createdAt;
    obj.updated_at = message.updatedAt;
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/lum.network.millions.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};