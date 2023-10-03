import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export var PrizeState;
(function (PrizeState) {
    PrizeState[PrizeState["PRIZE_STATE_UNSPECIFIED"] = 0] = "PRIZE_STATE_UNSPECIFIED";
    PrizeState[PrizeState["PRIZE_STATE_PENDING"] = 1] = "PRIZE_STATE_PENDING";
    PrizeState[PrizeState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PrizeState || (PrizeState = {}));
export const PrizeStateSDKType = PrizeState;
export const PrizeStateAmino = PrizeState;
export function prizeStateFromJSON(object) {
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
export function prizeStateToJSON(object) {
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
function createBasePrize() {
    return {
        poolId: Long.UZERO,
        drawId: Long.UZERO,
        prizeId: Long.UZERO,
        state: 0,
        winnerAddress: "",
        amount: Coin.fromPartial({}),
        createdAtHeight: Long.ZERO,
        updatedAtHeight: Long.ZERO,
        expiresAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
    };
}
export const Prize = {
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
            Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
        }
        if (!message.createdAtHeight.isZero()) {
            writer.uint32(56).int64(message.createdAtHeight);
        }
        if (!message.updatedAtHeight.isZero()) {
            writer.uint32(64).int64(message.updatedAtHeight);
        }
        if (message.expiresAt !== undefined) {
            Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(90).fork()).ldelim();
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
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.createdAtHeight = reader.int64();
                    break;
                case 8:
                    message.updatedAtHeight = reader.int64();
                    break;
                case 9:
                    message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? Long.fromValue(object.prizeId) : Long.UZERO;
        message.state = object.state ?? 0;
        message.winnerAddress = object.winnerAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? Long.fromValue(object.createdAtHeight) : Long.ZERO;
        message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? Long.fromValue(object.updatedAtHeight) : Long.ZERO;
        message.expiresAt = object.expiresAt ?? undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            drawId: Long.fromString(object.draw_id),
            prizeId: Long.fromString(object.prize_id),
            state: isSet(object.state) ? prizeStateFromJSON(object.state) : -1,
            winnerAddress: object.winner_address,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
            createdAtHeight: Long.fromString(object.created_at_height),
            updatedAtHeight: Long.fromString(object.updated_at_height),
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
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.created_at_height = message.createdAtHeight ? message.createdAtHeight.toString() : undefined;
        obj.updated_at_height = message.updatedAtHeight ? message.updatedAtHeight.toString() : undefined;
        obj.expires_at = message.expiresAt;
        obj.created_at = message.createdAt;
        obj.updated_at = message.updatedAt;
        return obj;
    },
    fromAminoMsg(object) {
        return Prize.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Prize.decode(message.value);
    },
    toProto(message) {
        return Prize.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.Prize",
            value: Prize.encode(message).finish()
        };
    }
};
function createBasePrizeIDs() {
    return {
        poolId: Long.UZERO,
        drawId: Long.UZERO,
        prizeId: Long.UZERO
    };
}
export const PrizeIDs = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? Long.fromValue(object.prizeId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            drawId: Long.fromString(object.draw_id),
            prizeId: Long.fromString(object.prize_id)
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
        return PrizeIDs.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PrizeIDs.decode(message.value);
    },
    toProto(message) {
        return PrizeIDs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.PrizeIDs",
            value: PrizeIDs.encode(message).finish()
        };
    }
};
function createBasePrizeIDsCollection() {
    return {
        prizesIds: []
    };
}
export const PrizeIDsCollection = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.prizesIds) {
            PrizeIDs.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.prizesIds.push(PrizeIDs.decode(reader, reader.uint32()));
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
        message.prizesIds = object.prizesIds?.map(e => PrizeIDs.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            prizesIds: Array.isArray(object?.prizes_ids) ? object.prizes_ids.map((e) => PrizeIDs.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.prizesIds) {
            obj.prizes_ids = message.prizesIds.map(e => e ? PrizeIDs.toAmino(e) : undefined);
        }
        else {
            obj.prizes_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PrizeIDsCollection.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PrizeIDsCollection.decode(message.value);
    },
    toProto(message) {
        return PrizeIDsCollection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.PrizeIDsCollection",
            value: PrizeIDsCollection.encode(message).finish()
        };
    }
};
//# sourceMappingURL=prize.js.map