import { Message, Coin } from '../types';
import { BeamData, BeamState } from '../../codegen/lum/network/beam/beam';
export declare const BuildMsgClaimBeam: (id: string, claimerAddress: string, secret: string) => Message;
export declare const BuildMsgOpenBeam: (id: string, creatorAddress: string, claimAddress: string, amount: Coin, secret: string, schema: string, data?: BeamData, closesAtBlock?: number, claimExpiresAtBlock?: number) => Message;
export declare const BuildMsgUpdateBeam: (id: string, updaterAddress: string, amount: Coin, status?: BeamState, data?: BeamData, cancelReason?: string, hideContent?: boolean, claimAddress?: string, closesAtBlock?: number, claimExpiresAtBlock?: number) => Message;
