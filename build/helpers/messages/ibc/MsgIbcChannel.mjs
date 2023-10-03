import { MessageComposer } from '../../../codegen/ibc/core/channel/v1/tx.registry';
const { acknowledgement: acknowledgementMessage, channelCloseConfirm, channelCloseInit, channelOpenAck, channelOpenConfirm, channelOpenInit, channelOpenTry, recvPacket, timeout, timeoutOnClose, } = MessageComposer.withTypeUrl;
export const BuildMsgAcknowledgement = (acknowledgement, proofAcked, signer, packet, proofHeight) => {
    const value = {
        acknowledgement,
        proofAcked,
        signer,
        packet,
        proofHeight,
    };
    return acknowledgementMessage(value);
};
export const BuildMsgChannelCloseConfirm = (channelId, portId, signer, proofInit, proofHeight) => {
    const value = {
        channelId,
        portId,
        signer,
        proofInit,
        proofHeight,
    };
    return channelCloseConfirm(value);
};
export const BuildMsgChannelCloseInit = (channelId, signer, portId) => {
    const value = {
        channelId,
        signer,
        portId,
    };
    return channelCloseInit(value);
};
export const BuildMsgChannelOpenAck = (portId, channelId, counterpartyChannelId, counterpartyVersion, signer, proofTry, proofHeight) => {
    const value = {
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
export const BuildMsgChannelOpenConfirm = (channelId, portId, signer, proofAck, proofHeight) => {
    const value = {
        channelId,
        portId,
        signer,
        proofAck,
        proofHeight,
    };
    return channelOpenConfirm(value);
};
export const BuildMsgChannelOpenInit = (portId, signer, channel) => {
    const value = {
        portId,
        signer,
        channel,
    };
    return channelOpenInit(value);
};
export const BuildMsgChannelOpenTry = (portId, previousChannelId, counterpartyVersion, signer, proofInit, channel, proofHeight) => {
    const value = {
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
export const BuildMsgRecvPacket = (signer, proofCommitment, packet, proofHeight) => {
    const value = {
        signer,
        proofCommitment,
        packet,
        proofHeight,
    };
    return recvPacket(value);
};
export const BuildMsgTimeout = (nextSequenceRecv, proofUnreceived, signer, packet, proofHeight) => {
    const value = {
        nextSequenceRecv,
        packet,
        proofHeight,
        proofUnreceived,
        signer,
    };
    return timeout(value);
};
export const BuildMsgTimeoutOnClose = (nextSequenceRecv, signer, proofClose, proofUnreceived, packet, proofHeight) => {
    const value = {
        nextSequenceRecv,
        signer,
        proofClose,
        proofUnreceived,
        packet,
        proofHeight,
    };
    return timeoutOnClose(value);
};
//# sourceMappingURL=MsgIbcChannel.js.map