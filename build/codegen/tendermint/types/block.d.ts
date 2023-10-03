import { Header, HeaderAmino, HeaderSDKType, Data, DataAmino, DataSDKType, Commit, CommitAmino, CommitSDKType } from "./types";
import { EvidenceList, EvidenceListAmino, EvidenceListSDKType } from "./evidence";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface Block {
    header: Header | undefined;
    data: Data | undefined;
    evidence: EvidenceList | undefined;
    lastCommit: Commit | undefined;
}
export interface BlockProtoMsg {
    typeUrl: "/tendermint.types.Block";
    value: Uint8Array;
}
export interface BlockAmino {
    header?: HeaderAmino | undefined;
    data?: DataAmino | undefined;
    evidence?: EvidenceListAmino | undefined;
    last_commit?: CommitAmino | undefined;
}
export interface BlockAminoMsg {
    type: "/tendermint.types.Block";
    value: BlockAmino;
}
export interface BlockSDKType {
    header: HeaderSDKType | undefined;
    data: DataSDKType | undefined;
    evidence: EvidenceListSDKType | undefined;
    last_commit: CommitSDKType | undefined;
}
export declare const Block: {
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Block;
    fromPartial(object: DeepPartial<Block>): Block;
    fromAmino(object: BlockAmino): Block;
    toAmino(message: Block): BlockAmino;
    fromAminoMsg(object: BlockAminoMsg): Block;
    fromProtoMsg(message: BlockProtoMsg): Block;
    toProto(message: Block): Uint8Array;
    toProtoMsg(message: Block): BlockProtoMsg;
};
