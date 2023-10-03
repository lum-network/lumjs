import { Message, Coin } from '../types';
import { MsgClaimBeam, MsgOpenBeam, MsgUpdateBeam } from '../../codegen/lum/network/beam/tx';
import { registry, MessageComposer } from '../../codegen/lum/network/beam/tx.registry';
import { BeamData, BeamState } from '../../codegen/lum/network/beam/beam';

const { claimBeam, openBeam, updateBeam } = MessageComposer.withTypeUrl;

export const BuildMsgClaimBeam = (id: string, claimerAddress: string, secret: string): Message => {
    const value: MsgClaimBeam = {
        id,
        claimerAddress,
        secret,
    };
    return claimBeam(value);
};

export const BuildMsgOpenBeam = (
    id: string,
    creatorAddress: string,
    claimAddress: string,
    amount: Coin,
    secret: string,
    schema: string,
    data?: BeamData,
    closesAtBlock = 0,
    claimExpiresAtBlock = 0,
): Message => {
    const value: MsgOpenBeam = {
        id,
        creatorAddress,
        claimAddress,
        amount,
        secret,
        schema,
        data,
        claimExpiresAtBlock,
        closesAtBlock,
    };
    return openBeam(value);
};

export const BuildMsgUpdateBeam = (
    id: string,
    updaterAddress: string,
    amount: Coin,
    status?: BeamState,
    data?: BeamData,
    cancelReason = '',
    hideContent = false,
    claimAddress = '',
    closesAtBlock = 0,
    claimExpiresAtBlock = 0,
): Message => {
    const value: MsgUpdateBeam = {
        id,
        updaterAddress,
        amount,
        status,
        data,
        cancelReason,
        hideContent,
        claimAddress,
        closesAtBlock,
        claimExpiresAtBlock,
    };
    return updateBeam(value);
};

const beamMsgUrl: { [key: string]: string } = {};

registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    beamMsgUrl[msgType] = url;
});

export { beamMsgUrl };
