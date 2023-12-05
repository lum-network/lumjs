import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet } from "../../../helpers";
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
  poolId: bigint;
  depositId: bigint;
  withdrawalId: bigint;
  state: WithdrawalState;
  errorState: WithdrawalState;
  depositorAddress: string;
  toAddress: string;
  amount: Coin | undefined;
  createdAtHeight: bigint;
  updatedAtHeight: bigint;
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
  unbonding_ends_at?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
}
export interface WithdrawalAminoMsg {
  type: "/lum.network.millions.Withdrawal";
  value: WithdrawalAmino;
}
export interface WithdrawalSDKType {
  pool_id: bigint;
  deposit_id: bigint;
  withdrawal_id: bigint;
  state: WithdrawalState;
  error_state: WithdrawalState;
  depositor_address: string;
  to_address: string;
  amount: CoinSDKType | undefined;
  created_at_height: bigint;
  updated_at_height: bigint;
  unbonding_ends_at?: Date | undefined;
  created_at: Date | undefined;
  updated_at: Date | undefined;
}
export interface WithdrawalIDs {
  poolId: bigint;
  withdrawalId: bigint;
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
  pool_id: bigint;
  withdrawal_id: bigint;
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
    poolId: BigInt(0),
    depositId: BigInt(0),
    withdrawalId: BigInt(0),
    state: 0,
    errorState: 0,
    depositorAddress: "",
    toAddress: "",
    amount: Coin.fromPartial({}),
    createdAtHeight: BigInt(0),
    updatedAtHeight: BigInt(0),
    unbondingEndsAt: undefined,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
export const Withdrawal = {
  typeUrl: "/lum.network.millions.Withdrawal",
  encode(message: Withdrawal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.depositId !== BigInt(0)) {
      writer.uint32(16).uint64(message.depositId);
    }
    if (message.withdrawalId !== BigInt(0)) {
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
    if (message.createdAtHeight !== BigInt(0)) {
      writer.uint32(72).int64(message.createdAtHeight);
    }
    if (message.updatedAtHeight !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Withdrawal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.depositId = reader.uint64();
          break;
        case 3:
          message.withdrawalId = reader.uint64();
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
          message.createdAtHeight = reader.int64();
          break;
        case 10:
          message.updatedAtHeight = reader.int64();
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
  fromPartial(object: Partial<Withdrawal>): Withdrawal {
    const message = createBaseWithdrawal();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.depositId = object.depositId !== undefined && object.depositId !== null ? BigInt(object.depositId.toString()) : BigInt(0);
    message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? BigInt(object.withdrawalId.toString()) : BigInt(0);
    message.state = object.state ?? 0;
    message.errorState = object.errorState ?? 0;
    message.depositorAddress = object.depositorAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? BigInt(object.createdAtHeight.toString()) : BigInt(0);
    message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? BigInt(object.updatedAtHeight.toString()) : BigInt(0);
    message.unbondingEndsAt = object.unbondingEndsAt ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
  fromAmino(object: WithdrawalAmino): Withdrawal {
    return {
      poolId: BigInt(object.pool_id),
      depositId: BigInt(object.deposit_id),
      withdrawalId: BigInt(object.withdrawal_id),
      state: isSet(object.state) ? withdrawalStateFromJSON(object.state) : -1,
      errorState: isSet(object.error_state) ? withdrawalStateFromJSON(object.error_state) : -1,
      depositorAddress: object.depositor_address,
      toAddress: object.to_address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      createdAtHeight: BigInt(object.created_at_height),
      updatedAtHeight: BigInt(object.updated_at_height),
      unbondingEndsAt: object?.unbonding_ends_at ? fromTimestamp(Timestamp.fromAmino(object.unbonding_ends_at)) : undefined,
      createdAt: object?.created_at ? fromTimestamp(Timestamp.fromAmino(object.created_at)) : undefined,
      updatedAt: object?.updated_at ? fromTimestamp(Timestamp.fromAmino(object.updated_at)) : undefined
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
    obj.unbonding_ends_at = message.unbondingEndsAt ? Timestamp.toAmino(toTimestamp(message.unbondingEndsAt)) : undefined;
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    obj.updated_at = message.updatedAt ? Timestamp.toAmino(toTimestamp(message.updatedAt)) : undefined;
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
    poolId: BigInt(0),
    withdrawalId: BigInt(0)
  };
}
export const WithdrawalIDs = {
  typeUrl: "/lum.network.millions.WithdrawalIDs",
  encode(message: WithdrawalIDs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.withdrawalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.withdrawalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WithdrawalIDs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawalIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.withdrawalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WithdrawalIDs>): WithdrawalIDs {
    const message = createBaseWithdrawalIDs();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? BigInt(object.withdrawalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: WithdrawalIDsAmino): WithdrawalIDs {
    return {
      poolId: BigInt(object.pool_id),
      withdrawalId: BigInt(object.withdrawal_id)
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
  typeUrl: "/lum.network.millions.WithdrawalIDsCollection",
  encode(message: WithdrawalIDsCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.withdrawalsIds) {
      WithdrawalIDs.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WithdrawalIDsCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<WithdrawalIDsCollection>): WithdrawalIDsCollection {
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