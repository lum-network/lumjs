import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BeamData, beamStateFromJSON } from "./beam";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseMsgOpenBeam() {
    return {
        id: "",
        creatorAddress: "",
        secret: "",
        amount: undefined,
        schema: "",
        data: undefined,
        claimAddress: "",
        claimExpiresAtBlock: 0,
        closesAtBlock: 0
    };
}
export const MsgOpenBeam = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.creatorAddress !== "") {
            writer.uint32(18).string(message.creatorAddress);
        }
        if (message.secret !== "") {
            writer.uint32(26).string(message.secret);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        if (message.schema !== "") {
            writer.uint32(42).string(message.schema);
        }
        if (message.data !== undefined) {
            BeamData.encode(message.data, writer.uint32(50).fork()).ldelim();
        }
        if (message.claimAddress !== "") {
            writer.uint32(58).string(message.claimAddress);
        }
        if (message.claimExpiresAtBlock !== 0) {
            writer.uint32(64).int32(message.claimExpiresAtBlock);
        }
        if (message.closesAtBlock !== 0) {
            writer.uint32(72).int32(message.closesAtBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgOpenBeam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.creatorAddress = reader.string();
                    break;
                case 3:
                    message.secret = reader.string();
                    break;
                case 4:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.schema = reader.string();
                    break;
                case 6:
                    message.data = BeamData.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.claimAddress = reader.string();
                    break;
                case 8:
                    message.claimExpiresAtBlock = reader.int32();
                    break;
                case 9:
                    message.closesAtBlock = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgOpenBeam();
        message.id = object.id ?? "";
        message.creatorAddress = object.creatorAddress ?? "";
        message.secret = object.secret ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.schema = object.schema ?? "";
        message.data = object.data !== undefined && object.data !== null ? BeamData.fromPartial(object.data) : undefined;
        message.claimAddress = object.claimAddress ?? "";
        message.claimExpiresAtBlock = object.claimExpiresAtBlock ?? 0;
        message.closesAtBlock = object.closesAtBlock ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            creatorAddress: object.creator_address,
            secret: object.secret,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
            schema: object.schema,
            data: object?.data ? BeamData.fromAmino(object.data) : undefined,
            claimAddress: object.claim_address,
            claimExpiresAtBlock: object.claim_expires_at_block,
            closesAtBlock: object.closes_at_block
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.creator_address = message.creatorAddress;
        obj.secret = message.secret;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.schema = message.schema;
        obj.data = message.data ? BeamData.toAmino(message.data) : undefined;
        obj.claim_address = message.claimAddress;
        obj.claim_expires_at_block = message.claimExpiresAtBlock;
        obj.closes_at_block = message.closesAtBlock;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgOpenBeam.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgOpenBeam.decode(message.value);
    },
    toProto(message) {
        return MsgOpenBeam.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.MsgOpenBeam",
            value: MsgOpenBeam.encode(message).finish()
        };
    }
};
function createBaseMsgOpenBeamResponse() {
    return {};
}
export const MsgOpenBeamResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgOpenBeamResponse();
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
        const message = createBaseMsgOpenBeamResponse();
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
        return MsgOpenBeamResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgOpenBeamResponse.decode(message.value);
    },
    toProto(message) {
        return MsgOpenBeamResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.MsgOpenBeamResponse",
            value: MsgOpenBeamResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateBeam() {
    return {
        id: "",
        updaterAddress: "",
        amount: undefined,
        status: 0,
        cancelReason: "",
        hideContent: false,
        data: undefined,
        claimAddress: "",
        claimExpiresAtBlock: 0,
        closesAtBlock: 0
    };
}
export const MsgUpdateBeam = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.updaterAddress !== "") {
            writer.uint32(18).string(message.updaterAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.cancelReason !== "") {
            writer.uint32(42).string(message.cancelReason);
        }
        if (message.hideContent === true) {
            writer.uint32(48).bool(message.hideContent);
        }
        if (message.data !== undefined) {
            BeamData.encode(message.data, writer.uint32(58).fork()).ldelim();
        }
        if (message.claimAddress !== "") {
            writer.uint32(66).string(message.claimAddress);
        }
        if (message.claimExpiresAtBlock !== 0) {
            writer.uint32(72).int32(message.claimExpiresAtBlock);
        }
        if (message.closesAtBlock !== 0) {
            writer.uint32(80).int32(message.closesAtBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateBeam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.updaterAddress = reader.string();
                    break;
                case 3:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.cancelReason = reader.string();
                    break;
                case 6:
                    message.hideContent = reader.bool();
                    break;
                case 7:
                    message.data = BeamData.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.claimAddress = reader.string();
                    break;
                case 9:
                    message.claimExpiresAtBlock = reader.int32();
                    break;
                case 10:
                    message.closesAtBlock = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateBeam();
        message.id = object.id ?? "";
        message.updaterAddress = object.updaterAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.status = object.status ?? 0;
        message.cancelReason = object.cancelReason ?? "";
        message.hideContent = object.hideContent ?? false;
        message.data = object.data !== undefined && object.data !== null ? BeamData.fromPartial(object.data) : undefined;
        message.claimAddress = object.claimAddress ?? "";
        message.claimExpiresAtBlock = object.claimExpiresAtBlock ?? 0;
        message.closesAtBlock = object.closesAtBlock ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            updaterAddress: object.updater_address,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
            status: isSet(object.status) ? beamStateFromJSON(object.status) : -1,
            cancelReason: object.cancel_reason,
            hideContent: object.hide_content,
            data: object?.data ? BeamData.fromAmino(object.data) : undefined,
            claimAddress: object.claim_address,
            claimExpiresAtBlock: object.claim_expires_at_block,
            closesAtBlock: object.closes_at_block
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.updater_address = message.updaterAddress;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.status = message.status;
        obj.cancel_reason = message.cancelReason;
        obj.hide_content = message.hideContent;
        obj.data = message.data ? BeamData.toAmino(message.data) : undefined;
        obj.claim_address = message.claimAddress;
        obj.claim_expires_at_block = message.claimExpiresAtBlock;
        obj.closes_at_block = message.closesAtBlock;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateBeam.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateBeam.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateBeam.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.MsgUpdateBeam",
            value: MsgUpdateBeam.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateBeamResponse() {
    return {};
}
export const MsgUpdateBeamResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateBeamResponse();
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
        const message = createBaseMsgUpdateBeamResponse();
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
        return MsgUpdateBeamResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateBeamResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateBeamResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.MsgUpdateBeamResponse",
            value: MsgUpdateBeamResponse.encode(message).finish()
        };
    }
};
function createBaseMsgClaimBeam() {
    return {
        id: "",
        claimerAddress: "",
        secret: ""
    };
}
export const MsgClaimBeam = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.claimerAddress !== "") {
            writer.uint32(18).string(message.claimerAddress);
        }
        if (message.secret !== "") {
            writer.uint32(26).string(message.secret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimBeam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.claimerAddress = reader.string();
                    break;
                case 3:
                    message.secret = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgClaimBeam();
        message.id = object.id ?? "";
        message.claimerAddress = object.claimerAddress ?? "";
        message.secret = object.secret ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            claimerAddress: object.claimer_address,
            secret: object.secret
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.claimer_address = message.claimerAddress;
        obj.secret = message.secret;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClaimBeam.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgClaimBeam.decode(message.value);
    },
    toProto(message) {
        return MsgClaimBeam.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.MsgClaimBeam",
            value: MsgClaimBeam.encode(message).finish()
        };
    }
};
function createBaseMsgClaimBeamResponse() {
    return {};
}
export const MsgClaimBeamResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimBeamResponse();
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
        const message = createBaseMsgClaimBeamResponse();
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
        return MsgClaimBeamResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgClaimBeamResponse.decode(message.value);
    },
    toProto(message) {
        return MsgClaimBeamResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.MsgClaimBeamResponse",
            value: MsgClaimBeamResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map