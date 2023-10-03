"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LumPaperWallet = void 0;
const signing_1 = require("../../codegen/cosmos/tx/signing/v1beta1/signing");
const __1 = require("..");
const _1 = require(".");
class LumPaperWallet extends _1.LumWallet {
    mnemonic;
    privateKey;
    /**
     * Create a LumPaperWallet instance based on a mnemonic or a private key
     * This constructor is not intended to be used directly as it does not initialize the underlying key pair
     * Better use the provided static LumPaperWallet builders
     *
     * @param mnemonicOrPrivateKey mnemonic (string) used to derive the private key or private key (Uint8Array)
     */
    constructor(mnemonicOrPrivateKey) {
        super();
        if (__1.LumUtils.isUint8Array(mnemonicOrPrivateKey)) {
            this.privateKey = mnemonicOrPrivateKey;
        }
        else {
            this.mnemonic = mnemonicOrPrivateKey;
        }
    }
    signingMode = () => {
        return signing_1.SignMode.SIGN_MODE_DIRECT;
    };
    canChangeAccount = () => {
        return !!this.mnemonic;
    };
    useAccount = async (hdPath = __1.LumConstants.getLumHdPath(0, 0), addressPrefix = __1.LumConstants.LumBech32PrefixAccAddr) => {
        if (this.mnemonic) {
            this.privateKey = await __1.LumUtils.getPrivateKeyFromMnemonic(this.mnemonic, hdPath);
            this.publicKey = await __1.LumUtils.getPublicKeyFromPrivateKey(this.privateKey);
            this.address = __1.LumUtils.getAddressFromPublicKey(this.publicKey, addressPrefix);
            return true;
        }
        else if (this.privateKey) {
            this.publicKey = await __1.LumUtils.getPublicKeyFromPrivateKey(this.privateKey);
            this.address = __1.LumUtils.getAddressFromPublicKey(this.publicKey, addressPrefix);
            return false;
        }
        throw new Error('No available mnemonic or private key.');
    };
    sign = async (data) => {
        if (!this.privateKey || !this.publicKey) {
            throw new Error('No account selected.');
        }
        const signature = await __1.LumUtils.generateSignature(data, this.privateKey);
        return signature;
    };
    signTransaction = async (doc) => {
        if (!this.privateKey || !this.publicKey) {
            throw new Error('No account selected.');
        }
        const signerIndex = __1.LumUtils.uint8IndexOf(doc.signers.map((signer) => signer.publicKey), this.publicKey);
        if (signerIndex === -1) {
            throw new Error('Signer not found in document');
        }
        const signDoc = __1.LumUtils.generateSignDoc(doc, signerIndex, this.signingMode());
        const signBytes = __1.LumUtils.generateSignDocBytes(signDoc);
        const hashedMessage = __1.LumUtils.sha256(signBytes);
        const signature = await __1.LumUtils.generateSignature(hashedMessage, this.privateKey);
        return [signDoc, signature];
    };
    signMessage = async (msg) => {
        if (!this.privateKey || !this.publicKey) {
            throw new Error('No account selected.');
        }
        const signature = await __1.LumUtils.generateSignature(__1.LumUtils.sha256(__1.LumUtils.toAscii(msg)), this.privateKey);
        return {
            address: this.getAddress(),
            publicKey: this.getPublicKey(),
            msg: msg,
            sig: signature,
            version: __1.LumConstants.LumWalletSigningVersion,
            signer: __1.LumConstants.LumMessageSigner.PAPER,
        };
    };
}
exports.LumPaperWallet = LumPaperWallet;
//# sourceMappingURL=lumPaperWallet.js.map