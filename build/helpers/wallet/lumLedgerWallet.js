"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LumLedgerWallet = void 0;
const hw_app_cosmos_1 = __importDefault(require("@ledgerhq/hw-app-cosmos"));
const crypto_1 = require("@cosmjs/crypto");
const signing_1 = require("../../codegen/cosmos/tx/signing/v1beta1/signing");
const __1 = require("..");
const _1 = require(".");
const registry_1 = require("../registry");
class LumLedgerWallet extends _1.LumWallet {
    cosmosApp;
    hdPath;
    constructor(transport, scrambleKey = 'CSM') {
        super();
        this.cosmosApp = new hw_app_cosmos_1.default(transport, scrambleKey);
    }
    signingMode = () => {
        return signing_1.SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    };
    canChangeAccount = () => {
        return true;
    };
    /**
     * Gets the connected application configuration
     */
    getAppConfiguration = async () => {
        return this.cosmosApp.getAppConfiguration();
    };
    useAccount = async (hdPath, addressPrefix) => {
        const { address, publicKey } = await this.cosmosApp.getAddress(hdPath, addressPrefix);
        this.hdPath = hdPath;
        this.address = address;
        this.publicKey = __1.LumUtils.fromHex(publicKey);
        return true;
    };
    sign = async () => {
        throw new Error('Feature not supported.');
    };
    signTransaction = async (doc) => {
        if (!this.hdPath) {
            throw new Error('No account selected.');
        }
        // Implementation only works using Legacy Amino payload.
        //
        // Useful doc & code:
        // sign call: https://github.com/LedgerHQ/ledgerjs/blob/master/packages/hw-app-cosmos/src/Cosmos.js
        // Expected tx format: https://github.com/cosmos/ledger-cosmos/blob/master/docs/TXSPEC.md
        const signerIndex = __1.LumUtils.uint8IndexOf(doc.signers.map((signer) => signer.publicKey), this.publicKey);
        if (signerIndex === -1) {
            throw new Error('Signer not found in document');
        }
        const msg = {
            'account_number': doc.signers[signerIndex].accountNumber.toString(),
            'chain_id': doc.chainId,
            'fee': doc.fee,
            'memo': doc.memo,
            'msgs': doc.messages.map((msg) => registry_1.aminoTypes.toAmino(msg)),
            'sequence': doc.signers[signerIndex].sequence.toString(),
        };
        const { signature, return_code } = await this.cosmosApp.sign(this.hdPath, JSON.stringify(__1.LumUtils.sortJSON(msg)));
        if (!signature || return_code === 0) {
            throw new Error(`Failed to sign message: error code ${return_code}`);
        }
        const sig = crypto_1.ExtendedSecp256k1Signature.fromDer(signature);
        return [__1.LumUtils.generateSignDoc(doc, signerIndex, this.signingMode()), new Uint8Array([...sig.r(32), ...sig.s(32)])];
    };
    signMessage = async (msg) => {
        if (!this.hdPath) {
            throw new Error('No account selected.');
        }
        // Implementation only works using Legacy Amino payload.
        // We must simulate an empty transaction to get a valid signature from the device
        //
        // The transaction will not work if broadcasted anyway. This is intented to avoid wrong usage of this feature
        // that is only provided for basic message signature and verification
        const msgToSign = {
            'account_number': '0',
            'chain_id': __1.LumConstants.LumSignOnlyChainId,
            'fee': {},
            'memo': msg,
            'msgs': [],
            'sequence': '0',
        };
        const { signature, return_code } = await this.cosmosApp.sign(this.hdPath, JSON.stringify(__1.LumUtils.sortJSON(msgToSign)));
        if (!signature || return_code === 0) {
            throw new Error(`Failed to sign message: error code ${return_code}`);
        }
        const sig = crypto_1.ExtendedSecp256k1Signature.fromDer(signature);
        return {
            address: this.getAddress(),
            publicKey: this.getPublicKey(),
            msg: msg,
            sig: new Uint8Array([...sig.r(32), ...sig.s(32)]),
            version: __1.LumConstants.LumWalletSigningVersion,
            signer: __1.LumConstants.LumMessageSigner.LEDGER,
        };
    };
}
exports.LumLedgerWallet = LumLedgerWallet;
//# sourceMappingURL=lumLedgerWallet.js.map