/// <reference types="long" />
import * as _126 from "./abci/types";
import * as _127 from "./crypto/keys";
import * as _128 from "./crypto/proof";
import * as _129 from "./libs/bits/types";
import * as _130 from "./p2p/types";
import * as _131 from "./types/block";
import * as _132 from "./types/evidence";
import * as _133 from "./types/params";
import * as _134 from "./types/types";
import * as _135 from "./types/validator";
import * as _136 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _126.CheckTxType;
        checkTxTypeToJSON(object: _126.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _126.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _126.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _126.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _126.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _126.EvidenceType;
        evidenceTypeToJSON(object: _126.EvidenceType): string;
        CheckTxType: typeof _126.CheckTxType;
        CheckTxTypeSDKType: typeof _126.CheckTxType;
        CheckTxTypeAmino: typeof _126.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _126.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _126.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _126.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _126.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _126.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _126.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _126.EvidenceType;
        EvidenceTypeSDKType: typeof _126.EvidenceType;
        EvidenceTypeAmino: typeof _126.EvidenceType;
        Request: {
            encode(message: _126.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Request;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: string | number | import("long").Long;
                    p2pVersion?: string | number | import("long").Long;
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long").Long;
                            maxGas?: string | number | import("long").Long;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").Long;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").Long;
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long").Long;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long").Long;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").Long;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: string | number | import("long").Long;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: string | number | import("long").Long;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: string | number | import("long").Long;
                            app?: string | number | import("long").Long;
                        };
                        chainId?: string;
                        height?: string | number | import("long").Long;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: string | number | import("long").Long;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _126.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long").Long;
                        };
                        height?: string | number | import("long").Long;
                        time?: Date;
                        totalVotingPower?: string | number | import("long").Long;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _126.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: string | number | import("long").Long;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: string | number | import("long").Long;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: string | number | import("long").Long;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _126.Request;
            fromAmino(object: _126.RequestAmino): _126.Request;
            toAmino(message: _126.Request): _126.RequestAmino;
            fromAminoMsg(object: _126.RequestAminoMsg): _126.Request;
            fromProtoMsg(message: _126.RequestProtoMsg): _126.Request;
            toProto(message: _126.Request): Uint8Array;
            toProtoMsg(message: _126.Request): _126.RequestProtoMsg;
        };
        RequestEcho: {
            encode(message: _126.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestEcho;
            fromPartial(object: {
                message?: string;
            }): _126.RequestEcho;
            fromAmino(object: _126.RequestEchoAmino): _126.RequestEcho;
            toAmino(message: _126.RequestEcho): _126.RequestEchoAmino;
            fromAminoMsg(object: _126.RequestEchoAminoMsg): _126.RequestEcho;
            fromProtoMsg(message: _126.RequestEchoProtoMsg): _126.RequestEcho;
            toProto(message: _126.RequestEcho): Uint8Array;
            toProtoMsg(message: _126.RequestEcho): _126.RequestEchoProtoMsg;
        };
        RequestFlush: {
            encode(_: _126.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestFlush;
            fromPartial(_: {}): _126.RequestFlush;
            fromAmino(_: _126.RequestFlushAmino): _126.RequestFlush;
            toAmino(_: _126.RequestFlush): _126.RequestFlushAmino;
            fromAminoMsg(object: _126.RequestFlushAminoMsg): _126.RequestFlush;
            fromProtoMsg(message: _126.RequestFlushProtoMsg): _126.RequestFlush;
            toProto(message: _126.RequestFlush): Uint8Array;
            toProtoMsg(message: _126.RequestFlush): _126.RequestFlushProtoMsg;
        };
        RequestInfo: {
            encode(message: _126.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestInfo;
            fromPartial(object: {
                version?: string;
                blockVersion?: string | number | import("long").Long;
                p2pVersion?: string | number | import("long").Long;
            }): _126.RequestInfo;
            fromAmino(object: _126.RequestInfoAmino): _126.RequestInfo;
            toAmino(message: _126.RequestInfo): _126.RequestInfoAmino;
            fromAminoMsg(object: _126.RequestInfoAminoMsg): _126.RequestInfo;
            fromProtoMsg(message: _126.RequestInfoProtoMsg): _126.RequestInfo;
            toProto(message: _126.RequestInfo): Uint8Array;
            toProtoMsg(message: _126.RequestInfo): _126.RequestInfoProtoMsg;
        };
        RequestSetOption: {
            encode(message: _126.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestSetOption;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _126.RequestSetOption;
            fromAmino(object: _126.RequestSetOptionAmino): _126.RequestSetOption;
            toAmino(message: _126.RequestSetOption): _126.RequestSetOptionAmino;
            fromAminoMsg(object: _126.RequestSetOptionAminoMsg): _126.RequestSetOption;
            fromProtoMsg(message: _126.RequestSetOptionProtoMsg): _126.RequestSetOption;
            toProto(message: _126.RequestSetOption): Uint8Array;
            toProtoMsg(message: _126.RequestSetOption): _126.RequestSetOptionProtoMsg;
        };
        RequestInitChain: {
            encode(message: _126.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestInitChain;
            fromPartial(object: {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long").Long;
                        maxGas?: string | number | import("long").Long;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").Long;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long").Long;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long").Long;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").Long;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: string | number | import("long").Long;
            }): _126.RequestInitChain;
            fromAmino(object: _126.RequestInitChainAmino): _126.RequestInitChain;
            toAmino(message: _126.RequestInitChain): _126.RequestInitChainAmino;
            fromAminoMsg(object: _126.RequestInitChainAminoMsg): _126.RequestInitChain;
            fromProtoMsg(message: _126.RequestInitChainProtoMsg): _126.RequestInitChain;
            toProto(message: _126.RequestInitChain): Uint8Array;
            toProtoMsg(message: _126.RequestInitChain): _126.RequestInitChainProtoMsg;
        };
        RequestQuery: {
            encode(message: _126.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestQuery;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: string | number | import("long").Long;
                prove?: boolean;
            }): _126.RequestQuery;
            fromAmino(object: _126.RequestQueryAmino): _126.RequestQuery;
            toAmino(message: _126.RequestQuery): _126.RequestQueryAmino;
            fromAminoMsg(object: _126.RequestQueryAminoMsg): _126.RequestQuery;
            fromProtoMsg(message: _126.RequestQueryProtoMsg): _126.RequestQuery;
            toProto(message: _126.RequestQuery): Uint8Array;
            toProtoMsg(message: _126.RequestQuery): _126.RequestQueryProtoMsg;
        };
        RequestBeginBlock: {
            encode(message: _126.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestBeginBlock;
            fromPartial(object: {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: string | number | import("long").Long;
                        app?: string | number | import("long").Long;
                    };
                    chainId?: string;
                    height?: string | number | import("long").Long;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long").Long;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _126.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").Long;
                    };
                    height?: string | number | import("long").Long;
                    time?: Date;
                    totalVotingPower?: string | number | import("long").Long;
                }[];
            }): _126.RequestBeginBlock;
            fromAmino(object: _126.RequestBeginBlockAmino): _126.RequestBeginBlock;
            toAmino(message: _126.RequestBeginBlock): _126.RequestBeginBlockAmino;
            fromAminoMsg(object: _126.RequestBeginBlockAminoMsg): _126.RequestBeginBlock;
            fromProtoMsg(message: _126.RequestBeginBlockProtoMsg): _126.RequestBeginBlock;
            toProto(message: _126.RequestBeginBlock): Uint8Array;
            toProtoMsg(message: _126.RequestBeginBlock): _126.RequestBeginBlockProtoMsg;
        };
        RequestCheckTx: {
            encode(message: _126.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestCheckTx;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _126.CheckTxType;
            }): _126.RequestCheckTx;
            fromAmino(object: _126.RequestCheckTxAmino): _126.RequestCheckTx;
            toAmino(message: _126.RequestCheckTx): _126.RequestCheckTxAmino;
            fromAminoMsg(object: _126.RequestCheckTxAminoMsg): _126.RequestCheckTx;
            fromProtoMsg(message: _126.RequestCheckTxProtoMsg): _126.RequestCheckTx;
            toProto(message: _126.RequestCheckTx): Uint8Array;
            toProtoMsg(message: _126.RequestCheckTx): _126.RequestCheckTxProtoMsg;
        };
        RequestDeliverTx: {
            encode(message: _126.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestDeliverTx;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _126.RequestDeliverTx;
            fromAmino(object: _126.RequestDeliverTxAmino): _126.RequestDeliverTx;
            toAmino(message: _126.RequestDeliverTx): _126.RequestDeliverTxAmino;
            fromAminoMsg(object: _126.RequestDeliverTxAminoMsg): _126.RequestDeliverTx;
            fromProtoMsg(message: _126.RequestDeliverTxProtoMsg): _126.RequestDeliverTx;
            toProto(message: _126.RequestDeliverTx): Uint8Array;
            toProtoMsg(message: _126.RequestDeliverTx): _126.RequestDeliverTxProtoMsg;
        };
        RequestEndBlock: {
            encode(message: _126.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestEndBlock;
            fromPartial(object: {
                height?: string | number | import("long").Long;
            }): _126.RequestEndBlock;
            fromAmino(object: _126.RequestEndBlockAmino): _126.RequestEndBlock;
            toAmino(message: _126.RequestEndBlock): _126.RequestEndBlockAmino;
            fromAminoMsg(object: _126.RequestEndBlockAminoMsg): _126.RequestEndBlock;
            fromProtoMsg(message: _126.RequestEndBlockProtoMsg): _126.RequestEndBlock;
            toProto(message: _126.RequestEndBlock): Uint8Array;
            toProtoMsg(message: _126.RequestEndBlock): _126.RequestEndBlockProtoMsg;
        };
        RequestCommit: {
            encode(_: _126.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestCommit;
            fromPartial(_: {}): _126.RequestCommit;
            fromAmino(_: _126.RequestCommitAmino): _126.RequestCommit;
            toAmino(_: _126.RequestCommit): _126.RequestCommitAmino;
            fromAminoMsg(object: _126.RequestCommitAminoMsg): _126.RequestCommit;
            fromProtoMsg(message: _126.RequestCommitProtoMsg): _126.RequestCommit;
            toProto(message: _126.RequestCommit): Uint8Array;
            toProtoMsg(message: _126.RequestCommit): _126.RequestCommitProtoMsg;
        };
        RequestListSnapshots: {
            encode(_: _126.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestListSnapshots;
            fromPartial(_: {}): _126.RequestListSnapshots;
            fromAmino(_: _126.RequestListSnapshotsAmino): _126.RequestListSnapshots;
            toAmino(_: _126.RequestListSnapshots): _126.RequestListSnapshotsAmino;
            fromAminoMsg(object: _126.RequestListSnapshotsAminoMsg): _126.RequestListSnapshots;
            fromProtoMsg(message: _126.RequestListSnapshotsProtoMsg): _126.RequestListSnapshots;
            toProto(message: _126.RequestListSnapshots): Uint8Array;
            toProtoMsg(message: _126.RequestListSnapshots): _126.RequestListSnapshotsProtoMsg;
        };
        RequestOfferSnapshot: {
            encode(message: _126.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestOfferSnapshot;
            fromPartial(object: {
                snapshot?: {
                    height?: string | number | import("long").Long;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _126.RequestOfferSnapshot;
            fromAmino(object: _126.RequestOfferSnapshotAmino): _126.RequestOfferSnapshot;
            toAmino(message: _126.RequestOfferSnapshot): _126.RequestOfferSnapshotAmino;
            fromAminoMsg(object: _126.RequestOfferSnapshotAminoMsg): _126.RequestOfferSnapshot;
            fromProtoMsg(message: _126.RequestOfferSnapshotProtoMsg): _126.RequestOfferSnapshot;
            toProto(message: _126.RequestOfferSnapshot): Uint8Array;
            toProtoMsg(message: _126.RequestOfferSnapshot): _126.RequestOfferSnapshotProtoMsg;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _126.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestLoadSnapshotChunk;
            fromPartial(object: {
                height?: string | number | import("long").Long;
                format?: number;
                chunk?: number;
            }): _126.RequestLoadSnapshotChunk;
            fromAmino(object: _126.RequestLoadSnapshotChunkAmino): _126.RequestLoadSnapshotChunk;
            toAmino(message: _126.RequestLoadSnapshotChunk): _126.RequestLoadSnapshotChunkAmino;
            fromAminoMsg(object: _126.RequestLoadSnapshotChunkAminoMsg): _126.RequestLoadSnapshotChunk;
            fromProtoMsg(message: _126.RequestLoadSnapshotChunkProtoMsg): _126.RequestLoadSnapshotChunk;
            toProto(message: _126.RequestLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _126.RequestLoadSnapshotChunk): _126.RequestLoadSnapshotChunkProtoMsg;
        };
        RequestApplySnapshotChunk: {
            encode(message: _126.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestApplySnapshotChunk;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _126.RequestApplySnapshotChunk;
            fromAmino(object: _126.RequestApplySnapshotChunkAmino): _126.RequestApplySnapshotChunk;
            toAmino(message: _126.RequestApplySnapshotChunk): _126.RequestApplySnapshotChunkAmino;
            fromAminoMsg(object: _126.RequestApplySnapshotChunkAminoMsg): _126.RequestApplySnapshotChunk;
            fromProtoMsg(message: _126.RequestApplySnapshotChunkProtoMsg): _126.RequestApplySnapshotChunk;
            toProto(message: _126.RequestApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _126.RequestApplySnapshotChunk): _126.RequestApplySnapshotChunkProtoMsg;
        };
        Response: {
            encode(message: _126.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Response;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: string | number | import("long").Long;
                    lastBlockHeight?: string | number | import("long").Long;
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long").Long;
                            maxGas?: string | number | import("long").Long;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").Long;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").Long;
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long").Long;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long").Long;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").Long;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: string | number | import("long").Long;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: string | number | import("long").Long;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long").Long;
                    gasUsed?: string | number | import("long").Long;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long").Long;
                    gasUsed?: string | number | import("long").Long;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").Long;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: string | number | import("long").Long;
                            maxGas?: string | number | import("long").Long;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").Long;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").Long;
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long").Long;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long").Long;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: string | number | import("long").Long;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: string | number | import("long").Long;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _126.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _126.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _126.Response;
            fromAmino(object: _126.ResponseAmino): _126.Response;
            toAmino(message: _126.Response): _126.ResponseAmino;
            fromAminoMsg(object: _126.ResponseAminoMsg): _126.Response;
            fromProtoMsg(message: _126.ResponseProtoMsg): _126.Response;
            toProto(message: _126.Response): Uint8Array;
            toProtoMsg(message: _126.Response): _126.ResponseProtoMsg;
        };
        ResponseException: {
            encode(message: _126.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseException;
            fromPartial(object: {
                error?: string;
            }): _126.ResponseException;
            fromAmino(object: _126.ResponseExceptionAmino): _126.ResponseException;
            toAmino(message: _126.ResponseException): _126.ResponseExceptionAmino;
            fromAminoMsg(object: _126.ResponseExceptionAminoMsg): _126.ResponseException;
            fromProtoMsg(message: _126.ResponseExceptionProtoMsg): _126.ResponseException;
            toProto(message: _126.ResponseException): Uint8Array;
            toProtoMsg(message: _126.ResponseException): _126.ResponseExceptionProtoMsg;
        };
        ResponseEcho: {
            encode(message: _126.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseEcho;
            fromPartial(object: {
                message?: string;
            }): _126.ResponseEcho;
            fromAmino(object: _126.ResponseEchoAmino): _126.ResponseEcho;
            toAmino(message: _126.ResponseEcho): _126.ResponseEchoAmino;
            fromAminoMsg(object: _126.ResponseEchoAminoMsg): _126.ResponseEcho;
            fromProtoMsg(message: _126.ResponseEchoProtoMsg): _126.ResponseEcho;
            toProto(message: _126.ResponseEcho): Uint8Array;
            toProtoMsg(message: _126.ResponseEcho): _126.ResponseEchoProtoMsg;
        };
        ResponseFlush: {
            encode(_: _126.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseFlush;
            fromPartial(_: {}): _126.ResponseFlush;
            fromAmino(_: _126.ResponseFlushAmino): _126.ResponseFlush;
            toAmino(_: _126.ResponseFlush): _126.ResponseFlushAmino;
            fromAminoMsg(object: _126.ResponseFlushAminoMsg): _126.ResponseFlush;
            fromProtoMsg(message: _126.ResponseFlushProtoMsg): _126.ResponseFlush;
            toProto(message: _126.ResponseFlush): Uint8Array;
            toProtoMsg(message: _126.ResponseFlush): _126.ResponseFlushProtoMsg;
        };
        ResponseInfo: {
            encode(message: _126.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseInfo;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: string | number | import("long").Long;
                lastBlockHeight?: string | number | import("long").Long;
                lastBlockAppHash?: Uint8Array;
            }): _126.ResponseInfo;
            fromAmino(object: _126.ResponseInfoAmino): _126.ResponseInfo;
            toAmino(message: _126.ResponseInfo): _126.ResponseInfoAmino;
            fromAminoMsg(object: _126.ResponseInfoAminoMsg): _126.ResponseInfo;
            fromProtoMsg(message: _126.ResponseInfoProtoMsg): _126.ResponseInfo;
            toProto(message: _126.ResponseInfo): Uint8Array;
            toProtoMsg(message: _126.ResponseInfo): _126.ResponseInfoProtoMsg;
        };
        ResponseSetOption: {
            encode(message: _126.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseSetOption;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _126.ResponseSetOption;
            fromAmino(object: _126.ResponseSetOptionAmino): _126.ResponseSetOption;
            toAmino(message: _126.ResponseSetOption): _126.ResponseSetOptionAmino;
            fromAminoMsg(object: _126.ResponseSetOptionAminoMsg): _126.ResponseSetOption;
            fromProtoMsg(message: _126.ResponseSetOptionProtoMsg): _126.ResponseSetOption;
            toProto(message: _126.ResponseSetOption): Uint8Array;
            toProtoMsg(message: _126.ResponseSetOption): _126.ResponseSetOptionProtoMsg;
        };
        ResponseInitChain: {
            encode(message: _126.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseInitChain;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long").Long;
                        maxGas?: string | number | import("long").Long;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").Long;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long").Long;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long").Long;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").Long;
                }[];
                appHash?: Uint8Array;
            }): _126.ResponseInitChain;
            fromAmino(object: _126.ResponseInitChainAmino): _126.ResponseInitChain;
            toAmino(message: _126.ResponseInitChain): _126.ResponseInitChainAmino;
            fromAminoMsg(object: _126.ResponseInitChainAminoMsg): _126.ResponseInitChain;
            fromProtoMsg(message: _126.ResponseInitChainProtoMsg): _126.ResponseInitChain;
            toProto(message: _126.ResponseInitChain): Uint8Array;
            toProtoMsg(message: _126.ResponseInitChain): _126.ResponseInitChainProtoMsg;
        };
        ResponseQuery: {
            encode(message: _126.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseQuery;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: string | number | import("long").Long;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: string | number | import("long").Long;
                codespace?: string;
            }): _126.ResponseQuery;
            fromAmino(object: _126.ResponseQueryAmino): _126.ResponseQuery;
            toAmino(message: _126.ResponseQuery): _126.ResponseQueryAmino;
            fromAminoMsg(object: _126.ResponseQueryAminoMsg): _126.ResponseQuery;
            fromProtoMsg(message: _126.ResponseQueryProtoMsg): _126.ResponseQuery;
            toProto(message: _126.ResponseQuery): Uint8Array;
            toProtoMsg(message: _126.ResponseQuery): _126.ResponseQueryProtoMsg;
        };
        ResponseBeginBlock: {
            encode(message: _126.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseBeginBlock;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _126.ResponseBeginBlock;
            fromAmino(object: _126.ResponseBeginBlockAmino): _126.ResponseBeginBlock;
            toAmino(message: _126.ResponseBeginBlock): _126.ResponseBeginBlockAmino;
            fromAminoMsg(object: _126.ResponseBeginBlockAminoMsg): _126.ResponseBeginBlock;
            fromProtoMsg(message: _126.ResponseBeginBlockProtoMsg): _126.ResponseBeginBlock;
            toProto(message: _126.ResponseBeginBlock): Uint8Array;
            toProtoMsg(message: _126.ResponseBeginBlock): _126.ResponseBeginBlockProtoMsg;
        };
        ResponseCheckTx: {
            encode(message: _126.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseCheckTx;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string | number | import("long").Long;
                gasUsed?: string | number | import("long").Long;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _126.ResponseCheckTx;
            fromAmino(object: _126.ResponseCheckTxAmino): _126.ResponseCheckTx;
            toAmino(message: _126.ResponseCheckTx): _126.ResponseCheckTxAmino;
            fromAminoMsg(object: _126.ResponseCheckTxAminoMsg): _126.ResponseCheckTx;
            fromProtoMsg(message: _126.ResponseCheckTxProtoMsg): _126.ResponseCheckTx;
            toProto(message: _126.ResponseCheckTx): Uint8Array;
            toProtoMsg(message: _126.ResponseCheckTx): _126.ResponseCheckTxProtoMsg;
        };
        ResponseDeliverTx: {
            encode(message: _126.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseDeliverTx;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string | number | import("long").Long;
                gasUsed?: string | number | import("long").Long;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _126.ResponseDeliverTx;
            fromAmino(object: _126.ResponseDeliverTxAmino): _126.ResponseDeliverTx;
            toAmino(message: _126.ResponseDeliverTx): _126.ResponseDeliverTxAmino;
            fromAminoMsg(object: _126.ResponseDeliverTxAminoMsg): _126.ResponseDeliverTx;
            fromProtoMsg(message: _126.ResponseDeliverTxProtoMsg): _126.ResponseDeliverTx;
            toProto(message: _126.ResponseDeliverTx): Uint8Array;
            toProtoMsg(message: _126.ResponseDeliverTx): _126.ResponseDeliverTxProtoMsg;
        };
        ResponseEndBlock: {
            encode(message: _126.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseEndBlock;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").Long;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: string | number | import("long").Long;
                        maxGas?: string | number | import("long").Long;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").Long;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long").Long;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long").Long;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _126.ResponseEndBlock;
            fromAmino(object: _126.ResponseEndBlockAmino): _126.ResponseEndBlock;
            toAmino(message: _126.ResponseEndBlock): _126.ResponseEndBlockAmino;
            fromAminoMsg(object: _126.ResponseEndBlockAminoMsg): _126.ResponseEndBlock;
            fromProtoMsg(message: _126.ResponseEndBlockProtoMsg): _126.ResponseEndBlock;
            toProto(message: _126.ResponseEndBlock): Uint8Array;
            toProtoMsg(message: _126.ResponseEndBlock): _126.ResponseEndBlockProtoMsg;
        };
        ResponseCommit: {
            encode(message: _126.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseCommit;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: string | number | import("long").Long;
            }): _126.ResponseCommit;
            fromAmino(object: _126.ResponseCommitAmino): _126.ResponseCommit;
            toAmino(message: _126.ResponseCommit): _126.ResponseCommitAmino;
            fromAminoMsg(object: _126.ResponseCommitAminoMsg): _126.ResponseCommit;
            fromProtoMsg(message: _126.ResponseCommitProtoMsg): _126.ResponseCommit;
            toProto(message: _126.ResponseCommit): Uint8Array;
            toProtoMsg(message: _126.ResponseCommit): _126.ResponseCommitProtoMsg;
        };
        ResponseListSnapshots: {
            encode(message: _126.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseListSnapshots;
            fromPartial(object: {
                snapshots?: {
                    height?: string | number | import("long").Long;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _126.ResponseListSnapshots;
            fromAmino(object: _126.ResponseListSnapshotsAmino): _126.ResponseListSnapshots;
            toAmino(message: _126.ResponseListSnapshots): _126.ResponseListSnapshotsAmino;
            fromAminoMsg(object: _126.ResponseListSnapshotsAminoMsg): _126.ResponseListSnapshots;
            fromProtoMsg(message: _126.ResponseListSnapshotsProtoMsg): _126.ResponseListSnapshots;
            toProto(message: _126.ResponseListSnapshots): Uint8Array;
            toProtoMsg(message: _126.ResponseListSnapshots): _126.ResponseListSnapshotsProtoMsg;
        };
        ResponseOfferSnapshot: {
            encode(message: _126.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseOfferSnapshot;
            fromPartial(object: {
                result?: _126.ResponseOfferSnapshot_Result;
            }): _126.ResponseOfferSnapshot;
            fromAmino(object: _126.ResponseOfferSnapshotAmino): _126.ResponseOfferSnapshot;
            toAmino(message: _126.ResponseOfferSnapshot): _126.ResponseOfferSnapshotAmino;
            fromAminoMsg(object: _126.ResponseOfferSnapshotAminoMsg): _126.ResponseOfferSnapshot;
            fromProtoMsg(message: _126.ResponseOfferSnapshotProtoMsg): _126.ResponseOfferSnapshot;
            toProto(message: _126.ResponseOfferSnapshot): Uint8Array;
            toProtoMsg(message: _126.ResponseOfferSnapshot): _126.ResponseOfferSnapshotProtoMsg;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _126.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseLoadSnapshotChunk;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _126.ResponseLoadSnapshotChunk;
            fromAmino(object: _126.ResponseLoadSnapshotChunkAmino): _126.ResponseLoadSnapshotChunk;
            toAmino(message: _126.ResponseLoadSnapshotChunk): _126.ResponseLoadSnapshotChunkAmino;
            fromAminoMsg(object: _126.ResponseLoadSnapshotChunkAminoMsg): _126.ResponseLoadSnapshotChunk;
            fromProtoMsg(message: _126.ResponseLoadSnapshotChunkProtoMsg): _126.ResponseLoadSnapshotChunk;
            toProto(message: _126.ResponseLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _126.ResponseLoadSnapshotChunk): _126.ResponseLoadSnapshotChunkProtoMsg;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _126.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseApplySnapshotChunk;
            fromPartial(object: {
                result?: _126.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _126.ResponseApplySnapshotChunk;
            fromAmino(object: _126.ResponseApplySnapshotChunkAmino): _126.ResponseApplySnapshotChunk;
            toAmino(message: _126.ResponseApplySnapshotChunk): _126.ResponseApplySnapshotChunkAmino;
            fromAminoMsg(object: _126.ResponseApplySnapshotChunkAminoMsg): _126.ResponseApplySnapshotChunk;
            fromProtoMsg(message: _126.ResponseApplySnapshotChunkProtoMsg): _126.ResponseApplySnapshotChunk;
            toProto(message: _126.ResponseApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _126.ResponseApplySnapshotChunk): _126.ResponseApplySnapshotChunkProtoMsg;
        };
        ConsensusParams: {
            encode(message: _126.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long").Long;
                    maxGas?: string | number | import("long").Long;
                };
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long").Long;
                    maxAgeDuration?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    maxBytes?: string | number | import("long").Long;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string | number | import("long").Long;
                };
            }): _126.ConsensusParams;
            fromAmino(object: _126.ConsensusParamsAmino): _126.ConsensusParams;
            toAmino(message: _126.ConsensusParams): _126.ConsensusParamsAmino;
            fromAminoMsg(object: _126.ConsensusParamsAminoMsg): _126.ConsensusParams;
            fromProtoMsg(message: _126.ConsensusParamsProtoMsg): _126.ConsensusParams;
            toProto(message: _126.ConsensusParams): Uint8Array;
            toProtoMsg(message: _126.ConsensusParams): _126.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            encode(message: _126.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long").Long;
                maxGas?: string | number | import("long").Long;
            }): _126.BlockParams;
            fromAmino(object: _126.BlockParamsAmino): _126.BlockParams;
            toAmino(message: _126.BlockParams): _126.BlockParamsAmino;
            fromAminoMsg(object: _126.BlockParamsAminoMsg): _126.BlockParams;
            fromProtoMsg(message: _126.BlockParamsProtoMsg): _126.BlockParams;
            toProto(message: _126.BlockParams): Uint8Array;
            toProtoMsg(message: _126.BlockParams): _126.BlockParamsProtoMsg;
        };
        LastCommitInfo: {
            encode(message: _126.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.LastCommitInfo;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").Long;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _126.LastCommitInfo;
            fromAmino(object: _126.LastCommitInfoAmino): _126.LastCommitInfo;
            toAmino(message: _126.LastCommitInfo): _126.LastCommitInfoAmino;
            fromAminoMsg(object: _126.LastCommitInfoAminoMsg): _126.LastCommitInfo;
            fromProtoMsg(message: _126.LastCommitInfoProtoMsg): _126.LastCommitInfo;
            toProto(message: _126.LastCommitInfo): Uint8Array;
            toProtoMsg(message: _126.LastCommitInfo): _126.LastCommitInfoProtoMsg;
        };
        Event: {
            encode(message: _126.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Event;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _126.Event;
            fromAmino(object: _126.EventAmino): _126.Event;
            toAmino(message: _126.Event): _126.EventAmino;
            fromAminoMsg(object: _126.EventAminoMsg): _126.Event;
            fromProtoMsg(message: _126.EventProtoMsg): _126.Event;
            toProto(message: _126.Event): Uint8Array;
            toProtoMsg(message: _126.Event): _126.EventProtoMsg;
        };
        EventAttribute: {
            encode(message: _126.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventAttribute;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _126.EventAttribute;
            fromAmino(object: _126.EventAttributeAmino): _126.EventAttribute;
            toAmino(message: _126.EventAttribute): _126.EventAttributeAmino;
            fromAminoMsg(object: _126.EventAttributeAminoMsg): _126.EventAttribute;
            fromProtoMsg(message: _126.EventAttributeProtoMsg): _126.EventAttribute;
            toProto(message: _126.EventAttribute): Uint8Array;
            toProtoMsg(message: _126.EventAttribute): _126.EventAttributeProtoMsg;
        };
        TxResult: {
            encode(message: _126.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.TxResult;
            fromPartial(object: {
                height?: string | number | import("long").Long;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long").Long;
                    gasUsed?: string | number | import("long").Long;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _126.TxResult;
            fromAmino(object: _126.TxResultAmino): _126.TxResult;
            toAmino(message: _126.TxResult): _126.TxResultAmino;
            fromAminoMsg(object: _126.TxResultAminoMsg): _126.TxResult;
            fromProtoMsg(message: _126.TxResultProtoMsg): _126.TxResult;
            toProto(message: _126.TxResult): Uint8Array;
            toProtoMsg(message: _126.TxResult): _126.TxResultProtoMsg;
        };
        Validator: {
            encode(message: _126.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                power?: string | number | import("long").Long;
            }): _126.Validator;
            fromAmino(object: _126.ValidatorAmino): _126.Validator;
            toAmino(message: _126.Validator): _126.ValidatorAmino;
            fromAminoMsg(object: _126.ValidatorAminoMsg): _126.Validator;
            fromProtoMsg(message: _126.ValidatorProtoMsg): _126.Validator;
            toProto(message: _126.Validator): Uint8Array;
            toProtoMsg(message: _126.Validator): _126.ValidatorProtoMsg;
        };
        ValidatorUpdate: {
            encode(message: _126.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ValidatorUpdate;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: string | number | import("long").Long;
            }): _126.ValidatorUpdate;
            fromAmino(object: _126.ValidatorUpdateAmino): _126.ValidatorUpdate;
            toAmino(message: _126.ValidatorUpdate): _126.ValidatorUpdateAmino;
            fromAminoMsg(object: _126.ValidatorUpdateAminoMsg): _126.ValidatorUpdate;
            fromProtoMsg(message: _126.ValidatorUpdateProtoMsg): _126.ValidatorUpdate;
            toProto(message: _126.ValidatorUpdate): Uint8Array;
            toProtoMsg(message: _126.ValidatorUpdate): _126.ValidatorUpdateProtoMsg;
        };
        VoteInfo: {
            encode(message: _126.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.VoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").Long;
                };
                signedLastBlock?: boolean;
            }): _126.VoteInfo;
            fromAmino(object: _126.VoteInfoAmino): _126.VoteInfo;
            toAmino(message: _126.VoteInfo): _126.VoteInfoAmino;
            fromAminoMsg(object: _126.VoteInfoAminoMsg): _126.VoteInfo;
            fromProtoMsg(message: _126.VoteInfoProtoMsg): _126.VoteInfo;
            toProto(message: _126.VoteInfo): Uint8Array;
            toProtoMsg(message: _126.VoteInfo): _126.VoteInfoProtoMsg;
        };
        Evidence: {
            encode(message: _126.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Evidence;
            fromPartial(object: {
                type?: _126.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").Long;
                };
                height?: string | number | import("long").Long;
                time?: Date;
                totalVotingPower?: string | number | import("long").Long;
            }): _126.Evidence;
            fromAmino(object: _126.EvidenceAmino): _126.Evidence;
            toAmino(message: _126.Evidence): _126.EvidenceAmino;
            fromAminoMsg(object: _126.EvidenceAminoMsg): _126.Evidence;
            fromProtoMsg(message: _126.EvidenceProtoMsg): _126.Evidence;
            toProto(message: _126.Evidence): Uint8Array;
            toProtoMsg(message: _126.Evidence): _126.EvidenceProtoMsg;
        };
        Snapshot: {
            encode(message: _126.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Snapshot;
            fromPartial(object: {
                height?: string | number | import("long").Long;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _126.Snapshot;
            fromAmino(object: _126.SnapshotAmino): _126.Snapshot;
            toAmino(message: _126.Snapshot): _126.SnapshotAmino;
            fromAminoMsg(object: _126.SnapshotAminoMsg): _126.Snapshot;
            fromProtoMsg(message: _126.SnapshotProtoMsg): _126.Snapshot;
            toProto(message: _126.Snapshot): Uint8Array;
            toProtoMsg(message: _126.Snapshot): _126.SnapshotProtoMsg;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _128.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Proof;
            fromPartial(object: {
                total?: string | number | import("long").Long;
                index?: string | number | import("long").Long;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _128.Proof;
            fromAmino(object: _128.ProofAmino): _128.Proof;
            toAmino(message: _128.Proof): _128.ProofAmino;
            fromAminoMsg(object: _128.ProofAminoMsg): _128.Proof;
            fromProtoMsg(message: _128.ProofProtoMsg): _128.Proof;
            toProto(message: _128.Proof): Uint8Array;
            toProtoMsg(message: _128.Proof): _128.ProofProtoMsg;
        };
        ValueOp: {
            encode(message: _128.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ValueOp;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _128.ValueOp;
            fromAmino(object: _128.ValueOpAmino): _128.ValueOp;
            toAmino(message: _128.ValueOp): _128.ValueOpAmino;
            fromAminoMsg(object: _128.ValueOpAminoMsg): _128.ValueOp;
            fromProtoMsg(message: _128.ValueOpProtoMsg): _128.ValueOp;
            toProto(message: _128.ValueOp): Uint8Array;
            toProtoMsg(message: _128.ValueOp): _128.ValueOpProtoMsg;
        };
        DominoOp: {
            encode(message: _128.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.DominoOp;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _128.DominoOp;
            fromAmino(object: _128.DominoOpAmino): _128.DominoOp;
            toAmino(message: _128.DominoOp): _128.DominoOpAmino;
            fromAminoMsg(object: _128.DominoOpAminoMsg): _128.DominoOp;
            fromProtoMsg(message: _128.DominoOpProtoMsg): _128.DominoOp;
            toProto(message: _128.DominoOp): Uint8Array;
            toProtoMsg(message: _128.DominoOp): _128.DominoOpProtoMsg;
        };
        ProofOp: {
            encode(message: _128.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ProofOp;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _128.ProofOp;
            fromAmino(object: _128.ProofOpAmino): _128.ProofOp;
            toAmino(message: _128.ProofOp): _128.ProofOpAmino;
            fromAminoMsg(object: _128.ProofOpAminoMsg): _128.ProofOp;
            fromProtoMsg(message: _128.ProofOpProtoMsg): _128.ProofOp;
            toProto(message: _128.ProofOp): Uint8Array;
            toProtoMsg(message: _128.ProofOp): _128.ProofOpProtoMsg;
        };
        ProofOps: {
            encode(message: _128.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ProofOps;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _128.ProofOps;
            fromAmino(object: _128.ProofOpsAmino): _128.ProofOps;
            toAmino(message: _128.ProofOps): _128.ProofOpsAmino;
            fromAminoMsg(object: _128.ProofOpsAminoMsg): _128.ProofOps;
            fromProtoMsg(message: _128.ProofOpsProtoMsg): _128.ProofOps;
            toProto(message: _128.ProofOps): Uint8Array;
            toProtoMsg(message: _128.ProofOps): _128.ProofOpsProtoMsg;
        };
        PublicKey: {
            encode(message: _127.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.PublicKey;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _127.PublicKey;
            fromAmino(object: _127.PublicKeyAmino): _127.PublicKey;
            toAmino(message: _127.PublicKey): _127.PublicKeyAmino;
            fromAminoMsg(object: _127.PublicKeyAminoMsg): _127.PublicKey;
            fromProtoMsg(message: _127.PublicKeyProtoMsg): _127.PublicKey;
            toProto(message: _127.PublicKey): Uint8Array;
            toProtoMsg(message: _127.PublicKey): _127.PublicKeyProtoMsg;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _129.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.BitArray;
                fromPartial(object: {
                    bits?: string | number | import("long").Long;
                    elems?: (string | number | import("long").Long)[];
                }): _129.BitArray;
                fromAmino(object: _129.BitArrayAmino): _129.BitArray;
                toAmino(message: _129.BitArray): _129.BitArrayAmino;
                fromAminoMsg(object: _129.BitArrayAminoMsg): _129.BitArray;
                fromProtoMsg(message: _129.BitArrayProtoMsg): _129.BitArray;
                toProto(message: _129.BitArray): Uint8Array;
                toProtoMsg(message: _129.BitArray): _129.BitArrayProtoMsg;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _130.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ProtocolVersion;
            fromPartial(object: {
                p2p?: string | number | import("long").Long;
                block?: string | number | import("long").Long;
                app?: string | number | import("long").Long;
            }): _130.ProtocolVersion;
            fromAmino(object: _130.ProtocolVersionAmino): _130.ProtocolVersion;
            toAmino(message: _130.ProtocolVersion): _130.ProtocolVersionAmino;
            fromAminoMsg(object: _130.ProtocolVersionAminoMsg): _130.ProtocolVersion;
            fromProtoMsg(message: _130.ProtocolVersionProtoMsg): _130.ProtocolVersion;
            toProto(message: _130.ProtocolVersion): Uint8Array;
            toProtoMsg(message: _130.ProtocolVersion): _130.ProtocolVersionProtoMsg;
        };
        NodeInfo: {
            encode(message: _130.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.NodeInfo;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: string | number | import("long").Long;
                    block?: string | number | import("long").Long;
                    app?: string | number | import("long").Long;
                };
                nodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            }): _130.NodeInfo;
            fromAmino(object: _130.NodeInfoAmino): _130.NodeInfo;
            toAmino(message: _130.NodeInfo): _130.NodeInfoAmino;
            fromAminoMsg(object: _130.NodeInfoAminoMsg): _130.NodeInfo;
            fromProtoMsg(message: _130.NodeInfoProtoMsg): _130.NodeInfo;
            toProto(message: _130.NodeInfo): Uint8Array;
            toProtoMsg(message: _130.NodeInfo): _130.NodeInfoProtoMsg;
        };
        NodeInfoOther: {
            encode(message: _130.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.NodeInfoOther;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _130.NodeInfoOther;
            fromAmino(object: _130.NodeInfoOtherAmino): _130.NodeInfoOther;
            toAmino(message: _130.NodeInfoOther): _130.NodeInfoOtherAmino;
            fromAminoMsg(object: _130.NodeInfoOtherAminoMsg): _130.NodeInfoOther;
            fromProtoMsg(message: _130.NodeInfoOtherProtoMsg): _130.NodeInfoOther;
            toProto(message: _130.NodeInfoOther): Uint8Array;
            toProtoMsg(message: _130.NodeInfoOther): _130.NodeInfoOtherProtoMsg;
        };
        PeerInfo: {
            encode(message: _130.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PeerInfo;
            fromPartial(object: {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[];
                lastConnected?: Date;
            }): _130.PeerInfo;
            fromAmino(object: _130.PeerInfoAmino): _130.PeerInfo;
            toAmino(message: _130.PeerInfo): _130.PeerInfoAmino;
            fromAminoMsg(object: _130.PeerInfoAminoMsg): _130.PeerInfo;
            fromProtoMsg(message: _130.PeerInfoProtoMsg): _130.PeerInfo;
            toProto(message: _130.PeerInfo): Uint8Array;
            toProtoMsg(message: _130.PeerInfo): _130.PeerInfoProtoMsg;
        };
        PeerAddressInfo: {
            encode(message: _130.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PeerAddressInfo;
            fromPartial(object: {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            }): _130.PeerAddressInfo;
            fromAmino(object: _130.PeerAddressInfoAmino): _130.PeerAddressInfo;
            toAmino(message: _130.PeerAddressInfo): _130.PeerAddressInfoAmino;
            fromAminoMsg(object: _130.PeerAddressInfoAminoMsg): _130.PeerAddressInfo;
            fromProtoMsg(message: _130.PeerAddressInfoProtoMsg): _130.PeerAddressInfo;
            toProto(message: _130.PeerAddressInfo): Uint8Array;
            toProtoMsg(message: _130.PeerAddressInfo): _130.PeerAddressInfoProtoMsg;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _135.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ValidatorSet;
            fromPartial(object: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string | number | import("long").Long;
                    proposerPriority?: string | number | import("long").Long;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string | number | import("long").Long;
                    proposerPriority?: string | number | import("long").Long;
                };
                totalVotingPower?: string | number | import("long").Long;
            }): _135.ValidatorSet;
            fromAmino(object: _135.ValidatorSetAmino): _135.ValidatorSet;
            toAmino(message: _135.ValidatorSet): _135.ValidatorSetAmino;
            fromAminoMsg(object: _135.ValidatorSetAminoMsg): _135.ValidatorSet;
            fromProtoMsg(message: _135.ValidatorSetProtoMsg): _135.ValidatorSet;
            toProto(message: _135.ValidatorSet): Uint8Array;
            toProtoMsg(message: _135.ValidatorSet): _135.ValidatorSetProtoMsg;
        };
        Validator: {
            encode(message: _135.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long").Long;
                proposerPriority?: string | number | import("long").Long;
            }): _135.Validator;
            fromAmino(object: _135.ValidatorAmino): _135.Validator;
            toAmino(message: _135.Validator): _135.ValidatorAmino;
            fromAminoMsg(object: _135.ValidatorAminoMsg): _135.Validator;
            fromProtoMsg(message: _135.ValidatorProtoMsg): _135.Validator;
            toProto(message: _135.Validator): Uint8Array;
            toProtoMsg(message: _135.Validator): _135.ValidatorProtoMsg;
        };
        SimpleValidator: {
            encode(message: _135.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SimpleValidator;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long").Long;
            }): _135.SimpleValidator;
            fromAmino(object: _135.SimpleValidatorAmino): _135.SimpleValidator;
            toAmino(message: _135.SimpleValidator): _135.SimpleValidatorAmino;
            fromAminoMsg(object: _135.SimpleValidatorAminoMsg): _135.SimpleValidator;
            fromProtoMsg(message: _135.SimpleValidatorProtoMsg): _135.SimpleValidator;
            toProto(message: _135.SimpleValidator): Uint8Array;
            toProtoMsg(message: _135.SimpleValidator): _135.SimpleValidatorProtoMsg;
        };
        blockIDFlagFromJSON(object: any): _134.BlockIDFlag;
        blockIDFlagToJSON(object: _134.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _134.SignedMsgType;
        signedMsgTypeToJSON(object: _134.SignedMsgType): string;
        BlockIDFlag: typeof _134.BlockIDFlag;
        BlockIDFlagSDKType: typeof _134.BlockIDFlag;
        BlockIDFlagAmino: typeof _134.BlockIDFlag;
        SignedMsgType: typeof _134.SignedMsgType;
        SignedMsgTypeSDKType: typeof _134.SignedMsgType;
        SignedMsgTypeAmino: typeof _134.SignedMsgType;
        PartSetHeader: {
            encode(message: _134.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.PartSetHeader;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _134.PartSetHeader;
            fromAmino(object: _134.PartSetHeaderAmino): _134.PartSetHeader;
            toAmino(message: _134.PartSetHeader): _134.PartSetHeaderAmino;
            fromAminoMsg(object: _134.PartSetHeaderAminoMsg): _134.PartSetHeader;
            fromProtoMsg(message: _134.PartSetHeaderProtoMsg): _134.PartSetHeader;
            toProto(message: _134.PartSetHeader): Uint8Array;
            toProtoMsg(message: _134.PartSetHeader): _134.PartSetHeaderProtoMsg;
        };
        Part: {
            encode(message: _134.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Part;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _134.Part;
            fromAmino(object: _134.PartAmino): _134.Part;
            toAmino(message: _134.Part): _134.PartAmino;
            fromAminoMsg(object: _134.PartAminoMsg): _134.Part;
            fromProtoMsg(message: _134.PartProtoMsg): _134.Part;
            toProto(message: _134.Part): Uint8Array;
            toProtoMsg(message: _134.Part): _134.PartProtoMsg;
        };
        BlockID: {
            encode(message: _134.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.BlockID;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _134.BlockID;
            fromAmino(object: _134.BlockIDAmino): _134.BlockID;
            toAmino(message: _134.BlockID): _134.BlockIDAmino;
            fromAminoMsg(object: _134.BlockIDAminoMsg): _134.BlockID;
            fromProtoMsg(message: _134.BlockIDProtoMsg): _134.BlockID;
            toProto(message: _134.BlockID): Uint8Array;
            toProtoMsg(message: _134.BlockID): _134.BlockIDProtoMsg;
        };
        Header: {
            encode(message: _134.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Header;
            fromPartial(object: {
                version?: {
                    block?: string | number | import("long").Long;
                    app?: string | number | import("long").Long;
                };
                chainId?: string;
                height?: string | number | import("long").Long;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            }): _134.Header;
            fromAmino(object: _134.HeaderAmino): _134.Header;
            toAmino(message: _134.Header): _134.HeaderAmino;
            fromAminoMsg(object: _134.HeaderAminoMsg): _134.Header;
            fromProtoMsg(message: _134.HeaderProtoMsg): _134.Header;
            toProto(message: _134.Header): Uint8Array;
            toProtoMsg(message: _134.Header): _134.HeaderProtoMsg;
        };
        Data: {
            encode(message: _134.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Data;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _134.Data;
            fromAmino(object: _134.DataAmino): _134.Data;
            toAmino(message: _134.Data): _134.DataAmino;
            fromAminoMsg(object: _134.DataAminoMsg): _134.Data;
            fromProtoMsg(message: _134.DataProtoMsg): _134.Data;
            toProto(message: _134.Data): Uint8Array;
            toProtoMsg(message: _134.Data): _134.DataProtoMsg;
        };
        Vote: {
            encode(message: _134.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Vote;
            fromPartial(object: {
                type?: _134.SignedMsgType;
                height?: string | number | import("long").Long;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            }): _134.Vote;
            fromAmino(object: _134.VoteAmino): _134.Vote;
            toAmino(message: _134.Vote): _134.VoteAmino;
            fromAminoMsg(object: _134.VoteAminoMsg): _134.Vote;
            fromProtoMsg(message: _134.VoteProtoMsg): _134.Vote;
            toProto(message: _134.Vote): Uint8Array;
            toProtoMsg(message: _134.Vote): _134.VoteProtoMsg;
        };
        Commit: {
            encode(message: _134.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Commit;
            fromPartial(object: {
                height?: string | number | import("long").Long;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: _134.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _134.Commit;
            fromAmino(object: _134.CommitAmino): _134.Commit;
            toAmino(message: _134.Commit): _134.CommitAmino;
            fromAminoMsg(object: _134.CommitAminoMsg): _134.Commit;
            fromProtoMsg(message: _134.CommitProtoMsg): _134.Commit;
            toProto(message: _134.Commit): Uint8Array;
            toProtoMsg(message: _134.Commit): _134.CommitProtoMsg;
        };
        CommitSig: {
            encode(message: _134.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.CommitSig;
            fromPartial(object: {
                blockIdFlag?: _134.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _134.CommitSig;
            fromAmino(object: _134.CommitSigAmino): _134.CommitSig;
            toAmino(message: _134.CommitSig): _134.CommitSigAmino;
            fromAminoMsg(object: _134.CommitSigAminoMsg): _134.CommitSig;
            fromProtoMsg(message: _134.CommitSigProtoMsg): _134.CommitSig;
            toProto(message: _134.CommitSig): Uint8Array;
            toProtoMsg(message: _134.CommitSig): _134.CommitSigProtoMsg;
        };
        Proposal: {
            encode(message: _134.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Proposal;
            fromPartial(object: {
                type?: _134.SignedMsgType;
                height?: string | number | import("long").Long;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _134.Proposal;
            fromAmino(object: _134.ProposalAmino): _134.Proposal;
            toAmino(message: _134.Proposal): _134.ProposalAmino;
            fromAminoMsg(object: _134.ProposalAminoMsg): _134.Proposal;
            fromProtoMsg(message: _134.ProposalProtoMsg): _134.Proposal;
            toProto(message: _134.Proposal): Uint8Array;
            toProtoMsg(message: _134.Proposal): _134.ProposalProtoMsg;
        };
        SignedHeader: {
            encode(message: _134.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.SignedHeader;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: string | number | import("long").Long;
                        app?: string | number | import("long").Long;
                    };
                    chainId?: string;
                    height?: string | number | import("long").Long;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: string | number | import("long").Long;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _134.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _134.SignedHeader;
            fromAmino(object: _134.SignedHeaderAmino): _134.SignedHeader;
            toAmino(message: _134.SignedHeader): _134.SignedHeaderAmino;
            fromAminoMsg(object: _134.SignedHeaderAminoMsg): _134.SignedHeader;
            fromProtoMsg(message: _134.SignedHeaderProtoMsg): _134.SignedHeader;
            toProto(message: _134.SignedHeader): Uint8Array;
            toProtoMsg(message: _134.SignedHeader): _134.SignedHeaderProtoMsg;
        };
        LightBlock: {
            encode(message: _134.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.LightBlock;
            fromPartial(object: {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: string | number | import("long").Long;
                            app?: string | number | import("long").Long;
                        };
                        chainId?: string;
                        height?: string | number | import("long").Long;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    commit?: {
                        height?: string | number | import("long").Long;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _134.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                };
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string | number | import("long").Long;
                        proposerPriority?: string | number | import("long").Long;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string | number | import("long").Long;
                        proposerPriority?: string | number | import("long").Long;
                    };
                    totalVotingPower?: string | number | import("long").Long;
                };
            }): _134.LightBlock;
            fromAmino(object: _134.LightBlockAmino): _134.LightBlock;
            toAmino(message: _134.LightBlock): _134.LightBlockAmino;
            fromAminoMsg(object: _134.LightBlockAminoMsg): _134.LightBlock;
            fromProtoMsg(message: _134.LightBlockProtoMsg): _134.LightBlock;
            toProto(message: _134.LightBlock): Uint8Array;
            toProtoMsg(message: _134.LightBlock): _134.LightBlockProtoMsg;
        };
        BlockMeta: {
            encode(message: _134.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.BlockMeta;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: string | number | import("long").Long;
                header?: {
                    version?: {
                        block?: string | number | import("long").Long;
                        app?: string | number | import("long").Long;
                    };
                    chainId?: string;
                    height?: string | number | import("long").Long;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                numTxs?: string | number | import("long").Long;
            }): _134.BlockMeta;
            fromAmino(object: _134.BlockMetaAmino): _134.BlockMeta;
            toAmino(message: _134.BlockMeta): _134.BlockMetaAmino;
            fromAminoMsg(object: _134.BlockMetaAminoMsg): _134.BlockMeta;
            fromProtoMsg(message: _134.BlockMetaProtoMsg): _134.BlockMeta;
            toProto(message: _134.BlockMeta): Uint8Array;
            toProtoMsg(message: _134.BlockMeta): _134.BlockMetaProtoMsg;
        };
        TxProof: {
            encode(message: _134.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.TxProof;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").Long;
                    index?: string | number | import("long").Long;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _134.TxProof;
            fromAmino(object: _134.TxProofAmino): _134.TxProof;
            toAmino(message: _134.TxProof): _134.TxProofAmino;
            fromAminoMsg(object: _134.TxProofAminoMsg): _134.TxProof;
            fromProtoMsg(message: _134.TxProofProtoMsg): _134.TxProof;
            toProto(message: _134.TxProof): Uint8Array;
            toProtoMsg(message: _134.TxProof): _134.TxProofProtoMsg;
        };
        ConsensusParams: {
            encode(message: _133.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long").Long;
                    maxGas?: string | number | import("long").Long;
                    timeIotaMs?: string | number | import("long").Long;
                };
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long").Long;
                    maxAgeDuration?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    maxBytes?: string | number | import("long").Long;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string | number | import("long").Long;
                };
            }): _133.ConsensusParams;
            fromAmino(object: _133.ConsensusParamsAmino): _133.ConsensusParams;
            toAmino(message: _133.ConsensusParams): _133.ConsensusParamsAmino;
            fromAminoMsg(object: _133.ConsensusParamsAminoMsg): _133.ConsensusParams;
            fromProtoMsg(message: _133.ConsensusParamsProtoMsg): _133.ConsensusParams;
            toProto(message: _133.ConsensusParams): Uint8Array;
            toProtoMsg(message: _133.ConsensusParams): _133.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            encode(message: _133.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long").Long;
                maxGas?: string | number | import("long").Long;
                timeIotaMs?: string | number | import("long").Long;
            }): _133.BlockParams;
            fromAmino(object: _133.BlockParamsAmino): _133.BlockParams;
            toAmino(message: _133.BlockParams): _133.BlockParamsAmino;
            fromAminoMsg(object: _133.BlockParamsAminoMsg): _133.BlockParams;
            fromProtoMsg(message: _133.BlockParamsProtoMsg): _133.BlockParams;
            toProto(message: _133.BlockParams): Uint8Array;
            toProtoMsg(message: _133.BlockParams): _133.BlockParamsProtoMsg;
        };
        EvidenceParams: {
            encode(message: _133.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.EvidenceParams;
            fromPartial(object: {
                maxAgeNumBlocks?: string | number | import("long").Long;
                maxAgeDuration?: {
                    seconds?: string | number | import("long").Long;
                    nanos?: number;
                };
                maxBytes?: string | number | import("long").Long;
            }): _133.EvidenceParams;
            fromAmino(object: _133.EvidenceParamsAmino): _133.EvidenceParams;
            toAmino(message: _133.EvidenceParams): _133.EvidenceParamsAmino;
            fromAminoMsg(object: _133.EvidenceParamsAminoMsg): _133.EvidenceParams;
            fromProtoMsg(message: _133.EvidenceParamsProtoMsg): _133.EvidenceParams;
            toProto(message: _133.EvidenceParams): Uint8Array;
            toProtoMsg(message: _133.EvidenceParams): _133.EvidenceParamsProtoMsg;
        };
        ValidatorParams: {
            encode(message: _133.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ValidatorParams;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _133.ValidatorParams;
            fromAmino(object: _133.ValidatorParamsAmino): _133.ValidatorParams;
            toAmino(message: _133.ValidatorParams): _133.ValidatorParamsAmino;
            fromAminoMsg(object: _133.ValidatorParamsAminoMsg): _133.ValidatorParams;
            fromProtoMsg(message: _133.ValidatorParamsProtoMsg): _133.ValidatorParams;
            toProto(message: _133.ValidatorParams): Uint8Array;
            toProtoMsg(message: _133.ValidatorParams): _133.ValidatorParamsProtoMsg;
        };
        VersionParams: {
            encode(message: _133.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.VersionParams;
            fromPartial(object: {
                appVersion?: string | number | import("long").Long;
            }): _133.VersionParams;
            fromAmino(object: _133.VersionParamsAmino): _133.VersionParams;
            toAmino(message: _133.VersionParams): _133.VersionParamsAmino;
            fromAminoMsg(object: _133.VersionParamsAminoMsg): _133.VersionParams;
            fromProtoMsg(message: _133.VersionParamsProtoMsg): _133.VersionParams;
            toProto(message: _133.VersionParams): Uint8Array;
            toProtoMsg(message: _133.VersionParams): _133.VersionParamsProtoMsg;
        };
        HashedParams: {
            encode(message: _133.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.HashedParams;
            fromPartial(object: {
                blockMaxBytes?: string | number | import("long").Long;
                blockMaxGas?: string | number | import("long").Long;
            }): _133.HashedParams;
            fromAmino(object: _133.HashedParamsAmino): _133.HashedParams;
            toAmino(message: _133.HashedParams): _133.HashedParamsAmino;
            fromAminoMsg(object: _133.HashedParamsAminoMsg): _133.HashedParams;
            fromProtoMsg(message: _133.HashedParamsProtoMsg): _133.HashedParams;
            toProto(message: _133.HashedParams): Uint8Array;
            toProtoMsg(message: _133.HashedParams): _133.HashedParamsProtoMsg;
        };
        Evidence: {
            encode(message: _132.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Evidence;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _134.SignedMsgType;
                        height?: string | number | import("long").Long;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _134.SignedMsgType;
                        height?: string | number | import("long").Long;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: string | number | import("long").Long;
                    validatorPower?: string | number | import("long").Long;
                    timestamp?: Date;
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long;
                                    app?: string | number | import("long").Long;
                                };
                                chainId?: string;
                                height?: string | number | import("long").Long;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: string | number | import("long").Long;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _134.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").Long;
                                proposerPriority?: string | number | import("long").Long;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").Long;
                                proposerPriority?: string | number | import("long").Long;
                            };
                            totalVotingPower?: string | number | import("long").Long;
                        };
                    };
                    commonHeight?: string | number | import("long").Long;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string | number | import("long").Long;
                        proposerPriority?: string | number | import("long").Long;
                    }[];
                    totalVotingPower?: string | number | import("long").Long;
                    timestamp?: Date;
                };
            }): _132.Evidence;
            fromAmino(object: _132.EvidenceAmino): _132.Evidence;
            toAmino(message: _132.Evidence): _132.EvidenceAmino;
            fromAminoMsg(object: _132.EvidenceAminoMsg): _132.Evidence;
            fromProtoMsg(message: _132.EvidenceProtoMsg): _132.Evidence;
            toProto(message: _132.Evidence): Uint8Array;
            toProtoMsg(message: _132.Evidence): _132.EvidenceProtoMsg;
        };
        DuplicateVoteEvidence: {
            encode(message: _132.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.DuplicateVoteEvidence;
            fromPartial(object: {
                voteA?: {
                    type?: _134.SignedMsgType;
                    height?: string | number | import("long").Long;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                voteB?: {
                    type?: _134.SignedMsgType;
                    height?: string | number | import("long").Long;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                totalVotingPower?: string | number | import("long").Long;
                validatorPower?: string | number | import("long").Long;
                timestamp?: Date;
            }): _132.DuplicateVoteEvidence;
            fromAmino(object: _132.DuplicateVoteEvidenceAmino): _132.DuplicateVoteEvidence;
            toAmino(message: _132.DuplicateVoteEvidence): _132.DuplicateVoteEvidenceAmino;
            fromAminoMsg(object: _132.DuplicateVoteEvidenceAminoMsg): _132.DuplicateVoteEvidence;
            fromProtoMsg(message: _132.DuplicateVoteEvidenceProtoMsg): _132.DuplicateVoteEvidence;
            toProto(message: _132.DuplicateVoteEvidence): Uint8Array;
            toProtoMsg(message: _132.DuplicateVoteEvidence): _132.DuplicateVoteEvidenceProtoMsg;
        };
        LightClientAttackEvidence: {
            encode(message: _132.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.LightClientAttackEvidence;
            fromPartial(object: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").Long;
                                app?: string | number | import("long").Long;
                            };
                            chainId?: string;
                            height?: string | number | import("long").Long;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: string | number | import("long").Long;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _134.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").Long;
                            proposerPriority?: string | number | import("long").Long;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").Long;
                            proposerPriority?: string | number | import("long").Long;
                        };
                        totalVotingPower?: string | number | import("long").Long;
                    };
                };
                commonHeight?: string | number | import("long").Long;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string | number | import("long").Long;
                    proposerPriority?: string | number | import("long").Long;
                }[];
                totalVotingPower?: string | number | import("long").Long;
                timestamp?: Date;
            }): _132.LightClientAttackEvidence;
            fromAmino(object: _132.LightClientAttackEvidenceAmino): _132.LightClientAttackEvidence;
            toAmino(message: _132.LightClientAttackEvidence): _132.LightClientAttackEvidenceAmino;
            fromAminoMsg(object: _132.LightClientAttackEvidenceAminoMsg): _132.LightClientAttackEvidence;
            fromProtoMsg(message: _132.LightClientAttackEvidenceProtoMsg): _132.LightClientAttackEvidence;
            toProto(message: _132.LightClientAttackEvidence): Uint8Array;
            toProtoMsg(message: _132.LightClientAttackEvidence): _132.LightClientAttackEvidenceProtoMsg;
        };
        EvidenceList: {
            encode(message: _132.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.EvidenceList;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _134.SignedMsgType;
                            height?: string | number | import("long").Long;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _134.SignedMsgType;
                            height?: string | number | import("long").Long;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: string | number | import("long").Long;
                        validatorPower?: string | number | import("long").Long;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | import("long").Long;
                                        app?: string | number | import("long").Long;
                                    };
                                    chainId?: string;
                                    height?: string | number | import("long").Long;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: string | number | import("long").Long;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _134.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").Long;
                                    proposerPriority?: string | number | import("long").Long;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").Long;
                                    proposerPriority?: string | number | import("long").Long;
                                };
                                totalVotingPower?: string | number | import("long").Long;
                            };
                        };
                        commonHeight?: string | number | import("long").Long;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").Long;
                            proposerPriority?: string | number | import("long").Long;
                        }[];
                        totalVotingPower?: string | number | import("long").Long;
                        timestamp?: Date;
                    };
                }[];
            }): _132.EvidenceList;
            fromAmino(object: _132.EvidenceListAmino): _132.EvidenceList;
            toAmino(message: _132.EvidenceList): _132.EvidenceListAmino;
            fromAminoMsg(object: _132.EvidenceListAminoMsg): _132.EvidenceList;
            fromProtoMsg(message: _132.EvidenceListProtoMsg): _132.EvidenceList;
            toProto(message: _132.EvidenceList): Uint8Array;
            toProtoMsg(message: _132.EvidenceList): _132.EvidenceListProtoMsg;
        };
        Block: {
            encode(message: _131.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Block;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: string | number | import("long").Long;
                        app?: string | number | import("long").Long;
                    };
                    chainId?: string;
                    height?: string | number | import("long").Long;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _134.SignedMsgType;
                                height?: string | number | import("long").Long;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _134.SignedMsgType;
                                height?: string | number | import("long").Long;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: string | number | import("long").Long;
                            validatorPower?: string | number | import("long").Long;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: string | number | import("long").Long;
                                            app?: string | number | import("long").Long;
                                        };
                                        chainId?: string;
                                        height?: string | number | import("long").Long;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: string | number | import("long").Long;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _134.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string | number | import("long").Long;
                                        proposerPriority?: string | number | import("long").Long;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string | number | import("long").Long;
                                        proposerPriority?: string | number | import("long").Long;
                                    };
                                    totalVotingPower?: string | number | import("long").Long;
                                };
                            };
                            commonHeight?: string | number | import("long").Long;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").Long;
                                proposerPriority?: string | number | import("long").Long;
                            }[];
                            totalVotingPower?: string | number | import("long").Long;
                            timestamp?: Date;
                        };
                    }[];
                };
                lastCommit?: {
                    height?: string | number | import("long").Long;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _134.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _131.Block;
            fromAmino(object: _131.BlockAmino): _131.Block;
            toAmino(message: _131.Block): _131.BlockAmino;
            fromAminoMsg(object: _131.BlockAminoMsg): _131.Block;
            fromProtoMsg(message: _131.BlockProtoMsg): _131.Block;
            toProto(message: _131.Block): Uint8Array;
            toProtoMsg(message: _131.Block): _131.BlockProtoMsg;
        };
    };
    const version: {
        App: {
            encode(message: _136.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.App;
            fromPartial(object: {
                protocol?: string | number | import("long").Long;
                software?: string;
            }): _136.App;
            fromAmino(object: _136.AppAmino): _136.App;
            toAmino(message: _136.App): _136.AppAmino;
            fromAminoMsg(object: _136.AppAminoMsg): _136.App;
            fromProtoMsg(message: _136.AppProtoMsg): _136.App;
            toProto(message: _136.App): Uint8Array;
            toProtoMsg(message: _136.App): _136.AppProtoMsg;
        };
        Consensus: {
            encode(message: _136.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Consensus;
            fromPartial(object: {
                block?: string | number | import("long").Long;
                app?: string | number | import("long").Long;
            }): _136.Consensus;
            fromAmino(object: _136.ConsensusAmino): _136.Consensus;
            toAmino(message: _136.Consensus): _136.ConsensusAmino;
            fromAminoMsg(object: _136.ConsensusAminoMsg): _136.Consensus;
            fromProtoMsg(message: _136.ConsensusProtoMsg): _136.Consensus;
            toProto(message: _136.Consensus): Uint8Array;
            toProtoMsg(message: _136.Consensus): _136.ConsensusProtoMsg;
        };
    };
}
