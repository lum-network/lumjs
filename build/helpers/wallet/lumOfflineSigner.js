"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LumOfflineSignerWallet = void 0;
const long_1 = __importDefault(require("long"));
const signing_1 = require("../../codegen/cosmos/tx/signing/v1beta1/signing");
const __1 = require("..");
const _1 = require(".");
const registry_1 = require("../registry");
class LumOfflineSignerWallet extends _1.LumWallet {
    offlineSigner;
    /**
     * Create a LumOfflineSignerWallet instance based on an OfflineSigner instance compatible with Comsjs based
     * implementations.
     * This constructor is not intended to be used directly as it does not initialize the underlying key pair
     * Better use the provided static LumPaperWallet builders
     *
     * @param mnemonicOrPrivateKey mnemonic (string) used to derive the private key or private key (Uint8Array)
     */
    constructor(offlineSigner) {
        super();
        this.offlineSigner = offlineSigner;
    }
    signingMode = () => {
        if (typeof this.offlineSigner.signAmino === 'function') {
            return signing_1.SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
        }
        else if (typeof this.offlineSigner.signDirect === 'function') {
            return signing_1.SignMode.SIGN_MODE_DIRECT;
        }
        throw 'Unknown offline signer mode';
    };
    canChangeAccount = () => {
        return false;
    };
    useAccount = async () => {
        const accounts = await this.offlineSigner.getAccounts();
        if (accounts.length === 0) {
            throw new Error('No account available.');
        }
        this.publicKey = accounts[0].pubkey;
        this.address = accounts[0].address;
        return true;
    };
    sign = async () => {
        throw new Error('Feature not supported.');
    };
    signTransaction = async (doc) => {
        if (!this.address || !this.publicKey) {
            throw new Error('No account selected.');
        }
        const signerIndex = __1.LumUtils.uint8IndexOf(doc.signers.map((signer) => signer.publicKey), this.publicKey);
        if (signerIndex === -1) {
            throw new Error('Signer not found in document');
        }
        if (this.signingMode() === signing_1.SignMode.SIGN_MODE_DIRECT) {
            const signDoc = __1.LumUtils.generateSignDoc(doc, signerIndex, this.signingMode());
            const response = await this.offlineSigner.signDirect(this.address, signDoc);
            return [response.signed, __1.LumUtils.fromBase64(response.signature.signature)];
        }
        else if (this.signingMode() === signing_1.SignMode.SIGN_MODE_LEGACY_AMINO_JSON) {
            const response = await this.offlineSigner.signAmino(this.address, {
                'account_number': doc.signers[signerIndex].accountNumber.toString(),
                'chain_id': doc.chainId,
                'fee': doc.fee,
                'memo': doc.memo || '',
                'msgs': doc.messages.map((msg) => registry_1.aminoTypes.toAmino(msg)),
                'sequence': doc.signers[signerIndex].sequence.toString(),
            });
            if (response.signed) {
                // Fees and memo could have been edited by the offline signer
                doc.fee = response.signed.fee;
                doc.memo = response.signed.memo;
            }
            return [__1.LumUtils.generateSignDoc(doc, signerIndex, this.signingMode()), __1.LumUtils.fromBase64(response.signature.signature)];
        }
        throw 'Unknown offline signer mode';
    };
    signMessage = async (msg) => {
        if (!this.address || !this.publicKey) {
            throw new Error('No account selected.');
        }
        const signDoc = {
            bodyBytes: __1.LumUtils.toAscii(msg),
            authInfoBytes: __1.LumUtils.generateAuthInfoBytes([{ accountNumber: 0, sequence: 0, publicKey: this.getPublicKey() }], { amount: [], gas: '0' }, this.signingMode()),
            chainId: __1.LumConstants.LumSignOnlyChainId,
            accountNumber: long_1.default.fromNumber(0),
        };
        if (this.signingMode() === signing_1.SignMode.SIGN_MODE_DIRECT) {
            const response = await this.offlineSigner.signDirect(this.address, signDoc);
            return {
                address: this.getAddress(),
                publicKey: this.getPublicKey(),
                msg: msg,
                sig: __1.LumUtils.fromBase64(response.signature.signature),
                version: __1.LumConstants.LumWalletSigningVersion,
                signer: __1.LumConstants.LumMessageSigner.OFFLINE,
            };
        }
        else if (typeof this.offlineSigner.signAmino === 'function') {
            throw 'Feature not available for amino signers';
        }
        throw 'Unknown offline signer mode';
    };
}
exports.LumOfflineSignerWallet = LumOfflineSignerWallet;
//# sourceMappingURL=lumOfflineSigner.js.map