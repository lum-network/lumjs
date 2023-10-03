//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, isSet } from "../../../helpers";
export var BeamState;
(function (BeamState) {
    BeamState[BeamState["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    BeamState[BeamState["OPEN"] = 1] = "OPEN";
    BeamState[BeamState["CANCELED"] = 2] = "CANCELED";
    BeamState[BeamState["CLOSED"] = 3] = "CLOSED";
    BeamState[BeamState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BeamState || (BeamState = {}));
export const BeamStateSDKType = BeamState;
export const BeamStateAmino = BeamState;
export function beamStateFromJSON(object) {
    switch (object) {
        case 0:
        case "UNSPECIFIED":
            return BeamState.UNSPECIFIED;
        case 1:
        case "OPEN":
            return BeamState.OPEN;
        case 2:
        case "CANCELED":
            return BeamState.CANCELED;
        case 3:
        case "CLOSED":
            return BeamState.CLOSED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BeamState.UNRECOGNIZED;
    }
}
export function beamStateToJSON(object) {
    switch (object) {
        case BeamState.UNSPECIFIED:
            return "UNSPECIFIED";
        case BeamState.OPEN:
            return "OPEN";
        case BeamState.CANCELED:
            return "CANCELED";
        case BeamState.CLOSED:
            return "CLOSED";
        case BeamState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseBeamMedia() {
    return {
        mimetype: "",
        url: "",
        thumbnailUrl: ""
    };
}
export const BeamMedia = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mimetype !== "") {
            writer.uint32(10).string(message.mimetype);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.thumbnailUrl !== "") {
            writer.uint32(26).string(message.thumbnailUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamMedia();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mimetype = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.thumbnailUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeamMedia();
        message.mimetype = object.mimetype ?? "";
        message.url = object.url ?? "";
        message.thumbnailUrl = object.thumbnailUrl ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            mimetype: object.mimetype,
            url: object.url,
            thumbnailUrl: object.thumbnail_url
        };
    },
    toAmino(message) {
        const obj = {};
        obj.mimetype = message.mimetype;
        obj.url = message.url;
        obj.thumbnail_url = message.thumbnailUrl;
        return obj;
    },
    fromAminoMsg(object) {
        return BeamMedia.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BeamMedia.decode(message.value);
    },
    toProto(message) {
        return BeamMedia.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.BeamMedia",
            value: BeamMedia.encode(message).finish()
        };
    }
};
function createBaseBeamReviewer() {
    return {
        reviewerId: "",
        name: "",
        isAnonymous: false
    };
}
export const BeamReviewer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.reviewerId !== "") {
            writer.uint32(10).string(message.reviewerId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.isAnonymous === true) {
            writer.uint32(24).bool(message.isAnonymous);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamReviewer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reviewerId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.isAnonymous = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeamReviewer();
        message.reviewerId = object.reviewerId ?? "";
        message.name = object.name ?? "";
        message.isAnonymous = object.isAnonymous ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            reviewerId: object.reviewer_id,
            name: object.name,
            isAnonymous: object.is_anonymous
        };
    },
    toAmino(message) {
        const obj = {};
        obj.reviewer_id = message.reviewerId;
        obj.name = message.name;
        obj.is_anonymous = message.isAnonymous;
        return obj;
    },
    fromAminoMsg(object) {
        return BeamReviewer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BeamReviewer.decode(message.value);
    },
    toProto(message) {
        return BeamReviewer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.BeamReviewer",
            value: BeamReviewer.encode(message).finish()
        };
    }
};
function createBaseBeamVerifier() {
    return {
        name: "",
        url: "",
        signature: ""
    };
}
export const BeamVerifier = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.signature !== "") {
            writer.uint32(26).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamVerifier();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeamVerifier();
        message.name = object.name ?? "";
        message.url = object.url ?? "";
        message.signature = object.signature ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            url: object.url,
            signature: object.signature
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.url = message.url;
        obj.signature = message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return BeamVerifier.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BeamVerifier.decode(message.value);
    },
    toProto(message) {
        return BeamVerifier.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.BeamVerifier",
            value: BeamVerifier.encode(message).finish()
        };
    }
};
function createBaseBeamReward() {
    return {
        trigger: "",
        amount: 0,
        maxAmount: 0,
        currency: "",
        status: "",
        details: []
    };
}
export const BeamReward = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.trigger !== "") {
            writer.uint32(10).string(message.trigger);
        }
        if (message.amount !== 0) {
            writer.uint32(21).float(message.amount);
        }
        if (message.maxAmount !== 0) {
            writer.uint32(29).float(message.maxAmount);
        }
        if (message.currency !== "") {
            writer.uint32(34).string(message.currency);
        }
        if (message.status !== "") {
            writer.uint32(42).string(message.status);
        }
        for (const v of message.details) {
            BeamReward_BeamRewardDetails.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trigger = reader.string();
                    break;
                case 2:
                    message.amount = reader.float();
                    break;
                case 3:
                    message.maxAmount = reader.float();
                    break;
                case 4:
                    message.currency = reader.string();
                    break;
                case 5:
                    message.status = reader.string();
                    break;
                case 6:
                    message.details.push(BeamReward_BeamRewardDetails.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeamReward();
        message.trigger = object.trigger ?? "";
        message.amount = object.amount ?? 0;
        message.maxAmount = object.maxAmount ?? 0;
        message.currency = object.currency ?? "";
        message.status = object.status ?? "";
        message.details = object.details?.map(e => BeamReward_BeamRewardDetails.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            trigger: object.trigger,
            amount: object.amount,
            maxAmount: object.max_amount,
            currency: object.currency,
            status: object.status,
            details: Array.isArray(object?.details) ? object.details.map((e) => BeamReward_BeamRewardDetails.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.trigger = message.trigger;
        obj.amount = message.amount;
        obj.max_amount = message.maxAmount;
        obj.currency = message.currency;
        obj.status = message.status;
        if (message.details) {
            obj.details = message.details.map(e => e ? BeamReward_BeamRewardDetails.toAmino(e) : undefined);
        }
        else {
            obj.details = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return BeamReward.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BeamReward.decode(message.value);
    },
    toProto(message) {
        return BeamReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.BeamReward",
            value: BeamReward.encode(message).finish()
        };
    }
};
function createBaseBeamReward_BeamRewardDetails() {
    return {
        type: "",
        amount: 0,
        maxAmount: 0,
        status: ""
    };
}
export const BeamReward_BeamRewardDetails = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.amount !== 0) {
            writer.uint32(21).float(message.amount);
        }
        if (message.maxAmount !== 0) {
            writer.uint32(29).float(message.maxAmount);
        }
        if (message.status !== "") {
            writer.uint32(34).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamReward_BeamRewardDetails();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.amount = reader.float();
                    break;
                case 3:
                    message.maxAmount = reader.float();
                    break;
                case 4:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeamReward_BeamRewardDetails();
        message.type = object.type ?? "";
        message.amount = object.amount ?? 0;
        message.maxAmount = object.maxAmount ?? 0;
        message.status = object.status ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            type: object.type,
            amount: object.amount,
            maxAmount: object.max_amount,
            status: object.status
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.amount = message.amount;
        obj.max_amount = message.maxAmount;
        obj.status = message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return BeamReward_BeamRewardDetails.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BeamReward_BeamRewardDetails.decode(message.value);
    },
    toProto(message) {
        return BeamReward_BeamRewardDetails.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.BeamRewardDetails",
            value: BeamReward_BeamRewardDetails.encode(message).finish()
        };
    }
};
function createBaseBeamMerchantReview() {
    return {
        orderId: "",
        reviewId: "",
        merchantUrl: "",
        ratingUrl: "",
        reviewUrl: "",
        collectionMethod: "",
        timestamp: "",
        ratings: BeamMerchantReviewRating.fromPartial({}),
        title: "",
        content: BeamMerchantReviewContent.fromPartial({})
    };
}
export const BeamMerchantReview = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderId !== "") {
            writer.uint32(10).string(message.orderId);
        }
        if (message.reviewId !== "") {
            writer.uint32(18).string(message.reviewId);
        }
        if (message.merchantUrl !== "") {
            writer.uint32(26).string(message.merchantUrl);
        }
        if (message.ratingUrl !== "") {
            writer.uint32(34).string(message.ratingUrl);
        }
        if (message.reviewUrl !== "") {
            writer.uint32(42).string(message.reviewUrl);
        }
        if (message.collectionMethod !== "") {
            writer.uint32(50).string(message.collectionMethod);
        }
        if (message.timestamp !== "") {
            writer.uint32(58).string(message.timestamp);
        }
        if (message.ratings !== undefined) {
            BeamMerchantReview_BeamMerchantReviewRating.encode(message.ratings, writer.uint32(66).fork()).ldelim();
        }
        if (message.title !== "") {
            writer.uint32(74).string(message.title);
        }
        if (message.content !== undefined) {
            BeamMerchantReview_BeamMerchantReviewContent.encode(message.content, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamMerchantReview();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                case 2:
                    message.reviewId = reader.string();
                    break;
                case 3:
                    message.merchantUrl = reader.string();
                    break;
                case 4:
                    message.ratingUrl = reader.string();
                    break;
                case 5:
                    message.reviewUrl = reader.string();
                    break;
                case 6:
                    message.collectionMethod = reader.string();
                    break;
                case 7:
                    message.timestamp = reader.string();
                    break;
                case 8:
                    message.ratings = BeamMerchantReview_BeamMerchantReviewRating.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.title = reader.string();
                    break;
                case 10:
                    message.content = BeamMerchantReview_BeamMerchantReviewContent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeamMerchantReview();
        message.orderId = object.orderId ?? "";
        message.reviewId = object.reviewId ?? "";
        message.merchantUrl = object.merchantUrl ?? "";
        message.ratingUrl = object.ratingUrl ?? "";
        message.reviewUrl = object.reviewUrl ?? "";
        message.collectionMethod = object.collectionMethod ?? "";
        message.timestamp = object.timestamp ?? "";
        message.ratings = object.ratings !== undefined && object.ratings !== null ? BeamMerchantReview_BeamMerchantReviewRating.fromPartial(object.ratings) : undefined;
        message.title = object.title ?? "";
        message.content = object.content !== undefined && object.content !== null ? BeamMerchantReview_BeamMerchantReviewContent.fromPartial(object.content) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            orderId: object.order_id,
            reviewId: object.review_id,
            merchantUrl: object.merchant_url,
            ratingUrl: object.rating_url,
            reviewUrl: object.review_url,
            collectionMethod: object.collection_method,
            timestamp: object.timestamp,
            ratings: object?.ratings ? BeamMerchantReview_BeamMerchantReviewRating.fromAmino(object.ratings) : undefined,
            title: object.title,
            content: object?.content ? BeamMerchantReview_BeamMerchantReviewContent.fromAmino(object.content) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.order_id = message.orderId;
        obj.review_id = message.reviewId;
        obj.merchant_url = message.merchantUrl;
        obj.rating_url = message.ratingUrl;
        obj.review_url = message.reviewUrl;
        obj.collection_method = message.collectionMethod;
        obj.timestamp = message.timestamp;
        obj.ratings = message.ratings ? BeamMerchantReview_BeamMerchantReviewRating.toAmino(message.ratings) : undefined;
        obj.title = message.title;
        obj.content = message.content ? BeamMerchantReview_BeamMerchantReviewContent.toAmino(message.content) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BeamMerchantReview.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BeamMerchantReview.decode(message.value);
    },
    toProto(message) {
        return BeamMerchantReview.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.BeamMerchantReview",
            value: BeamMerchantReview.encode(message).finish()
        };
    }
};
function createBaseBeamMerchantReview_BeamMerchantReviewRating() {
    return {
        overall: 0,
        customerService: 0,
        nps: 0
    };
}
export const BeamMerchantReview_BeamMerchantReviewRating = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.overall !== 0) {
            writer.uint32(13).float(message.overall);
        }
        if (message.customerService !== 0) {
            writer.uint32(21).float(message.customerService);
        }
        if (message.nps !== 0) {
            writer.uint32(29).float(message.nps);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamMerchantReview_BeamMerchantReviewRating();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.overall = reader.float();
                    break;
                case 2:
                    message.customerService = reader.float();
                    break;
                case 3:
                    message.nps = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeamMerchantReview_BeamMerchantReviewRating();
        message.overall = object.overall ?? 0;
        message.customerService = object.customerService ?? 0;
        message.nps = object.nps ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            overall: object.overall,
            customerService: object.customer_service,
            nps: object.nps
        };
    },
    toAmino(message) {
        const obj = {};
        obj.overall = message.overall;
        obj.customer_service = message.customerService;
        obj.nps = message.nps;
        return obj;
    },
    fromAminoMsg(object) {
        return BeamMerchantReview_BeamMerchantReviewRating.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BeamMerchantReview_BeamMerchantReviewRating.decode(message.value);
    },
    toProto(message) {
        return BeamMerchantReview_BeamMerchantReviewRating.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.BeamMerchantReviewRating",
            value: BeamMerchantReview_BeamMerchantReviewRating.encode(message).finish()
        };
    }
};
function createBaseBeamMerchantReview_BeamMerchantReviewContent() {
    return {
        overall: "",
        customerService: ""
    };
}
export const BeamMerchantReview_BeamMerchantReviewContent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.overall !== "") {
            writer.uint32(10).string(message.overall);
        }
        if (message.customerService !== "") {
            writer.uint32(18).string(message.customerService);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamMerchantReview_BeamMerchantReviewContent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.overall = reader.string();
                    break;
                case 2:
                    message.customerService = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeamMerchantReview_BeamMerchantReviewContent();
        message.overall = object.overall ?? "";
        message.customerService = object.customerService ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            overall: object.overall,
            customerService: object.customer_service
        };
    },
    toAmino(message) {
        const obj = {};
        obj.overall = message.overall;
        obj.customer_service = message.customerService;
        return obj;
    },
    fromAminoMsg(object) {
        return BeamMerchantReview_BeamMerchantReviewContent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BeamMerchantReview_BeamMerchantReviewContent.decode(message.value);
    },
    toProto(message) {
        return BeamMerchantReview_BeamMerchantReviewContent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.BeamMerchantReviewContent",
            value: BeamMerchantReview_BeamMerchantReviewContent.encode(message).finish()
        };
    }
};
function createBaseBeamProductReview() {
    return {
        orderId: "",
        reviewId: "",
        ratingUrl: "",
        reviewUrl: "",
        collectionMethod: "",
        timestamp: "",
        ratings: BeamProductReviewRating.fromPartial({}),
        title: "",
        content: BeamProductReviewContent.fromPartial({}),
        medias: [],
        products: []
    };
}
export const BeamProductReview = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderId !== "") {
            writer.uint32(10).string(message.orderId);
        }
        if (message.reviewId !== "") {
            writer.uint32(18).string(message.reviewId);
        }
        if (message.ratingUrl !== "") {
            writer.uint32(26).string(message.ratingUrl);
        }
        if (message.reviewUrl !== "") {
            writer.uint32(34).string(message.reviewUrl);
        }
        if (message.collectionMethod !== "") {
            writer.uint32(42).string(message.collectionMethod);
        }
        if (message.timestamp !== "") {
            writer.uint32(50).string(message.timestamp);
        }
        if (message.ratings !== undefined) {
            BeamProductReview_BeamProductReviewRating.encode(message.ratings, writer.uint32(58).fork()).ldelim();
        }
        if (message.title !== "") {
            writer.uint32(66).string(message.title);
        }
        if (message.content !== undefined) {
            BeamProductReview_BeamProductReviewContent.encode(message.content, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.medias) {
            BeamMedia.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.products) {
            BeamProductReview_BeamProduct.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamProductReview();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                case 2:
                    message.reviewId = reader.string();
                    break;
                case 3:
                    message.ratingUrl = reader.string();
                    break;
                case 4:
                    message.reviewUrl = reader.string();
                    break;
                case 5:
                    message.collectionMethod = reader.string();
                    break;
                case 6:
                    message.timestamp = reader.string();
                    break;
                case 7:
                    message.ratings = BeamProductReview_BeamProductReviewRating.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.title = reader.string();
                    break;
                case 9:
                    message.content = BeamProductReview_BeamProductReviewContent.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.medias.push(BeamMedia.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.products.push(BeamProductReview_BeamProduct.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeamProductReview();
        message.orderId = object.orderId ?? "";
        message.reviewId = object.reviewId ?? "";
        message.ratingUrl = object.ratingUrl ?? "";
        message.reviewUrl = object.reviewUrl ?? "";
        message.collectionMethod = object.collectionMethod ?? "";
        message.timestamp = object.timestamp ?? "";
        message.ratings = object.ratings !== undefined && object.ratings !== null ? BeamProductReview_BeamProductReviewRating.fromPartial(object.ratings) : undefined;
        message.title = object.title ?? "";
        message.content = object.content !== undefined && object.content !== null ? BeamProductReview_BeamProductReviewContent.fromPartial(object.content) : undefined;
        message.medias = object.medias?.map(e => BeamMedia.fromPartial(e)) || [];
        message.products = object.products?.map(e => BeamProductReview_BeamProduct.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            orderId: object.order_id,
            reviewId: object.review_id,
            ratingUrl: object.rating_url,
            reviewUrl: object.review_url,
            collectionMethod: object.collection_method,
            timestamp: object.timestamp,
            ratings: object?.ratings ? BeamProductReview_BeamProductReviewRating.fromAmino(object.ratings) : undefined,
            title: object.title,
            content: object?.content ? BeamProductReview_BeamProductReviewContent.fromAmino(object.content) : undefined,
            medias: Array.isArray(object?.medias) ? object.medias.map((e) => BeamMedia.fromAmino(e)) : [],
            products: Array.isArray(object?.products) ? object.products.map((e) => BeamProductReview_BeamProduct.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.order_id = message.orderId;
        obj.review_id = message.reviewId;
        obj.rating_url = message.ratingUrl;
        obj.review_url = message.reviewUrl;
        obj.collection_method = message.collectionMethod;
        obj.timestamp = message.timestamp;
        obj.ratings = message.ratings ? BeamProductReview_BeamProductReviewRating.toAmino(message.ratings) : undefined;
        obj.title = message.title;
        obj.content = message.content ? BeamProductReview_BeamProductReviewContent.toAmino(message.content) : undefined;
        if (message.medias) {
            obj.medias = message.medias.map(e => e ? BeamMedia.toAmino(e) : undefined);
        }
        else {
            obj.medias = [];
        }
        if (message.products) {
            obj.products = message.products.map(e => e ? BeamProductReview_BeamProduct.toAmino(e) : undefined);
        }
        else {
            obj.products = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return BeamProductReview.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BeamProductReview.decode(message.value);
    },
    toProto(message) {
        return BeamProductReview.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.BeamProductReview",
            value: BeamProductReview.encode(message).finish()
        };
    }
};
function createBaseBeamProductReview_BeamProductReviewRating() {
    return {
        overall: 0,
        quality: 0
    };
}
export const BeamProductReview_BeamProductReviewRating = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.overall !== 0) {
            writer.uint32(13).float(message.overall);
        }
        if (message.quality !== 0) {
            writer.uint32(21).float(message.quality);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamProductReview_BeamProductReviewRating();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.overall = reader.float();
                    break;
                case 2:
                    message.quality = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeamProductReview_BeamProductReviewRating();
        message.overall = object.overall ?? 0;
        message.quality = object.quality ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            overall: object.overall,
            quality: object.quality
        };
    },
    toAmino(message) {
        const obj = {};
        obj.overall = message.overall;
        obj.quality = message.quality;
        return obj;
    },
    fromAminoMsg(object) {
        return BeamProductReview_BeamProductReviewRating.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BeamProductReview_BeamProductReviewRating.decode(message.value);
    },
    toProto(message) {
        return BeamProductReview_BeamProductReviewRating.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.BeamProductReviewRating",
            value: BeamProductReview_BeamProductReviewRating.encode(message).finish()
        };
    }
};
function createBaseBeamProductReview_BeamProductReviewContent() {
    return {
        overall: "",
        pros: "",
        cons: ""
    };
}
export const BeamProductReview_BeamProductReviewContent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.overall !== "") {
            writer.uint32(10).string(message.overall);
        }
        if (message.pros !== "") {
            writer.uint32(18).string(message.pros);
        }
        if (message.cons !== "") {
            writer.uint32(26).string(message.cons);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamProductReview_BeamProductReviewContent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.overall = reader.string();
                    break;
                case 2:
                    message.pros = reader.string();
                    break;
                case 3:
                    message.cons = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeamProductReview_BeamProductReviewContent();
        message.overall = object.overall ?? "";
        message.pros = object.pros ?? "";
        message.cons = object.cons ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            overall: object.overall,
            pros: object.pros,
            cons: object.cons
        };
    },
    toAmino(message) {
        const obj = {};
        obj.overall = message.overall;
        obj.pros = message.pros;
        obj.cons = message.cons;
        return obj;
    },
    fromAminoMsg(object) {
        return BeamProductReview_BeamProductReviewContent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BeamProductReview_BeamProductReviewContent.decode(message.value);
    },
    toProto(message) {
        return BeamProductReview_BeamProductReviewContent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.BeamProductReviewContent",
            value: BeamProductReview_BeamProductReviewContent.encode(message).finish()
        };
    }
};
function createBaseBeamProductReview_BeamProduct() {
    return {
        name: "",
        url: "",
        urls: [],
        ids: BeamProductIds.fromPartial({})
    };
}
export const BeamProductReview_BeamProduct = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        for (const v of message.urls) {
            writer.uint32(26).string(v);
        }
        if (message.ids !== undefined) {
            BeamProductReview_BeamProduct_BeamProductIds.encode(message.ids, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamProductReview_BeamProduct();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.urls.push(reader.string());
                    break;
                case 4:
                    message.ids = BeamProductReview_BeamProduct_BeamProductIds.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeamProductReview_BeamProduct();
        message.name = object.name ?? "";
        message.url = object.url ?? "";
        message.urls = object.urls?.map(e => e) || [];
        message.ids = object.ids !== undefined && object.ids !== null ? BeamProductReview_BeamProduct_BeamProductIds.fromPartial(object.ids) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            url: object.url,
            urls: Array.isArray(object?.urls) ? object.urls.map((e) => e) : [],
            ids: object?.ids ? BeamProductReview_BeamProduct_BeamProductIds.fromAmino(object.ids) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.url = message.url;
        if (message.urls) {
            obj.urls = message.urls.map(e => e);
        }
        else {
            obj.urls = [];
        }
        obj.ids = message.ids ? BeamProductReview_BeamProduct_BeamProductIds.toAmino(message.ids) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BeamProductReview_BeamProduct.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BeamProductReview_BeamProduct.decode(message.value);
    },
    toProto(message) {
        return BeamProductReview_BeamProduct.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.BeamProduct",
            value: BeamProductReview_BeamProduct.encode(message).finish()
        };
    }
};
function createBaseBeamProductReview_BeamProduct_BeamProductIds() {
    return {
        gtins: [],
        mpns: [],
        skus: [],
        asins: []
    };
}
export const BeamProductReview_BeamProduct_BeamProductIds = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.gtins) {
            writer.uint32(10).string(v);
        }
        for (const v of message.mpns) {
            writer.uint32(18).string(v);
        }
        for (const v of message.skus) {
            writer.uint32(26).string(v);
        }
        for (const v of message.asins) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamProductReview_BeamProduct_BeamProductIds();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gtins.push(reader.string());
                    break;
                case 2:
                    message.mpns.push(reader.string());
                    break;
                case 3:
                    message.skus.push(reader.string());
                    break;
                case 4:
                    message.asins.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeamProductReview_BeamProduct_BeamProductIds();
        message.gtins = object.gtins?.map(e => e) || [];
        message.mpns = object.mpns?.map(e => e) || [];
        message.skus = object.skus?.map(e => e) || [];
        message.asins = object.asins?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            gtins: Array.isArray(object?.gtins) ? object.gtins.map((e) => e) : [],
            mpns: Array.isArray(object?.mpns) ? object.mpns.map((e) => e) : [],
            skus: Array.isArray(object?.skus) ? object.skus.map((e) => e) : [],
            asins: Array.isArray(object?.asins) ? object.asins.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.gtins) {
            obj.gtins = message.gtins.map(e => e);
        }
        else {
            obj.gtins = [];
        }
        if (message.mpns) {
            obj.mpns = message.mpns.map(e => e);
        }
        else {
            obj.mpns = [];
        }
        if (message.skus) {
            obj.skus = message.skus.map(e => e);
        }
        else {
            obj.skus = [];
        }
        if (message.asins) {
            obj.asins = message.asins.map(e => e);
        }
        else {
            obj.asins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return BeamProductReview_BeamProduct_BeamProductIds.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BeamProductReview_BeamProduct_BeamProductIds.decode(message.value);
    },
    toProto(message) {
        return BeamProductReview_BeamProduct_BeamProductIds.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.BeamProductIds",
            value: BeamProductReview_BeamProduct_BeamProductIds.encode(message).finish()
        };
    }
};
function createBaseBeamData() {
    return {
        reward: BeamReward.fromPartial({}),
        verifier: BeamVerifier.fromPartial({}),
        reviewer: BeamReviewer.fromPartial({}),
        merchantReview: BeamMerchantReview.fromPartial({}),
        productsReviews: []
    };
}
export const BeamData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.reward !== undefined) {
            BeamReward.encode(message.reward, writer.uint32(10).fork()).ldelim();
        }
        if (message.verifier !== undefined) {
            BeamVerifier.encode(message.verifier, writer.uint32(18).fork()).ldelim();
        }
        if (message.reviewer !== undefined) {
            BeamReviewer.encode(message.reviewer, writer.uint32(26).fork()).ldelim();
        }
        if (message.merchantReview !== undefined) {
            BeamMerchantReview.encode(message.merchantReview, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.productsReviews) {
            BeamProductReview.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reward = BeamReward.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.verifier = BeamVerifier.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.reviewer = BeamReviewer.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.merchantReview = BeamMerchantReview.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.productsReviews.push(BeamProductReview.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeamData();
        message.reward = object.reward !== undefined && object.reward !== null ? BeamReward.fromPartial(object.reward) : undefined;
        message.verifier = object.verifier !== undefined && object.verifier !== null ? BeamVerifier.fromPartial(object.verifier) : undefined;
        message.reviewer = object.reviewer !== undefined && object.reviewer !== null ? BeamReviewer.fromPartial(object.reviewer) : undefined;
        message.merchantReview = object.merchantReview !== undefined && object.merchantReview !== null ? BeamMerchantReview.fromPartial(object.merchantReview) : undefined;
        message.productsReviews = object.productsReviews?.map(e => BeamProductReview.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            reward: object?.reward ? BeamReward.fromAmino(object.reward) : undefined,
            verifier: object?.verifier ? BeamVerifier.fromAmino(object.verifier) : undefined,
            reviewer: object?.reviewer ? BeamReviewer.fromAmino(object.reviewer) : undefined,
            merchantReview: object?.merchant_review ? BeamMerchantReview.fromAmino(object.merchant_review) : undefined,
            productsReviews: Array.isArray(object?.products_reviews) ? object.products_reviews.map((e) => BeamProductReview.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.reward = message.reward ? BeamReward.toAmino(message.reward) : undefined;
        obj.verifier = message.verifier ? BeamVerifier.toAmino(message.verifier) : undefined;
        obj.reviewer = message.reviewer ? BeamReviewer.toAmino(message.reviewer) : undefined;
        obj.merchant_review = message.merchantReview ? BeamMerchantReview.toAmino(message.merchantReview) : undefined;
        if (message.productsReviews) {
            obj.products_reviews = message.productsReviews.map(e => e ? BeamProductReview.toAmino(e) : undefined);
        }
        else {
            obj.products_reviews = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return BeamData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BeamData.decode(message.value);
    },
    toProto(message) {
        return BeamData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.BeamData",
            value: BeamData.encode(message).finish()
        };
    }
};
function createBaseBeam() {
    return {
        creatorAddress: "",
        id: "",
        amount: Coin.fromPartial({}),
        status: 0,
        secret: "",
        claimAddress: "",
        fundsWithdrawn: false,
        claimed: false,
        cancelReason: "",
        hideContent: false,
        schema: "",
        data: BeamData.fromPartial({}),
        claimExpiresAtBlock: 0,
        closesAtBlock: 0,
        createdAt: new Date(),
        closedAt: new Date()
    };
}
export const Beam = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creatorAddress !== "") {
            writer.uint32(10).string(message.creatorAddress);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.secret !== "") {
            writer.uint32(42).string(message.secret);
        }
        if (message.claimAddress !== "") {
            writer.uint32(50).string(message.claimAddress);
        }
        if (message.fundsWithdrawn === true) {
            writer.uint32(56).bool(message.fundsWithdrawn);
        }
        if (message.claimed === true) {
            writer.uint32(64).bool(message.claimed);
        }
        if (message.cancelReason !== "") {
            writer.uint32(74).string(message.cancelReason);
        }
        if (message.hideContent === true) {
            writer.uint32(80).bool(message.hideContent);
        }
        if (message.schema !== "") {
            writer.uint32(90).string(message.schema);
        }
        if (message.data !== undefined) {
            BeamData.encode(message.data, writer.uint32(98).fork()).ldelim();
        }
        if (message.claimExpiresAtBlock !== 0) {
            writer.uint32(104).int32(message.claimExpiresAtBlock);
        }
        if (message.closesAtBlock !== 0) {
            writer.uint32(112).int32(message.closesAtBlock);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(122).fork()).ldelim();
        }
        if (message.closedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.closedAt), writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creatorAddress = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.secret = reader.string();
                    break;
                case 6:
                    message.claimAddress = reader.string();
                    break;
                case 7:
                    message.fundsWithdrawn = reader.bool();
                    break;
                case 8:
                    message.claimed = reader.bool();
                    break;
                case 9:
                    message.cancelReason = reader.string();
                    break;
                case 10:
                    message.hideContent = reader.bool();
                    break;
                case 11:
                    message.schema = reader.string();
                    break;
                case 12:
                    message.data = BeamData.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.claimExpiresAtBlock = reader.int32();
                    break;
                case 14:
                    message.closesAtBlock = reader.int32();
                    break;
                case 15:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.closedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBeam();
        message.creatorAddress = object.creatorAddress ?? "";
        message.id = object.id ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.status = object.status ?? 0;
        message.secret = object.secret ?? "";
        message.claimAddress = object.claimAddress ?? "";
        message.fundsWithdrawn = object.fundsWithdrawn ?? false;
        message.claimed = object.claimed ?? false;
        message.cancelReason = object.cancelReason ?? "";
        message.hideContent = object.hideContent ?? false;
        message.schema = object.schema ?? "";
        message.data = object.data !== undefined && object.data !== null ? BeamData.fromPartial(object.data) : undefined;
        message.claimExpiresAtBlock = object.claimExpiresAtBlock ?? 0;
        message.closesAtBlock = object.closesAtBlock ?? 0;
        message.createdAt = object.createdAt ?? undefined;
        message.closedAt = object.closedAt ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            creatorAddress: object.creator_address,
            id: object.id,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
            status: isSet(object.status) ? beamStateFromJSON(object.status) : -1,
            secret: object.secret,
            claimAddress: object.claim_address,
            fundsWithdrawn: object.funds_withdrawn,
            claimed: object.claimed,
            cancelReason: object.cancel_reason,
            hideContent: object.hide_content,
            schema: object.schema,
            data: object?.data ? BeamData.fromAmino(object.data) : undefined,
            claimExpiresAtBlock: object.claim_expires_at_block,
            closesAtBlock: object.closes_at_block,
            createdAt: object.created_at,
            closedAt: object.closed_at
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creator_address = message.creatorAddress;
        obj.id = message.id;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.status = message.status;
        obj.secret = message.secret;
        obj.claim_address = message.claimAddress;
        obj.funds_withdrawn = message.fundsWithdrawn;
        obj.claimed = message.claimed;
        obj.cancel_reason = message.cancelReason;
        obj.hide_content = message.hideContent;
        obj.schema = message.schema;
        obj.data = message.data ? BeamData.toAmino(message.data) : undefined;
        obj.claim_expires_at_block = message.claimExpiresAtBlock;
        obj.closes_at_block = message.closesAtBlock;
        obj.created_at = message.createdAt;
        obj.closed_at = message.closedAt;
        return obj;
    },
    fromAminoMsg(object) {
        return Beam.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Beam.decode(message.value);
    },
    toProto(message) {
        return Beam.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/lum.network.beam.Beam",
            value: Beam.encode(message).finish()
        };
    }
};
//# sourceMappingURL=beam.js.map