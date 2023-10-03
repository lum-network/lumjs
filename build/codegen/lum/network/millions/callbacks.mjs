import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export var TransferType;
(function (TransferType) {
    TransferType[TransferType["TRANSFER_TYPE_UNSPECIFIED"] = 0] = "TRANSFER_TYPE_UNSPECIFIED";
    TransferType[TransferType["TRANSFER_TYPE_CLAIM"] = 1] = "TRANSFER_TYPE_CLAIM";
    TransferType[TransferType["TRANSFER_TYPE_WITHDRAW"] = 2] = "TRANSFER_TYPE_WITHDRAW";
    TransferType[TransferType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TransferType || (TransferType = {}));
export const TransferTypeSDKType = TransferType;
export const TransferTypeAmino = TransferType;
export function transferTypeFromJSON(object) {
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
export function transferTypeToJSON(object) {
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
function createBaseSplitDelegation() {
    return {
        validatorAddress: "",
        amount: ""
    };
}
export const SplitDelegation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseSplitDelegation();
        message.validatorAddress = object.validatorAddress ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address,
            amount: object.amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return SplitDelegation.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SplitDelegation.decode(message.value);
    },
    toProto(message) {
        return SplitDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.SplitDelegation",
            value: SplitDelegation.encode(message).finish()
        };
    }
};
function createBaseDelegateCallback() {
    return {
        poolId: Long.UZERO,
        depositId: Long.UZERO,
        splitDelegations: []
    };
}
export const DelegateCallback = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        for (const v of message.splitDelegations) {
            SplitDelegation.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    fromPartial(object) {
        const message = createBaseDelegateCallback();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        message.splitDelegations = object.splitDelegations?.map(e => SplitDelegation.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            depositId: Long.fromString(object.deposit_id),
            splitDelegations: Array.isArray(object?.split_delegations) ? object.split_delegations.map((e) => SplitDelegation.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
        if (message.splitDelegations) {
            obj.split_delegations = message.splitDelegations.map(e => e ? SplitDelegation.toAmino(e) : undefined);
        }
        else {
            obj.split_delegations = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DelegateCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DelegateCallback.decode(message.value);
    },
    toProto(message) {
        return DelegateCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.DelegateCallback",
            value: DelegateCallback.encode(message).finish()
        };
    }
};
function createBaseUndelegateCallback() {
    return {
        poolId: Long.UZERO,
        withdrawalIds: []
    };
}
export const UndelegateCallback = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    }
                    else {
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
    fromPartial(object) {
        const message = createBaseUndelegateCallback();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.withdrawalIds = object.withdrawalIds?.map(e => Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            withdrawalIds: Array.isArray(object?.withdrawal_ids) ? object.withdrawal_ids.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        if (message.withdrawalIds) {
            obj.withdrawal_ids = message.withdrawalIds.map(e => e);
        }
        else {
            obj.withdrawal_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UndelegateCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UndelegateCallback.decode(message.value);
    },
    toProto(message) {
        return UndelegateCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.UndelegateCallback",
            value: UndelegateCallback.encode(message).finish()
        };
    }
};
function createBaseRedelegateCallback() {
    return {
        poolId: Long.UZERO,
        operatorAddress: "",
        splitDelegations: []
    };
}
export const RedelegateCallback = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.operatorAddress !== "") {
            writer.uint32(18).string(message.operatorAddress);
        }
        for (const v of message.splitDelegations) {
            SplitDelegation.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    fromPartial(object) {
        const message = createBaseRedelegateCallback();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.operatorAddress = object.operatorAddress ?? "";
        message.splitDelegations = object.splitDelegations?.map(e => SplitDelegation.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            operatorAddress: object.operator_address,
            splitDelegations: Array.isArray(object?.split_delegations) ? object.split_delegations.map((e) => SplitDelegation.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.operator_address = message.operatorAddress;
        if (message.splitDelegations) {
            obj.split_delegations = message.splitDelegations.map(e => e ? SplitDelegation.toAmino(e) : undefined);
        }
        else {
            obj.split_delegations = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return RedelegateCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RedelegateCallback.decode(message.value);
    },
    toProto(message) {
        return RedelegateCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.RedelegateCallback",
            value: RedelegateCallback.encode(message).finish()
        };
    }
};
function createBaseClaimRewardsCallback() {
    return {
        poolId: Long.UZERO,
        drawId: Long.UZERO
    };
}
export const ClaimRewardsCallback = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    fromPartial(object) {
        const message = createBaseClaimRewardsCallback();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            drawId: Long.fromString(object.draw_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ClaimRewardsCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ClaimRewardsCallback.decode(message.value);
    },
    toProto(message) {
        return ClaimRewardsCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.ClaimRewardsCallback",
            value: ClaimRewardsCallback.encode(message).finish()
        };
    }
};
function createBaseTransferToNativeCallback() {
    return {
        poolId: Long.UZERO,
        depositId: Long.UZERO
    };
}
export const TransferToNativeCallback = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    fromPartial(object) {
        const message = createBaseTransferToNativeCallback();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            depositId: Long.fromString(object.deposit_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TransferToNativeCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransferToNativeCallback.decode(message.value);
    },
    toProto(message) {
        return TransferToNativeCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.TransferToNativeCallback",
            value: TransferToNativeCallback.encode(message).finish()
        };
    }
};
function createBaseTransferFromNativeCallback() {
    return {
        type: 0,
        poolId: Long.UZERO,
        drawId: Long.UZERO,
        withdrawalId: Long.UZERO
    };
}
export const TransferFromNativeCallback = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransferFromNativeCallback();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
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
    fromPartial(object) {
        const message = createBaseTransferFromNativeCallback();
        message.type = object.type ?? 0;
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            type: isSet(object.type) ? transferTypeFromJSON(object.type) : -1,
            poolId: Long.fromString(object.pool_id),
            drawId: Long.fromString(object.draw_id),
            withdrawalId: Long.fromString(object.withdrawal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TransferFromNativeCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransferFromNativeCallback.decode(message.value);
    },
    toProto(message) {
        return TransferFromNativeCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.TransferFromNativeCallback",
            value: TransferFromNativeCallback.encode(message).finish()
        };
    }
};
function createBaseSetWithdrawAddressCallback() {
    return {
        poolId: Long.UZERO
    };
}
export const SetWithdrawAddressCallback = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    fromPartial(object) {
        const message = createBaseSetWithdrawAddressCallback();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SetWithdrawAddressCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SetWithdrawAddressCallback.decode(message.value);
    },
    toProto(message) {
        return SetWithdrawAddressCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.SetWithdrawAddressCallback",
            value: SetWithdrawAddressCallback.encode(message).finish()
        };
    }
};
function createBaseBankSendCallback() {
    return {
        poolId: Long.UZERO,
        withdrawalId: Long.UZERO
    };
}
export const BankSendCallback = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.withdrawalId.isZero()) {
            writer.uint32(16).uint64(message.withdrawalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    fromPartial(object) {
        const message = createBaseBankSendCallback();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            withdrawalId: Long.fromString(object.withdrawal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BankSendCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BankSendCallback.decode(message.value);
    },
    toProto(message) {
        return BankSendCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.BankSendCallback",
            value: BankSendCallback.encode(message).finish()
        };
    }
};
//# sourceMappingURL=callbacks.js.map