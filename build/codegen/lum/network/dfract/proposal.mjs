import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseWithdrawAndMintProposal() {
    return {
        title: "",
        description: "",
        withdrawalAddress: "",
        microMintRate: Long.ZERO
    };
}
export const WithdrawAndMintProposal = {
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
        message.microMintRate = object.microMintRate !== undefined && object.microMintRate !== null ? Long.fromValue(object.microMintRate) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            withdrawalAddress: object.withdrawal_address,
            microMintRate: Long.fromString(object.micro_mint_rate)
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
        return WithdrawAndMintProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return WithdrawAndMintProposal.decode(message.value);
    },
    toProto(message) {
        return WithdrawAndMintProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.WithdrawAndMintProposal",
            value: WithdrawAndMintProposal.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proposal.js.map