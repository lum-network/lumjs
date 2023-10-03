"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildMsgTimeoutOnClose = exports.BuildMsgTimeout = exports.BuildMsgRecvPacket = exports.BuildMsgChannelOpenTry = exports.BuildMsgChannelOpenInit = exports.BuildMsgChannelOpenConfirm = exports.BuildMsgChannelOpenAck = exports.BuildMsgChannelCloseInit = exports.BuildMsgChannelCloseConfirm = exports.BuildMsgAcknowledgement = void 0;
const tx_registry_1 = require("../../../codegen/ibc/core/channel/v1/tx.registry");
const { acknowledgement: acknowledgementMessage, channelCloseConfirm, channelCloseInit, channelOpenAck, channelOpenConfirm, channelOpenInit, channelOpenTry, recvPacket, timeout, timeoutOnClose, } = tx_registry_1.MessageComposer.withTypeUrl;
const BuildMsgAcknowledgement = (acknowledgement, proofAcked, signer, packet, proofHeight) => {
    const value = {
        acknowledgement,
        proofAcked,
        signer,
        packet,
        proofHeight,
    };
    return acknowledgementMessage(value);
};
exports.BuildMsgAcknowledgement = BuildMsgAcknowledgement;
const BuildMsgChannelCloseConfirm = (channelId, portId, signer, proofInit, proofHeight) => {
    const value = {
        channelId,
        portId,
        signer,
        proofInit,
        proofHeight,
    };
    return channelCloseConfirm(value);
};
exports.BuildMsgChannelCloseConfirm = BuildMsgChannelCloseConfirm;
const BuildMsgChannelCloseInit = (channelId, signer, portId) => {
    const value = {
        channelId,
        signer,
        portId,
    };
    return channelCloseInit(value);
};
exports.BuildMsgChannelCloseInit = BuildMsgChannelCloseInit;
const BuildMsgChannelOpenAck = (portId, channelId, counterpartyChannelId, counterpartyVersion, signer, proofTry, proofHeight) => {
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
exports.BuildMsgChannelOpenAck = BuildMsgChannelOpenAck;
const BuildMsgChannelOpenConfirm = (channelId, portId, signer, proofAck, proofHeight) => {
    const value = {
        channelId,
        portId,
        signer,
        proofAck,
        proofHeight,
    };
    return channelOpenConfirm(value);
};
exports.BuildMsgChannelOpenConfirm = BuildMsgChannelOpenConfirm;
const BuildMsgChannelOpenInit = (portId, signer, channel) => {
    const value = {
        portId,
        signer,
        channel,
    };
    return channelOpenInit(value);
};
exports.BuildMsgChannelOpenInit = BuildMsgChannelOpenInit;
const BuildMsgChannelOpenTry = (portId, previousChannelId, counterpartyVersion, signer, proofInit, channel, proofHeight) => {
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
exports.BuildMsgChannelOpenTry = BuildMsgChannelOpenTry;
const BuildMsgRecvPacket = (signer, proofCommitment, packet, proofHeight) => {
    const value = {
        signer,
        proofCommitment,
        packet,
        proofHeight,
    };
    return recvPacket(value);
};
exports.BuildMsgRecvPacket = BuildMsgRecvPacket;
const BuildMsgTimeout = (nextSequenceRecv, proofUnreceived, signer, packet, proofHeight) => {
    const value = {
        nextSequenceRecv,
        packet,
        proofHeight,
        proofUnreceived,
        signer,
    };
    return timeout(value);
};
exports.BuildMsgTimeout = BuildMsgTimeout;
const BuildMsgTimeoutOnClose = (nextSequenceRecv, signer, proofClose, proofUnreceived, packet, proofHeight) => {
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
exports.BuildMsgTimeoutOnClose = BuildMsgTimeoutOnClose;
//# sourceMappingURL=MsgIbcChannel.js.map