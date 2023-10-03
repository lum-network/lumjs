"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LumRegistry = exports.protoRegistry = exports.extendCosmosProtoRegistry = exports.ExtendedRegistry = exports.aminoTypes = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const tx_1 = require("../../codegen/cosmos/tx/v1beta1/tx");
const codegen_1 = require("../../codegen");
const stargate_1 = require("@cosmjs/stargate");
const coin_1 = require("../../codegen/cosmos/base/v1beta1/coin");
const keys_1 = require("../../codegen/cosmos/crypto/secp256k1/keys");
const auth_1 = require("../../codegen/cosmos/auth/v1beta1/auth");
exports.aminoTypes = new stargate_1.AminoTypes({
    ...codegen_1.cosmosAminoConverters,
    ...codegen_1.lumAminoConverters,
    ...codegen_1.ibcAminoConverters,
});
class ExtendedRegistry extends proto_signing_1.Registry {
    decodeTx = (tx) => {
        return tx_1.Tx.decode(tx);
    };
}
exports.ExtendedRegistry = ExtendedRegistry;
exports.extendCosmosProtoRegistry = [
    ...codegen_1.cosmosProtoRegistry,
    ['/cosmos.auth.v1beta1.BaseAccount', auth_1.BaseAccount],
    ['/cosmos.auth.v1beta1.ModuleAccount', auth_1.ModuleAccount],
    ['/cosmos.auth.v1beta1.Params', auth_1.Params],
    ['/cosmos.base.v1beta1.Coin', coin_1.Coin],
    ['/cosmos.base.v1beta1.DecCoin', coin_1.DecCoin],
    ['/cosmos.base.v1beta1.IntProto', coin_1.IntProto],
    ['/cosmos.base.v1beta1.DecProto', coin_1.DecProto],
    ['/cosmos.crypto.ed25519.PubKey', keys_1.PubKey],
    ['/cosmos.crypto.secp256k1.PubKey', keys_1.PubKey],
    ['/cosmos.crypto.secp256k1.PrivKey', keys_1.PrivKey],
];
exports.protoRegistry = [...exports.extendCosmosProtoRegistry, ...codegen_1.lumProtoRegistry, ...codegen_1.ibcProtoRegistry];
exports.LumRegistry = new ExtendedRegistry(exports.protoRegistry);
//# sourceMappingURL=index.js.map