import { registry, MessageComposer } from '../../../codegen/ibc/core/channel/v1/tx.registry';
import {
    MsgAcknowledgement,
    MsgChannelCloseConfirm,
    MsgChannelCloseInit,
    MsgChannelOpenAck,
    MsgChannelOpenConfirm,
    MsgChannelOpenInit,
    MsgChannelOpenTry,
    MsgRecvPacket,
    MsgTimeout,
    MsgTimeoutOnClose,
} from '../../../codegen/ibc/core/channel/v1/tx';
import { Packet, Channel } from '../../../codegen/ibc/core/channel/v1/channel';
import { Height } from '../../../codegen/ibc/core/client/v1/client';
import { Message } from '../../types';

const {
    acknowledgement: acknowledgementMessage,
    channelCloseConfirm,
    channelCloseInit,
    channelOpenAck,
    channelOpenConfirm,
    channelOpenInit,
    channelOpenTry,
    recvPacket,
    timeout,
    timeoutOnClose,
} = MessageComposer.withTypeUrl;

export const BuildMsgAcknowledgement = (acknowledgement: Uint8Array, proofAcked: Uint8Array, signer: string, packet?: Packet, proofHeight?: Height): Message => {
    const value: MsgAcknowledgement = {
        acknowledgement,
        proofAcked,
        signer,
        packet,
        proofHeight,
    };
    return acknowledgementMessage(value);
};

export const BuildMsgChannelCloseConfirm = (channelId: string, portId: string, signer: string, proofInit: Uint8Array, proofHeight?: Height): Message => {
    const value: MsgChannelCloseConfirm = {
        channelId,
        portId,
        signer,
        proofInit,
        proofHeight,
    };
    return channelCloseConfirm(value);
};

export const BuildMsgChannelCloseInit = (channelId: string, signer: string, portId: string): Message => {
    const value: MsgChannelCloseInit = {
        channelId,
        signer,
        portId,
    };
    return channelCloseInit(value);
};

export const BuildMsgChannelOpenAck = (
    portId: string,
    channelId: string,
    counterpartyChannelId: string,
    counterpartyVersion: string,
    signer: string,
    proofTry: Uint8Array,
    proofHeight?: Height,
): Message => {
    const value: MsgChannelOpenAck = {
        portId,
        channelId,
        counterpartyChannelId,
        counterpartyVersion,
        signer,
        proofTry,
        proofHeight,
    };
    return channelOpenAck(value);
};

export const BuildMsgChannelOpenConfirm = (channelId: string, portId: string, signer: string, proofAck: Uint8Array, proofHeight?: Height): Message => {
    const value: MsgChannelOpenConfirm = {
        channelId,
        portId,
        signer,
        proofAck,
        proofHeight,
    };
    return channelOpenConfirm(value);
};

export const BuildMsgChannelOpenInit = (portId: string, signer: string, channel?: Channel): Message => {
    const value: MsgChannelOpenInit = {
        portId,
        signer,
        channel,
    };
    return channelOpenInit(value);
};

export const BuildMsgChannelOpenTry = (
    portId: string,
    previousChannelId: string,
    counterpartyVersion: string,
    signer: string,
    proofInit: Uint8Array,
    channel?: Channel,
    proofHeight?: Height,
): Message => {
    const value: MsgChannelOpenTry = {
        portId,
        previousChannelId,
        counterpartyVersion,
        signer,
        proofInit,
        channel,
        proofHeight,
    };
    return channelOpenTry(value);
};

export const BuildMsgRecvPacket = (signer: string, proofCommitment: Uint8Array, packet?: Packet, proofHeight?: Height): Message => {
    const value: MsgRecvPacket = {
        signer,
        proofCommitment,
        packet,
        proofHeight,
    };
    return recvPacket(value);
};

export const BuildMsgTimeout = (nextSequenceRecv: Long.Long, proofUnreceived: Uint8Array, signer: string, packet?: Packet, proofHeight?: Height): Message => {
    const value: MsgTimeout = {
        nextSequenceRecv,
        packet,
        proofHeight,
        proofUnreceived,
        signer,
    };
    return timeout(value);
};

export const BuildMsgTimeoutOnClose = (nextSequenceRecv: Long.Long, signer: string, proofClose: Uint8Array, proofUnreceived: Uint8Array, packet?: Packet, proofHeight?: Height): Message => {
    const value: MsgTimeoutOnClose = {
        nextSequenceRecv,
        signer,
        proofClose,
        proofUnreceived,
        packet,
        proofHeight,
    };
    return timeoutOnClose(value);
};

const ibcChannelMsgUrl: { [key: string]: string } = {};

registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    ibcChannelMsgUrl[msgType] = url;
});

export { ibcChannelMsgUrl };
