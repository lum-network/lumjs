import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgDeposit() {
    return {
        depositorAddress: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositorAddress !== "") {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositorAddress = reader.string();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDeposit();
        message.depositorAddress = object.depositorAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            depositorAddress: object.depositor_address,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.depositor_address = message.depositorAddress;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeposit.decode(message.value);
    },
    toProto(message) {
        return MsgDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.MsgDeposit",
            value: MsgDeposit.encode(message).finish()
        };
    }
};
function createBaseMsgDepositResponse() {
    return {};
}
export const MsgDepositResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDepositResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDepositResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.MsgDepositResponse",
            value: MsgDepositResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawAndMint() {
    return {
        address: "",
        microMintRate: Long.ZERO
    };
}
export const MsgWithdrawAndMint = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.microMintRate.isZero()) {
            writer.uint32(16).int64(message.microMintRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAndMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgWithdrawAndMint();
        message.address = object.address ?? "";
        message.microMintRate = object.microMintRate !== undefined && object.microMintRate !== null ? Long.fromValue(object.microMintRate) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            microMintRate: Long.fromString(object.micro_mint_rate)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.micro_mint_rate = message.microMintRate ? message.microMintRate.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawAndMint.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawAndMint.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawAndMint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.MsgWithdrawAndMint",
            value: MsgWithdrawAndMint.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawAndMintResponse() {
    return {};
}
export const MsgWithdrawAndMintResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAndMintResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawAndMintResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawAndMintResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawAndMintResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawAndMintResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.MsgWithdrawAndMintResponse",
            value: MsgWithdrawAndMintResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map