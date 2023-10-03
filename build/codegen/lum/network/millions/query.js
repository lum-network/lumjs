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
exports.QueryAccountPoolWithdrawalsRequest = exports.QueryAccountWithdrawalsRequest = exports.QueryPoolWithdrawalsRequest = exports.QueryWithdrawalsRequest = exports.QueryPoolWithdrawalRequest = exports.QueryWithdrawalsResponse = exports.QueryWithdrawalResponse = exports.QueryAccountPoolDrawPrizesRequest = exports.QueryAccountPoolPrizesRequest = exports.QueryAccountPrizesRequest = exports.QueryPoolDrawPrizesRequest = exports.QueryPoolPrizesRequest = exports.QueryPrizesRequest = exports.QueryPoolDrawPrizeRequest = exports.QueryPrizesResponse = exports.QueryPrizeResponse = exports.QueryPoolDrawRequest = exports.QueryPoolDrawsRequest = exports.QueryDrawsRequest = exports.QueryDrawsResponse = exports.QueryDrawResponse = exports.QueryAccountPoolDepositsRequest = exports.QueryAccountDepositsRequest = exports.QueryPoolDepositsRequest = exports.QueryPoolDepositRequest = exports.QueryDepositsRequest = exports.QueryDepositsResponse = exports.QueryDepositResponse = exports.QueryPoolsRequest = exports.QueryPoolRequest = exports.QueryPoolsResponse = exports.QueryPoolResponse = exports.QueryParamsRequest = exports.QueryParamsResponse = void 0;
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const pool_1 = require("./pool");
const deposit_1 = require("./deposit");
const draw_1 = require("./draw");
const prize_1 = require("./prize");
const withdrawal_1 = require("./withdrawal");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
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
            typeUrl: "/lum.network.millions.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
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
            typeUrl: "/lum.network.millions.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolResponse() {
    return {
        pool: pool_1.Pool.fromPartial({})
    };
}
exports.QueryPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pool !== undefined) {
            pool_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = pool_1.Pool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        message.pool = object.pool !== undefined && object.pool !== null ? pool_1.Pool.fromPartial(object.pool) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pool: object?.pool ? pool_1.Pool.fromAmino(object.pool) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? pool_1.Pool.toAmino(message.pool) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolResponse",
            value: exports.QueryPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsResponse() {
    return {
        pools: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryPoolsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pools) {
            pool_1.Pool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(pool_1.Pool.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPoolsResponse();
        message.pools = object.pools?.map(e => pool_1.Pool.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => pool_1.Pool.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? pool_1.Pool.toAmino(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolsResponse",
            value: exports.QueryPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolRequest() {
    return {
        poolId: helpers_1.Long.UZERO
    };
}
exports.QueryPoolRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolRequest",
            value: exports.QueryPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryPoolsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolsRequest",
            value: exports.QueryPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDepositResponse() {
    return {
        deposit: deposit_1.Deposit.fromPartial({})
    };
}
exports.QueryDepositResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deposit !== undefined) {
            deposit_1.Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposit = deposit_1.Deposit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositResponse();
        message.deposit = object.deposit !== undefined && object.deposit !== null ? deposit_1.Deposit.fromPartial(object.deposit) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            deposit: object?.deposit ? deposit_1.Deposit.fromAmino(object.deposit) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposit = message.deposit ? deposit_1.Deposit.toAmino(message.deposit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDepositResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDepositResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryDepositResponse",
            value: exports.QueryDepositResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDepositsResponse() {
    return {
        deposits: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryDepositsResponse = {
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
        const message = createBaseQueryDepositsResponse();
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
        const message = createBaseQueryDepositsResponse();
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
        return exports.QueryDepositsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDepositsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDepositsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryDepositsResponse",
            value: exports.QueryDepositsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDepositsRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryDepositsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDepositsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryDepositsRequest",
            value: exports.QueryDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolDepositRequest() {
    return {
        poolId: helpers_1.Long.UZERO,
        depositId: helpers_1.Long.UZERO
    };
}
exports.QueryPoolDepositRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolDepositRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.depositId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolDepositRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? helpers_1.Long.fromValue(object.depositId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            depositId: helpers_1.Long.fromString(object.deposit_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolDepositRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolDepositRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolDepositRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolDepositRequest",
            value: exports.QueryPoolDepositRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolDepositsRequest() {
    return {
        poolId: helpers_1.Long.UZERO,
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryPoolDepositsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolDepositsRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolDepositsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolDepositsRequest",
            value: exports.QueryPoolDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountDepositsRequest() {
    return {
        depositorAddress: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAccountDepositsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositorAddress !== "") {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositorAddress = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountDepositsRequest();
        message.depositorAddress = object.depositorAddress ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            depositorAddress: object.depositor_address,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.depositor_address = message.depositorAddress;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountDepositsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryAccountDepositsRequest",
            value: exports.QueryAccountDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountPoolDepositsRequest() {
    return {
        depositorAddress: "",
        poolId: helpers_1.Long.UZERO,
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAccountPoolDepositsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositorAddress !== "") {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountPoolDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositorAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountPoolDepositsRequest();
        message.depositorAddress = object.depositorAddress ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            depositorAddress: object.depositor_address,
            poolId: helpers_1.Long.fromString(object.pool_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.depositor_address = message.depositorAddress;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountPoolDepositsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountPoolDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountPoolDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryAccountPoolDepositsRequest",
            value: exports.QueryAccountPoolDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDrawResponse() {
    return {
        draw: draw_1.Draw.fromPartial({})
    };
}
exports.QueryDrawResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.draw !== undefined) {
            draw_1.Draw.encode(message.draw, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDrawResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.draw = draw_1.Draw.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDrawResponse();
        message.draw = object.draw !== undefined && object.draw !== null ? draw_1.Draw.fromPartial(object.draw) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            draw: object?.draw ? draw_1.Draw.fromAmino(object.draw) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.draw = message.draw ? draw_1.Draw.toAmino(message.draw) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDrawResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDrawResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDrawResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryDrawResponse",
            value: exports.QueryDrawResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDrawsResponse() {
    return {
        draws: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryDrawsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.draws) {
            draw_1.Draw.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDrawsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.draws.push(draw_1.Draw.decode(reader, reader.uint32()));
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
        const message = createBaseQueryDrawsResponse();
        message.draws = object.draws?.map(e => draw_1.Draw.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            draws: Array.isArray(object?.draws) ? object.draws.map((e) => draw_1.Draw.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.draws) {
            obj.draws = message.draws.map(e => e ? draw_1.Draw.toAmino(e) : undefined);
        }
        else {
            obj.draws = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDrawsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDrawsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDrawsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryDrawsResponse",
            value: exports.QueryDrawsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDrawsRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryDrawsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDrawsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDrawsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDrawsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDrawsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDrawsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryDrawsRequest",
            value: exports.QueryDrawsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolDrawsRequest() {
    return {
        poolId: helpers_1.Long.UZERO,
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryPoolDrawsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolDrawsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolDrawsRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolDrawsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolDrawsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolDrawsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolDrawsRequest",
            value: exports.QueryPoolDrawsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolDrawRequest() {
    return {
        poolId: helpers_1.Long.UZERO,
        drawId: helpers_1.Long.UZERO
    };
}
exports.QueryPoolDrawRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolDrawRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.drawId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolDrawRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? helpers_1.Long.fromValue(object.drawId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            drawId: helpers_1.Long.fromString(object.draw_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolDrawRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolDrawRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolDrawRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolDrawRequest",
            value: exports.QueryPoolDrawRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPrizeResponse() {
    return {
        prize: prize_1.Prize.fromPartial({})
    };
}
exports.QueryPrizeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.prize !== undefined) {
            prize_1.Prize.encode(message.prize, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPrizeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prize = prize_1.Prize.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPrizeResponse();
        message.prize = object.prize !== undefined && object.prize !== null ? prize_1.Prize.fromPartial(object.prize) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            prize: object?.prize ? prize_1.Prize.fromAmino(object.prize) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.prize = message.prize ? prize_1.Prize.toAmino(message.prize) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPrizeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPrizeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPrizeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPrizeResponse",
            value: exports.QueryPrizeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPrizesResponse() {
    return {
        prizes: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryPrizesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.prizes) {
            prize_1.Prize.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPrizesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prizes.push(prize_1.Prize.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPrizesResponse();
        message.prizes = object.prizes?.map(e => prize_1.Prize.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            prizes: Array.isArray(object?.prizes) ? object.prizes.map((e) => prize_1.Prize.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.prizes) {
            obj.prizes = message.prizes.map(e => e ? prize_1.Prize.toAmino(e) : undefined);
        }
        else {
            obj.prizes = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPrizesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPrizesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPrizesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPrizesResponse",
            value: exports.QueryPrizesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolDrawPrizeRequest() {
    return {
        poolId: helpers_1.Long.UZERO,
        drawId: helpers_1.Long.UZERO,
        prizeId: helpers_1.Long.UZERO
    };
}
exports.QueryPoolDrawPrizeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (!message.prizeId.isZero()) {
            writer.uint32(24).uint64(message.prizeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolDrawPrizeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.drawId = reader.uint64();
                    break;
                case 3:
                    message.prizeId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolDrawPrizeRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? helpers_1.Long.fromValue(object.drawId) : helpers_1.Long.UZERO;
        message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? helpers_1.Long.fromValue(object.prizeId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            drawId: helpers_1.Long.fromString(object.draw_id),
            prizeId: helpers_1.Long.fromString(object.prize_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        obj.prize_id = message.prizeId ? message.prizeId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolDrawPrizeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolDrawPrizeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolDrawPrizeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolDrawPrizeRequest",
            value: exports.QueryPoolDrawPrizeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPrizesRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryPrizesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPrizesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPrizesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPrizesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPrizesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPrizesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPrizesRequest",
            value: exports.QueryPrizesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolPrizesRequest() {
    return {
        poolId: helpers_1.Long.UZERO,
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryPoolPrizesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolPrizesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolPrizesRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolPrizesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolPrizesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolPrizesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolPrizesRequest",
            value: exports.QueryPoolPrizesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolDrawPrizesRequest() {
    return {
        poolId: helpers_1.Long.UZERO,
        drawId: helpers_1.Long.UZERO,
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryPoolDrawPrizesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolDrawPrizesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.drawId = reader.uint64();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolDrawPrizesRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? helpers_1.Long.fromValue(object.drawId) : helpers_1.Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            drawId: helpers_1.Long.fromString(object.draw_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolDrawPrizesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolDrawPrizesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolDrawPrizesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolDrawPrizesRequest",
            value: exports.QueryPoolDrawPrizesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountPrizesRequest() {
    return {
        winnerAddress: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAccountPrizesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.winnerAddress !== "") {
            writer.uint32(10).string(message.winnerAddress);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountPrizesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.winnerAddress = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountPrizesRequest();
        message.winnerAddress = object.winnerAddress ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            winnerAddress: object.winner_address,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.winner_address = message.winnerAddress;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountPrizesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountPrizesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountPrizesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryAccountPrizesRequest",
            value: exports.QueryAccountPrizesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountPoolPrizesRequest() {
    return {
        winnerAddress: "",
        poolId: helpers_1.Long.UZERO,
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAccountPoolPrizesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.winnerAddress !== "") {
            writer.uint32(10).string(message.winnerAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountPoolPrizesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.winnerAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountPoolPrizesRequest();
        message.winnerAddress = object.winnerAddress ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            winnerAddress: object.winner_address,
            poolId: helpers_1.Long.fromString(object.pool_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.winner_address = message.winnerAddress;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountPoolPrizesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountPoolPrizesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountPoolPrizesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryAccountPoolPrizesRequest",
            value: exports.QueryAccountPoolPrizesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountPoolDrawPrizesRequest() {
    return {
        winnerAddress: "",
        poolId: helpers_1.Long.UZERO,
        drawId: helpers_1.Long.UZERO,
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAccountPoolDrawPrizesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.winnerAddress !== "") {
            writer.uint32(10).string(message.winnerAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(24).uint64(message.drawId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountPoolDrawPrizesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.winnerAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.drawId = reader.uint64();
                    break;
                case 4:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountPoolDrawPrizesRequest();
        message.winnerAddress = object.winnerAddress ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? helpers_1.Long.fromValue(object.drawId) : helpers_1.Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            winnerAddress: object.winner_address,
            poolId: helpers_1.Long.fromString(object.pool_id),
            drawId: helpers_1.Long.fromString(object.draw_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.winner_address = message.winnerAddress;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountPoolDrawPrizesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountPoolDrawPrizesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountPoolDrawPrizesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryAccountPoolDrawPrizesRequest",
            value: exports.QueryAccountPoolDrawPrizesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryWithdrawalResponse() {
    return {
        withdrawal: withdrawal_1.Withdrawal.fromPartial({})
    };
}
exports.QueryWithdrawalResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.withdrawal !== undefined) {
            withdrawal_1.Withdrawal.encode(message.withdrawal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWithdrawalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawal = withdrawal_1.Withdrawal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryWithdrawalResponse();
        message.withdrawal = object.withdrawal !== undefined && object.withdrawal !== null ? withdrawal_1.Withdrawal.fromPartial(object.withdrawal) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            withdrawal: object?.withdrawal ? withdrawal_1.Withdrawal.fromAmino(object.withdrawal) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.withdrawal = message.withdrawal ? withdrawal_1.Withdrawal.toAmino(message.withdrawal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWithdrawalResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWithdrawalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWithdrawalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryWithdrawalResponse",
            value: exports.QueryWithdrawalResponse.encode(message).finish()
        };
    }
};
function createBaseQueryWithdrawalsResponse() {
    return {
        withdrawals: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryWithdrawalsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.withdrawals) {
            withdrawal_1.Withdrawal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWithdrawalsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawals.push(withdrawal_1.Withdrawal.decode(reader, reader.uint32()));
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
        const message = createBaseQueryWithdrawalsResponse();
        message.withdrawals = object.withdrawals?.map(e => withdrawal_1.Withdrawal.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e) => withdrawal_1.Withdrawal.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.withdrawals) {
            obj.withdrawals = message.withdrawals.map(e => e ? withdrawal_1.Withdrawal.toAmino(e) : undefined);
        }
        else {
            obj.withdrawals = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWithdrawalsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWithdrawalsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWithdrawalsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryWithdrawalsResponse",
            value: exports.QueryWithdrawalsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolWithdrawalRequest() {
    return {
        poolId: helpers_1.Long.UZERO,
        withdrawalId: helpers_1.Long.UZERO
    };
}
exports.QueryPoolWithdrawalRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.withdrawalId.isZero()) {
            writer.uint32(16).uint64(message.withdrawalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolWithdrawalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.withdrawalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolWithdrawalRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? helpers_1.Long.fromValue(object.withdrawalId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            withdrawalId: helpers_1.Long.fromString(object.withdrawal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolWithdrawalRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolWithdrawalRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolWithdrawalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolWithdrawalRequest",
            value: exports.QueryPoolWithdrawalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryWithdrawalsRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryWithdrawalsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWithdrawalsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryWithdrawalsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWithdrawalsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWithdrawalsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWithdrawalsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryWithdrawalsRequest",
            value: exports.QueryWithdrawalsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolWithdrawalsRequest() {
    return {
        poolId: helpers_1.Long.UZERO,
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryPoolWithdrawalsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolWithdrawalsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolWithdrawalsRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: helpers_1.Long.fromString(object.pool_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolWithdrawalsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolWithdrawalsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolWithdrawalsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolWithdrawalsRequest",
            value: exports.QueryPoolWithdrawalsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountWithdrawalsRequest() {
    return {
        depositorAddress: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAccountWithdrawalsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositorAddress !== "") {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountWithdrawalsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositorAddress = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountWithdrawalsRequest();
        message.depositorAddress = object.depositorAddress ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            depositorAddress: object.depositor_address,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.depositor_address = message.depositorAddress;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountWithdrawalsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountWithdrawalsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountWithdrawalsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryAccountWithdrawalsRequest",
            value: exports.QueryAccountWithdrawalsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountPoolWithdrawalsRequest() {
    return {
        depositorAddress: "",
        poolId: helpers_1.Long.UZERO,
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAccountPoolWithdrawalsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositorAddress !== "") {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountPoolWithdrawalsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositorAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountPoolWithdrawalsRequest();
        message.depositorAddress = object.depositorAddress ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? helpers_1.Long.fromValue(object.poolId) : helpers_1.Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            depositorAddress: object.depositor_address,
            poolId: helpers_1.Long.fromString(object.pool_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.depositor_address = message.depositorAddress;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountPoolWithdrawalsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountPoolWithdrawalsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountPoolWithdrawalsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryAccountPoolWithdrawalsRequest",
            value: exports.QueryAccountPoolWithdrawalsRequest.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map