import { Any } from '../../codegen/google/protobuf/any';
import { Grant } from '../../codegen/cosmos/authz/v1beta1/authz';
import { Message } from '../types';
export declare const BuildMsgExec: (grantee: string, msgs: Any[]) => Message;
export declare const BuildMsgGrant: (granter: string, grantee: string, grantValue?: Grant) => Message;
export declare const BuildMsgRevoke: (granter: string, grantee: string, msgTypeUrl: string) => Message;
