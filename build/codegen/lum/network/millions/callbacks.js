"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankSendCallback = exports.SetWithdrawAddressCallback = exports.TransferFromNativeCallback = exports.TransferToNativeCallback = exports.ClaimRewardsCallback = exports.RedelegateCallback = exports.UndelegateCallback = exports.DelegateCallback = exports.SplitDelegation = exports.transferTypeToJSON = exports.transferTypeFromJSON = exports.TransferTypeAmino = exports.TransferTypeSDKType = exports.TransferType = void 0;
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
var TransferType;
(function (TransferType) {
    TransferType[TransferType["TRANSFER_TYPE_UNSPECIFIED"] = 0] = "TRANSFER_TYPE_UNSPECIFIED";
    TransferType[TransferType["TRANSFER_TYPE_CLAIM"] = 1] = "TRANSFER_TYPE_CLAIM";
    TransferType[TransferType["TRANSFER_TYPE_WITHDRAW"] = 2] = "TRANSFER_TYPE_WITHDRAW";
    TransferType[TransferType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TransferType || (exports.TransferType = TransferType = {}));
exports.TransferTypeSDKType = TransferType;
exports.TransferTypeAmino = TransferType;
function transferTypeFromJSON(object) {
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
exports.transferTypeFromJSON = transferTypeFromJSON;
function transferTypeToJSON(object) {
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
exports.transferTypeToJSON = transferTypeToJSON;
function createBaseSplitDelegation() {
    return {
        validatorAddress: "",
        amount: ""
    };
}
exports.SplitDelegation = {
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
        return exports.SplitDelegation.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SplitDelegation.decode(message.value);
    },
    toProto(message) {
        return exports.SplitDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.SplitDelegation",
            value: exports.SplitDelegation.encode(message).finish()
        };
    }
};
function createBaseDelegateCallback() {
    return {
        poolId: helpers_1.Long.UZERO,
        depositId: helpers_1.Long.UZERO,
        splitDelegations: []
    };
}
exports.DelegateCallback = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        for (const v of message.splitDelegations) {
            exports.SplitDelegation.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.splitDelegations.push(exports.SplitDelegation.decode(reader, reader.uint32()));
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? helpers_1.Long.fromValue(object.depositId) : helpers_1.Long.UZERO;
        message.splitDelegations = object.splitDelegations?.map(e => exports.SplitDelegation.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            depositId: helpers_1.Long.fromString(object.deposit_id),
            splitDelegations: Array.isArray(object?.split_delegations) ? object.split_delegations.map((e) => exports.SplitDelegation.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
        if (message.splitDelegations) {
            obj.split_delegations = message.splitDelegations.map(e => e ? exports.SplitDelegation.toAmino(e) : undefined);
        }
        else {
            obj.split_delegations = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegateCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DelegateCallback.decode(message.value);
    },
    toProto(message) {
        return exports.DelegateCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.DelegateCallback",
            value: exports.DelegateCallback.encode(message).finish()
        };
    }
};
function createBaseUndelegateCallback() {
    return {
        poolId: helpers_1.Long.UZERO,
        withdrawalIds: []
    };
}
exports.UndelegateCallback = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.withdrawalIds = object.withdrawalIds?.map(e => helpers_1.Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
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
        return exports.UndelegateCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.UndelegateCallback.decode(message.value);
    },
    toProto(message) {
        return exports.UndelegateCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.UndelegateCallback",
            value: exports.UndelegateCallback.encode(message).finish()
        };
    }
};
function createBaseRedelegateCallback() {
    return {
        poolId: helpers_1.Long.UZERO,
        operatorAddress: "",
        splitDelegations: []
    };
}
exports.RedelegateCallback = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.operatorAddress !== "") {
            writer.uint32(18).string(message.operatorAddress);
        }
        for (const v of message.splitDelegations) {
            exports.SplitDelegation.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.splitDelegations.push(exports.SplitDelegation.decode(reader, reader.uint32()));
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.operatorAddress = object.operatorAddress ?? "";
        message.splitDelegations = object.splitDelegations?.map(e => exports.SplitDelegation.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            operatorAddress: object.operator_address,
            splitDelegations: Array.isArray(object?.split_delegations) ? object.split_delegations.map((e) => exports.SplitDelegation.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.operator_address = message.operatorAddress;
        if (message.splitDelegations) {
            obj.split_delegations = message.splitDelegations.map(e => e ? exports.SplitDelegation.toAmino(e) : undefined);
        }
        else {
            obj.split_delegations = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RedelegateCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RedelegateCallback.decode(message.value);
    },
    toProto(message) {
        return exports.RedelegateCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.RedelegateCallback",
            value: exports.RedelegateCallback.encode(message).finish()
        };
    }
};
function createBaseClaimRewardsCallback() {
    return {
        poolId: helpers_1.Long.UZERO,
        drawId: helpers_1.Long.UZERO
    };
}
exports.ClaimRewardsCallback = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? helpers_1.Long.fromValue(object.drawId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            drawId: helpers_1.Long.fromString(object.draw_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClaimRewardsCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ClaimRewardsCallback.decode(message.value);
    },
    toProto(message) {
        return exports.ClaimRewardsCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.ClaimRewardsCallback",
            value: exports.ClaimRewardsCallback.encode(message).finish()
        };
    }
};
function createBaseTransferToNativeCallback() {
    return {
        poolId: helpers_1.Long.UZERO,
        depositId: helpers_1.Long.UZERO
    };
}
exports.TransferToNativeCallback = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? helpers_1.Long.fromValue(object.depositId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            depositId: helpers_1.Long.fromString(object.deposit_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TransferToNativeCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TransferToNativeCallback.decode(message.value);
    },
    toProto(message) {
        return exports.TransferToNativeCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.TransferToNativeCallback",
            value: exports.TransferToNativeCallback.encode(message).finish()
        };
    }
};
function createBaseTransferFromNativeCallback() {
    return {
        type: 0,
        poolId: helpers_1.Long.UZERO,
        drawId: helpers_1.Long.UZERO,
        withdrawalId: helpers_1.Long.UZERO
    };
}
exports.TransferFromNativeCallback = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? helpers_1.Long.fromValue(object.drawId) : helpers_1.Long.UZERO;
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? helpers_1.Long.fromValue(object.withdrawalId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            type: (0, helpers_1.isSet)(object.type) ? transferTypeFromJSON(object.type) : -1,
            poolId: helpers_1.Long.fromString(object.pool_id),
            drawId: helpers_1.Long.fromString(object.draw_id),
            withdrawalId: helpers_1.Long.fromString(object.withdrawal_id)
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
        return exports.TransferFromNativeCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TransferFromNativeCallback.decode(message.value);
    },
    toProto(message) {
        return exports.TransferFromNativeCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.TransferFromNativeCallback",
            value: exports.TransferFromNativeCallback.encode(message).finish()
        };
    }
};
function createBaseSetWithdrawAddressCallback() {
    return {
        poolId: helpers_1.Long.UZERO
    };
}
exports.SetWithdrawAddressCallback = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SetWithdrawAddressCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SetWithdrawAddressCallback.decode(message.value);
    },
    toProto(message) {
        return exports.SetWithdrawAddressCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.SetWithdrawAddressCallback",
            value: exports.SetWithdrawAddressCallback.encode(message).finish()
        };
    }
};
function createBaseBankSendCallback() {
    return {
        poolId: helpers_1.Long.UZERO,
        withdrawalId: helpers_1.Long.UZERO
    };
}
exports.BankSendCallback = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? helpers_1.Long.fromValue(object.withdrawalId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            withdrawalId: helpers_1.Long.fromString(object.withdrawal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BankSendCallback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BankSendCallback.decode(message.value);
    },
    toProto(message) {
        return exports.BankSendCallback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.BankSendCallback",
            value: exports.BankSendCallback.encode(message).finish()
        };
    }
};
//# sourceMappingURL=callbacks.js.map