import { GeneratedType, Registry } from '@cosmjs/proto-signing';
import { Tx } from '../../codegen/cosmos/tx/v1beta1/tx';
import { AminoTypes } from '@cosmjs/stargate';
export declare const aminoTypes: AminoTypes;
export declare class ExtendedRegistry extends Registry {
    decodeTx: (tx: Uint8Array) => Tx;
}
export declare const extendCosmosProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const protoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const LumRegistry: ExtendedRegistry;
