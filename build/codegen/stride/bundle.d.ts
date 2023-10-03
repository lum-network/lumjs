/// <reference types="long" />
import * as _175 from "./interchainquery/v1/genesis";
import * as _176 from "./interchainquery/v1/message";
import * as _177 from "./interchainquery/v1/query";
import * as _270 from "./interchainquery/v1/message.rpc.msg";
export declare namespace stride {
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _270.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _176.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _176.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _176.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _176.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _176.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _176.MsgSubmitQueryResponse) => _176.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _176.MsgSubmitQueryResponseAmino) => _176.MsgSubmitQueryResponse;
                };
            };
            QueryPendingQueriesRequest: {
                encode(_: _177.QueryPendingQueriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryPendingQueriesRequest;
                fromPartial(_: {}): _177.QueryPendingQueriesRequest;
                fromAmino(_: _177.QueryPendingQueriesRequestAmino): _177.QueryPendingQueriesRequest;
                toAmino(_: _177.QueryPendingQueriesRequest): _177.QueryPendingQueriesRequestAmino;
                fromAminoMsg(object: _177.QueryPendingQueriesRequestAminoMsg): _177.QueryPendingQueriesRequest;
                fromProtoMsg(message: _177.QueryPendingQueriesRequestProtoMsg): _177.QueryPendingQueriesRequest;
                toProto(message: _177.QueryPendingQueriesRequest): Uint8Array;
                toProtoMsg(message: _177.QueryPendingQueriesRequest): _177.QueryPendingQueriesRequestProtoMsg;
            };
            QueryPendingQueriesResponse: {
                encode(message: _177.QueryPendingQueriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryPendingQueriesResponse;
                fromPartial(object: {
                    pendingQueries?: {
                        id?: string;
                        connectionId?: string;
                        chainId?: string;
                        queryType?: string;
                        request?: Uint8Array;
                        callbackId?: string;
                        ttl?: string | number | import("long").Long;
                        requestSent?: boolean;
                        extraId?: string;
                    }[];
                }): _177.QueryPendingQueriesResponse;
                fromAmino(object: _177.QueryPendingQueriesResponseAmino): _177.QueryPendingQueriesResponse;
                toAmino(message: _177.QueryPendingQueriesResponse): _177.QueryPendingQueriesResponseAmino;
                fromAminoMsg(object: _177.QueryPendingQueriesResponseAminoMsg): _177.QueryPendingQueriesResponse;
                fromProtoMsg(message: _177.QueryPendingQueriesResponseProtoMsg): _177.QueryPendingQueriesResponse;
                toProto(message: _177.QueryPendingQueriesResponse): Uint8Array;
                toProtoMsg(message: _177.QueryPendingQueriesResponse): _177.QueryPendingQueriesResponseProtoMsg;
            };
            QueryQueriesRequest: {
                encode(_: _177.QueryQueriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryQueriesRequest;
                fromPartial(_: {}): _177.QueryQueriesRequest;
                fromAmino(_: _177.QueryQueriesRequestAmino): _177.QueryQueriesRequest;
                toAmino(_: _177.QueryQueriesRequest): _177.QueryQueriesRequestAmino;
                fromAminoMsg(object: _177.QueryQueriesRequestAminoMsg): _177.QueryQueriesRequest;
                fromProtoMsg(message: _177.QueryQueriesRequestProtoMsg): _177.QueryQueriesRequest;
                toProto(message: _177.QueryQueriesRequest): Uint8Array;
                toProtoMsg(message: _177.QueryQueriesRequest): _177.QueryQueriesRequestProtoMsg;
            };
            QueryQueriesResponse: {
                encode(message: _177.QueryQueriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryQueriesResponse;
                fromPartial(object: {
                    queries?: {
                        id?: string;
                        connectionId?: string;
                        chainId?: string;
                        queryType?: string;
                        request?: Uint8Array;
                        callbackId?: string;
                        ttl?: string | number | import("long").Long;
                        requestSent?: boolean;
                        extraId?: string;
                    }[];
                }): _177.QueryQueriesResponse;
                fromAmino(object: _177.QueryQueriesResponseAmino): _177.QueryQueriesResponse;
                toAmino(message: _177.QueryQueriesResponse): _177.QueryQueriesResponseAmino;
                fromAminoMsg(object: _177.QueryQueriesResponseAminoMsg): _177.QueryQueriesResponse;
                fromProtoMsg(message: _177.QueryQueriesResponseProtoMsg): _177.QueryQueriesResponse;
                toProto(message: _177.QueryQueriesResponse): Uint8Array;
                toProtoMsg(message: _177.QueryQueriesResponse): _177.QueryQueriesResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                encode(message: _176.MsgSubmitQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgSubmitQueryResponse;
                fromPartial(object: {
                    chainId?: string;
                    queryId?: string;
                    result?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: string | number | import("long").Long;
                    fromAddress?: string;
                }): _176.MsgSubmitQueryResponse;
                fromAmino(object: _176.MsgSubmitQueryResponseAmino): _176.MsgSubmitQueryResponse;
                toAmino(message: _176.MsgSubmitQueryResponse): _176.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _176.MsgSubmitQueryResponseAminoMsg): _176.MsgSubmitQueryResponse;
                fromProtoMsg(message: _176.MsgSubmitQueryResponseProtoMsg): _176.MsgSubmitQueryResponse;
                toProto(message: _176.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _176.MsgSubmitQueryResponse): _176.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                encode(_: _176.MsgSubmitQueryResponseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgSubmitQueryResponseResponse;
                fromPartial(_: {}): _176.MsgSubmitQueryResponseResponse;
                fromAmino(_: _176.MsgSubmitQueryResponseResponseAmino): _176.MsgSubmitQueryResponseResponse;
                toAmino(_: _176.MsgSubmitQueryResponseResponse): _176.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _176.MsgSubmitQueryResponseResponseAminoMsg): _176.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _176.MsgSubmitQueryResponseResponseProtoMsg): _176.MsgSubmitQueryResponseResponse;
                toProto(message: _176.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _176.MsgSubmitQueryResponseResponse): _176.MsgSubmitQueryResponseResponseProtoMsg;
            };
            Query: {
                encode(message: _175.Query, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Query;
                fromPartial(object: {
                    id?: string;
                    connectionId?: string;
                    chainId?: string;
                    queryType?: string;
                    request?: Uint8Array;
                    callbackId?: string;
                    ttl?: string | number | import("long").Long;
                    requestSent?: boolean;
                    extraId?: string;
                }): _175.Query;
                fromAmino(object: _175.QueryAmino): _175.Query;
                toAmino(message: _175.Query): _175.QueryAmino;
                fromAminoMsg(object: _175.QueryAminoMsg): _175.Query;
                fromProtoMsg(message: _175.QueryProtoMsg): _175.Query;
                toProto(message: _175.Query): Uint8Array;
                toProtoMsg(message: _175.Query): _175.QueryProtoMsg;
            };
            DataPoint: {
                encode(message: _175.DataPoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.DataPoint;
                fromPartial(object: {
                    id?: string;
                    remoteHeight?: string;
                    localHeight?: string;
                    value?: Uint8Array;
                }): _175.DataPoint;
                fromAmino(object: _175.DataPointAmino): _175.DataPoint;
                toAmino(message: _175.DataPoint): _175.DataPointAmino;
                fromAminoMsg(object: _175.DataPointAminoMsg): _175.DataPoint;
                fromProtoMsg(message: _175.DataPointProtoMsg): _175.DataPoint;
                toProto(message: _175.DataPoint): Uint8Array;
                toProtoMsg(message: _175.DataPoint): _175.DataPointProtoMsg;
            };
            GenesisState: {
                encode(message: _175.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.GenesisState;
                fromPartial(object: {
                    queries?: {
                        id?: string;
                        connectionId?: string;
                        chainId?: string;
                        queryType?: string;
                        request?: Uint8Array;
                        callbackId?: string;
                        ttl?: string | number | import("long").Long;
                        requestSent?: boolean;
                        extraId?: string;
                    }[];
                }): _175.GenesisState;
                fromAmino(object: _175.GenesisStateAmino): _175.GenesisState;
                toAmino(message: _175.GenesisState): _175.GenesisStateAmino;
                fromAminoMsg(object: _175.GenesisStateAminoMsg): _175.GenesisState;
                fromProtoMsg(message: _175.GenesisStateProtoMsg): _175.GenesisState;
                toProto(message: _175.GenesisState): Uint8Array;
                toProtoMsg(message: _175.GenesisState): _175.GenesisStateProtoMsg;
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
            stride: {
                interchainquery: {
                    v1: _270.MsgClientImpl;
                };
            };
        }>;
    };
}
