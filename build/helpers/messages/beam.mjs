import { MessageComposer } from '../../codegen/lum/network/beam/tx.registry';
const { claimBeam, openBeam, updateBeam } = MessageComposer.withTypeUrl;
export const BuildMsgClaimBeam = (id, claimerAddress, secret) => {
    const value = {
        id,
        claimerAddress,
        secret,
    };
    return claimBeam(value);
};
export const BuildMsgOpenBeam = (id, creatorAddress, claimAddress, amount, secret, schema, data, closesAtBlock = 0, claimExpiresAtBlock = 0) => {
    const value = {
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
export const BuildMsgUpdateBeam = (id, updaterAddress, amount, status, data, cancelReason = '', hideContent = false, claimAddress = '', closesAtBlock = 0, claimExpiresAtBlock = 0) => {
    const value = {
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
//# sourceMappingURL=beam.js.map