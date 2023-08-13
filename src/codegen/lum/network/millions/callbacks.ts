import { Long, DeepPartial, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum TransferType {
  TRANSFER_TYPE_UNSPECIFIED = 0,
  TRANSFER_TYPE_CLAIM = 1,
  TRANSFER_TYPE_WITHDRAW = 2,
  UNRECOGNIZED = -1,
}
export const TransferTypeSDKType = TransferType;
export const TransferTypeAmino = TransferType;
export function transferTypeFromJSON(object: any): TransferType {
  switch (object) {
    case 0:
    case "TRANSFER_TYPE_UNSPECIFIED":
      return TransferType.TRANSFER_TYPE_UNSPECIFIED;
    case 1:
    case "TRANSFER_TYPE_CLAIM":
      return TransferType.TRANSFER_TYPE_CLAIM;
    case 2:
    case "TRANSFER_TYPE_WITHDRAW":
      return TransferType.TRANSFER_TYPE_WITHDRAW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferType.UNRECOGNIZED;
  }
}
export function transferTypeToJSON(object: TransferType): string {
  switch (object) {
    case TransferType.TRANSFER_TYPE_UNSPECIFIED:
      return "TRANSFER_TYPE_UNSPECIFIED";
    case TransferType.TRANSFER_TYPE_CLAIM:
      return "TRANSFER_TYPE_CLAIM";
    case TransferType.TRANSFER_TYPE_WITHDRAW:
      return "TRANSFER_TYPE_WITHDRAW";
    case TransferType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface SplitDelegation {
  validatorAddress: string;
  amount: string;
}
export interface SplitDelegationProtoMsg {
  typeUrl: "/lum.network.millions.SplitDelegation";
  value: Uint8Array;
}
export interface SplitDelegationAmino {
  validator_address: string;
  amount: string;
}
export interface SplitDelegationAminoMsg {
  type: "/lum.network.millions.SplitDelegation";
  value: SplitDelegationAmino;
}
export interface SplitDelegationSDKType {
  validator_address: string;
  amount: string;
}
export interface DelegateCallback {
  poolId: Long;
  depositId: Long;
  splitDelegations: SplitDelegation[];
}
export interface DelegateCallbackProtoMsg {
  typeUrl: "/lum.network.millions.DelegateCallback";
  value: Uint8Array;
}
export interface DelegateCallbackAmino {
  pool_id: string;
  deposit_id: string;
  split_delegations: SplitDelegationAmino[];
}
export interface DelegateCallbackAminoMsg {
  type: "/lum.network.millions.DelegateCallback";
  value: DelegateCallbackAmino;
}
export interface DelegateCallbackSDKType {
  pool_id: Long;
  deposit_id: Long;
  split_delegations: SplitDelegationSDKType[];
}
export interface UndelegateCallback {
  poolId: Long;
  withdrawalIds: Long[];
}
export interface UndelegateCallbackProtoMsg {
  typeUrl: "/lum.network.millions.UndelegateCallback";
  value: Uint8Array;
}
export interface UndelegateCallbackAmino {
  pool_id: string;
  withdrawal_ids: string[];
}
export interface UndelegateCallbackAminoMsg {
  type: "/lum.network.millions.UndelegateCallback";
  value: UndelegateCallbackAmino;
}
export interface UndelegateCallbackSDKType {
  pool_id: Long;
  withdrawal_ids: Long[];
}
export interface RedelegateCallback {
  poolId: Long;
  operatorAddress: string;
  splitDelegations: SplitDelegation[];
}
export interface RedelegateCallbackProtoMsg {
  typeUrl: "/lum.network.millions.RedelegateCallback";
  value: Uint8Array;
}
export interface RedelegateCallbackAmino {
  pool_id: string;
  operator_address: string;
  split_delegations: SplitDelegationAmino[];
}
export interface RedelegateCallbackAminoMsg {
  type: "/lum.network.millions.RedelegateCallback";
  value: RedelegateCallbackAmino;
}
export interface RedelegateCallbackSDKType {
  pool_id: Long;
  operator_address: string;
  split_delegations: SplitDelegationSDKType[];
}
export interface ClaimRewardsCallback {
  poolId: Long;
  drawId: Long;
}
export interface ClaimRewardsCallbackProtoMsg {
  typeUrl: "/lum.network.millions.ClaimRewardsCallback";
  value: Uint8Array;
}
export interface ClaimRewardsCallbackAmino {
  pool_id: string;
  draw_id: string;
}
export interface ClaimRewardsCallbackAminoMsg {
  type: "/lum.network.millions.ClaimRewardsCallback";
  value: ClaimRewardsCallbackAmino;
}
export interface ClaimRewardsCallbackSDKType {
  pool_id: Long;
  draw_id: Long;
}
export interface TransferToNativeCallback {
  poolId: Long;
  depositId: Long;
}
export interface TransferToNativeCallbackProtoMsg {
  typeUrl: "/lum.network.millions.TransferToNativeCallback";
  value: Uint8Array;
}
export interface TransferToNativeCallbackAmino {
  pool_id: string;
  deposit_id: string;
}
export interface TransferToNativeCallbackAminoMsg {
  type: "/lum.network.millions.TransferToNativeCallback";
  value: TransferToNativeCallbackAmino;
}
export interface TransferToNativeCallbackSDKType {
  pool_id: Long;
  deposit_id: Long;
}
export interface TransferFromNativeCallback {
  type: TransferType;
  poolId: Long;
  drawId: Long;
  withdrawalId: Long;
}
export interface TransferFromNativeCallbackProtoMsg {
  typeUrl: "/lum.network.millions.TransferFromNativeCallback";
  value: Uint8Array;
}
export interface TransferFromNativeCallbackAmino {
  type: TransferType;
  pool_id: string;
  draw_id: string;
  withdrawal_id: string;
}
export interface TransferFromNativeCallbackAminoMsg {
  type: "/lum.network.millions.TransferFromNativeCallback";
  value: TransferFromNativeCallbackAmino;
}
export interface TransferFromNativeCallbackSDKType {
  type: TransferType;
  pool_id: Long;
  draw_id: Long;
  withdrawal_id: Long;
}
export interface SetWithdrawAddressCallback {
  poolId: Long;
}
export interface SetWithdrawAddressCallbackProtoMsg {
  typeUrl: "/lum.network.millions.SetWithdrawAddressCallback";
  value: Uint8Array;
}
export interface SetWithdrawAddressCallbackAmino {
  pool_id: string;
}
export interface SetWithdrawAddressCallbackAminoMsg {
  type: "/lum.network.millions.SetWithdrawAddressCallback";
  value: SetWithdrawAddressCallbackAmino;
}
export interface SetWithdrawAddressCallbackSDKType {
  pool_id: Long;
}
export interface BankSendCallback {
  poolId: Long;
  withdrawalId: Long;
}
export interface BankSendCallbackProtoMsg {
  typeUrl: "/lum.network.millions.BankSendCallback";
  value: Uint8Array;
}
export interface BankSendCallbackAmino {
  pool_id: string;
  withdrawal_id: string;
}
export interface BankSendCallbackAminoMsg {
  type: "/lum.network.millions.BankSendCallback";
  value: BankSendCallbackAmino;
}
export interface BankSendCallbackSDKType {
  pool_id: Long;
  withdrawal_id: Long;
}
function createBaseSplitDelegation(): SplitDelegation {
  return {
    validatorAddress: "",
    amount: ""
  };
}
export const SplitDelegation = {
  encode(message: SplitDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SplitDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSplitDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SplitDelegation>): SplitDelegation {
    const message = createBaseSplitDelegation();
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: SplitDelegationAmino): SplitDelegation {
    return {
      validatorAddress: object.validator_address,
      amount: object.amount
    };
  },
  toAmino(message: SplitDelegation): SplitDelegationAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: SplitDelegationAminoMsg): SplitDelegation {
    return SplitDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: SplitDelegationProtoMsg): SplitDelegation {
    return SplitDelegation.decode(message.value);
  },
  toProto(message: SplitDelegation): Uint8Array {
    return SplitDelegation.encode(message).finish();
  },
  toProtoMsg(message: SplitDelegation): SplitDelegationProtoMsg {
    return {
      typeUrl: "/lum.network.millions.SplitDelegation",
      value: SplitDelegation.encode(message).finish()
    };
  }
};
function createBaseDelegateCallback(): DelegateCallback {
  return {
    poolId: Long.UZERO,
    depositId: Long.UZERO,
    splitDelegations: []
  };
}
export const DelegateCallback = {
  encode(message: DelegateCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.depositId.isZero()) {
      writer.uint32(16).uint64(message.depositId);
    }
    for (const v of message.splitDelegations) {
      SplitDelegation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DelegateCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateCallback();
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
          message.splitDelegations.push(SplitDelegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DelegateCallback>): DelegateCallback {
    const message = createBaseDelegateCallback();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
    message.splitDelegations = object.splitDelegations?.map(e => SplitDelegation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegateCallbackAmino): DelegateCallback {
    return {
      poolId: Long.fromString(object.pool_id),
      depositId: Long.fromString(object.deposit_id),
      splitDelegations: Array.isArray(object?.split_delegations) ? object.split_delegations.map((e: any) => SplitDelegation.fromAmino(e)) : []
    };
  },
  toAmino(message: DelegateCallback): DelegateCallbackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
    if (message.splitDelegations) {
      obj.split_delegations = message.splitDelegations.map(e => e ? SplitDelegation.toAmino(e) : undefined);
    } else {
      obj.split_delegations = [];
    }
    return obj;
  },
  fromAminoMsg(object: DelegateCallbackAminoMsg): DelegateCallback {
    return DelegateCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegateCallbackProtoMsg): DelegateCallback {
    return DelegateCallback.decode(message.value);
  },
  toProto(message: DelegateCallback): Uint8Array {
    return DelegateCallback.encode(message).finish();
  },
  toProtoMsg(message: DelegateCallback): DelegateCallbackProtoMsg {
    return {
      typeUrl: "/lum.network.millions.DelegateCallback",
      value: DelegateCallback.encode(message).finish()
    };
  }
};
function createBaseUndelegateCallback(): UndelegateCallback {
  return {
    poolId: Long.UZERO,
    withdrawalIds: []
  };
}
export const UndelegateCallback = {
  encode(message: UndelegateCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    writer.uint32(34).fork();
    for (const v of message.withdrawalIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegateCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UndelegateCallback>): UndelegateCallback {
    const message = createBaseUndelegateCallback();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.withdrawalIds = object.withdrawalIds?.map(e => Long.fromValue(e)) || [];
    return message;
  },
  fromAmino(object: UndelegateCallbackAmino): UndelegateCallback {
    return {
      poolId: Long.fromString(object.pool_id),
      withdrawalIds: Array.isArray(object?.withdrawal_ids) ? object.withdrawal_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: UndelegateCallback): UndelegateCallbackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.withdrawalIds) {
      obj.withdrawal_ids = message.withdrawalIds.map(e => e);
    } else {
      obj.withdrawal_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: UndelegateCallbackAminoMsg): UndelegateCallback {
    return UndelegateCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: UndelegateCallbackProtoMsg): UndelegateCallback {
    return UndelegateCallback.decode(message.value);
  },
  toProto(message: UndelegateCallback): Uint8Array {
    return UndelegateCallback.encode(message).finish();
  },
  toProtoMsg(message: UndelegateCallback): UndelegateCallbackProtoMsg {
    return {
      typeUrl: "/lum.network.millions.UndelegateCallback",
      value: UndelegateCallback.encode(message).finish()
    };
  }
};
function createBaseRedelegateCallback(): RedelegateCallback {
  return {
    poolId: Long.UZERO,
    operatorAddress: "",
    splitDelegations: []
  };
}
export const RedelegateCallback = {
  encode(message: RedelegateCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    for (const v of message.splitDelegations) {
      SplitDelegation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegateCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegateCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.operatorAddress = reader.string();
          break;
        case 3:
          message.splitDelegations.push(SplitDelegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RedelegateCallback>): RedelegateCallback {
    const message = createBaseRedelegateCallback();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.operatorAddress = object.operatorAddress ?? "";
    message.splitDelegations = object.splitDelegations?.map(e => SplitDelegation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RedelegateCallbackAmino): RedelegateCallback {
    return {
      poolId: Long.fromString(object.pool_id),
      operatorAddress: object.operator_address,
      splitDelegations: Array.isArray(object?.split_delegations) ? object.split_delegations.map((e: any) => SplitDelegation.fromAmino(e)) : []
    };
  },
  toAmino(message: RedelegateCallback): RedelegateCallbackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.operator_address = message.operatorAddress;
    if (message.splitDelegations) {
      obj.split_delegations = message.splitDelegations.map(e => e ? SplitDelegation.toAmino(e) : undefined);
    } else {
      obj.split_delegations = [];
    }
    return obj;
  },
  fromAminoMsg(object: RedelegateCallbackAminoMsg): RedelegateCallback {
    return RedelegateCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: RedelegateCallbackProtoMsg): RedelegateCallback {
    return RedelegateCallback.decode(message.value);
  },
  toProto(message: RedelegateCallback): Uint8Array {
    return RedelegateCallback.encode(message).finish();
  },
  toProtoMsg(message: RedelegateCallback): RedelegateCallbackProtoMsg {
    return {
      typeUrl: "/lum.network.millions.RedelegateCallback",
      value: RedelegateCallback.encode(message).finish()
    };
  }
};
function createBaseClaimRewardsCallback(): ClaimRewardsCallback {
  return {
    poolId: Long.UZERO,
    drawId: Long.UZERO
  };
}
export const ClaimRewardsCallback = {
  encode(message: ClaimRewardsCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.drawId.isZero()) {
      writer.uint32(16).uint64(message.drawId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRewardsCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRewardsCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.drawId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClaimRewardsCallback>): ClaimRewardsCallback {
    const message = createBaseClaimRewardsCallback();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
    return message;
  },
  fromAmino(object: ClaimRewardsCallbackAmino): ClaimRewardsCallback {
    return {
      poolId: Long.fromString(object.pool_id),
      drawId: Long.fromString(object.draw_id)
    };
  },
  toAmino(message: ClaimRewardsCallback): ClaimRewardsCallbackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ClaimRewardsCallbackAminoMsg): ClaimRewardsCallback {
    return ClaimRewardsCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimRewardsCallbackProtoMsg): ClaimRewardsCallback {
    return ClaimRewardsCallback.decode(message.value);
  },
  toProto(message: ClaimRewardsCallback): Uint8Array {
    return ClaimRewardsCallback.encode(message).finish();
  },
  toProtoMsg(message: ClaimRewardsCallback): ClaimRewardsCallbackProtoMsg {
    return {
      typeUrl: "/lum.network.millions.ClaimRewardsCallback",
      value: ClaimRewardsCallback.encode(message).finish()
    };
  }
};
function createBaseTransferToNativeCallback(): TransferToNativeCallback {
  return {
    poolId: Long.UZERO,
    depositId: Long.UZERO
  };
}
export const TransferToNativeCallback = {
  encode(message: TransferToNativeCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.depositId.isZero()) {
      writer.uint32(16).uint64(message.depositId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TransferToNativeCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferToNativeCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.depositId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TransferToNativeCallback>): TransferToNativeCallback {
    const message = createBaseTransferToNativeCallback();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
    return message;
  },
  fromAmino(object: TransferToNativeCallbackAmino): TransferToNativeCallback {
    return {
      poolId: Long.fromString(object.pool_id),
      depositId: Long.fromString(object.deposit_id)
    };
  },
  toAmino(message: TransferToNativeCallback): TransferToNativeCallbackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TransferToNativeCallbackAminoMsg): TransferToNativeCallback {
    return TransferToNativeCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferToNativeCallbackProtoMsg): TransferToNativeCallback {
    return TransferToNativeCallback.decode(message.value);
  },
  toProto(message: TransferToNativeCallback): Uint8Array {
    return TransferToNativeCallback.encode(message).finish();
  },
  toProtoMsg(message: TransferToNativeCallback): TransferToNativeCallbackProtoMsg {
    return {
      typeUrl: "/lum.network.millions.TransferToNativeCallback",
      value: TransferToNativeCallback.encode(message).finish()
    };
  }
};
function createBaseTransferFromNativeCallback(): TransferFromNativeCallback {
  return {
    type: 0,
    poolId: Long.UZERO,
    drawId: Long.UZERO,
    withdrawalId: Long.UZERO
  };
}
export const TransferFromNativeCallback = {
  encode(message: TransferFromNativeCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (!message.drawId.isZero()) {
      writer.uint32(24).uint64(message.drawId);
    }
    if (!message.withdrawalId.isZero()) {
      writer.uint32(32).uint64(message.withdrawalId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TransferFromNativeCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferFromNativeCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.drawId = (reader.uint64() as Long);
          break;
        case 4:
          message.withdrawalId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TransferFromNativeCallback>): TransferFromNativeCallback {
    const message = createBaseTransferFromNativeCallback();
    message.type = object.type ?? 0;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
    message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
    return message;
  },
  fromAmino(object: TransferFromNativeCallbackAmino): TransferFromNativeCallback {
    return {
      type: isSet(object.type) ? transferTypeFromJSON(object.type) : -1,
      poolId: Long.fromString(object.pool_id),
      drawId: Long.fromString(object.draw_id),
      withdrawalId: Long.fromString(object.withdrawal_id)
    };
  },
  toAmino(message: TransferFromNativeCallback): TransferFromNativeCallbackAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
    obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TransferFromNativeCallbackAminoMsg): TransferFromNativeCallback {
    return TransferFromNativeCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferFromNativeCallbackProtoMsg): TransferFromNativeCallback {
    return TransferFromNativeCallback.decode(message.value);
  },
  toProto(message: TransferFromNativeCallback): Uint8Array {
    return TransferFromNativeCallback.encode(message).finish();
  },
  toProtoMsg(message: TransferFromNativeCallback): TransferFromNativeCallbackProtoMsg {
    return {
      typeUrl: "/lum.network.millions.TransferFromNativeCallback",
      value: TransferFromNativeCallback.encode(message).finish()
    };
  }
};
function createBaseSetWithdrawAddressCallback(): SetWithdrawAddressCallback {
  return {
    poolId: Long.UZERO
  };
}
export const SetWithdrawAddressCallback = {
  encode(message: SetWithdrawAddressCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SetWithdrawAddressCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetWithdrawAddressCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SetWithdrawAddressCallback>): SetWithdrawAddressCallback {
    const message = createBaseSetWithdrawAddressCallback();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  },
  fromAmino(object: SetWithdrawAddressCallbackAmino): SetWithdrawAddressCallback {
    return {
      poolId: Long.fromString(object.pool_id)
    };
  },
  toAmino(message: SetWithdrawAddressCallback): SetWithdrawAddressCallbackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SetWithdrawAddressCallbackAminoMsg): SetWithdrawAddressCallback {
    return SetWithdrawAddressCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: SetWithdrawAddressCallbackProtoMsg): SetWithdrawAddressCallback {
    return SetWithdrawAddressCallback.decode(message.value);
  },
  toProto(message: SetWithdrawAddressCallback): Uint8Array {
    return SetWithdrawAddressCallback.encode(message).finish();
  },
  toProtoMsg(message: SetWithdrawAddressCallback): SetWithdrawAddressCallbackProtoMsg {
    return {
      typeUrl: "/lum.network.millions.SetWithdrawAddressCallback",
      value: SetWithdrawAddressCallback.encode(message).finish()
    };
  }
};
function createBaseBankSendCallback(): BankSendCallback {
  return {
    poolId: Long.UZERO,
    withdrawalId: Long.UZERO
  };
}
export const BankSendCallback = {
  encode(message: BankSendCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.withdrawalId.isZero()) {
      writer.uint32(16).uint64(message.withdrawalId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BankSendCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBankSendCallback();
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
  fromPartial(object: DeepPartial<BankSendCallback>): BankSendCallback {
    const message = createBaseBankSendCallback();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
    return message;
  },
  fromAmino(object: BankSendCallbackAmino): BankSendCallback {
    return {
      poolId: Long.fromString(object.pool_id),
      withdrawalId: Long.fromString(object.withdrawal_id)
    };
  },
  toAmino(message: BankSendCallback): BankSendCallbackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BankSendCallbackAminoMsg): BankSendCallback {
    return BankSendCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: BankSendCallbackProtoMsg): BankSendCallback {
    return BankSendCallback.decode(message.value);
  },
  toProto(message: BankSendCallback): Uint8Array {
    return BankSendCallback.encode(message).finish();
  },
  toProtoMsg(message: BankSendCallback): BankSendCallbackProtoMsg {
    return {
      typeUrl: "/lum.network.millions.BankSendCallback",
      value: BankSendCallback.encode(message).finish()
    };
  }
};