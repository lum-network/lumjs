"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beamMsgUrl = exports.BuildMsgUpdateBeam = exports.BuildMsgOpenBeam = exports.BuildMsgClaimBeam = void 0;
const tx_registry_1 = require("../../codegen/lum/network/beam/tx.registry");
const { claimBeam, openBeam, updateBeam } = tx_registry_1.MessageComposer.withTypeUrl;
const BuildMsgClaimBeam = (id, claimerAddress, secret) => {
    const value = {
        id,
        claimerAddress,
        secret,
    };
    return claimBeam(value);
};
exports.BuildMsgClaimBeam = BuildMsgClaimBeam;
const BuildMsgOpenBeam = (id, creatorAddress, claimAddress, amount, secret, schema, data, closesAtBlock = 0, claimExpiresAtBlock = 0) => {
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
exports.BuildMsgOpenBeam = BuildMsgOpenBeam;
const BuildMsgUpdateBeam = (id, updaterAddress, amount, status, data, cancelReason = '', hideContent = false, claimAddress = '', closesAtBlock = 0, claimExpiresAtBlock = 0) => {
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
exports.BuildMsgUpdateBeam = BuildMsgUpdateBeam;
const beamMsgUrl = {};
exports.beamMsgUrl = beamMsgUrl;
tx_registry_1.registry.forEach(([url, _]) => {
    const parts = url.split('.');
    const msgType = parts[parts.length - 1];
    beamMsgUrl[msgType] = url;
});
//# sourceMappingURL=beam.js.map