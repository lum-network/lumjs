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
exports.GenesisState = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const beam_1 = require("./beam");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGenesisState() {
    return {
        moduleAccountBalance: coin_1.Coin.fromPartial({}),
        beams: []
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.moduleAccountBalance !== undefined) {
            coin_1.Coin.encode(message.moduleAccountBalance, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.beams) {
            beam_1.Beam.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleAccountBalance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.beams.push(beam_1.Beam.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.moduleAccountBalance = object.moduleAccountBalance !== undefined && object.moduleAccountBalance !== null ? coin_1.Coin.fromPartial(object.moduleAccountBalance) : undefined;
        message.beams = object.beams?.map(e => beam_1.Beam.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            moduleAccountBalance: object?.module_account_balance ? coin_1.Coin.fromAmino(object.module_account_balance) : undefined,
            beams: Array.isArray(object?.beams) ? object.beams.map((e) => beam_1.Beam.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.module_account_balance = message.moduleAccountBalance ? coin_1.Coin.toAmino(message.moduleAccountBalance) : undefined;
        if (message.beams) {
            obj.beams = message.beams.map(e => e ? beam_1.Beam.toAmino(e) : undefined);
        }
        else {
            obj.beams = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map