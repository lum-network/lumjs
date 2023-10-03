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
exports.Draw = exports.drawStateToJSON = exports.drawStateFromJSON = exports.DrawStateAmino = exports.DrawStateSDKType = exports.DrawState = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const prize_ref_1 = require("./prize_ref");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
var DrawState;
(function (DrawState) {
    DrawState[DrawState["DRAW_STATE_UNSPECIFIED"] = 0] = "DRAW_STATE_UNSPECIFIED";
    DrawState[DrawState["DRAW_STATE_ICA_WITHDRAWREWARDS"] = 1] = "DRAW_STATE_ICA_WITHDRAWREWARDS";
    DrawState[DrawState["DRAW_STATE_QUERY_BALANCE"] = 2] = "DRAW_STATE_QUERY_BALANCE";
    DrawState[DrawState["DRAW_STATE_IBC_TRANSFER"] = 3] = "DRAW_STATE_IBC_TRANSFER";
    DrawState[DrawState["DRAW_STATE_DRAWING"] = 4] = "DRAW_STATE_DRAWING";
    DrawState[DrawState["DRAW_STATE_SUCCESS"] = 5] = "DRAW_STATE_SUCCESS";
    DrawState[DrawState["DRAW_STATE_FAILURE"] = 6] = "DRAW_STATE_FAILURE";
    DrawState[DrawState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DrawState || (exports.DrawState = DrawState = {}));
exports.DrawStateSDKType = DrawState;
exports.DrawStateAmino = DrawState;
function drawStateFromJSON(object) {
    switch (object) {
        case 0:
        case "DRAW_STATE_UNSPECIFIED":
            return DrawState.DRAW_STATE_UNSPECIFIED;
        case 1:
        case "DRAW_STATE_ICA_WITHDRAWREWARDS":
            return DrawState.DRAW_STATE_ICA_WITHDRAWREWARDS;
        case 2:
        case "DRAW_STATE_QUERY_BALANCE":
            return DrawState.DRAW_STATE_QUERY_BALANCE;
        case 3:
        case "DRAW_STATE_IBC_TRANSFER":
            return DrawState.DRAW_STATE_IBC_TRANSFER;
        case 4:
        case "DRAW_STATE_DRAWING":
            return DrawState.DRAW_STATE_DRAWING;
        case 5:
        case "DRAW_STATE_SUCCESS":
            return DrawState.DRAW_STATE_SUCCESS;
        case 6:
        case "DRAW_STATE_FAILURE":
            return DrawState.DRAW_STATE_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DrawState.UNRECOGNIZED;
    }
}
exports.drawStateFromJSON = drawStateFromJSON;
function drawStateToJSON(object) {
    switch (object) {
        case DrawState.DRAW_STATE_UNSPECIFIED:
            return "DRAW_STATE_UNSPECIFIED";
        case DrawState.DRAW_STATE_ICA_WITHDRAWREWARDS:
            return "DRAW_STATE_ICA_WITHDRAWREWARDS";
        case DrawState.DRAW_STATE_QUERY_BALANCE:
            return "DRAW_STATE_QUERY_BALANCE";
        case DrawState.DRAW_STATE_IBC_TRANSFER:
            return "DRAW_STATE_IBC_TRANSFER";
        case DrawState.DRAW_STATE_DRAWING:
            return "DRAW_STATE_DRAWING";
        case DrawState.DRAW_STATE_SUCCESS:
            return "DRAW_STATE_SUCCESS";
        case DrawState.DRAW_STATE_FAILURE:
            return "DRAW_STATE_FAILURE";
        case DrawState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.drawStateToJSON = drawStateToJSON;
function createBaseDraw() {
    return {
        poolId: helpers_1.Long.UZERO,
        drawId: helpers_1.Long.UZERO,
        state: 0,
        errorState: 0,
        randSeed: helpers_1.Long.ZERO,
        prizePool: coin_1.Coin.fromPartial({}),
        prizePoolFreshAmount: "",
        prizePoolRemainsAmount: "",
        prizesRefs: [],
        totalWinCount: helpers_1.Long.UZERO,
        totalWinAmount: "",
        createdAtHeight: helpers_1.Long.ZERO,
        updatedAtHeight: helpers_1.Long.ZERO,
        createdAt: new Date(),
        updatedAt: new Date()
    };
}
exports.Draw = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.errorState !== 0) {
            writer.uint32(32).int32(message.errorState);
        }
        if (!message.randSeed.isZero()) {
            writer.uint32(40).int64(message.randSeed);
        }
        if (message.prizePool !== undefined) {
            coin_1.Coin.encode(message.prizePool, writer.uint32(50).fork()).ldelim();
        }
        if (message.prizePoolFreshAmount !== "") {
            writer.uint32(58).string(message.prizePoolFreshAmount);
        }
        if (message.prizePoolRemainsAmount !== "") {
            writer.uint32(66).string(message.prizePoolRemainsAmount);
        }
        for (const v of message.prizesRefs) {
            prize_ref_1.PrizeRef.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (!message.totalWinCount.isZero()) {
            writer.uint32(96).uint64(message.totalWinCount);
        }
        if (message.totalWinAmount !== "") {
            writer.uint32(106).string(message.totalWinAmount);
        }
        if (!message.createdAtHeight.isZero()) {
            writer.uint32(120).int64(message.createdAtHeight);
        }
        if (!message.updatedAtHeight.isZero()) {
            writer.uint32(128).int64(message.updatedAtHeight);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.createdAt), writer.uint32(138).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.updatedAt), writer.uint32(146).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDraw();
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
                    message.state = reader.int32();
                    break;
                case 4:
                    message.errorState = reader.int32();
                    break;
                case 5:
                    message.randSeed = reader.int64();
                    break;
                case 6:
                    message.prizePool = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.prizePoolFreshAmount = reader.string();
                    break;
                case 8:
                    message.prizePoolRemainsAmount = reader.string();
                    break;
                case 11:
                    message.prizesRefs.push(prize_ref_1.PrizeRef.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.totalWinCount = reader.uint64();
                    break;
                case 13:
                    message.totalWinAmount = reader.string();
                    break;
                case 15:
                    message.createdAtHeight = reader.int64();
                    break;
                case 16:
                    message.updatedAtHeight = reader.int64();
                    break;
                case 17:
                    message.createdAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 18:
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
        const message = createBaseDraw();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? helpers_1.Long.fromValue(object.drawId) : helpers_1.Long.UZERO;
        message.state = object.state ?? 0;
        message.errorState = object.errorState ?? 0;
        message.randSeed = object.randSeed !== undefined && object.randSeed !== null ? helpers_1.Long.fromValue(object.randSeed) : helpers_1.Long.ZERO;
        message.prizePool = object.prizePool !== undefined && object.prizePool !== null ? coin_1.Coin.fromPartial(object.prizePool) : undefined;
        message.prizePoolFreshAmount = object.prizePoolFreshAmount ?? "";
        message.prizePoolRemainsAmount = object.prizePoolRemainsAmount ?? "";
        message.prizesRefs = object.prizesRefs?.map(e => prize_ref_1.PrizeRef.fromPartial(e)) || [];
        message.totalWinCount = object.totalWinCount !== undefined && object.totalWinCount !== null ? helpers_1.Long.fromValue(object.totalWinCount) : helpers_1.Long.UZERO;
        message.totalWinAmount = object.totalWinAmount ?? "";
        message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? helpers_1.Long.fromValue(object.createdAtHeight) : helpers_1.Long.ZERO;
        message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? helpers_1.Long.fromValue(object.updatedAtHeight) : helpers_1.Long.ZERO;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            drawId: helpers_1.Long.fromString(object.draw_id),
            state: (0, helpers_1.isSet)(object.state) ? drawStateFromJSON(object.state) : -1,
            errorState: (0, helpers_1.isSet)(object.error_state) ? drawStateFromJSON(object.error_state) : -1,
            randSeed: helpers_1.Long.fromString(object.rand_seed),
            prizePool: object?.prize_pool ? coin_1.Coin.fromAmino(object.prize_pool) : undefined,
            prizePoolFreshAmount: object.prize_pool_fresh_amount,
            prizePoolRemainsAmount: object.prize_pool_remains_amount,
            prizesRefs: Array.isArray(object?.prizes_refs) ? object.prizes_refs.map((e) => prize_ref_1.PrizeRef.fromAmino(e)) : [],
            totalWinCount: helpers_1.Long.fromString(object.total_win_count),
            totalWinAmount: object.total_win_amount,
            createdAtHeight: helpers_1.Long.fromString(object.created_at_height),
            updatedAtHeight: helpers_1.Long.fromString(object.updated_at_height),
            createdAt: object.created_at,
            updatedAt: object.updated_at
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        obj.state = message.state;
        obj.error_state = message.errorState;
        obj.rand_seed = message.randSeed ? message.randSeed.toString() : undefined;
        obj.prize_pool = message.prizePool ? coin_1.Coin.toAmino(message.prizePool) : undefined;
        obj.prize_pool_fresh_amount = message.prizePoolFreshAmount;
        obj.prize_pool_remains_amount = message.prizePoolRemainsAmount;
        if (message.prizesRefs) {
            obj.prizes_refs = message.prizesRefs.map(e => e ? prize_ref_1.PrizeRef.toAmino(e) : undefined);
        }
        else {
            obj.prizes_refs = [];
        }
        obj.total_win_count = message.totalWinCount ? message.totalWinCount.toString() : undefined;
        obj.total_win_amount = message.totalWinAmount;
        obj.created_at_height = message.createdAtHeight ? message.createdAtHeight.toString() : undefined;
        obj.updated_at_height = message.updatedAtHeight ? message.updatedAtHeight.toString() : undefined;
        obj.created_at = message.createdAt;
        obj.updated_at = message.updatedAt;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Draw.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Draw.decode(message.value);
    },
    toProto(message) {
        return exports.Draw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.Draw",
            value: exports.Draw.encode(message).finish()
        };
    }
};
//# sourceMappingURL=draw.js.map