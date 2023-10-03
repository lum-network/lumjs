import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { BlockID } from "../../../../tendermint/types/types";
import { Block } from "../../../../tendermint/types/block";
import { NodeInfo } from "../../../../tendermint/p2p/types";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseGetValidatorSetByHeightRequest() {
    return {
        height: Long.ZERO,
        pagination: PageRequest.fromPartial({})
    };
}
export const GetValidatorSetByHeightRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorSetByHeightRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
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
        const message = createBaseGetValidatorSetByHeightRequest();
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            height: Long.fromString(object.height),
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetValidatorSetByHeightRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetValidatorSetByHeightRequest",
            value: GetValidatorSetByHeightRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetValidatorSetByHeightRequest.decode(message.value);
    },
    toProto(message) {
        return GetValidatorSetByHeightRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
            value: GetValidatorSetByHeightRequest.encode(message).finish()
        };
    }
};
function createBaseGetValidatorSetByHeightResponse() {
    return {
        blockHeight: Long.ZERO,
        validators: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const GetValidatorSetByHeightResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.blockHeight.isZero()) {
            writer.uint32(8).int64(message.blockHeight);
        }
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorSetByHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.int64();
                    break;
                case 2:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
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
        const message = createBaseGetValidatorSetByHeightResponse();
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
        message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            blockHeight: Long.fromString(object.block_height),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetValidatorSetByHeightResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetValidatorSetByHeightResponse",
            value: GetValidatorSetByHeightResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetValidatorSetByHeightResponse.decode(message.value);
    },
    toProto(message) {
        return GetValidatorSetByHeightResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
            value: GetValidatorSetByHeightResponse.encode(message).finish()
        };
    }
};
function createBaseGetLatestValidatorSetRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const GetLatestValidatorSetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestValidatorSetRequest();
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
        const message = createBaseGetLatestValidatorSetRequest();
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
        return GetLatestValidatorSetRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestValidatorSetRequest",
            value: GetLatestValidatorSetRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetLatestValidatorSetRequest.decode(message.value);
    },
    toProto(message) {
        return GetLatestValidatorSetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
            value: GetLatestValidatorSetRequest.encode(message).finish()
        };
    }
};
function createBaseGetLatestValidatorSetResponse() {
    return {
        blockHeight: Long.ZERO,
        validators: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const GetLatestValidatorSetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.blockHeight.isZero()) {
            writer.uint32(8).int64(message.blockHeight);
        }
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestValidatorSetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.int64();
                    break;
                case 2:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
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
        const message = createBaseGetLatestValidatorSetResponse();
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
        message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            blockHeight: Long.fromString(object.block_height),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetLatestValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestValidatorSetResponse",
            value: GetLatestValidatorSetResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetLatestValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return GetLatestValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
            value: GetLatestValidatorSetResponse.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        address: "",
        pubKey: Any.fromPartial({}),
        votingPower: Long.ZERO,
        proposerPriority: Long.ZERO
    };
}
export const Validator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (!message.votingPower.isZero()) {
            writer.uint32(24).int64(message.votingPower);
        }
        if (!message.proposerPriority.isZero()) {
            writer.uint32(32).int64(message.proposerPriority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pubKey = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.votingPower = reader.int64();
                    break;
                case 4:
                    message.proposerPriority = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? "";
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
        message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? Long.fromValue(object.votingPower) : Long.ZERO;
        message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? Long.fromValue(object.proposerPriority) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pubKey: object?.pub_key ? Any.fromAmino(object.pub_key) : undefined,
            votingPower: Long.fromString(object.voting_power),
            proposerPriority: Long.fromString(object.proposer_priority)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : undefined;
        obj.voting_power = message.votingPower ? message.votingPower.toString() : undefined;
        obj.proposer_priority = message.proposerPriority ? message.proposerPriority.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Validator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validator",
            value: Validator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Validator.decode(message.value);
    },
    toProto(message) {
        return Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
            value: Validator.encode(message).finish()
        };
    }
};
function createBaseGetBlockByHeightRequest() {
    return {
        height: Long.ZERO
    };
}
export const GetBlockByHeightRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockByHeightRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightRequest();
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            height: Long.fromString(object.height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetBlockByHeightRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockByHeightRequest",
            value: GetBlockByHeightRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetBlockByHeightRequest.decode(message.value);
    },
    toProto(message) {
        return GetBlockByHeightRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
            value: GetBlockByHeightRequest.encode(message).finish()
        };
    }
};
function createBaseGetBlockByHeightResponse() {
    return {
        blockId: BlockID.fromPartial({}),
        block: Block.fromPartial({})
    };
}
export const GetBlockByHeightResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockByHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = Block.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightResponse();
        message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
        message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            blockId: object?.block_id ? BlockID.fromAmino(object.block_id) : undefined,
            block: object?.block ? Block.fromAmino(object.block) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
        obj.block = message.block ? Block.toAmino(message.block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetBlockByHeightResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockByHeightResponse",
            value: GetBlockByHeightResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetBlockByHeightResponse.decode(message.value);
    },
    toProto(message) {
        return GetBlockByHeightResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
            value: GetBlockByHeightResponse.encode(message).finish()
        };
    }
};
function createBaseGetLatestBlockRequest() {
    return {};
}
export const GetLatestBlockRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestBlockRequest();
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
        const message = createBaseGetLatestBlockRequest();
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
        return GetLatestBlockRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestBlockRequest",
            value: GetLatestBlockRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetLatestBlockRequest.decode(message.value);
    },
    toProto(message) {
        return GetLatestBlockRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
            value: GetLatestBlockRequest.encode(message).finish()
        };
    }
};
function createBaseGetLatestBlockResponse() {
    return {
        blockId: BlockID.fromPartial({}),
        block: Block.fromPartial({})
    };
}
export const GetLatestBlockResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = Block.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetLatestBlockResponse();
        message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
        message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            blockId: object?.block_id ? BlockID.fromAmino(object.block_id) : undefined,
            block: object?.block ? Block.fromAmino(object.block) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
        obj.block = message.block ? Block.toAmino(message.block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetLatestBlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestBlockResponse",
            value: GetLatestBlockResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetLatestBlockResponse.decode(message.value);
    },
    toProto(message) {
        return GetLatestBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
            value: GetLatestBlockResponse.encode(message).finish()
        };
    }
};
function createBaseGetSyncingRequest() {
    return {};
}
export const GetSyncingRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSyncingRequest();
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
        const message = createBaseGetSyncingRequest();
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
        return GetSyncingRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetSyncingRequest",
            value: GetSyncingRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetSyncingRequest.decode(message.value);
    },
    toProto(message) {
        return GetSyncingRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
            value: GetSyncingRequest.encode(message).finish()
        };
    }
};
function createBaseGetSyncingResponse() {
    return {
        syncing: false
    };
}
export const GetSyncingResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.syncing === true) {
            writer.uint32(8).bool(message.syncing);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSyncingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.syncing = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetSyncingResponse();
        message.syncing = object.syncing ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            syncing: object.syncing
        };
    },
    toAmino(message) {
        const obj = {};
        obj.syncing = message.syncing;
        return obj;
    },
    fromAminoMsg(object) {
        return GetSyncingResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetSyncingResponse",
            value: GetSyncingResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetSyncingResponse.decode(message.value);
    },
    toProto(message) {
        return GetSyncingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
            value: GetSyncingResponse.encode(message).finish()
        };
    }
};
function createBaseGetNodeInfoRequest() {
    return {};
}
export const GetNodeInfoRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNodeInfoRequest();
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
        const message = createBaseGetNodeInfoRequest();
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
        return GetNodeInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetNodeInfoRequest",
            value: GetNodeInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetNodeInfoRequest.decode(message.value);
    },
    toProto(message) {
        return GetNodeInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
            value: GetNodeInfoRequest.encode(message).finish()
        };
    }
};
function createBaseGetNodeInfoResponse() {
    return {
        nodeInfo: NodeInfo.fromPartial({}),
        applicationVersion: VersionInfo.fromPartial({})
    };
}
export const GetNodeInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeInfo !== undefined) {
            NodeInfo.encode(message.nodeInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.applicationVersion !== undefined) {
            VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNodeInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeInfo = NodeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.applicationVersion = VersionInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetNodeInfoResponse();
        message.nodeInfo = object.nodeInfo !== undefined && object.nodeInfo !== null ? NodeInfo.fromPartial(object.nodeInfo) : undefined;
        message.applicationVersion = object.applicationVersion !== undefined && object.applicationVersion !== null ? VersionInfo.fromPartial(object.applicationVersion) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            nodeInfo: object?.node_info ? NodeInfo.fromAmino(object.node_info) : undefined,
            applicationVersion: object?.application_version ? VersionInfo.fromAmino(object.application_version) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.node_info = message.nodeInfo ? NodeInfo.toAmino(message.nodeInfo) : undefined;
        obj.application_version = message.applicationVersion ? VersionInfo.toAmino(message.applicationVersion) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetNodeInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetNodeInfoResponse",
            value: GetNodeInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetNodeInfoResponse.decode(message.value);
    },
    toProto(message) {
        return GetNodeInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
            value: GetNodeInfoResponse.encode(message).finish()
        };
    }
};
function createBaseVersionInfo() {
    return {
        name: "",
        appName: "",
        version: "",
        gitCommit: "",
        buildTags: "",
        goVersion: "",
        buildDeps: [],
        cosmosSdkVersion: ""
    };
}
export const VersionInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.appName !== "") {
            writer.uint32(18).string(message.appName);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        if (message.gitCommit !== "") {
            writer.uint32(34).string(message.gitCommit);
        }
        if (message.buildTags !== "") {
            writer.uint32(42).string(message.buildTags);
        }
        if (message.goVersion !== "") {
            writer.uint32(50).string(message.goVersion);
        }
        for (const v of message.buildDeps) {
            Module.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.cosmosSdkVersion !== "") {
            writer.uint32(66).string(message.cosmosSdkVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.appName = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.gitCommit = reader.string();
                    break;
                case 5:
                    message.buildTags = reader.string();
                    break;
                case 6:
                    message.goVersion = reader.string();
                    break;
                case 7:
                    message.buildDeps.push(Module.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.cosmosSdkVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVersionInfo();
        message.name = object.name ?? "";
        message.appName = object.appName ?? "";
        message.version = object.version ?? "";
        message.gitCommit = object.gitCommit ?? "";
        message.buildTags = object.buildTags ?? "";
        message.goVersion = object.goVersion ?? "";
        message.buildDeps = object.buildDeps?.map(e => Module.fromPartial(e)) || [];
        message.cosmosSdkVersion = object.cosmosSdkVersion ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            appName: object.app_name,
            version: object.version,
            gitCommit: object.git_commit,
            buildTags: object.build_tags,
            goVersion: object.go_version,
            buildDeps: Array.isArray(object?.build_deps) ? object.build_deps.map((e) => Module.fromAmino(e)) : [],
            cosmosSdkVersion: object.cosmos_sdk_version
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.app_name = message.appName;
        obj.version = message.version;
        obj.git_commit = message.gitCommit;
        obj.build_tags = message.buildTags;
        obj.go_version = message.goVersion;
        if (message.buildDeps) {
            obj.build_deps = message.buildDeps.map(e => e ? Module.toAmino(e) : undefined);
        }
        else {
            obj.build_deps = [];
        }
        obj.cosmos_sdk_version = message.cosmosSdkVersion;
        return obj;
    },
    fromAminoMsg(object) {
        return VersionInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/VersionInfo",
            value: VersionInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return VersionInfo.decode(message.value);
    },
    toProto(message) {
        return VersionInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
            value: VersionInfo.encode(message).finish()
        };
    }
};
function createBaseModule() {
    return {
        path: "",
        version: "",
        sum: ""
    };
}
export const Module = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.sum !== "") {
            writer.uint32(26).string(message.sum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.sum = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.path = object.path ?? "";
        message.version = object.version ?? "";
        message.sum = object.sum ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            version: object.version,
            sum: object.sum
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.version = message.version;
        obj.sum = message.sum;
        return obj;
    },
    fromAminoMsg(object) {
        return Module.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Module",
            value: Module.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Module.decode(message.value);
    },
    toProto(message) {
        return Module.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
            value: Module.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map