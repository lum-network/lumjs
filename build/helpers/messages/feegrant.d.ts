import { Any } from '../../codegen/google/protobuf/any';
import { Message } from '../types';
export declare const BuildMsgGrantAllowance: (granter: string, grantee: string, allowance?: Any) => Message;
export declare const BuildMsgRevokeAllowance: (granter: string, grantee: string) => Message;
declare const feeGrantMsgUrl: {
    [key: string]: string;
};
export { feeGrantMsgUrl };
