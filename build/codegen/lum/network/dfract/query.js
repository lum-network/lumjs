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
exports.QueryFetchDepositsResponse = exports.QueryGetDepositsForAddressResponse = exports.QueryFetchDepositsRequest = exports.QueryGetDepositsForAddressRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryModuleAccountBalanceResponse = exports.QueryModuleAccountBalanceRequest = exports.depositsQueryTypeToJSON = exports.depositsQueryTypeFromJSON = exports.DepositsQueryTypeAmino = exports.DepositsQueryTypeSDKType = exports.DepositsQueryType = void 0;
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const params_1 = require("./params");
const deposit_1 = require("./deposit");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
var DepositsQueryType;
(function (DepositsQueryType) {
    DepositsQueryType[DepositsQueryType["PENDING_WITHDRAWAL"] = 0] = "PENDING_WITHDRAWAL";
    DepositsQueryType[DepositsQueryType["PENDING_MINT"] = 1] = "PENDING_MINT";
    DepositsQueryType[DepositsQueryType["MINTED"] = 2] = "MINTED";
    DepositsQueryType[DepositsQueryType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DepositsQueryType || (exports.DepositsQueryType = DepositsQueryType = {}));
exports.DepositsQueryTypeSDKType = DepositsQueryType;
exports.DepositsQueryTypeAmino = DepositsQueryType;
function depositsQueryTypeFromJSON(object) {
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
exports.depositsQueryTypeFromJSON = depositsQueryTypeFromJSON;
function depositsQueryTypeToJSON(object) {
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
exports.depositsQueryTypeToJSON = depositsQueryTypeToJSON;
function createBaseQueryModuleAccountBalanceRequest() {
    return {};
}
exports.QueryModuleAccountBalanceRequest = {
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
        return exports.QueryModuleAccountBalanceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleAccountBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleAccountBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.QueryModuleAccountBalanceRequest",
            value: exports.QueryModuleAccountBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountBalanceResponse() {
    return {
        moduleAccountBalance: []
    };
}
exports.QueryModuleAccountBalanceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.moduleAccountBalance) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.moduleAccountBalance.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        message.moduleAccountBalance = object.moduleAccountBalance?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            moduleAccountBalance: Array.isArray(object?.module_account_balance) ? object.module_account_balance.map((e) => coin_1.Coin.fromAmino(e)) : []
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
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleAccountBalanceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleAccountBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleAccountBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.QueryModuleAccountBalanceResponse",
            value: exports.QueryModuleAccountBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetDepositsForAddressRequest() {
    return {
        address: ""
    };
}
exports.QueryGetDepositsForAddressRequest = {
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
        return exports.QueryGetDepositsForAddressRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetDepositsForAddressRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetDepositsForAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.QueryGetDepositsForAddressRequest",
            value: exports.QueryGetDepositsForAddressRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFetchDepositsRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({}),
        type: 0
    };
}
exports.QueryFetchDepositsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        message.type = object.type ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined,
            type: (0, helpers_1.isSet)(object.type) ? depositsQueryTypeFromJSON(object.type) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        obj.type = message.type;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFetchDepositsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFetchDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFetchDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.QueryFetchDepositsRequest",
            value: exports.QueryFetchDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetDepositsForAddressResponse() {
    return {
        depositsPendingWithdrawal: deposit_1.Deposit.fromPartial({}),
        depositsPendingMint: deposit_1.Deposit.fromPartial({}),
        depositsMinted: deposit_1.Deposit.fromPartial({})
    };
}
exports.QueryGetDepositsForAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositsPendingWithdrawal !== undefined) {
            deposit_1.Deposit.encode(message.depositsPendingWithdrawal, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositsPendingMint !== undefined) {
            deposit_1.Deposit.encode(message.depositsPendingMint, writer.uint32(18).fork()).ldelim();
        }
        if (message.depositsMinted !== undefined) {
            deposit_1.Deposit.encode(message.depositsMinted, writer.uint32(26).fork()).ldelim();
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
                    message.depositsPendingWithdrawal = deposit_1.Deposit.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.depositsPendingMint = deposit_1.Deposit.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.depositsMinted = deposit_1.Deposit.decode(reader, reader.uint32());
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
        message.depositsPendingWithdrawal = object.depositsPendingWithdrawal !== undefined && object.depositsPendingWithdrawal !== null ? deposit_1.Deposit.fromPartial(object.depositsPendingWithdrawal) : undefined;
        message.depositsPendingMint = object.depositsPendingMint !== undefined && object.depositsPendingMint !== null ? deposit_1.Deposit.fromPartial(object.depositsPendingMint) : undefined;
        message.depositsMinted = object.depositsMinted !== undefined && object.depositsMinted !== null ? deposit_1.Deposit.fromPartial(object.depositsMinted) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            depositsPendingWithdrawal: object?.deposits_pending_withdrawal ? deposit_1.Deposit.fromAmino(object.deposits_pending_withdrawal) : undefined,
            depositsPendingMint: object?.deposits_pending_mint ? deposit_1.Deposit.fromAmino(object.deposits_pending_mint) : undefined,
            depositsMinted: object?.deposits_minted ? deposit_1.Deposit.fromAmino(object.deposits_minted) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposits_pending_withdrawal = message.depositsPendingWithdrawal ? deposit_1.Deposit.toAmino(message.depositsPendingWithdrawal) : undefined;
        obj.deposits_pending_mint = message.depositsPendingMint ? deposit_1.Deposit.toAmino(message.depositsPendingMint) : undefined;
        obj.deposits_minted = message.depositsMinted ? deposit_1.Deposit.toAmino(message.depositsMinted) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetDepositsForAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetDepositsForAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetDepositsForAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.QueryGetDepositsForAddressResponse",
            value: exports.QueryGetDepositsForAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFetchDepositsResponse() {
    return {
        deposits: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryFetchDepositsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.deposits) {
            deposit_1.Deposit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.deposits.push(deposit_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.deposits = object.deposits?.map(e => deposit_1.Deposit.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => deposit_1.Deposit.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? deposit_1.Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFetchDepositsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFetchDepositsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFetchDepositsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.dfract.QueryFetchDepositsResponse",
            value: exports.QueryFetchDepositsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map