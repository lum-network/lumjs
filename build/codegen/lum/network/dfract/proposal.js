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
exports.WithdrawAndMintProposal = void 0;
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseWithdrawAndMintProposal() {
    return {
        title: "",
        description: "",
        withdrawalAddress: "",
        microMintRate: helpers_1.Long.ZERO
    };
}
exports.WithdrawAndMintProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.withdrawalAddress !== "") {
            writer.uint32(26).string(message.withdrawalAddress);
        }
        if (!message.microMintRate.isZero()) {
            writer.uint32(32).int64(message.microMintRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWithdrawAndMintProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.withdrawalAddress = reader.string();
                    break;
                case 4:
                    message.microMintRate = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWithdrawAndMintProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.withdrawalAddress = object.withdrawalAddress ?? "";
        message.microMintRate = object.microMintRate !== undefined && object.microMintRate !== null ? helpers_1.Long.fromValue(object.microMintRate) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            withdrawalAddress: object.withdrawal_address,
            microMintRate: helpers_1.Long.fromString(object.micro_mint_rate)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.withdrawal_address = message.withdrawalAddress;
        obj.micro_mint_rate = message.microMintRate ? message.microMintRate.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WithdrawAndMintProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.WithdrawAndMintProposal.decode(message.value);
    },
    toProto(message) {
        return exports.WithdrawAndMintProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.WithdrawAndMintProposal",
            value: exports.WithdrawAndMintProposal.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proposal.js.map