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
exports.Params = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseParams() {
    return {
        depositDenoms: [],
        minDepositAmount: "",
        withdrawalAddress: "",
        isDepositEnabled: false
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.depositDenoms) {
            writer.uint32(10).string(v);
        }
        if (message.minDepositAmount !== "") {
            writer.uint32(18).string(message.minDepositAmount);
        }
        if (message.withdrawalAddress !== "") {
            writer.uint32(26).string(message.withdrawalAddress);
        }
        if (message.isDepositEnabled === true) {
            writer.uint32(32).bool(message.isDepositEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositDenoms.push(reader.string());
                    break;
                case 2:
                    message.minDepositAmount = reader.string();
                    break;
                case 3:
                    message.withdrawalAddress = reader.string();
                    break;
                case 4:
                    message.isDepositEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.depositDenoms = object.depositDenoms?.map(e => e) || [];
        message.minDepositAmount = object.minDepositAmount ?? "";
        message.withdrawalAddress = object.withdrawalAddress ?? "";
        message.isDepositEnabled = object.isDepositEnabled ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            depositDenoms: Array.isArray(object?.deposit_denoms) ? object.deposit_denoms.map((e) => e) : [],
            minDepositAmount: object.min_deposit_amount,
            withdrawalAddress: object.withdrawal_address,
            isDepositEnabled: object.is_deposit_enabled
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.depositDenoms) {
            obj.deposit_denoms = message.depositDenoms.map(e => e);
        }
        else {
            obj.deposit_denoms = [];
        }
        obj.min_deposit_amount = message.minDepositAmount;
        obj.withdrawal_address = message.withdrawalAddress;
        obj.is_deposit_enabled = message.isDepositEnabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map