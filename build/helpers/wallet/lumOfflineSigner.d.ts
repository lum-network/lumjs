import { OfflineSigner } from '@cosmjs/proto-signing';
import { SignMode } from '../../codegen/cosmos/tx/signing/v1beta1/signing';
import { LumTypes } from '..';
import { LumWallet } from '.';
import { SignDoc } from '../../codegen/cosmos/tx/v1beta1/tx';
export declare class LumOfflineSignerWallet extends LumWallet {
    private readonly offlineSigner;
    /**
     * Create a LumOfflineSignerWallet instance based on an OfflineSigner instance compatible with Comsjs based
     * implementations.
     * This constructor is not intended to be used directly as it does not initialize the underlying key pair
     * Better use the provided static LumPaperWallet builders
     *
     * @param mnemonicOrPrivateKey mnemonic (string) used to derive the private key or private key (Uint8Array)
     */
    constructor(offlineSigner: OfflineSigner);
    signingMode: () => SignMode;
    canChangeAccount: () => boolean;
    useAccount: () => Promise<boolean>;
    sign: () => Promise<Uint8Array>;
    signTransaction: (doc: LumTypes.Doc) => Promise<[SignDoc, Uint8Array]>;
    signMessage: (msg: string) => Promise<LumTypes.SignMsg>;
}
