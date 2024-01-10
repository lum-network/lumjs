/**
 * Lum Exponent
 * 1 lum = 10^6 ulum
 */
export const LUM_EXPONENT = 6;

/**
 * Lum Coin denomination
 */
export const LUM_DENOM = 'lum';

/**
 * Micro Lum Coin denomination
 */
export const MICRO_LUM_DENOM = 'ulum';

/**
 * Lum Network Bech32 prefixes
 */
export enum LumBech32Prefixes {
    ACC_ADDR = 'lum',
    ACC_PUB = 'lumpub',
    VAL_ADDR = 'lumvaloper',
    VAL_PUB = 'lumvaloperpub',
    CONS_ADDR = 'lumvalcons',
    CONS_PUB = 'lumvalconspub',
}

/**
 * Lum Network HDPath
 *
 * @see https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
 * @see https://github.com/satoshilabs/slips/blob/master/slip-0044.md
 */
export const HD_PATH = "m/44'/880'/0'/";

/**
 * Private Key length
 */
export const PRIVATE_KEY_LENGTH = 32;

/**
 * Signing version of the SDK
 */
export const LUM_WALLET_SIGNING_VERSION = '1';

/**
 * Signing wallets
 */
export enum LumMessageSigner {
    PAPER = 'lum-sdk/paper',
    LEDGER = 'lum-sdk/ledger',
    OFFLINE = 'lum-sdk/offline',
}

/**
 * Chain ID used for message signature by wallet implementations that require one
 */
export const LUM_SIGN_ONLY_CHAIN_ID = 'lum-signature-only';
