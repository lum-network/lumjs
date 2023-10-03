"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LumWallet = void 0;
class LumWallet {
    publicKey;
    address;
    getAddress = () => {
        if (!this.address) {
            throw new Error('No account selected.');
        }
        return this.address;
    };
    /**
     * Gets the current wallet public key
     * @see {@link LumWallet.useAccount}
     *
     * @returns wallet public key (secp256k1)
     */
    getPublicKey = () => {
        if (!this.publicKey) {
            throw new Error('No account selected.');
        }
        return this.publicKey;
    };
}
exports.LumWallet = LumWallet;
//# sourceMappingURL=lumWallet.js.map