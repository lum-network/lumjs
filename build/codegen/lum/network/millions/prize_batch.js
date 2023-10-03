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
exports.PrizeBatch = void 0;
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBasePrizeBatch() {
    return {
        poolPercent: helpers_1.Long.UZERO,
        quantity: helpers_1.Long.UZERO,
        drawProbability: "",
        isUnique: false
    };
}
exports.PrizeBatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolPercent.isZero()) {
            writer.uint32(8).uint64(message.poolPercent);
        }
        if (!message.quantity.isZero()) {
            writer.uint32(16).uint64(message.quantity);
        }
        if (message.drawProbability !== "") {
            writer.uint32(26).string(message.drawProbability);
        }
        if (message.isUnique === true) {
            writer.uint32(32).bool(message.isUnique);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrizeBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolPercent = reader.uint64();
                    break;
                case 2:
                    message.quantity = reader.uint64();
                    break;
                case 3:
                    message.drawProbability = reader.string();
                    break;
                case 4:
                    message.isUnique = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePrizeBatch();
        message.poolPercent = object.poolPercent !== undefined && object.poolPercent !== null ? helpers_1.Long.fromValue(object.poolPercent) : helpers_1.Long.UZERO;
        message.quantity = object.quantity !== undefined && object.quantity !== null ? helpers_1.Long.fromValue(object.quantity) : helpers_1.Long.UZERO;
        message.drawProbability = object.drawProbability ?? "";
        message.isUnique = object.isUnique ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            poolPercent: helpers_1.Long.fromString(object.pool_percent),
            quantity: helpers_1.Long.fromString(object.quantity),
            drawProbability: object.draw_probability,
            isUnique: object.is_unique
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_percent = message.poolPercent ? message.poolPercent.toString() : undefined;
        obj.quantity = message.quantity ? message.quantity.toString() : undefined;
        obj.draw_probability = message.drawProbability;
        obj.is_unique = message.isUnique;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PrizeBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PrizeBatch.decode(message.value);
    },
    toProto(message) {
        return exports.PrizeBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.PrizeBatch",
            value: exports.PrizeBatch.encode(message).finish()
        };
    }
};
//# sourceMappingURL=prize_batch.js.map