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
exports.PrizeIDsCollection = exports.PrizeIDs = exports.Prize = exports.prizeStateToJSON = exports.prizeStateFromJSON = exports.PrizeStateAmino = exports.PrizeStateSDKType = exports.PrizeState = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
var PrizeState;
(function (PrizeState) {
    PrizeState[PrizeState["PRIZE_STATE_UNSPECIFIED"] = 0] = "PRIZE_STATE_UNSPECIFIED";
    PrizeState[PrizeState["PRIZE_STATE_PENDING"] = 1] = "PRIZE_STATE_PENDING";
    PrizeState[PrizeState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PrizeState || (exports.PrizeState = PrizeState = {}));
exports.PrizeStateSDKType = PrizeState;
exports.PrizeStateAmino = PrizeState;
function prizeStateFromJSON(object) {
    switch (object) {
        case 0:
        case "PRIZE_STATE_UNSPECIFIED":
            return PrizeState.PRIZE_STATE_UNSPECIFIED;
        case 1:
        case "PRIZE_STATE_PENDING":
            return PrizeState.PRIZE_STATE_PENDING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PrizeState.UNRECOGNIZED;
    }
}
exports.prizeStateFromJSON = prizeStateFromJSON;
function prizeStateToJSON(object) {
    switch (object) {
        case PrizeState.PRIZE_STATE_UNSPECIFIED:
            return "PRIZE_STATE_UNSPECIFIED";
        case PrizeState.PRIZE_STATE_PENDING:
            return "PRIZE_STATE_PENDING";
        case PrizeState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.prizeStateToJSON = prizeStateToJSON;
function createBasePrize() {
    return {
        poolId: helpers_1.Long.UZERO,
        drawId: helpers_1.Long.UZERO,
        prizeId: helpers_1.Long.UZERO,
        state: 0,
        winnerAddress: "",
        amount: coin_1.Coin.fromPartial({}),
        createdAtHeight: helpers_1.Long.ZERO,
        updatedAtHeight: helpers_1.Long.ZERO,
        expiresAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
    };
}
exports.Prize = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (!message.prizeId.isZero()) {
            writer.uint32(24).uint64(message.prizeId);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.winnerAddress !== "") {
            writer.uint32(42).string(message.winnerAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
        }
        if (!message.createdAtHeight.isZero()) {
            writer.uint32(56).int64(message.createdAtHeight);
        }
        if (!message.updatedAtHeight.isZero()) {
            writer.uint32(64).int64(message.updatedAtHeight);
        }
        if (message.expiresAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expiresAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.createdAt), writer.uint32(82).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.updatedAt), writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrize();
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
                    message.prizeId = reader.uint64();
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                case 5:
                    message.winnerAddress = reader.string();
                    break;
                case 6:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.createdAtHeight = reader.int64();
                    break;
                case 8:
                    message.updatedAtHeight = reader.int64();
                    break;
                case 9:
                    message.expiresAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.createdAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
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
        const message = createBasePrize();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? helpers_1.Long.fromValue(object.drawId) : helpers_1.Long.UZERO;
        message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? helpers_1.Long.fromValue(object.prizeId) : helpers_1.Long.UZERO;
        message.state = object.state ?? 0;
        message.winnerAddress = object.winnerAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? helpers_1.Long.fromValue(object.createdAtHeight) : helpers_1.Long.ZERO;
        message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? helpers_1.Long.fromValue(object.updatedAtHeight) : helpers_1.Long.ZERO;
        message.expiresAt = object.expiresAt ?? undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            drawId: helpers_1.Long.fromString(object.draw_id),
            prizeId: helpers_1.Long.fromString(object.prize_id),
            state: (0, helpers_1.isSet)(object.state) ? prizeStateFromJSON(object.state) : -1,
            winnerAddress: object.winner_address,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined,
            createdAtHeight: helpers_1.Long.fromString(object.created_at_height),
            updatedAtHeight: helpers_1.Long.fromString(object.updated_at_height),
            expiresAt: object.expires_at,
            createdAt: object.created_at,
            updatedAt: object.updated_at
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        obj.prize_id = message.prizeId ? message.prizeId.toString() : undefined;
        obj.state = message.state;
        obj.winner_address = message.winnerAddress;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.created_at_height = message.createdAtHeight ? message.createdAtHeight.toString() : undefined;
        obj.updated_at_height = message.updatedAtHeight ? message.updatedAtHeight.toString() : undefined;
        obj.expires_at = message.expiresAt;
        obj.created_at = message.createdAt;
        obj.updated_at = message.updatedAt;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Prize.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Prize.decode(message.value);
    },
    toProto(message) {
        return exports.Prize.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.Prize",
            value: exports.Prize.encode(message).finish()
        };
    }
};
function createBasePrizeIDs() {
    return {
        poolId: helpers_1.Long.UZERO,
        drawId: helpers_1.Long.UZERO,
        prizeId: helpers_1.Long.UZERO
    };
}
exports.PrizeIDs = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (!message.prizeId.isZero()) {
            writer.uint32(24).uint64(message.prizeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrizeIDs();
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
                    message.prizeId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePrizeIDs();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? helpers_1.Long.fromValue(object.drawId) : helpers_1.Long.UZERO;
        message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? helpers_1.Long.fromValue(object.prizeId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            drawId: helpers_1.Long.fromString(object.draw_id),
            prizeId: helpers_1.Long.fromString(object.prize_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        obj.prize_id = message.prizeId ? message.prizeId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PrizeIDs.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PrizeIDs.decode(message.value);
    },
    toProto(message) {
        return exports.PrizeIDs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.PrizeIDs",
            value: exports.PrizeIDs.encode(message).finish()
        };
    }
};
function createBasePrizeIDsCollection() {
    return {
        prizesIds: []
    };
}
exports.PrizeIDsCollection = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.prizesIds) {
            exports.PrizeIDs.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrizeIDsCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prizesIds.push(exports.PrizeIDs.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePrizeIDsCollection();
        message.prizesIds = object.prizesIds?.map(e => exports.PrizeIDs.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            prizesIds: Array.isArray(object?.prizes_ids) ? object.prizes_ids.map((e) => exports.PrizeIDs.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.prizesIds) {
            obj.prizes_ids = message.prizesIds.map(e => e ? exports.PrizeIDs.toAmino(e) : undefined);
        }
        else {
            obj.prizes_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PrizeIDsCollection.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PrizeIDsCollection.decode(message.value);
    },
    toProto(message) {
        return exports.PrizeIDsCollection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.PrizeIDsCollection",
            value: exports.PrizeIDsCollection.encode(message).finish()
        };
    }
};
//# sourceMappingURL=prize.js.map