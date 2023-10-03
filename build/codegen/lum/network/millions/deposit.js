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
exports.Deposit = exports.depositStateToJSON = exports.depositStateFromJSON = exports.DepositStateAmino = exports.DepositStateSDKType = exports.DepositState = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
var DepositState;
(function (DepositState) {
    DepositState[DepositState["DEPOSIT_STATE_UNSPECIFIED"] = 0] = "DEPOSIT_STATE_UNSPECIFIED";
    DepositState[DepositState["DEPOSIT_STATE_IBC_TRANSFER"] = 1] = "DEPOSIT_STATE_IBC_TRANSFER";
    DepositState[DepositState["DEPOSIT_STATE_ICA_DELEGATE"] = 2] = "DEPOSIT_STATE_ICA_DELEGATE";
    DepositState[DepositState["DEPOSIT_STATE_SUCCESS"] = 3] = "DEPOSIT_STATE_SUCCESS";
    DepositState[DepositState["DEPOSIT_STATE_FAILURE"] = 4] = "DEPOSIT_STATE_FAILURE";
    DepositState[DepositState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DepositState || (exports.DepositState = DepositState = {}));
exports.DepositStateSDKType = DepositState;
exports.DepositStateAmino = DepositState;
function depositStateFromJSON(object) {
    switch (object) {
        case 0:
        case "DEPOSIT_STATE_UNSPECIFIED":
            return DepositState.DEPOSIT_STATE_UNSPECIFIED;
        case 1:
        case "DEPOSIT_STATE_IBC_TRANSFER":
            return DepositState.DEPOSIT_STATE_IBC_TRANSFER;
        case 2:
        case "DEPOSIT_STATE_ICA_DELEGATE":
            return DepositState.DEPOSIT_STATE_ICA_DELEGATE;
        case 3:
        case "DEPOSIT_STATE_SUCCESS":
            return DepositState.DEPOSIT_STATE_SUCCESS;
        case 4:
        case "DEPOSIT_STATE_FAILURE":
            return DepositState.DEPOSIT_STATE_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DepositState.UNRECOGNIZED;
    }
}
exports.depositStateFromJSON = depositStateFromJSON;
function depositStateToJSON(object) {
    switch (object) {
        case DepositState.DEPOSIT_STATE_UNSPECIFIED:
            return "DEPOSIT_STATE_UNSPECIFIED";
        case DepositState.DEPOSIT_STATE_IBC_TRANSFER:
            return "DEPOSIT_STATE_IBC_TRANSFER";
        case DepositState.DEPOSIT_STATE_ICA_DELEGATE:
            return "DEPOSIT_STATE_ICA_DELEGATE";
        case DepositState.DEPOSIT_STATE_SUCCESS:
            return "DEPOSIT_STATE_SUCCESS";
        case DepositState.DEPOSIT_STATE_FAILURE:
            return "DEPOSIT_STATE_FAILURE";
        case DepositState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.depositStateToJSON = depositStateToJSON;
function createBaseDeposit() {
    return {
        poolId: helpers_1.Long.UZERO,
        depositId: helpers_1.Long.UZERO,
        state: 0,
        errorState: 0,
        depositorAddress: "",
        amount: coin_1.Coin.fromPartial({}),
        winnerAddress: "",
        isSponsor: false,
        createdAtHeight: helpers_1.Long.ZERO,
        updatedAtHeight: helpers_1.Long.ZERO,
        createdAt: new Date(),
        updatedAt: new Date()
    };
}
exports.Deposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.errorState !== 0) {
            writer.uint32(32).int32(message.errorState);
        }
        if (message.depositorAddress !== "") {
            writer.uint32(42).string(message.depositorAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
        }
        if (message.winnerAddress !== "") {
            writer.uint32(58).string(message.winnerAddress);
        }
        if (message.isSponsor === true) {
            writer.uint32(64).bool(message.isSponsor);
        }
        if (!message.createdAtHeight.isZero()) {
            writer.uint32(80).int64(message.createdAtHeight);
        }
        if (!message.updatedAtHeight.isZero()) {
            writer.uint32(88).int64(message.updatedAtHeight);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.createdAt), writer.uint32(98).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.updatedAt), writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeposit();
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
                    message.state = reader.int32();
                    break;
                case 4:
                    message.errorState = reader.int32();
                    break;
                case 5:
                    message.depositorAddress = reader.string();
                    break;
                case 6:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.winnerAddress = reader.string();
                    break;
                case 8:
                    message.isSponsor = reader.bool();
                    break;
                case 10:
                    message.createdAtHeight = reader.int64();
                    break;
                case 11:
                    message.updatedAtHeight = reader.int64();
                    break;
                case 12:
                    message.createdAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 13:
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
        const message = createBaseDeposit();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? helpers_1.Long.fromValue(object.depositId) : helpers_1.Long.UZERO;
        message.state = object.state ?? 0;
        message.errorState = object.errorState ?? 0;
        message.depositorAddress = object.depositorAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.winnerAddress = object.winnerAddress ?? "";
        message.isSponsor = object.isSponsor ?? false;
        message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? helpers_1.Long.fromValue(object.createdAtHeight) : helpers_1.Long.ZERO;
        message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? helpers_1.Long.fromValue(object.updatedAtHeight) : helpers_1.Long.ZERO;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            depositId: helpers_1.Long.fromString(object.deposit_id),
            state: (0, helpers_1.isSet)(object.state) ? depositStateFromJSON(object.state) : -1,
            errorState: (0, helpers_1.isSet)(object.error_state) ? depositStateFromJSON(object.error_state) : -1,
            depositorAddress: object.depositor_address,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined,
            winnerAddress: object.winner_address,
            isSponsor: object.is_sponsor,
            createdAtHeight: helpers_1.Long.fromString(object.created_at_height),
            updatedAtHeight: helpers_1.Long.fromString(object.updated_at_height),
            createdAt: object.created_at,
            updatedAt: object.updated_at
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
        obj.state = message.state;
        obj.error_state = message.errorState;
        obj.depositor_address = message.depositorAddress;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.winner_address = message.winnerAddress;
        obj.is_sponsor = message.isSponsor;
        obj.created_at_height = message.createdAtHeight ? message.createdAtHeight.toString() : undefined;
        obj.updated_at_height = message.updatedAtHeight ? message.updatedAtHeight.toString() : undefined;
        obj.created_at = message.createdAt;
        obj.updated_at = message.updatedAt;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Deposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Deposit.decode(message.value);
    },
    toProto(message) {
        return exports.Deposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.Deposit",
            value: exports.Deposit.encode(message).finish()
        };
    }
};
//# sourceMappingURL=deposit.js.map