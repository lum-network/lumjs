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
const params_1 = require("./params");
const deposit_1 = require("./deposit");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGenesisState() {
    return {
        moduleAccountBalance: [],
        params: params_1.Params.fromPartial({}),
        depositsPendingWithdrawal: [],
        depositsPendingMint: [],
        depositsMinted: []
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.moduleAccountBalance) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.depositsPendingWithdrawal) {
            deposit_1.Deposit.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.depositsPendingMint) {
            deposit_1.Deposit.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.depositsMinted) {
            deposit_1.Deposit.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.moduleAccountBalance.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.depositsPendingWithdrawal.push(deposit_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.depositsPendingMint.push(deposit_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.depositsMinted.push(deposit_1.Deposit.decode(reader, reader.uint32()));
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
        message.moduleAccountBalance = object.moduleAccountBalance?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.depositsPendingWithdrawal = object.depositsPendingWithdrawal?.map(e => deposit_1.Deposit.fromPartial(e)) || [];
        message.depositsPendingMint = object.depositsPendingMint?.map(e => deposit_1.Deposit.fromPartial(e)) || [];
        message.depositsMinted = object.depositsMinted?.map(e => deposit_1.Deposit.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            moduleAccountBalance: Array.isArray(object?.module_account_balance) ? object.module_account_balance.map((e) => coin_1.Coin.fromAmino(e)) : [],
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined,
            depositsPendingWithdrawal: Array.isArray(object?.deposits_pending_withdrawal) ? object.deposits_pending_withdrawal.map((e) => deposit_1.Deposit.fromAmino(e)) : [],
            depositsPendingMint: Array.isArray(object?.deposits_pending_mint) ? object.deposits_pending_mint.map((e) => deposit_1.Deposit.fromAmino(e)) : [],
            depositsMinted: Array.isArray(object?.deposits_minted) ? object.deposits_minted.map((e) => deposit_1.Deposit.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.moduleAccountBalance) {
            obj.module_account_balance = message.moduleAccountBalance.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.module_account_balance = [];
        }
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.depositsPendingWithdrawal) {
            obj.deposits_pending_withdrawal = message.depositsPendingWithdrawal.map(e => e ? deposit_1.Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits_pending_withdrawal = [];
        }
        if (message.depositsPendingMint) {
            obj.deposits_pending_mint = message.depositsPendingMint.map(e => e ? deposit_1.Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits_pending_mint = [];
        }
        if (message.depositsMinted) {
            obj.deposits_minted = message.depositsMinted.map(e => e ? deposit_1.Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits_minted = [];
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
            typeUrl: "/lum.network.dfract.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map