"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMnemonic = exports.getPrivateKeyFromKeystore = exports.generateKeyStore = void 0;
const cryp = __importStar(require("crypto-browserify"));
const uuid = __importStar(require("uuid"));
const crypto_1 = require("@cosmjs/crypto");
const encoding_1 = require("./encoding");
/**
 * Generate a KeyStore using a privateKey and a password
 *
 * @param privateKey private key to encrypt in the keystore
 * @param password keystore password
 */
const generateKeyStore = (privateKey, password) => {
    const salt = cryp.randomBytes(32);
    const iv = cryp.randomBytes(16);
    const cipherAlg = 'aes-256-ctr';
    const privateKeyHex = (0, encoding_1.keyToHex)(privateKey);
    const kdf = 'pbkdf2';
    const kdfparams = {
        dklen: 32,
        salt: salt.toString('hex'),
        c: 262144,
        prf: 'hmac-sha256',
    };
    const derivedKey = cryp.pbkdf2Sync(Buffer.from(password), salt, kdfparams.c, kdfparams.dklen, 'sha256');
    const cipher = cryp.createCipheriv(cipherAlg, derivedKey.slice(0, 32), iv);
    if (!cipher) {
        throw new Error('Unsupported cipher');
    }
    const ciphertext = Buffer.concat([cipher.update(Buffer.from(privateKeyHex, 'hex')), cipher.final()]);
    const bufferValue = Buffer.concat([derivedKey.slice(16, 32), Buffer.from(ciphertext.toString('hex'), 'hex')]);
    return {
        version: 1,
        id: uuid.v4({
            random: cryp.randomBytes(16),
        }),
        crypto: {
            ciphertext: ciphertext.toString('hex'),
            cipherparams: {
                iv: iv.toString('hex'),
            },
            cipher: cipherAlg,
            kdf,
            kdfparams: kdfparams,
            // mac must use sha3 according to web3 secret storage spec
            mac: (0, encoding_1.sha3)(bufferValue.toString('hex')),
        },
    };
};
exports.generateKeyStore = generateKeyStore;
/**
 * Decyphers the private key from the provided KeyStore
 *
 * @param keystore keystore data (either stringified or loaded)
 * @param password keystore password
 */
const getPrivateKeyFromKeystore = (keystore, password) => {
    const store = typeof keystore === 'string' ? JSON.parse(keystore) : keystore;
    if (store.crypto.kdfparams.prf !== 'hmac-sha256') {
        throw new Error('Unsupported parameters to PBKDF2');
    }
    const derivedKey = cryp.pbkdf2Sync(Buffer.from(password), Buffer.from(store.crypto.kdfparams.salt, 'hex'), store.crypto.kdfparams.c, store.crypto.kdfparams.dklen, 'sha256');
    const ciphertext = Buffer.from(store.crypto.ciphertext, 'hex');
    const bufferValue = Buffer.concat([derivedKey.slice(16, 32), ciphertext]);
    // try sha3 (new / ethereum keystore) mac first
    const mac = (0, encoding_1.sha3)(bufferValue.toString('hex'));
    if (mac !== store.crypto.mac) {
        // the legacy (sha256) mac is next to be checked. pre-testnet keystores used a sha256 digest for the mac.
        // the sha256 mac was not compatible with ethereum keystores, so it was changed to sha3 for mainnet.
        const macLegacy = (0, crypto_1.sha256)(bufferValue);
        if ((0, encoding_1.toHex)(macLegacy) !== store.crypto.mac) {
            throw new Error('Keystore mac check failed (sha3 & sha256) - wrong password?');
        }
    }
    const decipher = cryp.createDecipheriv(store.crypto.cipher, derivedKey.slice(0, 32), Buffer.from(store.crypto.cipherparams.iv, 'hex'));
    return new Uint8Array(Buffer.concat([decipher.update(ciphertext), decipher.final()]));
};
exports.getPrivateKeyFromKeystore = getPrivateKeyFromKeystore;
/**
 * Generate a random mnemonic of 12 or 24 words
 *
 * @see https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki#generating-the-mnemonic
 *
 * @param words The number of words requested
 */
const generateMnemonic = (words = 12) => {
    const entropy = crypto_1.Random.getBytes(words === 12 ? 16 : 32);
    const mnemonic = crypto_1.Bip39.encode(entropy);
    // TODO: add support for more languages
    return mnemonic.toString();
};
exports.generateMnemonic = generateMnemonic;
//# sourceMappingURL=wallet.js.map