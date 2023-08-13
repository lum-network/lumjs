import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, DeepPartial, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum WithdrawalState {
  WITHDRAWAL_STATE_UNSPECIFIED = 0,
  WITHDRAWAL_STATE_ICA_UNDELEGATE = 1,
  WITHDRAWAL_STATE_ICA_UNBONDING = 2,
  WITHDRAWAL_STATE_IBC_TRANSFER = 3,
  WITHDRAWAL_STATE_FAILURE = 4,
  WITHDRAWAL_STATE_PENDING = 5,
  UNRECOGNIZED = -1,
}
export const WithdrawalStateSDKType = WithdrawalState;
export const WithdrawalStateAmino = WithdrawalState;
export function withdrawalStateFromJSON(object: any): WithdrawalState {
  switch (object) {
    case 0:
    case "WITHDRAWAL_STATE_UNSPECIFIED":
      return WithdrawalState.WITHDRAWAL_STATE_UNSPECIFIED;
    case 1:
    case "WITHDRAWAL_STATE_ICA_UNDELEGATE":
      return WithdrawalState.WITHDRAWAL_STATE_ICA_UNDELEGATE;
    case 2:
    case "WITHDRAWAL_STATE_ICA_UNBONDING":
      return WithdrawalState.WITHDRAWAL_STATE_ICA_UNBONDING;
    case 3:
    case "WITHDRAWAL_STATE_IBC_TRANSFER":
      return WithdrawalState.WITHDRAWAL_STATE_IBC_TRANSFER;
    case 4:
    case "WITHDRAWAL_STATE_FAILURE":
      return WithdrawalState.WITHDRAWAL_STATE_FAILURE;
    case 5:
    case "WITHDRAWAL_STATE_PENDING":
      return WithdrawalState.WITHDRAWAL_STATE_PENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WithdrawalState.UNRECOGNIZED;
  }
}
export function withdrawalStateToJSON(object: WithdrawalState): string {
  switch (object) {
    case WithdrawalState.WITHDRAWAL_STATE_UNSPECIFIED:
      return "WITHDRAWAL_STATE_UNSPECIFIED";
    case WithdrawalState.WITHDRAWAL_STATE_ICA_UNDELEGATE:
      return "WITHDRAWAL_STATE_ICA_UNDELEGATE";
    case WithdrawalState.WITHDRAWAL_STATE_ICA_UNBONDING:
      return "WITHDRAWAL_STATE_ICA_UNBONDING";
    case WithdrawalState.WITHDRAWAL_STATE_IBC_TRANSFER:
      return "WITHDRAWAL_STATE_IBC_TRANSFER";
    case WithdrawalState.WITHDRAWAL_STATE_FAILURE:
      return "WITHDRAWAL_STATE_FAILURE";
    case WithdrawalState.WITHDRAWAL_STATE_PENDING:
      return "WITHDRAWAL_STATE_PENDING";
    case WithdrawalState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Withdrawal {
  poolId: Long;
  depositId: Long;
  withdrawalId: Long;
  state: WithdrawalState;
  errorState: WithdrawalState;
  depositorAddress: string;
  toAddress: string;
  amount: Coin | undefined;
  createdAtHeight: Long;
  updatedAtHeight: Long;
  unbondingEndsAt?: Date | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}
export interface WithdrawalProtoMsg {
  typeUrl: "/lum.network.millions.Withdrawal";
  value: Uint8Array;
}
export interface WithdrawalAmino {
  pool_id: string;
  deposit_id: string;
  withdrawal_id: string;
  state: WithdrawalState;
  error_state: WithdrawalState;
  depositor_address: string;
  to_address: string;
  amount?: CoinAmino | undefined;
  created_at_height: string;
  updated_at_height: string;
  unbonding_ends_at?: Date | undefined;
  created_at?: Date | undefined;
  updated_at?: Date | undefined;
}
export interface WithdrawalAminoMsg {
  type: "/lum.network.millions.Withdrawal";
  value: WithdrawalAmino;
}
export interface WithdrawalSDKType {
  pool_id: Long;
  deposit_id: Long;
  withdrawal_id: Long;
  state: WithdrawalState;
  error_state: WithdrawalState;
  depositor_address: string;
  to_address: string;
  amount: CoinSDKType | undefined;
  created_at_height: Long;
  updated_at_height: Long;
  unbonding_ends_at?: Date | undefined;
  created_at: Date | undefined;
  updated_at: Date | undefined;
}
export interface WithdrawalIDs {
  poolId: Long;
  withdrawalId: Long;
}
export interface WithdrawalIDsProtoMsg {
  typeUrl: "/lum.network.millions.WithdrawalIDs";
  value: Uint8Array;
}
export interface WithdrawalIDsAmino {
  pool_id: string;
  withdrawal_id: string;
}
export interface WithdrawalIDsAminoMsg {
  type: "/lum.network.millions.WithdrawalIDs";
  value: WithdrawalIDsAmino;
}
export interface WithdrawalIDsSDKType {
  pool_id: Long;
  withdrawal_id: Long;
}
export interface WithdrawalIDsCollection {
  withdrawalsIds: WithdrawalIDs[];
}
export interface WithdrawalIDsCollectionProtoMsg {
  typeUrl: "/lum.network.millions.WithdrawalIDsCollection";
  value: Uint8Array;
}
export interface WithdrawalIDsCollectionAmino {
  withdrawals_ids: WithdrawalIDsAmino[];
}
export interface WithdrawalIDsCollectionAminoMsg {
  type: "/lum.network.millions.WithdrawalIDsCollection";
  value: WithdrawalIDsCollectionAmino;
}
export interface WithdrawalIDsCollectionSDKType {
  withdrawals_ids: WithdrawalIDsSDKType[];
}
function createBaseWithdrawal(): Withdrawal {
  return {
    poolId: Long.UZERO,
    depositId: Long.UZERO,
    withdrawalId: Long.UZERO,
    state: 0,
    errorState: 0,
    depositorAddress: "",
    toAddress: "",
    amount: Coin.fromPartial({}),
    createdAtHeight: Long.ZERO,
    updatedAtHeight: Long.ZERO,
    unbondingEndsAt: undefined,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
export const Withdrawal = {
  encode(message: Withdrawal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.depositId.isZero()) {
      writer.uint32(16).uint64(message.depositId);
    }
    if (!message.withdrawalId.isZero()) {
      writer.uint32(24).uint64(message.withdrawalId);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.errorState !== 0) {
      writer.uint32(40).int32(message.errorState);
    }
    if (message.depositorAddress !== "") {
      writer.uint32(50).string(message.depositorAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(58).string(message.toAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(66).fork()).ldelim();
    }
    if (!message.createdAtHeight.isZero()) {
      writer.uint32(72).int64(message.createdAtHeight);
    }
    if (!message.updatedAtHeight.isZero()) {
      writer.uint32(80).int64(message.updatedAtHeight);
    }
    if (message.unbondingEndsAt !== undefined) {
      Timestamp.encode(toTimestamp(message.unbondingEndsAt), writer.uint32(90).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(98).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Withdrawal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawal();
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
          message.withdrawalId = (reader.uint64() as Long);
          break;
        case 4:
          message.state = (reader.int32() as any);
          break;
        case 5:
          message.errorState = (reader.int32() as any);
          break;
        case 6:
          message.depositorAddress = reader.string();
          break;
        case 7:
          message.toAddress = reader.string();
          break;
        case 8:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.createdAtHeight = (reader.int64() as Long);
          break;
        case 10:
          message.updatedAtHeight = (reader.int64() as Long);
          break;
        case 11:
          message.unbondingEndsAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<Withdrawal>): Withdrawal {
    const message = createBaseWithdrawal();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
    message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
    message.state = object.state ?? 0;
    message.errorState = object.errorState ?? 0;
    message.depositorAddress = object.depositorAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? Long.fromValue(object.createdAtHeight) : Long.ZERO;
    message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? Long.fromValue(object.updatedAtHeight) : Long.ZERO;
    message.unbondingEndsAt = object.unbondingEndsAt ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
  fromAmino(object: WithdrawalAmino): Withdrawal {
    return {
      poolId: Long.fromString(object.pool_id),
      depositId: Long.fromString(object.deposit_id),
      withdrawalId: Long.fromString(object.withdrawal_id),
      state: isSet(object.state) ? withdrawalStateFromJSON(object.state) : -1,
      errorState: isSet(object.error_state) ? withdrawalStateFromJSON(object.error_state) : -1,
      depositorAddress: object.depositor_address,
      toAddress: object.to_address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      createdAtHeight: Long.fromString(object.created_at_height),
      updatedAtHeight: Long.fromString(object.updated_at_height),
      unbondingEndsAt: object?.unbonding_ends_at,
      createdAt: object.created_at,
      updatedAt: object.updated_at
    };
  },
  toAmino(message: Withdrawal): WithdrawalAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
    obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
    obj.state = message.state;
    obj.error_state = message.errorState;
    obj.depositor_address = message.depositorAddress;
    obj.to_address = message.toAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.created_at_height = message.createdAtHeight ? message.createdAtHeight.toString() : undefined;
    obj.updated_at_height = message.updatedAtHeight ? message.updatedAtHeight.toString() : undefined;
    obj.unbonding_ends_at = message.unbondingEndsAt;
    obj.created_at = message.createdAt;
    obj.updated_at = message.updatedAt;
    return obj;
  },
  fromAminoMsg(object: WithdrawalAminoMsg): Withdrawal {
    return Withdrawal.fromAmino(object.value);
  },
  fromProtoMsg(message: WithdrawalProtoMsg): Withdrawal {
    return Withdrawal.decode(message.value);
  },
  toProto(message: Withdrawal): Uint8Array {
    return Withdrawal.encode(message).finish();
  },
  toProtoMsg(message: Withdrawal): WithdrawalProtoMsg {
    return {
      typeUrl: "/lum.network.millions.Withdrawal",
      value: Withdrawal.encode(message).finish()
    };
  }
};
function createBaseWithdrawalIDs(): WithdrawalIDs {
  return {
    poolId: Long.UZERO,
    withdrawalId: Long.UZERO
  };
}
export const WithdrawalIDs = {
  encode(message: WithdrawalIDs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.withdrawalId.isZero()) {
      writer.uint32(16).uint64(message.withdrawalId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalIDs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawalIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.withdrawalId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<WithdrawalIDs>): WithdrawalIDs {
    const message = createBaseWithdrawalIDs();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
    return message;
  },
  fromAmino(object: WithdrawalIDsAmino): WithdrawalIDs {
    return {
      poolId: Long.fromString(object.pool_id),
      withdrawalId: Long.fromString(object.withdrawal_id)
    };
  },
  toAmino(message: WithdrawalIDs): WithdrawalIDsAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: WithdrawalIDsAminoMsg): WithdrawalIDs {
    return WithdrawalIDs.fromAmino(object.value);
  },
  fromProtoMsg(message: WithdrawalIDsProtoMsg): WithdrawalIDs {
    return WithdrawalIDs.decode(message.value);
  },
  toProto(message: WithdrawalIDs): Uint8Array {
    return WithdrawalIDs.encode(message).finish();
  },
  toProtoMsg(message: WithdrawalIDs): WithdrawalIDsProtoMsg {
    return {
      typeUrl: "/lum.network.millions.WithdrawalIDs",
      value: WithdrawalIDs.encode(message).finish()
    };
  }
};
function createBaseWithdrawalIDsCollection(): WithdrawalIDsCollection {
  return {
    withdrawalsIds: []
  };
}
export const WithdrawalIDsCollection = {
  encode(message: WithdrawalIDsCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.withdrawalsIds) {
      WithdrawalIDs.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalIDsCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawalIDsCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawalsIds.push(WithdrawalIDs.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<WithdrawalIDsCollection>): WithdrawalIDsCollection {
    const message = createBaseWithdrawalIDsCollection();
    message.withdrawalsIds = object.withdrawalsIds?.map(e => WithdrawalIDs.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: WithdrawalIDsCollectionAmino): WithdrawalIDsCollection {
    return {
      withdrawalsIds: Array.isArray(object?.withdrawals_ids) ? object.withdrawals_ids.map((e: any) => WithdrawalIDs.fromAmino(e)) : []
    };
  },
  toAmino(message: WithdrawalIDsCollection): WithdrawalIDsCollectionAmino {
    const obj: any = {};
    if (message.withdrawalsIds) {
      obj.withdrawals_ids = message.withdrawalsIds.map(e => e ? WithdrawalIDs.toAmino(e) : undefined);
    } else {
      obj.withdrawals_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: WithdrawalIDsCollectionAminoMsg): WithdrawalIDsCollection {
    return WithdrawalIDsCollection.fromAmino(object.value);
  },
  fromProtoMsg(message: WithdrawalIDsCollectionProtoMsg): WithdrawalIDsCollection {
    return WithdrawalIDsCollection.decode(message.value);
  },
  toProto(message: WithdrawalIDsCollection): Uint8Array {
    return WithdrawalIDsCollection.encode(message).finish();
  },
  toProtoMsg(message: WithdrawalIDsCollection): WithdrawalIDsCollectionProtoMsg {
    return {
      typeUrl: "/lum.network.millions.WithdrawalIDsCollection",
      value: WithdrawalIDsCollection.encode(message).finish()
    };
  }
};