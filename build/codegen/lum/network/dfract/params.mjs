import * as _m0 from "protobufjs/minimal";
function createBaseParams() {
    return {
        depositDenoms: [],
        minDepositAmount: "",
        withdrawalAddress: "",
        isDepositEnabled: false
    };
}
export const Params = {
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
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map