import { ClaimRecord, actionFromJSON } from "./claim";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseQueryModuleAccountBalanceRequest() {
    return {};
}
export const QueryModuleAccountBalanceRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountBalanceRequest();
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
        const message = createBaseQueryModuleAccountBalanceRequest();
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
        return QueryModuleAccountBalanceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryModuleAccountBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryModuleAccountBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.airdrop.QueryModuleAccountBalanceRequest",
            value: QueryModuleAccountBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountBalanceResponse() {
    return {
        moduleAccountBalance: []
    };
}
export const QueryModuleAccountBalanceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.moduleAccountBalance) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleAccountBalance.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountBalanceResponse();
        message.moduleAccountBalance = object.moduleAccountBalance?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            moduleAccountBalance: Array.isArray(object?.module_account_balance) ? object.module_account_balance.map((e) => Coin.fromAmino(e)) : []
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
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleAccountBalanceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryModuleAccountBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryModuleAccountBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.airdrop.QueryModuleAccountBalanceResponse",
            value: QueryModuleAccountBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
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
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.airdrop.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.airdrop.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClaimRecordRequest() {
    return {
        address: ""
    };
}
export const QueryClaimRecordRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimRecordRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClaimRecordRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimRecordRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClaimRecordRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.airdrop.QueryClaimRecordRequest",
            value: QueryClaimRecordRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClaimRecordResponse() {
    return {
        claimRecord: ClaimRecord.fromPartial({})
    };
}
export const QueryClaimRecordResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.claimRecord !== undefined) {
            ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimRecordResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimRecord = ClaimRecord.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordResponse();
        message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? ClaimRecord.fromPartial(object.claimRecord) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            claimRecord: object?.claim_record ? ClaimRecord.fromAmino(object.claim_record) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.claim_record = message.claimRecord ? ClaimRecord.toAmino(message.claimRecord) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClaimRecordResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimRecordResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClaimRecordResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.airdrop.QueryClaimRecordResponse",
            value: QueryClaimRecordResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClaimableForActionRequest() {
    return {
        address: "",
        action: 0
    };
}
export const QueryClaimableForActionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.action !== 0) {
            writer.uint32(16).int32(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimableForActionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.action = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimableForActionRequest();
        message.address = object.address ?? "";
        message.action = object.action ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            action: isSet(object.action) ? actionFromJSON(object.action) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.action = message.action;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClaimableForActionRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimableForActionRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClaimableForActionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.airdrop.QueryClaimableForActionRequest",
            value: QueryClaimableForActionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClaimableForActionResponse() {
    return {
        coins: []
    };
}
export const QueryClaimableForActionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimableForActionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimableForActionResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClaimableForActionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimableForActionResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClaimableForActionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.airdrop.QueryClaimableForActionResponse",
            value: QueryClaimableForActionResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalClaimableRequest() {
    return {
        address: ""
    };
}
export const QueryTotalClaimableRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalClaimableRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalClaimableRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalClaimableRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTotalClaimableRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalClaimableRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.airdrop.QueryTotalClaimableRequest",
            value: QueryTotalClaimableRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalClaimableResponse() {
    return {
        coins: []
    };
}
export const QueryTotalClaimableResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalClaimableResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalClaimableResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalClaimableResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTotalClaimableResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalClaimableResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.airdrop.QueryTotalClaimableResponse",
            value: QueryTotalClaimableResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map