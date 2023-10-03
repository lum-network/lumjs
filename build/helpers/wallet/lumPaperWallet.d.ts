import { SignMode } from '../../codegen/cosmos/tx/signing/v1beta1/signing';
import { LumTypes } from '..';
import { LumWallet } from '.';
import { SignDoc } from '../../codegen/cosmos/tx/v1beta1/tx';
export declare class LumPaperWallet extends LumWallet {
    private readonly mnemonic?;
    private privateKey?;
    /**
     * Create a LumPaperWallet instance based on a mnemonic or a private key
     * This constructor is not intended to be used directly as it does not initialize the underlying key pair
     * Better use the provided static LumPaperWallet builders
     *
     * @param mnemonicOrPrivateKey mnemonic (string) used to derive the private key or private key (Uint8Array)
     */
    constructor(mnemonicOrPrivateKey: string | Uint8Array);
    signingMode: () => SignMode;
    canChangeAccount: () => boolean;
    useAccount: (hdPath?: string, addressPrefix?: string) => Promise<boolean>;
    sign: (data: Uint8Array) => Promise<Uint8Array>;
    signTransaction: (doc: LumTypes.Doc) => Promise<[SignDoc, Uint8Array]>;
    signMessage: (msg: string) => Promise<LumTypes.SignMsg>;
}
