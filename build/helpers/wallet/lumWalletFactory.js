"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LumWalletFactory = void 0;
const _1 = require(".");
const lumLedgerWallet_1 = require("./lumLedgerWallet");
const __1 = require("..");
class LumWalletFactory {
    /**
     * Create a LumWallet instance based on a private key (secp256k1)
     *
     * @param privateKey wallet private key (secp256k1)
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromPrivateKey = async (privateKey, addressPrefix = __1.LumConstants.LumBech32PrefixAccAddr) => {
        const wallet = new _1.LumPaperWallet(privateKey);
        await wallet.useAccount(__1.LumConstants.getLumHdPath(0, 0), addressPrefix);
        return wallet;
    };
    /**
     * Create a LumWallet instance based on a mnemonic and a derivation path
     *
     * @param mnemonic mnemonic used to derive the private key
     * @param hdPath BIP44 derivation path
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromMnemonic = async (mnemonic, hdPath = __1.LumConstants.getLumHdPath(0, 0), addressPrefix = __1.LumConstants.LumBech32PrefixAccAddr) => {
        const wallet = new _1.LumPaperWallet(mnemonic);
        await wallet.useAccount(hdPath, addressPrefix);
        return wallet;
    };
    /**
     * Create a LumWallet instance based on a keystore
     *
     * @param keystore keystore used to decypher the private key
     * @param password keystore password
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromKeyStore = async (keystore, password, addressPrefix = __1.LumConstants.LumBech32PrefixAccAddr) => {
        const privateKey = __1.LumUtils.getPrivateKeyFromKeystore(keystore, password);
        const wallet = new _1.LumPaperWallet(privateKey);
        await wallet.useAccount(__1.LumConstants.getLumHdPath(0, 0), addressPrefix);
        return wallet;
    };
    /**
     * Create a LumWallet instance based on an OfflineDirectSigner instance compatible with Comsjs based implementations.
     *
     * @param offlineSigner OfflineDirectSigner instance compatible with Comsjs based implementations
     */
    static fromOfflineSigner = async (offlineSigner) => {
        const wallet = new _1.LumOfflineSignerWallet(offlineSigner);
        await wallet.useAccount();
        return wallet;
    };
    /**
     * Create a LumWallet instance based on a ledger transport
     *
     * @param transport Ledger transport to use (https://github.com/LedgerHQ/ledgerjs)
     * @param hdPath BIP44 derivation path
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromLedgerTransport = async (transport, hdPath = __1.LumConstants.getLumHdPath(0, 0), addressPrefix = __1.LumConstants.LumBech32PrefixAccAddr) => {
        const wallet = new lumLedgerWallet_1.LumLedgerWallet(transport);
        await wallet.useAccount(hdPath, addressPrefix);
        return wallet;
    };
}
exports.LumWalletFactory = LumWalletFactory;
//# sourceMappingURL=lumWalletFactory.js.map