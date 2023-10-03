import Transport from '@ledgerhq/hw-transport';
import { OfflineSigner } from '@cosmjs/proto-signing';
import { LumWallet } from '.';
import { LumUtils } from '..';
export declare class LumWalletFactory {
    /**
     * Create a LumWallet instance based on a private key (secp256k1)
     *
     * @param privateKey wallet private key (secp256k1)
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromPrivateKey: (privateKey: Uint8Array, addressPrefix?: string) => Promise<LumWallet>;
    /**
     * Create a LumWallet instance based on a mnemonic and a derivation path
     *
     * @param mnemonic mnemonic used to derive the private key
     * @param hdPath BIP44 derivation path
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromMnemonic: (mnemonic: string, hdPath?: string, addressPrefix?: string) => Promise<LumWallet>;
    /**
     * Create a LumWallet instance based on a keystore
     *
     * @param keystore keystore used to decypher the private key
     * @param password keystore password
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromKeyStore: (keystore: string | LumUtils.KeyStore, password: string, addressPrefix?: string) => Promise<LumWallet>;
    /**
     * Create a LumWallet instance based on an OfflineDirectSigner instance compatible with Comsjs based implementations.
     *
     * @param offlineSigner OfflineDirectSigner instance compatible with Comsjs based implementations
     */
    static fromOfflineSigner: (offlineSigner: OfflineSigner) => Promise<LumWallet>;
    /**
     * Create a LumWallet instance based on a ledger transport
     *
     * @param transport Ledger transport to use (https://github.com/LedgerHQ/ledgerjs)
     * @param hdPath BIP44 derivation path
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromLedgerTransport: (transport: Transport, hdPath?: string, addressPrefix?: string) => Promise<LumWallet>;
}
