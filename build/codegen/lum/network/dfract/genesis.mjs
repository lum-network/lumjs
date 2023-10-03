import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Deposit } from "./deposit";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        moduleAccountBalance: [],
        params: Params.fromPartial({}),
        depositsPendingWithdrawal: [],
        depositsPendingMint: [],
        depositsMinted: []
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.moduleAccountBalance) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.depositsPendingWithdrawal) {
            Deposit.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.depositsPendingMint) {
            Deposit.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.depositsMinted) {
            Deposit.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.moduleAccountBalance.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.depositsPendingWithdrawal.push(Deposit.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.depositsPendingMint.push(Deposit.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.depositsMinted.push(Deposit.decode(reader, reader.uint32()));
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
        message.moduleAccountBalance = object.moduleAccountBalance?.map(e => Coin.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.depositsPendingWithdrawal = object.depositsPendingWithdrawal?.map(e => Deposit.fromPartial(e)) || [];
        message.depositsPendingMint = object.depositsPendingMint?.map(e => Deposit.fromPartial(e)) || [];
        message.depositsMinted = object.depositsMinted?.map(e => Deposit.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            moduleAccountBalance: Array.isArray(object?.module_account_balance) ? object.module_account_balance.map((e) => Coin.fromAmino(e)) : [],
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            depositsPendingWithdrawal: Array.isArray(object?.deposits_pending_withdrawal) ? object.deposits_pending_withdrawal.map((e) => Deposit.fromAmino(e)) : [],
            depositsPendingMint: Array.isArray(object?.deposits_pending_mint) ? object.deposits_pending_mint.map((e) => Deposit.fromAmino(e)) : [],
            depositsMinted: Array.isArray(object?.deposits_minted) ? object.deposits_minted.map((e) => Deposit.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.moduleAccountBalance) {
            obj.module_account_balance = message.moduleAccountBalance.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.module_account_balance = [];
        }
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.depositsPendingWithdrawal) {
            obj.deposits_pending_withdrawal = message.depositsPendingWithdrawal.map(e => e ? Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits_pending_withdrawal = [];
        }
        if (message.depositsPendingMint) {
            obj.deposits_pending_mint = message.depositsPendingMint.map(e => e ? Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits_pending_mint = [];
        }
        if (message.depositsMinted) {
            obj.deposits_minted = message.depositsMinted.map(e => e ? Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits_minted = [];
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
            typeUrl: "/lum.network.dfract.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map