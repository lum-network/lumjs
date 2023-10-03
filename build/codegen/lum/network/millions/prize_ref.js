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
exports.PrizeRef = void 0;
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBasePrizeRef() {
    return {
        amount: "",
        prizeId: undefined,
        winnerAddress: undefined
    };
}
exports.PrizeRef = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        if (message.prizeId !== undefined) {
            writer.uint32(16).uint64(message.prizeId);
        }
        if (message.winnerAddress !== undefined) {
            writer.uint32(26).string(message.winnerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrizeRef();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.prizeId = reader.uint64();
                    break;
                case 3:
                    message.winnerAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePrizeRef();
        message.amount = object.amount ?? "";
        message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? helpers_1.Long.fromValue(object.prizeId) : undefined;
        message.winnerAddress = object.winnerAddress ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            amount: object.amount,
            prizeId: object?.prize_id ? helpers_1.Long.fromString(object.prize_id) : undefined,
            winnerAddress: object?.winner_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount;
        obj.prize_id = message.prizeId ? message.prizeId.toString() : undefined;
        obj.winner_address = message.winnerAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PrizeRef.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PrizeRef.decode(message.value);
    },
    toProto(message) {
        return exports.PrizeRef.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.PrizeRef",
            value: exports.PrizeRef.encode(message).finish()
        };
    }
};
//# sourceMappingURL=prize_ref.js.map