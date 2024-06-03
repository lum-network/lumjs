import { decodePubkey } from '@cosmjs/proto-signing';
import { assert } from '@cosmjs/utils';

import { Any } from '../codegen/google/protobuf/any';
import { BaseAccount, ModuleAccount } from '../codegen/cosmos/auth/v1beta1/auth';
import { BaseVestingAccount, ContinuousVestingAccount, DelayedVestingAccount, PeriodicVestingAccount } from '../codegen/cosmos/vesting/v1beta1/vesting';
import { EthAccount } from '../codegen/injective/types/v1beta1/account';

import { Account } from '../types';

function accountFromBaseAccount(input: BaseAccount): Account {
    const { address, pubKey, accountNumber, sequence } = input;
    const pubkey = pubKey ? decodePubkey(pubKey) : null;

    return {
        address: address,
        pubkey: pubkey,
        accountNumber: Number(accountNumber),
        sequence: Number(sequence),
    };
}

export const accountFromAny = (input: Any): Account => {
    const { typeUrl, value } = input;
    switch (typeUrl) {
        case '/cosmos.auth.v1beta1.BaseAccount':
            return accountFromBaseAccount(BaseAccount.decode(value));
        case '/cosmos.auth.v1beta1.ModuleAccount': {
            const moduleAccount = ModuleAccount.decode(value);
            assert(moduleAccount.baseAccount);
            return Object.assign(accountFromBaseAccount(moduleAccount.baseAccount), { _moduleAccount: moduleAccount });
        }
        case '/cosmos.vesting.v1beta1.BaseVestingAccount': {
            const vestingAccount = BaseVestingAccount.decode(value);
            assert(vestingAccount.baseAccount);
            return Object.assign(accountFromBaseAccount(vestingAccount.baseAccount), {
                _baseVestingAccount: vestingAccount,
            });
        }
        case '/cosmos.vesting.v1beta1.ContinuousVestingAccount': {
            const vestingAccount = ContinuousVestingAccount.decode(value);
            assert(vestingAccount.baseVestingAccount);
            assert(vestingAccount.baseVestingAccount.baseAccount);
            return Object.assign(accountFromBaseAccount(vestingAccount.baseVestingAccount.baseAccount), {
                _continuousVestingAccount: vestingAccount,
            });
        }
        case '/cosmos.vesting.v1beta1.DelayedVestingAccount': {
            const vestingAccount = DelayedVestingAccount.decode(value);
            assert(vestingAccount.baseVestingAccount);
            assert(vestingAccount.baseVestingAccount.baseAccount);
            return Object.assign(accountFromBaseAccount(vestingAccount.baseVestingAccount.baseAccount), {
                _delayedVestingAccount: vestingAccount,
            });
        }
        case '/cosmos.vesting.v1beta1.PeriodicVestingAccount': {
            const vestingAccount = PeriodicVestingAccount.decode(value);
            assert(vestingAccount.baseVestingAccount);
            assert(vestingAccount.baseVestingAccount.baseAccount);
            return Object.assign(accountFromBaseAccount(vestingAccount.baseVestingAccount.baseAccount), {
                _periodicVestingAccount: vestingAccount,
            });
        }
        case '/injective.types.v1beta1.EthAccount': {
            const ethAccount = EthAccount.decode(value);
            assert(ethAccount.baseAccount);
            return Object.assign(accountFromBaseAccount(ethAccount.baseAccount), {
                _ethAccount: ethAccount,
            });
        }
        default:
            throw new Error(`Unsupported type: '${typeUrl}'`);
    }
};
