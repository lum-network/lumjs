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
exports.ProposalUpdateParams = void 0;
const wrappers_1 = require("../../../google/protobuf/wrappers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseProposalUpdateParams() {
    return {
        title: "",
        description: "",
        withdrawalAddress: "",
        isDepositEnabled: wrappers_1.BoolValue.fromPartial({}),
        depositDenoms: undefined,
        minDepositAmount: undefined
    };
}
exports.ProposalUpdateParams = {
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
        if (message.isDepositEnabled !== undefined) {
            wrappers_1.BoolValue.encode(message.isDepositEnabled, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.depositDenoms) {
            writer.uint32(42).string(v);
        }
        if (message.minDepositAmount !== undefined) {
            writer.uint32(50).string(message.minDepositAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposalUpdateParams();
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
                    message.isDepositEnabled = wrappers_1.BoolValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.depositDenoms.push(reader.string());
                    break;
                case 6:
                    message.minDepositAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProposalUpdateParams();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.withdrawalAddress = object.withdrawalAddress ?? "";
        message.isDepositEnabled = object.isDepositEnabled !== undefined && object.isDepositEnabled !== null ? wrappers_1.BoolValue.fromPartial(object.isDepositEnabled) : undefined;
        message.depositDenoms = object.depositDenoms?.map(e => e) || [];
        message.minDepositAmount = object.minDepositAmount ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            withdrawalAddress: object.withdrawal_address,
            isDepositEnabled: object?.is_deposit_enabled ? wrappers_1.BoolValue.fromAmino(object.is_deposit_enabled) : undefined,
            depositDenoms: Array.isArray(object?.deposit_denoms) ? object.deposit_denoms.map((e) => e) : [],
            minDepositAmount: object?.min_deposit_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.withdrawal_address = message.withdrawalAddress;
        obj.is_deposit_enabled = message.isDepositEnabled ? wrappers_1.BoolValue.toAmino(message.isDepositEnabled) : undefined;
        if (message.depositDenoms) {
            obj.deposit_denoms = message.depositDenoms.map(e => e);
        }
        else {
            obj.deposit_denoms = [];
        }
        obj.min_deposit_amount = message.minDepositAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProposalUpdateParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProposalUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.ProposalUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.ProposalUpdateParams",
            value: exports.ProposalUpdateParams.encode(message).finish()
        };
    }
};
//# sourceMappingURL=gov.js.map