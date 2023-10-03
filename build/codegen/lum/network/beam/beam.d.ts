import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export declare enum BeamState {
    UNSPECIFIED = 0,
    OPEN = 1,
    CANCELED = 2,
    CLOSED = 3,
    UNRECOGNIZED = -1
}
export declare const BeamStateSDKType: typeof BeamState;
export declare const BeamStateAmino: typeof BeamState;
export declare function beamStateFromJSON(object: any): BeamState;
export declare function beamStateToJSON(object: BeamState): string;
export interface BeamMedia {
    mimetype: string;
    url: string;
    thumbnailUrl: string;
}
export interface BeamMediaProtoMsg {
    typeUrl: "/lum.network.beam.BeamMedia";
    value: Uint8Array;
}
export interface BeamMediaAmino {
    mimetype: string;
    url: string;
    thumbnail_url: string;
}
export interface BeamMediaAminoMsg {
    type: "/lum.network.beam.BeamMedia";
    value: BeamMediaAmino;
}
export interface BeamMediaSDKType {
    mimetype: string;
    url: string;
    thumbnail_url: string;
}
export interface BeamReviewer {
    reviewerId: string;
    name: string;
    isAnonymous: boolean;
}
export interface BeamReviewerProtoMsg {
    typeUrl: "/lum.network.beam.BeamReviewer";
    value: Uint8Array;
}
export interface BeamReviewerAmino {
    reviewer_id: string;
    name: string;
    is_anonymous: boolean;
}
export interface BeamReviewerAminoMsg {
    type: "/lum.network.beam.BeamReviewer";
    value: BeamReviewerAmino;
}
export interface BeamReviewerSDKType {
    reviewer_id: string;
    name: string;
    is_anonymous: boolean;
}
export interface BeamVerifier {
    name: string;
    url: string;
    signature: string;
}
export interface BeamVerifierProtoMsg {
    typeUrl: "/lum.network.beam.BeamVerifier";
    value: Uint8Array;
}
export interface BeamVerifierAmino {
    name: string;
    url: string;
    signature: string;
}
export interface BeamVerifierAminoMsg {
    type: "/lum.network.beam.BeamVerifier";
    value: BeamVerifierAmino;
}
export interface BeamVerifierSDKType {
    name: string;
    url: string;
    signature: string;
}
export interface BeamReward {
    trigger: string;
    amount: number;
    maxAmount: number;
    currency: string;
    status: string;
    details: BeamReward_BeamRewardDetails[];
}
export interface BeamRewardProtoMsg {
    typeUrl: "/lum.network.beam.BeamReward";
    value: Uint8Array;
}
export interface BeamRewardAmino {
    trigger: string;
    amount: number;
    max_amount: number;
    currency: string;
    status: string;
    details: BeamReward_BeamRewardDetailsAmino[];
}
export interface BeamRewardAminoMsg {
    type: "/lum.network.beam.BeamReward";
    value: BeamRewardAmino;
}
export interface BeamRewardSDKType {
    trigger: string;
    amount: number;
    max_amount: number;
    currency: string;
    status: string;
    details: BeamReward_BeamRewardDetailsSDKType[];
}
export interface BeamReward_BeamRewardDetails {
    type: string;
    amount: number;
    maxAmount: number;
    status: string;
}
export interface BeamReward_BeamRewardDetailsProtoMsg {
    typeUrl: "/lum.network.beam.BeamRewardDetails";
    value: Uint8Array;
}
export interface BeamReward_BeamRewardDetailsAmino {
    type: string;
    amount: number;
    max_amount: number;
    status: string;
}
export interface BeamReward_BeamRewardDetailsAminoMsg {
    type: "/lum.network.beam.BeamRewardDetails";
    value: BeamReward_BeamRewardDetailsAmino;
}
export interface BeamReward_BeamRewardDetailsSDKType {
    type: string;
    amount: number;
    max_amount: number;
    status: string;
}
export interface BeamMerchantReview {
    orderId: string;
    reviewId: string;
    merchantUrl: string;
    ratingUrl: string;
    reviewUrl: string;
    collectionMethod: string;
    timestamp: string;
    ratings: BeamMerchantReview_BeamMerchantReviewRating | undefined;
    title: string;
    content: BeamMerchantReview_BeamMerchantReviewContent | undefined;
}
export interface BeamMerchantReviewProtoMsg {
    typeUrl: "/lum.network.beam.BeamMerchantReview";
    value: Uint8Array;
}
export interface BeamMerchantReviewAmino {
    order_id: string;
    review_id: string;
    merchant_url: string;
    rating_url: string;
    review_url: string;
    collection_method: string;
    timestamp: string;
    ratings?: BeamMerchantReview_BeamMerchantReviewRatingAmino | undefined;
    title: string;
    content?: BeamMerchantReview_BeamMerchantReviewContentAmino | undefined;
}
export interface BeamMerchantReviewAminoMsg {
    type: "/lum.network.beam.BeamMerchantReview";
    value: BeamMerchantReviewAmino;
}
export interface BeamMerchantReviewSDKType {
    order_id: string;
    review_id: string;
    merchant_url: string;
    rating_url: string;
    review_url: string;
    collection_method: string;
    timestamp: string;
    ratings: BeamMerchantReview_BeamMerchantReviewRatingSDKType | undefined;
    title: string;
    content: BeamMerchantReview_BeamMerchantReviewContentSDKType | undefined;
}
export interface BeamMerchantReview_BeamMerchantReviewRating {
    overall: number;
    customerService: number;
    nps: number;
}
export interface BeamMerchantReview_BeamMerchantReviewRatingProtoMsg {
    typeUrl: "/lum.network.beam.BeamMerchantReviewRating";
    value: Uint8Array;
}
export interface BeamMerchantReview_BeamMerchantReviewRatingAmino {
    overall: number;
    customer_service: number;
    nps: number;
}
export interface BeamMerchantReview_BeamMerchantReviewRatingAminoMsg {
    type: "/lum.network.beam.BeamMerchantReviewRating";
    value: BeamMerchantReview_BeamMerchantReviewRatingAmino;
}
export interface BeamMerchantReview_BeamMerchantReviewRatingSDKType {
    overall: number;
    customer_service: number;
    nps: number;
}
export interface BeamMerchantReview_BeamMerchantReviewContent {
    overall: string;
    customerService: string;
}
export interface BeamMerchantReview_BeamMerchantReviewContentProtoMsg {
    typeUrl: "/lum.network.beam.BeamMerchantReviewContent";
    value: Uint8Array;
}
export interface BeamMerchantReview_BeamMerchantReviewContentAmino {
    overall: string;
    customer_service: string;
}
export interface BeamMerchantReview_BeamMerchantReviewContentAminoMsg {
    type: "/lum.network.beam.BeamMerchantReviewContent";
    value: BeamMerchantReview_BeamMerchantReviewContentAmino;
}
export interface BeamMerchantReview_BeamMerchantReviewContentSDKType {
    overall: string;
    customer_service: string;
}
export interface BeamProductReview {
    orderId: string;
    reviewId: string;
    ratingUrl: string;
    reviewUrl: string;
    collectionMethod: string;
    timestamp: string;
    ratings: BeamProductReview_BeamProductReviewRating | undefined;
    title: string;
    content: BeamProductReview_BeamProductReviewContent | undefined;
    medias: BeamMedia[];
    products: BeamProductReview_BeamProduct[];
}
export interface BeamProductReviewProtoMsg {
    typeUrl: "/lum.network.beam.BeamProductReview";
    value: Uint8Array;
}
export interface BeamProductReviewAmino {
    order_id: string;
    review_id: string;
    rating_url: string;
    review_url: string;
    collection_method: string;
    timestamp: string;
    ratings?: BeamProductReview_BeamProductReviewRatingAmino | undefined;
    title: string;
    content?: BeamProductReview_BeamProductReviewContentAmino | undefined;
    medias: BeamMediaAmino[];
    products: BeamProductReview_BeamProductAmino[];
}
export interface BeamProductReviewAminoMsg {
    type: "/lum.network.beam.BeamProductReview";
    value: BeamProductReviewAmino;
}
export interface BeamProductReviewSDKType {
    order_id: string;
    review_id: string;
    rating_url: string;
    review_url: string;
    collection_method: string;
    timestamp: string;
    ratings: BeamProductReview_BeamProductReviewRatingSDKType | undefined;
    title: string;
    content: BeamProductReview_BeamProductReviewContentSDKType | undefined;
    medias: BeamMediaSDKType[];
    products: BeamProductReview_BeamProductSDKType[];
}
export interface BeamProductReview_BeamProductReviewRating {
    overall: number;
    quality: number;
}
export interface BeamProductReview_BeamProductReviewRatingProtoMsg {
    typeUrl: "/lum.network.beam.BeamProductReviewRating";
    value: Uint8Array;
}
export interface BeamProductReview_BeamProductReviewRatingAmino {
    overall: number;
    quality: number;
}
export interface BeamProductReview_BeamProductReviewRatingAminoMsg {
    type: "/lum.network.beam.BeamProductReviewRating";
    value: BeamProductReview_BeamProductReviewRatingAmino;
}
export interface BeamProductReview_BeamProductReviewRatingSDKType {
    overall: number;
    quality: number;
}
export interface BeamProductReview_BeamProductReviewContent {
    overall: string;
    pros: string;
    cons: string;
}
export interface BeamProductReview_BeamProductReviewContentProtoMsg {
    typeUrl: "/lum.network.beam.BeamProductReviewContent";
    value: Uint8Array;
}
export interface BeamProductReview_BeamProductReviewContentAmino {
    overall: string;
    pros: string;
    cons: string;
}
export interface BeamProductReview_BeamProductReviewContentAminoMsg {
    type: "/lum.network.beam.BeamProductReviewContent";
    value: BeamProductReview_BeamProductReviewContentAmino;
}
export interface BeamProductReview_BeamProductReviewContentSDKType {
    overall: string;
    pros: string;
    cons: string;
}
export interface BeamProductReview_BeamProduct {
    name: string;
    url: string;
    urls: string[];
    ids: BeamProductReview_BeamProduct_BeamProductIds | undefined;
}
export interface BeamProductReview_BeamProductProtoMsg {
    typeUrl: "/lum.network.beam.BeamProduct";
    value: Uint8Array;
}
export interface BeamProductReview_BeamProductAmino {
    name: string;
    url: string;
    urls: string[];
    ids?: BeamProductReview_BeamProduct_BeamProductIdsAmino | undefined;
}
export interface BeamProductReview_BeamProductAminoMsg {
    type: "/lum.network.beam.BeamProduct";
    value: BeamProductReview_BeamProductAmino;
}
export interface BeamProductReview_BeamProductSDKType {
    name: string;
    url: string;
    urls: string[];
    ids: BeamProductReview_BeamProduct_BeamProductIdsSDKType | undefined;
}
export interface BeamProductReview_BeamProduct_BeamProductIds {
    gtins: string[];
    mpns: string[];
    skus: string[];
    asins: string[];
}
export interface BeamProductReview_BeamProduct_BeamProductIdsProtoMsg {
    typeUrl: "/lum.network.beam.BeamProductIds";
    value: Uint8Array;
}
export interface BeamProductReview_BeamProduct_BeamProductIdsAmino {
    gtins: string[];
    mpns: string[];
    skus: string[];
    asins: string[];
}
export interface BeamProductReview_BeamProduct_BeamProductIdsAminoMsg {
    type: "/lum.network.beam.BeamProductIds";
    value: BeamProductReview_BeamProduct_BeamProductIdsAmino;
}
export interface BeamProductReview_BeamProduct_BeamProductIdsSDKType {
    gtins: string[];
    mpns: string[];
    skus: string[];
    asins: string[];
}
export interface BeamData {
    reward: BeamReward | undefined;
    verifier: BeamVerifier | undefined;
    reviewer: BeamReviewer | undefined;
    merchantReview: BeamMerchantReview | undefined;
    productsReviews: BeamProductReview[];
}
export interface BeamDataProtoMsg {
    typeUrl: "/lum.network.beam.BeamData";
    value: Uint8Array;
}
export interface BeamDataAmino {
    reward?: BeamRewardAmino | undefined;
    verifier?: BeamVerifierAmino | undefined;
    reviewer?: BeamReviewerAmino | undefined;
    merchant_review?: BeamMerchantReviewAmino | undefined;
    products_reviews: BeamProductReviewAmino[];
}
export interface BeamDataAminoMsg {
    type: "/lum.network.beam.BeamData";
    value: BeamDataAmino;
}
export interface BeamDataSDKType {
    reward: BeamRewardSDKType | undefined;
    verifier: BeamVerifierSDKType | undefined;
    reviewer: BeamReviewerSDKType | undefined;
    merchant_review: BeamMerchantReviewSDKType | undefined;
    products_reviews: BeamProductReviewSDKType[];
}
export interface Beam {
    creatorAddress: string;
    id: string;
    amount: Coin | undefined;
    status: BeamState;
    secret: string;
    claimAddress: string;
    fundsWithdrawn: boolean;
    claimed: boolean;
    cancelReason: string;
    hideContent: boolean;
    schema: string;
    data: BeamData | undefined;
    claimExpiresAtBlock: number;
    closesAtBlock: number;
    createdAt: Date | undefined;
    closedAt: Date | undefined;
}
export interface BeamProtoMsg {
    typeUrl: "/lum.network.beam.Beam";
    value: Uint8Array;
}
export interface BeamAmino {
    creator_address: string;
    id: string;
    amount?: CoinAmino | undefined;
    status: BeamState;
    secret: string;
    claim_address: string;
    funds_withdrawn: boolean;
    claimed: boolean;
    cancel_reason: string;
    hide_content: boolean;
    schema: string;
    data?: BeamDataAmino | undefined;
    claim_expires_at_block: number;
    closes_at_block: number;
    created_at?: Date | undefined;
    closed_at?: Date | undefined;
}
export interface BeamAminoMsg {
    type: "/lum.network.beam.Beam";
    value: BeamAmino;
}
export interface BeamSDKType {
    creator_address: string;
    id: string;
    amount: CoinSDKType | undefined;
    status: BeamState;
    secret: string;
    claim_address: string;
    funds_withdrawn: boolean;
    claimed: boolean;
    cancel_reason: string;
    hide_content: boolean;
    schema: string;
    data: BeamDataSDKType | undefined;
    claim_expires_at_block: number;
    closes_at_block: number;
    created_at: Date | undefined;
    closed_at: Date | undefined;
}
export declare const BeamMedia: {
    encode(message: BeamMedia, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeamMedia;
    fromPartial(object: DeepPartial<BeamMedia>): BeamMedia;
    fromAmino(object: BeamMediaAmino): BeamMedia;
    toAmino(message: BeamMedia): BeamMediaAmino;
    fromAminoMsg(object: BeamMediaAminoMsg): BeamMedia;
    fromProtoMsg(message: BeamMediaProtoMsg): BeamMedia;
    toProto(message: BeamMedia): Uint8Array;
    toProtoMsg(message: BeamMedia): BeamMediaProtoMsg;
};
export declare const BeamReviewer: {
    encode(message: BeamReviewer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReviewer;
    fromPartial(object: DeepPartial<BeamReviewer>): BeamReviewer;
    fromAmino(object: BeamReviewerAmino): BeamReviewer;
    toAmino(message: BeamReviewer): BeamReviewerAmino;
    fromAminoMsg(object: BeamReviewerAminoMsg): BeamReviewer;
    fromProtoMsg(message: BeamReviewerProtoMsg): BeamReviewer;
    toProto(message: BeamReviewer): Uint8Array;
    toProtoMsg(message: BeamReviewer): BeamReviewerProtoMsg;
};
export declare const BeamVerifier: {
    encode(message: BeamVerifier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeamVerifier;
    fromPartial(object: DeepPartial<BeamVerifier>): BeamVerifier;
    fromAmino(object: BeamVerifierAmino): BeamVerifier;
    toAmino(message: BeamVerifier): BeamVerifierAmino;
    fromAminoMsg(object: BeamVerifierAminoMsg): BeamVerifier;
    fromProtoMsg(message: BeamVerifierProtoMsg): BeamVerifier;
    toProto(message: BeamVerifier): Uint8Array;
    toProtoMsg(message: BeamVerifier): BeamVerifierProtoMsg;
};
export declare const BeamReward: {
    encode(message: BeamReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReward;
    fromPartial(object: DeepPartial<BeamReward>): BeamReward;
    fromAmino(object: BeamRewardAmino): BeamReward;
    toAmino(message: BeamReward): BeamRewardAmino;
    fromAminoMsg(object: BeamRewardAminoMsg): BeamReward;
    fromProtoMsg(message: BeamRewardProtoMsg): BeamReward;
    toProto(message: BeamReward): Uint8Array;
    toProtoMsg(message: BeamReward): BeamRewardProtoMsg;
};
export declare const BeamReward_BeamRewardDetails: {
    encode(message: BeamReward_BeamRewardDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReward_BeamRewardDetails;
    fromPartial(object: DeepPartial<BeamReward_BeamRewardDetails>): BeamReward_BeamRewardDetails;
    fromAmino(object: BeamReward_BeamRewardDetailsAmino): BeamReward_BeamRewardDetails;
    toAmino(message: BeamReward_BeamRewardDetails): BeamReward_BeamRewardDetailsAmino;
    fromAminoMsg(object: BeamReward_BeamRewardDetailsAminoMsg): BeamReward_BeamRewardDetails;
    fromProtoMsg(message: BeamReward_BeamRewardDetailsProtoMsg): BeamReward_BeamRewardDetails;
    toProto(message: BeamReward_BeamRewardDetails): Uint8Array;
    toProtoMsg(message: BeamReward_BeamRewardDetails): BeamReward_BeamRewardDetailsProtoMsg;
};
export declare const BeamMerchantReview: {
    encode(message: BeamMerchantReview, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeamMerchantReview;
    fromPartial(object: DeepPartial<BeamMerchantReview>): BeamMerchantReview;
    fromAmino(object: BeamMerchantReviewAmino): BeamMerchantReview;
    toAmino(message: BeamMerchantReview): BeamMerchantReviewAmino;
    fromAminoMsg(object: BeamMerchantReviewAminoMsg): BeamMerchantReview;
    fromProtoMsg(message: BeamMerchantReviewProtoMsg): BeamMerchantReview;
    toProto(message: BeamMerchantReview): Uint8Array;
    toProtoMsg(message: BeamMerchantReview): BeamMerchantReviewProtoMsg;
};
export declare const BeamMerchantReview_BeamMerchantReviewRating: {
    encode(message: BeamMerchantReview_BeamMerchantReviewRating, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeamMerchantReview_BeamMerchantReviewRating;
    fromPartial(object: DeepPartial<BeamMerchantReview_BeamMerchantReviewRating>): BeamMerchantReview_BeamMerchantReviewRating;
    fromAmino(object: BeamMerchantReview_BeamMerchantReviewRatingAmino): BeamMerchantReview_BeamMerchantReviewRating;
    toAmino(message: BeamMerchantReview_BeamMerchantReviewRating): BeamMerchantReview_BeamMerchantReviewRatingAmino;
    fromAminoMsg(object: BeamMerchantReview_BeamMerchantReviewRatingAminoMsg): BeamMerchantReview_BeamMerchantReviewRating;
    fromProtoMsg(message: BeamMerchantReview_BeamMerchantReviewRatingProtoMsg): BeamMerchantReview_BeamMerchantReviewRating;
    toProto(message: BeamMerchantReview_BeamMerchantReviewRating): Uint8Array;
    toProtoMsg(message: BeamMerchantReview_BeamMerchantReviewRating): BeamMerchantReview_BeamMerchantReviewRatingProtoMsg;
};
export declare const BeamMerchantReview_BeamMerchantReviewContent: {
    encode(message: BeamMerchantReview_BeamMerchantReviewContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeamMerchantReview_BeamMerchantReviewContent;
    fromPartial(object: DeepPartial<BeamMerchantReview_BeamMerchantReviewContent>): BeamMerchantReview_BeamMerchantReviewContent;
    fromAmino(object: BeamMerchantReview_BeamMerchantReviewContentAmino): BeamMerchantReview_BeamMerchantReviewContent;
    toAmino(message: BeamMerchantReview_BeamMerchantReviewContent): BeamMerchantReview_BeamMerchantReviewContentAmino;
    fromAminoMsg(object: BeamMerchantReview_BeamMerchantReviewContentAminoMsg): BeamMerchantReview_BeamMerchantReviewContent;
    fromProtoMsg(message: BeamMerchantReview_BeamMerchantReviewContentProtoMsg): BeamMerchantReview_BeamMerchantReviewContent;
    toProto(message: BeamMerchantReview_BeamMerchantReviewContent): Uint8Array;
    toProtoMsg(message: BeamMerchantReview_BeamMerchantReviewContent): BeamMerchantReview_BeamMerchantReviewContentProtoMsg;
};
export declare const BeamProductReview: {
    encode(message: BeamProductReview, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeamProductReview;
    fromPartial(object: DeepPartial<BeamProductReview>): BeamProductReview;
    fromAmino(object: BeamProductReviewAmino): BeamProductReview;
    toAmino(message: BeamProductReview): BeamProductReviewAmino;
    fromAminoMsg(object: BeamProductReviewAminoMsg): BeamProductReview;
    fromProtoMsg(message: BeamProductReviewProtoMsg): BeamProductReview;
    toProto(message: BeamProductReview): Uint8Array;
    toProtoMsg(message: BeamProductReview): BeamProductReviewProtoMsg;
};
export declare const BeamProductReview_BeamProductReviewRating: {
    encode(message: BeamProductReview_BeamProductReviewRating, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeamProductReview_BeamProductReviewRating;
    fromPartial(object: DeepPartial<BeamProductReview_BeamProductReviewRating>): BeamProductReview_BeamProductReviewRating;
    fromAmino(object: BeamProductReview_BeamProductReviewRatingAmino): BeamProductReview_BeamProductReviewRating;
    toAmino(message: BeamProductReview_BeamProductReviewRating): BeamProductReview_BeamProductReviewRatingAmino;
    fromAminoMsg(object: BeamProductReview_BeamProductReviewRatingAminoMsg): BeamProductReview_BeamProductReviewRating;
    fromProtoMsg(message: BeamProductReview_BeamProductReviewRatingProtoMsg): BeamProductReview_BeamProductReviewRating;
    toProto(message: BeamProductReview_BeamProductReviewRating): Uint8Array;
    toProtoMsg(message: BeamProductReview_BeamProductReviewRating): BeamProductReview_BeamProductReviewRatingProtoMsg;
};
export declare const BeamProductReview_BeamProductReviewContent: {
    encode(message: BeamProductReview_BeamProductReviewContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeamProductReview_BeamProductReviewContent;
    fromPartial(object: DeepPartial<BeamProductReview_BeamProductReviewContent>): BeamProductReview_BeamProductReviewContent;
    fromAmino(object: BeamProductReview_BeamProductReviewContentAmino): BeamProductReview_BeamProductReviewContent;
    toAmino(message: BeamProductReview_BeamProductReviewContent): BeamProductReview_BeamProductReviewContentAmino;
    fromAminoMsg(object: BeamProductReview_BeamProductReviewContentAminoMsg): BeamProductReview_BeamProductReviewContent;
    fromProtoMsg(message: BeamProductReview_BeamProductReviewContentProtoMsg): BeamProductReview_BeamProductReviewContent;
    toProto(message: BeamProductReview_BeamProductReviewContent): Uint8Array;
    toProtoMsg(message: BeamProductReview_BeamProductReviewContent): BeamProductReview_BeamProductReviewContentProtoMsg;
};
export declare const BeamProductReview_BeamProduct: {
    encode(message: BeamProductReview_BeamProduct, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeamProductReview_BeamProduct;
    fromPartial(object: DeepPartial<BeamProductReview_BeamProduct>): BeamProductReview_BeamProduct;
    fromAmino(object: BeamProductReview_BeamProductAmino): BeamProductReview_BeamProduct;
    toAmino(message: BeamProductReview_BeamProduct): BeamProductReview_BeamProductAmino;
    fromAminoMsg(object: BeamProductReview_BeamProductAminoMsg): BeamProductReview_BeamProduct;
    fromProtoMsg(message: BeamProductReview_BeamProductProtoMsg): BeamProductReview_BeamProduct;
    toProto(message: BeamProductReview_BeamProduct): Uint8Array;
    toProtoMsg(message: BeamProductReview_BeamProduct): BeamProductReview_BeamProductProtoMsg;
};
export declare const BeamProductReview_BeamProduct_BeamProductIds: {
    encode(message: BeamProductReview_BeamProduct_BeamProductIds, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeamProductReview_BeamProduct_BeamProductIds;
    fromPartial(object: DeepPartial<BeamProductReview_BeamProduct_BeamProductIds>): BeamProductReview_BeamProduct_BeamProductIds;
    fromAmino(object: BeamProductReview_BeamProduct_BeamProductIdsAmino): BeamProductReview_BeamProduct_BeamProductIds;
    toAmino(message: BeamProductReview_BeamProduct_BeamProductIds): BeamProductReview_BeamProduct_BeamProductIdsAmino;
    fromAminoMsg(object: BeamProductReview_BeamProduct_BeamProductIdsAminoMsg): BeamProductReview_BeamProduct_BeamProductIds;
    fromProtoMsg(message: BeamProductReview_BeamProduct_BeamProductIdsProtoMsg): BeamProductReview_BeamProduct_BeamProductIds;
    toProto(message: BeamProductReview_BeamProduct_BeamProductIds): Uint8Array;
    toProtoMsg(message: BeamProductReview_BeamProduct_BeamProductIds): BeamProductReview_BeamProduct_BeamProductIdsProtoMsg;
};
export declare const BeamData: {
    encode(message: BeamData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeamData;
    fromPartial(object: DeepPartial<BeamData>): BeamData;
    fromAmino(object: BeamDataAmino): BeamData;
    toAmino(message: BeamData): BeamDataAmino;
    fromAminoMsg(object: BeamDataAminoMsg): BeamData;
    fromProtoMsg(message: BeamDataProtoMsg): BeamData;
    toProto(message: BeamData): Uint8Array;
    toProtoMsg(message: BeamData): BeamDataProtoMsg;
};
export declare const Beam: {
    encode(message: Beam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Beam;
    fromPartial(object: DeepPartial<Beam>): Beam;
    fromAmino(object: BeamAmino): Beam;
    toAmino(message: Beam): BeamAmino;
    fromAminoMsg(object: BeamAminoMsg): Beam;
    fromProtoMsg(message: BeamProtoMsg): Beam;
    toProto(message: Beam): Uint8Array;
    toProtoMsg(message: Beam): BeamProtoMsg;
};
