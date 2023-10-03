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
exports.EventLeaveGroup = exports.EventExec = exports.EventVote = exports.EventWithdrawProposal = exports.EventSubmitProposal = exports.EventUpdateGroupPolicy = exports.EventCreateGroupPolicy = exports.EventUpdateGroup = exports.EventCreateGroup = void 0;
const types_1 = require("./types");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseEventCreateGroup() {
    return {
        groupId: helpers_1.Long.UZERO
    };
}
exports.EventCreateGroup = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateGroup();
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
        const message = createBaseEventCreateGroup();
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
        return exports.EventCreateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventCreateGroup",
            value: exports.EventCreateGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventCreateGroup.decode(message.value);
    },
    toProto(message) {
        return exports.EventCreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventCreateGroup",
            value: exports.EventCreateGroup.encode(message).finish()
        };
    }
};
function createBaseEventUpdateGroup() {
    return {
        groupId: helpers_1.Long.UZERO
    };
}
exports.EventUpdateGroup = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateGroup();
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
        const message = createBaseEventUpdateGroup();
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
        return exports.EventUpdateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventUpdateGroup",
            value: exports.EventUpdateGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventUpdateGroup.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventUpdateGroup",
            value: exports.EventUpdateGroup.encode(message).finish()
        };
    }
};
function createBaseEventCreateGroupPolicy() {
    return {
        address: ""
    };
}
exports.EventCreateGroupPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateGroupPolicy();
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
        const message = createBaseEventCreateGroupPolicy();
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
        return exports.EventCreateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventCreateGroupPolicy",
            value: exports.EventCreateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventCreateGroupPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.EventCreateGroupPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
            value: exports.EventCreateGroupPolicy.encode(message).finish()
        };
    }
};
function createBaseEventUpdateGroupPolicy() {
    return {
        address: ""
    };
}
exports.EventUpdateGroupPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateGroupPolicy();
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
        const message = createBaseEventUpdateGroupPolicy();
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
        return exports.EventUpdateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventUpdateGroupPolicy",
            value: exports.EventUpdateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventUpdateGroupPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateGroupPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
            value: exports.EventUpdateGroupPolicy.encode(message).finish()
        };
    }
};
function createBaseEventSubmitProposal() {
    return {
        proposalId: helpers_1.Long.UZERO
    };
}
exports.EventSubmitProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSubmitProposal();
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
        const message = createBaseEventSubmitProposal();
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
        return exports.EventSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventSubmitProposal",
            value: exports.EventSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return exports.EventSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventSubmitProposal",
            value: exports.EventSubmitProposal.encode(message).finish()
        };
    }
};
function createBaseEventWithdrawProposal() {
    return {
        proposalId: helpers_1.Long.UZERO
    };
}
exports.EventWithdrawProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawProposal();
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
        const message = createBaseEventWithdrawProposal();
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
        return exports.EventWithdrawProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventWithdrawProposal",
            value: exports.EventWithdrawProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventWithdrawProposal.decode(message.value);
    },
    toProto(message) {
        return exports.EventWithdrawProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
            value: exports.EventWithdrawProposal.encode(message).finish()
        };
    }
};
function createBaseEventVote() {
    return {
        proposalId: helpers_1.Long.UZERO
    };
}
exports.EventVote = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventVote();
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
        const message = createBaseEventVote();
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
        return exports.EventVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventVote",
            value: exports.EventVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventVote.decode(message.value);
    },
    toProto(message) {
        return exports.EventVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventVote",
            value: exports.EventVote.encode(message).finish()
        };
    }
};
function createBaseEventExec() {
    return {
        proposalId: helpers_1.Long.UZERO,
        result: 0
    };
}
exports.EventExec = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventExec();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO;
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: helpers_1.Long.fromString(object.proposal_id),
            result: (0, helpers_1.isSet)(object.result) ? (0, types_1.proposalExecutorResultFromJSON)(object.result) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.result = message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventExec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventExec",
            value: exports.EventExec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventExec.decode(message.value);
    },
    toProto(message) {
        return exports.EventExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventExec",
            value: exports.EventExec.encode(message).finish()
        };
    }
};
function createBaseEventLeaveGroup() {
    return {
        groupId: helpers_1.Long.UZERO,
        address: ""
    };
}
exports.EventLeaveGroup = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventLeaveGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
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
        const message = createBaseEventLeaveGroup();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? helpers_1.Long.fromValue(object.groupId) : helpers_1.Long.UZERO;
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            groupId: helpers_1.Long.fromString(object.group_id),
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId ? message.groupId.toString() : undefined;
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventLeaveGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventLeaveGroup",
            value: exports.EventLeaveGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventLeaveGroup.decode(message.value);
    },
    toProto(message) {
        return exports.EventLeaveGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventLeaveGroup",
            value: exports.EventLeaveGroup.encode(message).finish()
        };
    }
};
//# sourceMappingURL=events.js.map