/// <reference types="long" />
import * as _104 from "./applications/transfer/v1/genesis";
import * as _105 from "./applications/transfer/v1/query";
import * as _106 from "./applications/transfer/v1/transfer";
import * as _107 from "./applications/transfer/v1/tx";
import * as _108 from "./applications/transfer/v2/packet";
import * as _109 from "./core/channel/v1/channel";
import * as _110 from "./core/channel/v1/genesis";
import * as _111 from "./core/channel/v1/query";
import * as _112 from "./core/channel/v1/tx";
import * as _113 from "./core/client/v1/client";
import * as _114 from "./core/client/v1/genesis";
import * as _115 from "./core/client/v1/query";
import * as _116 from "./core/client/v1/tx";
import * as _117 from "./core/commitment/v1/commitment";
import * as _118 from "./core/connection/v1/connection";
import * as _119 from "./core/connection/v1/genesis";
import * as _120 from "./core/connection/v1/query";
import * as _121 from "./core/connection/v1/tx";
import * as _122 from "./lightclients/localhost/v1/localhost";
import * as _123 from "./lightclients/solomachine/v1/solomachine";
import * as _124 from "./lightclients/solomachine/v2/solomachine";
import * as _125 from "./lightclients/tendermint/v1/tendermint";
import * as _246 from "./applications/transfer/v1/query.rpc.Query";
import * as _247 from "./core/channel/v1/query.rpc.Query";
import * as _248 from "./core/client/v1/query.rpc.Query";
import * as _249 from "./core/connection/v1/query.rpc.Query";
import * as _250 from "./applications/transfer/v1/tx.rpc.msg";
import * as _251 from "./core/channel/v1/tx.rpc.msg";
import * as _252 from "./core/client/v1/tx.rpc.msg";
import * as _253 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _250.MsgClientImpl;
                QueryClientImpl: typeof _246.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _105.QueryDenomTraceRequest): Promise<_105.QueryDenomTraceResponse>;
                    denomTraces(request?: _105.QueryDenomTracesRequest): Promise<_105.QueryDenomTracesResponse>;
                    params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _107.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _107.MsgTransfer): {
                            typeUrl: string;
                            value: _107.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _107.MsgTransfer): {
                            typeUrl: string;
                            value: _107.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _107.MsgTransfer) => _107.MsgTransferAmino;
                        fromAmino: (object: _107.MsgTransferAmino) => _107.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _107.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgTransfer;
                    fromPartial(object: {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        timeoutTimestamp?: string | number | import("long").Long;
                    }): _107.MsgTransfer;
                    fromAmino(object: _107.MsgTransferAmino): _107.MsgTransfer;
                    toAmino(message: _107.MsgTransfer): _107.MsgTransferAmino;
                    fromAminoMsg(object: _107.MsgTransferAminoMsg): _107.MsgTransfer;
                    toAminoMsg(message: _107.MsgTransfer): _107.MsgTransferAminoMsg;
                    fromProtoMsg(message: _107.MsgTransferProtoMsg): _107.MsgTransfer;
                    toProto(message: _107.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _107.MsgTransfer): _107.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    encode(_: _107.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgTransferResponse;
                    fromPartial(_: {}): _107.MsgTransferResponse;
                    fromAmino(_: _107.MsgTransferResponseAmino): _107.MsgTransferResponse;
                    toAmino(_: _107.MsgTransferResponse): _107.MsgTransferResponseAmino;
                    fromAminoMsg(object: _107.MsgTransferResponseAminoMsg): _107.MsgTransferResponse;
                    toAminoMsg(message: _107.MsgTransferResponse): _107.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _107.MsgTransferResponseProtoMsg): _107.MsgTransferResponse;
                    toProto(message: _107.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _107.MsgTransferResponse): _107.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    encode(message: _106.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.DenomTrace;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _106.DenomTrace;
                    fromAmino(object: _106.DenomTraceAmino): _106.DenomTrace;
                    toAmino(message: _106.DenomTrace): _106.DenomTraceAmino;
                    fromAminoMsg(object: _106.DenomTraceAminoMsg): _106.DenomTrace;
                    toAminoMsg(message: _106.DenomTrace): _106.DenomTraceAminoMsg;
                    fromProtoMsg(message: _106.DenomTraceProtoMsg): _106.DenomTrace;
                    toProto(message: _106.DenomTrace): Uint8Array;
                    toProtoMsg(message: _106.DenomTrace): _106.DenomTraceProtoMsg;
                };
                Params: {
                    encode(message: _106.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Params;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _106.Params;
                    fromAmino(object: _106.ParamsAmino): _106.Params;
                    toAmino(message: _106.Params): _106.ParamsAmino;
                    fromAminoMsg(object: _106.ParamsAminoMsg): _106.Params;
                    toAminoMsg(message: _106.Params): _106.ParamsAminoMsg;
                    fromProtoMsg(message: _106.ParamsProtoMsg): _106.Params;
                    toProto(message: _106.Params): Uint8Array;
                    toProtoMsg(message: _106.Params): _106.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    encode(message: _105.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryDenomTraceRequest;
                    fromPartial(object: {
                        hash?: string;
                    }): _105.QueryDenomTraceRequest;
                    fromAmino(object: _105.QueryDenomTraceRequestAmino): _105.QueryDenomTraceRequest;
                    toAmino(message: _105.QueryDenomTraceRequest): _105.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _105.QueryDenomTraceRequestAminoMsg): _105.QueryDenomTraceRequest;
                    toAminoMsg(message: _105.QueryDenomTraceRequest): _105.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomTraceRequestProtoMsg): _105.QueryDenomTraceRequest;
                    toProto(message: _105.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomTraceRequest): _105.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    encode(message: _105.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryDenomTraceResponse;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _105.QueryDenomTraceResponse;
                    fromAmino(object: _105.QueryDenomTraceResponseAmino): _105.QueryDenomTraceResponse;
                    toAmino(message: _105.QueryDenomTraceResponse): _105.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _105.QueryDenomTraceResponseAminoMsg): _105.QueryDenomTraceResponse;
                    toAminoMsg(message: _105.QueryDenomTraceResponse): _105.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomTraceResponseProtoMsg): _105.QueryDenomTraceResponse;
                    toProto(message: _105.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomTraceResponse): _105.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    encode(message: _105.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryDenomTracesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _105.QueryDenomTracesRequest;
                    fromAmino(object: _105.QueryDenomTracesRequestAmino): _105.QueryDenomTracesRequest;
                    toAmino(message: _105.QueryDenomTracesRequest): _105.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _105.QueryDenomTracesRequestAminoMsg): _105.QueryDenomTracesRequest;
                    toAminoMsg(message: _105.QueryDenomTracesRequest): _105.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomTracesRequestProtoMsg): _105.QueryDenomTracesRequest;
                    toProto(message: _105.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomTracesRequest): _105.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    encode(message: _105.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryDenomTracesResponse;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                    }): _105.QueryDenomTracesResponse;
                    fromAmino(object: _105.QueryDenomTracesResponseAmino): _105.QueryDenomTracesResponse;
                    toAmino(message: _105.QueryDenomTracesResponse): _105.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _105.QueryDenomTracesResponseAminoMsg): _105.QueryDenomTracesResponse;
                    toAminoMsg(message: _105.QueryDenomTracesResponse): _105.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomTracesResponseProtoMsg): _105.QueryDenomTracesResponse;
                    toProto(message: _105.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomTracesResponse): _105.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    encode(_: _105.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryParamsRequest;
                    fromPartial(_: {}): _105.QueryParamsRequest;
                    fromAmino(_: _105.QueryParamsRequestAmino): _105.QueryParamsRequest;
                    toAmino(_: _105.QueryParamsRequest): _105.QueryParamsRequestAmino;
                    fromAminoMsg(object: _105.QueryParamsRequestAminoMsg): _105.QueryParamsRequest;
                    toAminoMsg(message: _105.QueryParamsRequest): _105.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _105.QueryParamsRequestProtoMsg): _105.QueryParamsRequest;
                    toProto(message: _105.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _105.QueryParamsRequest): _105.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    encode(message: _105.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryParamsResponse;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _105.QueryParamsResponse;
                    fromAmino(object: _105.QueryParamsResponseAmino): _105.QueryParamsResponse;
                    toAmino(message: _105.QueryParamsResponse): _105.QueryParamsResponseAmino;
                    fromAminoMsg(object: _105.QueryParamsResponseAminoMsg): _105.QueryParamsResponse;
                    toAminoMsg(message: _105.QueryParamsResponse): _105.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _105.QueryParamsResponseProtoMsg): _105.QueryParamsResponse;
                    toProto(message: _105.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _105.QueryParamsResponse): _105.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _104.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GenesisState;
                    fromPartial(object: {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _104.GenesisState;
                    fromAmino(object: _104.GenesisStateAmino): _104.GenesisState;
                    toAmino(message: _104.GenesisState): _104.GenesisStateAmino;
                    fromAminoMsg(object: _104.GenesisStateAminoMsg): _104.GenesisState;
                    toAminoMsg(message: _104.GenesisState): _104.GenesisStateAminoMsg;
                    fromProtoMsg(message: _104.GenesisStateProtoMsg): _104.GenesisState;
                    toProto(message: _104.GenesisState): Uint8Array;
                    toProtoMsg(message: _104.GenesisState): _104.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _108.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.FungibleTokenPacketData;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _108.FungibleTokenPacketData;
                    fromAmino(object: _108.FungibleTokenPacketDataAmino): _108.FungibleTokenPacketData;
                    toAmino(message: _108.FungibleTokenPacketData): _108.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _108.FungibleTokenPacketDataAminoMsg): _108.FungibleTokenPacketData;
                    toAminoMsg(message: _108.FungibleTokenPacketData): _108.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _108.FungibleTokenPacketDataProtoMsg): _108.FungibleTokenPacketData;
                    toProto(message: _108.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _108.FungibleTokenPacketData): _108.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _251.MsgClientImpl;
                QueryClientImpl: typeof _247.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _111.QueryChannelRequest): Promise<_111.QueryChannelResponse>;
                    channels(request?: _111.QueryChannelsRequest): Promise<_111.QueryChannelsResponse>;
                    connectionChannels(request: _111.QueryConnectionChannelsRequest): Promise<_111.QueryConnectionChannelsResponse>;
                    channelClientState(request: _111.QueryChannelClientStateRequest): Promise<_111.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _111.QueryChannelConsensusStateRequest): Promise<_111.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _111.QueryPacketCommitmentRequest): Promise<_111.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _111.QueryPacketCommitmentsRequest): Promise<_111.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _111.QueryPacketReceiptRequest): Promise<_111.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _111.QueryPacketAcknowledgementRequest): Promise<_111.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _111.QueryPacketAcknowledgementsRequest): Promise<_111.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _111.QueryUnreceivedPacketsRequest): Promise<_111.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _111.QueryUnreceivedAcksRequest): Promise<_111.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _111.QueryNextSequenceReceiveRequest): Promise<_111.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _112.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _112.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _112.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _112.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _112.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _112.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _112.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _112.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _112.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _112.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _112.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _112.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _112.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _112.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _112.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _112.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _112.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _112.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _112.MsgRecvPacket): {
                            typeUrl: string;
                            value: _112.MsgRecvPacket;
                        };
                        timeout(value: _112.MsgTimeout): {
                            typeUrl: string;
                            value: _112.MsgTimeout;
                        };
                        timeoutOnClose(value: _112.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _112.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _112.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _112.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _112.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _112.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _112.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _112.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _112.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _112.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _112.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _112.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _112.MsgRecvPacket): {
                            typeUrl: string;
                            value: _112.MsgRecvPacket;
                        };
                        timeout(value: _112.MsgTimeout): {
                            typeUrl: string;
                            value: _112.MsgTimeout;
                        };
                        timeoutOnClose(value: _112.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _112.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _112.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _112.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _112.MsgChannelOpenInit) => _112.MsgChannelOpenInitAmino;
                        fromAmino: (object: _112.MsgChannelOpenInitAmino) => _112.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _112.MsgChannelOpenTry) => _112.MsgChannelOpenTryAmino;
                        fromAmino: (object: _112.MsgChannelOpenTryAmino) => _112.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _112.MsgChannelOpenAck) => _112.MsgChannelOpenAckAmino;
                        fromAmino: (object: _112.MsgChannelOpenAckAmino) => _112.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _112.MsgChannelOpenConfirm) => _112.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _112.MsgChannelOpenConfirmAmino) => _112.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _112.MsgChannelCloseInit) => _112.MsgChannelCloseInitAmino;
                        fromAmino: (object: _112.MsgChannelCloseInitAmino) => _112.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _112.MsgChannelCloseConfirm) => _112.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _112.MsgChannelCloseConfirmAmino) => _112.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _112.MsgRecvPacket) => _112.MsgRecvPacketAmino;
                        fromAmino: (object: _112.MsgRecvPacketAmino) => _112.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _112.MsgTimeout) => _112.MsgTimeoutAmino;
                        fromAmino: (object: _112.MsgTimeoutAmino) => _112.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _112.MsgTimeoutOnClose) => _112.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _112.MsgTimeoutOnCloseAmino) => _112.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _112.MsgAcknowledgement) => _112.MsgAcknowledgementAmino;
                        fromAmino: (object: _112.MsgAcknowledgementAmino) => _112.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _112.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgChannelOpenInit;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _109.State;
                            ordering?: _109.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _112.MsgChannelOpenInit;
                    fromAmino(object: _112.MsgChannelOpenInitAmino): _112.MsgChannelOpenInit;
                    toAmino(message: _112.MsgChannelOpenInit): _112.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenInitAminoMsg): _112.MsgChannelOpenInit;
                    toAminoMsg(message: _112.MsgChannelOpenInit): _112.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenInitProtoMsg): _112.MsgChannelOpenInit;
                    toProto(message: _112.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenInit): _112.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _112.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgChannelOpenInitResponse;
                    fromPartial(_: {}): _112.MsgChannelOpenInitResponse;
                    fromAmino(_: _112.MsgChannelOpenInitResponseAmino): _112.MsgChannelOpenInitResponse;
                    toAmino(_: _112.MsgChannelOpenInitResponse): _112.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenInitResponseAminoMsg): _112.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _112.MsgChannelOpenInitResponse): _112.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenInitResponseProtoMsg): _112.MsgChannelOpenInitResponse;
                    toProto(message: _112.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenInitResponse): _112.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    encode(message: _112.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgChannelOpenTry;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _109.State;
                            ordering?: _109.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _112.MsgChannelOpenTry;
                    fromAmino(object: _112.MsgChannelOpenTryAmino): _112.MsgChannelOpenTry;
                    toAmino(message: _112.MsgChannelOpenTry): _112.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenTryAminoMsg): _112.MsgChannelOpenTry;
                    toAminoMsg(message: _112.MsgChannelOpenTry): _112.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenTryProtoMsg): _112.MsgChannelOpenTry;
                    toProto(message: _112.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenTry): _112.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _112.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgChannelOpenTryResponse;
                    fromPartial(_: {}): _112.MsgChannelOpenTryResponse;
                    fromAmino(_: _112.MsgChannelOpenTryResponseAmino): _112.MsgChannelOpenTryResponse;
                    toAmino(_: _112.MsgChannelOpenTryResponse): _112.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenTryResponseAminoMsg): _112.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _112.MsgChannelOpenTryResponse): _112.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenTryResponseProtoMsg): _112.MsgChannelOpenTryResponse;
                    toProto(message: _112.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenTryResponse): _112.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    encode(message: _112.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgChannelOpenAck;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _112.MsgChannelOpenAck;
                    fromAmino(object: _112.MsgChannelOpenAckAmino): _112.MsgChannelOpenAck;
                    toAmino(message: _112.MsgChannelOpenAck): _112.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenAckAminoMsg): _112.MsgChannelOpenAck;
                    toAminoMsg(message: _112.MsgChannelOpenAck): _112.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenAckProtoMsg): _112.MsgChannelOpenAck;
                    toProto(message: _112.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenAck): _112.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _112.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgChannelOpenAckResponse;
                    fromPartial(_: {}): _112.MsgChannelOpenAckResponse;
                    fromAmino(_: _112.MsgChannelOpenAckResponseAmino): _112.MsgChannelOpenAckResponse;
                    toAmino(_: _112.MsgChannelOpenAckResponse): _112.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenAckResponseAminoMsg): _112.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _112.MsgChannelOpenAckResponse): _112.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenAckResponseProtoMsg): _112.MsgChannelOpenAckResponse;
                    toProto(message: _112.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenAckResponse): _112.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _112.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgChannelOpenConfirm;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _112.MsgChannelOpenConfirm;
                    fromAmino(object: _112.MsgChannelOpenConfirmAmino): _112.MsgChannelOpenConfirm;
                    toAmino(message: _112.MsgChannelOpenConfirm): _112.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenConfirmAminoMsg): _112.MsgChannelOpenConfirm;
                    toAminoMsg(message: _112.MsgChannelOpenConfirm): _112.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenConfirmProtoMsg): _112.MsgChannelOpenConfirm;
                    toProto(message: _112.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenConfirm): _112.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _112.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgChannelOpenConfirmResponse;
                    fromPartial(_: {}): _112.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _112.MsgChannelOpenConfirmResponseAmino): _112.MsgChannelOpenConfirmResponse;
                    toAmino(_: _112.MsgChannelOpenConfirmResponse): _112.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenConfirmResponseAminoMsg): _112.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _112.MsgChannelOpenConfirmResponse): _112.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenConfirmResponseProtoMsg): _112.MsgChannelOpenConfirmResponse;
                    toProto(message: _112.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenConfirmResponse): _112.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    encode(message: _112.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgChannelCloseInit;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _112.MsgChannelCloseInit;
                    fromAmino(object: _112.MsgChannelCloseInitAmino): _112.MsgChannelCloseInit;
                    toAmino(message: _112.MsgChannelCloseInit): _112.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _112.MsgChannelCloseInitAminoMsg): _112.MsgChannelCloseInit;
                    toAminoMsg(message: _112.MsgChannelCloseInit): _112.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelCloseInitProtoMsg): _112.MsgChannelCloseInit;
                    toProto(message: _112.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelCloseInit): _112.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _112.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgChannelCloseInitResponse;
                    fromPartial(_: {}): _112.MsgChannelCloseInitResponse;
                    fromAmino(_: _112.MsgChannelCloseInitResponseAmino): _112.MsgChannelCloseInitResponse;
                    toAmino(_: _112.MsgChannelCloseInitResponse): _112.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _112.MsgChannelCloseInitResponseAminoMsg): _112.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _112.MsgChannelCloseInitResponse): _112.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelCloseInitResponseProtoMsg): _112.MsgChannelCloseInitResponse;
                    toProto(message: _112.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelCloseInitResponse): _112.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _112.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgChannelCloseConfirm;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _112.MsgChannelCloseConfirm;
                    fromAmino(object: _112.MsgChannelCloseConfirmAmino): _112.MsgChannelCloseConfirm;
                    toAmino(message: _112.MsgChannelCloseConfirm): _112.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _112.MsgChannelCloseConfirmAminoMsg): _112.MsgChannelCloseConfirm;
                    toAminoMsg(message: _112.MsgChannelCloseConfirm): _112.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelCloseConfirmProtoMsg): _112.MsgChannelCloseConfirm;
                    toProto(message: _112.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelCloseConfirm): _112.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _112.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgChannelCloseConfirmResponse;
                    fromPartial(_: {}): _112.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _112.MsgChannelCloseConfirmResponseAmino): _112.MsgChannelCloseConfirmResponse;
                    toAmino(_: _112.MsgChannelCloseConfirmResponse): _112.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _112.MsgChannelCloseConfirmResponseAminoMsg): _112.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _112.MsgChannelCloseConfirmResponse): _112.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelCloseConfirmResponseProtoMsg): _112.MsgChannelCloseConfirmResponse;
                    toProto(message: _112.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelCloseConfirmResponse): _112.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    encode(message: _112.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgRecvPacket;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").Long;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            timeoutTimestamp?: string | number | import("long").Long;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _112.MsgRecvPacket;
                    fromAmino(object: _112.MsgRecvPacketAmino): _112.MsgRecvPacket;
                    toAmino(message: _112.MsgRecvPacket): _112.MsgRecvPacketAmino;
                    fromAminoMsg(object: _112.MsgRecvPacketAminoMsg): _112.MsgRecvPacket;
                    toAminoMsg(message: _112.MsgRecvPacket): _112.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _112.MsgRecvPacketProtoMsg): _112.MsgRecvPacket;
                    toProto(message: _112.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _112.MsgRecvPacket): _112.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    encode(_: _112.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgRecvPacketResponse;
                    fromPartial(_: {}): _112.MsgRecvPacketResponse;
                    fromAmino(_: _112.MsgRecvPacketResponseAmino): _112.MsgRecvPacketResponse;
                    toAmino(_: _112.MsgRecvPacketResponse): _112.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _112.MsgRecvPacketResponseAminoMsg): _112.MsgRecvPacketResponse;
                    toAminoMsg(message: _112.MsgRecvPacketResponse): _112.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgRecvPacketResponseProtoMsg): _112.MsgRecvPacketResponse;
                    toProto(message: _112.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgRecvPacketResponse): _112.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    encode(message: _112.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgTimeout;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").Long;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            timeoutTimestamp?: string | number | import("long").Long;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        nextSequenceRecv?: string | number | import("long").Long;
                        signer?: string;
                    }): _112.MsgTimeout;
                    fromAmino(object: _112.MsgTimeoutAmino): _112.MsgTimeout;
                    toAmino(message: _112.MsgTimeout): _112.MsgTimeoutAmino;
                    fromAminoMsg(object: _112.MsgTimeoutAminoMsg): _112.MsgTimeout;
                    toAminoMsg(message: _112.MsgTimeout): _112.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _112.MsgTimeoutProtoMsg): _112.MsgTimeout;
                    toProto(message: _112.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _112.MsgTimeout): _112.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    encode(_: _112.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgTimeoutResponse;
                    fromPartial(_: {}): _112.MsgTimeoutResponse;
                    fromAmino(_: _112.MsgTimeoutResponseAmino): _112.MsgTimeoutResponse;
                    toAmino(_: _112.MsgTimeoutResponse): _112.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _112.MsgTimeoutResponseAminoMsg): _112.MsgTimeoutResponse;
                    toAminoMsg(message: _112.MsgTimeoutResponse): _112.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgTimeoutResponseProtoMsg): _112.MsgTimeoutResponse;
                    toProto(message: _112.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgTimeoutResponse): _112.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    encode(message: _112.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgTimeoutOnClose;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").Long;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            timeoutTimestamp?: string | number | import("long").Long;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        nextSequenceRecv?: string | number | import("long").Long;
                        signer?: string;
                    }): _112.MsgTimeoutOnClose;
                    fromAmino(object: _112.MsgTimeoutOnCloseAmino): _112.MsgTimeoutOnClose;
                    toAmino(message: _112.MsgTimeoutOnClose): _112.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _112.MsgTimeoutOnCloseAminoMsg): _112.MsgTimeoutOnClose;
                    toAminoMsg(message: _112.MsgTimeoutOnClose): _112.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _112.MsgTimeoutOnCloseProtoMsg): _112.MsgTimeoutOnClose;
                    toProto(message: _112.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _112.MsgTimeoutOnClose): _112.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _112.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgTimeoutOnCloseResponse;
                    fromPartial(_: {}): _112.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _112.MsgTimeoutOnCloseResponseAmino): _112.MsgTimeoutOnCloseResponse;
                    toAmino(_: _112.MsgTimeoutOnCloseResponse): _112.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _112.MsgTimeoutOnCloseResponseAminoMsg): _112.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _112.MsgTimeoutOnCloseResponse): _112.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgTimeoutOnCloseResponseProtoMsg): _112.MsgTimeoutOnCloseResponse;
                    toProto(message: _112.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgTimeoutOnCloseResponse): _112.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    encode(message: _112.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgAcknowledgement;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").Long;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            timeoutTimestamp?: string | number | import("long").Long;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _112.MsgAcknowledgement;
                    fromAmino(object: _112.MsgAcknowledgementAmino): _112.MsgAcknowledgement;
                    toAmino(message: _112.MsgAcknowledgement): _112.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _112.MsgAcknowledgementAminoMsg): _112.MsgAcknowledgement;
                    toAminoMsg(message: _112.MsgAcknowledgement): _112.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _112.MsgAcknowledgementProtoMsg): _112.MsgAcknowledgement;
                    toProto(message: _112.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _112.MsgAcknowledgement): _112.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _112.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgAcknowledgementResponse;
                    fromPartial(_: {}): _112.MsgAcknowledgementResponse;
                    fromAmino(_: _112.MsgAcknowledgementResponseAmino): _112.MsgAcknowledgementResponse;
                    toAmino(_: _112.MsgAcknowledgementResponse): _112.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _112.MsgAcknowledgementResponseAminoMsg): _112.MsgAcknowledgementResponse;
                    toAminoMsg(message: _112.MsgAcknowledgementResponse): _112.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgAcknowledgementResponseProtoMsg): _112.MsgAcknowledgementResponse;
                    toProto(message: _112.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgAcknowledgementResponse): _112.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    encode(message: _111.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryChannelRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _111.QueryChannelRequest;
                    fromAmino(object: _111.QueryChannelRequestAmino): _111.QueryChannelRequest;
                    toAmino(message: _111.QueryChannelRequest): _111.QueryChannelRequestAmino;
                    fromAminoMsg(object: _111.QueryChannelRequestAminoMsg): _111.QueryChannelRequest;
                    toAminoMsg(message: _111.QueryChannelRequest): _111.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelRequestProtoMsg): _111.QueryChannelRequest;
                    toProto(message: _111.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelRequest): _111.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    encode(message: _111.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryChannelResponse;
                    fromPartial(object: {
                        channel?: {
                            state?: _109.State;
                            ordering?: _109.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _111.QueryChannelResponse;
                    fromAmino(object: _111.QueryChannelResponseAmino): _111.QueryChannelResponse;
                    toAmino(message: _111.QueryChannelResponse): _111.QueryChannelResponseAmino;
                    fromAminoMsg(object: _111.QueryChannelResponseAminoMsg): _111.QueryChannelResponse;
                    toAminoMsg(message: _111.QueryChannelResponse): _111.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelResponseProtoMsg): _111.QueryChannelResponse;
                    toProto(message: _111.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelResponse): _111.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    encode(message: _111.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryChannelsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _111.QueryChannelsRequest;
                    fromAmino(object: _111.QueryChannelsRequestAmino): _111.QueryChannelsRequest;
                    toAmino(message: _111.QueryChannelsRequest): _111.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _111.QueryChannelsRequestAminoMsg): _111.QueryChannelsRequest;
                    toAminoMsg(message: _111.QueryChannelsRequest): _111.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelsRequestProtoMsg): _111.QueryChannelsRequest;
                    toProto(message: _111.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelsRequest): _111.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    encode(message: _111.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryChannelsResponse;
                    fromPartial(object: {
                        channels?: {
                            state?: _109.State;
                            ordering?: _109.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _111.QueryChannelsResponse;
                    fromAmino(object: _111.QueryChannelsResponseAmino): _111.QueryChannelsResponse;
                    toAmino(message: _111.QueryChannelsResponse): _111.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _111.QueryChannelsResponseAminoMsg): _111.QueryChannelsResponse;
                    toAminoMsg(message: _111.QueryChannelsResponse): _111.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelsResponseProtoMsg): _111.QueryChannelsResponse;
                    toProto(message: _111.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelsResponse): _111.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _111.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryConnectionChannelsRequest;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _111.QueryConnectionChannelsRequest;
                    fromAmino(object: _111.QueryConnectionChannelsRequestAmino): _111.QueryConnectionChannelsRequest;
                    toAmino(message: _111.QueryConnectionChannelsRequest): _111.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _111.QueryConnectionChannelsRequestAminoMsg): _111.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _111.QueryConnectionChannelsRequest): _111.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryConnectionChannelsRequestProtoMsg): _111.QueryConnectionChannelsRequest;
                    toProto(message: _111.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryConnectionChannelsRequest): _111.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _111.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryConnectionChannelsResponse;
                    fromPartial(object: {
                        channels?: {
                            state?: _109.State;
                            ordering?: _109.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _111.QueryConnectionChannelsResponse;
                    fromAmino(object: _111.QueryConnectionChannelsResponseAmino): _111.QueryConnectionChannelsResponse;
                    toAmino(message: _111.QueryConnectionChannelsResponse): _111.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _111.QueryConnectionChannelsResponseAminoMsg): _111.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _111.QueryConnectionChannelsResponse): _111.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryConnectionChannelsResponseProtoMsg): _111.QueryConnectionChannelsResponse;
                    toProto(message: _111.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryConnectionChannelsResponse): _111.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _111.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryChannelClientStateRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _111.QueryChannelClientStateRequest;
                    fromAmino(object: _111.QueryChannelClientStateRequestAmino): _111.QueryChannelClientStateRequest;
                    toAmino(message: _111.QueryChannelClientStateRequest): _111.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _111.QueryChannelClientStateRequestAminoMsg): _111.QueryChannelClientStateRequest;
                    toAminoMsg(message: _111.QueryChannelClientStateRequest): _111.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelClientStateRequestProtoMsg): _111.QueryChannelClientStateRequest;
                    toProto(message: _111.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelClientStateRequest): _111.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _111.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryChannelClientStateResponse;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _111.QueryChannelClientStateResponse;
                    fromAmino(object: _111.QueryChannelClientStateResponseAmino): _111.QueryChannelClientStateResponse;
                    toAmino(message: _111.QueryChannelClientStateResponse): _111.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _111.QueryChannelClientStateResponseAminoMsg): _111.QueryChannelClientStateResponse;
                    toAminoMsg(message: _111.QueryChannelClientStateResponse): _111.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelClientStateResponseProtoMsg): _111.QueryChannelClientStateResponse;
                    toProto(message: _111.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelClientStateResponse): _111.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _111.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryChannelConsensusStateRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: string | number | import("long").Long;
                        revisionHeight?: string | number | import("long").Long;
                    }): _111.QueryChannelConsensusStateRequest;
                    fromAmino(object: _111.QueryChannelConsensusStateRequestAmino): _111.QueryChannelConsensusStateRequest;
                    toAmino(message: _111.QueryChannelConsensusStateRequest): _111.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _111.QueryChannelConsensusStateRequestAminoMsg): _111.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _111.QueryChannelConsensusStateRequest): _111.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelConsensusStateRequestProtoMsg): _111.QueryChannelConsensusStateRequest;
                    toProto(message: _111.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelConsensusStateRequest): _111.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _111.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryChannelConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _111.QueryChannelConsensusStateResponse;
                    fromAmino(object: _111.QueryChannelConsensusStateResponseAmino): _111.QueryChannelConsensusStateResponse;
                    toAmino(message: _111.QueryChannelConsensusStateResponse): _111.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _111.QueryChannelConsensusStateResponseAminoMsg): _111.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _111.QueryChannelConsensusStateResponse): _111.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelConsensusStateResponseProtoMsg): _111.QueryChannelConsensusStateResponse;
                    toProto(message: _111.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelConsensusStateResponse): _111.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _111.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryPacketCommitmentRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").Long;
                    }): _111.QueryPacketCommitmentRequest;
                    fromAmino(object: _111.QueryPacketCommitmentRequestAmino): _111.QueryPacketCommitmentRequest;
                    toAmino(message: _111.QueryPacketCommitmentRequest): _111.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _111.QueryPacketCommitmentRequestAminoMsg): _111.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _111.QueryPacketCommitmentRequest): _111.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketCommitmentRequestProtoMsg): _111.QueryPacketCommitmentRequest;
                    toProto(message: _111.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketCommitmentRequest): _111.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _111.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryPacketCommitmentResponse;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _111.QueryPacketCommitmentResponse;
                    fromAmino(object: _111.QueryPacketCommitmentResponseAmino): _111.QueryPacketCommitmentResponse;
                    toAmino(message: _111.QueryPacketCommitmentResponse): _111.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _111.QueryPacketCommitmentResponseAminoMsg): _111.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _111.QueryPacketCommitmentResponse): _111.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketCommitmentResponseProtoMsg): _111.QueryPacketCommitmentResponse;
                    toProto(message: _111.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketCommitmentResponse): _111.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _111.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryPacketCommitmentsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _111.QueryPacketCommitmentsRequest;
                    fromAmino(object: _111.QueryPacketCommitmentsRequestAmino): _111.QueryPacketCommitmentsRequest;
                    toAmino(message: _111.QueryPacketCommitmentsRequest): _111.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _111.QueryPacketCommitmentsRequestAminoMsg): _111.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _111.QueryPacketCommitmentsRequest): _111.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketCommitmentsRequestProtoMsg): _111.QueryPacketCommitmentsRequest;
                    toProto(message: _111.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketCommitmentsRequest): _111.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _111.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryPacketCommitmentsResponse;
                    fromPartial(object: {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _111.QueryPacketCommitmentsResponse;
                    fromAmino(object: _111.QueryPacketCommitmentsResponseAmino): _111.QueryPacketCommitmentsResponse;
                    toAmino(message: _111.QueryPacketCommitmentsResponse): _111.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _111.QueryPacketCommitmentsResponseAminoMsg): _111.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _111.QueryPacketCommitmentsResponse): _111.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketCommitmentsResponseProtoMsg): _111.QueryPacketCommitmentsResponse;
                    toProto(message: _111.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketCommitmentsResponse): _111.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _111.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryPacketReceiptRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").Long;
                    }): _111.QueryPacketReceiptRequest;
                    fromAmino(object: _111.QueryPacketReceiptRequestAmino): _111.QueryPacketReceiptRequest;
                    toAmino(message: _111.QueryPacketReceiptRequest): _111.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _111.QueryPacketReceiptRequestAminoMsg): _111.QueryPacketReceiptRequest;
                    toAminoMsg(message: _111.QueryPacketReceiptRequest): _111.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketReceiptRequestProtoMsg): _111.QueryPacketReceiptRequest;
                    toProto(message: _111.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketReceiptRequest): _111.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _111.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryPacketReceiptResponse;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _111.QueryPacketReceiptResponse;
                    fromAmino(object: _111.QueryPacketReceiptResponseAmino): _111.QueryPacketReceiptResponse;
                    toAmino(message: _111.QueryPacketReceiptResponse): _111.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _111.QueryPacketReceiptResponseAminoMsg): _111.QueryPacketReceiptResponse;
                    toAminoMsg(message: _111.QueryPacketReceiptResponse): _111.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketReceiptResponseProtoMsg): _111.QueryPacketReceiptResponse;
                    toProto(message: _111.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketReceiptResponse): _111.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _111.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryPacketAcknowledgementRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").Long;
                    }): _111.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _111.QueryPacketAcknowledgementRequestAmino): _111.QueryPacketAcknowledgementRequest;
                    toAmino(message: _111.QueryPacketAcknowledgementRequest): _111.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _111.QueryPacketAcknowledgementRequestAminoMsg): _111.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _111.QueryPacketAcknowledgementRequest): _111.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketAcknowledgementRequestProtoMsg): _111.QueryPacketAcknowledgementRequest;
                    toProto(message: _111.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketAcknowledgementRequest): _111.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _111.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryPacketAcknowledgementResponse;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _111.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _111.QueryPacketAcknowledgementResponseAmino): _111.QueryPacketAcknowledgementResponse;
                    toAmino(message: _111.QueryPacketAcknowledgementResponse): _111.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _111.QueryPacketAcknowledgementResponseAminoMsg): _111.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _111.QueryPacketAcknowledgementResponse): _111.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketAcknowledgementResponseProtoMsg): _111.QueryPacketAcknowledgementResponse;
                    toProto(message: _111.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketAcknowledgementResponse): _111.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _111.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: (string | number | import("long").Long)[];
                    }): _111.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _111.QueryPacketAcknowledgementsRequestAmino): _111.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _111.QueryPacketAcknowledgementsRequest): _111.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _111.QueryPacketAcknowledgementsRequestAminoMsg): _111.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _111.QueryPacketAcknowledgementsRequest): _111.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketAcknowledgementsRequestProtoMsg): _111.QueryPacketAcknowledgementsRequest;
                    toProto(message: _111.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketAcknowledgementsRequest): _111.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _111.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _111.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _111.QueryPacketAcknowledgementsResponseAmino): _111.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _111.QueryPacketAcknowledgementsResponse): _111.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _111.QueryPacketAcknowledgementsResponseAminoMsg): _111.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _111.QueryPacketAcknowledgementsResponse): _111.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketAcknowledgementsResponseProtoMsg): _111.QueryPacketAcknowledgementsResponse;
                    toProto(message: _111.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketAcknowledgementsResponse): _111.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _111.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryUnreceivedPacketsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: (string | number | import("long").Long)[];
                    }): _111.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _111.QueryUnreceivedPacketsRequestAmino): _111.QueryUnreceivedPacketsRequest;
                    toAmino(message: _111.QueryUnreceivedPacketsRequest): _111.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _111.QueryUnreceivedPacketsRequestAminoMsg): _111.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _111.QueryUnreceivedPacketsRequest): _111.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryUnreceivedPacketsRequestProtoMsg): _111.QueryUnreceivedPacketsRequest;
                    toProto(message: _111.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryUnreceivedPacketsRequest): _111.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _111.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryUnreceivedPacketsResponse;
                    fromPartial(object: {
                        sequences?: (string | number | import("long").Long)[];
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _111.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _111.QueryUnreceivedPacketsResponseAmino): _111.QueryUnreceivedPacketsResponse;
                    toAmino(message: _111.QueryUnreceivedPacketsResponse): _111.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _111.QueryUnreceivedPacketsResponseAminoMsg): _111.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _111.QueryUnreceivedPacketsResponse): _111.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryUnreceivedPacketsResponseProtoMsg): _111.QueryUnreceivedPacketsResponse;
                    toProto(message: _111.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryUnreceivedPacketsResponse): _111.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _111.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryUnreceivedAcksRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: (string | number | import("long").Long)[];
                    }): _111.QueryUnreceivedAcksRequest;
                    fromAmino(object: _111.QueryUnreceivedAcksRequestAmino): _111.QueryUnreceivedAcksRequest;
                    toAmino(message: _111.QueryUnreceivedAcksRequest): _111.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _111.QueryUnreceivedAcksRequestAminoMsg): _111.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _111.QueryUnreceivedAcksRequest): _111.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryUnreceivedAcksRequestProtoMsg): _111.QueryUnreceivedAcksRequest;
                    toProto(message: _111.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryUnreceivedAcksRequest): _111.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _111.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryUnreceivedAcksResponse;
                    fromPartial(object: {
                        sequences?: (string | number | import("long").Long)[];
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _111.QueryUnreceivedAcksResponse;
                    fromAmino(object: _111.QueryUnreceivedAcksResponseAmino): _111.QueryUnreceivedAcksResponse;
                    toAmino(message: _111.QueryUnreceivedAcksResponse): _111.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _111.QueryUnreceivedAcksResponseAminoMsg): _111.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _111.QueryUnreceivedAcksResponse): _111.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryUnreceivedAcksResponseProtoMsg): _111.QueryUnreceivedAcksResponse;
                    toProto(message: _111.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryUnreceivedAcksResponse): _111.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _111.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryNextSequenceReceiveRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _111.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _111.QueryNextSequenceReceiveRequestAmino): _111.QueryNextSequenceReceiveRequest;
                    toAmino(message: _111.QueryNextSequenceReceiveRequest): _111.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _111.QueryNextSequenceReceiveRequestAminoMsg): _111.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _111.QueryNextSequenceReceiveRequest): _111.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryNextSequenceReceiveRequestProtoMsg): _111.QueryNextSequenceReceiveRequest;
                    toProto(message: _111.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryNextSequenceReceiveRequest): _111.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _111.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryNextSequenceReceiveResponse;
                    fromPartial(object: {
                        nextSequenceReceive?: string | number | import("long").Long;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _111.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _111.QueryNextSequenceReceiveResponseAmino): _111.QueryNextSequenceReceiveResponse;
                    toAmino(message: _111.QueryNextSequenceReceiveResponse): _111.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _111.QueryNextSequenceReceiveResponseAminoMsg): _111.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _111.QueryNextSequenceReceiveResponse): _111.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryNextSequenceReceiveResponseProtoMsg): _111.QueryNextSequenceReceiveResponse;
                    toProto(message: _111.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryNextSequenceReceiveResponse): _111.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _110.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.GenesisState;
                    fromPartial(object: {
                        channels?: {
                            state?: _109.State;
                            ordering?: _109.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").Long;
                        }[];
                        nextChannelSequence?: string | number | import("long").Long;
                    }): _110.GenesisState;
                    fromAmino(object: _110.GenesisStateAmino): _110.GenesisState;
                    toAmino(message: _110.GenesisState): _110.GenesisStateAmino;
                    fromAminoMsg(object: _110.GenesisStateAminoMsg): _110.GenesisState;
                    toAminoMsg(message: _110.GenesisState): _110.GenesisStateAminoMsg;
                    fromProtoMsg(message: _110.GenesisStateProtoMsg): _110.GenesisState;
                    toProto(message: _110.GenesisState): Uint8Array;
                    toProtoMsg(message: _110.GenesisState): _110.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    encode(message: _110.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.PacketSequence;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").Long;
                    }): _110.PacketSequence;
                    fromAmino(object: _110.PacketSequenceAmino): _110.PacketSequence;
                    toAmino(message: _110.PacketSequence): _110.PacketSequenceAmino;
                    fromAminoMsg(object: _110.PacketSequenceAminoMsg): _110.PacketSequence;
                    toAminoMsg(message: _110.PacketSequence): _110.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _110.PacketSequenceProtoMsg): _110.PacketSequence;
                    toProto(message: _110.PacketSequence): Uint8Array;
                    toProtoMsg(message: _110.PacketSequence): _110.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _109.State;
                stateToJSON(object: _109.State): string;
                orderFromJSON(object: any): _109.Order;
                orderToJSON(object: _109.Order): string;
                State: typeof _109.State;
                StateSDKType: typeof _109.State;
                StateAmino: typeof _109.State;
                Order: typeof _109.Order;
                OrderSDKType: typeof _109.Order;
                OrderAmino: typeof _109.Order;
                Channel: {
                    encode(message: _109.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Channel;
                    fromPartial(object: {
                        state?: _109.State;
                        ordering?: _109.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _109.Channel;
                    fromAmino(object: _109.ChannelAmino): _109.Channel;
                    toAmino(message: _109.Channel): _109.ChannelAmino;
                    fromAminoMsg(object: _109.ChannelAminoMsg): _109.Channel;
                    toAminoMsg(message: _109.Channel): _109.ChannelAminoMsg;
                    fromProtoMsg(message: _109.ChannelProtoMsg): _109.Channel;
                    toProto(message: _109.Channel): Uint8Array;
                    toProtoMsg(message: _109.Channel): _109.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    encode(message: _109.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.IdentifiedChannel;
                    fromPartial(object: {
                        state?: _109.State;
                        ordering?: _109.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _109.IdentifiedChannel;
                    fromAmino(object: _109.IdentifiedChannelAmino): _109.IdentifiedChannel;
                    toAmino(message: _109.IdentifiedChannel): _109.IdentifiedChannelAmino;
                    fromAminoMsg(object: _109.IdentifiedChannelAminoMsg): _109.IdentifiedChannel;
                    toAminoMsg(message: _109.IdentifiedChannel): _109.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _109.IdentifiedChannelProtoMsg): _109.IdentifiedChannel;
                    toProto(message: _109.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _109.IdentifiedChannel): _109.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    encode(message: _109.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Counterparty;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _109.Counterparty;
                    fromAmino(object: _109.CounterpartyAmino): _109.Counterparty;
                    toAmino(message: _109.Counterparty): _109.CounterpartyAmino;
                    fromAminoMsg(object: _109.CounterpartyAminoMsg): _109.Counterparty;
                    toAminoMsg(message: _109.Counterparty): _109.CounterpartyAminoMsg;
                    fromProtoMsg(message: _109.CounterpartyProtoMsg): _109.Counterparty;
                    toProto(message: _109.Counterparty): Uint8Array;
                    toProtoMsg(message: _109.Counterparty): _109.CounterpartyProtoMsg;
                };
                Packet: {
                    encode(message: _109.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Packet;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        timeoutTimestamp?: string | number | import("long").Long;
                    }): _109.Packet;
                    fromAmino(object: _109.PacketAmino): _109.Packet;
                    toAmino(message: _109.Packet): _109.PacketAmino;
                    fromAminoMsg(object: _109.PacketAminoMsg): _109.Packet;
                    toAminoMsg(message: _109.Packet): _109.PacketAminoMsg;
                    fromProtoMsg(message: _109.PacketProtoMsg): _109.Packet;
                    toProto(message: _109.Packet): Uint8Array;
                    toProtoMsg(message: _109.Packet): _109.PacketProtoMsg;
                };
                PacketState: {
                    encode(message: _109.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.PacketState;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").Long;
                        data?: Uint8Array;
                    }): _109.PacketState;
                    fromAmino(object: _109.PacketStateAmino): _109.PacketState;
                    toAmino(message: _109.PacketState): _109.PacketStateAmino;
                    fromAminoMsg(object: _109.PacketStateAminoMsg): _109.PacketState;
                    toAminoMsg(message: _109.PacketState): _109.PacketStateAminoMsg;
                    fromProtoMsg(message: _109.PacketStateProtoMsg): _109.PacketState;
                    toProto(message: _109.PacketState): Uint8Array;
                    toProtoMsg(message: _109.PacketState): _109.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    encode(message: _109.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Acknowledgement;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _109.Acknowledgement;
                    fromAmino(object: _109.AcknowledgementAmino): _109.Acknowledgement;
                    toAmino(message: _109.Acknowledgement): _109.AcknowledgementAmino;
                    fromAminoMsg(object: _109.AcknowledgementAminoMsg): _109.Acknowledgement;
                    toAminoMsg(message: _109.Acknowledgement): _109.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _109.AcknowledgementProtoMsg): _109.Acknowledgement;
                    toProto(message: _109.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _109.Acknowledgement): _109.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _252.MsgClientImpl;
                QueryClientImpl: typeof _248.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _115.QueryClientStateRequest): Promise<_115.QueryClientStateResponse>;
                    clientStates(request?: _115.QueryClientStatesRequest): Promise<_115.QueryClientStatesResponse>;
                    consensusState(request: _115.QueryConsensusStateRequest): Promise<_115.QueryConsensusStateResponse>;
                    consensusStates(request: _115.QueryConsensusStatesRequest): Promise<_115.QueryConsensusStatesResponse>;
                    clientStatus(request: _115.QueryClientStatusRequest): Promise<_115.QueryClientStatusResponse>;
                    clientParams(request?: _115.QueryClientParamsRequest): Promise<_115.QueryClientParamsResponse>;
                    upgradedClientState(request?: _115.QueryUpgradedClientStateRequest): Promise<_115.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _115.QueryUpgradedConsensusStateRequest): Promise<_115.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _116.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _116.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _116.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _116.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _116.MsgCreateClient): {
                            typeUrl: string;
                            value: _116.MsgCreateClient;
                        };
                        updateClient(value: _116.MsgUpdateClient): {
                            typeUrl: string;
                            value: _116.MsgUpdateClient;
                        };
                        upgradeClient(value: _116.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _116.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _116.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _116.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _116.MsgCreateClient): {
                            typeUrl: string;
                            value: _116.MsgCreateClient;
                        };
                        updateClient(value: _116.MsgUpdateClient): {
                            typeUrl: string;
                            value: _116.MsgUpdateClient;
                        };
                        upgradeClient(value: _116.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _116.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _116.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _116.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _116.MsgCreateClient) => _116.MsgCreateClientAmino;
                        fromAmino: (object: _116.MsgCreateClientAmino) => _116.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _116.MsgUpdateClient) => _116.MsgUpdateClientAmino;
                        fromAmino: (object: _116.MsgUpdateClientAmino) => _116.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _116.MsgUpgradeClient) => _116.MsgUpgradeClientAmino;
                        fromAmino: (object: _116.MsgUpgradeClientAmino) => _116.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _116.MsgSubmitMisbehaviour) => _116.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _116.MsgSubmitMisbehaviourAmino) => _116.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _116.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgCreateClient;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _116.MsgCreateClient;
                    fromAmino(object: _116.MsgCreateClientAmino): _116.MsgCreateClient;
                    toAmino(message: _116.MsgCreateClient): _116.MsgCreateClientAmino;
                    fromAminoMsg(object: _116.MsgCreateClientAminoMsg): _116.MsgCreateClient;
                    toAminoMsg(message: _116.MsgCreateClient): _116.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _116.MsgCreateClientProtoMsg): _116.MsgCreateClient;
                    toProto(message: _116.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _116.MsgCreateClient): _116.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    encode(_: _116.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgCreateClientResponse;
                    fromPartial(_: {}): _116.MsgCreateClientResponse;
                    fromAmino(_: _116.MsgCreateClientResponseAmino): _116.MsgCreateClientResponse;
                    toAmino(_: _116.MsgCreateClientResponse): _116.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _116.MsgCreateClientResponseAminoMsg): _116.MsgCreateClientResponse;
                    toAminoMsg(message: _116.MsgCreateClientResponse): _116.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgCreateClientResponseProtoMsg): _116.MsgCreateClientResponse;
                    toProto(message: _116.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgCreateClientResponse): _116.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    encode(message: _116.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgUpdateClient;
                    fromPartial(object: {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _116.MsgUpdateClient;
                    fromAmino(object: _116.MsgUpdateClientAmino): _116.MsgUpdateClient;
                    toAmino(message: _116.MsgUpdateClient): _116.MsgUpdateClientAmino;
                    fromAminoMsg(object: _116.MsgUpdateClientAminoMsg): _116.MsgUpdateClient;
                    toAminoMsg(message: _116.MsgUpdateClient): _116.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _116.MsgUpdateClientProtoMsg): _116.MsgUpdateClient;
                    toProto(message: _116.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _116.MsgUpdateClient): _116.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    encode(_: _116.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgUpdateClientResponse;
                    fromPartial(_: {}): _116.MsgUpdateClientResponse;
                    fromAmino(_: _116.MsgUpdateClientResponseAmino): _116.MsgUpdateClientResponse;
                    toAmino(_: _116.MsgUpdateClientResponse): _116.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _116.MsgUpdateClientResponseAminoMsg): _116.MsgUpdateClientResponse;
                    toAminoMsg(message: _116.MsgUpdateClientResponse): _116.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgUpdateClientResponseProtoMsg): _116.MsgUpdateClientResponse;
                    toProto(message: _116.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgUpdateClientResponse): _116.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    encode(message: _116.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgUpgradeClient;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    }): _116.MsgUpgradeClient;
                    fromAmino(object: _116.MsgUpgradeClientAmino): _116.MsgUpgradeClient;
                    toAmino(message: _116.MsgUpgradeClient): _116.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _116.MsgUpgradeClientAminoMsg): _116.MsgUpgradeClient;
                    toAminoMsg(message: _116.MsgUpgradeClient): _116.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _116.MsgUpgradeClientProtoMsg): _116.MsgUpgradeClient;
                    toProto(message: _116.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _116.MsgUpgradeClient): _116.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _116.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgUpgradeClientResponse;
                    fromPartial(_: {}): _116.MsgUpgradeClientResponse;
                    fromAmino(_: _116.MsgUpgradeClientResponseAmino): _116.MsgUpgradeClientResponse;
                    toAmino(_: _116.MsgUpgradeClientResponse): _116.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _116.MsgUpgradeClientResponseAminoMsg): _116.MsgUpgradeClientResponse;
                    toAminoMsg(message: _116.MsgUpgradeClientResponse): _116.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgUpgradeClientResponseProtoMsg): _116.MsgUpgradeClientResponse;
                    toProto(message: _116.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgUpgradeClientResponse): _116.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _116.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgSubmitMisbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _116.MsgSubmitMisbehaviour;
                    fromAmino(object: _116.MsgSubmitMisbehaviourAmino): _116.MsgSubmitMisbehaviour;
                    toAmino(message: _116.MsgSubmitMisbehaviour): _116.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _116.MsgSubmitMisbehaviourAminoMsg): _116.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _116.MsgSubmitMisbehaviour): _116.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _116.MsgSubmitMisbehaviourProtoMsg): _116.MsgSubmitMisbehaviour;
                    toProto(message: _116.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _116.MsgSubmitMisbehaviour): _116.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _116.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: {}): _116.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _116.MsgSubmitMisbehaviourResponseAmino): _116.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _116.MsgSubmitMisbehaviourResponse): _116.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _116.MsgSubmitMisbehaviourResponseAminoMsg): _116.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _116.MsgSubmitMisbehaviourResponse): _116.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgSubmitMisbehaviourResponseProtoMsg): _116.MsgSubmitMisbehaviourResponse;
                    toProto(message: _116.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgSubmitMisbehaviourResponse): _116.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    encode(message: _115.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryClientStateRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _115.QueryClientStateRequest;
                    fromAmino(object: _115.QueryClientStateRequestAmino): _115.QueryClientStateRequest;
                    toAmino(message: _115.QueryClientStateRequest): _115.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _115.QueryClientStateRequestAminoMsg): _115.QueryClientStateRequest;
                    toAminoMsg(message: _115.QueryClientStateRequest): _115.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryClientStateRequestProtoMsg): _115.QueryClientStateRequest;
                    toProto(message: _115.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryClientStateRequest): _115.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    encode(message: _115.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryClientStateResponse;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _115.QueryClientStateResponse;
                    fromAmino(object: _115.QueryClientStateResponseAmino): _115.QueryClientStateResponse;
                    toAmino(message: _115.QueryClientStateResponse): _115.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _115.QueryClientStateResponseAminoMsg): _115.QueryClientStateResponse;
                    toAminoMsg(message: _115.QueryClientStateResponse): _115.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryClientStateResponseProtoMsg): _115.QueryClientStateResponse;
                    toProto(message: _115.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryClientStateResponse): _115.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    encode(message: _115.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryClientStatesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _115.QueryClientStatesRequest;
                    fromAmino(object: _115.QueryClientStatesRequestAmino): _115.QueryClientStatesRequest;
                    toAmino(message: _115.QueryClientStatesRequest): _115.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _115.QueryClientStatesRequestAminoMsg): _115.QueryClientStatesRequest;
                    toAminoMsg(message: _115.QueryClientStatesRequest): _115.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryClientStatesRequestProtoMsg): _115.QueryClientStatesRequest;
                    toProto(message: _115.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryClientStatesRequest): _115.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    encode(message: _115.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryClientStatesResponse;
                    fromPartial(object: {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                    }): _115.QueryClientStatesResponse;
                    fromAmino(object: _115.QueryClientStatesResponseAmino): _115.QueryClientStatesResponse;
                    toAmino(message: _115.QueryClientStatesResponse): _115.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _115.QueryClientStatesResponseAminoMsg): _115.QueryClientStatesResponse;
                    toAminoMsg(message: _115.QueryClientStatesResponse): _115.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryClientStatesResponseProtoMsg): _115.QueryClientStatesResponse;
                    toProto(message: _115.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryClientStatesResponse): _115.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    encode(message: _115.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryConsensusStateRequest;
                    fromPartial(object: {
                        clientId?: string;
                        revisionNumber?: string | number | import("long").Long;
                        revisionHeight?: string | number | import("long").Long;
                        latestHeight?: boolean;
                    }): _115.QueryConsensusStateRequest;
                    fromAmino(object: _115.QueryConsensusStateRequestAmino): _115.QueryConsensusStateRequest;
                    toAmino(message: _115.QueryConsensusStateRequest): _115.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _115.QueryConsensusStateRequestAminoMsg): _115.QueryConsensusStateRequest;
                    toAminoMsg(message: _115.QueryConsensusStateRequest): _115.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryConsensusStateRequestProtoMsg): _115.QueryConsensusStateRequest;
                    toProto(message: _115.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryConsensusStateRequest): _115.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    encode(message: _115.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _115.QueryConsensusStateResponse;
                    fromAmino(object: _115.QueryConsensusStateResponseAmino): _115.QueryConsensusStateResponse;
                    toAmino(message: _115.QueryConsensusStateResponse): _115.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _115.QueryConsensusStateResponseAminoMsg): _115.QueryConsensusStateResponse;
                    toAminoMsg(message: _115.QueryConsensusStateResponse): _115.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryConsensusStateResponseProtoMsg): _115.QueryConsensusStateResponse;
                    toProto(message: _115.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryConsensusStateResponse): _115.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _115.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryConsensusStatesRequest;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _115.QueryConsensusStatesRequest;
                    fromAmino(object: _115.QueryConsensusStatesRequestAmino): _115.QueryConsensusStatesRequest;
                    toAmino(message: _115.QueryConsensusStatesRequest): _115.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _115.QueryConsensusStatesRequestAminoMsg): _115.QueryConsensusStatesRequest;
                    toAminoMsg(message: _115.QueryConsensusStatesRequest): _115.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryConsensusStatesRequestProtoMsg): _115.QueryConsensusStatesRequest;
                    toProto(message: _115.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryConsensusStatesRequest): _115.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _115.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryConsensusStatesResponse;
                    fromPartial(object: {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                    }): _115.QueryConsensusStatesResponse;
                    fromAmino(object: _115.QueryConsensusStatesResponseAmino): _115.QueryConsensusStatesResponse;
                    toAmino(message: _115.QueryConsensusStatesResponse): _115.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _115.QueryConsensusStatesResponseAminoMsg): _115.QueryConsensusStatesResponse;
                    toAminoMsg(message: _115.QueryConsensusStatesResponse): _115.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryConsensusStatesResponseProtoMsg): _115.QueryConsensusStatesResponse;
                    toProto(message: _115.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryConsensusStatesResponse): _115.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    encode(message: _115.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryClientStatusRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _115.QueryClientStatusRequest;
                    fromAmino(object: _115.QueryClientStatusRequestAmino): _115.QueryClientStatusRequest;
                    toAmino(message: _115.QueryClientStatusRequest): _115.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _115.QueryClientStatusRequestAminoMsg): _115.QueryClientStatusRequest;
                    toAminoMsg(message: _115.QueryClientStatusRequest): _115.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryClientStatusRequestProtoMsg): _115.QueryClientStatusRequest;
                    toProto(message: _115.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryClientStatusRequest): _115.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    encode(message: _115.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryClientStatusResponse;
                    fromPartial(object: {
                        status?: string;
                    }): _115.QueryClientStatusResponse;
                    fromAmino(object: _115.QueryClientStatusResponseAmino): _115.QueryClientStatusResponse;
                    toAmino(message: _115.QueryClientStatusResponse): _115.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _115.QueryClientStatusResponseAminoMsg): _115.QueryClientStatusResponse;
                    toAminoMsg(message: _115.QueryClientStatusResponse): _115.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryClientStatusResponseProtoMsg): _115.QueryClientStatusResponse;
                    toProto(message: _115.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryClientStatusResponse): _115.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    encode(_: _115.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryClientParamsRequest;
                    fromPartial(_: {}): _115.QueryClientParamsRequest;
                    fromAmino(_: _115.QueryClientParamsRequestAmino): _115.QueryClientParamsRequest;
                    toAmino(_: _115.QueryClientParamsRequest): _115.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _115.QueryClientParamsRequestAminoMsg): _115.QueryClientParamsRequest;
                    toAminoMsg(message: _115.QueryClientParamsRequest): _115.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryClientParamsRequestProtoMsg): _115.QueryClientParamsRequest;
                    toProto(message: _115.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryClientParamsRequest): _115.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    encode(message: _115.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryClientParamsResponse;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _115.QueryClientParamsResponse;
                    fromAmino(object: _115.QueryClientParamsResponseAmino): _115.QueryClientParamsResponse;
                    toAmino(message: _115.QueryClientParamsResponse): _115.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _115.QueryClientParamsResponseAminoMsg): _115.QueryClientParamsResponse;
                    toAminoMsg(message: _115.QueryClientParamsResponse): _115.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryClientParamsResponseProtoMsg): _115.QueryClientParamsResponse;
                    toProto(message: _115.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryClientParamsResponse): _115.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _115.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUpgradedClientStateRequest;
                    fromPartial(_: {}): _115.QueryUpgradedClientStateRequest;
                    fromAmino(_: _115.QueryUpgradedClientStateRequestAmino): _115.QueryUpgradedClientStateRequest;
                    toAmino(_: _115.QueryUpgradedClientStateRequest): _115.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _115.QueryUpgradedClientStateRequestAminoMsg): _115.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _115.QueryUpgradedClientStateRequest): _115.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryUpgradedClientStateRequestProtoMsg): _115.QueryUpgradedClientStateRequest;
                    toProto(message: _115.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryUpgradedClientStateRequest): _115.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _115.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUpgradedClientStateResponse;
                    fromPartial(object: {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _115.QueryUpgradedClientStateResponse;
                    fromAmino(object: _115.QueryUpgradedClientStateResponseAmino): _115.QueryUpgradedClientStateResponse;
                    toAmino(message: _115.QueryUpgradedClientStateResponse): _115.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _115.QueryUpgradedClientStateResponseAminoMsg): _115.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _115.QueryUpgradedClientStateResponse): _115.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryUpgradedClientStateResponseProtoMsg): _115.QueryUpgradedClientStateResponse;
                    toProto(message: _115.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryUpgradedClientStateResponse): _115.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _115.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: {}): _115.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _115.QueryUpgradedConsensusStateRequestAmino): _115.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _115.QueryUpgradedConsensusStateRequest): _115.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _115.QueryUpgradedConsensusStateRequestAminoMsg): _115.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _115.QueryUpgradedConsensusStateRequest): _115.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryUpgradedConsensusStateRequestProtoMsg): _115.QueryUpgradedConsensusStateRequest;
                    toProto(message: _115.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryUpgradedConsensusStateRequest): _115.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _115.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _115.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _115.QueryUpgradedConsensusStateResponseAmino): _115.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _115.QueryUpgradedConsensusStateResponse): _115.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _115.QueryUpgradedConsensusStateResponseAminoMsg): _115.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _115.QueryUpgradedConsensusStateResponse): _115.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryUpgradedConsensusStateResponseProtoMsg): _115.QueryUpgradedConsensusStateResponse;
                    toProto(message: _115.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryUpgradedConsensusStateResponse): _115.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _114.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.GenesisState;
                    fromPartial(object: {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: string | number | import("long").Long;
                                    revisionHeight?: string | number | import("long").Long;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: string | number | import("long").Long;
                    }): _114.GenesisState;
                    fromAmino(object: _114.GenesisStateAmino): _114.GenesisState;
                    toAmino(message: _114.GenesisState): _114.GenesisStateAmino;
                    fromAminoMsg(object: _114.GenesisStateAminoMsg): _114.GenesisState;
                    toAminoMsg(message: _114.GenesisState): _114.GenesisStateAminoMsg;
                    fromProtoMsg(message: _114.GenesisStateProtoMsg): _114.GenesisState;
                    toProto(message: _114.GenesisState): Uint8Array;
                    toProtoMsg(message: _114.GenesisState): _114.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    encode(message: _114.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.GenesisMetadata;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _114.GenesisMetadata;
                    fromAmino(object: _114.GenesisMetadataAmino): _114.GenesisMetadata;
                    toAmino(message: _114.GenesisMetadata): _114.GenesisMetadataAmino;
                    fromAminoMsg(object: _114.GenesisMetadataAminoMsg): _114.GenesisMetadata;
                    toAminoMsg(message: _114.GenesisMetadata): _114.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _114.GenesisMetadataProtoMsg): _114.GenesisMetadata;
                    toProto(message: _114.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _114.GenesisMetadata): _114.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _114.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.IdentifiedGenesisMetadata;
                    fromPartial(object: {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _114.IdentifiedGenesisMetadata;
                    fromAmino(object: _114.IdentifiedGenesisMetadataAmino): _114.IdentifiedGenesisMetadata;
                    toAmino(message: _114.IdentifiedGenesisMetadata): _114.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _114.IdentifiedGenesisMetadataAminoMsg): _114.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _114.IdentifiedGenesisMetadata): _114.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _114.IdentifiedGenesisMetadataProtoMsg): _114.IdentifiedGenesisMetadata;
                    toProto(message: _114.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _114.IdentifiedGenesisMetadata): _114.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    encode(message: _113.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.IdentifiedClientState;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _113.IdentifiedClientState;
                    fromAmino(object: _113.IdentifiedClientStateAmino): _113.IdentifiedClientState;
                    toAmino(message: _113.IdentifiedClientState): _113.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _113.IdentifiedClientStateAminoMsg): _113.IdentifiedClientState;
                    toAminoMsg(message: _113.IdentifiedClientState): _113.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _113.IdentifiedClientStateProtoMsg): _113.IdentifiedClientState;
                    toProto(message: _113.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _113.IdentifiedClientState): _113.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    encode(message: _113.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ConsensusStateWithHeight;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _113.ConsensusStateWithHeight;
                    fromAmino(object: _113.ConsensusStateWithHeightAmino): _113.ConsensusStateWithHeight;
                    toAmino(message: _113.ConsensusStateWithHeight): _113.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _113.ConsensusStateWithHeightAminoMsg): _113.ConsensusStateWithHeight;
                    toAminoMsg(message: _113.ConsensusStateWithHeight): _113.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _113.ConsensusStateWithHeightProtoMsg): _113.ConsensusStateWithHeight;
                    toProto(message: _113.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _113.ConsensusStateWithHeight): _113.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    encode(message: _113.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ClientConsensusStates;
                    fromPartial(object: {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _113.ClientConsensusStates;
                    fromAmino(object: _113.ClientConsensusStatesAmino): _113.ClientConsensusStates;
                    toAmino(message: _113.ClientConsensusStates): _113.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _113.ClientConsensusStatesAminoMsg): _113.ClientConsensusStates;
                    toAminoMsg(message: _113.ClientConsensusStates): _113.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _113.ClientConsensusStatesProtoMsg): _113.ClientConsensusStates;
                    toProto(message: _113.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _113.ClientConsensusStates): _113.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    encode(message: _113.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ClientUpdateProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    }): _113.ClientUpdateProposal;
                    fromAmino(object: _113.ClientUpdateProposalAmino): _113.ClientUpdateProposal;
                    toAmino(message: _113.ClientUpdateProposal): _113.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _113.ClientUpdateProposalAminoMsg): _113.ClientUpdateProposal;
                    toAminoMsg(message: _113.ClientUpdateProposal): _113.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _113.ClientUpdateProposalProtoMsg): _113.ClientUpdateProposal;
                    toProto(message: _113.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _113.ClientUpdateProposal): _113.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    encode(message: _113.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.UpgradeProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: string | number | import("long").Long;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _113.UpgradeProposal;
                    fromAmino(object: _113.UpgradeProposalAmino): _113.UpgradeProposal;
                    toAmino(message: _113.UpgradeProposal): _113.UpgradeProposalAmino;
                    fromAminoMsg(object: _113.UpgradeProposalAminoMsg): _113.UpgradeProposal;
                    toAminoMsg(message: _113.UpgradeProposal): _113.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _113.UpgradeProposalProtoMsg): _113.UpgradeProposal;
                    toProto(message: _113.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _113.UpgradeProposal): _113.UpgradeProposalProtoMsg;
                };
                Height: {
                    encode(message: _113.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Height;
                    fromPartial(object: {
                        revisionNumber?: string | number | import("long").Long;
                        revisionHeight?: string | number | import("long").Long;
                    }): _113.Height;
                    fromAmino(object: _113.HeightAmino): _113.Height;
                    toAmino(message: _113.Height): _113.HeightAmino;
                    fromAminoMsg(object: _113.HeightAminoMsg): _113.Height;
                    toAminoMsg(message: _113.Height): _113.HeightAminoMsg;
                    fromProtoMsg(message: _113.HeightProtoMsg): _113.Height;
                    toProto(message: _113.Height): Uint8Array;
                    toProtoMsg(message: _113.Height): _113.HeightProtoMsg;
                };
                Params: {
                    encode(message: _113.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Params;
                    fromPartial(object: {
                        allowedClients?: string[];
                    }): _113.Params;
                    fromAmino(object: _113.ParamsAmino): _113.Params;
                    toAmino(message: _113.Params): _113.ParamsAmino;
                    fromAminoMsg(object: _113.ParamsAminoMsg): _113.Params;
                    toAminoMsg(message: _113.Params): _113.ParamsAminoMsg;
                    fromProtoMsg(message: _113.ParamsProtoMsg): _113.Params;
                    toProto(message: _113.Params): Uint8Array;
                    toProtoMsg(message: _113.Params): _113.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _117.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MerkleRoot;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _117.MerkleRoot;
                    fromAmino(object: _117.MerkleRootAmino): _117.MerkleRoot;
                    toAmino(message: _117.MerkleRoot): _117.MerkleRootAmino;
                    fromAminoMsg(object: _117.MerkleRootAminoMsg): _117.MerkleRoot;
                    toAminoMsg(message: _117.MerkleRoot): _117.MerkleRootAminoMsg;
                    fromProtoMsg(message: _117.MerkleRootProtoMsg): _117.MerkleRoot;
                    toProto(message: _117.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _117.MerkleRoot): _117.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    encode(message: _117.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MerklePrefix;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _117.MerklePrefix;
                    fromAmino(object: _117.MerklePrefixAmino): _117.MerklePrefix;
                    toAmino(message: _117.MerklePrefix): _117.MerklePrefixAmino;
                    fromAminoMsg(object: _117.MerklePrefixAminoMsg): _117.MerklePrefix;
                    toAminoMsg(message: _117.MerklePrefix): _117.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _117.MerklePrefixProtoMsg): _117.MerklePrefix;
                    toProto(message: _117.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _117.MerklePrefix): _117.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    encode(message: _117.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MerklePath;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _117.MerklePath;
                    fromAmino(object: _117.MerklePathAmino): _117.MerklePath;
                    toAmino(message: _117.MerklePath): _117.MerklePathAmino;
                    fromAminoMsg(object: _117.MerklePathAminoMsg): _117.MerklePath;
                    toAminoMsg(message: _117.MerklePath): _117.MerklePathAminoMsg;
                    fromProtoMsg(message: _117.MerklePathProtoMsg): _117.MerklePath;
                    toProto(message: _117.MerklePath): Uint8Array;
                    toProtoMsg(message: _117.MerklePath): _117.MerklePathProtoMsg;
                };
                MerkleProof: {
                    encode(message: _117.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MerkleProof;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _117.MerkleProof;
                    fromAmino(object: _117.MerkleProofAmino): _117.MerkleProof;
                    toAmino(message: _117.MerkleProof): _117.MerkleProofAmino;
                    fromAminoMsg(object: _117.MerkleProofAminoMsg): _117.MerkleProof;
                    toAminoMsg(message: _117.MerkleProof): _117.MerkleProofAminoMsg;
                    fromProtoMsg(message: _117.MerkleProofProtoMsg): _117.MerkleProof;
                    toProto(message: _117.MerkleProof): Uint8Array;
                    toProtoMsg(message: _117.MerkleProof): _117.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _253.MsgClientImpl;
                QueryClientImpl: typeof _249.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _120.QueryConnectionRequest): Promise<_120.QueryConnectionResponse>;
                    connections(request?: _120.QueryConnectionsRequest): Promise<_120.QueryConnectionsResponse>;
                    clientConnections(request: _120.QueryClientConnectionsRequest): Promise<_120.QueryClientConnectionsResponse>;
                    connectionClientState(request: _120.QueryConnectionClientStateRequest): Promise<_120.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _120.QueryConnectionConsensusStateRequest): Promise<_120.QueryConnectionConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _121.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _121.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _121.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _121.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _121.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _121.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _121.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _121.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _121.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _121.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _121.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _121.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _121.MsgConnectionOpenInit) => _121.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _121.MsgConnectionOpenInitAmino) => _121.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _121.MsgConnectionOpenTry) => _121.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _121.MsgConnectionOpenTryAmino) => _121.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _121.MsgConnectionOpenAck) => _121.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _121.MsgConnectionOpenAckAmino) => _121.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _121.MsgConnectionOpenConfirm) => _121.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _121.MsgConnectionOpenConfirmAmino) => _121.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _121.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgConnectionOpenInit;
                    fromPartial(object: {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: string | number | import("long").Long;
                        signer?: string;
                    }): _121.MsgConnectionOpenInit;
                    fromAmino(object: _121.MsgConnectionOpenInitAmino): _121.MsgConnectionOpenInit;
                    toAmino(message: _121.MsgConnectionOpenInit): _121.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenInitAminoMsg): _121.MsgConnectionOpenInit;
                    toAminoMsg(message: _121.MsgConnectionOpenInit): _121.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenInitProtoMsg): _121.MsgConnectionOpenInit;
                    toProto(message: _121.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenInit): _121.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _121.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgConnectionOpenInitResponse;
                    fromPartial(_: {}): _121.MsgConnectionOpenInitResponse;
                    fromAmino(_: _121.MsgConnectionOpenInitResponseAmino): _121.MsgConnectionOpenInitResponse;
                    toAmino(_: _121.MsgConnectionOpenInitResponse): _121.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenInitResponseAminoMsg): _121.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _121.MsgConnectionOpenInitResponse): _121.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenInitResponseProtoMsg): _121.MsgConnectionOpenInitResponse;
                    toProto(message: _121.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenInitResponse): _121.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    encode(message: _121.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgConnectionOpenTry;
                    fromPartial(object: {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long").Long;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _121.MsgConnectionOpenTry;
                    fromAmino(object: _121.MsgConnectionOpenTryAmino): _121.MsgConnectionOpenTry;
                    toAmino(message: _121.MsgConnectionOpenTry): _121.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenTryAminoMsg): _121.MsgConnectionOpenTry;
                    toAminoMsg(message: _121.MsgConnectionOpenTry): _121.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenTryProtoMsg): _121.MsgConnectionOpenTry;
                    toProto(message: _121.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenTry): _121.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _121.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgConnectionOpenTryResponse;
                    fromPartial(_: {}): _121.MsgConnectionOpenTryResponse;
                    fromAmino(_: _121.MsgConnectionOpenTryResponseAmino): _121.MsgConnectionOpenTryResponse;
                    toAmino(_: _121.MsgConnectionOpenTryResponse): _121.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenTryResponseAminoMsg): _121.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _121.MsgConnectionOpenTryResponse): _121.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenTryResponseProtoMsg): _121.MsgConnectionOpenTryResponse;
                    toProto(message: _121.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenTryResponse): _121.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    encode(message: _121.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgConnectionOpenAck;
                    fromPartial(object: {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _121.MsgConnectionOpenAck;
                    fromAmino(object: _121.MsgConnectionOpenAckAmino): _121.MsgConnectionOpenAck;
                    toAmino(message: _121.MsgConnectionOpenAck): _121.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenAckAminoMsg): _121.MsgConnectionOpenAck;
                    toAminoMsg(message: _121.MsgConnectionOpenAck): _121.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenAckProtoMsg): _121.MsgConnectionOpenAck;
                    toProto(message: _121.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenAck): _121.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _121.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgConnectionOpenAckResponse;
                    fromPartial(_: {}): _121.MsgConnectionOpenAckResponse;
                    fromAmino(_: _121.MsgConnectionOpenAckResponseAmino): _121.MsgConnectionOpenAckResponse;
                    toAmino(_: _121.MsgConnectionOpenAckResponse): _121.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenAckResponseAminoMsg): _121.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _121.MsgConnectionOpenAckResponse): _121.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenAckResponseProtoMsg): _121.MsgConnectionOpenAckResponse;
                    toProto(message: _121.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenAckResponse): _121.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _121.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgConnectionOpenConfirm;
                    fromPartial(object: {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _121.MsgConnectionOpenConfirm;
                    fromAmino(object: _121.MsgConnectionOpenConfirmAmino): _121.MsgConnectionOpenConfirm;
                    toAmino(message: _121.MsgConnectionOpenConfirm): _121.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenConfirmAminoMsg): _121.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _121.MsgConnectionOpenConfirm): _121.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenConfirmProtoMsg): _121.MsgConnectionOpenConfirm;
                    toProto(message: _121.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenConfirm): _121.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _121.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: {}): _121.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _121.MsgConnectionOpenConfirmResponseAmino): _121.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _121.MsgConnectionOpenConfirmResponse): _121.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenConfirmResponseAminoMsg): _121.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _121.MsgConnectionOpenConfirmResponse): _121.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenConfirmResponseProtoMsg): _121.MsgConnectionOpenConfirmResponse;
                    toProto(message: _121.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenConfirmResponse): _121.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    encode(message: _120.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryConnectionRequest;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _120.QueryConnectionRequest;
                    fromAmino(object: _120.QueryConnectionRequestAmino): _120.QueryConnectionRequest;
                    toAmino(message: _120.QueryConnectionRequest): _120.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _120.QueryConnectionRequestAminoMsg): _120.QueryConnectionRequest;
                    toAminoMsg(message: _120.QueryConnectionRequest): _120.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionRequestProtoMsg): _120.QueryConnectionRequest;
                    toProto(message: _120.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionRequest): _120.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    encode(message: _120.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryConnectionResponse;
                    fromPartial(object: {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _118.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").Long;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _120.QueryConnectionResponse;
                    fromAmino(object: _120.QueryConnectionResponseAmino): _120.QueryConnectionResponse;
                    toAmino(message: _120.QueryConnectionResponse): _120.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _120.QueryConnectionResponseAminoMsg): _120.QueryConnectionResponse;
                    toAminoMsg(message: _120.QueryConnectionResponse): _120.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionResponseProtoMsg): _120.QueryConnectionResponse;
                    toProto(message: _120.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionResponse): _120.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    encode(message: _120.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryConnectionsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _120.QueryConnectionsRequest;
                    fromAmino(object: _120.QueryConnectionsRequestAmino): _120.QueryConnectionsRequest;
                    toAmino(message: _120.QueryConnectionsRequest): _120.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _120.QueryConnectionsRequestAminoMsg): _120.QueryConnectionsRequest;
                    toAminoMsg(message: _120.QueryConnectionsRequest): _120.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionsRequestProtoMsg): _120.QueryConnectionsRequest;
                    toProto(message: _120.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionsRequest): _120.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    encode(message: _120.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryConnectionsResponse;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _118.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").Long;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _120.QueryConnectionsResponse;
                    fromAmino(object: _120.QueryConnectionsResponseAmino): _120.QueryConnectionsResponse;
                    toAmino(message: _120.QueryConnectionsResponse): _120.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _120.QueryConnectionsResponseAminoMsg): _120.QueryConnectionsResponse;
                    toAminoMsg(message: _120.QueryConnectionsResponse): _120.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionsResponseProtoMsg): _120.QueryConnectionsResponse;
                    toProto(message: _120.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionsResponse): _120.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _120.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryClientConnectionsRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _120.QueryClientConnectionsRequest;
                    fromAmino(object: _120.QueryClientConnectionsRequestAmino): _120.QueryClientConnectionsRequest;
                    toAmino(message: _120.QueryClientConnectionsRequest): _120.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _120.QueryClientConnectionsRequestAminoMsg): _120.QueryClientConnectionsRequest;
                    toAminoMsg(message: _120.QueryClientConnectionsRequest): _120.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _120.QueryClientConnectionsRequestProtoMsg): _120.QueryClientConnectionsRequest;
                    toProto(message: _120.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryClientConnectionsRequest): _120.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _120.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryClientConnectionsResponse;
                    fromPartial(object: {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _120.QueryClientConnectionsResponse;
                    fromAmino(object: _120.QueryClientConnectionsResponseAmino): _120.QueryClientConnectionsResponse;
                    toAmino(message: _120.QueryClientConnectionsResponse): _120.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _120.QueryClientConnectionsResponseAminoMsg): _120.QueryClientConnectionsResponse;
                    toAminoMsg(message: _120.QueryClientConnectionsResponse): _120.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _120.QueryClientConnectionsResponseProtoMsg): _120.QueryClientConnectionsResponse;
                    toProto(message: _120.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryClientConnectionsResponse): _120.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _120.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryConnectionClientStateRequest;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _120.QueryConnectionClientStateRequest;
                    fromAmino(object: _120.QueryConnectionClientStateRequestAmino): _120.QueryConnectionClientStateRequest;
                    toAmino(message: _120.QueryConnectionClientStateRequest): _120.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _120.QueryConnectionClientStateRequestAminoMsg): _120.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _120.QueryConnectionClientStateRequest): _120.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionClientStateRequestProtoMsg): _120.QueryConnectionClientStateRequest;
                    toProto(message: _120.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionClientStateRequest): _120.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _120.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryConnectionClientStateResponse;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _120.QueryConnectionClientStateResponse;
                    fromAmino(object: _120.QueryConnectionClientStateResponseAmino): _120.QueryConnectionClientStateResponse;
                    toAmino(message: _120.QueryConnectionClientStateResponse): _120.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _120.QueryConnectionClientStateResponseAminoMsg): _120.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _120.QueryConnectionClientStateResponse): _120.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionClientStateResponseProtoMsg): _120.QueryConnectionClientStateResponse;
                    toProto(message: _120.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionClientStateResponse): _120.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _120.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryConnectionConsensusStateRequest;
                    fromPartial(object: {
                        connectionId?: string;
                        revisionNumber?: string | number | import("long").Long;
                        revisionHeight?: string | number | import("long").Long;
                    }): _120.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _120.QueryConnectionConsensusStateRequestAmino): _120.QueryConnectionConsensusStateRequest;
                    toAmino(message: _120.QueryConnectionConsensusStateRequest): _120.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _120.QueryConnectionConsensusStateRequestAminoMsg): _120.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _120.QueryConnectionConsensusStateRequest): _120.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionConsensusStateRequestProtoMsg): _120.QueryConnectionConsensusStateRequest;
                    toProto(message: _120.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionConsensusStateRequest): _120.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _120.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryConnectionConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _120.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _120.QueryConnectionConsensusStateResponseAmino): _120.QueryConnectionConsensusStateResponse;
                    toAmino(message: _120.QueryConnectionConsensusStateResponse): _120.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _120.QueryConnectionConsensusStateResponseAminoMsg): _120.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _120.QueryConnectionConsensusStateResponse): _120.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionConsensusStateResponseProtoMsg): _120.QueryConnectionConsensusStateResponse;
                    toProto(message: _120.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionConsensusStateResponse): _120.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _119.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.GenesisState;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _118.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").Long;
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: string | number | import("long").Long;
                        params?: {
                            maxExpectedTimePerBlock?: string | number | import("long").Long;
                        };
                    }): _119.GenesisState;
                    fromAmino(object: _119.GenesisStateAmino): _119.GenesisState;
                    toAmino(message: _119.GenesisState): _119.GenesisStateAmino;
                    fromAminoMsg(object: _119.GenesisStateAminoMsg): _119.GenesisState;
                    toAminoMsg(message: _119.GenesisState): _119.GenesisStateAminoMsg;
                    fromProtoMsg(message: _119.GenesisStateProtoMsg): _119.GenesisState;
                    toProto(message: _119.GenesisState): Uint8Array;
                    toProtoMsg(message: _119.GenesisState): _119.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _118.State;
                stateToJSON(object: _118.State): string;
                State: typeof _118.State;
                StateSDKType: typeof _118.State;
                StateAmino: typeof _118.State;
                ConnectionEnd: {
                    encode(message: _118.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ConnectionEnd;
                    fromPartial(object: {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _118.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long").Long;
                    }): _118.ConnectionEnd;
                    fromAmino(object: _118.ConnectionEndAmino): _118.ConnectionEnd;
                    toAmino(message: _118.ConnectionEnd): _118.ConnectionEndAmino;
                    fromAminoMsg(object: _118.ConnectionEndAminoMsg): _118.ConnectionEnd;
                    toAminoMsg(message: _118.ConnectionEnd): _118.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _118.ConnectionEndProtoMsg): _118.ConnectionEnd;
                    toProto(message: _118.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _118.ConnectionEnd): _118.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    encode(message: _118.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.IdentifiedConnection;
                    fromPartial(object: {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _118.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long").Long;
                    }): _118.IdentifiedConnection;
                    fromAmino(object: _118.IdentifiedConnectionAmino): _118.IdentifiedConnection;
                    toAmino(message: _118.IdentifiedConnection): _118.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _118.IdentifiedConnectionAminoMsg): _118.IdentifiedConnection;
                    toAminoMsg(message: _118.IdentifiedConnection): _118.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _118.IdentifiedConnectionProtoMsg): _118.IdentifiedConnection;
                    toProto(message: _118.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _118.IdentifiedConnection): _118.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    encode(message: _118.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Counterparty;
                    fromPartial(object: {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    }): _118.Counterparty;
                    fromAmino(object: _118.CounterpartyAmino): _118.Counterparty;
                    toAmino(message: _118.Counterparty): _118.CounterpartyAmino;
                    fromAminoMsg(object: _118.CounterpartyAminoMsg): _118.Counterparty;
                    toAminoMsg(message: _118.Counterparty): _118.CounterpartyAminoMsg;
                    fromProtoMsg(message: _118.CounterpartyProtoMsg): _118.Counterparty;
                    toProto(message: _118.Counterparty): Uint8Array;
                    toProtoMsg(message: _118.Counterparty): _118.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    encode(message: _118.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ClientPaths;
                    fromPartial(object: {
                        paths?: string[];
                    }): _118.ClientPaths;
                    fromAmino(object: _118.ClientPathsAmino): _118.ClientPaths;
                    toAmino(message: _118.ClientPaths): _118.ClientPathsAmino;
                    fromAminoMsg(object: _118.ClientPathsAminoMsg): _118.ClientPaths;
                    toAminoMsg(message: _118.ClientPaths): _118.ClientPathsAminoMsg;
                    fromProtoMsg(message: _118.ClientPathsProtoMsg): _118.ClientPaths;
                    toProto(message: _118.ClientPaths): Uint8Array;
                    toProtoMsg(message: _118.ClientPaths): _118.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    encode(message: _118.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ConnectionPaths;
                    fromPartial(object: {
                        clientId?: string;
                        paths?: string[];
                    }): _118.ConnectionPaths;
                    fromAmino(object: _118.ConnectionPathsAmino): _118.ConnectionPaths;
                    toAmino(message: _118.ConnectionPaths): _118.ConnectionPathsAmino;
                    fromAminoMsg(object: _118.ConnectionPathsAminoMsg): _118.ConnectionPaths;
                    toAminoMsg(message: _118.ConnectionPaths): _118.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _118.ConnectionPathsProtoMsg): _118.ConnectionPaths;
                    toProto(message: _118.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _118.ConnectionPaths): _118.ConnectionPathsProtoMsg;
                };
                Version: {
                    encode(message: _118.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Version;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _118.Version;
                    fromAmino(object: _118.VersionAmino): _118.Version;
                    toAmino(message: _118.Version): _118.VersionAmino;
                    fromAminoMsg(object: _118.VersionAminoMsg): _118.Version;
                    toAminoMsg(message: _118.Version): _118.VersionAminoMsg;
                    fromProtoMsg(message: _118.VersionProtoMsg): _118.Version;
                    toProto(message: _118.Version): Uint8Array;
                    toProtoMsg(message: _118.Version): _118.VersionProtoMsg;
                };
                Params: {
                    encode(message: _118.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Params;
                    fromPartial(object: {
                        maxExpectedTimePerBlock?: string | number | import("long").Long;
                    }): _118.Params;
                    fromAmino(object: _118.ParamsAmino): _118.Params;
                    toAmino(message: _118.Params): _118.ParamsAmino;
                    fromAminoMsg(object: _118.ParamsAminoMsg): _118.Params;
                    toAminoMsg(message: _118.Params): _118.ParamsAminoMsg;
                    fromProtoMsg(message: _118.ParamsProtoMsg): _118.Params;
                    toProto(message: _118.Params): Uint8Array;
                    toProtoMsg(message: _118.Params): _118.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _122.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ClientState;
                    fromPartial(object: {
                        chainId?: string;
                        height?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                    }): _122.ClientState;
                    fromAmino(object: _122.ClientStateAmino): _122.ClientState;
                    toAmino(message: _122.ClientState): _122.ClientStateAmino;
                    fromAminoMsg(object: _122.ClientStateAminoMsg): _122.ClientState;
                    toAminoMsg(message: _122.ClientState): _122.ClientStateAminoMsg;
                    fromProtoMsg(message: _122.ClientStateProtoMsg): _122.ClientState;
                    toProto(message: _122.ClientState): Uint8Array;
                    toProtoMsg(message: _122.ClientState): _122.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _123.DataType;
                dataTypeToJSON(object: _123.DataType): string;
                DataType: typeof _123.DataType;
                DataTypeSDKType: typeof _123.DataType;
                DataTypeAmino: typeof _123.DataType;
                ClientState: {
                    encode(message: _123.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ClientState;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        frozenSequence?: string | number | import("long").Long;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string | number | import("long").Long;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _123.ClientState;
                    fromAmino(object: _123.ClientStateAmino): _123.ClientState;
                    toAmino(message: _123.ClientState): _123.ClientStateAmino;
                    fromAminoMsg(object: _123.ClientStateAminoMsg): _123.ClientState;
                    toAminoMsg(message: _123.ClientState): _123.ClientStateAminoMsg;
                    fromProtoMsg(message: _123.ClientStateProtoMsg): _123.ClientState;
                    toProto(message: _123.ClientState): Uint8Array;
                    toProtoMsg(message: _123.ClientState): _123.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _123.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConsensusState;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string | number | import("long").Long;
                    }): _123.ConsensusState;
                    fromAmino(object: _123.ConsensusStateAmino): _123.ConsensusState;
                    toAmino(message: _123.ConsensusState): _123.ConsensusStateAmino;
                    fromAminoMsg(object: _123.ConsensusStateAminoMsg): _123.ConsensusState;
                    toAminoMsg(message: _123.ConsensusState): _123.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _123.ConsensusStateProtoMsg): _123.ConsensusState;
                    toProto(message: _123.ConsensusState): Uint8Array;
                    toProtoMsg(message: _123.ConsensusState): _123.ConsensusStateProtoMsg;
                };
                Header: {
                    encode(message: _123.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Header;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        timestamp?: string | number | import("long").Long;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _123.Header;
                    fromAmino(object: _123.HeaderAmino): _123.Header;
                    toAmino(message: _123.Header): _123.HeaderAmino;
                    fromAminoMsg(object: _123.HeaderAminoMsg): _123.Header;
                    toAminoMsg(message: _123.Header): _123.HeaderAminoMsg;
                    fromProtoMsg(message: _123.HeaderProtoMsg): _123.Header;
                    toProto(message: _123.Header): Uint8Array;
                    toProtoMsg(message: _123.Header): _123.HeaderProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _123.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: string | number | import("long").Long;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _123.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").Long;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _123.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").Long;
                        };
                    }): _123.Misbehaviour;
                    fromAmino(object: _123.MisbehaviourAmino): _123.Misbehaviour;
                    toAmino(message: _123.Misbehaviour): _123.MisbehaviourAmino;
                    fromAminoMsg(object: _123.MisbehaviourAminoMsg): _123.Misbehaviour;
                    toAminoMsg(message: _123.Misbehaviour): _123.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _123.MisbehaviourProtoMsg): _123.Misbehaviour;
                    toProto(message: _123.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _123.Misbehaviour): _123.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    encode(message: _123.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _123.DataType;
                        data?: Uint8Array;
                        timestamp?: string | number | import("long").Long;
                    }): _123.SignatureAndData;
                    fromAmino(object: _123.SignatureAndDataAmino): _123.SignatureAndData;
                    toAmino(message: _123.SignatureAndData): _123.SignatureAndDataAmino;
                    fromAminoMsg(object: _123.SignatureAndDataAminoMsg): _123.SignatureAndData;
                    toAminoMsg(message: _123.SignatureAndData): _123.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _123.SignatureAndDataProtoMsg): _123.SignatureAndData;
                    toProto(message: _123.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _123.SignatureAndData): _123.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    encode(message: _123.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TimestampedSignatureData;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: string | number | import("long").Long;
                    }): _123.TimestampedSignatureData;
                    fromAmino(object: _123.TimestampedSignatureDataAmino): _123.TimestampedSignatureData;
                    toAmino(message: _123.TimestampedSignatureData): _123.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _123.TimestampedSignatureDataAminoMsg): _123.TimestampedSignatureData;
                    toAminoMsg(message: _123.TimestampedSignatureData): _123.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _123.TimestampedSignatureDataProtoMsg): _123.TimestampedSignatureData;
                    toProto(message: _123.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _123.TimestampedSignatureData): _123.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    encode(message: _123.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SignBytes;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        timestamp?: string | number | import("long").Long;
                        diversifier?: string;
                        dataType?: _123.DataType;
                        data?: Uint8Array;
                    }): _123.SignBytes;
                    fromAmino(object: _123.SignBytesAmino): _123.SignBytes;
                    toAmino(message: _123.SignBytes): _123.SignBytesAmino;
                    fromAminoMsg(object: _123.SignBytesAminoMsg): _123.SignBytes;
                    toAminoMsg(message: _123.SignBytes): _123.SignBytesAminoMsg;
                    fromProtoMsg(message: _123.SignBytesProtoMsg): _123.SignBytes;
                    toProto(message: _123.SignBytes): Uint8Array;
                    toProtoMsg(message: _123.SignBytes): _123.SignBytesProtoMsg;
                };
                HeaderData: {
                    encode(message: _123.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.HeaderData;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _123.HeaderData;
                    fromAmino(object: _123.HeaderDataAmino): _123.HeaderData;
                    toAmino(message: _123.HeaderData): _123.HeaderDataAmino;
                    fromAminoMsg(object: _123.HeaderDataAminoMsg): _123.HeaderData;
                    toAminoMsg(message: _123.HeaderData): _123.HeaderDataAminoMsg;
                    fromProtoMsg(message: _123.HeaderDataProtoMsg): _123.HeaderData;
                    toProto(message: _123.HeaderData): Uint8Array;
                    toProtoMsg(message: _123.HeaderData): _123.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    encode(message: _123.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _123.ClientStateData;
                    fromAmino(object: _123.ClientStateDataAmino): _123.ClientStateData;
                    toAmino(message: _123.ClientStateData): _123.ClientStateDataAmino;
                    fromAminoMsg(object: _123.ClientStateDataAminoMsg): _123.ClientStateData;
                    toAminoMsg(message: _123.ClientStateData): _123.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _123.ClientStateDataProtoMsg): _123.ClientStateData;
                    toProto(message: _123.ClientStateData): Uint8Array;
                    toProtoMsg(message: _123.ClientStateData): _123.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    encode(message: _123.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _123.ConsensusStateData;
                    fromAmino(object: _123.ConsensusStateDataAmino): _123.ConsensusStateData;
                    toAmino(message: _123.ConsensusStateData): _123.ConsensusStateDataAmino;
                    fromAminoMsg(object: _123.ConsensusStateDataAminoMsg): _123.ConsensusStateData;
                    toAminoMsg(message: _123.ConsensusStateData): _123.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _123.ConsensusStateDataProtoMsg): _123.ConsensusStateData;
                    toProto(message: _123.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _123.ConsensusStateData): _123.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    encode(message: _123.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _118.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").Long;
                        };
                    }): _123.ConnectionStateData;
                    fromAmino(object: _123.ConnectionStateDataAmino): _123.ConnectionStateData;
                    toAmino(message: _123.ConnectionStateData): _123.ConnectionStateDataAmino;
                    fromAminoMsg(object: _123.ConnectionStateDataAminoMsg): _123.ConnectionStateData;
                    toAminoMsg(message: _123.ConnectionStateData): _123.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _123.ConnectionStateDataProtoMsg): _123.ConnectionStateData;
                    toProto(message: _123.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _123.ConnectionStateData): _123.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    encode(message: _123.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _109.State;
                            ordering?: _109.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _123.ChannelStateData;
                    fromAmino(object: _123.ChannelStateDataAmino): _123.ChannelStateData;
                    toAmino(message: _123.ChannelStateData): _123.ChannelStateDataAmino;
                    fromAminoMsg(object: _123.ChannelStateDataAminoMsg): _123.ChannelStateData;
                    toAminoMsg(message: _123.ChannelStateData): _123.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _123.ChannelStateDataProtoMsg): _123.ChannelStateData;
                    toProto(message: _123.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _123.ChannelStateData): _123.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    encode(message: _123.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _123.PacketCommitmentData;
                    fromAmino(object: _123.PacketCommitmentDataAmino): _123.PacketCommitmentData;
                    toAmino(message: _123.PacketCommitmentData): _123.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _123.PacketCommitmentDataAminoMsg): _123.PacketCommitmentData;
                    toAminoMsg(message: _123.PacketCommitmentData): _123.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _123.PacketCommitmentDataProtoMsg): _123.PacketCommitmentData;
                    toProto(message: _123.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _123.PacketCommitmentData): _123.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    encode(message: _123.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _123.PacketAcknowledgementData;
                    fromAmino(object: _123.PacketAcknowledgementDataAmino): _123.PacketAcknowledgementData;
                    toAmino(message: _123.PacketAcknowledgementData): _123.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _123.PacketAcknowledgementDataAminoMsg): _123.PacketAcknowledgementData;
                    toAminoMsg(message: _123.PacketAcknowledgementData): _123.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _123.PacketAcknowledgementDataProtoMsg): _123.PacketAcknowledgementData;
                    toProto(message: _123.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _123.PacketAcknowledgementData): _123.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _123.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _123.PacketReceiptAbsenceData;
                    fromAmino(object: _123.PacketReceiptAbsenceDataAmino): _123.PacketReceiptAbsenceData;
                    toAmino(message: _123.PacketReceiptAbsenceData): _123.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _123.PacketReceiptAbsenceDataAminoMsg): _123.PacketReceiptAbsenceData;
                    toAminoMsg(message: _123.PacketReceiptAbsenceData): _123.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _123.PacketReceiptAbsenceDataProtoMsg): _123.PacketReceiptAbsenceData;
                    toProto(message: _123.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _123.PacketReceiptAbsenceData): _123.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    encode(message: _123.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: string | number | import("long").Long;
                    }): _123.NextSequenceRecvData;
                    fromAmino(object: _123.NextSequenceRecvDataAmino): _123.NextSequenceRecvData;
                    toAmino(message: _123.NextSequenceRecvData): _123.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _123.NextSequenceRecvDataAminoMsg): _123.NextSequenceRecvData;
                    toAminoMsg(message: _123.NextSequenceRecvData): _123.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _123.NextSequenceRecvDataProtoMsg): _123.NextSequenceRecvData;
                    toProto(message: _123.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _123.NextSequenceRecvData): _123.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _124.DataType;
                dataTypeToJSON(object: _124.DataType): string;
                DataType: typeof _124.DataType;
                DataTypeSDKType: typeof _124.DataType;
                DataTypeAmino: typeof _124.DataType;
                ClientState: {
                    encode(message: _124.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientState;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string | number | import("long").Long;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _124.ClientState;
                    fromAmino(object: _124.ClientStateAmino): _124.ClientState;
                    toAmino(message: _124.ClientState): _124.ClientStateAmino;
                    fromAminoMsg(object: _124.ClientStateAminoMsg): _124.ClientState;
                    toAminoMsg(message: _124.ClientState): _124.ClientStateAminoMsg;
                    fromProtoMsg(message: _124.ClientStateProtoMsg): _124.ClientState;
                    toProto(message: _124.ClientState): Uint8Array;
                    toProtoMsg(message: _124.ClientState): _124.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _124.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConsensusState;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string | number | import("long").Long;
                    }): _124.ConsensusState;
                    fromAmino(object: _124.ConsensusStateAmino): _124.ConsensusState;
                    toAmino(message: _124.ConsensusState): _124.ConsensusStateAmino;
                    fromAminoMsg(object: _124.ConsensusStateAminoMsg): _124.ConsensusState;
                    toAminoMsg(message: _124.ConsensusState): _124.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _124.ConsensusStateProtoMsg): _124.ConsensusState;
                    toProto(message: _124.ConsensusState): Uint8Array;
                    toProtoMsg(message: _124.ConsensusState): _124.ConsensusStateProtoMsg;
                };
                Header: {
                    encode(message: _124.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Header;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        timestamp?: string | number | import("long").Long;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _124.Header;
                    fromAmino(object: _124.HeaderAmino): _124.Header;
                    toAmino(message: _124.Header): _124.HeaderAmino;
                    fromAminoMsg(object: _124.HeaderAminoMsg): _124.Header;
                    toAminoMsg(message: _124.Header): _124.HeaderAminoMsg;
                    fromProtoMsg(message: _124.HeaderProtoMsg): _124.Header;
                    toProto(message: _124.Header): Uint8Array;
                    toProtoMsg(message: _124.Header): _124.HeaderProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _124.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: string | number | import("long").Long;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _124.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").Long;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _124.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").Long;
                        };
                    }): _124.Misbehaviour;
                    fromAmino(object: _124.MisbehaviourAmino): _124.Misbehaviour;
                    toAmino(message: _124.Misbehaviour): _124.MisbehaviourAmino;
                    fromAminoMsg(object: _124.MisbehaviourAminoMsg): _124.Misbehaviour;
                    toAminoMsg(message: _124.Misbehaviour): _124.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _124.MisbehaviourProtoMsg): _124.Misbehaviour;
                    toProto(message: _124.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _124.Misbehaviour): _124.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    encode(message: _124.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _124.DataType;
                        data?: Uint8Array;
                        timestamp?: string | number | import("long").Long;
                    }): _124.SignatureAndData;
                    fromAmino(object: _124.SignatureAndDataAmino): _124.SignatureAndData;
                    toAmino(message: _124.SignatureAndData): _124.SignatureAndDataAmino;
                    fromAminoMsg(object: _124.SignatureAndDataAminoMsg): _124.SignatureAndData;
                    toAminoMsg(message: _124.SignatureAndData): _124.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _124.SignatureAndDataProtoMsg): _124.SignatureAndData;
                    toProto(message: _124.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _124.SignatureAndData): _124.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    encode(message: _124.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.TimestampedSignatureData;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: string | number | import("long").Long;
                    }): _124.TimestampedSignatureData;
                    fromAmino(object: _124.TimestampedSignatureDataAmino): _124.TimestampedSignatureData;
                    toAmino(message: _124.TimestampedSignatureData): _124.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _124.TimestampedSignatureDataAminoMsg): _124.TimestampedSignatureData;
                    toAminoMsg(message: _124.TimestampedSignatureData): _124.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _124.TimestampedSignatureDataProtoMsg): _124.TimestampedSignatureData;
                    toProto(message: _124.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _124.TimestampedSignatureData): _124.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    encode(message: _124.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignBytes;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        timestamp?: string | number | import("long").Long;
                        diversifier?: string;
                        dataType?: _124.DataType;
                        data?: Uint8Array;
                    }): _124.SignBytes;
                    fromAmino(object: _124.SignBytesAmino): _124.SignBytes;
                    toAmino(message: _124.SignBytes): _124.SignBytesAmino;
                    fromAminoMsg(object: _124.SignBytesAminoMsg): _124.SignBytes;
                    toAminoMsg(message: _124.SignBytes): _124.SignBytesAminoMsg;
                    fromProtoMsg(message: _124.SignBytesProtoMsg): _124.SignBytes;
                    toProto(message: _124.SignBytes): Uint8Array;
                    toProtoMsg(message: _124.SignBytes): _124.SignBytesProtoMsg;
                };
                HeaderData: {
                    encode(message: _124.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.HeaderData;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _124.HeaderData;
                    fromAmino(object: _124.HeaderDataAmino): _124.HeaderData;
                    toAmino(message: _124.HeaderData): _124.HeaderDataAmino;
                    fromAminoMsg(object: _124.HeaderDataAminoMsg): _124.HeaderData;
                    toAminoMsg(message: _124.HeaderData): _124.HeaderDataAminoMsg;
                    fromProtoMsg(message: _124.HeaderDataProtoMsg): _124.HeaderData;
                    toProto(message: _124.HeaderData): Uint8Array;
                    toProtoMsg(message: _124.HeaderData): _124.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    encode(message: _124.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _124.ClientStateData;
                    fromAmino(object: _124.ClientStateDataAmino): _124.ClientStateData;
                    toAmino(message: _124.ClientStateData): _124.ClientStateDataAmino;
                    fromAminoMsg(object: _124.ClientStateDataAminoMsg): _124.ClientStateData;
                    toAminoMsg(message: _124.ClientStateData): _124.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _124.ClientStateDataProtoMsg): _124.ClientStateData;
                    toProto(message: _124.ClientStateData): Uint8Array;
                    toProtoMsg(message: _124.ClientStateData): _124.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    encode(message: _124.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _124.ConsensusStateData;
                    fromAmino(object: _124.ConsensusStateDataAmino): _124.ConsensusStateData;
                    toAmino(message: _124.ConsensusStateData): _124.ConsensusStateDataAmino;
                    fromAminoMsg(object: _124.ConsensusStateDataAminoMsg): _124.ConsensusStateData;
                    toAminoMsg(message: _124.ConsensusStateData): _124.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _124.ConsensusStateDataProtoMsg): _124.ConsensusStateData;
                    toProto(message: _124.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _124.ConsensusStateData): _124.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    encode(message: _124.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _118.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").Long;
                        };
                    }): _124.ConnectionStateData;
                    fromAmino(object: _124.ConnectionStateDataAmino): _124.ConnectionStateData;
                    toAmino(message: _124.ConnectionStateData): _124.ConnectionStateDataAmino;
                    fromAminoMsg(object: _124.ConnectionStateDataAminoMsg): _124.ConnectionStateData;
                    toAminoMsg(message: _124.ConnectionStateData): _124.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _124.ConnectionStateDataProtoMsg): _124.ConnectionStateData;
                    toProto(message: _124.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _124.ConnectionStateData): _124.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    encode(message: _124.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _109.State;
                            ordering?: _109.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _124.ChannelStateData;
                    fromAmino(object: _124.ChannelStateDataAmino): _124.ChannelStateData;
                    toAmino(message: _124.ChannelStateData): _124.ChannelStateDataAmino;
                    fromAminoMsg(object: _124.ChannelStateDataAminoMsg): _124.ChannelStateData;
                    toAminoMsg(message: _124.ChannelStateData): _124.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _124.ChannelStateDataProtoMsg): _124.ChannelStateData;
                    toProto(message: _124.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _124.ChannelStateData): _124.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    encode(message: _124.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _124.PacketCommitmentData;
                    fromAmino(object: _124.PacketCommitmentDataAmino): _124.PacketCommitmentData;
                    toAmino(message: _124.PacketCommitmentData): _124.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _124.PacketCommitmentDataAminoMsg): _124.PacketCommitmentData;
                    toAminoMsg(message: _124.PacketCommitmentData): _124.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _124.PacketCommitmentDataProtoMsg): _124.PacketCommitmentData;
                    toProto(message: _124.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _124.PacketCommitmentData): _124.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    encode(message: _124.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _124.PacketAcknowledgementData;
                    fromAmino(object: _124.PacketAcknowledgementDataAmino): _124.PacketAcknowledgementData;
                    toAmino(message: _124.PacketAcknowledgementData): _124.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _124.PacketAcknowledgementDataAminoMsg): _124.PacketAcknowledgementData;
                    toAminoMsg(message: _124.PacketAcknowledgementData): _124.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _124.PacketAcknowledgementDataProtoMsg): _124.PacketAcknowledgementData;
                    toProto(message: _124.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _124.PacketAcknowledgementData): _124.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _124.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _124.PacketReceiptAbsenceData;
                    fromAmino(object: _124.PacketReceiptAbsenceDataAmino): _124.PacketReceiptAbsenceData;
                    toAmino(message: _124.PacketReceiptAbsenceData): _124.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _124.PacketReceiptAbsenceDataAminoMsg): _124.PacketReceiptAbsenceData;
                    toAminoMsg(message: _124.PacketReceiptAbsenceData): _124.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _124.PacketReceiptAbsenceDataProtoMsg): _124.PacketReceiptAbsenceData;
                    toProto(message: _124.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _124.PacketReceiptAbsenceData): _124.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    encode(message: _124.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: string | number | import("long").Long;
                    }): _124.NextSequenceRecvData;
                    fromAmino(object: _124.NextSequenceRecvDataAmino): _124.NextSequenceRecvData;
                    toAmino(message: _124.NextSequenceRecvData): _124.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _124.NextSequenceRecvDataAminoMsg): _124.NextSequenceRecvData;
                    toAminoMsg(message: _124.NextSequenceRecvData): _124.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _124.NextSequenceRecvDataProtoMsg): _124.NextSequenceRecvData;
                    toProto(message: _124.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _124.NextSequenceRecvData): _124.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _125.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ClientState;
                    fromPartial(object: {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: string | number | import("long").Long;
                            denominator?: string | number | import("long").Long;
                        };
                        trustingPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        unbondingPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxClockDrift?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        frozenHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        latestHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    }): _125.ClientState;
                    fromAmino(object: _125.ClientStateAmino): _125.ClientState;
                    toAmino(message: _125.ClientState): _125.ClientStateAmino;
                    fromAminoMsg(object: _125.ClientStateAminoMsg): _125.ClientState;
                    toAminoMsg(message: _125.ClientState): _125.ClientStateAminoMsg;
                    fromProtoMsg(message: _125.ClientStateProtoMsg): _125.ClientState;
                    toProto(message: _125.ClientState): Uint8Array;
                    toProtoMsg(message: _125.ClientState): _125.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _125.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ConsensusState;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _125.ConsensusState;
                    fromAmino(object: _125.ConsensusStateAmino): _125.ConsensusState;
                    toAmino(message: _125.ConsensusState): _125.ConsensusStateAmino;
                    fromAminoMsg(object: _125.ConsensusStateAminoMsg): _125.ConsensusState;
                    toAminoMsg(message: _125.ConsensusState): _125.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _125.ConsensusStateProtoMsg): _125.ConsensusState;
                    toProto(message: _125.ConsensusState): Uint8Array;
                    toProtoMsg(message: _125.ConsensusState): _125.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _125.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        header1?: {
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
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
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
                            trustedHeight?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            trustedValidators?: {
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
                        header2?: {
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
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
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
                            trustedHeight?: {
                                revisionNumber?: string | number | import("long").Long;
                                revisionHeight?: string | number | import("long").Long;
                            };
                            trustedValidators?: {
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
                    }): _125.Misbehaviour;
                    fromAmino(object: _125.MisbehaviourAmino): _125.Misbehaviour;
                    toAmino(message: _125.Misbehaviour): _125.MisbehaviourAmino;
                    fromAminoMsg(object: _125.MisbehaviourAminoMsg): _125.Misbehaviour;
                    toAminoMsg(message: _125.Misbehaviour): _125.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _125.MisbehaviourProtoMsg): _125.Misbehaviour;
                    toProto(message: _125.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _125.Misbehaviour): _125.MisbehaviourProtoMsg;
                };
                Header: {
                    encode(message: _125.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Header;
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
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
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
                        trustedHeight?: {
                            revisionNumber?: string | number | import("long").Long;
                            revisionHeight?: string | number | import("long").Long;
                        };
                        trustedValidators?: {
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
                    }): _125.Header;
                    fromAmino(object: _125.HeaderAmino): _125.Header;
                    toAmino(message: _125.Header): _125.HeaderAmino;
                    fromAminoMsg(object: _125.HeaderAminoMsg): _125.Header;
                    toAminoMsg(message: _125.Header): _125.HeaderAminoMsg;
                    fromProtoMsg(message: _125.HeaderProtoMsg): _125.Header;
                    toProto(message: _125.Header): Uint8Array;
                    toProtoMsg(message: _125.Header): _125.HeaderProtoMsg;
                };
                Fraction: {
                    encode(message: _125.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Fraction;
                    fromPartial(object: {
                        numerator?: string | number | import("long").Long;
                        denominator?: string | number | import("long").Long;
                    }): _125.Fraction;
                    fromAmino(object: _125.FractionAmino): _125.Fraction;
                    toAmino(message: _125.Fraction): _125.FractionAmino;
                    fromAminoMsg(object: _125.FractionAminoMsg): _125.Fraction;
                    toAminoMsg(message: _125.Fraction): _125.FractionAminoMsg;
                    fromProtoMsg(message: _125.FractionProtoMsg): _125.Fraction;
                    toProto(message: _125.Fraction): Uint8Array;
                    toProtoMsg(message: _125.Fraction): _125.FractionProtoMsg;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _250.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _251.MsgClientImpl;
                    };
                    client: {
                        v1: _252.MsgClientImpl;
                    };
                    connection: {
                        v1: _253.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _105.QueryDenomTraceRequest): Promise<_105.QueryDenomTraceResponse>;
                            denomTraces(request?: _105.QueryDenomTracesRequest): Promise<_105.QueryDenomTracesResponse>;
                            params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _111.QueryChannelRequest): Promise<_111.QueryChannelResponse>;
                            channels(request?: _111.QueryChannelsRequest): Promise<_111.QueryChannelsResponse>;
                            connectionChannels(request: _111.QueryConnectionChannelsRequest): Promise<_111.QueryConnectionChannelsResponse>;
                            channelClientState(request: _111.QueryChannelClientStateRequest): Promise<_111.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _111.QueryChannelConsensusStateRequest): Promise<_111.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _111.QueryPacketCommitmentRequest): Promise<_111.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _111.QueryPacketCommitmentsRequest): Promise<_111.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _111.QueryPacketReceiptRequest): Promise<_111.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _111.QueryPacketAcknowledgementRequest): Promise<_111.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _111.QueryPacketAcknowledgementsRequest): Promise<_111.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _111.QueryUnreceivedPacketsRequest): Promise<_111.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _111.QueryUnreceivedAcksRequest): Promise<_111.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _111.QueryNextSequenceReceiveRequest): Promise<_111.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _115.QueryClientStateRequest): Promise<_115.QueryClientStateResponse>;
                            clientStates(request?: _115.QueryClientStatesRequest): Promise<_115.QueryClientStatesResponse>;
                            consensusState(request: _115.QueryConsensusStateRequest): Promise<_115.QueryConsensusStateResponse>;
                            consensusStates(request: _115.QueryConsensusStatesRequest): Promise<_115.QueryConsensusStatesResponse>;
                            clientStatus(request: _115.QueryClientStatusRequest): Promise<_115.QueryClientStatusResponse>;
                            clientParams(request?: _115.QueryClientParamsRequest): Promise<_115.QueryClientParamsResponse>;
                            upgradedClientState(request?: _115.QueryUpgradedClientStateRequest): Promise<_115.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _115.QueryUpgradedConsensusStateRequest): Promise<_115.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _120.QueryConnectionRequest): Promise<_120.QueryConnectionResponse>;
                            connections(request?: _120.QueryConnectionsRequest): Promise<_120.QueryConnectionsResponse>;
                            clientConnections(request: _120.QueryClientConnectionsRequest): Promise<_120.QueryClientConnectionsResponse>;
                            connectionClientState(request: _120.QueryConnectionClientStateRequest): Promise<_120.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _120.QueryConnectionConsensusStateRequest): Promise<_120.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
