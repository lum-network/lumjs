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
exports.PrizeStrategy = void 0;
const prize_batch_1 = require("./prize_batch");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBasePrizeStrategy() {
    return {
        prizeBatches: []
    };
}
exports.PrizeStrategy = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.prizeBatches) {
            prize_batch_1.PrizeBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrizeStrategy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prizeBatches.push(prize_batch_1.PrizeBatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePrizeStrategy();
        message.prizeBatches = object.prizeBatches?.map(e => prize_batch_1.PrizeBatch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            prizeBatches: Array.isArray(object?.prize_batches) ? object.prize_batches.map((e) => prize_batch_1.PrizeBatch.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.prizeBatches) {
            obj.prize_batches = message.prizeBatches.map(e => e ? prize_batch_1.PrizeBatch.toAmino(e) : undefined);
        }
        else {
            obj.prize_batches = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PrizeStrategy.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PrizeStrategy.decode(message.value);
    },
    toProto(message) {
        return exports.PrizeStrategy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.PrizeStrategy",
            value: exports.PrizeStrategy.encode(message).finish()
        };
    }
};
//# sourceMappingURL=prize_strategy.js.map