import { Registry } from '@cosmjs/proto-signing';
import { Tx } from '../../codegen/cosmos/tx/v1beta1/tx';
import { cosmosProtoRegistry, cosmosAminoConverters, lumAminoConverters, lumProtoRegistry, ibcProtoRegistry, ibcAminoConverters } from '../../codegen';
import { AminoTypes } from '@cosmjs/stargate';
import { Coin, DecCoin, DecProto, IntProto } from '../../codegen/cosmos/base/v1beta1/coin';
import { PubKey, PrivKey } from '../../codegen/cosmos/crypto/secp256k1/keys';
import { BaseAccount, ModuleAccount, Params as AuthParams } from '../../codegen/cosmos/auth/v1beta1/auth';
export const aminoTypes = new AminoTypes({
    ...cosmosAminoConverters,
    ...lumAminoConverters,
    ...ibcAminoConverters,
});
export class ExtendedRegistry extends Registry {
    decodeTx = (tx) => {
        return Tx.decode(tx);
    };
}
export const extendCosmosProtoRegistry = [
    ...cosmosProtoRegistry,
    ['/cosmos.auth.v1beta1.BaseAccount', BaseAccount],
    ['/cosmos.auth.v1beta1.ModuleAccount', ModuleAccount],
    ['/cosmos.auth.v1beta1.Params', AuthParams],
    ['/cosmos.base.v1beta1.Coin', Coin],
    ['/cosmos.base.v1beta1.DecCoin', DecCoin],
    ['/cosmos.base.v1beta1.IntProto', IntProto],
    ['/cosmos.base.v1beta1.DecProto', DecProto],
    ['/cosmos.crypto.ed25519.PubKey', PubKey],
    ['/cosmos.crypto.secp256k1.PubKey', PubKey],
    ['/cosmos.crypto.secp256k1.PrivKey', PrivKey],
];
export const protoRegistry = [...extendCosmosProtoRegistry, ...lumProtoRegistry, ...ibcProtoRegistry];
export const LumRegistry = new ExtendedRegistry(protoRegistry);
//# sourceMappingURL=index.js.map