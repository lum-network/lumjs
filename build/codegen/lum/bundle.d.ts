/// <reference types="long" />
import * as _137 from "./network/airdrop/claim";
import * as _138 from "./network/airdrop/genesis";
import * as _139 from "./network/airdrop/params";
import * as _140 from "./network/airdrop/query";
import * as _142 from "./network/beam/beam";
import * as _143 from "./network/beam/genesis";
import * as _144 from "./network/beam/query";
import * as _145 from "./network/beam/tx";
import * as _146 from "./network/dfract/deposit";
import * as _147 from "./network/dfract/genesis";
import * as _148 from "./network/dfract/gov";
import * as _149 from "./network/dfract/params";
import * as _150 from "./network/dfract/proposal";
import * as _151 from "./network/dfract/query";
import * as _152 from "./network/dfract/tx";
import * as _153 from "./network/icacallbacks/callback_data";
import * as _154 from "./network/icacallbacks/genesis";
import * as _155 from "./network/icacallbacks/packet";
import * as _156 from "./network/icacallbacks/params";
import * as _157 from "./network/icacallbacks/query";
import * as _159 from "./network/millions/callbacks";
import * as _160 from "./network/millions/deposit";
import * as _161 from "./network/millions/draw_schedule";
import * as _162 from "./network/millions/draw";
import * as _163 from "./network/millions/epoch";
import * as _164 from "./network/millions/genesis";
import * as _165 from "./network/millions/gov";
import * as _166 from "./network/millions/params";
import * as _167 from "./network/millions/pool";
import * as _168 from "./network/millions/prize_batch";
import * as _169 from "./network/millions/prize_ref";
import * as _170 from "./network/millions/prize_strategy";
import * as _171 from "./network/millions/prize";
import * as _172 from "./network/millions/query";
import * as _173 from "./network/millions/tx";
import * as _174 from "./network/millions/withdrawal";
import * as _260 from "./network/airdrop/query.rpc.Query";
import * as _261 from "./network/beam/query.rpc.Query";
import * as _262 from "./network/dfract/query.rpc.Query";
import * as _263 from "./network/icacallbacks/query.rpc.Query";
import * as _264 from "./network/millions/query.rpc.Query";
import * as _265 from "./network/beam/tx.rpc.msg";
import * as _266 from "./network/dfract/tx.rpc.msg";
import * as _267 from "./network/millions/tx.rpc.msg";
export declare namespace lum {
    namespace network {
        const airdrop: {
            QueryClientImpl: typeof _260.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                moduleAccountBalance(request?: _140.QueryModuleAccountBalanceRequest): Promise<_140.QueryModuleAccountBalanceResponse>;
                params(request?: _140.QueryParamsRequest): Promise<_140.QueryParamsResponse>;
                claimRecord(request: _140.QueryClaimRecordRequest): Promise<_140.QueryClaimRecordResponse>;
                claimableForAction(request: _140.QueryClaimableForActionRequest): Promise<_140.QueryClaimableForActionResponse>;
                totalClaimable(request: _140.QueryTotalClaimableRequest): Promise<_140.QueryTotalClaimableResponse>;
            };
            QueryModuleAccountBalanceRequest: {
                encode(_: _140.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryModuleAccountBalanceRequest;
                fromPartial(_: {}): _140.QueryModuleAccountBalanceRequest;
                fromAmino(_: _140.QueryModuleAccountBalanceRequestAmino): _140.QueryModuleAccountBalanceRequest;
                toAmino(_: _140.QueryModuleAccountBalanceRequest): _140.QueryModuleAccountBalanceRequestAmino;
                fromAminoMsg(object: _140.QueryModuleAccountBalanceRequestAminoMsg): _140.QueryModuleAccountBalanceRequest;
                fromProtoMsg(message: _140.QueryModuleAccountBalanceRequestProtoMsg): _140.QueryModuleAccountBalanceRequest;
                toProto(message: _140.QueryModuleAccountBalanceRequest): Uint8Array;
                toProtoMsg(message: _140.QueryModuleAccountBalanceRequest): _140.QueryModuleAccountBalanceRequestProtoMsg;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _140.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryModuleAccountBalanceResponse;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _140.QueryModuleAccountBalanceResponse;
                fromAmino(object: _140.QueryModuleAccountBalanceResponseAmino): _140.QueryModuleAccountBalanceResponse;
                toAmino(message: _140.QueryModuleAccountBalanceResponse): _140.QueryModuleAccountBalanceResponseAmino;
                fromAminoMsg(object: _140.QueryModuleAccountBalanceResponseAminoMsg): _140.QueryModuleAccountBalanceResponse;
                fromProtoMsg(message: _140.QueryModuleAccountBalanceResponseProtoMsg): _140.QueryModuleAccountBalanceResponse;
                toProto(message: _140.QueryModuleAccountBalanceResponse): Uint8Array;
                toProtoMsg(message: _140.QueryModuleAccountBalanceResponse): _140.QueryModuleAccountBalanceResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _140.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryParamsRequest;
                fromPartial(_: {}): _140.QueryParamsRequest;
                fromAmino(_: _140.QueryParamsRequestAmino): _140.QueryParamsRequest;
                toAmino(_: _140.QueryParamsRequest): _140.QueryParamsRequestAmino;
                fromAminoMsg(object: _140.QueryParamsRequestAminoMsg): _140.QueryParamsRequest;
                fromProtoMsg(message: _140.QueryParamsRequestProtoMsg): _140.QueryParamsRequest;
                toProto(message: _140.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _140.QueryParamsRequest): _140.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _140.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        airdropStartTime?: Date;
                        durationUntilDecay?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        durationOfDecay?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        claimDenom?: string;
                    };
                }): _140.QueryParamsResponse;
                fromAmino(object: _140.QueryParamsResponseAmino): _140.QueryParamsResponse;
                toAmino(message: _140.QueryParamsResponse): _140.QueryParamsResponseAmino;
                fromAminoMsg(object: _140.QueryParamsResponseAminoMsg): _140.QueryParamsResponse;
                fromProtoMsg(message: _140.QueryParamsResponseProtoMsg): _140.QueryParamsResponse;
                toProto(message: _140.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _140.QueryParamsResponse): _140.QueryParamsResponseProtoMsg;
            };
            QueryClaimRecordRequest: {
                encode(message: _140.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryClaimRecordRequest;
                fromPartial(object: {
                    address?: string;
                }): _140.QueryClaimRecordRequest;
                fromAmino(object: _140.QueryClaimRecordRequestAmino): _140.QueryClaimRecordRequest;
                toAmino(message: _140.QueryClaimRecordRequest): _140.QueryClaimRecordRequestAmino;
                fromAminoMsg(object: _140.QueryClaimRecordRequestAminoMsg): _140.QueryClaimRecordRequest;
                fromProtoMsg(message: _140.QueryClaimRecordRequestProtoMsg): _140.QueryClaimRecordRequest;
                toProto(message: _140.QueryClaimRecordRequest): Uint8Array;
                toProtoMsg(message: _140.QueryClaimRecordRequest): _140.QueryClaimRecordRequestProtoMsg;
            };
            QueryClaimRecordResponse: {
                encode(message: _140.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryClaimRecordResponse;
                fromPartial(object: {
                    claimRecord?: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    };
                }): _140.QueryClaimRecordResponse;
                fromAmino(object: _140.QueryClaimRecordResponseAmino): _140.QueryClaimRecordResponse;
                toAmino(message: _140.QueryClaimRecordResponse): _140.QueryClaimRecordResponseAmino;
                fromAminoMsg(object: _140.QueryClaimRecordResponseAminoMsg): _140.QueryClaimRecordResponse;
                fromProtoMsg(message: _140.QueryClaimRecordResponseProtoMsg): _140.QueryClaimRecordResponse;
                toProto(message: _140.QueryClaimRecordResponse): Uint8Array;
                toProtoMsg(message: _140.QueryClaimRecordResponse): _140.QueryClaimRecordResponseProtoMsg;
            };
            QueryClaimableForActionRequest: {
                encode(message: _140.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryClaimableForActionRequest;
                fromPartial(object: {
                    address?: string;
                    action?: _137.Action;
                }): _140.QueryClaimableForActionRequest;
                fromAmino(object: _140.QueryClaimableForActionRequestAmino): _140.QueryClaimableForActionRequest;
                toAmino(message: _140.QueryClaimableForActionRequest): _140.QueryClaimableForActionRequestAmino;
                fromAminoMsg(object: _140.QueryClaimableForActionRequestAminoMsg): _140.QueryClaimableForActionRequest;
                fromProtoMsg(message: _140.QueryClaimableForActionRequestProtoMsg): _140.QueryClaimableForActionRequest;
                toProto(message: _140.QueryClaimableForActionRequest): Uint8Array;
                toProtoMsg(message: _140.QueryClaimableForActionRequest): _140.QueryClaimableForActionRequestProtoMsg;
            };
            QueryClaimableForActionResponse: {
                encode(message: _140.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryClaimableForActionResponse;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _140.QueryClaimableForActionResponse;
                fromAmino(object: _140.QueryClaimableForActionResponseAmino): _140.QueryClaimableForActionResponse;
                toAmino(message: _140.QueryClaimableForActionResponse): _140.QueryClaimableForActionResponseAmino;
                fromAminoMsg(object: _140.QueryClaimableForActionResponseAminoMsg): _140.QueryClaimableForActionResponse;
                fromProtoMsg(message: _140.QueryClaimableForActionResponseProtoMsg): _140.QueryClaimableForActionResponse;
                toProto(message: _140.QueryClaimableForActionResponse): Uint8Array;
                toProtoMsg(message: _140.QueryClaimableForActionResponse): _140.QueryClaimableForActionResponseProtoMsg;
            };
            QueryTotalClaimableRequest: {
                encode(message: _140.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryTotalClaimableRequest;
                fromPartial(object: {
                    address?: string;
                }): _140.QueryTotalClaimableRequest;
                fromAmino(object: _140.QueryTotalClaimableRequestAmino): _140.QueryTotalClaimableRequest;
                toAmino(message: _140.QueryTotalClaimableRequest): _140.QueryTotalClaimableRequestAmino;
                fromAminoMsg(object: _140.QueryTotalClaimableRequestAminoMsg): _140.QueryTotalClaimableRequest;
                fromProtoMsg(message: _140.QueryTotalClaimableRequestProtoMsg): _140.QueryTotalClaimableRequest;
                toProto(message: _140.QueryTotalClaimableRequest): Uint8Array;
                toProtoMsg(message: _140.QueryTotalClaimableRequest): _140.QueryTotalClaimableRequestProtoMsg;
            };
            QueryTotalClaimableResponse: {
                encode(message: _140.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryTotalClaimableResponse;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _140.QueryTotalClaimableResponse;
                fromAmino(object: _140.QueryTotalClaimableResponseAmino): _140.QueryTotalClaimableResponse;
                toAmino(message: _140.QueryTotalClaimableResponse): _140.QueryTotalClaimableResponseAmino;
                fromAminoMsg(object: _140.QueryTotalClaimableResponseAminoMsg): _140.QueryTotalClaimableResponse;
                fromProtoMsg(message: _140.QueryTotalClaimableResponseProtoMsg): _140.QueryTotalClaimableResponse;
                toProto(message: _140.QueryTotalClaimableResponse): Uint8Array;
                toProtoMsg(message: _140.QueryTotalClaimableResponse): _140.QueryTotalClaimableResponseProtoMsg;
            };
            Params: {
                encode(message: _139.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.Params;
                fromPartial(object: {
                    airdropStartTime?: Date;
                    durationUntilDecay?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    durationOfDecay?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    claimDenom?: string;
                }): _139.Params;
                fromAmino(object: _139.ParamsAmino): _139.Params;
                toAmino(message: _139.Params): _139.ParamsAmino;
                fromAminoMsg(object: _139.ParamsAminoMsg): _139.Params;
                fromProtoMsg(message: _139.ParamsProtoMsg): _139.Params;
                toProto(message: _139.Params): Uint8Array;
                toProtoMsg(message: _139.Params): _139.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _138.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.GenesisState;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    };
                    params?: {
                        airdropStartTime?: Date;
                        durationUntilDecay?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        durationOfDecay?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        claimDenom?: string;
                    };
                    claimRecords?: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    }[];
                }): _138.GenesisState;
                fromAmino(object: _138.GenesisStateAmino): _138.GenesisState;
                toAmino(message: _138.GenesisState): _138.GenesisStateAmino;
                fromAminoMsg(object: _138.GenesisStateAminoMsg): _138.GenesisState;
                fromProtoMsg(message: _138.GenesisStateProtoMsg): _138.GenesisState;
                toProto(message: _138.GenesisState): Uint8Array;
                toProtoMsg(message: _138.GenesisState): _138.GenesisStateProtoMsg;
            };
            actionFromJSON(object: any): _137.Action;
            actionToJSON(object: _137.Action): string;
            Action: typeof _137.Action;
            ActionSDKType: typeof _137.Action;
            ActionAmino: typeof _137.Action;
            ClaimRecord: {
                encode(message: _137.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ClaimRecord;
                fromPartial(object: {
                    address?: string;
                    initialClaimableAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    actionCompleted?: boolean[];
                }): _137.ClaimRecord;
                fromAmino(object: _137.ClaimRecordAmino): _137.ClaimRecord;
                toAmino(message: _137.ClaimRecord): _137.ClaimRecordAmino;
                fromAminoMsg(object: _137.ClaimRecordAminoMsg): _137.ClaimRecord;
                fromProtoMsg(message: _137.ClaimRecordProtoMsg): _137.ClaimRecord;
                toProto(message: _137.ClaimRecord): Uint8Array;
                toProtoMsg(message: _137.ClaimRecord): _137.ClaimRecordProtoMsg;
            };
        };
        const beam: {
            MsgClientImpl: typeof _265.MsgClientImpl;
            QueryClientImpl: typeof _261.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                beam(request: _144.QueryGetBeamRequest): Promise<_144.QueryGetBeamResponse>;
                beams(request: _144.QueryFetchBeamsRequest): Promise<_144.QueryFetchBeamsResponse>;
                beamsOpenQueue(request?: _144.QueryFetchBeamsOpenQueueRequest): Promise<_144.QueryFetchBeamsOpenQueueResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    openBeam(value: _145.MsgOpenBeam): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBeam(value: _145.MsgUpdateBeam): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimBeam(value: _145.MsgClaimBeam): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    openBeam(value: _145.MsgOpenBeam): {
                        typeUrl: string;
                        value: _145.MsgOpenBeam;
                    };
                    updateBeam(value: _145.MsgUpdateBeam): {
                        typeUrl: string;
                        value: _145.MsgUpdateBeam;
                    };
                    claimBeam(value: _145.MsgClaimBeam): {
                        typeUrl: string;
                        value: _145.MsgClaimBeam;
                    };
                };
                fromPartial: {
                    openBeam(value: _145.MsgOpenBeam): {
                        typeUrl: string;
                        value: _145.MsgOpenBeam;
                    };
                    updateBeam(value: _145.MsgUpdateBeam): {
                        typeUrl: string;
                        value: _145.MsgUpdateBeam;
                    };
                    claimBeam(value: _145.MsgClaimBeam): {
                        typeUrl: string;
                        value: _145.MsgClaimBeam;
                    };
                };
            };
            AminoConverter: {
                "/lum.network.beam.MsgOpenBeam": {
                    aminoType: string;
                    toAmino: (message: _145.MsgOpenBeam) => _145.MsgOpenBeamAmino;
                    fromAmino: (object: _145.MsgOpenBeamAmino) => _145.MsgOpenBeam;
                };
                "/lum.network.beam.MsgUpdateBeam": {
                    aminoType: string;
                    toAmino: (message: _145.MsgUpdateBeam) => _145.MsgUpdateBeamAmino;
                    fromAmino: (object: _145.MsgUpdateBeamAmino) => _145.MsgUpdateBeam;
                };
                "/lum.network.beam.MsgClaimBeam": {
                    aminoType: string;
                    toAmino: (message: _145.MsgClaimBeam) => _145.MsgClaimBeamAmino;
                    fromAmino: (object: _145.MsgClaimBeamAmino) => _145.MsgClaimBeam;
                };
            };
            MsgOpenBeam: {
                encode(message: _145.MsgOpenBeam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgOpenBeam;
                fromPartial(object: {
                    id?: string;
                    creatorAddress?: string;
                    secret?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    schema?: string;
                    data?: {
                        reward?: {
                            trigger?: string;
                            amount?: number;
                            maxAmount?: number;
                            currency?: string;
                            status?: string;
                            details?: {
                                type?: string;
                                amount?: number;
                                maxAmount?: number;
                                status?: string;
                            }[];
                        };
                        verifier?: {
                            name?: string;
                            url?: string;
                            signature?: string;
                        };
                        reviewer?: {
                            reviewerId?: string;
                            name?: string;
                            isAnonymous?: boolean;
                        };
                        merchantReview?: {
                            orderId?: string;
                            reviewId?: string;
                            merchantUrl?: string;
                            ratingUrl?: string;
                            reviewUrl?: string;
                            collectionMethod?: string;
                            timestamp?: string;
                            ratings?: {
                                overall?: number;
                                customerService?: number;
                                nps?: number;
                            };
                            title?: string;
                            content?: {
                                overall?: string;
                                customerService?: string;
                            };
                        };
                        productsReviews?: {
                            orderId?: string;
                            reviewId?: string;
                            ratingUrl?: string;
                            reviewUrl?: string;
                            collectionMethod?: string;
                            timestamp?: string;
                            ratings?: {
                                overall?: number;
                                quality?: number;
                            };
                            title?: string;
                            content?: {
                                overall?: string;
                                pros?: string;
                                cons?: string;
                            };
                            medias?: {
                                mimetype?: string;
                                url?: string;
                                thumbnailUrl?: string;
                            }[];
                            products?: {
                                name?: string;
                                url?: string;
                                urls?: string[];
                                ids?: {
                                    gtins?: string[];
                                    mpns?: string[];
                                    skus?: string[];
                                    asins?: string[];
                                };
                            }[];
                        }[];
                    };
                    claimAddress?: string;
                    claimExpiresAtBlock?: number;
                    closesAtBlock?: number;
                }): _145.MsgOpenBeam;
                fromAmino(object: _145.MsgOpenBeamAmino): _145.MsgOpenBeam;
                toAmino(message: _145.MsgOpenBeam): _145.MsgOpenBeamAmino;
                fromAminoMsg(object: _145.MsgOpenBeamAminoMsg): _145.MsgOpenBeam;
                fromProtoMsg(message: _145.MsgOpenBeamProtoMsg): _145.MsgOpenBeam;
                toProto(message: _145.MsgOpenBeam): Uint8Array;
                toProtoMsg(message: _145.MsgOpenBeam): _145.MsgOpenBeamProtoMsg;
            };
            MsgOpenBeamResponse: {
                encode(_: _145.MsgOpenBeamResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgOpenBeamResponse;
                fromPartial(_: {}): _145.MsgOpenBeamResponse;
                fromAmino(_: _145.MsgOpenBeamResponseAmino): _145.MsgOpenBeamResponse;
                toAmino(_: _145.MsgOpenBeamResponse): _145.MsgOpenBeamResponseAmino;
                fromAminoMsg(object: _145.MsgOpenBeamResponseAminoMsg): _145.MsgOpenBeamResponse;
                fromProtoMsg(message: _145.MsgOpenBeamResponseProtoMsg): _145.MsgOpenBeamResponse;
                toProto(message: _145.MsgOpenBeamResponse): Uint8Array;
                toProtoMsg(message: _145.MsgOpenBeamResponse): _145.MsgOpenBeamResponseProtoMsg;
            };
            MsgUpdateBeam: {
                encode(message: _145.MsgUpdateBeam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgUpdateBeam;
                fromPartial(object: {
                    id?: string;
                    updaterAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    status?: _142.BeamState;
                    cancelReason?: string;
                    hideContent?: boolean;
                    data?: {
                        reward?: {
                            trigger?: string;
                            amount?: number;
                            maxAmount?: number;
                            currency?: string;
                            status?: string;
                            details?: {
                                type?: string;
                                amount?: number;
                                maxAmount?: number;
                                status?: string;
                            }[];
                        };
                        verifier?: {
                            name?: string;
                            url?: string;
                            signature?: string;
                        };
                        reviewer?: {
                            reviewerId?: string;
                            name?: string;
                            isAnonymous?: boolean;
                        };
                        merchantReview?: {
                            orderId?: string;
                            reviewId?: string;
                            merchantUrl?: string;
                            ratingUrl?: string;
                            reviewUrl?: string;
                            collectionMethod?: string;
                            timestamp?: string;
                            ratings?: {
                                overall?: number;
                                customerService?: number;
                                nps?: number;
                            };
                            title?: string;
                            content?: {
                                overall?: string;
                                customerService?: string;
                            };
                        };
                        productsReviews?: {
                            orderId?: string;
                            reviewId?: string;
                            ratingUrl?: string;
                            reviewUrl?: string;
                            collectionMethod?: string;
                            timestamp?: string;
                            ratings?: {
                                overall?: number;
                                quality?: number;
                            };
                            title?: string;
                            content?: {
                                overall?: string;
                                pros?: string;
                                cons?: string;
                            };
                            medias?: {
                                mimetype?: string;
                                url?: string;
                                thumbnailUrl?: string;
                            }[];
                            products?: {
                                name?: string;
                                url?: string;
                                urls?: string[];
                                ids?: {
                                    gtins?: string[];
                                    mpns?: string[];
                                    skus?: string[];
                                    asins?: string[];
                                };
                            }[];
                        }[];
                    };
                    claimAddress?: string;
                    claimExpiresAtBlock?: number;
                    closesAtBlock?: number;
                }): _145.MsgUpdateBeam;
                fromAmino(object: _145.MsgUpdateBeamAmino): _145.MsgUpdateBeam;
                toAmino(message: _145.MsgUpdateBeam): _145.MsgUpdateBeamAmino;
                fromAminoMsg(object: _145.MsgUpdateBeamAminoMsg): _145.MsgUpdateBeam;
                fromProtoMsg(message: _145.MsgUpdateBeamProtoMsg): _145.MsgUpdateBeam;
                toProto(message: _145.MsgUpdateBeam): Uint8Array;
                toProtoMsg(message: _145.MsgUpdateBeam): _145.MsgUpdateBeamProtoMsg;
            };
            MsgUpdateBeamResponse: {
                encode(_: _145.MsgUpdateBeamResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgUpdateBeamResponse;
                fromPartial(_: {}): _145.MsgUpdateBeamResponse;
                fromAmino(_: _145.MsgUpdateBeamResponseAmino): _145.MsgUpdateBeamResponse;
                toAmino(_: _145.MsgUpdateBeamResponse): _145.MsgUpdateBeamResponseAmino;
                fromAminoMsg(object: _145.MsgUpdateBeamResponseAminoMsg): _145.MsgUpdateBeamResponse;
                fromProtoMsg(message: _145.MsgUpdateBeamResponseProtoMsg): _145.MsgUpdateBeamResponse;
                toProto(message: _145.MsgUpdateBeamResponse): Uint8Array;
                toProtoMsg(message: _145.MsgUpdateBeamResponse): _145.MsgUpdateBeamResponseProtoMsg;
            };
            MsgClaimBeam: {
                encode(message: _145.MsgClaimBeam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgClaimBeam;
                fromPartial(object: {
                    id?: string;
                    claimerAddress?: string;
                    secret?: string;
                }): _145.MsgClaimBeam;
                fromAmino(object: _145.MsgClaimBeamAmino): _145.MsgClaimBeam;
                toAmino(message: _145.MsgClaimBeam): _145.MsgClaimBeamAmino;
                fromAminoMsg(object: _145.MsgClaimBeamAminoMsg): _145.MsgClaimBeam;
                fromProtoMsg(message: _145.MsgClaimBeamProtoMsg): _145.MsgClaimBeam;
                toProto(message: _145.MsgClaimBeam): Uint8Array;
                toProtoMsg(message: _145.MsgClaimBeam): _145.MsgClaimBeamProtoMsg;
            };
            MsgClaimBeamResponse: {
                encode(_: _145.MsgClaimBeamResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgClaimBeamResponse;
                fromPartial(_: {}): _145.MsgClaimBeamResponse;
                fromAmino(_: _145.MsgClaimBeamResponseAmino): _145.MsgClaimBeamResponse;
                toAmino(_: _145.MsgClaimBeamResponse): _145.MsgClaimBeamResponseAmino;
                fromAminoMsg(object: _145.MsgClaimBeamResponseAminoMsg): _145.MsgClaimBeamResponse;
                fromProtoMsg(message: _145.MsgClaimBeamResponseProtoMsg): _145.MsgClaimBeamResponse;
                toProto(message: _145.MsgClaimBeamResponse): Uint8Array;
                toProtoMsg(message: _145.MsgClaimBeamResponse): _145.MsgClaimBeamResponseProtoMsg;
            };
            QueryGetBeamRequest: {
                encode(message: _144.QueryGetBeamRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryGetBeamRequest;
                fromPartial(object: {
                    id?: string;
                }): _144.QueryGetBeamRequest;
                fromAmino(object: _144.QueryGetBeamRequestAmino): _144.QueryGetBeamRequest;
                toAmino(message: _144.QueryGetBeamRequest): _144.QueryGetBeamRequestAmino;
                fromAminoMsg(object: _144.QueryGetBeamRequestAminoMsg): _144.QueryGetBeamRequest;
                fromProtoMsg(message: _144.QueryGetBeamRequestProtoMsg): _144.QueryGetBeamRequest;
                toProto(message: _144.QueryGetBeamRequest): Uint8Array;
                toProtoMsg(message: _144.QueryGetBeamRequest): _144.QueryGetBeamRequestProtoMsg;
            };
            QueryGetBeamResponse: {
                encode(message: _144.QueryGetBeamResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryGetBeamResponse;
                fromPartial(object: {
                    beam?: {
                        creatorAddress?: string;
                        id?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        status?: _142.BeamState;
                        secret?: string;
                        claimAddress?: string;
                        fundsWithdrawn?: boolean;
                        claimed?: boolean;
                        cancelReason?: string;
                        hideContent?: boolean;
                        schema?: string;
                        data?: {
                            reward?: {
                                trigger?: string;
                                amount?: number;
                                maxAmount?: number;
                                currency?: string;
                                status?: string;
                                details?: {
                                    type?: string;
                                    amount?: number;
                                    maxAmount?: number;
                                    status?: string;
                                }[];
                            };
                            verifier?: {
                                name?: string;
                                url?: string;
                                signature?: string;
                            };
                            reviewer?: {
                                reviewerId?: string;
                                name?: string;
                                isAnonymous?: boolean;
                            };
                            merchantReview?: {
                                orderId?: string;
                                reviewId?: string;
                                merchantUrl?: string;
                                ratingUrl?: string;
                                reviewUrl?: string;
                                collectionMethod?: string;
                                timestamp?: string;
                                ratings?: {
                                    overall?: number;
                                    customerService?: number;
                                    nps?: number;
                                };
                                title?: string;
                                content?: {
                                    overall?: string;
                                    customerService?: string;
                                };
                            };
                            productsReviews?: {
                                orderId?: string;
                                reviewId?: string;
                                ratingUrl?: string;
                                reviewUrl?: string;
                                collectionMethod?: string;
                                timestamp?: string;
                                ratings?: {
                                    overall?: number;
                                    quality?: number;
                                };
                                title?: string;
                                content?: {
                                    overall?: string;
                                    pros?: string;
                                    cons?: string;
                                };
                                medias?: {
                                    mimetype?: string;
                                    url?: string;
                                    thumbnailUrl?: string;
                                }[];
                                products?: {
                                    name?: string;
                                    url?: string;
                                    urls?: string[];
                                    ids?: {
                                        gtins?: string[];
                                        mpns?: string[];
                                        skus?: string[];
                                        asins?: string[];
                                    };
                                }[];
                            }[];
                        };
                        claimExpiresAtBlock?: number;
                        closesAtBlock?: number;
                        createdAt?: Date;
                        closedAt?: Date;
                    };
                }): _144.QueryGetBeamResponse;
                fromAmino(object: _144.QueryGetBeamResponseAmino): _144.QueryGetBeamResponse;
                toAmino(message: _144.QueryGetBeamResponse): _144.QueryGetBeamResponseAmino;
                fromAminoMsg(object: _144.QueryGetBeamResponseAminoMsg): _144.QueryGetBeamResponse;
                fromProtoMsg(message: _144.QueryGetBeamResponseProtoMsg): _144.QueryGetBeamResponse;
                toProto(message: _144.QueryGetBeamResponse): Uint8Array;
                toProtoMsg(message: _144.QueryGetBeamResponse): _144.QueryGetBeamResponseProtoMsg;
            };
            QueryFetchBeamsRequest: {
                encode(message: _144.QueryFetchBeamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryFetchBeamsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    state?: _142.BeamState;
                }): _144.QueryFetchBeamsRequest;
                fromAmino(object: _144.QueryFetchBeamsRequestAmino): _144.QueryFetchBeamsRequest;
                toAmino(message: _144.QueryFetchBeamsRequest): _144.QueryFetchBeamsRequestAmino;
                fromAminoMsg(object: _144.QueryFetchBeamsRequestAminoMsg): _144.QueryFetchBeamsRequest;
                fromProtoMsg(message: _144.QueryFetchBeamsRequestProtoMsg): _144.QueryFetchBeamsRequest;
                toProto(message: _144.QueryFetchBeamsRequest): Uint8Array;
                toProtoMsg(message: _144.QueryFetchBeamsRequest): _144.QueryFetchBeamsRequestProtoMsg;
            };
            QueryFetchBeamsResponse: {
                encode(message: _144.QueryFetchBeamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryFetchBeamsResponse;
                fromPartial(object: {
                    beams?: {
                        creatorAddress?: string;
                        id?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        status?: _142.BeamState;
                        secret?: string;
                        claimAddress?: string;
                        fundsWithdrawn?: boolean;
                        claimed?: boolean;
                        cancelReason?: string;
                        hideContent?: boolean;
                        schema?: string;
                        data?: {
                            reward?: {
                                trigger?: string;
                                amount?: number;
                                maxAmount?: number;
                                currency?: string;
                                status?: string;
                                details?: {
                                    type?: string;
                                    amount?: number;
                                    maxAmount?: number;
                                    status?: string;
                                }[];
                            };
                            verifier?: {
                                name?: string;
                                url?: string;
                                signature?: string;
                            };
                            reviewer?: {
                                reviewerId?: string;
                                name?: string;
                                isAnonymous?: boolean;
                            };
                            merchantReview?: {
                                orderId?: string;
                                reviewId?: string;
                                merchantUrl?: string;
                                ratingUrl?: string;
                                reviewUrl?: string;
                                collectionMethod?: string;
                                timestamp?: string;
                                ratings?: {
                                    overall?: number;
                                    customerService?: number;
                                    nps?: number;
                                };
                                title?: string;
                                content?: {
                                    overall?: string;
                                    customerService?: string;
                                };
                            };
                            productsReviews?: {
                                orderId?: string;
                                reviewId?: string;
                                ratingUrl?: string;
                                reviewUrl?: string;
                                collectionMethod?: string;
                                timestamp?: string;
                                ratings?: {
                                    overall?: number;
                                    quality?: number;
                                };
                                title?: string;
                                content?: {
                                    overall?: string;
                                    pros?: string;
                                    cons?: string;
                                };
                                medias?: {
                                    mimetype?: string;
                                    url?: string;
                                    thumbnailUrl?: string;
                                }[];
                                products?: {
                                    name?: string;
                                    url?: string;
                                    urls?: string[];
                                    ids?: {
                                        gtins?: string[];
                                        mpns?: string[];
                                        skus?: string[];
                                        asins?: string[];
                                    };
                                }[];
                            }[];
                        };
                        claimExpiresAtBlock?: number;
                        closesAtBlock?: number;
                        createdAt?: Date;
                        closedAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _144.QueryFetchBeamsResponse;
                fromAmino(object: _144.QueryFetchBeamsResponseAmino): _144.QueryFetchBeamsResponse;
                toAmino(message: _144.QueryFetchBeamsResponse): _144.QueryFetchBeamsResponseAmino;
                fromAminoMsg(object: _144.QueryFetchBeamsResponseAminoMsg): _144.QueryFetchBeamsResponse;
                fromProtoMsg(message: _144.QueryFetchBeamsResponseProtoMsg): _144.QueryFetchBeamsResponse;
                toProto(message: _144.QueryFetchBeamsResponse): Uint8Array;
                toProtoMsg(message: _144.QueryFetchBeamsResponse): _144.QueryFetchBeamsResponseProtoMsg;
            };
            QueryFetchBeamsOpenQueueRequest: {
                encode(message: _144.QueryFetchBeamsOpenQueueRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryFetchBeamsOpenQueueRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _144.QueryFetchBeamsOpenQueueRequest;
                fromAmino(object: _144.QueryFetchBeamsOpenQueueRequestAmino): _144.QueryFetchBeamsOpenQueueRequest;
                toAmino(message: _144.QueryFetchBeamsOpenQueueRequest): _144.QueryFetchBeamsOpenQueueRequestAmino;
                fromAminoMsg(object: _144.QueryFetchBeamsOpenQueueRequestAminoMsg): _144.QueryFetchBeamsOpenQueueRequest;
                fromProtoMsg(message: _144.QueryFetchBeamsOpenQueueRequestProtoMsg): _144.QueryFetchBeamsOpenQueueRequest;
                toProto(message: _144.QueryFetchBeamsOpenQueueRequest): Uint8Array;
                toProtoMsg(message: _144.QueryFetchBeamsOpenQueueRequest): _144.QueryFetchBeamsOpenQueueRequestProtoMsg;
            };
            QueryFetchBeamsOpenQueueResponse: {
                encode(message: _144.QueryFetchBeamsOpenQueueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.QueryFetchBeamsOpenQueueResponse;
                fromPartial(object: {
                    beamIds?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _144.QueryFetchBeamsOpenQueueResponse;
                fromAmino(object: _144.QueryFetchBeamsOpenQueueResponseAmino): _144.QueryFetchBeamsOpenQueueResponse;
                toAmino(message: _144.QueryFetchBeamsOpenQueueResponse): _144.QueryFetchBeamsOpenQueueResponseAmino;
                fromAminoMsg(object: _144.QueryFetchBeamsOpenQueueResponseAminoMsg): _144.QueryFetchBeamsOpenQueueResponse;
                fromProtoMsg(message: _144.QueryFetchBeamsOpenQueueResponseProtoMsg): _144.QueryFetchBeamsOpenQueueResponse;
                toProto(message: _144.QueryFetchBeamsOpenQueueResponse): Uint8Array;
                toProtoMsg(message: _144.QueryFetchBeamsOpenQueueResponse): _144.QueryFetchBeamsOpenQueueResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _143.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.GenesisState;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    };
                    beams?: {
                        creatorAddress?: string;
                        id?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        status?: _142.BeamState;
                        secret?: string;
                        claimAddress?: string;
                        fundsWithdrawn?: boolean;
                        claimed?: boolean;
                        cancelReason?: string;
                        hideContent?: boolean;
                        schema?: string;
                        data?: {
                            reward?: {
                                trigger?: string;
                                amount?: number;
                                maxAmount?: number;
                                currency?: string;
                                status?: string;
                                details?: {
                                    type?: string;
                                    amount?: number;
                                    maxAmount?: number;
                                    status?: string;
                                }[];
                            };
                            verifier?: {
                                name?: string;
                                url?: string;
                                signature?: string;
                            };
                            reviewer?: {
                                reviewerId?: string;
                                name?: string;
                                isAnonymous?: boolean;
                            };
                            merchantReview?: {
                                orderId?: string;
                                reviewId?: string;
                                merchantUrl?: string;
                                ratingUrl?: string;
                                reviewUrl?: string;
                                collectionMethod?: string;
                                timestamp?: string;
                                ratings?: {
                                    overall?: number;
                                    customerService?: number;
                                    nps?: number;
                                };
                                title?: string;
                                content?: {
                                    overall?: string;
                                    customerService?: string;
                                };
                            };
                            productsReviews?: {
                                orderId?: string;
                                reviewId?: string;
                                ratingUrl?: string;
                                reviewUrl?: string;
                                collectionMethod?: string;
                                timestamp?: string;
                                ratings?: {
                                    overall?: number;
                                    quality?: number;
                                };
                                title?: string;
                                content?: {
                                    overall?: string;
                                    pros?: string;
                                    cons?: string;
                                };
                                medias?: {
                                    mimetype?: string;
                                    url?: string;
                                    thumbnailUrl?: string;
                                }[];
                                products?: {
                                    name?: string;
                                    url?: string;
                                    urls?: string[];
                                    ids?: {
                                        gtins?: string[];
                                        mpns?: string[];
                                        skus?: string[];
                                        asins?: string[];
                                    };
                                }[];
                            }[];
                        };
                        claimExpiresAtBlock?: number;
                        closesAtBlock?: number;
                        createdAt?: Date;
                        closedAt?: Date;
                    }[];
                }): _143.GenesisState;
                fromAmino(object: _143.GenesisStateAmino): _143.GenesisState;
                toAmino(message: _143.GenesisState): _143.GenesisStateAmino;
                fromAminoMsg(object: _143.GenesisStateAminoMsg): _143.GenesisState;
                fromProtoMsg(message: _143.GenesisStateProtoMsg): _143.GenesisState;
                toProto(message: _143.GenesisState): Uint8Array;
                toProtoMsg(message: _143.GenesisState): _143.GenesisStateProtoMsg;
            };
            beamStateFromJSON(object: any): _142.BeamState;
            beamStateToJSON(object: _142.BeamState): string;
            BeamState: typeof _142.BeamState;
            BeamStateSDKType: typeof _142.BeamState;
            BeamStateAmino: typeof _142.BeamState;
            BeamMedia: {
                encode(message: _142.BeamMedia, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BeamMedia;
                fromPartial(object: {
                    mimetype?: string;
                    url?: string;
                    thumbnailUrl?: string;
                }): _142.BeamMedia;
                fromAmino(object: _142.BeamMediaAmino): _142.BeamMedia;
                toAmino(message: _142.BeamMedia): _142.BeamMediaAmino;
                fromAminoMsg(object: _142.BeamMediaAminoMsg): _142.BeamMedia;
                fromProtoMsg(message: _142.BeamMediaProtoMsg): _142.BeamMedia;
                toProto(message: _142.BeamMedia): Uint8Array;
                toProtoMsg(message: _142.BeamMedia): _142.BeamMediaProtoMsg;
            };
            BeamReviewer: {
                encode(message: _142.BeamReviewer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BeamReviewer;
                fromPartial(object: {
                    reviewerId?: string;
                    name?: string;
                    isAnonymous?: boolean;
                }): _142.BeamReviewer;
                fromAmino(object: _142.BeamReviewerAmino): _142.BeamReviewer;
                toAmino(message: _142.BeamReviewer): _142.BeamReviewerAmino;
                fromAminoMsg(object: _142.BeamReviewerAminoMsg): _142.BeamReviewer;
                fromProtoMsg(message: _142.BeamReviewerProtoMsg): _142.BeamReviewer;
                toProto(message: _142.BeamReviewer): Uint8Array;
                toProtoMsg(message: _142.BeamReviewer): _142.BeamReviewerProtoMsg;
            };
            BeamVerifier: {
                encode(message: _142.BeamVerifier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BeamVerifier;
                fromPartial(object: {
                    name?: string;
                    url?: string;
                    signature?: string;
                }): _142.BeamVerifier;
                fromAmino(object: _142.BeamVerifierAmino): _142.BeamVerifier;
                toAmino(message: _142.BeamVerifier): _142.BeamVerifierAmino;
                fromAminoMsg(object: _142.BeamVerifierAminoMsg): _142.BeamVerifier;
                fromProtoMsg(message: _142.BeamVerifierProtoMsg): _142.BeamVerifier;
                toProto(message: _142.BeamVerifier): Uint8Array;
                toProtoMsg(message: _142.BeamVerifier): _142.BeamVerifierProtoMsg;
            };
            BeamReward: {
                encode(message: _142.BeamReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BeamReward;
                fromPartial(object: {
                    trigger?: string;
                    amount?: number;
                    maxAmount?: number;
                    currency?: string;
                    status?: string;
                    details?: {
                        type?: string;
                        amount?: number;
                        maxAmount?: number;
                        status?: string;
                    }[];
                }): _142.BeamReward;
                fromAmino(object: _142.BeamRewardAmino): _142.BeamReward;
                toAmino(message: _142.BeamReward): _142.BeamRewardAmino;
                fromAminoMsg(object: _142.BeamRewardAminoMsg): _142.BeamReward;
                fromProtoMsg(message: _142.BeamRewardProtoMsg): _142.BeamReward;
                toProto(message: _142.BeamReward): Uint8Array;
                toProtoMsg(message: _142.BeamReward): _142.BeamRewardProtoMsg;
            };
            BeamReward_BeamRewardDetails: {
                encode(message: _142.BeamReward_BeamRewardDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BeamReward_BeamRewardDetails;
                fromPartial(object: {
                    type?: string;
                    amount?: number;
                    maxAmount?: number;
                    status?: string;
                }): _142.BeamReward_BeamRewardDetails;
                fromAmino(object: _142.BeamReward_BeamRewardDetailsAmino): _142.BeamReward_BeamRewardDetails;
                toAmino(message: _142.BeamReward_BeamRewardDetails): _142.BeamReward_BeamRewardDetailsAmino;
                fromAminoMsg(object: _142.BeamReward_BeamRewardDetailsAminoMsg): _142.BeamReward_BeamRewardDetails;
                fromProtoMsg(message: _142.BeamReward_BeamRewardDetailsProtoMsg): _142.BeamReward_BeamRewardDetails;
                toProto(message: _142.BeamReward_BeamRewardDetails): Uint8Array;
                toProtoMsg(message: _142.BeamReward_BeamRewardDetails): _142.BeamReward_BeamRewardDetailsProtoMsg;
            };
            BeamMerchantReview: {
                encode(message: _142.BeamMerchantReview, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BeamMerchantReview;
                fromPartial(object: {
                    orderId?: string;
                    reviewId?: string;
                    merchantUrl?: string;
                    ratingUrl?: string;
                    reviewUrl?: string;
                    collectionMethod?: string;
                    timestamp?: string;
                    ratings?: {
                        overall?: number;
                        customerService?: number;
                        nps?: number;
                    };
                    title?: string;
                    content?: {
                        overall?: string;
                        customerService?: string;
                    };
                }): _142.BeamMerchantReview;
                fromAmino(object: _142.BeamMerchantReviewAmino): _142.BeamMerchantReview;
                toAmino(message: _142.BeamMerchantReview): _142.BeamMerchantReviewAmino;
                fromAminoMsg(object: _142.BeamMerchantReviewAminoMsg): _142.BeamMerchantReview;
                fromProtoMsg(message: _142.BeamMerchantReviewProtoMsg): _142.BeamMerchantReview;
                toProto(message: _142.BeamMerchantReview): Uint8Array;
                toProtoMsg(message: _142.BeamMerchantReview): _142.BeamMerchantReviewProtoMsg;
            };
            BeamMerchantReview_BeamMerchantReviewRating: {
                encode(message: _142.BeamMerchantReview_BeamMerchantReviewRating, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BeamMerchantReview_BeamMerchantReviewRating;
                fromPartial(object: {
                    overall?: number;
                    customerService?: number;
                    nps?: number;
                }): _142.BeamMerchantReview_BeamMerchantReviewRating;
                fromAmino(object: _142.BeamMerchantReview_BeamMerchantReviewRatingAmino): _142.BeamMerchantReview_BeamMerchantReviewRating;
                toAmino(message: _142.BeamMerchantReview_BeamMerchantReviewRating): _142.BeamMerchantReview_BeamMerchantReviewRatingAmino;
                fromAminoMsg(object: _142.BeamMerchantReview_BeamMerchantReviewRatingAminoMsg): _142.BeamMerchantReview_BeamMerchantReviewRating;
                fromProtoMsg(message: _142.BeamMerchantReview_BeamMerchantReviewRatingProtoMsg): _142.BeamMerchantReview_BeamMerchantReviewRating;
                toProto(message: _142.BeamMerchantReview_BeamMerchantReviewRating): Uint8Array;
                toProtoMsg(message: _142.BeamMerchantReview_BeamMerchantReviewRating): _142.BeamMerchantReview_BeamMerchantReviewRatingProtoMsg;
            };
            BeamMerchantReview_BeamMerchantReviewContent: {
                encode(message: _142.BeamMerchantReview_BeamMerchantReviewContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BeamMerchantReview_BeamMerchantReviewContent;
                fromPartial(object: {
                    overall?: string;
                    customerService?: string;
                }): _142.BeamMerchantReview_BeamMerchantReviewContent;
                fromAmino(object: _142.BeamMerchantReview_BeamMerchantReviewContentAmino): _142.BeamMerchantReview_BeamMerchantReviewContent;
                toAmino(message: _142.BeamMerchantReview_BeamMerchantReviewContent): _142.BeamMerchantReview_BeamMerchantReviewContentAmino;
                fromAminoMsg(object: _142.BeamMerchantReview_BeamMerchantReviewContentAminoMsg): _142.BeamMerchantReview_BeamMerchantReviewContent;
                fromProtoMsg(message: _142.BeamMerchantReview_BeamMerchantReviewContentProtoMsg): _142.BeamMerchantReview_BeamMerchantReviewContent;
                toProto(message: _142.BeamMerchantReview_BeamMerchantReviewContent): Uint8Array;
                toProtoMsg(message: _142.BeamMerchantReview_BeamMerchantReviewContent): _142.BeamMerchantReview_BeamMerchantReviewContentProtoMsg;
            };
            BeamProductReview: {
                encode(message: _142.BeamProductReview, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BeamProductReview;
                fromPartial(object: {
                    orderId?: string;
                    reviewId?: string;
                    ratingUrl?: string;
                    reviewUrl?: string;
                    collectionMethod?: string;
                    timestamp?: string;
                    ratings?: {
                        overall?: number;
                        quality?: number;
                    };
                    title?: string;
                    content?: {
                        overall?: string;
                        pros?: string;
                        cons?: string;
                    };
                    medias?: {
                        mimetype?: string;
                        url?: string;
                        thumbnailUrl?: string;
                    }[];
                    products?: {
                        name?: string;
                        url?: string;
                        urls?: string[];
                        ids?: {
                            gtins?: string[];
                            mpns?: string[];
                            skus?: string[];
                            asins?: string[];
                        };
                    }[];
                }): _142.BeamProductReview;
                fromAmino(object: _142.BeamProductReviewAmino): _142.BeamProductReview;
                toAmino(message: _142.BeamProductReview): _142.BeamProductReviewAmino;
                fromAminoMsg(object: _142.BeamProductReviewAminoMsg): _142.BeamProductReview;
                fromProtoMsg(message: _142.BeamProductReviewProtoMsg): _142.BeamProductReview;
                toProto(message: _142.BeamProductReview): Uint8Array;
                toProtoMsg(message: _142.BeamProductReview): _142.BeamProductReviewProtoMsg;
            };
            BeamProductReview_BeamProductReviewRating: {
                encode(message: _142.BeamProductReview_BeamProductReviewRating, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BeamProductReview_BeamProductReviewRating;
                fromPartial(object: {
                    overall?: number;
                    quality?: number;
                }): _142.BeamProductReview_BeamProductReviewRating;
                fromAmino(object: _142.BeamProductReview_BeamProductReviewRatingAmino): _142.BeamProductReview_BeamProductReviewRating;
                toAmino(message: _142.BeamProductReview_BeamProductReviewRating): _142.BeamProductReview_BeamProductReviewRatingAmino;
                fromAminoMsg(object: _142.BeamProductReview_BeamProductReviewRatingAminoMsg): _142.BeamProductReview_BeamProductReviewRating;
                fromProtoMsg(message: _142.BeamProductReview_BeamProductReviewRatingProtoMsg): _142.BeamProductReview_BeamProductReviewRating;
                toProto(message: _142.BeamProductReview_BeamProductReviewRating): Uint8Array;
                toProtoMsg(message: _142.BeamProductReview_BeamProductReviewRating): _142.BeamProductReview_BeamProductReviewRatingProtoMsg;
            };
            BeamProductReview_BeamProductReviewContent: {
                encode(message: _142.BeamProductReview_BeamProductReviewContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BeamProductReview_BeamProductReviewContent;
                fromPartial(object: {
                    overall?: string;
                    pros?: string;
                    cons?: string;
                }): _142.BeamProductReview_BeamProductReviewContent;
                fromAmino(object: _142.BeamProductReview_BeamProductReviewContentAmino): _142.BeamProductReview_BeamProductReviewContent;
                toAmino(message: _142.BeamProductReview_BeamProductReviewContent): _142.BeamProductReview_BeamProductReviewContentAmino;
                fromAminoMsg(object: _142.BeamProductReview_BeamProductReviewContentAminoMsg): _142.BeamProductReview_BeamProductReviewContent;
                fromProtoMsg(message: _142.BeamProductReview_BeamProductReviewContentProtoMsg): _142.BeamProductReview_BeamProductReviewContent;
                toProto(message: _142.BeamProductReview_BeamProductReviewContent): Uint8Array;
                toProtoMsg(message: _142.BeamProductReview_BeamProductReviewContent): _142.BeamProductReview_BeamProductReviewContentProtoMsg;
            };
            BeamProductReview_BeamProduct: {
                encode(message: _142.BeamProductReview_BeamProduct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BeamProductReview_BeamProduct;
                fromPartial(object: {
                    name?: string;
                    url?: string;
                    urls?: string[];
                    ids?: {
                        gtins?: string[];
                        mpns?: string[];
                        skus?: string[];
                        asins?: string[];
                    };
                }): _142.BeamProductReview_BeamProduct;
                fromAmino(object: _142.BeamProductReview_BeamProductAmino): _142.BeamProductReview_BeamProduct;
                toAmino(message: _142.BeamProductReview_BeamProduct): _142.BeamProductReview_BeamProductAmino;
                fromAminoMsg(object: _142.BeamProductReview_BeamProductAminoMsg): _142.BeamProductReview_BeamProduct;
                fromProtoMsg(message: _142.BeamProductReview_BeamProductProtoMsg): _142.BeamProductReview_BeamProduct;
                toProto(message: _142.BeamProductReview_BeamProduct): Uint8Array;
                toProtoMsg(message: _142.BeamProductReview_BeamProduct): _142.BeamProductReview_BeamProductProtoMsg;
            };
            BeamProductReview_BeamProduct_BeamProductIds: {
                encode(message: _142.BeamProductReview_BeamProduct_BeamProductIds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BeamProductReview_BeamProduct_BeamProductIds;
                fromPartial(object: {
                    gtins?: string[];
                    mpns?: string[];
                    skus?: string[];
                    asins?: string[];
                }): _142.BeamProductReview_BeamProduct_BeamProductIds;
                fromAmino(object: _142.BeamProductReview_BeamProduct_BeamProductIdsAmino): _142.BeamProductReview_BeamProduct_BeamProductIds;
                toAmino(message: _142.BeamProductReview_BeamProduct_BeamProductIds): _142.BeamProductReview_BeamProduct_BeamProductIdsAmino;
                fromAminoMsg(object: _142.BeamProductReview_BeamProduct_BeamProductIdsAminoMsg): _142.BeamProductReview_BeamProduct_BeamProductIds;
                fromProtoMsg(message: _142.BeamProductReview_BeamProduct_BeamProductIdsProtoMsg): _142.BeamProductReview_BeamProduct_BeamProductIds;
                toProto(message: _142.BeamProductReview_BeamProduct_BeamProductIds): Uint8Array;
                toProtoMsg(message: _142.BeamProductReview_BeamProduct_BeamProductIds): _142.BeamProductReview_BeamProduct_BeamProductIdsProtoMsg;
            };
            BeamData: {
                encode(message: _142.BeamData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BeamData;
                fromPartial(object: {
                    reward?: {
                        trigger?: string;
                        amount?: number;
                        maxAmount?: number;
                        currency?: string;
                        status?: string;
                        details?: {
                            type?: string;
                            amount?: number;
                            maxAmount?: number;
                            status?: string;
                        }[];
                    };
                    verifier?: {
                        name?: string;
                        url?: string;
                        signature?: string;
                    };
                    reviewer?: {
                        reviewerId?: string;
                        name?: string;
                        isAnonymous?: boolean;
                    };
                    merchantReview?: {
                        orderId?: string;
                        reviewId?: string;
                        merchantUrl?: string;
                        ratingUrl?: string;
                        reviewUrl?: string;
                        collectionMethod?: string;
                        timestamp?: string;
                        ratings?: {
                            overall?: number;
                            customerService?: number;
                            nps?: number;
                        };
                        title?: string;
                        content?: {
                            overall?: string;
                            customerService?: string;
                        };
                    };
                    productsReviews?: {
                        orderId?: string;
                        reviewId?: string;
                        ratingUrl?: string;
                        reviewUrl?: string;
                        collectionMethod?: string;
                        timestamp?: string;
                        ratings?: {
                            overall?: number;
                            quality?: number;
                        };
                        title?: string;
                        content?: {
                            overall?: string;
                            pros?: string;
                            cons?: string;
                        };
                        medias?: {
                            mimetype?: string;
                            url?: string;
                            thumbnailUrl?: string;
                        }[];
                        products?: {
                            name?: string;
                            url?: string;
                            urls?: string[];
                            ids?: {
                                gtins?: string[];
                                mpns?: string[];
                                skus?: string[];
                                asins?: string[];
                            };
                        }[];
                    }[];
                }): _142.BeamData;
                fromAmino(object: _142.BeamDataAmino): _142.BeamData;
                toAmino(message: _142.BeamData): _142.BeamDataAmino;
                fromAminoMsg(object: _142.BeamDataAminoMsg): _142.BeamData;
                fromProtoMsg(message: _142.BeamDataProtoMsg): _142.BeamData;
                toProto(message: _142.BeamData): Uint8Array;
                toProtoMsg(message: _142.BeamData): _142.BeamDataProtoMsg;
            };
            Beam: {
                encode(message: _142.Beam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Beam;
                fromPartial(object: {
                    creatorAddress?: string;
                    id?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    status?: _142.BeamState;
                    secret?: string;
                    claimAddress?: string;
                    fundsWithdrawn?: boolean;
                    claimed?: boolean;
                    cancelReason?: string;
                    hideContent?: boolean;
                    schema?: string;
                    data?: {
                        reward?: {
                            trigger?: string;
                            amount?: number;
                            maxAmount?: number;
                            currency?: string;
                            status?: string;
                            details?: {
                                type?: string;
                                amount?: number;
                                maxAmount?: number;
                                status?: string;
                            }[];
                        };
                        verifier?: {
                            name?: string;
                            url?: string;
                            signature?: string;
                        };
                        reviewer?: {
                            reviewerId?: string;
                            name?: string;
                            isAnonymous?: boolean;
                        };
                        merchantReview?: {
                            orderId?: string;
                            reviewId?: string;
                            merchantUrl?: string;
                            ratingUrl?: string;
                            reviewUrl?: string;
                            collectionMethod?: string;
                            timestamp?: string;
                            ratings?: {
                                overall?: number;
                                customerService?: number;
                                nps?: number;
                            };
                            title?: string;
                            content?: {
                                overall?: string;
                                customerService?: string;
                            };
                        };
                        productsReviews?: {
                            orderId?: string;
                            reviewId?: string;
                            ratingUrl?: string;
                            reviewUrl?: string;
                            collectionMethod?: string;
                            timestamp?: string;
                            ratings?: {
                                overall?: number;
                                quality?: number;
                            };
                            title?: string;
                            content?: {
                                overall?: string;
                                pros?: string;
                                cons?: string;
                            };
                            medias?: {
                                mimetype?: string;
                                url?: string;
                                thumbnailUrl?: string;
                            }[];
                            products?: {
                                name?: string;
                                url?: string;
                                urls?: string[];
                                ids?: {
                                    gtins?: string[];
                                    mpns?: string[];
                                    skus?: string[];
                                    asins?: string[];
                                };
                            }[];
                        }[];
                    };
                    claimExpiresAtBlock?: number;
                    closesAtBlock?: number;
                    createdAt?: Date;
                    closedAt?: Date;
                }): _142.Beam;
                fromAmino(object: _142.BeamAmino): _142.Beam;
                toAmino(message: _142.Beam): _142.BeamAmino;
                fromAminoMsg(object: _142.BeamAminoMsg): _142.Beam;
                fromProtoMsg(message: _142.BeamProtoMsg): _142.Beam;
                toProto(message: _142.Beam): Uint8Array;
                toProtoMsg(message: _142.Beam): _142.BeamProtoMsg;
            };
        };
        const dfract: {
            MsgClientImpl: typeof _266.MsgClientImpl;
            QueryClientImpl: typeof _262.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                moduleAccountBalance(request?: _151.QueryModuleAccountBalanceRequest): Promise<_151.QueryModuleAccountBalanceResponse>;
                params(request?: _151.QueryParamsRequest): Promise<_151.QueryParamsResponse>;
                getDepositsForAddress(request: _151.QueryGetDepositsForAddressRequest): Promise<_151.QueryGetDepositsForAddressResponse>;
                fetchDeposits(request: _151.QueryFetchDepositsRequest): Promise<_151.QueryFetchDepositsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _152.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawAndMint(value: _152.MsgWithdrawAndMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _152.MsgDeposit): {
                        typeUrl: string;
                        value: _152.MsgDeposit;
                    };
                    withdrawAndMint(value: _152.MsgWithdrawAndMint): {
                        typeUrl: string;
                        value: _152.MsgWithdrawAndMint;
                    };
                };
                fromPartial: {
                    deposit(value: _152.MsgDeposit): {
                        typeUrl: string;
                        value: _152.MsgDeposit;
                    };
                    withdrawAndMint(value: _152.MsgWithdrawAndMint): {
                        typeUrl: string;
                        value: _152.MsgWithdrawAndMint;
                    };
                };
            };
            AminoConverter: {
                "/lum.network.dfract.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _152.MsgDeposit) => _152.MsgDepositAmino;
                    fromAmino: (object: _152.MsgDepositAmino) => _152.MsgDeposit;
                };
                "/lum.network.dfract.MsgWithdrawAndMint": {
                    aminoType: string;
                    toAmino: (message: _152.MsgWithdrawAndMint) => _152.MsgWithdrawAndMintAmino;
                    fromAmino: (object: _152.MsgWithdrawAndMintAmino) => _152.MsgWithdrawAndMint;
                };
            };
            MsgDeposit: {
                encode(message: _152.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgDeposit;
                fromPartial(object: {
                    depositorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _152.MsgDeposit;
                fromAmino(object: _152.MsgDepositAmino): _152.MsgDeposit;
                toAmino(message: _152.MsgDeposit): _152.MsgDepositAmino;
                fromAminoMsg(object: _152.MsgDepositAminoMsg): _152.MsgDeposit;
                fromProtoMsg(message: _152.MsgDepositProtoMsg): _152.MsgDeposit;
                toProto(message: _152.MsgDeposit): Uint8Array;
                toProtoMsg(message: _152.MsgDeposit): _152.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _152.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgDepositResponse;
                fromPartial(_: {}): _152.MsgDepositResponse;
                fromAmino(_: _152.MsgDepositResponseAmino): _152.MsgDepositResponse;
                toAmino(_: _152.MsgDepositResponse): _152.MsgDepositResponseAmino;
                fromAminoMsg(object: _152.MsgDepositResponseAminoMsg): _152.MsgDepositResponse;
                fromProtoMsg(message: _152.MsgDepositResponseProtoMsg): _152.MsgDepositResponse;
                toProto(message: _152.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _152.MsgDepositResponse): _152.MsgDepositResponseProtoMsg;
            };
            MsgWithdrawAndMint: {
                encode(message: _152.MsgWithdrawAndMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgWithdrawAndMint;
                fromPartial(object: {
                    address?: string;
                    microMintRate?: string | number | import("long").Long;
                }): _152.MsgWithdrawAndMint;
                fromAmino(object: _152.MsgWithdrawAndMintAmino): _152.MsgWithdrawAndMint;
                toAmino(message: _152.MsgWithdrawAndMint): _152.MsgWithdrawAndMintAmino;
                fromAminoMsg(object: _152.MsgWithdrawAndMintAminoMsg): _152.MsgWithdrawAndMint;
                fromProtoMsg(message: _152.MsgWithdrawAndMintProtoMsg): _152.MsgWithdrawAndMint;
                toProto(message: _152.MsgWithdrawAndMint): Uint8Array;
                toProtoMsg(message: _152.MsgWithdrawAndMint): _152.MsgWithdrawAndMintProtoMsg;
            };
            MsgWithdrawAndMintResponse: {
                encode(_: _152.MsgWithdrawAndMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgWithdrawAndMintResponse;
                fromPartial(_: {}): _152.MsgWithdrawAndMintResponse;
                fromAmino(_: _152.MsgWithdrawAndMintResponseAmino): _152.MsgWithdrawAndMintResponse;
                toAmino(_: _152.MsgWithdrawAndMintResponse): _152.MsgWithdrawAndMintResponseAmino;
                fromAminoMsg(object: _152.MsgWithdrawAndMintResponseAminoMsg): _152.MsgWithdrawAndMintResponse;
                fromProtoMsg(message: _152.MsgWithdrawAndMintResponseProtoMsg): _152.MsgWithdrawAndMintResponse;
                toProto(message: _152.MsgWithdrawAndMintResponse): Uint8Array;
                toProtoMsg(message: _152.MsgWithdrawAndMintResponse): _152.MsgWithdrawAndMintResponseProtoMsg;
            };
            depositsQueryTypeFromJSON(object: any): _151.DepositsQueryType;
            depositsQueryTypeToJSON(object: _151.DepositsQueryType): string;
            DepositsQueryType: typeof _151.DepositsQueryType;
            DepositsQueryTypeSDKType: typeof _151.DepositsQueryType;
            DepositsQueryTypeAmino: typeof _151.DepositsQueryType;
            QueryModuleAccountBalanceRequest: {
                encode(_: _151.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryModuleAccountBalanceRequest;
                fromPartial(_: {}): _151.QueryModuleAccountBalanceRequest;
                fromAmino(_: _151.QueryModuleAccountBalanceRequestAmino): _151.QueryModuleAccountBalanceRequest;
                toAmino(_: _151.QueryModuleAccountBalanceRequest): _151.QueryModuleAccountBalanceRequestAmino;
                fromAminoMsg(object: _151.QueryModuleAccountBalanceRequestAminoMsg): _151.QueryModuleAccountBalanceRequest;
                fromProtoMsg(message: _151.QueryModuleAccountBalanceRequestProtoMsg): _151.QueryModuleAccountBalanceRequest;
                toProto(message: _151.QueryModuleAccountBalanceRequest): Uint8Array;
                toProtoMsg(message: _151.QueryModuleAccountBalanceRequest): _151.QueryModuleAccountBalanceRequestProtoMsg;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _151.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryModuleAccountBalanceResponse;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _151.QueryModuleAccountBalanceResponse;
                fromAmino(object: _151.QueryModuleAccountBalanceResponseAmino): _151.QueryModuleAccountBalanceResponse;
                toAmino(message: _151.QueryModuleAccountBalanceResponse): _151.QueryModuleAccountBalanceResponseAmino;
                fromAminoMsg(object: _151.QueryModuleAccountBalanceResponseAminoMsg): _151.QueryModuleAccountBalanceResponse;
                fromProtoMsg(message: _151.QueryModuleAccountBalanceResponseProtoMsg): _151.QueryModuleAccountBalanceResponse;
                toProto(message: _151.QueryModuleAccountBalanceResponse): Uint8Array;
                toProtoMsg(message: _151.QueryModuleAccountBalanceResponse): _151.QueryModuleAccountBalanceResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _151.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryParamsRequest;
                fromPartial(_: {}): _151.QueryParamsRequest;
                fromAmino(_: _151.QueryParamsRequestAmino): _151.QueryParamsRequest;
                toAmino(_: _151.QueryParamsRequest): _151.QueryParamsRequestAmino;
                fromAminoMsg(object: _151.QueryParamsRequestAminoMsg): _151.QueryParamsRequest;
                fromProtoMsg(message: _151.QueryParamsRequestProtoMsg): _151.QueryParamsRequest;
                toProto(message: _151.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _151.QueryParamsRequest): _151.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _151.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        depositDenoms?: string[];
                        minDepositAmount?: string;
                        withdrawalAddress?: string;
                        isDepositEnabled?: boolean;
                    };
                }): _151.QueryParamsResponse;
                fromAmino(object: _151.QueryParamsResponseAmino): _151.QueryParamsResponse;
                toAmino(message: _151.QueryParamsResponse): _151.QueryParamsResponseAmino;
                fromAminoMsg(object: _151.QueryParamsResponseAminoMsg): _151.QueryParamsResponse;
                fromProtoMsg(message: _151.QueryParamsResponseProtoMsg): _151.QueryParamsResponse;
                toProto(message: _151.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _151.QueryParamsResponse): _151.QueryParamsResponseProtoMsg;
            };
            QueryGetDepositsForAddressRequest: {
                encode(message: _151.QueryGetDepositsForAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryGetDepositsForAddressRequest;
                fromPartial(object: {
                    address?: string;
                }): _151.QueryGetDepositsForAddressRequest;
                fromAmino(object: _151.QueryGetDepositsForAddressRequestAmino): _151.QueryGetDepositsForAddressRequest;
                toAmino(message: _151.QueryGetDepositsForAddressRequest): _151.QueryGetDepositsForAddressRequestAmino;
                fromAminoMsg(object: _151.QueryGetDepositsForAddressRequestAminoMsg): _151.QueryGetDepositsForAddressRequest;
                fromProtoMsg(message: _151.QueryGetDepositsForAddressRequestProtoMsg): _151.QueryGetDepositsForAddressRequest;
                toProto(message: _151.QueryGetDepositsForAddressRequest): Uint8Array;
                toProtoMsg(message: _151.QueryGetDepositsForAddressRequest): _151.QueryGetDepositsForAddressRequestProtoMsg;
            };
            QueryFetchDepositsRequest: {
                encode(message: _151.QueryFetchDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryFetchDepositsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    type?: _151.DepositsQueryType;
                }): _151.QueryFetchDepositsRequest;
                fromAmino(object: _151.QueryFetchDepositsRequestAmino): _151.QueryFetchDepositsRequest;
                toAmino(message: _151.QueryFetchDepositsRequest): _151.QueryFetchDepositsRequestAmino;
                fromAminoMsg(object: _151.QueryFetchDepositsRequestAminoMsg): _151.QueryFetchDepositsRequest;
                fromProtoMsg(message: _151.QueryFetchDepositsRequestProtoMsg): _151.QueryFetchDepositsRequest;
                toProto(message: _151.QueryFetchDepositsRequest): Uint8Array;
                toProtoMsg(message: _151.QueryFetchDepositsRequest): _151.QueryFetchDepositsRequestProtoMsg;
            };
            QueryGetDepositsForAddressResponse: {
                encode(message: _151.QueryGetDepositsForAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryGetDepositsForAddressResponse;
                fromPartial(object: {
                    depositsPendingWithdrawal?: {
                        depositorAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAt?: Date;
                    };
                    depositsPendingMint?: {
                        depositorAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAt?: Date;
                    };
                    depositsMinted?: {
                        depositorAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAt?: Date;
                    };
                }): _151.QueryGetDepositsForAddressResponse;
                fromAmino(object: _151.QueryGetDepositsForAddressResponseAmino): _151.QueryGetDepositsForAddressResponse;
                toAmino(message: _151.QueryGetDepositsForAddressResponse): _151.QueryGetDepositsForAddressResponseAmino;
                fromAminoMsg(object: _151.QueryGetDepositsForAddressResponseAminoMsg): _151.QueryGetDepositsForAddressResponse;
                fromProtoMsg(message: _151.QueryGetDepositsForAddressResponseProtoMsg): _151.QueryGetDepositsForAddressResponse;
                toProto(message: _151.QueryGetDepositsForAddressResponse): Uint8Array;
                toProtoMsg(message: _151.QueryGetDepositsForAddressResponse): _151.QueryGetDepositsForAddressResponseProtoMsg;
            };
            QueryFetchDepositsResponse: {
                encode(message: _151.QueryFetchDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryFetchDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        depositorAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _151.QueryFetchDepositsResponse;
                fromAmino(object: _151.QueryFetchDepositsResponseAmino): _151.QueryFetchDepositsResponse;
                toAmino(message: _151.QueryFetchDepositsResponse): _151.QueryFetchDepositsResponseAmino;
                fromAminoMsg(object: _151.QueryFetchDepositsResponseAminoMsg): _151.QueryFetchDepositsResponse;
                fromProtoMsg(message: _151.QueryFetchDepositsResponseProtoMsg): _151.QueryFetchDepositsResponse;
                toProto(message: _151.QueryFetchDepositsResponse): Uint8Array;
                toProtoMsg(message: _151.QueryFetchDepositsResponse): _151.QueryFetchDepositsResponseProtoMsg;
            };
            WithdrawAndMintProposal: {
                encode(message: _150.WithdrawAndMintProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.WithdrawAndMintProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    withdrawalAddress?: string;
                    microMintRate?: string | number | import("long").Long;
                }): _150.WithdrawAndMintProposal;
                fromAmino(object: _150.WithdrawAndMintProposalAmino): _150.WithdrawAndMintProposal;
                toAmino(message: _150.WithdrawAndMintProposal): _150.WithdrawAndMintProposalAmino;
                fromAminoMsg(object: _150.WithdrawAndMintProposalAminoMsg): _150.WithdrawAndMintProposal;
                fromProtoMsg(message: _150.WithdrawAndMintProposalProtoMsg): _150.WithdrawAndMintProposal;
                toProto(message: _150.WithdrawAndMintProposal): Uint8Array;
                toProtoMsg(message: _150.WithdrawAndMintProposal): _150.WithdrawAndMintProposalProtoMsg;
            };
            Params: {
                encode(message: _149.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Params;
                fromPartial(object: {
                    depositDenoms?: string[];
                    minDepositAmount?: string;
                    withdrawalAddress?: string;
                    isDepositEnabled?: boolean;
                }): _149.Params;
                fromAmino(object: _149.ParamsAmino): _149.Params;
                toAmino(message: _149.Params): _149.ParamsAmino;
                fromAminoMsg(object: _149.ParamsAminoMsg): _149.Params;
                fromProtoMsg(message: _149.ParamsProtoMsg): _149.Params;
                toProto(message: _149.Params): Uint8Array;
                toProtoMsg(message: _149.Params): _149.ParamsProtoMsg;
            };
            ProposalUpdateParams: {
                encode(message: _148.ProposalUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ProposalUpdateParams;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    withdrawalAddress?: string;
                    isDepositEnabled?: {
                        value?: boolean;
                    };
                    depositDenoms?: string[];
                    minDepositAmount?: string;
                }): _148.ProposalUpdateParams;
                fromAmino(object: _148.ProposalUpdateParamsAmino): _148.ProposalUpdateParams;
                toAmino(message: _148.ProposalUpdateParams): _148.ProposalUpdateParamsAmino;
                fromAminoMsg(object: _148.ProposalUpdateParamsAminoMsg): _148.ProposalUpdateParams;
                fromProtoMsg(message: _148.ProposalUpdateParamsProtoMsg): _148.ProposalUpdateParams;
                toProto(message: _148.ProposalUpdateParams): Uint8Array;
                toProtoMsg(message: _148.ProposalUpdateParams): _148.ProposalUpdateParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _147.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.GenesisState;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    params?: {
                        depositDenoms?: string[];
                        minDepositAmount?: string;
                        withdrawalAddress?: string;
                        isDepositEnabled?: boolean;
                    };
                    depositsPendingWithdrawal?: {
                        depositorAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAt?: Date;
                    }[];
                    depositsPendingMint?: {
                        depositorAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAt?: Date;
                    }[];
                    depositsMinted?: {
                        depositorAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAt?: Date;
                    }[];
                }): _147.GenesisState;
                fromAmino(object: _147.GenesisStateAmino): _147.GenesisState;
                toAmino(message: _147.GenesisState): _147.GenesisStateAmino;
                fromAminoMsg(object: _147.GenesisStateAminoMsg): _147.GenesisState;
                fromProtoMsg(message: _147.GenesisStateProtoMsg): _147.GenesisState;
                toProto(message: _147.GenesisState): Uint8Array;
                toProtoMsg(message: _147.GenesisState): _147.GenesisStateProtoMsg;
            };
            Deposit: {
                encode(message: _146.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Deposit;
                fromPartial(object: {
                    depositorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    createdAt?: Date;
                }): _146.Deposit;
                fromAmino(object: _146.DepositAmino): _146.Deposit;
                toAmino(message: _146.Deposit): _146.DepositAmino;
                fromAminoMsg(object: _146.DepositAminoMsg): _146.Deposit;
                fromProtoMsg(message: _146.DepositProtoMsg): _146.Deposit;
                toProto(message: _146.Deposit): Uint8Array;
                toProtoMsg(message: _146.Deposit): _146.DepositProtoMsg;
            };
        };
        const icacallbacks: {
            QueryClientImpl: typeof _263.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _157.QueryParamsRequest): Promise<_157.QueryParamsResponse>;
                callbackData(request: _157.QueryGetCallbackDataRequest): Promise<_157.QueryGetCallbackDataResponse>;
                callbackDataAll(request?: _157.QueryAllCallbackDataRequest): Promise<_157.QueryAllCallbackDataResponse>;
            };
            QueryParamsRequest: {
                encode(_: _157.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryParamsRequest;
                fromPartial(_: {}): _157.QueryParamsRequest;
                fromAmino(_: _157.QueryParamsRequestAmino): _157.QueryParamsRequest;
                toAmino(_: _157.QueryParamsRequest): _157.QueryParamsRequestAmino;
                fromAminoMsg(object: _157.QueryParamsRequestAminoMsg): _157.QueryParamsRequest;
                fromProtoMsg(message: _157.QueryParamsRequestProtoMsg): _157.QueryParamsRequest;
                toProto(message: _157.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _157.QueryParamsRequest): _157.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _157.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _157.QueryParamsResponse;
                fromAmino(object: _157.QueryParamsResponseAmino): _157.QueryParamsResponse;
                toAmino(message: _157.QueryParamsResponse): _157.QueryParamsResponseAmino;
                fromAminoMsg(object: _157.QueryParamsResponseAminoMsg): _157.QueryParamsResponse;
                fromProtoMsg(message: _157.QueryParamsResponseProtoMsg): _157.QueryParamsResponse;
                toProto(message: _157.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _157.QueryParamsResponse): _157.QueryParamsResponseProtoMsg;
            };
            QueryGetCallbackDataRequest: {
                encode(message: _157.QueryGetCallbackDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetCallbackDataRequest;
                fromPartial(object: {
                    callbackKey?: string;
                }): _157.QueryGetCallbackDataRequest;
                fromAmino(object: _157.QueryGetCallbackDataRequestAmino): _157.QueryGetCallbackDataRequest;
                toAmino(message: _157.QueryGetCallbackDataRequest): _157.QueryGetCallbackDataRequestAmino;
                fromAminoMsg(object: _157.QueryGetCallbackDataRequestAminoMsg): _157.QueryGetCallbackDataRequest;
                fromProtoMsg(message: _157.QueryGetCallbackDataRequestProtoMsg): _157.QueryGetCallbackDataRequest;
                toProto(message: _157.QueryGetCallbackDataRequest): Uint8Array;
                toProtoMsg(message: _157.QueryGetCallbackDataRequest): _157.QueryGetCallbackDataRequestProtoMsg;
            };
            QueryGetCallbackDataResponse: {
                encode(message: _157.QueryGetCallbackDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryGetCallbackDataResponse;
                fromPartial(object: {
                    callbackData?: {
                        callbackKey?: string;
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").Long;
                        callbackId?: string;
                        callbackArgs?: Uint8Array;
                    };
                }): _157.QueryGetCallbackDataResponse;
                fromAmino(object: _157.QueryGetCallbackDataResponseAmino): _157.QueryGetCallbackDataResponse;
                toAmino(message: _157.QueryGetCallbackDataResponse): _157.QueryGetCallbackDataResponseAmino;
                fromAminoMsg(object: _157.QueryGetCallbackDataResponseAminoMsg): _157.QueryGetCallbackDataResponse;
                fromProtoMsg(message: _157.QueryGetCallbackDataResponseProtoMsg): _157.QueryGetCallbackDataResponse;
                toProto(message: _157.QueryGetCallbackDataResponse): Uint8Array;
                toProtoMsg(message: _157.QueryGetCallbackDataResponse): _157.QueryGetCallbackDataResponseProtoMsg;
            };
            QueryAllCallbackDataRequest: {
                encode(message: _157.QueryAllCallbackDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryAllCallbackDataRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _157.QueryAllCallbackDataRequest;
                fromAmino(object: _157.QueryAllCallbackDataRequestAmino): _157.QueryAllCallbackDataRequest;
                toAmino(message: _157.QueryAllCallbackDataRequest): _157.QueryAllCallbackDataRequestAmino;
                fromAminoMsg(object: _157.QueryAllCallbackDataRequestAminoMsg): _157.QueryAllCallbackDataRequest;
                fromProtoMsg(message: _157.QueryAllCallbackDataRequestProtoMsg): _157.QueryAllCallbackDataRequest;
                toProto(message: _157.QueryAllCallbackDataRequest): Uint8Array;
                toProtoMsg(message: _157.QueryAllCallbackDataRequest): _157.QueryAllCallbackDataRequestProtoMsg;
            };
            QueryAllCallbackDataResponse: {
                encode(message: _157.QueryAllCallbackDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryAllCallbackDataResponse;
                fromPartial(object: {
                    callbackData?: {
                        callbackKey?: string;
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").Long;
                        callbackId?: string;
                        callbackArgs?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _157.QueryAllCallbackDataResponse;
                fromAmino(object: _157.QueryAllCallbackDataResponseAmino): _157.QueryAllCallbackDataResponse;
                toAmino(message: _157.QueryAllCallbackDataResponse): _157.QueryAllCallbackDataResponseAmino;
                fromAminoMsg(object: _157.QueryAllCallbackDataResponseAminoMsg): _157.QueryAllCallbackDataResponse;
                fromProtoMsg(message: _157.QueryAllCallbackDataResponseProtoMsg): _157.QueryAllCallbackDataResponse;
                toProto(message: _157.QueryAllCallbackDataResponse): Uint8Array;
                toProtoMsg(message: _157.QueryAllCallbackDataResponse): _157.QueryAllCallbackDataResponseProtoMsg;
            };
            Params: {
                encode(_: _156.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Params;
                fromPartial(_: {}): _156.Params;
                fromAmino(_: _156.ParamsAmino): _156.Params;
                toAmino(_: _156.Params): _156.ParamsAmino;
                fromAminoMsg(object: _156.ParamsAminoMsg): _156.Params;
                fromProtoMsg(message: _156.ParamsProtoMsg): _156.Params;
                toProto(message: _156.Params): Uint8Array;
                toProtoMsg(message: _156.Params): _156.ParamsProtoMsg;
            };
            IcacallbacksPacketData: {
                encode(message: _155.IcacallbacksPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.IcacallbacksPacketData;
                fromPartial(object: {
                    noData?: {};
                }): _155.IcacallbacksPacketData;
                fromAmino(object: _155.IcacallbacksPacketDataAmino): _155.IcacallbacksPacketData;
                toAmino(message: _155.IcacallbacksPacketData): _155.IcacallbacksPacketDataAmino;
                fromAminoMsg(object: _155.IcacallbacksPacketDataAminoMsg): _155.IcacallbacksPacketData;
                fromProtoMsg(message: _155.IcacallbacksPacketDataProtoMsg): _155.IcacallbacksPacketData;
                toProto(message: _155.IcacallbacksPacketData): Uint8Array;
                toProtoMsg(message: _155.IcacallbacksPacketData): _155.IcacallbacksPacketDataProtoMsg;
            };
            NoData: {
                encode(_: _155.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.NoData;
                fromPartial(_: {}): _155.NoData;
                fromAmino(_: _155.NoDataAmino): _155.NoData;
                toAmino(_: _155.NoData): _155.NoDataAmino;
                fromAminoMsg(object: _155.NoDataAminoMsg): _155.NoData;
                fromProtoMsg(message: _155.NoDataProtoMsg): _155.NoData;
                toProto(message: _155.NoData): Uint8Array;
                toProtoMsg(message: _155.NoData): _155.NoDataProtoMsg;
            };
            GenesisState: {
                encode(message: _154.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.GenesisState;
                fromPartial(object: {
                    params?: {};
                    portId?: string;
                    callbackDataList?: {
                        callbackKey?: string;
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").Long;
                        callbackId?: string;
                        callbackArgs?: Uint8Array;
                    }[];
                }): _154.GenesisState;
                fromAmino(object: _154.GenesisStateAmino): _154.GenesisState;
                toAmino(message: _154.GenesisState): _154.GenesisStateAmino;
                fromAminoMsg(object: _154.GenesisStateAminoMsg): _154.GenesisState;
                fromProtoMsg(message: _154.GenesisStateProtoMsg): _154.GenesisState;
                toProto(message: _154.GenesisState): Uint8Array;
                toProtoMsg(message: _154.GenesisState): _154.GenesisStateProtoMsg;
            };
            CallbackData: {
                encode(message: _153.CallbackData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.CallbackData;
                fromPartial(object: {
                    callbackKey?: string;
                    portId?: string;
                    channelId?: string;
                    sequence?: string | number | import("long").Long;
                    callbackId?: string;
                    callbackArgs?: Uint8Array;
                }): _153.CallbackData;
                fromAmino(object: _153.CallbackDataAmino): _153.CallbackData;
                toAmino(message: _153.CallbackData): _153.CallbackDataAmino;
                fromAminoMsg(object: _153.CallbackDataAminoMsg): _153.CallbackData;
                fromProtoMsg(message: _153.CallbackDataProtoMsg): _153.CallbackData;
                toProto(message: _153.CallbackData): Uint8Array;
                toProtoMsg(message: _153.CallbackData): _153.CallbackDataProtoMsg;
            };
        };
        const millions: {
            MsgClientImpl: typeof _267.MsgClientImpl;
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _172.QueryParamsRequest): Promise<_172.QueryParamsResponse>;
                pools(request?: _172.QueryPoolsRequest): Promise<_172.QueryPoolsResponse>;
                pool(request: _172.QueryPoolRequest): Promise<_172.QueryPoolResponse>;
                deposits(request?: _172.QueryDepositsRequest): Promise<_172.QueryDepositsResponse>;
                poolDeposits(request: _172.QueryPoolDepositsRequest): Promise<_172.QueryDepositsResponse>;
                poolDeposit(request: _172.QueryPoolDepositRequest): Promise<_172.QueryDepositResponse>;
                accountDeposits(request: _172.QueryAccountDepositsRequest): Promise<_172.QueryDepositsResponse>;
                accountPoolDeposits(request: _172.QueryAccountPoolDepositsRequest): Promise<_172.QueryDepositsResponse>;
                draws(request?: _172.QueryDrawsRequest): Promise<_172.QueryDrawsResponse>;
                poolDraws(request: _172.QueryPoolDrawsRequest): Promise<_172.QueryDrawsResponse>;
                poolDraw(request: _172.QueryPoolDrawRequest): Promise<_172.QueryDrawResponse>;
                prizes(request?: _172.QueryPrizesRequest): Promise<_172.QueryPrizesResponse>;
                poolPrizes(request: _172.QueryPoolPrizesRequest): Promise<_172.QueryPrizesResponse>;
                poolDrawPrizes(request: _172.QueryPoolDrawPrizesRequest): Promise<_172.QueryPrizesResponse>;
                poolDrawPrize(request: _172.QueryPoolDrawPrizeRequest): Promise<_172.QueryPrizeResponse>;
                accountPrizes(request: _172.QueryAccountPrizesRequest): Promise<_172.QueryPrizesResponse>;
                accountPoolPrizes(request: _172.QueryAccountPoolPrizesRequest): Promise<_172.QueryPrizesResponse>;
                accountPoolDrawPrizes(request: _172.QueryAccountPoolDrawPrizesRequest): Promise<_172.QueryPrizesResponse>;
                withdrawals(request?: _172.QueryWithdrawalsRequest): Promise<_172.QueryWithdrawalsResponse>;
                poolWithdrawals(request: _172.QueryPoolWithdrawalsRequest): Promise<_172.QueryWithdrawalsResponse>;
                poolWithdrawal(request: _172.QueryPoolWithdrawalRequest): Promise<_172.QueryWithdrawalResponse>;
                accountWithdrawals(request: _172.QueryAccountWithdrawalsRequest): Promise<_172.QueryWithdrawalsResponse>;
                accountPoolWithdrawals(request: _172.QueryAccountPoolWithdrawalsRequest): Promise<_172.QueryWithdrawalsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _173.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositRetry(value: _173.MsgDepositRetry): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositEdit(value: _173.MsgDepositEdit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimPrize(value: _173.MsgClaimPrize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDeposit(value: _173.MsgWithdrawDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDepositRetry(value: _173.MsgWithdrawDepositRetry): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    drawRetry(value: _173.MsgDrawRetry): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    restoreInterchainAccounts(value: _173.MsgRestoreInterchainAccounts): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    generateSeed(value: _173.MsgGenerateSeed): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _173.MsgDeposit): {
                        typeUrl: string;
                        value: _173.MsgDeposit;
                    };
                    depositRetry(value: _173.MsgDepositRetry): {
                        typeUrl: string;
                        value: _173.MsgDepositRetry;
                    };
                    depositEdit(value: _173.MsgDepositEdit): {
                        typeUrl: string;
                        value: _173.MsgDepositEdit;
                    };
                    claimPrize(value: _173.MsgClaimPrize): {
                        typeUrl: string;
                        value: _173.MsgClaimPrize;
                    };
                    withdrawDeposit(value: _173.MsgWithdrawDeposit): {
                        typeUrl: string;
                        value: _173.MsgWithdrawDeposit;
                    };
                    withdrawDepositRetry(value: _173.MsgWithdrawDepositRetry): {
                        typeUrl: string;
                        value: _173.MsgWithdrawDepositRetry;
                    };
                    drawRetry(value: _173.MsgDrawRetry): {
                        typeUrl: string;
                        value: _173.MsgDrawRetry;
                    };
                    restoreInterchainAccounts(value: _173.MsgRestoreInterchainAccounts): {
                        typeUrl: string;
                        value: _173.MsgRestoreInterchainAccounts;
                    };
                    generateSeed(value: _173.MsgGenerateSeed): {
                        typeUrl: string;
                        value: _173.MsgGenerateSeed;
                    };
                };
                fromPartial: {
                    deposit(value: _173.MsgDeposit): {
                        typeUrl: string;
                        value: _173.MsgDeposit;
                    };
                    depositRetry(value: _173.MsgDepositRetry): {
                        typeUrl: string;
                        value: _173.MsgDepositRetry;
                    };
                    depositEdit(value: _173.MsgDepositEdit): {
                        typeUrl: string;
                        value: _173.MsgDepositEdit;
                    };
                    claimPrize(value: _173.MsgClaimPrize): {
                        typeUrl: string;
                        value: _173.MsgClaimPrize;
                    };
                    withdrawDeposit(value: _173.MsgWithdrawDeposit): {
                        typeUrl: string;
                        value: _173.MsgWithdrawDeposit;
                    };
                    withdrawDepositRetry(value: _173.MsgWithdrawDepositRetry): {
                        typeUrl: string;
                        value: _173.MsgWithdrawDepositRetry;
                    };
                    drawRetry(value: _173.MsgDrawRetry): {
                        typeUrl: string;
                        value: _173.MsgDrawRetry;
                    };
                    restoreInterchainAccounts(value: _173.MsgRestoreInterchainAccounts): {
                        typeUrl: string;
                        value: _173.MsgRestoreInterchainAccounts;
                    };
                    generateSeed(value: _173.MsgGenerateSeed): {
                        typeUrl: string;
                        value: _173.MsgGenerateSeed;
                    };
                };
            };
            AminoConverter: {
                "/lum.network.millions.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _173.MsgDeposit) => _173.MsgDepositAmino;
                    fromAmino: (object: _173.MsgDepositAmino) => _173.MsgDeposit;
                };
                "/lum.network.millions.MsgDepositRetry": {
                    aminoType: string;
                    toAmino: (message: _173.MsgDepositRetry) => _173.MsgDepositRetryAmino;
                    fromAmino: (object: _173.MsgDepositRetryAmino) => _173.MsgDepositRetry;
                };
                "/lum.network.millions.MsgDepositEdit": {
                    aminoType: string;
                    toAmino: (message: _173.MsgDepositEdit) => _173.MsgDepositEditAmino;
                    fromAmino: (object: _173.MsgDepositEditAmino) => _173.MsgDepositEdit;
                };
                "/lum.network.millions.MsgClaimPrize": {
                    aminoType: string;
                    toAmino: (message: _173.MsgClaimPrize) => _173.MsgClaimPrizeAmino;
                    fromAmino: (object: _173.MsgClaimPrizeAmino) => _173.MsgClaimPrize;
                };
                "/lum.network.millions.MsgWithdrawDeposit": {
                    aminoType: string;
                    toAmino: (message: _173.MsgWithdrawDeposit) => _173.MsgWithdrawDepositAmino;
                    fromAmino: (object: _173.MsgWithdrawDepositAmino) => _173.MsgWithdrawDeposit;
                };
                "/lum.network.millions.MsgWithdrawDepositRetry": {
                    aminoType: string;
                    toAmino: (message: _173.MsgWithdrawDepositRetry) => _173.MsgWithdrawDepositRetryAmino;
                    fromAmino: (object: _173.MsgWithdrawDepositRetryAmino) => _173.MsgWithdrawDepositRetry;
                };
                "/lum.network.millions.MsgDrawRetry": {
                    aminoType: string;
                    toAmino: (message: _173.MsgDrawRetry) => _173.MsgDrawRetryAmino;
                    fromAmino: (object: _173.MsgDrawRetryAmino) => _173.MsgDrawRetry;
                };
                "/lum.network.millions.MsgRestoreInterchainAccounts": {
                    aminoType: string;
                    toAmino: (message: _173.MsgRestoreInterchainAccounts) => _173.MsgRestoreInterchainAccountsAmino;
                    fromAmino: (object: _173.MsgRestoreInterchainAccountsAmino) => _173.MsgRestoreInterchainAccounts;
                };
                "/lum.network.millions.MsgGenerateSeed": {
                    aminoType: string;
                    toAmino: (message: _173.MsgGenerateSeed) => _173.MsgGenerateSeedAmino;
                    fromAmino: (object: _173.MsgGenerateSeedAmino) => _173.MsgGenerateSeed;
                };
            };
            withdrawalStateFromJSON(object: any): _174.WithdrawalState;
            withdrawalStateToJSON(object: _174.WithdrawalState): string;
            WithdrawalState: typeof _174.WithdrawalState;
            WithdrawalStateSDKType: typeof _174.WithdrawalState;
            WithdrawalStateAmino: typeof _174.WithdrawalState;
            Withdrawal: {
                encode(message: _174.Withdrawal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Withdrawal;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    depositId?: string | number | import("long").Long;
                    withdrawalId?: string | number | import("long").Long;
                    state?: _174.WithdrawalState;
                    errorState?: _174.WithdrawalState;
                    depositorAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    createdAtHeight?: string | number | import("long").Long;
                    updatedAtHeight?: string | number | import("long").Long;
                    unbondingEndsAt?: Date;
                    createdAt?: Date;
                    updatedAt?: Date;
                }): _174.Withdrawal;
                fromAmino(object: _174.WithdrawalAmino): _174.Withdrawal;
                toAmino(message: _174.Withdrawal): _174.WithdrawalAmino;
                fromAminoMsg(object: _174.WithdrawalAminoMsg): _174.Withdrawal;
                fromProtoMsg(message: _174.WithdrawalProtoMsg): _174.Withdrawal;
                toProto(message: _174.Withdrawal): Uint8Array;
                toProtoMsg(message: _174.Withdrawal): _174.WithdrawalProtoMsg;
            };
            WithdrawalIDs: {
                encode(message: _174.WithdrawalIDs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.WithdrawalIDs;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    withdrawalId?: string | number | import("long").Long;
                }): _174.WithdrawalIDs;
                fromAmino(object: _174.WithdrawalIDsAmino): _174.WithdrawalIDs;
                toAmino(message: _174.WithdrawalIDs): _174.WithdrawalIDsAmino;
                fromAminoMsg(object: _174.WithdrawalIDsAminoMsg): _174.WithdrawalIDs;
                fromProtoMsg(message: _174.WithdrawalIDsProtoMsg): _174.WithdrawalIDs;
                toProto(message: _174.WithdrawalIDs): Uint8Array;
                toProtoMsg(message: _174.WithdrawalIDs): _174.WithdrawalIDsProtoMsg;
            };
            WithdrawalIDsCollection: {
                encode(message: _174.WithdrawalIDsCollection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.WithdrawalIDsCollection;
                fromPartial(object: {
                    withdrawalsIds?: {
                        poolId?: string | number | import("long").Long;
                        withdrawalId?: string | number | import("long").Long;
                    }[];
                }): _174.WithdrawalIDsCollection;
                fromAmino(object: _174.WithdrawalIDsCollectionAmino): _174.WithdrawalIDsCollection;
                toAmino(message: _174.WithdrawalIDsCollection): _174.WithdrawalIDsCollectionAmino;
                fromAminoMsg(object: _174.WithdrawalIDsCollectionAminoMsg): _174.WithdrawalIDsCollection;
                fromProtoMsg(message: _174.WithdrawalIDsCollectionProtoMsg): _174.WithdrawalIDsCollection;
                toProto(message: _174.WithdrawalIDsCollection): Uint8Array;
                toProtoMsg(message: _174.WithdrawalIDsCollection): _174.WithdrawalIDsCollectionProtoMsg;
            };
            MsgUpdateParams: {
                encode(message: _173.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgUpdateParams;
                fromPartial(object: {
                    minDepositAmount?: string;
                    maxPrizeStrategyBatches?: string;
                    maxPrizeBatchQuantity?: string;
                    minDrawScheduleDelta?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    maxDrawScheduleDelta?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    prizeExpirationDelta?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    feesStakers?: string;
                    minDepositDrawDelta?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    updaterAddress?: string;
                }): _173.MsgUpdateParams;
                fromAmino(object: _173.MsgUpdateParamsAmino): _173.MsgUpdateParams;
                toAmino(message: _173.MsgUpdateParams): _173.MsgUpdateParamsAmino;
                fromAminoMsg(object: _173.MsgUpdateParamsAminoMsg): _173.MsgUpdateParams;
                fromProtoMsg(message: _173.MsgUpdateParamsProtoMsg): _173.MsgUpdateParams;
                toProto(message: _173.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _173.MsgUpdateParams): _173.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                encode(_: _173.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgUpdateParamsResponse;
                fromPartial(_: {}): _173.MsgUpdateParamsResponse;
                fromAmino(_: _173.MsgUpdateParamsResponseAmino): _173.MsgUpdateParamsResponse;
                toAmino(_: _173.MsgUpdateParamsResponse): _173.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _173.MsgUpdateParamsResponseAminoMsg): _173.MsgUpdateParamsResponse;
                fromProtoMsg(message: _173.MsgUpdateParamsResponseProtoMsg): _173.MsgUpdateParamsResponse;
                toProto(message: _173.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _173.MsgUpdateParamsResponse): _173.MsgUpdateParamsResponseProtoMsg;
            };
            MsgRegisterPool: {
                encode(message: _173.MsgRegisterPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgRegisterPool;
                fromPartial(object: {
                    chainId?: string;
                    denom?: string;
                    nativeDenom?: string;
                    connectionId?: string;
                    validators?: string[];
                    minDepositAmount?: string;
                    drawSchedule?: {
                        initialDrawAt?: Date;
                        drawDelta?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    prizeStrategy?: {
                        prizeBatches?: {
                            poolPercent?: string | number | import("long").Long;
                            quantity?: string | number | import("long").Long;
                            drawProbability?: string;
                            isUnique?: boolean;
                        }[];
                    };
                    bech32PrefixAccAddr?: string;
                    bech32PrefixValAddr?: string;
                    creatorAddress?: string;
                }): _173.MsgRegisterPool;
                fromAmino(object: _173.MsgRegisterPoolAmino): _173.MsgRegisterPool;
                toAmino(message: _173.MsgRegisterPool): _173.MsgRegisterPoolAmino;
                fromAminoMsg(object: _173.MsgRegisterPoolAminoMsg): _173.MsgRegisterPool;
                fromProtoMsg(message: _173.MsgRegisterPoolProtoMsg): _173.MsgRegisterPool;
                toProto(message: _173.MsgRegisterPool): Uint8Array;
                toProtoMsg(message: _173.MsgRegisterPool): _173.MsgRegisterPoolProtoMsg;
            };
            MsgRegisterPoolResponse: {
                encode(message: _173.MsgRegisterPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgRegisterPoolResponse;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                }): _173.MsgRegisterPoolResponse;
                fromAmino(object: _173.MsgRegisterPoolResponseAmino): _173.MsgRegisterPoolResponse;
                toAmino(message: _173.MsgRegisterPoolResponse): _173.MsgRegisterPoolResponseAmino;
                fromAminoMsg(object: _173.MsgRegisterPoolResponseAminoMsg): _173.MsgRegisterPoolResponse;
                fromProtoMsg(message: _173.MsgRegisterPoolResponseProtoMsg): _173.MsgRegisterPoolResponse;
                toProto(message: _173.MsgRegisterPoolResponse): Uint8Array;
                toProtoMsg(message: _173.MsgRegisterPoolResponse): _173.MsgRegisterPoolResponseProtoMsg;
            };
            MsgUpdatePool: {
                encode(message: _173.MsgUpdatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgUpdatePool;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    validators?: string[];
                    minDepositAmount?: string;
                    drawSchedule?: {
                        initialDrawAt?: Date;
                        drawDelta?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    prizeStrategy?: {
                        prizeBatches?: {
                            poolPercent?: string | number | import("long").Long;
                            quantity?: string | number | import("long").Long;
                            drawProbability?: string;
                            isUnique?: boolean;
                        }[];
                    };
                    updaterAddress?: string;
                }): _173.MsgUpdatePool;
                fromAmino(object: _173.MsgUpdatePoolAmino): _173.MsgUpdatePool;
                toAmino(message: _173.MsgUpdatePool): _173.MsgUpdatePoolAmino;
                fromAminoMsg(object: _173.MsgUpdatePoolAminoMsg): _173.MsgUpdatePool;
                fromProtoMsg(message: _173.MsgUpdatePoolProtoMsg): _173.MsgUpdatePool;
                toProto(message: _173.MsgUpdatePool): Uint8Array;
                toProtoMsg(message: _173.MsgUpdatePool): _173.MsgUpdatePoolProtoMsg;
            };
            MsgUpdatePoolResponse: {
                encode(_: _173.MsgUpdatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgUpdatePoolResponse;
                fromPartial(_: {}): _173.MsgUpdatePoolResponse;
                fromAmino(_: _173.MsgUpdatePoolResponseAmino): _173.MsgUpdatePoolResponse;
                toAmino(_: _173.MsgUpdatePoolResponse): _173.MsgUpdatePoolResponseAmino;
                fromAminoMsg(object: _173.MsgUpdatePoolResponseAminoMsg): _173.MsgUpdatePoolResponse;
                fromProtoMsg(message: _173.MsgUpdatePoolResponseProtoMsg): _173.MsgUpdatePoolResponse;
                toProto(message: _173.MsgUpdatePoolResponse): Uint8Array;
                toProtoMsg(message: _173.MsgUpdatePoolResponse): _173.MsgUpdatePoolResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _173.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgDeposit;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    depositorAddress?: string;
                    winnerAddress?: string;
                    isSponsor?: boolean;
                }): _173.MsgDeposit;
                fromAmino(object: _173.MsgDepositAmino): _173.MsgDeposit;
                toAmino(message: _173.MsgDeposit): _173.MsgDepositAmino;
                fromAminoMsg(object: _173.MsgDepositAminoMsg): _173.MsgDeposit;
                fromProtoMsg(message: _173.MsgDepositProtoMsg): _173.MsgDeposit;
                toProto(message: _173.MsgDeposit): Uint8Array;
                toProtoMsg(message: _173.MsgDeposit): _173.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(message: _173.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgDepositResponse;
                fromPartial(object: {
                    depositId?: string | number | import("long").Long;
                }): _173.MsgDepositResponse;
                fromAmino(object: _173.MsgDepositResponseAmino): _173.MsgDepositResponse;
                toAmino(message: _173.MsgDepositResponse): _173.MsgDepositResponseAmino;
                fromAminoMsg(object: _173.MsgDepositResponseAminoMsg): _173.MsgDepositResponse;
                fromProtoMsg(message: _173.MsgDepositResponseProtoMsg): _173.MsgDepositResponse;
                toProto(message: _173.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _173.MsgDepositResponse): _173.MsgDepositResponseProtoMsg;
            };
            MsgDepositRetry: {
                encode(message: _173.MsgDepositRetry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgDepositRetry;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    depositId?: string | number | import("long").Long;
                    depositorAddress?: string;
                }): _173.MsgDepositRetry;
                fromAmino(object: _173.MsgDepositRetryAmino): _173.MsgDepositRetry;
                toAmino(message: _173.MsgDepositRetry): _173.MsgDepositRetryAmino;
                fromAminoMsg(object: _173.MsgDepositRetryAminoMsg): _173.MsgDepositRetry;
                fromProtoMsg(message: _173.MsgDepositRetryProtoMsg): _173.MsgDepositRetry;
                toProto(message: _173.MsgDepositRetry): Uint8Array;
                toProtoMsg(message: _173.MsgDepositRetry): _173.MsgDepositRetryProtoMsg;
            };
            MsgDepositEdit: {
                encode(message: _173.MsgDepositEdit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgDepositEdit;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    depositId?: string | number | import("long").Long;
                    winnerAddress?: string;
                    isSponsor?: {
                        value?: boolean;
                    };
                    depositorAddress?: string;
                }): _173.MsgDepositEdit;
                fromAmino(object: _173.MsgDepositEditAmino): _173.MsgDepositEdit;
                toAmino(message: _173.MsgDepositEdit): _173.MsgDepositEditAmino;
                fromAminoMsg(object: _173.MsgDepositEditAminoMsg): _173.MsgDepositEdit;
                fromProtoMsg(message: _173.MsgDepositEditProtoMsg): _173.MsgDepositEdit;
                toProto(message: _173.MsgDepositEdit): Uint8Array;
                toProtoMsg(message: _173.MsgDepositEdit): _173.MsgDepositEditProtoMsg;
            };
            MsgDepositEditResponse: {
                encode(_: _173.MsgDepositEditResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgDepositEditResponse;
                fromPartial(_: {}): _173.MsgDepositEditResponse;
                fromAmino(_: _173.MsgDepositEditResponseAmino): _173.MsgDepositEditResponse;
                toAmino(_: _173.MsgDepositEditResponse): _173.MsgDepositEditResponseAmino;
                fromAminoMsg(object: _173.MsgDepositEditResponseAminoMsg): _173.MsgDepositEditResponse;
                fromProtoMsg(message: _173.MsgDepositEditResponseProtoMsg): _173.MsgDepositEditResponse;
                toProto(message: _173.MsgDepositEditResponse): Uint8Array;
                toProtoMsg(message: _173.MsgDepositEditResponse): _173.MsgDepositEditResponseProtoMsg;
            };
            MsgDepositRetryResponse: {
                encode(_: _173.MsgDepositRetryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgDepositRetryResponse;
                fromPartial(_: {}): _173.MsgDepositRetryResponse;
                fromAmino(_: _173.MsgDepositRetryResponseAmino): _173.MsgDepositRetryResponse;
                toAmino(_: _173.MsgDepositRetryResponse): _173.MsgDepositRetryResponseAmino;
                fromAminoMsg(object: _173.MsgDepositRetryResponseAminoMsg): _173.MsgDepositRetryResponse;
                fromProtoMsg(message: _173.MsgDepositRetryResponseProtoMsg): _173.MsgDepositRetryResponse;
                toProto(message: _173.MsgDepositRetryResponse): Uint8Array;
                toProtoMsg(message: _173.MsgDepositRetryResponse): _173.MsgDepositRetryResponseProtoMsg;
            };
            MsgClaimPrize: {
                encode(message: _173.MsgClaimPrize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgClaimPrize;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    drawId?: string | number | import("long").Long;
                    prizeId?: string | number | import("long").Long;
                    winnerAddress?: string;
                }): _173.MsgClaimPrize;
                fromAmino(object: _173.MsgClaimPrizeAmino): _173.MsgClaimPrize;
                toAmino(message: _173.MsgClaimPrize): _173.MsgClaimPrizeAmino;
                fromAminoMsg(object: _173.MsgClaimPrizeAminoMsg): _173.MsgClaimPrize;
                fromProtoMsg(message: _173.MsgClaimPrizeProtoMsg): _173.MsgClaimPrize;
                toProto(message: _173.MsgClaimPrize): Uint8Array;
                toProtoMsg(message: _173.MsgClaimPrize): _173.MsgClaimPrizeProtoMsg;
            };
            MsgClaimPrizeResponse: {
                encode(_: _173.MsgClaimPrizeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgClaimPrizeResponse;
                fromPartial(_: {}): _173.MsgClaimPrizeResponse;
                fromAmino(_: _173.MsgClaimPrizeResponseAmino): _173.MsgClaimPrizeResponse;
                toAmino(_: _173.MsgClaimPrizeResponse): _173.MsgClaimPrizeResponseAmino;
                fromAminoMsg(object: _173.MsgClaimPrizeResponseAminoMsg): _173.MsgClaimPrizeResponse;
                fromProtoMsg(message: _173.MsgClaimPrizeResponseProtoMsg): _173.MsgClaimPrizeResponse;
                toProto(message: _173.MsgClaimPrizeResponse): Uint8Array;
                toProtoMsg(message: _173.MsgClaimPrizeResponse): _173.MsgClaimPrizeResponseProtoMsg;
            };
            MsgWithdrawDeposit: {
                encode(message: _173.MsgWithdrawDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgWithdrawDeposit;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    depositId?: string | number | import("long").Long;
                    depositorAddress?: string;
                    toAddress?: string;
                }): _173.MsgWithdrawDeposit;
                fromAmino(object: _173.MsgWithdrawDepositAmino): _173.MsgWithdrawDeposit;
                toAmino(message: _173.MsgWithdrawDeposit): _173.MsgWithdrawDepositAmino;
                fromAminoMsg(object: _173.MsgWithdrawDepositAminoMsg): _173.MsgWithdrawDeposit;
                fromProtoMsg(message: _173.MsgWithdrawDepositProtoMsg): _173.MsgWithdrawDeposit;
                toProto(message: _173.MsgWithdrawDeposit): Uint8Array;
                toProtoMsg(message: _173.MsgWithdrawDeposit): _173.MsgWithdrawDepositProtoMsg;
            };
            MsgWithdrawDepositResponse: {
                encode(message: _173.MsgWithdrawDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgWithdrawDepositResponse;
                fromPartial(object: {
                    withdrawalId?: string | number | import("long").Long;
                }): _173.MsgWithdrawDepositResponse;
                fromAmino(object: _173.MsgWithdrawDepositResponseAmino): _173.MsgWithdrawDepositResponse;
                toAmino(message: _173.MsgWithdrawDepositResponse): _173.MsgWithdrawDepositResponseAmino;
                fromAminoMsg(object: _173.MsgWithdrawDepositResponseAminoMsg): _173.MsgWithdrawDepositResponse;
                fromProtoMsg(message: _173.MsgWithdrawDepositResponseProtoMsg): _173.MsgWithdrawDepositResponse;
                toProto(message: _173.MsgWithdrawDepositResponse): Uint8Array;
                toProtoMsg(message: _173.MsgWithdrawDepositResponse): _173.MsgWithdrawDepositResponseProtoMsg;
            };
            MsgWithdrawDepositRetry: {
                encode(message: _173.MsgWithdrawDepositRetry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgWithdrawDepositRetry;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    withdrawalId?: string | number | import("long").Long;
                    depositorAddress?: string;
                }): _173.MsgWithdrawDepositRetry;
                fromAmino(object: _173.MsgWithdrawDepositRetryAmino): _173.MsgWithdrawDepositRetry;
                toAmino(message: _173.MsgWithdrawDepositRetry): _173.MsgWithdrawDepositRetryAmino;
                fromAminoMsg(object: _173.MsgWithdrawDepositRetryAminoMsg): _173.MsgWithdrawDepositRetry;
                fromProtoMsg(message: _173.MsgWithdrawDepositRetryProtoMsg): _173.MsgWithdrawDepositRetry;
                toProto(message: _173.MsgWithdrawDepositRetry): Uint8Array;
                toProtoMsg(message: _173.MsgWithdrawDepositRetry): _173.MsgWithdrawDepositRetryProtoMsg;
            };
            MsgWithdrawDepositRetryResponse: {
                encode(_: _173.MsgWithdrawDepositRetryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgWithdrawDepositRetryResponse;
                fromPartial(_: {}): _173.MsgWithdrawDepositRetryResponse;
                fromAmino(_: _173.MsgWithdrawDepositRetryResponseAmino): _173.MsgWithdrawDepositRetryResponse;
                toAmino(_: _173.MsgWithdrawDepositRetryResponse): _173.MsgWithdrawDepositRetryResponseAmino;
                fromAminoMsg(object: _173.MsgWithdrawDepositRetryResponseAminoMsg): _173.MsgWithdrawDepositRetryResponse;
                fromProtoMsg(message: _173.MsgWithdrawDepositRetryResponseProtoMsg): _173.MsgWithdrawDepositRetryResponse;
                toProto(message: _173.MsgWithdrawDepositRetryResponse): Uint8Array;
                toProtoMsg(message: _173.MsgWithdrawDepositRetryResponse): _173.MsgWithdrawDepositRetryResponseProtoMsg;
            };
            MsgDrawRetry: {
                encode(message: _173.MsgDrawRetry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgDrawRetry;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    drawId?: string | number | import("long").Long;
                    drawRetryAddress?: string;
                }): _173.MsgDrawRetry;
                fromAmino(object: _173.MsgDrawRetryAmino): _173.MsgDrawRetry;
                toAmino(message: _173.MsgDrawRetry): _173.MsgDrawRetryAmino;
                fromAminoMsg(object: _173.MsgDrawRetryAminoMsg): _173.MsgDrawRetry;
                fromProtoMsg(message: _173.MsgDrawRetryProtoMsg): _173.MsgDrawRetry;
                toProto(message: _173.MsgDrawRetry): Uint8Array;
                toProtoMsg(message: _173.MsgDrawRetry): _173.MsgDrawRetryProtoMsg;
            };
            MsgDrawRetryResponse: {
                encode(_: _173.MsgDrawRetryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgDrawRetryResponse;
                fromPartial(_: {}): _173.MsgDrawRetryResponse;
                fromAmino(_: _173.MsgDrawRetryResponseAmino): _173.MsgDrawRetryResponse;
                toAmino(_: _173.MsgDrawRetryResponse): _173.MsgDrawRetryResponseAmino;
                fromAminoMsg(object: _173.MsgDrawRetryResponseAminoMsg): _173.MsgDrawRetryResponse;
                fromProtoMsg(message: _173.MsgDrawRetryResponseProtoMsg): _173.MsgDrawRetryResponse;
                toProto(message: _173.MsgDrawRetryResponse): Uint8Array;
                toProtoMsg(message: _173.MsgDrawRetryResponse): _173.MsgDrawRetryResponseProtoMsg;
            };
            MsgRestoreInterchainAccounts: {
                encode(message: _173.MsgRestoreInterchainAccounts, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgRestoreInterchainAccounts;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    restorerAddress?: string;
                }): _173.MsgRestoreInterchainAccounts;
                fromAmino(object: _173.MsgRestoreInterchainAccountsAmino): _173.MsgRestoreInterchainAccounts;
                toAmino(message: _173.MsgRestoreInterchainAccounts): _173.MsgRestoreInterchainAccountsAmino;
                fromAminoMsg(object: _173.MsgRestoreInterchainAccountsAminoMsg): _173.MsgRestoreInterchainAccounts;
                fromProtoMsg(message: _173.MsgRestoreInterchainAccountsProtoMsg): _173.MsgRestoreInterchainAccounts;
                toProto(message: _173.MsgRestoreInterchainAccounts): Uint8Array;
                toProtoMsg(message: _173.MsgRestoreInterchainAccounts): _173.MsgRestoreInterchainAccountsProtoMsg;
            };
            MsgRestoreInterchainAccountsResponse: {
                encode(_: _173.MsgRestoreInterchainAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgRestoreInterchainAccountsResponse;
                fromPartial(_: {}): _173.MsgRestoreInterchainAccountsResponse;
                fromAmino(_: _173.MsgRestoreInterchainAccountsResponseAmino): _173.MsgRestoreInterchainAccountsResponse;
                toAmino(_: _173.MsgRestoreInterchainAccountsResponse): _173.MsgRestoreInterchainAccountsResponseAmino;
                fromAminoMsg(object: _173.MsgRestoreInterchainAccountsResponseAminoMsg): _173.MsgRestoreInterchainAccountsResponse;
                fromProtoMsg(message: _173.MsgRestoreInterchainAccountsResponseProtoMsg): _173.MsgRestoreInterchainAccountsResponse;
                toProto(message: _173.MsgRestoreInterchainAccountsResponse): Uint8Array;
                toProtoMsg(message: _173.MsgRestoreInterchainAccountsResponse): _173.MsgRestoreInterchainAccountsResponseProtoMsg;
            };
            MsgGenerateSeed: {
                encode(message: _173.MsgGenerateSeed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgGenerateSeed;
                fromPartial(object: {
                    requesterAddress?: string;
                }): _173.MsgGenerateSeed;
                fromAmino(object: _173.MsgGenerateSeedAmino): _173.MsgGenerateSeed;
                toAmino(message: _173.MsgGenerateSeed): _173.MsgGenerateSeedAmino;
                fromAminoMsg(object: _173.MsgGenerateSeedAminoMsg): _173.MsgGenerateSeed;
                fromProtoMsg(message: _173.MsgGenerateSeedProtoMsg): _173.MsgGenerateSeed;
                toProto(message: _173.MsgGenerateSeed): Uint8Array;
                toProtoMsg(message: _173.MsgGenerateSeed): _173.MsgGenerateSeedProtoMsg;
            };
            MsgGenerateSeedResponse: {
                encode(message: _173.MsgGenerateSeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgGenerateSeedResponse;
                fromPartial(object: {
                    seed?: string | number | import("long").Long;
                }): _173.MsgGenerateSeedResponse;
                fromAmino(object: _173.MsgGenerateSeedResponseAmino): _173.MsgGenerateSeedResponse;
                toAmino(message: _173.MsgGenerateSeedResponse): _173.MsgGenerateSeedResponseAmino;
                fromAminoMsg(object: _173.MsgGenerateSeedResponseAminoMsg): _173.MsgGenerateSeedResponse;
                fromProtoMsg(message: _173.MsgGenerateSeedResponseProtoMsg): _173.MsgGenerateSeedResponse;
                toProto(message: _173.MsgGenerateSeedResponse): Uint8Array;
                toProtoMsg(message: _173.MsgGenerateSeedResponse): _173.MsgGenerateSeedResponseProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _172.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        minDepositAmount?: string;
                        maxPrizeStrategyBatches?: string | number | import("long").Long;
                        maxPrizeBatchQuantity?: string | number | import("long").Long;
                        minDrawScheduleDelta?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxDrawScheduleDelta?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        prizeExpirationDelta?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        feesStakers?: string;
                        minDepositDrawDelta?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                }): _172.QueryParamsResponse;
                fromAmino(object: _172.QueryParamsResponseAmino): _172.QueryParamsResponse;
                toAmino(message: _172.QueryParamsResponse): _172.QueryParamsResponseAmino;
                fromAminoMsg(object: _172.QueryParamsResponseAminoMsg): _172.QueryParamsResponse;
                fromProtoMsg(message: _172.QueryParamsResponseProtoMsg): _172.QueryParamsResponse;
                toProto(message: _172.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _172.QueryParamsResponse): _172.QueryParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _172.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryParamsRequest;
                fromPartial(_: {}): _172.QueryParamsRequest;
                fromAmino(_: _172.QueryParamsRequestAmino): _172.QueryParamsRequest;
                toAmino(_: _172.QueryParamsRequest): _172.QueryParamsRequestAmino;
                fromAminoMsg(object: _172.QueryParamsRequestAminoMsg): _172.QueryParamsRequest;
                fromProtoMsg(message: _172.QueryParamsRequestProtoMsg): _172.QueryParamsRequest;
                toProto(message: _172.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryParamsRequest): _172.QueryParamsRequestProtoMsg;
            };
            QueryPoolResponse: {
                encode(message: _172.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPoolResponse;
                fromPartial(object: {
                    pool?: {
                        poolId?: string | number | import("long").Long;
                        denom?: string;
                        nativeDenom?: string;
                        chainId?: string;
                        connectionId?: string;
                        transferChannelId?: string;
                        icaDepositPortId?: string;
                        icaPrizepoolPortId?: string;
                        poolType?: _167.PoolType;
                        validators?: {
                            operatorAddress?: string;
                            isEnabled?: boolean;
                            bondedAmount?: string;
                        }[];
                        bech32PrefixAccAddr?: string;
                        bech32PrefixValAddr?: string;
                        minDepositAmount?: string;
                        drawSchedule?: {
                            initialDrawAt?: Date;
                            drawDelta?: {
                                seconds?: string | number | import("long").Long;
                                nanos?: number;
                            };
                        };
                        prizeStrategy?: {
                            prizeBatches?: {
                                poolPercent?: string | number | import("long").Long;
                                quantity?: string | number | import("long").Long;
                                drawProbability?: string;
                                isUnique?: boolean;
                            }[];
                        };
                        unbondingDuration?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxUnbondingEntries?: string;
                        localAddress?: string;
                        icaDepositAddress?: string;
                        icaPrizepoolAddress?: string;
                        nextDrawId?: string | number | import("long").Long;
                        tvlAmount?: string;
                        depositorsCount?: string | number | import("long").Long;
                        sponsorshipAmount?: string;
                        lastDrawCreatedAt?: Date;
                        lastDrawState?: _162.DrawState;
                        availablePrizePool?: {
                            denom?: string;
                            amount?: string;
                        };
                        state?: _167.PoolState;
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        createdAt?: Date;
                        updatedAt?: Date;
                    };
                }): _172.QueryPoolResponse;
                fromAmino(object: _172.QueryPoolResponseAmino): _172.QueryPoolResponse;
                toAmino(message: _172.QueryPoolResponse): _172.QueryPoolResponseAmino;
                fromAminoMsg(object: _172.QueryPoolResponseAminoMsg): _172.QueryPoolResponse;
                fromProtoMsg(message: _172.QueryPoolResponseProtoMsg): _172.QueryPoolResponse;
                toProto(message: _172.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _172.QueryPoolResponse): _172.QueryPoolResponseProtoMsg;
            };
            QueryPoolsResponse: {
                encode(message: _172.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPoolsResponse;
                fromPartial(object: {
                    pools?: {
                        poolId?: string | number | import("long").Long;
                        denom?: string;
                        nativeDenom?: string;
                        chainId?: string;
                        connectionId?: string;
                        transferChannelId?: string;
                        icaDepositPortId?: string;
                        icaPrizepoolPortId?: string;
                        poolType?: _167.PoolType;
                        validators?: {
                            operatorAddress?: string;
                            isEnabled?: boolean;
                            bondedAmount?: string;
                        }[];
                        bech32PrefixAccAddr?: string;
                        bech32PrefixValAddr?: string;
                        minDepositAmount?: string;
                        drawSchedule?: {
                            initialDrawAt?: Date;
                            drawDelta?: {
                                seconds?: string | number | import("long").Long;
                                nanos?: number;
                            };
                        };
                        prizeStrategy?: {
                            prizeBatches?: {
                                poolPercent?: string | number | import("long").Long;
                                quantity?: string | number | import("long").Long;
                                drawProbability?: string;
                                isUnique?: boolean;
                            }[];
                        };
                        unbondingDuration?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxUnbondingEntries?: string;
                        localAddress?: string;
                        icaDepositAddress?: string;
                        icaPrizepoolAddress?: string;
                        nextDrawId?: string | number | import("long").Long;
                        tvlAmount?: string;
                        depositorsCount?: string | number | import("long").Long;
                        sponsorshipAmount?: string;
                        lastDrawCreatedAt?: Date;
                        lastDrawState?: _162.DrawState;
                        availablePrizePool?: {
                            denom?: string;
                            amount?: string;
                        };
                        state?: _167.PoolState;
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        createdAt?: Date;
                        updatedAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _172.QueryPoolsResponse;
                fromAmino(object: _172.QueryPoolsResponseAmino): _172.QueryPoolsResponse;
                toAmino(message: _172.QueryPoolsResponse): _172.QueryPoolsResponseAmino;
                fromAminoMsg(object: _172.QueryPoolsResponseAminoMsg): _172.QueryPoolsResponse;
                fromProtoMsg(message: _172.QueryPoolsResponseProtoMsg): _172.QueryPoolsResponse;
                toProto(message: _172.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _172.QueryPoolsResponse): _172.QueryPoolsResponseProtoMsg;
            };
            QueryPoolRequest: {
                encode(message: _172.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPoolRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                }): _172.QueryPoolRequest;
                fromAmino(object: _172.QueryPoolRequestAmino): _172.QueryPoolRequest;
                toAmino(message: _172.QueryPoolRequest): _172.QueryPoolRequestAmino;
                fromAminoMsg(object: _172.QueryPoolRequestAminoMsg): _172.QueryPoolRequest;
                fromProtoMsg(message: _172.QueryPoolRequestProtoMsg): _172.QueryPoolRequest;
                toProto(message: _172.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _172.QueryPoolRequest): _172.QueryPoolRequestProtoMsg;
            };
            QueryPoolsRequest: {
                encode(message: _172.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPoolsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryPoolsRequest;
                fromAmino(object: _172.QueryPoolsRequestAmino): _172.QueryPoolsRequest;
                toAmino(message: _172.QueryPoolsRequest): _172.QueryPoolsRequestAmino;
                fromAminoMsg(object: _172.QueryPoolsRequestAminoMsg): _172.QueryPoolsRequest;
                fromProtoMsg(message: _172.QueryPoolsRequestProtoMsg): _172.QueryPoolsRequest;
                toProto(message: _172.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryPoolsRequest): _172.QueryPoolsRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _172.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        poolId?: string | number | import("long").Long;
                        depositId?: string | number | import("long").Long;
                        state?: _160.DepositState;
                        errorState?: _160.DepositState;
                        depositorAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        winnerAddress?: string;
                        isSponsor?: boolean;
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        createdAt?: Date;
                        updatedAt?: Date;
                    };
                }): _172.QueryDepositResponse;
                fromAmino(object: _172.QueryDepositResponseAmino): _172.QueryDepositResponse;
                toAmino(message: _172.QueryDepositResponse): _172.QueryDepositResponseAmino;
                fromAminoMsg(object: _172.QueryDepositResponseAminoMsg): _172.QueryDepositResponse;
                fromProtoMsg(message: _172.QueryDepositResponseProtoMsg): _172.QueryDepositResponse;
                toProto(message: _172.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _172.QueryDepositResponse): _172.QueryDepositResponseProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _172.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        poolId?: string | number | import("long").Long;
                        depositId?: string | number | import("long").Long;
                        state?: _160.DepositState;
                        errorState?: _160.DepositState;
                        depositorAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        winnerAddress?: string;
                        isSponsor?: boolean;
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        createdAt?: Date;
                        updatedAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _172.QueryDepositsResponse;
                fromAmino(object: _172.QueryDepositsResponseAmino): _172.QueryDepositsResponse;
                toAmino(message: _172.QueryDepositsResponse): _172.QueryDepositsResponseAmino;
                fromAminoMsg(object: _172.QueryDepositsResponseAminoMsg): _172.QueryDepositsResponse;
                fromProtoMsg(message: _172.QueryDepositsResponseProtoMsg): _172.QueryDepositsResponse;
                toProto(message: _172.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _172.QueryDepositsResponse): _172.QueryDepositsResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _172.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryDepositsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryDepositsRequest;
                fromAmino(object: _172.QueryDepositsRequestAmino): _172.QueryDepositsRequest;
                toAmino(message: _172.QueryDepositsRequest): _172.QueryDepositsRequestAmino;
                fromAminoMsg(object: _172.QueryDepositsRequestAminoMsg): _172.QueryDepositsRequest;
                fromProtoMsg(message: _172.QueryDepositsRequestProtoMsg): _172.QueryDepositsRequest;
                toProto(message: _172.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryDepositsRequest): _172.QueryDepositsRequestProtoMsg;
            };
            QueryPoolDepositRequest: {
                encode(message: _172.QueryPoolDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPoolDepositRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    depositId?: string | number | import("long").Long;
                }): _172.QueryPoolDepositRequest;
                fromAmino(object: _172.QueryPoolDepositRequestAmino): _172.QueryPoolDepositRequest;
                toAmino(message: _172.QueryPoolDepositRequest): _172.QueryPoolDepositRequestAmino;
                fromAminoMsg(object: _172.QueryPoolDepositRequestAminoMsg): _172.QueryPoolDepositRequest;
                fromProtoMsg(message: _172.QueryPoolDepositRequestProtoMsg): _172.QueryPoolDepositRequest;
                toProto(message: _172.QueryPoolDepositRequest): Uint8Array;
                toProtoMsg(message: _172.QueryPoolDepositRequest): _172.QueryPoolDepositRequestProtoMsg;
            };
            QueryPoolDepositsRequest: {
                encode(message: _172.QueryPoolDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPoolDepositsRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryPoolDepositsRequest;
                fromAmino(object: _172.QueryPoolDepositsRequestAmino): _172.QueryPoolDepositsRequest;
                toAmino(message: _172.QueryPoolDepositsRequest): _172.QueryPoolDepositsRequestAmino;
                fromAminoMsg(object: _172.QueryPoolDepositsRequestAminoMsg): _172.QueryPoolDepositsRequest;
                fromProtoMsg(message: _172.QueryPoolDepositsRequestProtoMsg): _172.QueryPoolDepositsRequest;
                toProto(message: _172.QueryPoolDepositsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryPoolDepositsRequest): _172.QueryPoolDepositsRequestProtoMsg;
            };
            QueryAccountDepositsRequest: {
                encode(message: _172.QueryAccountDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryAccountDepositsRequest;
                fromPartial(object: {
                    depositorAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryAccountDepositsRequest;
                fromAmino(object: _172.QueryAccountDepositsRequestAmino): _172.QueryAccountDepositsRequest;
                toAmino(message: _172.QueryAccountDepositsRequest): _172.QueryAccountDepositsRequestAmino;
                fromAminoMsg(object: _172.QueryAccountDepositsRequestAminoMsg): _172.QueryAccountDepositsRequest;
                fromProtoMsg(message: _172.QueryAccountDepositsRequestProtoMsg): _172.QueryAccountDepositsRequest;
                toProto(message: _172.QueryAccountDepositsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryAccountDepositsRequest): _172.QueryAccountDepositsRequestProtoMsg;
            };
            QueryAccountPoolDepositsRequest: {
                encode(message: _172.QueryAccountPoolDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryAccountPoolDepositsRequest;
                fromPartial(object: {
                    depositorAddress?: string;
                    poolId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryAccountPoolDepositsRequest;
                fromAmino(object: _172.QueryAccountPoolDepositsRequestAmino): _172.QueryAccountPoolDepositsRequest;
                toAmino(message: _172.QueryAccountPoolDepositsRequest): _172.QueryAccountPoolDepositsRequestAmino;
                fromAminoMsg(object: _172.QueryAccountPoolDepositsRequestAminoMsg): _172.QueryAccountPoolDepositsRequest;
                fromProtoMsg(message: _172.QueryAccountPoolDepositsRequestProtoMsg): _172.QueryAccountPoolDepositsRequest;
                toProto(message: _172.QueryAccountPoolDepositsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryAccountPoolDepositsRequest): _172.QueryAccountPoolDepositsRequestProtoMsg;
            };
            QueryDrawResponse: {
                encode(message: _172.QueryDrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryDrawResponse;
                fromPartial(object: {
                    draw?: {
                        poolId?: string | number | import("long").Long;
                        drawId?: string | number | import("long").Long;
                        state?: _162.DrawState;
                        errorState?: _162.DrawState;
                        randSeed?: string | number | import("long").Long;
                        prizePool?: {
                            denom?: string;
                            amount?: string;
                        };
                        prizePoolFreshAmount?: string;
                        prizePoolRemainsAmount?: string;
                        prizesRefs?: {
                            amount?: string;
                            prizeId?: string | number | import("long").Long;
                            winnerAddress?: string;
                        }[];
                        totalWinCount?: string | number | import("long").Long;
                        totalWinAmount?: string;
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        createdAt?: Date;
                        updatedAt?: Date;
                    };
                }): _172.QueryDrawResponse;
                fromAmino(object: _172.QueryDrawResponseAmino): _172.QueryDrawResponse;
                toAmino(message: _172.QueryDrawResponse): _172.QueryDrawResponseAmino;
                fromAminoMsg(object: _172.QueryDrawResponseAminoMsg): _172.QueryDrawResponse;
                fromProtoMsg(message: _172.QueryDrawResponseProtoMsg): _172.QueryDrawResponse;
                toProto(message: _172.QueryDrawResponse): Uint8Array;
                toProtoMsg(message: _172.QueryDrawResponse): _172.QueryDrawResponseProtoMsg;
            };
            QueryDrawsResponse: {
                encode(message: _172.QueryDrawsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryDrawsResponse;
                fromPartial(object: {
                    draws?: {
                        poolId?: string | number | import("long").Long;
                        drawId?: string | number | import("long").Long;
                        state?: _162.DrawState;
                        errorState?: _162.DrawState;
                        randSeed?: string | number | import("long").Long;
                        prizePool?: {
                            denom?: string;
                            amount?: string;
                        };
                        prizePoolFreshAmount?: string;
                        prizePoolRemainsAmount?: string;
                        prizesRefs?: {
                            amount?: string;
                            prizeId?: string | number | import("long").Long;
                            winnerAddress?: string;
                        }[];
                        totalWinCount?: string | number | import("long").Long;
                        totalWinAmount?: string;
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        createdAt?: Date;
                        updatedAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _172.QueryDrawsResponse;
                fromAmino(object: _172.QueryDrawsResponseAmino): _172.QueryDrawsResponse;
                toAmino(message: _172.QueryDrawsResponse): _172.QueryDrawsResponseAmino;
                fromAminoMsg(object: _172.QueryDrawsResponseAminoMsg): _172.QueryDrawsResponse;
                fromProtoMsg(message: _172.QueryDrawsResponseProtoMsg): _172.QueryDrawsResponse;
                toProto(message: _172.QueryDrawsResponse): Uint8Array;
                toProtoMsg(message: _172.QueryDrawsResponse): _172.QueryDrawsResponseProtoMsg;
            };
            QueryDrawsRequest: {
                encode(message: _172.QueryDrawsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryDrawsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryDrawsRequest;
                fromAmino(object: _172.QueryDrawsRequestAmino): _172.QueryDrawsRequest;
                toAmino(message: _172.QueryDrawsRequest): _172.QueryDrawsRequestAmino;
                fromAminoMsg(object: _172.QueryDrawsRequestAminoMsg): _172.QueryDrawsRequest;
                fromProtoMsg(message: _172.QueryDrawsRequestProtoMsg): _172.QueryDrawsRequest;
                toProto(message: _172.QueryDrawsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryDrawsRequest): _172.QueryDrawsRequestProtoMsg;
            };
            QueryPoolDrawsRequest: {
                encode(message: _172.QueryPoolDrawsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPoolDrawsRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryPoolDrawsRequest;
                fromAmino(object: _172.QueryPoolDrawsRequestAmino): _172.QueryPoolDrawsRequest;
                toAmino(message: _172.QueryPoolDrawsRequest): _172.QueryPoolDrawsRequestAmino;
                fromAminoMsg(object: _172.QueryPoolDrawsRequestAminoMsg): _172.QueryPoolDrawsRequest;
                fromProtoMsg(message: _172.QueryPoolDrawsRequestProtoMsg): _172.QueryPoolDrawsRequest;
                toProto(message: _172.QueryPoolDrawsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryPoolDrawsRequest): _172.QueryPoolDrawsRequestProtoMsg;
            };
            QueryPoolDrawRequest: {
                encode(message: _172.QueryPoolDrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPoolDrawRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    drawId?: string | number | import("long").Long;
                }): _172.QueryPoolDrawRequest;
                fromAmino(object: _172.QueryPoolDrawRequestAmino): _172.QueryPoolDrawRequest;
                toAmino(message: _172.QueryPoolDrawRequest): _172.QueryPoolDrawRequestAmino;
                fromAminoMsg(object: _172.QueryPoolDrawRequestAminoMsg): _172.QueryPoolDrawRequest;
                fromProtoMsg(message: _172.QueryPoolDrawRequestProtoMsg): _172.QueryPoolDrawRequest;
                toProto(message: _172.QueryPoolDrawRequest): Uint8Array;
                toProtoMsg(message: _172.QueryPoolDrawRequest): _172.QueryPoolDrawRequestProtoMsg;
            };
            QueryPrizeResponse: {
                encode(message: _172.QueryPrizeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPrizeResponse;
                fromPartial(object: {
                    prize?: {
                        poolId?: string | number | import("long").Long;
                        drawId?: string | number | import("long").Long;
                        prizeId?: string | number | import("long").Long;
                        state?: _171.PrizeState;
                        winnerAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        expiresAt?: Date;
                        createdAt?: Date;
                        updatedAt?: Date;
                    };
                }): _172.QueryPrizeResponse;
                fromAmino(object: _172.QueryPrizeResponseAmino): _172.QueryPrizeResponse;
                toAmino(message: _172.QueryPrizeResponse): _172.QueryPrizeResponseAmino;
                fromAminoMsg(object: _172.QueryPrizeResponseAminoMsg): _172.QueryPrizeResponse;
                fromProtoMsg(message: _172.QueryPrizeResponseProtoMsg): _172.QueryPrizeResponse;
                toProto(message: _172.QueryPrizeResponse): Uint8Array;
                toProtoMsg(message: _172.QueryPrizeResponse): _172.QueryPrizeResponseProtoMsg;
            };
            QueryPrizesResponse: {
                encode(message: _172.QueryPrizesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPrizesResponse;
                fromPartial(object: {
                    prizes?: {
                        poolId?: string | number | import("long").Long;
                        drawId?: string | number | import("long").Long;
                        prizeId?: string | number | import("long").Long;
                        state?: _171.PrizeState;
                        winnerAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        expiresAt?: Date;
                        createdAt?: Date;
                        updatedAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _172.QueryPrizesResponse;
                fromAmino(object: _172.QueryPrizesResponseAmino): _172.QueryPrizesResponse;
                toAmino(message: _172.QueryPrizesResponse): _172.QueryPrizesResponseAmino;
                fromAminoMsg(object: _172.QueryPrizesResponseAminoMsg): _172.QueryPrizesResponse;
                fromProtoMsg(message: _172.QueryPrizesResponseProtoMsg): _172.QueryPrizesResponse;
                toProto(message: _172.QueryPrizesResponse): Uint8Array;
                toProtoMsg(message: _172.QueryPrizesResponse): _172.QueryPrizesResponseProtoMsg;
            };
            QueryPoolDrawPrizeRequest: {
                encode(message: _172.QueryPoolDrawPrizeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPoolDrawPrizeRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    drawId?: string | number | import("long").Long;
                    prizeId?: string | number | import("long").Long;
                }): _172.QueryPoolDrawPrizeRequest;
                fromAmino(object: _172.QueryPoolDrawPrizeRequestAmino): _172.QueryPoolDrawPrizeRequest;
                toAmino(message: _172.QueryPoolDrawPrizeRequest): _172.QueryPoolDrawPrizeRequestAmino;
                fromAminoMsg(object: _172.QueryPoolDrawPrizeRequestAminoMsg): _172.QueryPoolDrawPrizeRequest;
                fromProtoMsg(message: _172.QueryPoolDrawPrizeRequestProtoMsg): _172.QueryPoolDrawPrizeRequest;
                toProto(message: _172.QueryPoolDrawPrizeRequest): Uint8Array;
                toProtoMsg(message: _172.QueryPoolDrawPrizeRequest): _172.QueryPoolDrawPrizeRequestProtoMsg;
            };
            QueryPrizesRequest: {
                encode(message: _172.QueryPrizesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPrizesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryPrizesRequest;
                fromAmino(object: _172.QueryPrizesRequestAmino): _172.QueryPrizesRequest;
                toAmino(message: _172.QueryPrizesRequest): _172.QueryPrizesRequestAmino;
                fromAminoMsg(object: _172.QueryPrizesRequestAminoMsg): _172.QueryPrizesRequest;
                fromProtoMsg(message: _172.QueryPrizesRequestProtoMsg): _172.QueryPrizesRequest;
                toProto(message: _172.QueryPrizesRequest): Uint8Array;
                toProtoMsg(message: _172.QueryPrizesRequest): _172.QueryPrizesRequestProtoMsg;
            };
            QueryPoolPrizesRequest: {
                encode(message: _172.QueryPoolPrizesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPoolPrizesRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryPoolPrizesRequest;
                fromAmino(object: _172.QueryPoolPrizesRequestAmino): _172.QueryPoolPrizesRequest;
                toAmino(message: _172.QueryPoolPrizesRequest): _172.QueryPoolPrizesRequestAmino;
                fromAminoMsg(object: _172.QueryPoolPrizesRequestAminoMsg): _172.QueryPoolPrizesRequest;
                fromProtoMsg(message: _172.QueryPoolPrizesRequestProtoMsg): _172.QueryPoolPrizesRequest;
                toProto(message: _172.QueryPoolPrizesRequest): Uint8Array;
                toProtoMsg(message: _172.QueryPoolPrizesRequest): _172.QueryPoolPrizesRequestProtoMsg;
            };
            QueryPoolDrawPrizesRequest: {
                encode(message: _172.QueryPoolDrawPrizesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPoolDrawPrizesRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    drawId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryPoolDrawPrizesRequest;
                fromAmino(object: _172.QueryPoolDrawPrizesRequestAmino): _172.QueryPoolDrawPrizesRequest;
                toAmino(message: _172.QueryPoolDrawPrizesRequest): _172.QueryPoolDrawPrizesRequestAmino;
                fromAminoMsg(object: _172.QueryPoolDrawPrizesRequestAminoMsg): _172.QueryPoolDrawPrizesRequest;
                fromProtoMsg(message: _172.QueryPoolDrawPrizesRequestProtoMsg): _172.QueryPoolDrawPrizesRequest;
                toProto(message: _172.QueryPoolDrawPrizesRequest): Uint8Array;
                toProtoMsg(message: _172.QueryPoolDrawPrizesRequest): _172.QueryPoolDrawPrizesRequestProtoMsg;
            };
            QueryAccountPrizesRequest: {
                encode(message: _172.QueryAccountPrizesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryAccountPrizesRequest;
                fromPartial(object: {
                    winnerAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryAccountPrizesRequest;
                fromAmino(object: _172.QueryAccountPrizesRequestAmino): _172.QueryAccountPrizesRequest;
                toAmino(message: _172.QueryAccountPrizesRequest): _172.QueryAccountPrizesRequestAmino;
                fromAminoMsg(object: _172.QueryAccountPrizesRequestAminoMsg): _172.QueryAccountPrizesRequest;
                fromProtoMsg(message: _172.QueryAccountPrizesRequestProtoMsg): _172.QueryAccountPrizesRequest;
                toProto(message: _172.QueryAccountPrizesRequest): Uint8Array;
                toProtoMsg(message: _172.QueryAccountPrizesRequest): _172.QueryAccountPrizesRequestProtoMsg;
            };
            QueryAccountPoolPrizesRequest: {
                encode(message: _172.QueryAccountPoolPrizesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryAccountPoolPrizesRequest;
                fromPartial(object: {
                    winnerAddress?: string;
                    poolId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryAccountPoolPrizesRequest;
                fromAmino(object: _172.QueryAccountPoolPrizesRequestAmino): _172.QueryAccountPoolPrizesRequest;
                toAmino(message: _172.QueryAccountPoolPrizesRequest): _172.QueryAccountPoolPrizesRequestAmino;
                fromAminoMsg(object: _172.QueryAccountPoolPrizesRequestAminoMsg): _172.QueryAccountPoolPrizesRequest;
                fromProtoMsg(message: _172.QueryAccountPoolPrizesRequestProtoMsg): _172.QueryAccountPoolPrizesRequest;
                toProto(message: _172.QueryAccountPoolPrizesRequest): Uint8Array;
                toProtoMsg(message: _172.QueryAccountPoolPrizesRequest): _172.QueryAccountPoolPrizesRequestProtoMsg;
            };
            QueryAccountPoolDrawPrizesRequest: {
                encode(message: _172.QueryAccountPoolDrawPrizesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryAccountPoolDrawPrizesRequest;
                fromPartial(object: {
                    winnerAddress?: string;
                    poolId?: string | number | import("long").Long;
                    drawId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryAccountPoolDrawPrizesRequest;
                fromAmino(object: _172.QueryAccountPoolDrawPrizesRequestAmino): _172.QueryAccountPoolDrawPrizesRequest;
                toAmino(message: _172.QueryAccountPoolDrawPrizesRequest): _172.QueryAccountPoolDrawPrizesRequestAmino;
                fromAminoMsg(object: _172.QueryAccountPoolDrawPrizesRequestAminoMsg): _172.QueryAccountPoolDrawPrizesRequest;
                fromProtoMsg(message: _172.QueryAccountPoolDrawPrizesRequestProtoMsg): _172.QueryAccountPoolDrawPrizesRequest;
                toProto(message: _172.QueryAccountPoolDrawPrizesRequest): Uint8Array;
                toProtoMsg(message: _172.QueryAccountPoolDrawPrizesRequest): _172.QueryAccountPoolDrawPrizesRequestProtoMsg;
            };
            QueryWithdrawalResponse: {
                encode(message: _172.QueryWithdrawalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryWithdrawalResponse;
                fromPartial(object: {
                    withdrawal?: {
                        poolId?: string | number | import("long").Long;
                        depositId?: string | number | import("long").Long;
                        withdrawalId?: string | number | import("long").Long;
                        state?: _174.WithdrawalState;
                        errorState?: _174.WithdrawalState;
                        depositorAddress?: string;
                        toAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        unbondingEndsAt?: Date;
                        createdAt?: Date;
                        updatedAt?: Date;
                    };
                }): _172.QueryWithdrawalResponse;
                fromAmino(object: _172.QueryWithdrawalResponseAmino): _172.QueryWithdrawalResponse;
                toAmino(message: _172.QueryWithdrawalResponse): _172.QueryWithdrawalResponseAmino;
                fromAminoMsg(object: _172.QueryWithdrawalResponseAminoMsg): _172.QueryWithdrawalResponse;
                fromProtoMsg(message: _172.QueryWithdrawalResponseProtoMsg): _172.QueryWithdrawalResponse;
                toProto(message: _172.QueryWithdrawalResponse): Uint8Array;
                toProtoMsg(message: _172.QueryWithdrawalResponse): _172.QueryWithdrawalResponseProtoMsg;
            };
            QueryWithdrawalsResponse: {
                encode(message: _172.QueryWithdrawalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryWithdrawalsResponse;
                fromPartial(object: {
                    withdrawals?: {
                        poolId?: string | number | import("long").Long;
                        depositId?: string | number | import("long").Long;
                        withdrawalId?: string | number | import("long").Long;
                        state?: _174.WithdrawalState;
                        errorState?: _174.WithdrawalState;
                        depositorAddress?: string;
                        toAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        unbondingEndsAt?: Date;
                        createdAt?: Date;
                        updatedAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _172.QueryWithdrawalsResponse;
                fromAmino(object: _172.QueryWithdrawalsResponseAmino): _172.QueryWithdrawalsResponse;
                toAmino(message: _172.QueryWithdrawalsResponse): _172.QueryWithdrawalsResponseAmino;
                fromAminoMsg(object: _172.QueryWithdrawalsResponseAminoMsg): _172.QueryWithdrawalsResponse;
                fromProtoMsg(message: _172.QueryWithdrawalsResponseProtoMsg): _172.QueryWithdrawalsResponse;
                toProto(message: _172.QueryWithdrawalsResponse): Uint8Array;
                toProtoMsg(message: _172.QueryWithdrawalsResponse): _172.QueryWithdrawalsResponseProtoMsg;
            };
            QueryPoolWithdrawalRequest: {
                encode(message: _172.QueryPoolWithdrawalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPoolWithdrawalRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    withdrawalId?: string | number | import("long").Long;
                }): _172.QueryPoolWithdrawalRequest;
                fromAmino(object: _172.QueryPoolWithdrawalRequestAmino): _172.QueryPoolWithdrawalRequest;
                toAmino(message: _172.QueryPoolWithdrawalRequest): _172.QueryPoolWithdrawalRequestAmino;
                fromAminoMsg(object: _172.QueryPoolWithdrawalRequestAminoMsg): _172.QueryPoolWithdrawalRequest;
                fromProtoMsg(message: _172.QueryPoolWithdrawalRequestProtoMsg): _172.QueryPoolWithdrawalRequest;
                toProto(message: _172.QueryPoolWithdrawalRequest): Uint8Array;
                toProtoMsg(message: _172.QueryPoolWithdrawalRequest): _172.QueryPoolWithdrawalRequestProtoMsg;
            };
            QueryWithdrawalsRequest: {
                encode(message: _172.QueryWithdrawalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryWithdrawalsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryWithdrawalsRequest;
                fromAmino(object: _172.QueryWithdrawalsRequestAmino): _172.QueryWithdrawalsRequest;
                toAmino(message: _172.QueryWithdrawalsRequest): _172.QueryWithdrawalsRequestAmino;
                fromAminoMsg(object: _172.QueryWithdrawalsRequestAminoMsg): _172.QueryWithdrawalsRequest;
                fromProtoMsg(message: _172.QueryWithdrawalsRequestProtoMsg): _172.QueryWithdrawalsRequest;
                toProto(message: _172.QueryWithdrawalsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryWithdrawalsRequest): _172.QueryWithdrawalsRequestProtoMsg;
            };
            QueryPoolWithdrawalsRequest: {
                encode(message: _172.QueryPoolWithdrawalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPoolWithdrawalsRequest;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryPoolWithdrawalsRequest;
                fromAmino(object: _172.QueryPoolWithdrawalsRequestAmino): _172.QueryPoolWithdrawalsRequest;
                toAmino(message: _172.QueryPoolWithdrawalsRequest): _172.QueryPoolWithdrawalsRequestAmino;
                fromAminoMsg(object: _172.QueryPoolWithdrawalsRequestAminoMsg): _172.QueryPoolWithdrawalsRequest;
                fromProtoMsg(message: _172.QueryPoolWithdrawalsRequestProtoMsg): _172.QueryPoolWithdrawalsRequest;
                toProto(message: _172.QueryPoolWithdrawalsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryPoolWithdrawalsRequest): _172.QueryPoolWithdrawalsRequestProtoMsg;
            };
            QueryAccountWithdrawalsRequest: {
                encode(message: _172.QueryAccountWithdrawalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryAccountWithdrawalsRequest;
                fromPartial(object: {
                    depositorAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryAccountWithdrawalsRequest;
                fromAmino(object: _172.QueryAccountWithdrawalsRequestAmino): _172.QueryAccountWithdrawalsRequest;
                toAmino(message: _172.QueryAccountWithdrawalsRequest): _172.QueryAccountWithdrawalsRequestAmino;
                fromAminoMsg(object: _172.QueryAccountWithdrawalsRequestAminoMsg): _172.QueryAccountWithdrawalsRequest;
                fromProtoMsg(message: _172.QueryAccountWithdrawalsRequestProtoMsg): _172.QueryAccountWithdrawalsRequest;
                toProto(message: _172.QueryAccountWithdrawalsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryAccountWithdrawalsRequest): _172.QueryAccountWithdrawalsRequestProtoMsg;
            };
            QueryAccountPoolWithdrawalsRequest: {
                encode(message: _172.QueryAccountPoolWithdrawalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryAccountPoolWithdrawalsRequest;
                fromPartial(object: {
                    depositorAddress?: string;
                    poolId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _172.QueryAccountPoolWithdrawalsRequest;
                fromAmino(object: _172.QueryAccountPoolWithdrawalsRequestAmino): _172.QueryAccountPoolWithdrawalsRequest;
                toAmino(message: _172.QueryAccountPoolWithdrawalsRequest): _172.QueryAccountPoolWithdrawalsRequestAmino;
                fromAminoMsg(object: _172.QueryAccountPoolWithdrawalsRequestAminoMsg): _172.QueryAccountPoolWithdrawalsRequest;
                fromProtoMsg(message: _172.QueryAccountPoolWithdrawalsRequestProtoMsg): _172.QueryAccountPoolWithdrawalsRequest;
                toProto(message: _172.QueryAccountPoolWithdrawalsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryAccountPoolWithdrawalsRequest): _172.QueryAccountPoolWithdrawalsRequestProtoMsg;
            };
            prizeStateFromJSON(object: any): _171.PrizeState;
            prizeStateToJSON(object: _171.PrizeState): string;
            PrizeState: typeof _171.PrizeState;
            PrizeStateSDKType: typeof _171.PrizeState;
            PrizeStateAmino: typeof _171.PrizeState;
            Prize: {
                encode(message: _171.Prize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Prize;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    drawId?: string | number | import("long").Long;
                    prizeId?: string | number | import("long").Long;
                    state?: _171.PrizeState;
                    winnerAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    createdAtHeight?: string | number | import("long").Long;
                    updatedAtHeight?: string | number | import("long").Long;
                    expiresAt?: Date;
                    createdAt?: Date;
                    updatedAt?: Date;
                }): _171.Prize;
                fromAmino(object: _171.PrizeAmino): _171.Prize;
                toAmino(message: _171.Prize): _171.PrizeAmino;
                fromAminoMsg(object: _171.PrizeAminoMsg): _171.Prize;
                fromProtoMsg(message: _171.PrizeProtoMsg): _171.Prize;
                toProto(message: _171.Prize): Uint8Array;
                toProtoMsg(message: _171.Prize): _171.PrizeProtoMsg;
            };
            PrizeIDs: {
                encode(message: _171.PrizeIDs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.PrizeIDs;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    drawId?: string | number | import("long").Long;
                    prizeId?: string | number | import("long").Long;
                }): _171.PrizeIDs;
                fromAmino(object: _171.PrizeIDsAmino): _171.PrizeIDs;
                toAmino(message: _171.PrizeIDs): _171.PrizeIDsAmino;
                fromAminoMsg(object: _171.PrizeIDsAminoMsg): _171.PrizeIDs;
                fromProtoMsg(message: _171.PrizeIDsProtoMsg): _171.PrizeIDs;
                toProto(message: _171.PrizeIDs): Uint8Array;
                toProtoMsg(message: _171.PrizeIDs): _171.PrizeIDsProtoMsg;
            };
            PrizeIDsCollection: {
                encode(message: _171.PrizeIDsCollection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.PrizeIDsCollection;
                fromPartial(object: {
                    prizesIds?: {
                        poolId?: string | number | import("long").Long;
                        drawId?: string | number | import("long").Long;
                        prizeId?: string | number | import("long").Long;
                    }[];
                }): _171.PrizeIDsCollection;
                fromAmino(object: _171.PrizeIDsCollectionAmino): _171.PrizeIDsCollection;
                toAmino(message: _171.PrizeIDsCollection): _171.PrizeIDsCollectionAmino;
                fromAminoMsg(object: _171.PrizeIDsCollectionAminoMsg): _171.PrizeIDsCollection;
                fromProtoMsg(message: _171.PrizeIDsCollectionProtoMsg): _171.PrizeIDsCollection;
                toProto(message: _171.PrizeIDsCollection): Uint8Array;
                toProtoMsg(message: _171.PrizeIDsCollection): _171.PrizeIDsCollectionProtoMsg;
            };
            PrizeStrategy: {
                encode(message: _170.PrizeStrategy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.PrizeStrategy;
                fromPartial(object: {
                    prizeBatches?: {
                        poolPercent?: string | number | import("long").Long;
                        quantity?: string | number | import("long").Long;
                        drawProbability?: string;
                        isUnique?: boolean;
                    }[];
                }): _170.PrizeStrategy;
                fromAmino(object: _170.PrizeStrategyAmino): _170.PrizeStrategy;
                toAmino(message: _170.PrizeStrategy): _170.PrizeStrategyAmino;
                fromAminoMsg(object: _170.PrizeStrategyAminoMsg): _170.PrizeStrategy;
                fromProtoMsg(message: _170.PrizeStrategyProtoMsg): _170.PrizeStrategy;
                toProto(message: _170.PrizeStrategy): Uint8Array;
                toProtoMsg(message: _170.PrizeStrategy): _170.PrizeStrategyProtoMsg;
            };
            PrizeRef: {
                encode(message: _169.PrizeRef, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.PrizeRef;
                fromPartial(object: {
                    amount?: string;
                    prizeId?: string | number | import("long").Long;
                    winnerAddress?: string;
                }): _169.PrizeRef;
                fromAmino(object: _169.PrizeRefAmino): _169.PrizeRef;
                toAmino(message: _169.PrizeRef): _169.PrizeRefAmino;
                fromAminoMsg(object: _169.PrizeRefAminoMsg): _169.PrizeRef;
                fromProtoMsg(message: _169.PrizeRefProtoMsg): _169.PrizeRef;
                toProto(message: _169.PrizeRef): Uint8Array;
                toProtoMsg(message: _169.PrizeRef): _169.PrizeRefProtoMsg;
            };
            PrizeBatch: {
                encode(message: _168.PrizeBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.PrizeBatch;
                fromPartial(object: {
                    poolPercent?: string | number | import("long").Long;
                    quantity?: string | number | import("long").Long;
                    drawProbability?: string;
                    isUnique?: boolean;
                }): _168.PrizeBatch;
                fromAmino(object: _168.PrizeBatchAmino): _168.PrizeBatch;
                toAmino(message: _168.PrizeBatch): _168.PrizeBatchAmino;
                fromAminoMsg(object: _168.PrizeBatchAminoMsg): _168.PrizeBatch;
                fromProtoMsg(message: _168.PrizeBatchProtoMsg): _168.PrizeBatch;
                toProto(message: _168.PrizeBatch): Uint8Array;
                toProtoMsg(message: _168.PrizeBatch): _168.PrizeBatchProtoMsg;
            };
            poolStateFromJSON(object: any): _167.PoolState;
            poolStateToJSON(object: _167.PoolState): string;
            poolTypeFromJSON(object: any): _167.PoolType;
            poolTypeToJSON(object: _167.PoolType): string;
            PoolState: typeof _167.PoolState;
            PoolStateSDKType: typeof _167.PoolState;
            PoolStateAmino: typeof _167.PoolState;
            PoolType: typeof _167.PoolType;
            PoolTypeSDKType: typeof _167.PoolType;
            PoolTypeAmino: typeof _167.PoolType;
            Pool: {
                encode(message: _167.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Pool;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    denom?: string;
                    nativeDenom?: string;
                    chainId?: string;
                    connectionId?: string;
                    transferChannelId?: string;
                    icaDepositPortId?: string;
                    icaPrizepoolPortId?: string;
                    poolType?: _167.PoolType;
                    validators?: {
                        operatorAddress?: string;
                        isEnabled?: boolean;
                        bondedAmount?: string;
                    }[];
                    bech32PrefixAccAddr?: string;
                    bech32PrefixValAddr?: string;
                    minDepositAmount?: string;
                    drawSchedule?: {
                        initialDrawAt?: Date;
                        drawDelta?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    prizeStrategy?: {
                        prizeBatches?: {
                            poolPercent?: string | number | import("long").Long;
                            quantity?: string | number | import("long").Long;
                            drawProbability?: string;
                            isUnique?: boolean;
                        }[];
                    };
                    unbondingDuration?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    maxUnbondingEntries?: string;
                    localAddress?: string;
                    icaDepositAddress?: string;
                    icaPrizepoolAddress?: string;
                    nextDrawId?: string | number | import("long").Long;
                    tvlAmount?: string;
                    depositorsCount?: string | number | import("long").Long;
                    sponsorshipAmount?: string;
                    lastDrawCreatedAt?: Date;
                    lastDrawState?: _162.DrawState;
                    availablePrizePool?: {
                        denom?: string;
                        amount?: string;
                    };
                    state?: _167.PoolState;
                    createdAtHeight?: string | number | import("long").Long;
                    updatedAtHeight?: string | number | import("long").Long;
                    createdAt?: Date;
                    updatedAt?: Date;
                }): _167.Pool;
                fromAmino(object: _167.PoolAmino): _167.Pool;
                toAmino(message: _167.Pool): _167.PoolAmino;
                fromAminoMsg(object: _167.PoolAminoMsg): _167.Pool;
                fromProtoMsg(message: _167.PoolProtoMsg): _167.Pool;
                toProto(message: _167.Pool): Uint8Array;
                toProtoMsg(message: _167.Pool): _167.PoolProtoMsg;
            };
            PoolValidator: {
                encode(message: _167.PoolValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.PoolValidator;
                fromPartial(object: {
                    operatorAddress?: string;
                    isEnabled?: boolean;
                    bondedAmount?: string;
                }): _167.PoolValidator;
                fromAmino(object: _167.PoolValidatorAmino): _167.PoolValidator;
                toAmino(message: _167.PoolValidator): _167.PoolValidatorAmino;
                fromAminoMsg(object: _167.PoolValidatorAminoMsg): _167.PoolValidator;
                fromProtoMsg(message: _167.PoolValidatorProtoMsg): _167.PoolValidator;
                toProto(message: _167.PoolValidator): Uint8Array;
                toProtoMsg(message: _167.PoolValidator): _167.PoolValidatorProtoMsg;
            };
            Params: {
                encode(message: _166.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Params;
                fromPartial(object: {
                    minDepositAmount?: string;
                    maxPrizeStrategyBatches?: string | number | import("long").Long;
                    maxPrizeBatchQuantity?: string | number | import("long").Long;
                    minDrawScheduleDelta?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    maxDrawScheduleDelta?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    prizeExpirationDelta?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    feesStakers?: string;
                    minDepositDrawDelta?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                }): _166.Params;
                fromAmino(object: _166.ParamsAmino): _166.Params;
                toAmino(message: _166.Params): _166.ParamsAmino;
                fromAminoMsg(object: _166.ParamsAminoMsg): _166.Params;
                fromProtoMsg(message: _166.ParamsProtoMsg): _166.Params;
                toProto(message: _166.Params): Uint8Array;
                toProtoMsg(message: _166.Params): _166.ParamsProtoMsg;
            };
            ProposalRegisterPool: {
                encode(message: _165.ProposalRegisterPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ProposalRegisterPool;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    chainId?: string;
                    denom?: string;
                    nativeDenom?: string;
                    connectionId?: string;
                    validators?: string[];
                    minDepositAmount?: string;
                    drawSchedule?: {
                        initialDrawAt?: Date;
                        drawDelta?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    prizeStrategy?: {
                        prizeBatches?: {
                            poolPercent?: string | number | import("long").Long;
                            quantity?: string | number | import("long").Long;
                            drawProbability?: string;
                            isUnique?: boolean;
                        }[];
                    };
                    bech32PrefixAccAddr?: string;
                    bech32PrefixValAddr?: string;
                    transferChannelId?: string;
                    unbondingDuration?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    maxUnbondingEntries?: string;
                    poolType?: _167.PoolType;
                }): _165.ProposalRegisterPool;
                fromAmino(object: _165.ProposalRegisterPoolAmino): _165.ProposalRegisterPool;
                toAmino(message: _165.ProposalRegisterPool): _165.ProposalRegisterPoolAmino;
                fromAminoMsg(object: _165.ProposalRegisterPoolAminoMsg): _165.ProposalRegisterPool;
                fromProtoMsg(message: _165.ProposalRegisterPoolProtoMsg): _165.ProposalRegisterPool;
                toProto(message: _165.ProposalRegisterPool): Uint8Array;
                toProtoMsg(message: _165.ProposalRegisterPool): _165.ProposalRegisterPoolProtoMsg;
            };
            ProposalUpdatePool: {
                encode(message: _165.ProposalUpdatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ProposalUpdatePool;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    poolId?: string | number | import("long").Long;
                    validators?: string[];
                    minDepositAmount?: string;
                    drawSchedule?: {
                        initialDrawAt?: Date;
                        drawDelta?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    prizeStrategy?: {
                        prizeBatches?: {
                            poolPercent?: string | number | import("long").Long;
                            quantity?: string | number | import("long").Long;
                            drawProbability?: string;
                            isUnique?: boolean;
                        }[];
                    };
                    state?: _167.PoolState;
                    unbondingDuration?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    maxUnbondingEntries?: string;
                }): _165.ProposalUpdatePool;
                fromAmino(object: _165.ProposalUpdatePoolAmino): _165.ProposalUpdatePool;
                toAmino(message: _165.ProposalUpdatePool): _165.ProposalUpdatePoolAmino;
                fromAminoMsg(object: _165.ProposalUpdatePoolAminoMsg): _165.ProposalUpdatePool;
                fromProtoMsg(message: _165.ProposalUpdatePoolProtoMsg): _165.ProposalUpdatePool;
                toProto(message: _165.ProposalUpdatePool): Uint8Array;
                toProtoMsg(message: _165.ProposalUpdatePool): _165.ProposalUpdatePoolProtoMsg;
            };
            ProposalUpdateParams: {
                encode(message: _165.ProposalUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ProposalUpdateParams;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    minDepositAmount?: string;
                    maxPrizeStrategyBatches?: string;
                    maxPrizeBatchQuantity?: string;
                    minDrawScheduleDelta?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    maxDrawScheduleDelta?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    prizeExpirationDelta?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    feesStakers?: string;
                    minDepositDrawDelta?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                }): _165.ProposalUpdateParams;
                fromAmino(object: _165.ProposalUpdateParamsAmino): _165.ProposalUpdateParams;
                toAmino(message: _165.ProposalUpdateParams): _165.ProposalUpdateParamsAmino;
                fromAminoMsg(object: _165.ProposalUpdateParamsAminoMsg): _165.ProposalUpdateParams;
                fromProtoMsg(message: _165.ProposalUpdateParamsProtoMsg): _165.ProposalUpdateParams;
                toProto(message: _165.ProposalUpdateParams): Uint8Array;
                toProtoMsg(message: _165.ProposalUpdateParams): _165.ProposalUpdateParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _164.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.GenesisState;
                fromPartial(object: {
                    params?: {
                        minDepositAmount?: string;
                        maxPrizeStrategyBatches?: string | number | import("long").Long;
                        maxPrizeBatchQuantity?: string | number | import("long").Long;
                        minDrawScheduleDelta?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxDrawScheduleDelta?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        prizeExpirationDelta?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        feesStakers?: string;
                        minDepositDrawDelta?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    nextPoolId?: string | number | import("long").Long;
                    nextDepositId?: string | number | import("long").Long;
                    nextPrizeId?: string | number | import("long").Long;
                    nextWithdrawalId?: string | number | import("long").Long;
                    pools?: {
                        poolId?: string | number | import("long").Long;
                        denom?: string;
                        nativeDenom?: string;
                        chainId?: string;
                        connectionId?: string;
                        transferChannelId?: string;
                        icaDepositPortId?: string;
                        icaPrizepoolPortId?: string;
                        poolType?: _167.PoolType;
                        validators?: {
                            operatorAddress?: string;
                            isEnabled?: boolean;
                            bondedAmount?: string;
                        }[];
                        bech32PrefixAccAddr?: string;
                        bech32PrefixValAddr?: string;
                        minDepositAmount?: string;
                        drawSchedule?: {
                            initialDrawAt?: Date;
                            drawDelta?: {
                                seconds?: string | number | import("long").Long;
                                nanos?: number;
                            };
                        };
                        prizeStrategy?: {
                            prizeBatches?: {
                                poolPercent?: string | number | import("long").Long;
                                quantity?: string | number | import("long").Long;
                                drawProbability?: string;
                                isUnique?: boolean;
                            }[];
                        };
                        unbondingDuration?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxUnbondingEntries?: string;
                        localAddress?: string;
                        icaDepositAddress?: string;
                        icaPrizepoolAddress?: string;
                        nextDrawId?: string | number | import("long").Long;
                        tvlAmount?: string;
                        depositorsCount?: string | number | import("long").Long;
                        sponsorshipAmount?: string;
                        lastDrawCreatedAt?: Date;
                        lastDrawState?: _162.DrawState;
                        availablePrizePool?: {
                            denom?: string;
                            amount?: string;
                        };
                        state?: _167.PoolState;
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        createdAt?: Date;
                        updatedAt?: Date;
                    }[];
                    deposits?: {
                        poolId?: string | number | import("long").Long;
                        depositId?: string | number | import("long").Long;
                        state?: _160.DepositState;
                        errorState?: _160.DepositState;
                        depositorAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        winnerAddress?: string;
                        isSponsor?: boolean;
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        createdAt?: Date;
                        updatedAt?: Date;
                    }[];
                    draws?: {
                        poolId?: string | number | import("long").Long;
                        drawId?: string | number | import("long").Long;
                        state?: _162.DrawState;
                        errorState?: _162.DrawState;
                        randSeed?: string | number | import("long").Long;
                        prizePool?: {
                            denom?: string;
                            amount?: string;
                        };
                        prizePoolFreshAmount?: string;
                        prizePoolRemainsAmount?: string;
                        prizesRefs?: {
                            amount?: string;
                            prizeId?: string | number | import("long").Long;
                            winnerAddress?: string;
                        }[];
                        totalWinCount?: string | number | import("long").Long;
                        totalWinAmount?: string;
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        createdAt?: Date;
                        updatedAt?: Date;
                    }[];
                    prizes?: {
                        poolId?: string | number | import("long").Long;
                        drawId?: string | number | import("long").Long;
                        prizeId?: string | number | import("long").Long;
                        state?: _171.PrizeState;
                        winnerAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        expiresAt?: Date;
                        createdAt?: Date;
                        updatedAt?: Date;
                    }[];
                    withdrawals?: {
                        poolId?: string | number | import("long").Long;
                        depositId?: string | number | import("long").Long;
                        withdrawalId?: string | number | import("long").Long;
                        state?: _174.WithdrawalState;
                        errorState?: _174.WithdrawalState;
                        depositorAddress?: string;
                        toAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAtHeight?: string | number | import("long").Long;
                        updatedAtHeight?: string | number | import("long").Long;
                        unbondingEndsAt?: Date;
                        createdAt?: Date;
                        updatedAt?: Date;
                    }[];
                    epochTrackers?: {
                        epochTrackerType?: string;
                        epochIdentifier?: string;
                        epochNumber?: string | number | import("long").Long;
                        nextEpochNumber?: string | number | import("long").Long;
                        previousEpochNumber?: string | number | import("long").Long;
                        nextEpochStartTime?: Date;
                    }[];
                }): _164.GenesisState;
                fromAmino(object: _164.GenesisStateAmino): _164.GenesisState;
                toAmino(message: _164.GenesisState): _164.GenesisStateAmino;
                fromAminoMsg(object: _164.GenesisStateAminoMsg): _164.GenesisState;
                fromProtoMsg(message: _164.GenesisStateProtoMsg): _164.GenesisState;
                toProto(message: _164.GenesisState): Uint8Array;
                toProtoMsg(message: _164.GenesisState): _164.GenesisStateProtoMsg;
            };
            EpochUnbonding: {
                encode(message: _163.EpochUnbonding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EpochUnbonding;
                fromPartial(object: {
                    epochIdentifier?: string;
                    epochNumber?: string | number | import("long").Long;
                    poolId?: string | number | import("long").Long;
                    withdrawalIds?: (string | number | import("long").Long)[];
                    withdrawalIdsCount?: string | number | import("long").Long;
                    totalAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    createdAtHeight?: string | number | import("long").Long;
                    updatedAtHeight?: string | number | import("long").Long;
                    createdAt?: Date;
                    updatedAt?: Date;
                }): _163.EpochUnbonding;
                fromAmino(object: _163.EpochUnbondingAmino): _163.EpochUnbonding;
                toAmino(message: _163.EpochUnbonding): _163.EpochUnbondingAmino;
                fromAminoMsg(object: _163.EpochUnbondingAminoMsg): _163.EpochUnbonding;
                fromProtoMsg(message: _163.EpochUnbondingProtoMsg): _163.EpochUnbonding;
                toProto(message: _163.EpochUnbonding): Uint8Array;
                toProtoMsg(message: _163.EpochUnbonding): _163.EpochUnbondingProtoMsg;
            };
            EpochTracker: {
                encode(message: _163.EpochTracker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EpochTracker;
                fromPartial(object: {
                    epochTrackerType?: string;
                    epochIdentifier?: string;
                    epochNumber?: string | number | import("long").Long;
                    nextEpochNumber?: string | number | import("long").Long;
                    previousEpochNumber?: string | number | import("long").Long;
                    nextEpochStartTime?: Date;
                }): _163.EpochTracker;
                fromAmino(object: _163.EpochTrackerAmino): _163.EpochTracker;
                toAmino(message: _163.EpochTracker): _163.EpochTrackerAmino;
                fromAminoMsg(object: _163.EpochTrackerAminoMsg): _163.EpochTracker;
                fromProtoMsg(message: _163.EpochTrackerProtoMsg): _163.EpochTracker;
                toProto(message: _163.EpochTracker): Uint8Array;
                toProtoMsg(message: _163.EpochTracker): _163.EpochTrackerProtoMsg;
            };
            drawStateFromJSON(object: any): _162.DrawState;
            drawStateToJSON(object: _162.DrawState): string;
            DrawState: typeof _162.DrawState;
            DrawStateSDKType: typeof _162.DrawState;
            DrawStateAmino: typeof _162.DrawState;
            Draw: {
                encode(message: _162.Draw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Draw;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    drawId?: string | number | import("long").Long;
                    state?: _162.DrawState;
                    errorState?: _162.DrawState;
                    randSeed?: string | number | import("long").Long;
                    prizePool?: {
                        denom?: string;
                        amount?: string;
                    };
                    prizePoolFreshAmount?: string;
                    prizePoolRemainsAmount?: string;
                    prizesRefs?: {
                        amount?: string;
                        prizeId?: string | number | import("long").Long;
                        winnerAddress?: string;
                    }[];
                    totalWinCount?: string | number | import("long").Long;
                    totalWinAmount?: string;
                    createdAtHeight?: string | number | import("long").Long;
                    updatedAtHeight?: string | number | import("long").Long;
                    createdAt?: Date;
                    updatedAt?: Date;
                }): _162.Draw;
                fromAmino(object: _162.DrawAmino): _162.Draw;
                toAmino(message: _162.Draw): _162.DrawAmino;
                fromAminoMsg(object: _162.DrawAminoMsg): _162.Draw;
                fromProtoMsg(message: _162.DrawProtoMsg): _162.Draw;
                toProto(message: _162.Draw): Uint8Array;
                toProtoMsg(message: _162.Draw): _162.DrawProtoMsg;
            };
            DrawSchedule: {
                encode(message: _161.DrawSchedule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.DrawSchedule;
                fromPartial(object: {
                    initialDrawAt?: Date;
                    drawDelta?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                }): _161.DrawSchedule;
                fromAmino(object: _161.DrawScheduleAmino): _161.DrawSchedule;
                toAmino(message: _161.DrawSchedule): _161.DrawScheduleAmino;
                fromAminoMsg(object: _161.DrawScheduleAminoMsg): _161.DrawSchedule;
                fromProtoMsg(message: _161.DrawScheduleProtoMsg): _161.DrawSchedule;
                toProto(message: _161.DrawSchedule): Uint8Array;
                toProtoMsg(message: _161.DrawSchedule): _161.DrawScheduleProtoMsg;
            };
            depositStateFromJSON(object: any): _160.DepositState;
            depositStateToJSON(object: _160.DepositState): string;
            DepositState: typeof _160.DepositState;
            DepositStateSDKType: typeof _160.DepositState;
            DepositStateAmino: typeof _160.DepositState;
            Deposit: {
                encode(message: _160.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Deposit;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    depositId?: string | number | import("long").Long;
                    state?: _160.DepositState;
                    errorState?: _160.DepositState;
                    depositorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    winnerAddress?: string;
                    isSponsor?: boolean;
                    createdAtHeight?: string | number | import("long").Long;
                    updatedAtHeight?: string | number | import("long").Long;
                    createdAt?: Date;
                    updatedAt?: Date;
                }): _160.Deposit;
                fromAmino(object: _160.DepositAmino): _160.Deposit;
                toAmino(message: _160.Deposit): _160.DepositAmino;
                fromAminoMsg(object: _160.DepositAminoMsg): _160.Deposit;
                fromProtoMsg(message: _160.DepositProtoMsg): _160.Deposit;
                toProto(message: _160.Deposit): Uint8Array;
                toProtoMsg(message: _160.Deposit): _160.DepositProtoMsg;
            };
            transferTypeFromJSON(object: any): _159.TransferType;
            transferTypeToJSON(object: _159.TransferType): string;
            TransferType: typeof _159.TransferType;
            TransferTypeSDKType: typeof _159.TransferType;
            TransferTypeAmino: typeof _159.TransferType;
            SplitDelegation: {
                encode(message: _159.SplitDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SplitDelegation;
                fromPartial(object: {
                    validatorAddress?: string;
                    amount?: string;
                }): _159.SplitDelegation;
                fromAmino(object: _159.SplitDelegationAmino): _159.SplitDelegation;
                toAmino(message: _159.SplitDelegation): _159.SplitDelegationAmino;
                fromAminoMsg(object: _159.SplitDelegationAminoMsg): _159.SplitDelegation;
                fromProtoMsg(message: _159.SplitDelegationProtoMsg): _159.SplitDelegation;
                toProto(message: _159.SplitDelegation): Uint8Array;
                toProtoMsg(message: _159.SplitDelegation): _159.SplitDelegationProtoMsg;
            };
            DelegateCallback: {
                encode(message: _159.DelegateCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.DelegateCallback;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    depositId?: string | number | import("long").Long;
                    splitDelegations?: {
                        validatorAddress?: string;
                        amount?: string;
                    }[];
                }): _159.DelegateCallback;
                fromAmino(object: _159.DelegateCallbackAmino): _159.DelegateCallback;
                toAmino(message: _159.DelegateCallback): _159.DelegateCallbackAmino;
                fromAminoMsg(object: _159.DelegateCallbackAminoMsg): _159.DelegateCallback;
                fromProtoMsg(message: _159.DelegateCallbackProtoMsg): _159.DelegateCallback;
                toProto(message: _159.DelegateCallback): Uint8Array;
                toProtoMsg(message: _159.DelegateCallback): _159.DelegateCallbackProtoMsg;
            };
            UndelegateCallback: {
                encode(message: _159.UndelegateCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.UndelegateCallback;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    withdrawalIds?: (string | number | import("long").Long)[];
                }): _159.UndelegateCallback;
                fromAmino(object: _159.UndelegateCallbackAmino): _159.UndelegateCallback;
                toAmino(message: _159.UndelegateCallback): _159.UndelegateCallbackAmino;
                fromAminoMsg(object: _159.UndelegateCallbackAminoMsg): _159.UndelegateCallback;
                fromProtoMsg(message: _159.UndelegateCallbackProtoMsg): _159.UndelegateCallback;
                toProto(message: _159.UndelegateCallback): Uint8Array;
                toProtoMsg(message: _159.UndelegateCallback): _159.UndelegateCallbackProtoMsg;
            };
            RedelegateCallback: {
                encode(message: _159.RedelegateCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.RedelegateCallback;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    operatorAddress?: string;
                    splitDelegations?: {
                        validatorAddress?: string;
                        amount?: string;
                    }[];
                }): _159.RedelegateCallback;
                fromAmino(object: _159.RedelegateCallbackAmino): _159.RedelegateCallback;
                toAmino(message: _159.RedelegateCallback): _159.RedelegateCallbackAmino;
                fromAminoMsg(object: _159.RedelegateCallbackAminoMsg): _159.RedelegateCallback;
                fromProtoMsg(message: _159.RedelegateCallbackProtoMsg): _159.RedelegateCallback;
                toProto(message: _159.RedelegateCallback): Uint8Array;
                toProtoMsg(message: _159.RedelegateCallback): _159.RedelegateCallbackProtoMsg;
            };
            ClaimRewardsCallback: {
                encode(message: _159.ClaimRewardsCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ClaimRewardsCallback;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    drawId?: string | number | import("long").Long;
                }): _159.ClaimRewardsCallback;
                fromAmino(object: _159.ClaimRewardsCallbackAmino): _159.ClaimRewardsCallback;
                toAmino(message: _159.ClaimRewardsCallback): _159.ClaimRewardsCallbackAmino;
                fromAminoMsg(object: _159.ClaimRewardsCallbackAminoMsg): _159.ClaimRewardsCallback;
                fromProtoMsg(message: _159.ClaimRewardsCallbackProtoMsg): _159.ClaimRewardsCallback;
                toProto(message: _159.ClaimRewardsCallback): Uint8Array;
                toProtoMsg(message: _159.ClaimRewardsCallback): _159.ClaimRewardsCallbackProtoMsg;
            };
            TransferToNativeCallback: {
                encode(message: _159.TransferToNativeCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.TransferToNativeCallback;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    depositId?: string | number | import("long").Long;
                }): _159.TransferToNativeCallback;
                fromAmino(object: _159.TransferToNativeCallbackAmino): _159.TransferToNativeCallback;
                toAmino(message: _159.TransferToNativeCallback): _159.TransferToNativeCallbackAmino;
                fromAminoMsg(object: _159.TransferToNativeCallbackAminoMsg): _159.TransferToNativeCallback;
                fromProtoMsg(message: _159.TransferToNativeCallbackProtoMsg): _159.TransferToNativeCallback;
                toProto(message: _159.TransferToNativeCallback): Uint8Array;
                toProtoMsg(message: _159.TransferToNativeCallback): _159.TransferToNativeCallbackProtoMsg;
            };
            TransferFromNativeCallback: {
                encode(message: _159.TransferFromNativeCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.TransferFromNativeCallback;
                fromPartial(object: {
                    type?: _159.TransferType;
                    poolId?: string | number | import("long").Long;
                    drawId?: string | number | import("long").Long;
                    withdrawalId?: string | number | import("long").Long;
                }): _159.TransferFromNativeCallback;
                fromAmino(object: _159.TransferFromNativeCallbackAmino): _159.TransferFromNativeCallback;
                toAmino(message: _159.TransferFromNativeCallback): _159.TransferFromNativeCallbackAmino;
                fromAminoMsg(object: _159.TransferFromNativeCallbackAminoMsg): _159.TransferFromNativeCallback;
                fromProtoMsg(message: _159.TransferFromNativeCallbackProtoMsg): _159.TransferFromNativeCallback;
                toProto(message: _159.TransferFromNativeCallback): Uint8Array;
                toProtoMsg(message: _159.TransferFromNativeCallback): _159.TransferFromNativeCallbackProtoMsg;
            };
            SetWithdrawAddressCallback: {
                encode(message: _159.SetWithdrawAddressCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SetWithdrawAddressCallback;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                }): _159.SetWithdrawAddressCallback;
                fromAmino(object: _159.SetWithdrawAddressCallbackAmino): _159.SetWithdrawAddressCallback;
                toAmino(message: _159.SetWithdrawAddressCallback): _159.SetWithdrawAddressCallbackAmino;
                fromAminoMsg(object: _159.SetWithdrawAddressCallbackAminoMsg): _159.SetWithdrawAddressCallback;
                fromProtoMsg(message: _159.SetWithdrawAddressCallbackProtoMsg): _159.SetWithdrawAddressCallback;
                toProto(message: _159.SetWithdrawAddressCallback): Uint8Array;
                toProtoMsg(message: _159.SetWithdrawAddressCallback): _159.SetWithdrawAddressCallbackProtoMsg;
            };
            BankSendCallback: {
                encode(message: _159.BankSendCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.BankSendCallback;
                fromPartial(object: {
                    poolId?: string | number | import("long").Long;
                    withdrawalId?: string | number | import("long").Long;
                }): _159.BankSendCallback;
                fromAmino(object: _159.BankSendCallbackAmino): _159.BankSendCallback;
                toAmino(message: _159.BankSendCallback): _159.BankSendCallbackAmino;
                fromAminoMsg(object: _159.BankSendCallbackAminoMsg): _159.BankSendCallback;
                fromProtoMsg(message: _159.BankSendCallbackProtoMsg): _159.BankSendCallback;
                toProto(message: _159.BankSendCallback): Uint8Array;
                toProtoMsg(message: _159.BankSendCallback): _159.BankSendCallbackProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            lum: {
                network: {
                    beam: _265.MsgClientImpl;
                    dfract: _266.MsgClientImpl;
                    millions: _267.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            lum: {
                network: {
                    airdrop: {
                        moduleAccountBalance(request?: _140.QueryModuleAccountBalanceRequest): Promise<_140.QueryModuleAccountBalanceResponse>;
                        params(request?: _140.QueryParamsRequest): Promise<_140.QueryParamsResponse>;
                        claimRecord(request: _140.QueryClaimRecordRequest): Promise<_140.QueryClaimRecordResponse>;
                        claimableForAction(request: _140.QueryClaimableForActionRequest): Promise<_140.QueryClaimableForActionResponse>;
                        totalClaimable(request: _140.QueryTotalClaimableRequest): Promise<_140.QueryTotalClaimableResponse>;
                    };
                    beam: {
                        beam(request: _144.QueryGetBeamRequest): Promise<_144.QueryGetBeamResponse>;
                        beams(request: _144.QueryFetchBeamsRequest): Promise<_144.QueryFetchBeamsResponse>;
                        beamsOpenQueue(request?: _144.QueryFetchBeamsOpenQueueRequest): Promise<_144.QueryFetchBeamsOpenQueueResponse>;
                    };
                    dfract: {
                        moduleAccountBalance(request?: _151.QueryModuleAccountBalanceRequest): Promise<_151.QueryModuleAccountBalanceResponse>;
                        params(request?: _151.QueryParamsRequest): Promise<_151.QueryParamsResponse>;
                        getDepositsForAddress(request: _151.QueryGetDepositsForAddressRequest): Promise<_151.QueryGetDepositsForAddressResponse>;
                        fetchDeposits(request: _151.QueryFetchDepositsRequest): Promise<_151.QueryFetchDepositsResponse>;
                    };
                    icacallbacks: {
                        params(request?: _157.QueryParamsRequest): Promise<_157.QueryParamsResponse>;
                        callbackData(request: _157.QueryGetCallbackDataRequest): Promise<_157.QueryGetCallbackDataResponse>;
                        callbackDataAll(request?: _157.QueryAllCallbackDataRequest): Promise<_157.QueryAllCallbackDataResponse>;
                    };
                    millions: {
                        params(request?: _172.QueryParamsRequest): Promise<_172.QueryParamsResponse>;
                        pools(request?: _172.QueryPoolsRequest): Promise<_172.QueryPoolsResponse>;
                        pool(request: _172.QueryPoolRequest): Promise<_172.QueryPoolResponse>;
                        deposits(request?: _172.QueryDepositsRequest): Promise<_172.QueryDepositsResponse>;
                        poolDeposits(request: _172.QueryPoolDepositsRequest): Promise<_172.QueryDepositsResponse>;
                        poolDeposit(request: _172.QueryPoolDepositRequest): Promise<_172.QueryDepositResponse>;
                        accountDeposits(request: _172.QueryAccountDepositsRequest): Promise<_172.QueryDepositsResponse>;
                        accountPoolDeposits(request: _172.QueryAccountPoolDepositsRequest): Promise<_172.QueryDepositsResponse>;
                        draws(request?: _172.QueryDrawsRequest): Promise<_172.QueryDrawsResponse>;
                        poolDraws(request: _172.QueryPoolDrawsRequest): Promise<_172.QueryDrawsResponse>;
                        poolDraw(request: _172.QueryPoolDrawRequest): Promise<_172.QueryDrawResponse>;
                        prizes(request?: _172.QueryPrizesRequest): Promise<_172.QueryPrizesResponse>;
                        poolPrizes(request: _172.QueryPoolPrizesRequest): Promise<_172.QueryPrizesResponse>;
                        poolDrawPrizes(request: _172.QueryPoolDrawPrizesRequest): Promise<_172.QueryPrizesResponse>;
                        poolDrawPrize(request: _172.QueryPoolDrawPrizeRequest): Promise<_172.QueryPrizeResponse>;
                        accountPrizes(request: _172.QueryAccountPrizesRequest): Promise<_172.QueryPrizesResponse>;
                        accountPoolPrizes(request: _172.QueryAccountPoolPrizesRequest): Promise<_172.QueryPrizesResponse>;
                        accountPoolDrawPrizes(request: _172.QueryAccountPoolDrawPrizesRequest): Promise<_172.QueryPrizesResponse>;
                        withdrawals(request?: _172.QueryWithdrawalsRequest): Promise<_172.QueryWithdrawalsResponse>;
                        poolWithdrawals(request: _172.QueryPoolWithdrawalsRequest): Promise<_172.QueryWithdrawalsResponse>;
                        poolWithdrawal(request: _172.QueryPoolWithdrawalRequest): Promise<_172.QueryWithdrawalResponse>;
                        accountWithdrawals(request: _172.QueryAccountWithdrawalsRequest): Promise<_172.QueryWithdrawalsResponse>;
                        accountPoolWithdrawals(request: _172.QueryAccountPoolWithdrawalsRequest): Promise<_172.QueryWithdrawalsResponse>;
                    };
                };
            };
        }>;
    };
}
