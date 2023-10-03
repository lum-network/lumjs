import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Beam } from "./beam";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        moduleAccountBalance: Coin.fromPartial({}),
        beams: []
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.moduleAccountBalance !== undefined) {
            Coin.encode(message.moduleAccountBalance, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.beams) {
            Beam.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.moduleAccountBalance = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.beams.push(Beam.decode(reader, reader.uint32()));
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
        message.moduleAccountBalance = object.moduleAccountBalance !== undefined && object.moduleAccountBalance !== null ? Coin.fromPartial(object.moduleAccountBalance) : undefined;
        message.beams = object.beams?.map(e => Beam.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            moduleAccountBalance: object?.module_account_balance ? Coin.fromAmino(object.module_account_balance) : undefined,
            beams: Array.isArray(object?.beams) ? object.beams.map((e) => Beam.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.module_account_balance = message.moduleAccountBalance ? Coin.toAmino(message.moduleAccountBalance) : undefined;
        if (message.beams) {
            obj.beams = message.beams.map(e => e ? Beam.toAmino(e) : undefined);
        }
        else {
            obj.beams = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map