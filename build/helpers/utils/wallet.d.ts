/**
 * KeyStore storage format (web3 secret storage format)
 */
export interface KeyStore {
    version: number;
    id: string;
    crypto: {
        ciphertext: string;
        cipherparams: {
            iv: string;
        };
        cipher: string;
        kdf: string;
        kdfparams: {
            dklen: number;
            salt: string;
            c: number;
            prf: string;
        };
        /** Must use sha3 according to web3 secret storage spec. */
        mac: string;
    };
}
/**
 * Generate a KeyStore using a privateKey and a password
 *
 * @param privateKey private key to encrypt in the keystore
 * @param password keystore password
 */
export declare const generateKeyStore: (privateKey: Uint8Array, password: string) => KeyStore;
/**
 * Decyphers the private key from the provided KeyStore
 *
 * @param keystore keystore data (either stringified or loaded)
 * @param password keystore password
 */
export declare const getPrivateKeyFromKeystore: (keystore: string | KeyStore, password: string) => Uint8Array;
/**
 * Generate a random mnemonic of 12 or 24 words
 *
 * @see https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki#generating-the-mnemonic
 *
 * @param words The number of words requested
 */
export declare const generateMnemonic: (words?: 12 | 24) => string;
