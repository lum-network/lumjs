import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Deposit } from "./deposit";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export var DepositsQueryType;
(function (DepositsQueryType) {
    DepositsQueryType[DepositsQueryType["PENDING_WITHDRAWAL"] = 0] = "PENDING_WITHDRAWAL";
    DepositsQueryType[DepositsQueryType["PENDING_MINT"] = 1] = "PENDING_MINT";
    DepositsQueryType[DepositsQueryType["MINTED"] = 2] = "MINTED";
    DepositsQueryType[DepositsQueryType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DepositsQueryType || (DepositsQueryType = {}));
export const DepositsQueryTypeSDKType = DepositsQueryType;
export const DepositsQueryTypeAmino = DepositsQueryType;
export function depositsQueryTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "PENDING_WITHDRAWAL":
            return DepositsQueryType.PENDING_WITHDRAWAL;
        case 1:
        case "PENDING_MINT":
            return DepositsQueryType.PENDING_MINT;
        case 2:
        case "MINTED":
            return DepositsQueryType.MINTED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DepositsQueryType.UNRECOGNIZED;
    }
}
export function depositsQueryTypeToJSON(object) {
    switch (object) {
        case DepositsQueryType.PENDING_WITHDRAWAL:
            return "PENDING_WITHDRAWAL";
        case DepositsQueryType.PENDING_MINT:
            return "PENDING_MINT";
        case DepositsQueryType.MINTED:
            return "MINTED";
        case DepositsQueryType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
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
            typeUrl: "/lum.network.dfract.QueryModuleAccountBalanceRequest",
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
            typeUrl: "/lum.network.dfract.QueryModuleAccountBalanceResponse",
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
            typeUrl: "/lum.network.dfract.QueryParamsRequest",
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
            typeUrl: "/lum.network.dfract.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetDepositsForAddressRequest() {
    return {
        address: ""
    };
}
export const QueryGetDepositsForAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDepositsForAddressRequest();
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
        const message = createBaseQueryGetDepositsForAddressRequest();
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
        return QueryGetDepositsForAddressRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetDepositsForAddressRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetDepositsForAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.QueryGetDepositsForAddressRequest",
            value: QueryGetDepositsForAddressRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFetchDepositsRequest() {
    return {
        pagination: PageRequest.fromPartial({}),
        type: 0
    };
}
export const QueryFetchDepositsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFetchDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFetchDepositsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.type = object.type ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
            type: isSet(object.type) ? depositsQueryTypeFromJSON(object.type) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        obj.type = message.type;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFetchDepositsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFetchDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryFetchDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.QueryFetchDepositsRequest",
            value: QueryFetchDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetDepositsForAddressResponse() {
    return {
        depositsPendingWithdrawal: Deposit.fromPartial({}),
        depositsPendingMint: Deposit.fromPartial({}),
        depositsMinted: Deposit.fromPartial({})
    };
}
export const QueryGetDepositsForAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositsPendingWithdrawal !== undefined) {
            Deposit.encode(message.depositsPendingWithdrawal, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositsPendingMint !== undefined) {
            Deposit.encode(message.depositsPendingMint, writer.uint32(18).fork()).ldelim();
        }
        if (message.depositsMinted !== undefined) {
            Deposit.encode(message.depositsMinted, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDepositsForAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositsPendingWithdrawal = Deposit.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.depositsPendingMint = Deposit.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.depositsMinted = Deposit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetDepositsForAddressResponse();
        message.depositsPendingWithdrawal = object.depositsPendingWithdrawal !== undefined && object.depositsPendingWithdrawal !== null ? Deposit.fromPartial(object.depositsPendingWithdrawal) : undefined;
        message.depositsPendingMint = object.depositsPendingMint !== undefined && object.depositsPendingMint !== null ? Deposit.fromPartial(object.depositsPendingMint) : undefined;
        message.depositsMinted = object.depositsMinted !== undefined && object.depositsMinted !== null ? Deposit.fromPartial(object.depositsMinted) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            depositsPendingWithdrawal: object?.deposits_pending_withdrawal ? Deposit.fromAmino(object.deposits_pending_withdrawal) : undefined,
            depositsPendingMint: object?.deposits_pending_mint ? Deposit.fromAmino(object.deposits_pending_mint) : undefined,
            depositsMinted: object?.deposits_minted ? Deposit.fromAmino(object.deposits_minted) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposits_pending_withdrawal = message.depositsPendingWithdrawal ? Deposit.toAmino(message.depositsPendingWithdrawal) : undefined;
        obj.deposits_pending_mint = message.depositsPendingMint ? Deposit.toAmino(message.depositsPendingMint) : undefined;
        obj.deposits_minted = message.depositsMinted ? Deposit.toAmino(message.depositsMinted) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetDepositsForAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetDepositsForAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetDepositsForAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.QueryGetDepositsForAddressResponse",
            value: QueryGetDepositsForAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFetchDepositsResponse() {
    return {
        deposits: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryFetchDepositsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.deposits) {
            Deposit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFetchDepositsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits.push(Deposit.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFetchDepositsResponse();
        message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => Deposit.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFetchDepositsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFetchDepositsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFetchDepositsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.QueryFetchDepositsResponse",
            value: QueryFetchDepositsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map