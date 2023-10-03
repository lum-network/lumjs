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
exports.MsgLeaveGroupResponse = exports.MsgLeaveGroup = exports.MsgExecResponse = exports.MsgExec = exports.MsgVoteResponse = exports.MsgVote = exports.MsgWithdrawProposalResponse = exports.MsgWithdrawProposal = exports.MsgSubmitProposalResponse = exports.MsgSubmitProposal = exports.MsgUpdateGroupPolicyMetadataResponse = exports.MsgUpdateGroupPolicyMetadata = exports.MsgUpdateGroupPolicyDecisionPolicyResponse = exports.MsgUpdateGroupPolicyDecisionPolicy = exports.MsgUpdateGroupPolicyAdminResponse = exports.MsgCreateGroupWithPolicyResponse = exports.MsgCreateGroupWithPolicy = exports.MsgUpdateGroupPolicyAdmin = exports.MsgCreateGroupPolicyResponse = exports.MsgCreateGroupPolicy = exports.MsgUpdateGroupMetadataResponse = exports.MsgUpdateGroupMetadata = exports.MsgUpdateGroupAdminResponse = exports.MsgUpdateGroupAdmin = exports.MsgUpdateGroupMembersResponse = exports.MsgUpdateGroupMembers = exports.MsgCreateGroupResponse = exports.MsgCreateGroup = exports.execToJSON = exports.execFromJSON = exports.ExecAmino = exports.ExecSDKType = exports.Exec = void 0;
const types_1 = require("./types");
const any_1 = require("../../../google/protobuf/any");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
/** Exec defines modes of execution of a proposal on creation or on new vote. */
var Exec;
(function (Exec) {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    Exec[Exec["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    Exec[Exec["EXEC_TRY"] = 1] = "EXEC_TRY";
    Exec[Exec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Exec || (exports.Exec = Exec = {}));
exports.ExecSDKType = Exec;
exports.ExecAmino = Exec;
function execFromJSON(object) {
    switch (object) {
        case 0:
        case "EXEC_UNSPECIFIED":
            return Exec.EXEC_UNSPECIFIED;
        case 1:
        case "EXEC_TRY":
            return Exec.EXEC_TRY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Exec.UNRECOGNIZED;
    }
}
exports.execFromJSON = execFromJSON;
function execToJSON(object) {
    switch (object) {
        case Exec.EXEC_UNSPECIFIED:
            return "EXEC_UNSPECIFIED";
        case Exec.EXEC_TRY:
            return "EXEC_TRY";
        case Exec.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.execToJSON = execToJSON;
function createBaseMsgCreateGroup() {
    return {
        admin: "",
        members: [],
        metadata: ""
    };
}
exports.MsgCreateGroup = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            types_1.Member.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(types_1.Member.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroup();
        message.admin = object.admin ?? "";
        message.members = object.members?.map(e => types_1.Member.fromPartial(e)) || [];
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            members: Array.isArray(object?.members) ? object.members.map((e) => types_1.Member.fromAmino(e)) : [],
            metadata: object.metadata
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        if (message.members) {
            obj.members = message.members.map(e => e ? types_1.Member.toAmino(e) : undefined);
        }
        else {
            obj.members = [];
        }
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroup",
            value: exports.MsgCreateGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroup.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroup",
            value: exports.MsgCreateGroup.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupResponse() {
    return {
        groupId: helpers_1.Long.UZERO
    };
}
exports.MsgCreateGroupResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupResponse();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? helpers_1.Long.fromValue(object.groupId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            groupId: helpers_1.Long.fromString(object.group_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupResponse",
            value: exports.MsgCreateGroupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
            value: exports.MsgCreateGroupResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupMembers() {
    return {
        admin: "",
        groupId: helpers_1.Long.UZERO,
        memberUpdates: []
    };
}
exports.MsgUpdateGroupMembers = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        for (const v of message.memberUpdates) {
            types_1.Member.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.memberUpdates.push(types_1.Member.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupMembers();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? helpers_1.Long.fromValue(object.groupId) : helpers_1.Long.UZERO;
        message.memberUpdates = object.memberUpdates?.map(e => types_1.Member.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            groupId: helpers_1.Long.fromString(object.group_id),
            memberUpdates: Array.isArray(object?.member_updates) ? object.member_updates.map((e) => types_1.Member.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        if (message.memberUpdates) {
            obj.member_updates = message.memberUpdates.map(e => e ? types_1.Member.toAmino(e) : undefined);
        }
        else {
            obj.member_updates = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupMembers.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMembers",
            value: exports.MsgUpdateGroupMembers.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupMembers.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupMembers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
            value: exports.MsgUpdateGroupMembers.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupMembersResponse() {
    return {};
}
exports.MsgUpdateGroupMembersResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembersResponse();
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
        const message = createBaseMsgUpdateGroupMembersResponse();
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
        return exports.MsgUpdateGroupMembersResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMembersResponse",
            value: exports.MsgUpdateGroupMembersResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupMembersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupMembersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
            value: exports.MsgUpdateGroupMembersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAdmin() {
    return {
        admin: "",
        groupId: helpers_1.Long.UZERO,
        newAdmin: ""
    };
}
exports.MsgUpdateGroupAdmin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupAdmin();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? helpers_1.Long.fromValue(object.groupId) : helpers_1.Long.UZERO;
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            groupId: helpers_1.Long.fromString(object.group_id),
            newAdmin: object.new_admin
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        obj.new_admin = message.newAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupAdmin",
            value: exports.MsgUpdateGroupAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
            value: exports.MsgUpdateGroupAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAdminResponse() {
    return {};
}
exports.MsgUpdateGroupAdminResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdminResponse();
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
        const message = createBaseMsgUpdateGroupAdminResponse();
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
        return exports.MsgUpdateGroupAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupAdminResponse",
            value: exports.MsgUpdateGroupAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
            value: exports.MsgUpdateGroupAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupMetadata() {
    return {
        admin: "",
        groupId: helpers_1.Long.UZERO,
        metadata: ""
    };
}
exports.MsgUpdateGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupMetadata();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? helpers_1.Long.fromValue(object.groupId) : helpers_1.Long.UZERO;
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            groupId: helpers_1.Long.fromString(object.group_id),
            metadata: object.metadata
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMetadata",
            value: exports.MsgUpdateGroupMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
            value: exports.MsgUpdateGroupMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupMetadataResponse() {
    return {};
}
exports.MsgUpdateGroupMetadataResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadataResponse();
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
        const message = createBaseMsgUpdateGroupMetadataResponse();
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
        return exports.MsgUpdateGroupMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMetadataResponse",
            value: exports.MsgUpdateGroupMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
            value: exports.MsgUpdateGroupMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupPolicy() {
    return {
        admin: "",
        groupId: helpers_1.Long.UZERO,
        metadata: "",
        decisionPolicy: any_1.Any.fromPartial({})
    };
}
exports.MsgCreateGroupPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.decisionPolicy !== undefined) {
            any_1.Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.decisionPolicy = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupPolicy();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? helpers_1.Long.fromValue(object.groupId) : helpers_1.Long.UZERO;
        message.metadata = object.metadata ?? "";
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? any_1.Any.fromPartial(object.decisionPolicy) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            groupId: helpers_1.Long.fromString(object.group_id),
            metadata: object.metadata,
            decisionPolicy: object?.decision_policy ? any_1.Any.fromAmino(object.decision_policy) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        obj.metadata = message.metadata;
        obj.decision_policy = message.decisionPolicy ? any_1.Any.toAmino(message.decisionPolicy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupPolicy",
            value: exports.MsgCreateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroupPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroupPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
            value: exports.MsgCreateGroupPolicy.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupPolicyResponse() {
    return {
        address: ""
    };
}
exports.MsgCreateGroupPolicyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupPolicyResponse();
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
        const message = createBaseMsgCreateGroupPolicyResponse();
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
        return exports.MsgCreateGroupPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupPolicyResponse",
            value: exports.MsgCreateGroupPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroupPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroupPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
            value: exports.MsgCreateGroupPolicyResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupPolicyAdmin() {
    return {
        admin: "",
        address: "",
        newAdmin: ""
    };
}
exports.MsgUpdateGroupPolicyAdmin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        message.admin = object.admin ?? "";
        message.address = object.address ?? "";
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            address: object.address,
            newAdmin: object.new_admin
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.address = message.address;
        obj.new_admin = message.newAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupPolicyAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
            value: exports.MsgUpdateGroupPolicyAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupPolicyAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupPolicyAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
            value: exports.MsgUpdateGroupPolicyAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupWithPolicy() {
    return {
        admin: "",
        members: [],
        groupMetadata: "",
        groupPolicyMetadata: "",
        groupPolicyAsAdmin: false,
        decisionPolicy: any_1.Any.fromPartial({})
    };
}
exports.MsgCreateGroupWithPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            types_1.Member.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.groupMetadata !== "") {
            writer.uint32(26).string(message.groupMetadata);
        }
        if (message.groupPolicyMetadata !== "") {
            writer.uint32(34).string(message.groupPolicyMetadata);
        }
        if (message.groupPolicyAsAdmin === true) {
            writer.uint32(40).bool(message.groupPolicyAsAdmin);
        }
        if (message.decisionPolicy !== undefined) {
            any_1.Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupWithPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(types_1.Member.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.groupMetadata = reader.string();
                    break;
                case 4:
                    message.groupPolicyMetadata = reader.string();
                    break;
                case 5:
                    message.groupPolicyAsAdmin = reader.bool();
                    break;
                case 6:
                    message.decisionPolicy = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupWithPolicy();
        message.admin = object.admin ?? "";
        message.members = object.members?.map(e => types_1.Member.fromPartial(e)) || [];
        message.groupMetadata = object.groupMetadata ?? "";
        message.groupPolicyMetadata = object.groupPolicyMetadata ?? "";
        message.groupPolicyAsAdmin = object.groupPolicyAsAdmin ?? false;
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? any_1.Any.fromPartial(object.decisionPolicy) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            members: Array.isArray(object?.members) ? object.members.map((e) => types_1.Member.fromAmino(e)) : [],
            groupMetadata: object.group_metadata,
            groupPolicyMetadata: object.group_policy_metadata,
            groupPolicyAsAdmin: object.group_policy_as_admin,
            decisionPolicy: object?.decision_policy ? any_1.Any.fromAmino(object.decision_policy) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        if (message.members) {
            obj.members = message.members.map(e => e ? types_1.Member.toAmino(e) : undefined);
        }
        else {
            obj.members = [];
        }
        obj.group_metadata = message.groupMetadata;
        obj.group_policy_metadata = message.groupPolicyMetadata;
        obj.group_policy_as_admin = message.groupPolicyAsAdmin;
        obj.decision_policy = message.decisionPolicy ? any_1.Any.toAmino(message.decisionPolicy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroupWithPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupWithPolicy",
            value: exports.MsgCreateGroupWithPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroupWithPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroupWithPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
            value: exports.MsgCreateGroupWithPolicy.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupWithPolicyResponse() {
    return {
        groupId: helpers_1.Long.UZERO,
        groupPolicyAddress: ""
    };
}
exports.MsgCreateGroupWithPolicyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.groupPolicyAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? helpers_1.Long.fromValue(object.groupId) : helpers_1.Long.UZERO;
        message.groupPolicyAddress = object.groupPolicyAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            groupId: helpers_1.Long.fromString(object.group_id),
            groupPolicyAddress: object.group_policy_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        obj.group_policy_address = message.groupPolicyAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroupWithPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupWithPolicyResponse",
            value: exports.MsgCreateGroupWithPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroupWithPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroupWithPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
            value: exports.MsgCreateGroupWithPolicyResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupPolicyAdminResponse() {
    return {};
}
exports.MsgUpdateGroupPolicyAdminResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
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
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
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
        return exports.MsgUpdateGroupPolicyAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse",
            value: exports.MsgUpdateGroupPolicyAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupPolicyAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupPolicyAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
            value: exports.MsgUpdateGroupPolicyAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
    return {
        admin: "",
        address: "",
        decisionPolicy: any_1.Any.fromPartial({})
    };
}
exports.MsgUpdateGroupPolicyDecisionPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.decisionPolicy !== undefined) {
            any_1.Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.decisionPolicy = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        message.admin = object.admin ?? "";
        message.address = object.address ?? "";
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? any_1.Any.fromPartial(object.decisionPolicy) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            address: object.address,
            decisionPolicy: object?.decision_policy ? any_1.Any.fromAmino(object.decision_policy) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.address = message.address;
        obj.decision_policy = message.decisionPolicy ? any_1.Any.toAmino(message.decisionPolicy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupPolicyDecisionPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy",
            value: exports.MsgUpdateGroupPolicyDecisionPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupPolicyDecisionPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
            value: exports.MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
    return {};
}
exports.MsgUpdateGroupPolicyDecisionPolicyResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
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
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
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
        return exports.MsgUpdateGroupPolicyDecisionPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse",
            value: exports.MsgUpdateGroupPolicyDecisionPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupPolicyDecisionPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
            value: exports.MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupPolicyMetadata() {
    return {
        admin: "",
        address: "",
        metadata: ""
    };
}
exports.MsgUpdateGroupPolicyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        message.admin = object.admin ?? "";
        message.address = object.address ?? "";
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            address: object.address,
            metadata: object.metadata
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.address = message.address;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupPolicyMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
            value: exports.MsgUpdateGroupPolicyMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupPolicyMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupPolicyMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
            value: exports.MsgUpdateGroupPolicyMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
    return {};
}
exports.MsgUpdateGroupPolicyMetadataResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
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
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
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
        return exports.MsgUpdateGroupPolicyMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse",
            value: exports.MsgUpdateGroupPolicyMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupPolicyMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupPolicyMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
            value: exports.MsgUpdateGroupPolicyMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitProposal() {
    return {
        address: "",
        proposers: [],
        metadata: "",
        messages: [],
        exec: 0
    };
}
exports.MsgSubmitProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.proposers) {
            writer.uint32(18).string(v);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.proposers.push(reader.string());
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.exec = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposal();
        message.address = object.address ?? "";
        message.proposers = object.proposers?.map(e => e) || [];
        message.metadata = object.metadata ?? "";
        message.messages = object.messages?.map(e => any_1.Any.fromPartial(e)) || [];
        message.exec = object.exec ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            proposers: Array.isArray(object?.proposers) ? object.proposers.map((e) => e) : [],
            metadata: object.metadata,
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromAmino(e)) : [],
            exec: (0, helpers_1.isSet)(object.exec) ? execFromJSON(object.exec) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.proposers) {
            obj.proposers = message.proposers.map(e => e);
        }
        else {
            obj.proposers = [];
        }
        obj.metadata = message.metadata;
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        obj.exec = message.exec;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgSubmitProposal",
            value: exports.MsgSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
            value: exports.MsgSubmitProposal.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitProposalResponse() {
    return {
        proposalId: helpers_1.Long.UZERO
    };
}
exports.MsgSubmitProposalResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposalResponse();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: helpers_1.Long.fromString(object.proposal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitProposalResponse",
            value: exports.MsgSubmitProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
            value: exports.MsgSubmitProposalResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawProposal() {
    return {
        proposalId: helpers_1.Long.UZERO,
        address: ""
    };
}
exports.MsgWithdrawProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
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
        const message = createBaseMsgWithdrawProposal();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO;
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: helpers_1.Long.fromString(object.proposal_id),
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgWithdrawProposal",
            value: exports.MsgWithdrawProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawProposal.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
            value: exports.MsgWithdrawProposal.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawProposalResponse() {
    return {};
}
exports.MsgWithdrawProposalResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawProposalResponse();
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
        const message = createBaseMsgWithdrawProposalResponse();
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
        return exports.MsgWithdrawProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawProposalResponse",
            value: exports.MsgWithdrawProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
            value: exports.MsgWithdrawProposalResponse.encode(message).finish()
        };
    }
};
function createBaseMsgVote() {
    return {
        proposalId: helpers_1.Long.UZERO,
        voter: "",
        option: 0,
        metadata: "",
        exec: 0
    };
}
exports.MsgVote = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = reader.int32();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.exec = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO;
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        message.metadata = object.metadata ?? "";
        message.exec = object.exec ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: helpers_1.Long.fromString(object.proposal_id),
            voter: object.voter,
            option: (0, helpers_1.isSet)(object.option) ? (0, types_1.voteOptionFromJSON)(object.option) : -1,
            metadata: object.metadata,
            exec: (0, helpers_1.isSet)(object.exec) ? execFromJSON(object.exec) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.voter = message.voter;
        obj.option = message.option;
        obj.metadata = message.metadata;
        obj.exec = message.exec;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgVote",
            value: exports.MsgVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVote.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgVote",
            value: exports.MsgVote.encode(message).finish()
        };
    }
};
function createBaseMsgVoteResponse() {
    return {};
}
exports.MsgVoteResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
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
        const message = createBaseMsgVoteResponse();
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
        return exports.MsgVoteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVoteResponse",
            value: exports.MsgVoteResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVoteResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgVoteResponse",
            value: exports.MsgVoteResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExec() {
    return {
        proposalId: helpers_1.Long.UZERO,
        signer: ""
    };
}
exports.MsgExec = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.signer !== "") {
            writer.uint32(18).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExec();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: helpers_1.Long.fromString(object.proposal_id),
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgExec",
            value: exports.MsgExec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExec.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgExec",
            value: exports.MsgExec.encode(message).finish()
        };
    }
};
function createBaseMsgExecResponse() {
    return {};
}
exports.MsgExecResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecResponse();
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
        const message = createBaseMsgExecResponse();
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
        return exports.MsgExecResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgExecResponse",
            value: exports.MsgExecResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExecResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExecResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgExecResponse",
            value: exports.MsgExecResponse.encode(message).finish()
        };
    }
};
function createBaseMsgLeaveGroup() {
    return {
        address: "",
        groupId: helpers_1.Long.UZERO
    };
}
exports.MsgLeaveGroup = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLeaveGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgLeaveGroup();
        message.address = object.address ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? helpers_1.Long.fromValue(object.groupId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            groupId: helpers_1.Long.fromString(object.group_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgLeaveGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgLeaveGroup",
            value: exports.MsgLeaveGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLeaveGroup.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLeaveGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
            value: exports.MsgLeaveGroup.encode(message).finish()
        };
    }
};
function createBaseMsgLeaveGroupResponse() {
    return {};
}
exports.MsgLeaveGroupResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLeaveGroupResponse();
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
        const message = createBaseMsgLeaveGroupResponse();
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
        return exports.MsgLeaveGroupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgLeaveGroupResponse",
            value: exports.MsgLeaveGroupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLeaveGroupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLeaveGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
            value: exports.MsgLeaveGroupResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map