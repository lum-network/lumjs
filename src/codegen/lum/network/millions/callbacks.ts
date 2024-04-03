import { BinaryReader, BinaryWriter } from "../../../binary";
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
  validator_address?: string;
  amount?: string;
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
  poolId: bigint;
  depositId: bigint;
  splitDelegations: SplitDelegation[];
}
export interface DelegateCallbackProtoMsg {
  typeUrl: "/lum.network.millions.DelegateCallback";
  value: Uint8Array;
}
export interface DelegateCallbackAmino {
  pool_id?: string;
  deposit_id?: string;
  split_delegations?: SplitDelegationAmino[];
}
export interface DelegateCallbackAminoMsg {
  type: "/lum.network.millions.DelegateCallback";
  value: DelegateCallbackAmino;
}
export interface DelegateCallbackSDKType {
  pool_id: bigint;
  deposit_id: bigint;
  split_delegations: SplitDelegationSDKType[];
}
export interface UndelegateCallback {
  poolId: bigint;
  withdrawalIds: bigint[];
}
export interface UndelegateCallbackProtoMsg {
  typeUrl: "/lum.network.millions.UndelegateCallback";
  value: Uint8Array;
}
export interface UndelegateCallbackAmino {
  pool_id?: string;
  withdrawal_ids?: string[];
}
export interface UndelegateCallbackAminoMsg {
  type: "/lum.network.millions.UndelegateCallback";
  value: UndelegateCallbackAmino;
}
export interface UndelegateCallbackSDKType {
  pool_id: bigint;
  withdrawal_ids: bigint[];
}
export interface RedelegateCallback {
  poolId: bigint;
  operatorAddress: string;
  splitDelegations: SplitDelegation[];
}
export interface RedelegateCallbackProtoMsg {
  typeUrl: "/lum.network.millions.RedelegateCallback";
  value: Uint8Array;
}
export interface RedelegateCallbackAmino {
  pool_id?: string;
  operator_address?: string;
  split_delegations?: SplitDelegationAmino[];
}
export interface RedelegateCallbackAminoMsg {
  type: "/lum.network.millions.RedelegateCallback";
  value: RedelegateCallbackAmino;
}
export interface RedelegateCallbackSDKType {
  pool_id: bigint;
  operator_address: string;
  split_delegations: SplitDelegationSDKType[];
}
export interface ClaimRewardsCallback {
  poolId: bigint;
  drawId: bigint;
}
export interface ClaimRewardsCallbackProtoMsg {
  typeUrl: "/lum.network.millions.ClaimRewardsCallback";
  value: Uint8Array;
}
export interface ClaimRewardsCallbackAmino {
  pool_id?: string;
  draw_id?: string;
}
export interface ClaimRewardsCallbackAminoMsg {
  type: "/lum.network.millions.ClaimRewardsCallback";
  value: ClaimRewardsCallbackAmino;
}
export interface ClaimRewardsCallbackSDKType {
  pool_id: bigint;
  draw_id: bigint;
}
export interface TransferToNativeCallback {
  poolId: bigint;
  depositId: bigint;
}
export interface TransferToNativeCallbackProtoMsg {
  typeUrl: "/lum.network.millions.TransferToNativeCallback";
  value: Uint8Array;
}
export interface TransferToNativeCallbackAmino {
  pool_id?: string;
  deposit_id?: string;
}
export interface TransferToNativeCallbackAminoMsg {
  type: "/lum.network.millions.TransferToNativeCallback";
  value: TransferToNativeCallbackAmino;
}
export interface TransferToNativeCallbackSDKType {
  pool_id: bigint;
  deposit_id: bigint;
}
export interface TransferFromNativeCallback {
  type: TransferType;
  poolId: bigint;
  drawId: bigint;
  withdrawalId: bigint;
}
export interface TransferFromNativeCallbackProtoMsg {
  typeUrl: "/lum.network.millions.TransferFromNativeCallback";
  value: Uint8Array;
}
export interface TransferFromNativeCallbackAmino {
  type?: TransferType;
  pool_id?: string;
  draw_id?: string;
  withdrawal_id?: string;
}
export interface TransferFromNativeCallbackAminoMsg {
  type: "/lum.network.millions.TransferFromNativeCallback";
  value: TransferFromNativeCallbackAmino;
}
export interface TransferFromNativeCallbackSDKType {
  type: TransferType;
  pool_id: bigint;
  draw_id: bigint;
  withdrawal_id: bigint;
}
export interface SetWithdrawAddressCallback {
  poolId: bigint;
}
export interface SetWithdrawAddressCallbackProtoMsg {
  typeUrl: "/lum.network.millions.SetWithdrawAddressCallback";
  value: Uint8Array;
}
export interface SetWithdrawAddressCallbackAmino {
  pool_id?: string;
}
export interface SetWithdrawAddressCallbackAminoMsg {
  type: "/lum.network.millions.SetWithdrawAddressCallback";
  value: SetWithdrawAddressCallbackAmino;
}
export interface SetWithdrawAddressCallbackSDKType {
  pool_id: bigint;
}
export interface BankSendCallback {
  poolId: bigint;
  withdrawalId: bigint;
}
export interface BankSendCallbackProtoMsg {
  typeUrl: "/lum.network.millions.BankSendCallback";
  value: Uint8Array;
}
export interface BankSendCallbackAmino {
  pool_id?: string;
  withdrawal_id?: string;
}
export interface BankSendCallbackAminoMsg {
  type: "/lum.network.millions.BankSendCallback";
  value: BankSendCallbackAmino;
}
export interface BankSendCallbackSDKType {
  pool_id: bigint;
  withdrawal_id: bigint;
}
function createBaseSplitDelegation(): SplitDelegation {
  return {
    validatorAddress: "",
    amount: ""
  };
}
export const SplitDelegation = {
  typeUrl: "/lum.network.millions.SplitDelegation",
  encode(message: SplitDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SplitDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<SplitDelegation>): SplitDelegation {
    const message = createBaseSplitDelegation();
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: SplitDelegationAmino): SplitDelegation {
    const message = createBaseSplitDelegation();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: SplitDelegation): SplitDelegationAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.amount = message.amount === "" ? undefined : message.amount;
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
    poolId: BigInt(0),
    depositId: BigInt(0),
    splitDelegations: []
  };
}
export const DelegateCallback = {
  typeUrl: "/lum.network.millions.DelegateCallback",
  encode(message: DelegateCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.depositId !== BigInt(0)) {
      writer.uint32(16).uint64(message.depositId);
    }
    for (const v of message.splitDelegations) {
      SplitDelegation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegateCallback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateCallback();
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
          message.splitDelegations.push(SplitDelegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DelegateCallback>): DelegateCallback {
    const message = createBaseDelegateCallback();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.depositId = object.depositId !== undefined && object.depositId !== null ? BigInt(object.depositId.toString()) : BigInt(0);
    message.splitDelegations = object.splitDelegations?.map(e => SplitDelegation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegateCallbackAmino): DelegateCallback {
    const message = createBaseDelegateCallback();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.deposit_id !== undefined && object.deposit_id !== null) {
      message.depositId = BigInt(object.deposit_id);
    }
    message.splitDelegations = object.split_delegations?.map(e => SplitDelegation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DelegateCallback): DelegateCallbackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.deposit_id = message.depositId !== BigInt(0) ? message.depositId.toString() : undefined;
    if (message.splitDelegations) {
      obj.split_delegations = message.splitDelegations.map(e => e ? SplitDelegation.toAmino(e) : undefined);
    } else {
      obj.split_delegations = message.splitDelegations;
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
    poolId: BigInt(0),
    withdrawalIds: []
  };
}
export const UndelegateCallback = {
  typeUrl: "/lum.network.millions.UndelegateCallback",
  encode(message: UndelegateCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    writer.uint32(34).fork();
    for (const v of message.withdrawalIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UndelegateCallback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegateCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.withdrawalIds.push(reader.uint64());
            }
          } else {
            message.withdrawalIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UndelegateCallback>): UndelegateCallback {
    const message = createBaseUndelegateCallback();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.withdrawalIds = object.withdrawalIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: UndelegateCallbackAmino): UndelegateCallback {
    const message = createBaseUndelegateCallback();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.withdrawalIds = object.withdrawal_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: UndelegateCallback): UndelegateCallbackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    if (message.withdrawalIds) {
      obj.withdrawal_ids = message.withdrawalIds.map(e => e.toString());
    } else {
      obj.withdrawal_ids = message.withdrawalIds;
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
    poolId: BigInt(0),
    operatorAddress: "",
    splitDelegations: []
  };
}
export const RedelegateCallback = {
  typeUrl: "/lum.network.millions.RedelegateCallback",
  encode(message: RedelegateCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegateCallback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegateCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
  fromPartial(object: Partial<RedelegateCallback>): RedelegateCallback {
    const message = createBaseRedelegateCallback();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.operatorAddress = object.operatorAddress ?? "";
    message.splitDelegations = object.splitDelegations?.map(e => SplitDelegation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RedelegateCallbackAmino): RedelegateCallback {
    const message = createBaseRedelegateCallback();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    message.splitDelegations = object.split_delegations?.map(e => SplitDelegation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RedelegateCallback): RedelegateCallbackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    if (message.splitDelegations) {
      obj.split_delegations = message.splitDelegations.map(e => e ? SplitDelegation.toAmino(e) : undefined);
    } else {
      obj.split_delegations = message.splitDelegations;
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
    poolId: BigInt(0),
    drawId: BigInt(0)
  };
}
export const ClaimRewardsCallback = {
  typeUrl: "/lum.network.millions.ClaimRewardsCallback",
  encode(message: ClaimRewardsCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.drawId !== BigInt(0)) {
      writer.uint32(16).uint64(message.drawId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimRewardsCallback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRewardsCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.drawId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ClaimRewardsCallback>): ClaimRewardsCallback {
    const message = createBaseClaimRewardsCallback();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.drawId = object.drawId !== undefined && object.drawId !== null ? BigInt(object.drawId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ClaimRewardsCallbackAmino): ClaimRewardsCallback {
    const message = createBaseClaimRewardsCallback();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.draw_id !== undefined && object.draw_id !== null) {
      message.drawId = BigInt(object.draw_id);
    }
    return message;
  },
  toAmino(message: ClaimRewardsCallback): ClaimRewardsCallbackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.draw_id = message.drawId !== BigInt(0) ? message.drawId.toString() : undefined;
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
    poolId: BigInt(0),
    depositId: BigInt(0)
  };
}
export const TransferToNativeCallback = {
  typeUrl: "/lum.network.millions.TransferToNativeCallback",
  encode(message: TransferToNativeCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.depositId !== BigInt(0)) {
      writer.uint32(16).uint64(message.depositId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransferToNativeCallback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferToNativeCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.depositId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TransferToNativeCallback>): TransferToNativeCallback {
    const message = createBaseTransferToNativeCallback();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.depositId = object.depositId !== undefined && object.depositId !== null ? BigInt(object.depositId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TransferToNativeCallbackAmino): TransferToNativeCallback {
    const message = createBaseTransferToNativeCallback();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.deposit_id !== undefined && object.deposit_id !== null) {
      message.depositId = BigInt(object.deposit_id);
    }
    return message;
  },
  toAmino(message: TransferToNativeCallback): TransferToNativeCallbackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.deposit_id = message.depositId !== BigInt(0) ? message.depositId.toString() : undefined;
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
    poolId: BigInt(0),
    drawId: BigInt(0),
    withdrawalId: BigInt(0)
  };
}
export const TransferFromNativeCallback = {
  typeUrl: "/lum.network.millions.TransferFromNativeCallback",
  encode(message: TransferFromNativeCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.drawId !== BigInt(0)) {
      writer.uint32(24).uint64(message.drawId);
    }
    if (message.withdrawalId !== BigInt(0)) {
      writer.uint32(32).uint64(message.withdrawalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransferFromNativeCallback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferFromNativeCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.drawId = reader.uint64();
          break;
        case 4:
          message.withdrawalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TransferFromNativeCallback>): TransferFromNativeCallback {
    const message = createBaseTransferFromNativeCallback();
    message.type = object.type ?? 0;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.drawId = object.drawId !== undefined && object.drawId !== null ? BigInt(object.drawId.toString()) : BigInt(0);
    message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? BigInt(object.withdrawalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TransferFromNativeCallbackAmino): TransferFromNativeCallback {
    const message = createBaseTransferFromNativeCallback();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.draw_id !== undefined && object.draw_id !== null) {
      message.drawId = BigInt(object.draw_id);
    }
    if (object.withdrawal_id !== undefined && object.withdrawal_id !== null) {
      message.withdrawalId = BigInt(object.withdrawal_id);
    }
    return message;
  },
  toAmino(message: TransferFromNativeCallback): TransferFromNativeCallbackAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.draw_id = message.drawId !== BigInt(0) ? message.drawId.toString() : undefined;
    obj.withdrawal_id = message.withdrawalId !== BigInt(0) ? message.withdrawalId.toString() : undefined;
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
    poolId: BigInt(0)
  };
}
export const SetWithdrawAddressCallback = {
  typeUrl: "/lum.network.millions.SetWithdrawAddressCallback",
  encode(message: SetWithdrawAddressCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetWithdrawAddressCallback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetWithdrawAddressCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SetWithdrawAddressCallback>): SetWithdrawAddressCallback {
    const message = createBaseSetWithdrawAddressCallback();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SetWithdrawAddressCallbackAmino): SetWithdrawAddressCallback {
    const message = createBaseSetWithdrawAddressCallback();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: SetWithdrawAddressCallback): SetWithdrawAddressCallbackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
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
    poolId: BigInt(0),
    withdrawalId: BigInt(0)
  };
}
export const BankSendCallback = {
  typeUrl: "/lum.network.millions.BankSendCallback",
  encode(message: BankSendCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.withdrawalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.withdrawalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BankSendCallback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBankSendCallback();
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
  fromPartial(object: Partial<BankSendCallback>): BankSendCallback {
    const message = createBaseBankSendCallback();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? BigInt(object.withdrawalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BankSendCallbackAmino): BankSendCallback {
    const message = createBaseBankSendCallback();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.withdrawal_id !== undefined && object.withdrawal_id !== null) {
      message.withdrawalId = BigInt(object.withdrawal_id);
    }
    return message;
  },
  toAmino(message: BankSendCallback): BankSendCallbackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.withdrawal_id = message.withdrawalId !== BigInt(0) ? message.withdrawalId.toString() : undefined;
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