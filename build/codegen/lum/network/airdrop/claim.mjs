import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export var Action;
(function (Action) {
    Action[Action["ACTION_VOTE"] = 0] = "ACTION_VOTE";
    Action[Action["ACTION_DELEGATE_STAKE"] = 1] = "ACTION_DELEGATE_STAKE";
    Action[Action["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Action || (Action = {}));
export const ActionSDKType = Action;
export const ActionAmino = Action;
export function actionFromJSON(object) {
    switch (object) {
        case 0:
        case "ACTION_VOTE":
            return Action.ACTION_VOTE;
        case 1:
        case "ACTION_DELEGATE_STAKE":
            return Action.ACTION_DELEGATE_STAKE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Action.UNRECOGNIZED;
    }
}
export function actionToJSON(object) {
    switch (object) {
        case Action.ACTION_VOTE:
            return "ACTION_VOTE";
        case Action.ACTION_DELEGATE_STAKE:
            return "ACTION_DELEGATE_STAKE";
        case Action.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseClaimRecord() {
    return {
        address: "",
        initialClaimableAmount: [],
        actionCompleted: []
    };
}
export const ClaimRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.initialClaimableAmount) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        writer.uint32(26).fork();
        for (const v of message.actionCompleted) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.initialClaimableAmount.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.actionCompleted.push(reader.bool());
                        }
                    }
                    else {
                        message.actionCompleted.push(reader.bool());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClaimRecord();
        message.address = object.address ?? "";
        message.initialClaimableAmount = object.initialClaimableAmount?.map(e => Coin.fromPartial(e)) || [];
        message.actionCompleted = object.actionCompleted?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            initialClaimableAmount: Array.isArray(object?.initial_claimable_amount) ? object.initial_claimable_amount.map((e) => Coin.fromAmino(e)) : [],
            actionCompleted: Array.isArray(object?.action_completed) ? object.action_completed.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.initialClaimableAmount) {
            obj.initial_claimable_amount = message.initialClaimableAmount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.initial_claimable_amount = [];
        }
        if (message.actionCompleted) {
            obj.action_completed = message.actionCompleted.map(e => e);
        }
        else {
            obj.action_completed = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ClaimRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ClaimRecord.decode(message.value);
    },
    toProto(message) {
        return ClaimRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.airdrop.ClaimRecord",
            value: ClaimRecord.encode(message).finish()
        };
    }
};
//# sourceMappingURL=claim.js.map