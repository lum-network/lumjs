import { Message } from '../../types';
import { Packet, Channel } from '../../../codegen/ibc/core/channel/v1/channel';
import { Height } from '../../../codegen/ibc/core/client/v1/client';
export declare const BuildMsgAcknowledgement: (acknowledgement: Uint8Array, proofAcked: Uint8Array, signer: string, packet?: Packet, proofHeight?: Height) => Message;
export declare const BuildMsgChannelCloseConfirm: (channelId: string, portId: string, signer: string, proofInit: Uint8Array, proofHeight?: Height) => Message;
export declare const BuildMsgChannelCloseInit: (channelId: string, signer: string, portId: string) => Message;
export declare const BuildMsgChannelOpenAck: (portId: string, channelId: string, counterpartyChannelId: string, counterpartyVersion: string, signer: string, proofTry: Uint8Array, proofHeight?: Height) => Message;
export declare const BuildMsgChannelOpenConfirm: (channelId: string, portId: string, signer: string, proofAck: Uint8Array, proofHeight?: Height) => Message;
export declare const BuildMsgChannelOpenInit: (portId: string, signer: string, channel?: Channel) => Message;
export declare const BuildMsgChannelOpenTry: (portId: string, previousChannelId: string, counterpartyVersion: string, signer: string, proofInit: Uint8Array, channel?: Channel, proofHeight?: Height) => Message;
export declare const BuildMsgRecvPacket: (signer: string, proofCommitment: Uint8Array, packet?: Packet, proofHeight?: Height) => Message;
export declare const BuildMsgTimeout: (nextSequenceRecv: Long.Long, proofUnreceived: Uint8Array, signer: string, packet?: Packet, proofHeight?: Height) => Message;
export declare const BuildMsgTimeoutOnClose: (nextSequenceRecv: Long.Long, signer: string, proofClose: Uint8Array, proofUnreceived: Uint8Array, packet?: Packet, proofHeight?: Height) => Message;
declare const ibcChannelMsgUrl: {
    [key: string]: string;
};
export { ibcChannelMsgUrl };
