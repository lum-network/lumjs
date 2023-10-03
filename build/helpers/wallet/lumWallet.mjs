export class LumWallet {
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
//# sourceMappingURL=lumWallet.js.map