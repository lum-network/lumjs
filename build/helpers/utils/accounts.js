"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountFromAny = void 0;
const math_1 = require("@cosmjs/math");
const utils_1 = require("@cosmjs/utils");
const proto_signing_1 = require("@cosmjs/proto-signing");
const auth_1 = require("../../codegen/cosmos/auth/v1beta1/auth");
const vesting_1 = require("../../codegen/cosmos/vesting/v1beta1/vesting");
function uint64FromProto(input) {
    return math_1.Uint64.fromString(input.toString());
}
function accountFromBaseAccount(input) {
    const { address, pubKey, accountNumber, sequence } = input;
    const pubkey = (0, proto_signing_1.decodePubkey)(pubKey);
    return {
        address: address,
        pubkey: pubkey,
        accountNumber: uint64FromProto(accountNumber).toNumber(),
        sequence: uint64FromProto(sequence).toNumber(),
    };
}
const accountFromAny = (input) => {
    const { typeUrl, value } = input;
    switch (typeUrl) {
        case '/cosmos.auth.v1beta1.BaseAccount':
            return accountFromBaseAccount(auth_1.BaseAccount.decode(value));
        case '/cosmos.auth.v1beta1.ModuleAccount': {
            const moduleAccount = auth_1.ModuleAccount.decode(value);
            (0, utils_1.assert)(moduleAccount.baseAccount);
            return Object.assign(accountFromBaseAccount(moduleAccount.baseAccount), { _moduleAccount: moduleAccount });
        }
        case '/cosmos.vesting.v1beta1.BaseVestingAccount': {
            const vestingAccount = vesting_1.BaseVestingAccount.decode(value);
            (0, utils_1.assert)(vestingAccount.baseAccount);
            return Object.assign(accountFromBaseAccount(vestingAccount.baseAccount), { _baseVestingAccount: vestingAccount });
        }
        case '/cosmos.vesting.v1beta1.ContinuousVestingAccount': {
            const vestingAccount = vesting_1.ContinuousVestingAccount.decode(value);
            (0, utils_1.assert)(vestingAccount.baseVestingAccount);
            (0, utils_1.assert)(vestingAccount.baseVestingAccount.baseAccount);
            return Object.assign(accountFromBaseAccount(vestingAccount.baseVestingAccount.baseAccount), { _continuousVestingAccount: vestingAccount });
        }
        case '/cosmos.vesting.v1beta1.DelayedVestingAccount': {
            const vestingAccount = vesting_1.DelayedVestingAccount.decode(value);
            (0, utils_1.assert)(vestingAccount.baseVestingAccount);
            (0, utils_1.assert)(vestingAccount.baseVestingAccount.baseAccount);
            return Object.assign(accountFromBaseAccount(vestingAccount.baseVestingAccount.baseAccount), { _delayedVestingAccount: vestingAccount });
        }
        case '/cosmos.vesting.v1beta1.PeriodicVestingAccount': {
            const vestingAccount = vesting_1.PeriodicVestingAccount.decode(value);
            (0, utils_1.assert)(vestingAccount.baseVestingAccount);
            (0, utils_1.assert)(vestingAccount.baseVestingAccount.baseAccount);
            return Object.assign(accountFromBaseAccount(vestingAccount.baseVestingAccount.baseAccount), { _periodicVestingAccount: vestingAccount });
        }
        default:
            throw new Error(`Unsupported type: '${typeUrl}'`);
    }
};
exports.accountFromAny = accountFromAny;
//# sourceMappingURL=accounts.js.map