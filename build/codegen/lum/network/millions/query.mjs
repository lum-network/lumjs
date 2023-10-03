import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Pool } from "./pool";
import { Deposit } from "./deposit";
import { Draw } from "./draw";
import { Prize } from "./prize";
import { Withdrawal } from "./withdrawal";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
            typeUrl: "/lum.network.millions.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
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
            typeUrl: "/lum.network.millions.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolResponse() {
    return {
        pool: Pool.fromPartial({})
    };
}
export const QueryPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pool !== undefined) {
            Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
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
                    message.pool = Pool.decode(reader, reader.uint32());
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
        message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pool: object?.pool ? Pool.fromAmino(object.pool) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolResponse",
            value: QueryPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsResponse() {
    return {
        pools: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryPoolsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pools) {
            Pool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.pools.push(Pool.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPoolsResponse();
        message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => Pool.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolsResponse",
            value: QueryPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolRequest() {
    return {
        poolId: Long.UZERO
    };
}
export const QueryPoolRequest = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolRequest",
            value: QueryPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryPoolsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolsRequest",
            value: QueryPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDepositResponse() {
    return {
        deposit: Deposit.fromPartial({})
    };
}
export const QueryDepositResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deposit !== undefined) {
            Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
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
                    message.deposit = Deposit.decode(reader, reader.uint32());
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
        message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            deposit: object?.deposit ? Deposit.fromAmino(object.deposit) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDepositResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDepositResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryDepositResponse",
            value: QueryDepositResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDepositsResponse() {
    return {
        deposits: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryDepositsResponse = {
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
        const message = createBaseQueryDepositsResponse();
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
        const message = createBaseQueryDepositsResponse();
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
        return QueryDepositsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDepositsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDepositsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryDepositsResponse",
            value: QueryDepositsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDepositsRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryDepositsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDepositsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryDepositsRequest",
            value: QueryDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolDepositRequest() {
    return {
        poolId: Long.UZERO,
        depositId: Long.UZERO
    };
}
export const QueryPoolDepositRequest = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            depositId: Long.fromString(object.deposit_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.deposit_id = message.depositId ? message.depositId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolDepositRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolDepositRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolDepositRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolDepositRequest",
            value: QueryPoolDepositRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolDepositsRequest() {
    return {
        poolId: Long.UZERO,
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryPoolDepositsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolDepositsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolDepositsRequest",
            value: QueryPoolDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountDepositsRequest() {
    return {
        depositorAddress: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAccountDepositsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositorAddress !== "") {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            depositorAddress: object.depositor_address,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.depositor_address = message.depositorAddress;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountDepositsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAccountDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryAccountDepositsRequest",
            value: QueryAccountDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountPoolDepositsRequest() {
    return {
        depositorAddress: "",
        poolId: Long.UZERO,
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAccountPoolDepositsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositorAddress !== "") {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            depositorAddress: object.depositor_address,
            poolId: Long.fromString(object.pool_id),
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.depositor_address = message.depositorAddress;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountPoolDepositsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAccountPoolDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountPoolDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryAccountPoolDepositsRequest",
            value: QueryAccountPoolDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDrawResponse() {
    return {
        draw: Draw.fromPartial({})
    };
}
export const QueryDrawResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.draw !== undefined) {
            Draw.encode(message.draw, writer.uint32(10).fork()).ldelim();
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
                    message.draw = Draw.decode(reader, reader.uint32());
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
        message.draw = object.draw !== undefined && object.draw !== null ? Draw.fromPartial(object.draw) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            draw: object?.draw ? Draw.fromAmino(object.draw) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.draw = message.draw ? Draw.toAmino(message.draw) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDrawResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDrawResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDrawResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryDrawResponse",
            value: QueryDrawResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDrawsResponse() {
    return {
        draws: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryDrawsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.draws) {
            Draw.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.draws.push(Draw.decode(reader, reader.uint32()));
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
        const message = createBaseQueryDrawsResponse();
        message.draws = object.draws?.map(e => Draw.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            draws: Array.isArray(object?.draws) ? object.draws.map((e) => Draw.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.draws) {
            obj.draws = message.draws.map(e => e ? Draw.toAmino(e) : undefined);
        }
        else {
            obj.draws = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDrawsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDrawsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDrawsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryDrawsResponse",
            value: QueryDrawsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDrawsRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryDrawsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDrawsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDrawsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDrawsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryDrawsRequest",
            value: QueryDrawsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolDrawsRequest() {
    return {
        poolId: Long.UZERO,
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryPoolDrawsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolDrawsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolDrawsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolDrawsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolDrawsRequest",
            value: QueryPoolDrawsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolDrawRequest() {
    return {
        poolId: Long.UZERO,
        drawId: Long.UZERO
    };
}
export const QueryPoolDrawRequest = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            drawId: Long.fromString(object.draw_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolDrawRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolDrawRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolDrawRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolDrawRequest",
            value: QueryPoolDrawRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPrizeResponse() {
    return {
        prize: Prize.fromPartial({})
    };
}
export const QueryPrizeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.prize !== undefined) {
            Prize.encode(message.prize, writer.uint32(10).fork()).ldelim();
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
                    message.prize = Prize.decode(reader, reader.uint32());
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
        message.prize = object.prize !== undefined && object.prize !== null ? Prize.fromPartial(object.prize) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            prize: object?.prize ? Prize.fromAmino(object.prize) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.prize = message.prize ? Prize.toAmino(message.prize) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPrizeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPrizeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPrizeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPrizeResponse",
            value: QueryPrizeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPrizesResponse() {
    return {
        prizes: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryPrizesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.prizes) {
            Prize.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.prizes.push(Prize.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPrizesResponse();
        message.prizes = object.prizes?.map(e => Prize.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            prizes: Array.isArray(object?.prizes) ? object.prizes.map((e) => Prize.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.prizes) {
            obj.prizes = message.prizes.map(e => e ? Prize.toAmino(e) : undefined);
        }
        else {
            obj.prizes = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPrizesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPrizesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPrizesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPrizesResponse",
            value: QueryPrizesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolDrawPrizeRequest() {
    return {
        poolId: Long.UZERO,
        drawId: Long.UZERO,
        prizeId: Long.UZERO
    };
}
export const QueryPoolDrawPrizeRequest = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? Long.fromValue(object.prizeId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            drawId: Long.fromString(object.draw_id),
            prizeId: Long.fromString(object.prize_id)
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
        return QueryPoolDrawPrizeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolDrawPrizeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolDrawPrizeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolDrawPrizeRequest",
            value: QueryPoolDrawPrizeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPrizesRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryPrizesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPrizesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPrizesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPrizesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPrizesRequest",
            value: QueryPrizesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolPrizesRequest() {
    return {
        poolId: Long.UZERO,
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryPoolPrizesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolPrizesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolPrizesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolPrizesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolPrizesRequest",
            value: QueryPoolPrizesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolDrawPrizesRequest() {
    return {
        poolId: Long.UZERO,
        drawId: Long.UZERO,
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryPoolDrawPrizesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            drawId: Long.fromString(object.draw_id),
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolDrawPrizesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolDrawPrizesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolDrawPrizesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolDrawPrizesRequest",
            value: QueryPoolDrawPrizesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountPrizesRequest() {
    return {
        winnerAddress: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAccountPrizesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.winnerAddress !== "") {
            writer.uint32(10).string(message.winnerAddress);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            winnerAddress: object.winner_address,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.winner_address = message.winnerAddress;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountPrizesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAccountPrizesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountPrizesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryAccountPrizesRequest",
            value: QueryAccountPrizesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountPoolPrizesRequest() {
    return {
        winnerAddress: "",
        poolId: Long.UZERO,
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAccountPoolPrizesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.winnerAddress !== "") {
            writer.uint32(10).string(message.winnerAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            winnerAddress: object.winner_address,
            poolId: Long.fromString(object.pool_id),
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.winner_address = message.winnerAddress;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountPoolPrizesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAccountPoolPrizesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountPoolPrizesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryAccountPoolPrizesRequest",
            value: QueryAccountPoolPrizesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountPoolDrawPrizesRequest() {
    return {
        winnerAddress: "",
        poolId: Long.UZERO,
        drawId: Long.UZERO,
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAccountPoolDrawPrizesRequest = {
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
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            winnerAddress: object.winner_address,
            poolId: Long.fromString(object.pool_id),
            drawId: Long.fromString(object.draw_id),
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.winner_address = message.winnerAddress;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.draw_id = message.drawId ? message.drawId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountPoolDrawPrizesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAccountPoolDrawPrizesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountPoolDrawPrizesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryAccountPoolDrawPrizesRequest",
            value: QueryAccountPoolDrawPrizesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryWithdrawalResponse() {
    return {
        withdrawal: Withdrawal.fromPartial({})
    };
}
export const QueryWithdrawalResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.withdrawal !== undefined) {
            Withdrawal.encode(message.withdrawal, writer.uint32(10).fork()).ldelim();
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
                    message.withdrawal = Withdrawal.decode(reader, reader.uint32());
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
        message.withdrawal = object.withdrawal !== undefined && object.withdrawal !== null ? Withdrawal.fromPartial(object.withdrawal) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            withdrawal: object?.withdrawal ? Withdrawal.fromAmino(object.withdrawal) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.withdrawal = message.withdrawal ? Withdrawal.toAmino(message.withdrawal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryWithdrawalResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryWithdrawalResponse.decode(message.value);
    },
    toProto(message) {
        return QueryWithdrawalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryWithdrawalResponse",
            value: QueryWithdrawalResponse.encode(message).finish()
        };
    }
};
function createBaseQueryWithdrawalsResponse() {
    return {
        withdrawals: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryWithdrawalsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.withdrawals) {
            Withdrawal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.withdrawals.push(Withdrawal.decode(reader, reader.uint32()));
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
        const message = createBaseQueryWithdrawalsResponse();
        message.withdrawals = object.withdrawals?.map(e => Withdrawal.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e) => Withdrawal.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.withdrawals) {
            obj.withdrawals = message.withdrawals.map(e => e ? Withdrawal.toAmino(e) : undefined);
        }
        else {
            obj.withdrawals = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryWithdrawalsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryWithdrawalsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryWithdrawalsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryWithdrawalsResponse",
            value: QueryWithdrawalsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolWithdrawalRequest() {
    return {
        poolId: Long.UZERO,
        withdrawalId: Long.UZERO
    };
}
export const QueryPoolWithdrawalRequest = {
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            withdrawalId: Long.fromString(object.withdrawal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.withdrawal_id = message.withdrawalId ? message.withdrawalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolWithdrawalRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolWithdrawalRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolWithdrawalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolWithdrawalRequest",
            value: QueryPoolWithdrawalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryWithdrawalsRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryWithdrawalsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryWithdrawalsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryWithdrawalsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryWithdrawalsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryWithdrawalsRequest",
            value: QueryWithdrawalsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolWithdrawalsRequest() {
    return {
        poolId: Long.UZERO,
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryPoolWithdrawalsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            poolId: Long.fromString(object.pool_id),
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolWithdrawalsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolWithdrawalsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolWithdrawalsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryPoolWithdrawalsRequest",
            value: QueryPoolWithdrawalsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountWithdrawalsRequest() {
    return {
        depositorAddress: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAccountWithdrawalsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositorAddress !== "") {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            depositorAddress: object.depositor_address,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.depositor_address = message.depositorAddress;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountWithdrawalsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAccountWithdrawalsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountWithdrawalsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryAccountWithdrawalsRequest",
            value: QueryAccountWithdrawalsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountPoolWithdrawalsRequest() {
    return {
        depositorAddress: "",
        poolId: Long.UZERO,
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAccountPoolWithdrawalsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositorAddress !== "") {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            depositorAddress: object.depositor_address,
            poolId: Long.fromString(object.pool_id),
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.depositor_address = message.depositorAddress;
        obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountPoolWithdrawalsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAccountPoolWithdrawalsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountPoolWithdrawalsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.millions.QueryAccountPoolWithdrawalsRequest",
            value: QueryAccountPoolWithdrawalsRequest.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map