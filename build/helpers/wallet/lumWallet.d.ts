import { SignMode } from '../../codegen/cosmos/tx/signing/v1beta1/signing';
import { SignDoc } from '../../codegen/cosmos/tx/v1beta1/tx';
import { LumTypes } from '..';
export declare abstract class LumWallet {
    protected publicKey?: Uint8Array;
    protected address?: string;
    getAddress: () => string;
    /**
     * Gets the current wallet public key
     * @see {@link LumWallet.useAccount}
     *
     * @returns wallet public key (secp256k1)
     */
    getPublicKey: () => Uint8Array;
    /**
     * Gets the wallet signin mode
     */
    abstract signingMode(): SignMode;
    /**
     * Whether or not the wallet support changing account
     * Basically only wallet initialized using a private key should not be able to do so
     * @see {@link LumWallet.useAccount}
     */
    abstract canChangeAccount(): boolean;
    /**
     * Change the wallet to use
     *
     * @param hdPath BIP44 HD Path
     * @param addressPrefix prefix to use (ex: lum)
     */
    abstract useAccount(hdPath: string, addressPrefix: string): Promise<boolean>;
    /**
     * Sign a raw payload.
     * This method might not be available for all types of wallets such as Ledger.
     *
     * @param data the payload to sign directly
     */
    abstract sign(data: Uint8Array): Promise<Uint8Array>;
    /**
     * Sign a transaction document using a LumWallet
     *
     * @param doc document to sign
     */
    abstract signTransaction(doc: LumTypes.Doc): Promise<[SignDoc, Uint8Array]>;
    /**
     * Sign a message using a LumWallet
     * Provided for signature generation and verification as signature will depend on the wallet payload implementation
     *
     * @param msg message to sign
     */
    abstract signMessage(msg: string): Promise<LumTypes.SignMsg>;
}
