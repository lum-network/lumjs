"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicKeyToProto = exports.isAddressValid = exports.generatePrivateKey = exports.getPrivateKeyFromMnemonic = exports.getPrivateKeyFromSeed = exports.getSeedFromMnemonic = exports.getPublicKeyFromPrivateKey = exports.getAddressFromPublicKey = void 0;
const keys_1 = require("../../codegen/cosmos/crypto/secp256k1/keys");
const any_1 = require("../../codegen/google/protobuf/any");
const crypto_1 = require("@cosmjs/crypto");
const encoding_1 = require("./encoding");
const constants_1 = require("../constants");
/**
 * Derives a bech32 wallet address from a public key (secp256k1)
 *
 * @param publicKey public key to derive the address from
 * @param prefix address prefix to use (ex: lum)
 */
const getAddressFromPublicKey = (publicKey, prefix = constants_1.LumBech32PrefixAccAddr) => {
    if (publicKey.length !== 33) {
        throw new Error(`Invalid Secp256k1 pubkey length (compressed): ${publicKey.length}`);
    }
    const hash1 = (0, crypto_1.sha256)(publicKey);
    const hash2 = (0, crypto_1.ripemd160)(hash1);
    return (0, encoding_1.toBech32)(prefix, hash2);
};
exports.getAddressFromPublicKey = getAddressFromPublicKey;
/**
 * Get a public key from a private key (secp256k1)
 *
 * @param privateKey private key to get the public key from
 */
const getPublicKeyFromPrivateKey = async (privateKey) => {
    const { pubkey } = await crypto_1.Secp256k1.makeKeypair(privateKey);
    return crypto_1.Secp256k1.compressPubkey(pubkey);
};
exports.getPublicKeyFromPrivateKey = getPublicKeyFromPrivateKey;
/**
 * Get the seed from a mnemonic phrase
 *
 * @see https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki
 *
 * @param mnemonic english mnemonic phrase
 */
const getSeedFromMnemonic = async (mnemonic) => {
    const mnemonicChecked = new crypto_1.EnglishMnemonic(mnemonic);
    // TODO: add support for more languages
    return crypto_1.Bip39.mnemonicToSeed(mnemonicChecked);
};
exports.getSeedFromMnemonic = getSeedFromMnemonic;
/**
 * Get the derivated private key from the provided seed
 *
 * @param seed to derive the private key from
 * @param hdPath derivation path to use
 */
const getPrivateKeyFromSeed = (seed, hdPath = (0, constants_1.getLumHdPath)(0)) => {
    const { privkey } = crypto_1.Slip10.derivePath(crypto_1.Slip10Curve.Secp256k1, seed, (0, crypto_1.stringToPath)(hdPath));
    return privkey;
};
exports.getPrivateKeyFromSeed = getPrivateKeyFromSeed;
/**
 * Get the derivated private key from the provided mnemonic
 *
 * @param mnemonic mnemonic phrase
 * @param hdPath derivation path to use
 */
const getPrivateKeyFromMnemonic = async (mnemonic, hdPath = (0, constants_1.getLumHdPath)(0)) => {
    const seed = await (0, exports.getSeedFromMnemonic)(mnemonic);
    return (0, exports.getPrivateKeyFromSeed)(seed, hdPath);
};
exports.getPrivateKeyFromMnemonic = getPrivateKeyFromMnemonic;
/**
 * Generates a cryptographically secure random private key
 */
const generatePrivateKey = () => {
    return crypto_1.Random.getBytes(constants_1.PrivateKeyLength);
};
exports.generatePrivateKey = generatePrivateKey;
/**
 * Verify that a wallet address is valid
 *
 * @param address address to check
 * @param prefix prefix to check (will not be checked if not provided)
 */
const isAddressValid = (address, prefix = constants_1.LumBech32PrefixAccAddr) => {
    try {
        const decoded = (0, encoding_1.fromBech32)(address);
        return (!prefix || prefix === decoded.prefix) && decoded.data.length === 20;
    }
    catch (err) {
        return false;
    }
};
exports.isAddressValid = isAddressValid;
/**
 * Converts a public key into its protorpc version
 *
 * @param publicKey public key to convert into proto
 */
const publicKeyToProto = (publicKey) => {
    const pubkeyProto = keys_1.PubKey.fromPartial({ key: publicKey });
    return any_1.Any.fromPartial({
        typeUrl: '/cosmos.crypto.secp256k1.PubKey',
        value: Uint8Array.from(keys_1.PubKey.encode(pubkeyProto).finish()),
    });
};
exports.publicKeyToProto = publicKeyToProto;
//# sourceMappingURL=keys.js.map