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
exports.EpochTracker = exports.EpochUnbonding = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseEpochUnbonding() {
    return {
        epochIdentifier: "",
        epochNumber: helpers_1.Long.UZERO,
        poolId: helpers_1.Long.UZERO,
        withdrawalIds: [],
        withdrawalIdsCount: helpers_1.Long.UZERO,
        totalAmount: coin_1.Coin.fromPartial({}),
        createdAtHeight: helpers_1.Long.ZERO,
        updatedAtHeight: helpers_1.Long.ZERO,
        createdAt: new Date(),
        updatedAt: new Date()
    };
}
exports.EpochUnbonding = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochIdentifier !== "") {
            writer.uint32(10).string(message.epochIdentifier);
        }
        if (!message.epochNumber.isZero()) {
            writer.uint32(16).uint64(message.epochNumber);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(24).uint64(message.poolId);
        }
        writer.uint32(34).fork();
        for (const v of message.withdrawalIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (!message.withdrawalIdsCount.isZero()) {
            writer.uint32(40).uint64(message.withdrawalIdsCount);
        }
        if (message.totalAmount !== undefined) {
            coin_1.Coin.encode(message.totalAmount, writer.uint32(50).fork()).ldelim();
        }
        if (!message.createdAtHeight.isZero()) {
            writer.uint32(56).int64(message.createdAtHeight);
        }
        if (!message.updatedAtHeight.isZero()) {
            writer.uint32(64).int64(message.updatedAtHeight);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.createdAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.updatedAt), writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochUnbonding();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochIdentifier = reader.string();
                    break;
                case 2:
                    message.epochNumber = reader.uint64();
                    break;
                case 3:
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
                case 5:
                    message.withdrawalIdsCount = reader.uint64();
                    break;
                case 6:
                    message.totalAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.createdAtHeight = reader.int64();
                    break;
                case 8:
                    message.updatedAtHeight = reader.int64();
                    break;
                case 9:
                    message.createdAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.updatedAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEpochUnbonding();
        message.epochIdentifier = object.epochIdentifier ?? "";
        message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? helpers_1.Long.fromValue(object.epochNumber) : helpers_1.Long.UZERO;
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.withdrawalIds = object.withdrawalIds?.map(e => helpers_1.Long.fromValue(e)) || [];
        message.withdrawalIdsCount = object.withdrawalIdsCount !== undefined && object.withdrawalIdsCount !== null ? helpers_1.Long.fromValue(object.withdrawalIdsCount) : helpers_1.Long.UZERO;
        message.totalAmount = object.totalAmount !== undefined && object.totalAmount !== null ? coin_1.Coin.fromPartial(object.totalAmount) : undefined;
        message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? helpers_1.Long.fromValue(object.createdAtHeight) : helpers_1.Long.ZERO;
        message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? helpers_1.Long.fromValue(object.updatedAtHeight) : helpers_1.Long.ZERO;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            epochIdentifier: object.epoch_identifier,
            epochNumber: helpers_1.Long.fromString(object.epoch_number),
            poolId: helpers_1.Long.fromString(object.pool_id),
            withdrawalIds: Array.isArray(object?.withdrawal_ids) ? object.withdrawal_ids.map((e) => e) : [],
            withdrawalIdsCount: helpers_1.Long.fromString(object.withdrawal_ids_count),
            totalAmount: object?.total_amount ? coin_1.Coin.fromAmino(object.total_amount) : undefined,
            createdAtHeight: helpers_1.Long.fromString(object.created_at_height),
            updatedAtHeight: helpers_1.Long.fromString(object.updated_at_height),
            createdAt: object.created_at,
            updatedAt: object.updated_at
        };
    },
    toAmino(message) {
        const obj = {};
        obj.epoch_identifier = message.epochIdentifier;
        obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        if (message.withdrawalIds) {
            obj.withdrawal_ids = message.withdrawalIds.map(e => e);
        }
        else {
            obj.withdrawal_ids = [];
        }
        obj.withdrawal_ids_count = message.withdrawalIdsCount ? message.withdrawalIdsCount.toString() : undefined;
        obj.total_amount = message.totalAmount ? coin_1.Coin.toAmino(message.totalAmount) : undefined;
        obj.created_at_height = message.createdAtHeight ? message.createdAtHeight.toString() : undefined;
        obj.updated_at_height = message.updatedAtHeight ? message.updatedAtHeight.toString() : undefined;
        obj.created_at = message.createdAt;
        obj.updated_at = message.updatedAt;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EpochUnbonding.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EpochUnbonding.decode(message.value);
    },
    toProto(message) {
        return exports.EpochUnbonding.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.EpochUnbonding",
            value: exports.EpochUnbonding.encode(message).finish()
        };
    }
};
function createBaseEpochTracker() {
    return {
        epochTrackerType: "",
        epochIdentifier: "",
        epochNumber: helpers_1.Long.UZERO,
        nextEpochNumber: helpers_1.Long.UZERO,
        previousEpochNumber: helpers_1.Long.UZERO,
        nextEpochStartTime: new Date()
    };
}
exports.EpochTracker = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochTrackerType !== "") {
            writer.uint32(10).string(message.epochTrackerType);
        }
        if (message.epochIdentifier !== "") {
            writer.uint32(18).string(message.epochIdentifier);
        }
        if (!message.epochNumber.isZero()) {
            writer.uint32(24).uint64(message.epochNumber);
        }
        if (!message.nextEpochNumber.isZero()) {
            writer.uint32(32).uint64(message.nextEpochNumber);
        }
        if (!message.previousEpochNumber.isZero()) {
            writer.uint32(40).uint64(message.previousEpochNumber);
        }
        if (message.nextEpochStartTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.nextEpochStartTime), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochTracker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochTrackerType = reader.string();
                    break;
                case 2:
                    message.epochIdentifier = reader.string();
                    break;
                case 3:
                    message.epochNumber = reader.uint64();
                    break;
                case 4:
                    message.nextEpochNumber = reader.uint64();
                    break;
                case 5:
                    message.previousEpochNumber = reader.uint64();
                    break;
                case 6:
                    message.nextEpochStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEpochTracker();
        message.epochTrackerType = object.epochTrackerType ?? "";
        message.epochIdentifier = object.epochIdentifier ?? "";
        message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? helpers_1.Long.fromValue(object.epochNumber) : helpers_1.Long.UZERO;
        message.nextEpochNumber = object.nextEpochNumber !== undefined && object.nextEpochNumber !== null ? helpers_1.Long.fromValue(object.nextEpochNumber) : helpers_1.Long.UZERO;
        message.previousEpochNumber = object.previousEpochNumber !== undefined && object.previousEpochNumber !== null ? helpers_1.Long.fromValue(object.previousEpochNumber) : helpers_1.Long.UZERO;
        message.nextEpochStartTime = object.nextEpochStartTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            epochTrackerType: object.epoch_tracker_type,
            epochIdentifier: object.epoch_identifier,
            epochNumber: helpers_1.Long.fromString(object.epoch_number),
            nextEpochNumber: helpers_1.Long.fromString(object.next_epoch_number),
            previousEpochNumber: helpers_1.Long.fromString(object.previous_epoch_number),
            nextEpochStartTime: object.next_epoch_start_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.epoch_tracker_type = message.epochTrackerType;
        obj.epoch_identifier = message.epochIdentifier;
        obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
        obj.next_epoch_number = message.nextEpochNumber ? message.nextEpochNumber.toString() : undefined;
        obj.previous_epoch_number = message.previousEpochNumber ? message.previousEpochNumber.toString() : undefined;
        obj.next_epoch_start_time = message.nextEpochStartTime;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EpochTracker.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EpochTracker.decode(message.value);
    },
    toProto(message) {
        return exports.EpochTracker.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.EpochTracker",
            value: exports.EpochTracker.encode(message).finish()
        };
    }
};
//# sourceMappingURL=epoch.js.map