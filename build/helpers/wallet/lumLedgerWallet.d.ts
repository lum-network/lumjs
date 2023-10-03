import Transport from '@ledgerhq/hw-transport';
import Cosmos from '@ledgerhq/hw-app-cosmos';
import { SignMode } from '../../codegen/cosmos/tx/signing/v1beta1/signing';
import { LumTypes } from '..';
import { LumWallet } from '.';
import { SignDoc } from '../../codegen/cosmos/tx/v1beta1/tx';
export declare class LumLedgerWallet extends LumWallet {
    cosmosApp: Cosmos;
    private hdPath?;
    constructor(transport: Transport, scrambleKey?: string);
    signingMode: () => SignMode;
    canChangeAccount: () => boolean;
    /**
     * Gets the connected application configuration
     */
    getAppConfiguration: () => Promise<{
        test_mode: boolean;
        version: string;
        device_locked: boolean;
        major: number;
    }>;
    useAccount: (hdPath: string, addressPrefix: string) => Promise<boolean>;
    sign: () => Promise<Uint8Array>;
    signTransaction: (doc: LumTypes.Doc) => Promise<[SignDoc, Uint8Array]>;
    signMessage: (msg: string) => Promise<LumTypes.SignMsg>;
}
