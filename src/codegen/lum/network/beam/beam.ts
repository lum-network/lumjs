import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
export enum BeamState {
  UNSPECIFIED = 0,
  OPEN = 1,
  CANCELED = 2,
  CLOSED = 3,
  UNRECOGNIZED = -1,
}
export const BeamStateSDKType = BeamState;
export const BeamStateAmino = BeamState;
export function beamStateFromJSON(object: any): BeamState {
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
export function beamStateToJSON(object: BeamState): string {
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
  mimetype?: string;
  url?: string;
  thumbnail_url?: string;
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
  reviewer_id?: string;
  name?: string;
  is_anonymous?: boolean;
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
  name?: string;
  url?: string;
  signature?: string;
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
  trigger?: string;
  amount?: number;
  max_amount?: number;
  currency?: string;
  status?: string;
  details?: BeamReward_BeamRewardDetailsAmino[];
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
  type?: string;
  amount?: number;
  max_amount?: number;
  status?: string;
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
  ratings?: BeamMerchantReview_BeamMerchantReviewRating | undefined;
  title: string;
  content?: BeamMerchantReview_BeamMerchantReviewContent | undefined;
}
export interface BeamMerchantReviewProtoMsg {
  typeUrl: "/lum.network.beam.BeamMerchantReview";
  value: Uint8Array;
}
export interface BeamMerchantReviewAmino {
  order_id?: string;
  review_id?: string;
  merchant_url?: string;
  rating_url?: string;
  review_url?: string;
  collection_method?: string;
  timestamp?: string;
  ratings?: BeamMerchantReview_BeamMerchantReviewRatingAmino | undefined;
  title?: string;
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
  ratings?: BeamMerchantReview_BeamMerchantReviewRatingSDKType | undefined;
  title: string;
  content?: BeamMerchantReview_BeamMerchantReviewContentSDKType | undefined;
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
  overall?: number;
  customer_service?: number;
  nps?: number;
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
  overall?: string;
  customer_service?: string;
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
  ratings?: BeamProductReview_BeamProductReviewRating | undefined;
  title: string;
  content?: BeamProductReview_BeamProductReviewContent | undefined;
  medias: BeamMedia[];
  products: BeamProductReview_BeamProduct[];
}
export interface BeamProductReviewProtoMsg {
  typeUrl: "/lum.network.beam.BeamProductReview";
  value: Uint8Array;
}
export interface BeamProductReviewAmino {
  order_id?: string;
  review_id?: string;
  rating_url?: string;
  review_url?: string;
  collection_method?: string;
  timestamp?: string;
  ratings?: BeamProductReview_BeamProductReviewRatingAmino | undefined;
  title?: string;
  content?: BeamProductReview_BeamProductReviewContentAmino | undefined;
  medias?: BeamMediaAmino[];
  products?: BeamProductReview_BeamProductAmino[];
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
  ratings?: BeamProductReview_BeamProductReviewRatingSDKType | undefined;
  title: string;
  content?: BeamProductReview_BeamProductReviewContentSDKType | undefined;
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
  overall?: number;
  quality?: number;
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
  overall?: string;
  pros?: string;
  cons?: string;
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
  ids?: BeamProductReview_BeamProduct_BeamProductIds | undefined;
}
export interface BeamProductReview_BeamProductProtoMsg {
  typeUrl: "/lum.network.beam.BeamProduct";
  value: Uint8Array;
}
export interface BeamProductReview_BeamProductAmino {
  name?: string;
  url?: string;
  urls?: string[];
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
  ids?: BeamProductReview_BeamProduct_BeamProductIdsSDKType | undefined;
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
  gtins?: string[];
  mpns?: string[];
  skus?: string[];
  asins?: string[];
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
  reward?: BeamReward | undefined;
  verifier?: BeamVerifier | undefined;
  reviewer?: BeamReviewer | undefined;
  merchantReview?: BeamMerchantReview | undefined;
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
  products_reviews?: BeamProductReviewAmino[];
}
export interface BeamDataAminoMsg {
  type: "/lum.network.beam.BeamData";
  value: BeamDataAmino;
}
export interface BeamDataSDKType {
  reward?: BeamRewardSDKType | undefined;
  verifier?: BeamVerifierSDKType | undefined;
  reviewer?: BeamReviewerSDKType | undefined;
  merchant_review?: BeamMerchantReviewSDKType | undefined;
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
  data?: BeamData | undefined;
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
  creator_address?: string;
  id?: string;
  amount?: CoinAmino | undefined;
  status?: BeamState;
  secret?: string;
  claim_address?: string;
  funds_withdrawn?: boolean;
  claimed?: boolean;
  cancel_reason?: string;
  hide_content?: boolean;
  schema?: string;
  data?: BeamDataAmino | undefined;
  claim_expires_at_block?: number;
  closes_at_block?: number;
  created_at?: string | undefined;
  closed_at?: string | undefined;
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
  data?: BeamDataSDKType | undefined;
  claim_expires_at_block: number;
  closes_at_block: number;
  created_at: Date | undefined;
  closed_at: Date | undefined;
}
function createBaseBeamMedia(): BeamMedia {
  return {
    mimetype: "",
    url: "",
    thumbnailUrl: ""
  };
}
export const BeamMedia = {
  typeUrl: "/lum.network.beam.BeamMedia",
  encode(message: BeamMedia, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): BeamMedia {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<BeamMedia>): BeamMedia {
    const message = createBaseBeamMedia();
    message.mimetype = object.mimetype ?? "";
    message.url = object.url ?? "";
    message.thumbnailUrl = object.thumbnailUrl ?? "";
    return message;
  },
  fromAmino(object: BeamMediaAmino): BeamMedia {
    const message = createBaseBeamMedia();
    if (object.mimetype !== undefined && object.mimetype !== null) {
      message.mimetype = object.mimetype;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.thumbnail_url !== undefined && object.thumbnail_url !== null) {
      message.thumbnailUrl = object.thumbnail_url;
    }
    return message;
  },
  toAmino(message: BeamMedia): BeamMediaAmino {
    const obj: any = {};
    obj.mimetype = message.mimetype === "" ? undefined : message.mimetype;
    obj.url = message.url === "" ? undefined : message.url;
    obj.thumbnail_url = message.thumbnailUrl === "" ? undefined : message.thumbnailUrl;
    return obj;
  },
  fromAminoMsg(object: BeamMediaAminoMsg): BeamMedia {
    return BeamMedia.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamMediaProtoMsg): BeamMedia {
    return BeamMedia.decode(message.value);
  },
  toProto(message: BeamMedia): Uint8Array {
    return BeamMedia.encode(message).finish();
  },
  toProtoMsg(message: BeamMedia): BeamMediaProtoMsg {
    return {
      typeUrl: "/lum.network.beam.BeamMedia",
      value: BeamMedia.encode(message).finish()
    };
  }
};
function createBaseBeamReviewer(): BeamReviewer {
  return {
    reviewerId: "",
    name: "",
    isAnonymous: false
  };
}
export const BeamReviewer = {
  typeUrl: "/lum.network.beam.BeamReviewer",
  encode(message: BeamReviewer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): BeamReviewer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<BeamReviewer>): BeamReviewer {
    const message = createBaseBeamReviewer();
    message.reviewerId = object.reviewerId ?? "";
    message.name = object.name ?? "";
    message.isAnonymous = object.isAnonymous ?? false;
    return message;
  },
  fromAmino(object: BeamReviewerAmino): BeamReviewer {
    const message = createBaseBeamReviewer();
    if (object.reviewer_id !== undefined && object.reviewer_id !== null) {
      message.reviewerId = object.reviewer_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.is_anonymous !== undefined && object.is_anonymous !== null) {
      message.isAnonymous = object.is_anonymous;
    }
    return message;
  },
  toAmino(message: BeamReviewer): BeamReviewerAmino {
    const obj: any = {};
    obj.reviewer_id = message.reviewerId === "" ? undefined : message.reviewerId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.is_anonymous = message.isAnonymous === false ? undefined : message.isAnonymous;
    return obj;
  },
  fromAminoMsg(object: BeamReviewerAminoMsg): BeamReviewer {
    return BeamReviewer.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamReviewerProtoMsg): BeamReviewer {
    return BeamReviewer.decode(message.value);
  },
  toProto(message: BeamReviewer): Uint8Array {
    return BeamReviewer.encode(message).finish();
  },
  toProtoMsg(message: BeamReviewer): BeamReviewerProtoMsg {
    return {
      typeUrl: "/lum.network.beam.BeamReviewer",
      value: BeamReviewer.encode(message).finish()
    };
  }
};
function createBaseBeamVerifier(): BeamVerifier {
  return {
    name: "",
    url: "",
    signature: ""
  };
}
export const BeamVerifier = {
  typeUrl: "/lum.network.beam.BeamVerifier",
  encode(message: BeamVerifier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): BeamVerifier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<BeamVerifier>): BeamVerifier {
    const message = createBaseBeamVerifier();
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
  fromAmino(object: BeamVerifierAmino): BeamVerifier {
    const message = createBaseBeamVerifier();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    }
    return message;
  },
  toAmino(message: BeamVerifier): BeamVerifierAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.url = message.url === "" ? undefined : message.url;
    obj.signature = message.signature === "" ? undefined : message.signature;
    return obj;
  },
  fromAminoMsg(object: BeamVerifierAminoMsg): BeamVerifier {
    return BeamVerifier.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamVerifierProtoMsg): BeamVerifier {
    return BeamVerifier.decode(message.value);
  },
  toProto(message: BeamVerifier): Uint8Array {
    return BeamVerifier.encode(message).finish();
  },
  toProtoMsg(message: BeamVerifier): BeamVerifierProtoMsg {
    return {
      typeUrl: "/lum.network.beam.BeamVerifier",
      value: BeamVerifier.encode(message).finish()
    };
  }
};
function createBaseBeamReward(): BeamReward {
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
  typeUrl: "/lum.network.beam.BeamReward",
  encode(message: BeamReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      BeamReward_BeamRewardDetails.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeamReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<BeamReward>): BeamReward {
    const message = createBaseBeamReward();
    message.trigger = object.trigger ?? "";
    message.amount = object.amount ?? 0;
    message.maxAmount = object.maxAmount ?? 0;
    message.currency = object.currency ?? "";
    message.status = object.status ?? "";
    message.details = object.details?.map(e => BeamReward_BeamRewardDetails.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BeamRewardAmino): BeamReward {
    const message = createBaseBeamReward();
    if (object.trigger !== undefined && object.trigger !== null) {
      message.trigger = object.trigger;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.max_amount !== undefined && object.max_amount !== null) {
      message.maxAmount = object.max_amount;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = object.currency;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    message.details = object.details?.map(e => BeamReward_BeamRewardDetails.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BeamReward): BeamRewardAmino {
    const obj: any = {};
    obj.trigger = message.trigger === "" ? undefined : message.trigger;
    obj.amount = message.amount === 0 ? undefined : message.amount;
    obj.max_amount = message.maxAmount === 0 ? undefined : message.maxAmount;
    obj.currency = message.currency === "" ? undefined : message.currency;
    obj.status = message.status === "" ? undefined : message.status;
    if (message.details) {
      obj.details = message.details.map(e => e ? BeamReward_BeamRewardDetails.toAmino(e) : undefined);
    } else {
      obj.details = message.details;
    }
    return obj;
  },
  fromAminoMsg(object: BeamRewardAminoMsg): BeamReward {
    return BeamReward.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamRewardProtoMsg): BeamReward {
    return BeamReward.decode(message.value);
  },
  toProto(message: BeamReward): Uint8Array {
    return BeamReward.encode(message).finish();
  },
  toProtoMsg(message: BeamReward): BeamRewardProtoMsg {
    return {
      typeUrl: "/lum.network.beam.BeamReward",
      value: BeamReward.encode(message).finish()
    };
  }
};
function createBaseBeamReward_BeamRewardDetails(): BeamReward_BeamRewardDetails {
  return {
    type: "",
    amount: 0,
    maxAmount: 0,
    status: ""
  };
}
export const BeamReward_BeamRewardDetails = {
  typeUrl: "/lum.network.beam.BeamRewardDetails",
  encode(message: BeamReward_BeamRewardDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): BeamReward_BeamRewardDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<BeamReward_BeamRewardDetails>): BeamReward_BeamRewardDetails {
    const message = createBaseBeamReward_BeamRewardDetails();
    message.type = object.type ?? "";
    message.amount = object.amount ?? 0;
    message.maxAmount = object.maxAmount ?? 0;
    message.status = object.status ?? "";
    return message;
  },
  fromAmino(object: BeamReward_BeamRewardDetailsAmino): BeamReward_BeamRewardDetails {
    const message = createBaseBeamReward_BeamRewardDetails();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.max_amount !== undefined && object.max_amount !== null) {
      message.maxAmount = object.max_amount;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: BeamReward_BeamRewardDetails): BeamReward_BeamRewardDetailsAmino {
    const obj: any = {};
    obj.type = message.type === "" ? undefined : message.type;
    obj.amount = message.amount === 0 ? undefined : message.amount;
    obj.max_amount = message.maxAmount === 0 ? undefined : message.maxAmount;
    obj.status = message.status === "" ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: BeamReward_BeamRewardDetailsAminoMsg): BeamReward_BeamRewardDetails {
    return BeamReward_BeamRewardDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamReward_BeamRewardDetailsProtoMsg): BeamReward_BeamRewardDetails {
    return BeamReward_BeamRewardDetails.decode(message.value);
  },
  toProto(message: BeamReward_BeamRewardDetails): Uint8Array {
    return BeamReward_BeamRewardDetails.encode(message).finish();
  },
  toProtoMsg(message: BeamReward_BeamRewardDetails): BeamReward_BeamRewardDetailsProtoMsg {
    return {
      typeUrl: "/lum.network.beam.BeamRewardDetails",
      value: BeamReward_BeamRewardDetails.encode(message).finish()
    };
  }
};
function createBaseBeamMerchantReview(): BeamMerchantReview {
  return {
    orderId: "",
    reviewId: "",
    merchantUrl: "",
    ratingUrl: "",
    reviewUrl: "",
    collectionMethod: "",
    timestamp: "",
    ratings: undefined,
    title: "",
    content: undefined
  };
}
export const BeamMerchantReview = {
  typeUrl: "/lum.network.beam.BeamMerchantReview",
  encode(message: BeamMerchantReview, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): BeamMerchantReview {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<BeamMerchantReview>): BeamMerchantReview {
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
  fromAmino(object: BeamMerchantReviewAmino): BeamMerchantReview {
    const message = createBaseBeamMerchantReview();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = object.order_id;
    }
    if (object.review_id !== undefined && object.review_id !== null) {
      message.reviewId = object.review_id;
    }
    if (object.merchant_url !== undefined && object.merchant_url !== null) {
      message.merchantUrl = object.merchant_url;
    }
    if (object.rating_url !== undefined && object.rating_url !== null) {
      message.ratingUrl = object.rating_url;
    }
    if (object.review_url !== undefined && object.review_url !== null) {
      message.reviewUrl = object.review_url;
    }
    if (object.collection_method !== undefined && object.collection_method !== null) {
      message.collectionMethod = object.collection_method;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    }
    if (object.ratings !== undefined && object.ratings !== null) {
      message.ratings = BeamMerchantReview_BeamMerchantReviewRating.fromAmino(object.ratings);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = BeamMerchantReview_BeamMerchantReviewContent.fromAmino(object.content);
    }
    return message;
  },
  toAmino(message: BeamMerchantReview): BeamMerchantReviewAmino {
    const obj: any = {};
    obj.order_id = message.orderId === "" ? undefined : message.orderId;
    obj.review_id = message.reviewId === "" ? undefined : message.reviewId;
    obj.merchant_url = message.merchantUrl === "" ? undefined : message.merchantUrl;
    obj.rating_url = message.ratingUrl === "" ? undefined : message.ratingUrl;
    obj.review_url = message.reviewUrl === "" ? undefined : message.reviewUrl;
    obj.collection_method = message.collectionMethod === "" ? undefined : message.collectionMethod;
    obj.timestamp = message.timestamp === "" ? undefined : message.timestamp;
    obj.ratings = message.ratings ? BeamMerchantReview_BeamMerchantReviewRating.toAmino(message.ratings) : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    obj.content = message.content ? BeamMerchantReview_BeamMerchantReviewContent.toAmino(message.content) : undefined;
    return obj;
  },
  fromAminoMsg(object: BeamMerchantReviewAminoMsg): BeamMerchantReview {
    return BeamMerchantReview.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamMerchantReviewProtoMsg): BeamMerchantReview {
    return BeamMerchantReview.decode(message.value);
  },
  toProto(message: BeamMerchantReview): Uint8Array {
    return BeamMerchantReview.encode(message).finish();
  },
  toProtoMsg(message: BeamMerchantReview): BeamMerchantReviewProtoMsg {
    return {
      typeUrl: "/lum.network.beam.BeamMerchantReview",
      value: BeamMerchantReview.encode(message).finish()
    };
  }
};
function createBaseBeamMerchantReview_BeamMerchantReviewRating(): BeamMerchantReview_BeamMerchantReviewRating {
  return {
    overall: 0,
    customerService: 0,
    nps: 0
  };
}
export const BeamMerchantReview_BeamMerchantReviewRating = {
  typeUrl: "/lum.network.beam.BeamMerchantReviewRating",
  encode(message: BeamMerchantReview_BeamMerchantReviewRating, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): BeamMerchantReview_BeamMerchantReviewRating {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<BeamMerchantReview_BeamMerchantReviewRating>): BeamMerchantReview_BeamMerchantReviewRating {
    const message = createBaseBeamMerchantReview_BeamMerchantReviewRating();
    message.overall = object.overall ?? 0;
    message.customerService = object.customerService ?? 0;
    message.nps = object.nps ?? 0;
    return message;
  },
  fromAmino(object: BeamMerchantReview_BeamMerchantReviewRatingAmino): BeamMerchantReview_BeamMerchantReviewRating {
    const message = createBaseBeamMerchantReview_BeamMerchantReviewRating();
    if (object.overall !== undefined && object.overall !== null) {
      message.overall = object.overall;
    }
    if (object.customer_service !== undefined && object.customer_service !== null) {
      message.customerService = object.customer_service;
    }
    if (object.nps !== undefined && object.nps !== null) {
      message.nps = object.nps;
    }
    return message;
  },
  toAmino(message: BeamMerchantReview_BeamMerchantReviewRating): BeamMerchantReview_BeamMerchantReviewRatingAmino {
    const obj: any = {};
    obj.overall = message.overall === 0 ? undefined : message.overall;
    obj.customer_service = message.customerService === 0 ? undefined : message.customerService;
    obj.nps = message.nps === 0 ? undefined : message.nps;
    return obj;
  },
  fromAminoMsg(object: BeamMerchantReview_BeamMerchantReviewRatingAminoMsg): BeamMerchantReview_BeamMerchantReviewRating {
    return BeamMerchantReview_BeamMerchantReviewRating.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamMerchantReview_BeamMerchantReviewRatingProtoMsg): BeamMerchantReview_BeamMerchantReviewRating {
    return BeamMerchantReview_BeamMerchantReviewRating.decode(message.value);
  },
  toProto(message: BeamMerchantReview_BeamMerchantReviewRating): Uint8Array {
    return BeamMerchantReview_BeamMerchantReviewRating.encode(message).finish();
  },
  toProtoMsg(message: BeamMerchantReview_BeamMerchantReviewRating): BeamMerchantReview_BeamMerchantReviewRatingProtoMsg {
    return {
      typeUrl: "/lum.network.beam.BeamMerchantReviewRating",
      value: BeamMerchantReview_BeamMerchantReviewRating.encode(message).finish()
    };
  }
};
function createBaseBeamMerchantReview_BeamMerchantReviewContent(): BeamMerchantReview_BeamMerchantReviewContent {
  return {
    overall: "",
    customerService: ""
  };
}
export const BeamMerchantReview_BeamMerchantReviewContent = {
  typeUrl: "/lum.network.beam.BeamMerchantReviewContent",
  encode(message: BeamMerchantReview_BeamMerchantReviewContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.overall !== "") {
      writer.uint32(10).string(message.overall);
    }
    if (message.customerService !== "") {
      writer.uint32(18).string(message.customerService);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeamMerchantReview_BeamMerchantReviewContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<BeamMerchantReview_BeamMerchantReviewContent>): BeamMerchantReview_BeamMerchantReviewContent {
    const message = createBaseBeamMerchantReview_BeamMerchantReviewContent();
    message.overall = object.overall ?? "";
    message.customerService = object.customerService ?? "";
    return message;
  },
  fromAmino(object: BeamMerchantReview_BeamMerchantReviewContentAmino): BeamMerchantReview_BeamMerchantReviewContent {
    const message = createBaseBeamMerchantReview_BeamMerchantReviewContent();
    if (object.overall !== undefined && object.overall !== null) {
      message.overall = object.overall;
    }
    if (object.customer_service !== undefined && object.customer_service !== null) {
      message.customerService = object.customer_service;
    }
    return message;
  },
  toAmino(message: BeamMerchantReview_BeamMerchantReviewContent): BeamMerchantReview_BeamMerchantReviewContentAmino {
    const obj: any = {};
    obj.overall = message.overall === "" ? undefined : message.overall;
    obj.customer_service = message.customerService === "" ? undefined : message.customerService;
    return obj;
  },
  fromAminoMsg(object: BeamMerchantReview_BeamMerchantReviewContentAminoMsg): BeamMerchantReview_BeamMerchantReviewContent {
    return BeamMerchantReview_BeamMerchantReviewContent.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamMerchantReview_BeamMerchantReviewContentProtoMsg): BeamMerchantReview_BeamMerchantReviewContent {
    return BeamMerchantReview_BeamMerchantReviewContent.decode(message.value);
  },
  toProto(message: BeamMerchantReview_BeamMerchantReviewContent): Uint8Array {
    return BeamMerchantReview_BeamMerchantReviewContent.encode(message).finish();
  },
  toProtoMsg(message: BeamMerchantReview_BeamMerchantReviewContent): BeamMerchantReview_BeamMerchantReviewContentProtoMsg {
    return {
      typeUrl: "/lum.network.beam.BeamMerchantReviewContent",
      value: BeamMerchantReview_BeamMerchantReviewContent.encode(message).finish()
    };
  }
};
function createBaseBeamProductReview(): BeamProductReview {
  return {
    orderId: "",
    reviewId: "",
    ratingUrl: "",
    reviewUrl: "",
    collectionMethod: "",
    timestamp: "",
    ratings: undefined,
    title: "",
    content: undefined,
    medias: [],
    products: []
  };
}
export const BeamProductReview = {
  typeUrl: "/lum.network.beam.BeamProductReview",
  encode(message: BeamProductReview, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      BeamMedia.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.products) {
      BeamProductReview_BeamProduct.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeamProductReview {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<BeamProductReview>): BeamProductReview {
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
  fromAmino(object: BeamProductReviewAmino): BeamProductReview {
    const message = createBaseBeamProductReview();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = object.order_id;
    }
    if (object.review_id !== undefined && object.review_id !== null) {
      message.reviewId = object.review_id;
    }
    if (object.rating_url !== undefined && object.rating_url !== null) {
      message.ratingUrl = object.rating_url;
    }
    if (object.review_url !== undefined && object.review_url !== null) {
      message.reviewUrl = object.review_url;
    }
    if (object.collection_method !== undefined && object.collection_method !== null) {
      message.collectionMethod = object.collection_method;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    }
    if (object.ratings !== undefined && object.ratings !== null) {
      message.ratings = BeamProductReview_BeamProductReviewRating.fromAmino(object.ratings);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = BeamProductReview_BeamProductReviewContent.fromAmino(object.content);
    }
    message.medias = object.medias?.map(e => BeamMedia.fromAmino(e)) || [];
    message.products = object.products?.map(e => BeamProductReview_BeamProduct.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BeamProductReview): BeamProductReviewAmino {
    const obj: any = {};
    obj.order_id = message.orderId === "" ? undefined : message.orderId;
    obj.review_id = message.reviewId === "" ? undefined : message.reviewId;
    obj.rating_url = message.ratingUrl === "" ? undefined : message.ratingUrl;
    obj.review_url = message.reviewUrl === "" ? undefined : message.reviewUrl;
    obj.collection_method = message.collectionMethod === "" ? undefined : message.collectionMethod;
    obj.timestamp = message.timestamp === "" ? undefined : message.timestamp;
    obj.ratings = message.ratings ? BeamProductReview_BeamProductReviewRating.toAmino(message.ratings) : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    obj.content = message.content ? BeamProductReview_BeamProductReviewContent.toAmino(message.content) : undefined;
    if (message.medias) {
      obj.medias = message.medias.map(e => e ? BeamMedia.toAmino(e) : undefined);
    } else {
      obj.medias = message.medias;
    }
    if (message.products) {
      obj.products = message.products.map(e => e ? BeamProductReview_BeamProduct.toAmino(e) : undefined);
    } else {
      obj.products = message.products;
    }
    return obj;
  },
  fromAminoMsg(object: BeamProductReviewAminoMsg): BeamProductReview {
    return BeamProductReview.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamProductReviewProtoMsg): BeamProductReview {
    return BeamProductReview.decode(message.value);
  },
  toProto(message: BeamProductReview): Uint8Array {
    return BeamProductReview.encode(message).finish();
  },
  toProtoMsg(message: BeamProductReview): BeamProductReviewProtoMsg {
    return {
      typeUrl: "/lum.network.beam.BeamProductReview",
      value: BeamProductReview.encode(message).finish()
    };
  }
};
function createBaseBeamProductReview_BeamProductReviewRating(): BeamProductReview_BeamProductReviewRating {
  return {
    overall: 0,
    quality: 0
  };
}
export const BeamProductReview_BeamProductReviewRating = {
  typeUrl: "/lum.network.beam.BeamProductReviewRating",
  encode(message: BeamProductReview_BeamProductReviewRating, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.overall !== 0) {
      writer.uint32(13).float(message.overall);
    }
    if (message.quality !== 0) {
      writer.uint32(21).float(message.quality);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeamProductReview_BeamProductReviewRating {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<BeamProductReview_BeamProductReviewRating>): BeamProductReview_BeamProductReviewRating {
    const message = createBaseBeamProductReview_BeamProductReviewRating();
    message.overall = object.overall ?? 0;
    message.quality = object.quality ?? 0;
    return message;
  },
  fromAmino(object: BeamProductReview_BeamProductReviewRatingAmino): BeamProductReview_BeamProductReviewRating {
    const message = createBaseBeamProductReview_BeamProductReviewRating();
    if (object.overall !== undefined && object.overall !== null) {
      message.overall = object.overall;
    }
    if (object.quality !== undefined && object.quality !== null) {
      message.quality = object.quality;
    }
    return message;
  },
  toAmino(message: BeamProductReview_BeamProductReviewRating): BeamProductReview_BeamProductReviewRatingAmino {
    const obj: any = {};
    obj.overall = message.overall === 0 ? undefined : message.overall;
    obj.quality = message.quality === 0 ? undefined : message.quality;
    return obj;
  },
  fromAminoMsg(object: BeamProductReview_BeamProductReviewRatingAminoMsg): BeamProductReview_BeamProductReviewRating {
    return BeamProductReview_BeamProductReviewRating.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamProductReview_BeamProductReviewRatingProtoMsg): BeamProductReview_BeamProductReviewRating {
    return BeamProductReview_BeamProductReviewRating.decode(message.value);
  },
  toProto(message: BeamProductReview_BeamProductReviewRating): Uint8Array {
    return BeamProductReview_BeamProductReviewRating.encode(message).finish();
  },
  toProtoMsg(message: BeamProductReview_BeamProductReviewRating): BeamProductReview_BeamProductReviewRatingProtoMsg {
    return {
      typeUrl: "/lum.network.beam.BeamProductReviewRating",
      value: BeamProductReview_BeamProductReviewRating.encode(message).finish()
    };
  }
};
function createBaseBeamProductReview_BeamProductReviewContent(): BeamProductReview_BeamProductReviewContent {
  return {
    overall: "",
    pros: "",
    cons: ""
  };
}
export const BeamProductReview_BeamProductReviewContent = {
  typeUrl: "/lum.network.beam.BeamProductReviewContent",
  encode(message: BeamProductReview_BeamProductReviewContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): BeamProductReview_BeamProductReviewContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<BeamProductReview_BeamProductReviewContent>): BeamProductReview_BeamProductReviewContent {
    const message = createBaseBeamProductReview_BeamProductReviewContent();
    message.overall = object.overall ?? "";
    message.pros = object.pros ?? "";
    message.cons = object.cons ?? "";
    return message;
  },
  fromAmino(object: BeamProductReview_BeamProductReviewContentAmino): BeamProductReview_BeamProductReviewContent {
    const message = createBaseBeamProductReview_BeamProductReviewContent();
    if (object.overall !== undefined && object.overall !== null) {
      message.overall = object.overall;
    }
    if (object.pros !== undefined && object.pros !== null) {
      message.pros = object.pros;
    }
    if (object.cons !== undefined && object.cons !== null) {
      message.cons = object.cons;
    }
    return message;
  },
  toAmino(message: BeamProductReview_BeamProductReviewContent): BeamProductReview_BeamProductReviewContentAmino {
    const obj: any = {};
    obj.overall = message.overall === "" ? undefined : message.overall;
    obj.pros = message.pros === "" ? undefined : message.pros;
    obj.cons = message.cons === "" ? undefined : message.cons;
    return obj;
  },
  fromAminoMsg(object: BeamProductReview_BeamProductReviewContentAminoMsg): BeamProductReview_BeamProductReviewContent {
    return BeamProductReview_BeamProductReviewContent.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamProductReview_BeamProductReviewContentProtoMsg): BeamProductReview_BeamProductReviewContent {
    return BeamProductReview_BeamProductReviewContent.decode(message.value);
  },
  toProto(message: BeamProductReview_BeamProductReviewContent): Uint8Array {
    return BeamProductReview_BeamProductReviewContent.encode(message).finish();
  },
  toProtoMsg(message: BeamProductReview_BeamProductReviewContent): BeamProductReview_BeamProductReviewContentProtoMsg {
    return {
      typeUrl: "/lum.network.beam.BeamProductReviewContent",
      value: BeamProductReview_BeamProductReviewContent.encode(message).finish()
    };
  }
};
function createBaseBeamProductReview_BeamProduct(): BeamProductReview_BeamProduct {
  return {
    name: "",
    url: "",
    urls: [],
    ids: undefined
  };
}
export const BeamProductReview_BeamProduct = {
  typeUrl: "/lum.network.beam.BeamProduct",
  encode(message: BeamProductReview_BeamProduct, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    for (const v of message.urls) {
      writer.uint32(26).string(v!);
    }
    if (message.ids !== undefined) {
      BeamProductReview_BeamProduct_BeamProductIds.encode(message.ids, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeamProductReview_BeamProduct {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<BeamProductReview_BeamProduct>): BeamProductReview_BeamProduct {
    const message = createBaseBeamProductReview_BeamProduct();
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    message.urls = object.urls?.map(e => e) || [];
    message.ids = object.ids !== undefined && object.ids !== null ? BeamProductReview_BeamProduct_BeamProductIds.fromPartial(object.ids) : undefined;
    return message;
  },
  fromAmino(object: BeamProductReview_BeamProductAmino): BeamProductReview_BeamProduct {
    const message = createBaseBeamProductReview_BeamProduct();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    message.urls = object.urls?.map(e => e) || [];
    if (object.ids !== undefined && object.ids !== null) {
      message.ids = BeamProductReview_BeamProduct_BeamProductIds.fromAmino(object.ids);
    }
    return message;
  },
  toAmino(message: BeamProductReview_BeamProduct): BeamProductReview_BeamProductAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.url = message.url === "" ? undefined : message.url;
    if (message.urls) {
      obj.urls = message.urls.map(e => e);
    } else {
      obj.urls = message.urls;
    }
    obj.ids = message.ids ? BeamProductReview_BeamProduct_BeamProductIds.toAmino(message.ids) : undefined;
    return obj;
  },
  fromAminoMsg(object: BeamProductReview_BeamProductAminoMsg): BeamProductReview_BeamProduct {
    return BeamProductReview_BeamProduct.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamProductReview_BeamProductProtoMsg): BeamProductReview_BeamProduct {
    return BeamProductReview_BeamProduct.decode(message.value);
  },
  toProto(message: BeamProductReview_BeamProduct): Uint8Array {
    return BeamProductReview_BeamProduct.encode(message).finish();
  },
  toProtoMsg(message: BeamProductReview_BeamProduct): BeamProductReview_BeamProductProtoMsg {
    return {
      typeUrl: "/lum.network.beam.BeamProduct",
      value: BeamProductReview_BeamProduct.encode(message).finish()
    };
  }
};
function createBaseBeamProductReview_BeamProduct_BeamProductIds(): BeamProductReview_BeamProduct_BeamProductIds {
  return {
    gtins: [],
    mpns: [],
    skus: [],
    asins: []
  };
}
export const BeamProductReview_BeamProduct_BeamProductIds = {
  typeUrl: "/lum.network.beam.BeamProductIds",
  encode(message: BeamProductReview_BeamProduct_BeamProductIds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.gtins) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.mpns) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.skus) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.asins) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeamProductReview_BeamProduct_BeamProductIds {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<BeamProductReview_BeamProduct_BeamProductIds>): BeamProductReview_BeamProduct_BeamProductIds {
    const message = createBaseBeamProductReview_BeamProduct_BeamProductIds();
    message.gtins = object.gtins?.map(e => e) || [];
    message.mpns = object.mpns?.map(e => e) || [];
    message.skus = object.skus?.map(e => e) || [];
    message.asins = object.asins?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BeamProductReview_BeamProduct_BeamProductIdsAmino): BeamProductReview_BeamProduct_BeamProductIds {
    const message = createBaseBeamProductReview_BeamProduct_BeamProductIds();
    message.gtins = object.gtins?.map(e => e) || [];
    message.mpns = object.mpns?.map(e => e) || [];
    message.skus = object.skus?.map(e => e) || [];
    message.asins = object.asins?.map(e => e) || [];
    return message;
  },
  toAmino(message: BeamProductReview_BeamProduct_BeamProductIds): BeamProductReview_BeamProduct_BeamProductIdsAmino {
    const obj: any = {};
    if (message.gtins) {
      obj.gtins = message.gtins.map(e => e);
    } else {
      obj.gtins = message.gtins;
    }
    if (message.mpns) {
      obj.mpns = message.mpns.map(e => e);
    } else {
      obj.mpns = message.mpns;
    }
    if (message.skus) {
      obj.skus = message.skus.map(e => e);
    } else {
      obj.skus = message.skus;
    }
    if (message.asins) {
      obj.asins = message.asins.map(e => e);
    } else {
      obj.asins = message.asins;
    }
    return obj;
  },
  fromAminoMsg(object: BeamProductReview_BeamProduct_BeamProductIdsAminoMsg): BeamProductReview_BeamProduct_BeamProductIds {
    return BeamProductReview_BeamProduct_BeamProductIds.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamProductReview_BeamProduct_BeamProductIdsProtoMsg): BeamProductReview_BeamProduct_BeamProductIds {
    return BeamProductReview_BeamProduct_BeamProductIds.decode(message.value);
  },
  toProto(message: BeamProductReview_BeamProduct_BeamProductIds): Uint8Array {
    return BeamProductReview_BeamProduct_BeamProductIds.encode(message).finish();
  },
  toProtoMsg(message: BeamProductReview_BeamProduct_BeamProductIds): BeamProductReview_BeamProduct_BeamProductIdsProtoMsg {
    return {
      typeUrl: "/lum.network.beam.BeamProductIds",
      value: BeamProductReview_BeamProduct_BeamProductIds.encode(message).finish()
    };
  }
};
function createBaseBeamData(): BeamData {
  return {
    reward: undefined,
    verifier: undefined,
    reviewer: undefined,
    merchantReview: undefined,
    productsReviews: []
  };
}
export const BeamData = {
  typeUrl: "/lum.network.beam.BeamData",
  encode(message: BeamData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      BeamProductReview.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeamData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<BeamData>): BeamData {
    const message = createBaseBeamData();
    message.reward = object.reward !== undefined && object.reward !== null ? BeamReward.fromPartial(object.reward) : undefined;
    message.verifier = object.verifier !== undefined && object.verifier !== null ? BeamVerifier.fromPartial(object.verifier) : undefined;
    message.reviewer = object.reviewer !== undefined && object.reviewer !== null ? BeamReviewer.fromPartial(object.reviewer) : undefined;
    message.merchantReview = object.merchantReview !== undefined && object.merchantReview !== null ? BeamMerchantReview.fromPartial(object.merchantReview) : undefined;
    message.productsReviews = object.productsReviews?.map(e => BeamProductReview.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BeamDataAmino): BeamData {
    const message = createBaseBeamData();
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = BeamReward.fromAmino(object.reward);
    }
    if (object.verifier !== undefined && object.verifier !== null) {
      message.verifier = BeamVerifier.fromAmino(object.verifier);
    }
    if (object.reviewer !== undefined && object.reviewer !== null) {
      message.reviewer = BeamReviewer.fromAmino(object.reviewer);
    }
    if (object.merchant_review !== undefined && object.merchant_review !== null) {
      message.merchantReview = BeamMerchantReview.fromAmino(object.merchant_review);
    }
    message.productsReviews = object.products_reviews?.map(e => BeamProductReview.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BeamData): BeamDataAmino {
    const obj: any = {};
    obj.reward = message.reward ? BeamReward.toAmino(message.reward) : undefined;
    obj.verifier = message.verifier ? BeamVerifier.toAmino(message.verifier) : undefined;
    obj.reviewer = message.reviewer ? BeamReviewer.toAmino(message.reviewer) : undefined;
    obj.merchant_review = message.merchantReview ? BeamMerchantReview.toAmino(message.merchantReview) : undefined;
    if (message.productsReviews) {
      obj.products_reviews = message.productsReviews.map(e => e ? BeamProductReview.toAmino(e) : undefined);
    } else {
      obj.products_reviews = message.productsReviews;
    }
    return obj;
  },
  fromAminoMsg(object: BeamDataAminoMsg): BeamData {
    return BeamData.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamDataProtoMsg): BeamData {
    return BeamData.decode(message.value);
  },
  toProto(message: BeamData): Uint8Array {
    return BeamData.encode(message).finish();
  },
  toProtoMsg(message: BeamData): BeamDataProtoMsg {
    return {
      typeUrl: "/lum.network.beam.BeamData",
      value: BeamData.encode(message).finish()
    };
  }
};
function createBaseBeam(): Beam {
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
    data: undefined,
    claimExpiresAtBlock: 0,
    closesAtBlock: 0,
    createdAt: new Date(),
    closedAt: new Date()
  };
}
export const Beam = {
  typeUrl: "/lum.network.beam.Beam",
  encode(message: Beam, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Beam {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.status = (reader.int32() as any);
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
  fromPartial(object: Partial<Beam>): Beam {
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
  fromAmino(object: BeamAmino): Beam {
    const message = createBaseBeam();
    if (object.creator_address !== undefined && object.creator_address !== null) {
      message.creatorAddress = object.creator_address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = object.secret;
    }
    if (object.claim_address !== undefined && object.claim_address !== null) {
      message.claimAddress = object.claim_address;
    }
    if (object.funds_withdrawn !== undefined && object.funds_withdrawn !== null) {
      message.fundsWithdrawn = object.funds_withdrawn;
    }
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    if (object.cancel_reason !== undefined && object.cancel_reason !== null) {
      message.cancelReason = object.cancel_reason;
    }
    if (object.hide_content !== undefined && object.hide_content !== null) {
      message.hideContent = object.hide_content;
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = object.schema;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = BeamData.fromAmino(object.data);
    }
    if (object.claim_expires_at_block !== undefined && object.claim_expires_at_block !== null) {
      message.claimExpiresAtBlock = object.claim_expires_at_block;
    }
    if (object.closes_at_block !== undefined && object.closes_at_block !== null) {
      message.closesAtBlock = object.closes_at_block;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
    }
    if (object.closed_at !== undefined && object.closed_at !== null) {
      message.closedAt = fromTimestamp(Timestamp.fromAmino(object.closed_at));
    }
    return message;
  },
  toAmino(message: Beam): BeamAmino {
    const obj: any = {};
    obj.creator_address = message.creatorAddress === "" ? undefined : message.creatorAddress;
    obj.id = message.id === "" ? undefined : message.id;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.secret = message.secret === "" ? undefined : message.secret;
    obj.claim_address = message.claimAddress === "" ? undefined : message.claimAddress;
    obj.funds_withdrawn = message.fundsWithdrawn === false ? undefined : message.fundsWithdrawn;
    obj.claimed = message.claimed === false ? undefined : message.claimed;
    obj.cancel_reason = message.cancelReason === "" ? undefined : message.cancelReason;
    obj.hide_content = message.hideContent === false ? undefined : message.hideContent;
    obj.schema = message.schema === "" ? undefined : message.schema;
    obj.data = message.data ? BeamData.toAmino(message.data) : undefined;
    obj.claim_expires_at_block = message.claimExpiresAtBlock === 0 ? undefined : message.claimExpiresAtBlock;
    obj.closes_at_block = message.closesAtBlock === 0 ? undefined : message.closesAtBlock;
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    obj.closed_at = message.closedAt ? Timestamp.toAmino(toTimestamp(message.closedAt)) : undefined;
    return obj;
  },
  fromAminoMsg(object: BeamAminoMsg): Beam {
    return Beam.fromAmino(object.value);
  },
  fromProtoMsg(message: BeamProtoMsg): Beam {
    return Beam.decode(message.value);
  },
  toProto(message: Beam): Uint8Array {
    return Beam.encode(message).finish();
  },
  toProtoMsg(message: Beam): BeamProtoMsg {
    return {
      typeUrl: "/lum.network.beam.Beam",
      value: Beam.encode(message).finish()
    };
  }
};