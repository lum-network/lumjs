"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LumSignOnlyChainId = exports.LumMessageSigner = exports.LumWalletSigningVersion = exports.PrivateKeyLength = exports.getLumHdPath = exports.HDPath = exports.LumBech32PrefixConsPub = exports.LumBech32PrefixConsAddr = exports.LumBech32PrefixValPub = exports.LumBech32PrefixValAddr = exports.LumBech32PrefixAccPub = exports.LumBech32PrefixAccAddr = exports.MicroLumDenom = exports.LumDenom = exports.LumExponent = void 0;
/**
 * Lum Exponent
 * 1 lum = 10^6 ulum
 */
exports.LumExponent = 6;
/**
 * Lum Coin denomination
 */
exports.LumDenom = 'lum';
/**
 * Micro Lum Coin denomination
 */
exports.MicroLumDenom = 'ulum';
/**
 * Lum Network Bech32 prefix of an account's address
 */
exports.LumBech32PrefixAccAddr = 'lum';
/**
 * Lum Network Bech32 prefix of an account's public key
 */
exports.LumBech32PrefixAccPub = 'lumpub';
/**
 * Lum Network Bech32 prefix of a validator's operator address
 */
exports.LumBech32PrefixValAddr = 'lumvaloper';
/**
 * Lum Network Bech32 prefix of a validator's operator public key
 */
exports.LumBech32PrefixValPub = 'lumvaloperpub';
/**
 * Lum Network Bech32 prefix of a consensus node address
 */
exports.LumBech32PrefixConsAddr = 'lumvalcons';
/**
 * Lum Network Bech32 prefix of a consensus node public key
 */
exports.LumBech32PrefixConsPub = 'lumvalconspub';
/**
 * Lum Network HDPath
 *
 * @see https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
 * @see https://github.com/satoshilabs/slips/blob/master/slip-0044.md
 */
exports.HDPath = "m/44'/880'/0'/";
/**
 * Get a Lum Network HDPath for a specified account index
 *
 * @param accountIndex appended at the end of the default Lum derivation path
 */
const getLumHdPath = (accountIndex = 0, walletIndex = 0) => {
    return exports.HDPath + accountIndex.toString() + '/' + walletIndex.toString();
};
exports.getLumHdPath = getLumHdPath;
/**
 * Private Key length
 */
exports.PrivateKeyLength = 32;
/**
 * Signing version of the SDK
 */
exports.LumWalletSigningVersion = '1';
/**
 * Signing wallets
 */
var LumMessageSigner;
(function (LumMessageSigner) {
    LumMessageSigner["PAPER"] = "lum-sdk/paper";
    LumMessageSigner["LEDGER"] = "lum-sdk/ledger";
    LumMessageSigner["OFFLINE"] = "lum-sdk/offline";
})(LumMessageSigner || (exports.LumMessageSigner = LumMessageSigner = {}));
/**
 * Chain ID used for message signature by wallet implementations that require one
 */
exports.LumSignOnlyChainId = 'lum-signature-only';
//# sourceMappingURL=index.js.map