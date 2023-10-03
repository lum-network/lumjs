/**
 * Lum Exponent
 * 1 lum = 10^6 ulum
 */
export declare const LumExponent = 6;
/**
 * Lum Coin denomination
 */
export declare const LumDenom = "lum";
/**
 * Micro Lum Coin denomination
 */
export declare const MicroLumDenom = "ulum";
/**
 * Lum Network Bech32 prefix of an account's address
 */
export declare const LumBech32PrefixAccAddr = "lum";
/**
 * Lum Network Bech32 prefix of an account's public key
 */
export declare const LumBech32PrefixAccPub = "lumpub";
/**
 * Lum Network Bech32 prefix of a validator's operator address
 */
export declare const LumBech32PrefixValAddr = "lumvaloper";
/**
 * Lum Network Bech32 prefix of a validator's operator public key
 */
export declare const LumBech32PrefixValPub = "lumvaloperpub";
/**
 * Lum Network Bech32 prefix of a consensus node address
 */
export declare const LumBech32PrefixConsAddr = "lumvalcons";
/**
 * Lum Network Bech32 prefix of a consensus node public key
 */
export declare const LumBech32PrefixConsPub = "lumvalconspub";
/**
 * Lum Network HDPath
 *
 * @see https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
 * @see https://github.com/satoshilabs/slips/blob/master/slip-0044.md
 */
export declare const HDPath = "m/44'/880'/0'/";
/**
 * Get a Lum Network HDPath for a specified account index
 *
 * @param accountIndex appended at the end of the default Lum derivation path
 */
export declare const getLumHdPath: (accountIndex?: number, walletIndex?: number) => string;
/**
 * Private Key length
 */
export declare const PrivateKeyLength = 32;
/**
 * Signing version of the SDK
 */
export declare const LumWalletSigningVersion = "1";
/**
 * Signing wallets
 */
export declare enum LumMessageSigner {
    PAPER = "lum-sdk/paper",
    LEDGER = "lum-sdk/ledger",
    OFFLINE = "lum-sdk/offline"
}
/**
 * Chain ID used for message signature by wallet implementations that require one
 */
export declare const LumSignOnlyChainId = "lum-signature-only";
