/// <reference types="long" />
import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./app/v1alpha1/query";
import * as _6 from "./auth/v1beta1/auth";
import * as _7 from "./auth/v1beta1/genesis";
import * as _8 from "./auth/v1beta1/query";
import * as _9 from "./authz/v1beta1/authz";
import * as _10 from "./authz/v1beta1/event";
import * as _11 from "./authz/v1beta1/genesis";
import * as _12 from "./authz/v1beta1/query";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./bank/v1beta1/authz";
import * as _15 from "./bank/v1beta1/bank";
import * as _16 from "./bank/v1beta1/genesis";
import * as _17 from "./bank/v1beta1/query";
import * as _18 from "./bank/v1beta1/tx";
import * as _19 from "./base/abci/v1beta1/abci";
import * as _20 from "./base/kv/v1beta1/kv";
import * as _21 from "./base/query/v1beta1/pagination";
import * as _22 from "./base/reflection/v1beta1/reflection";
import * as _23 from "./base/reflection/v2alpha1/reflection";
import * as _24 from "./base/snapshots/v1beta1/snapshot";
import * as _25 from "./base/store/v1beta1/commit_info";
import * as _26 from "./base/store/v1beta1/listening";
import * as _27 from "./base/tendermint/v1beta1/query";
import * as _28 from "./base/v1beta1/coin";
import * as _29 from "./capability/v1beta1/capability";
import * as _30 from "./capability/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/genesis";
import * as _32 from "./crisis/v1beta1/tx";
import * as _33 from "./crypto/ed25519/keys";
import * as _34 from "./crypto/hd/v1/hd";
import * as _35 from "./crypto/keyring/v1/record";
import * as _36 from "./crypto/multisig/keys";
import * as _37 from "./crypto/secp256k1/keys";
import * as _38 from "./crypto/secp256r1/keys";
import * as _39 from "./distribution/v1beta1/distribution";
import * as _40 from "./distribution/v1beta1/genesis";
import * as _41 from "./distribution/v1beta1/query";
import * as _42 from "./distribution/v1beta1/tx";
import * as _43 from "./evidence/v1beta1/evidence";
import * as _44 from "./evidence/v1beta1/genesis";
import * as _45 from "./evidence/v1beta1/query";
import * as _46 from "./evidence/v1beta1/tx";
import * as _47 from "./feegrant/v1beta1/feegrant";
import * as _48 from "./feegrant/v1beta1/genesis";
import * as _49 from "./feegrant/v1beta1/query";
import * as _50 from "./feegrant/v1beta1/tx";
import * as _51 from "./genutil/v1beta1/genesis";
import * as _52 from "./gov/v1/genesis";
import * as _53 from "./gov/v1/gov";
import * as _54 from "./gov/v1/query";
import * as _55 from "./gov/v1/tx";
import * as _56 from "./gov/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/gov";
import * as _58 from "./gov/v1beta1/query";
import * as _59 from "./gov/v1beta1/tx";
import * as _60 from "./group/v1/events";
import * as _61 from "./group/v1/genesis";
import * as _62 from "./group/v1/query";
import * as _63 from "./group/v1/tx";
import * as _64 from "./group/v1/types";
import * as _65 from "./mint/v1beta1/genesis";
import * as _66 from "./mint/v1beta1/mint";
import * as _67 from "./mint/v1beta1/query";
import * as _69 from "./nft/v1beta1/event";
import * as _70 from "./nft/v1beta1/genesis";
import * as _71 from "./nft/v1beta1/nft";
import * as _72 from "./nft/v1beta1/query";
import * as _73 from "./nft/v1beta1/tx";
import * as _74 from "./orm/v1/orm";
import * as _75 from "./orm/v1alpha1/schema";
import * as _76 from "./params/v1beta1/params";
import * as _77 from "./params/v1beta1/query";
import * as _78 from "./slashing/v1beta1/genesis";
import * as _79 from "./slashing/v1beta1/query";
import * as _80 from "./slashing/v1beta1/slashing";
import * as _81 from "./slashing/v1beta1/tx";
import * as _82 from "./staking/v1beta1/authz";
import * as _83 from "./staking/v1beta1/genesis";
import * as _84 from "./staking/v1beta1/query";
import * as _85 from "./staking/v1beta1/staking";
import * as _86 from "./staking/v1beta1/tx";
import * as _87 from "./tx/signing/v1beta1/signing";
import * as _88 from "./tx/v1beta1/service";
import * as _89 from "./tx/v1beta1/tx";
import * as _90 from "./upgrade/v1beta1/query";
import * as _91 from "./upgrade/v1beta1/tx";
import * as _92 from "./upgrade/v1beta1/upgrade";
import * as _93 from "./vesting/v1beta1/tx";
import * as _94 from "./vesting/v1beta1/vesting";
import * as _206 from "./app/v1alpha1/query.rpc.Query";
import * as _207 from "./auth/v1beta1/query.rpc.Query";
import * as _208 from "./authz/v1beta1/query.rpc.Query";
import * as _209 from "./bank/v1beta1/query.rpc.Query";
import * as _210 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _211 from "./distribution/v1beta1/query.rpc.Query";
import * as _212 from "./evidence/v1beta1/query.rpc.Query";
import * as _213 from "./feegrant/v1beta1/query.rpc.Query";
import * as _214 from "./gov/v1/query.rpc.Query";
import * as _215 from "./gov/v1beta1/query.rpc.Query";
import * as _216 from "./group/v1/query.rpc.Query";
import * as _217 from "./mint/v1beta1/query.rpc.Query";
import * as _218 from "./nft/v1beta1/query.rpc.Query";
import * as _219 from "./params/v1beta1/query.rpc.Query";
import * as _220 from "./slashing/v1beta1/query.rpc.Query";
import * as _221 from "./staking/v1beta1/query.rpc.Query";
import * as _222 from "./tx/v1beta1/service.rpc.Service";
import * as _223 from "./upgrade/v1beta1/query.rpc.Query";
import * as _224 from "./authz/v1beta1/tx.rpc.msg";
import * as _225 from "./bank/v1beta1/tx.rpc.msg";
import * as _226 from "./crisis/v1beta1/tx.rpc.msg";
import * as _227 from "./distribution/v1beta1/tx.rpc.msg";
import * as _228 from "./evidence/v1beta1/tx.rpc.msg";
import * as _229 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _230 from "./gov/v1/tx.rpc.msg";
import * as _231 from "./gov/v1beta1/tx.rpc.msg";
import * as _232 from "./group/v1/tx.rpc.msg";
import * as _233 from "./nft/v1beta1/tx.rpc.msg";
import * as _234 from "./slashing/v1beta1/tx.rpc.msg";
import * as _235 from "./staking/v1beta1/tx.rpc.msg";
import * as _236 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _237 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _5.QueryConfigRequest): Promise<_5.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _5.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryConfigRequest;
                fromPartial(_: {}): _5.QueryConfigRequest;
                fromAmino(_: _5.QueryConfigRequestAmino): _5.QueryConfigRequest;
                toAmino(_: _5.QueryConfigRequest): _5.QueryConfigRequestAmino;
                fromAminoMsg(object: _5.QueryConfigRequestAminoMsg): _5.QueryConfigRequest;
                toAminoMsg(message: _5.QueryConfigRequest): _5.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _5.QueryConfigRequestProtoMsg): _5.QueryConfigRequest;
                toProto(message: _5.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _5.QueryConfigRequest): _5.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                encode(message: _5.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryConfigResponse;
                fromPartial(object: {
                    config?: {
                        modules?: {
                            name?: string;
                            config?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    };
                }): _5.QueryConfigResponse;
                fromAmino(object: _5.QueryConfigResponseAmino): _5.QueryConfigResponse;
                toAmino(message: _5.QueryConfigResponse): _5.QueryConfigResponseAmino;
                fromAminoMsg(object: _5.QueryConfigResponseAminoMsg): _5.QueryConfigResponse;
                toAminoMsg(message: _5.QueryConfigResponse): _5.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _5.QueryConfigResponseProtoMsg): _5.QueryConfigResponse;
                toProto(message: _5.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _5.QueryConfigResponse): _5.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                encode(message: _4.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.ModuleDescriptor;
                fromPartial(object: {
                    goImport?: string;
                    usePackage?: {
                        name?: string;
                        revision?: number;
                    }[];
                    canMigrateFrom?: {
                        module?: string;
                    }[];
                }): _4.ModuleDescriptor;
                fromAmino(object: _4.ModuleDescriptorAmino): _4.ModuleDescriptor;
                toAmino(message: _4.ModuleDescriptor): _4.ModuleDescriptorAmino;
                fromAminoMsg(object: _4.ModuleDescriptorAminoMsg): _4.ModuleDescriptor;
                toAminoMsg(message: _4.ModuleDescriptor): _4.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _4.ModuleDescriptorProtoMsg): _4.ModuleDescriptor;
                toProto(message: _4.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _4.ModuleDescriptor): _4.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                encode(message: _4.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.PackageReference;
                fromPartial(object: {
                    name?: string;
                    revision?: number;
                }): _4.PackageReference;
                fromAmino(object: _4.PackageReferenceAmino): _4.PackageReference;
                toAmino(message: _4.PackageReference): _4.PackageReferenceAmino;
                fromAminoMsg(object: _4.PackageReferenceAminoMsg): _4.PackageReference;
                toAminoMsg(message: _4.PackageReference): _4.PackageReferenceAminoMsg;
                fromProtoMsg(message: _4.PackageReferenceProtoMsg): _4.PackageReference;
                toProto(message: _4.PackageReference): Uint8Array;
                toProtoMsg(message: _4.PackageReference): _4.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                encode(message: _4.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MigrateFromInfo;
                fromPartial(object: {
                    module?: string;
                }): _4.MigrateFromInfo;
                fromAmino(object: _4.MigrateFromInfoAmino): _4.MigrateFromInfo;
                toAmino(message: _4.MigrateFromInfo): _4.MigrateFromInfoAmino;
                fromAminoMsg(object: _4.MigrateFromInfoAminoMsg): _4.MigrateFromInfo;
                toAminoMsg(message: _4.MigrateFromInfo): _4.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _4.MigrateFromInfoProtoMsg): _4.MigrateFromInfo;
                toProto(message: _4.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _4.MigrateFromInfo): _4.MigrateFromInfoProtoMsg;
            };
            Config: {
                encode(message: _3.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Config;
                fromPartial(object: {
                    modules?: {
                        name?: string;
                        config?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _3.Config;
                fromAmino(object: _3.ConfigAmino): _3.Config;
                toAmino(message: _3.Config): _3.ConfigAmino;
                fromAminoMsg(object: _3.ConfigAminoMsg): _3.Config;
                toAminoMsg(message: _3.Config): _3.ConfigAminoMsg;
                fromProtoMsg(message: _3.ConfigProtoMsg): _3.Config;
                toProto(message: _3.Config): Uint8Array;
                toProtoMsg(message: _3.Config): _3.ConfigProtoMsg;
            };
            ModuleConfig: {
                encode(message: _3.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ModuleConfig;
                fromPartial(object: {
                    name?: string;
                    config?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _3.ModuleConfig;
                fromAmino(object: _3.ModuleConfigAmino): _3.ModuleConfig;
                toAmino(message: _3.ModuleConfig): _3.ModuleConfigAmino;
                fromAminoMsg(object: _3.ModuleConfigAminoMsg): _3.ModuleConfig;
                toAminoMsg(message: _3.ModuleConfig): _3.ModuleConfigAminoMsg;
                fromProtoMsg(message: _3.ModuleConfigProtoMsg): _3.ModuleConfig;
                toProto(message: _3.ModuleConfig): Uint8Array;
                toProtoMsg(message: _3.ModuleConfig): _3.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _8.QueryAccountsRequest): Promise<_8.QueryAccountsResponse>;
                account(request: _8.QueryAccountRequest): Promise<_8.QueryAccountResponse>;
                params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                moduleAccounts(request?: _8.QueryModuleAccountsRequest): Promise<_8.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _8.Bech32PrefixRequest): Promise<_8.Bech32PrefixResponse>;
                addressBytesToString(request: _8.AddressBytesToStringRequest): Promise<_8.AddressBytesToStringResponse>;
                addressStringToBytes(request: _8.AddressStringToBytesRequest): Promise<_8.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _8.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryAccountsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _8.QueryAccountsRequest;
                fromAmino(object: _8.QueryAccountsRequestAmino): _8.QueryAccountsRequest;
                toAmino(message: _8.QueryAccountsRequest): _8.QueryAccountsRequestAmino;
                fromAminoMsg(object: _8.QueryAccountsRequestAminoMsg): _8.QueryAccountsRequest;
                toAminoMsg(message: _8.QueryAccountsRequest): _8.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryAccountsRequestProtoMsg): _8.QueryAccountsRequest;
                toProto(message: _8.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryAccountsRequest): _8.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                encode(message: _8.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryAccountsResponse;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _8.QueryAccountsResponse;
                fromAmino(object: _8.QueryAccountsResponseAmino): _8.QueryAccountsResponse;
                toAmino(message: _8.QueryAccountsResponse): _8.QueryAccountsResponseAmino;
                fromAminoMsg(object: _8.QueryAccountsResponseAminoMsg): _8.QueryAccountsResponse;
                toAminoMsg(message: _8.QueryAccountsResponse): _8.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryAccountsResponseProtoMsg): _8.QueryAccountsResponse;
                toProto(message: _8.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryAccountsResponse): _8.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                encode(message: _8.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryAccountRequest;
                fromPartial(object: {
                    address?: string;
                }): _8.QueryAccountRequest;
                fromAmino(object: _8.QueryAccountRequestAmino): _8.QueryAccountRequest;
                toAmino(message: _8.QueryAccountRequest): _8.QueryAccountRequestAmino;
                fromAminoMsg(object: _8.QueryAccountRequestAminoMsg): _8.QueryAccountRequest;
                toAminoMsg(message: _8.QueryAccountRequest): _8.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _8.QueryAccountRequestProtoMsg): _8.QueryAccountRequest;
                toProto(message: _8.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _8.QueryAccountRequest): _8.QueryAccountRequestProtoMsg;
            };
            QueryModuleAccountsRequest: {
                encode(_: _8.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryModuleAccountsRequest;
                fromPartial(_: {}): _8.QueryModuleAccountsRequest;
                fromAmino(_: _8.QueryModuleAccountsRequestAmino): _8.QueryModuleAccountsRequest;
                toAmino(_: _8.QueryModuleAccountsRequest): _8.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _8.QueryModuleAccountsRequestAminoMsg): _8.QueryModuleAccountsRequest;
                toAminoMsg(message: _8.QueryModuleAccountsRequest): _8.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryModuleAccountsRequestProtoMsg): _8.QueryModuleAccountsRequest;
                toProto(message: _8.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryModuleAccountsRequest): _8.QueryModuleAccountsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _8.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: string | number | import("long").Long;
                        txSigLimit?: string | number | import("long").Long;
                        txSizeCostPerByte?: string | number | import("long").Long;
                        sigVerifyCostEd25519?: string | number | import("long").Long;
                        sigVerifyCostSecp256k1?: string | number | import("long").Long;
                    };
                }): _8.QueryParamsResponse;
                fromAmino(object: _8.QueryParamsResponseAmino): _8.QueryParamsResponse;
                toAmino(message: _8.QueryParamsResponse): _8.QueryParamsResponseAmino;
                fromAminoMsg(object: _8.QueryParamsResponseAminoMsg): _8.QueryParamsResponse;
                toAminoMsg(message: _8.QueryParamsResponse): _8.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryParamsResponseProtoMsg): _8.QueryParamsResponse;
                toProto(message: _8.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryParamsResponse): _8.QueryParamsResponseProtoMsg;
            };
            QueryAccountResponse: {
                encode(message: _8.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryAccountResponse;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _8.QueryAccountResponse;
                fromAmino(object: _8.QueryAccountResponseAmino): _8.QueryAccountResponse;
                toAmino(message: _8.QueryAccountResponse): _8.QueryAccountResponseAmino;
                fromAminoMsg(object: _8.QueryAccountResponseAminoMsg): _8.QueryAccountResponse;
                toAminoMsg(message: _8.QueryAccountResponse): _8.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _8.QueryAccountResponseProtoMsg): _8.QueryAccountResponse;
                toProto(message: _8.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _8.QueryAccountResponse): _8.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _8.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryParamsRequest;
                fromPartial(_: {}): _8.QueryParamsRequest;
                fromAmino(_: _8.QueryParamsRequestAmino): _8.QueryParamsRequest;
                toAmino(_: _8.QueryParamsRequest): _8.QueryParamsRequestAmino;
                fromAminoMsg(object: _8.QueryParamsRequestAminoMsg): _8.QueryParamsRequest;
                toAminoMsg(message: _8.QueryParamsRequest): _8.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryParamsRequestProtoMsg): _8.QueryParamsRequest;
                toProto(message: _8.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryParamsRequest): _8.QueryParamsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                encode(message: _8.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryModuleAccountsResponse;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _8.QueryModuleAccountsResponse;
                fromAmino(object: _8.QueryModuleAccountsResponseAmino): _8.QueryModuleAccountsResponse;
                toAmino(message: _8.QueryModuleAccountsResponse): _8.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _8.QueryModuleAccountsResponseAminoMsg): _8.QueryModuleAccountsResponse;
                toAminoMsg(message: _8.QueryModuleAccountsResponse): _8.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryModuleAccountsResponseProtoMsg): _8.QueryModuleAccountsResponse;
                toProto(message: _8.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryModuleAccountsResponse): _8.QueryModuleAccountsResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                encode(_: _8.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Bech32PrefixRequest;
                fromPartial(_: {}): _8.Bech32PrefixRequest;
                fromAmino(_: _8.Bech32PrefixRequestAmino): _8.Bech32PrefixRequest;
                toAmino(_: _8.Bech32PrefixRequest): _8.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _8.Bech32PrefixRequestAminoMsg): _8.Bech32PrefixRequest;
                toAminoMsg(message: _8.Bech32PrefixRequest): _8.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _8.Bech32PrefixRequestProtoMsg): _8.Bech32PrefixRequest;
                toProto(message: _8.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _8.Bech32PrefixRequest): _8.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                encode(message: _8.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Bech32PrefixResponse;
                fromPartial(object: {
                    bech32Prefix?: string;
                }): _8.Bech32PrefixResponse;
                fromAmino(object: _8.Bech32PrefixResponseAmino): _8.Bech32PrefixResponse;
                toAmino(message: _8.Bech32PrefixResponse): _8.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _8.Bech32PrefixResponseAminoMsg): _8.Bech32PrefixResponse;
                toAminoMsg(message: _8.Bech32PrefixResponse): _8.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _8.Bech32PrefixResponseProtoMsg): _8.Bech32PrefixResponse;
                toProto(message: _8.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _8.Bech32PrefixResponse): _8.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                encode(message: _8.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AddressBytesToStringRequest;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _8.AddressBytesToStringRequest;
                fromAmino(object: _8.AddressBytesToStringRequestAmino): _8.AddressBytesToStringRequest;
                toAmino(message: _8.AddressBytesToStringRequest): _8.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _8.AddressBytesToStringRequestAminoMsg): _8.AddressBytesToStringRequest;
                toAminoMsg(message: _8.AddressBytesToStringRequest): _8.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _8.AddressBytesToStringRequestProtoMsg): _8.AddressBytesToStringRequest;
                toProto(message: _8.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _8.AddressBytesToStringRequest): _8.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                encode(message: _8.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AddressBytesToStringResponse;
                fromPartial(object: {
                    addressString?: string;
                }): _8.AddressBytesToStringResponse;
                fromAmino(object: _8.AddressBytesToStringResponseAmino): _8.AddressBytesToStringResponse;
                toAmino(message: _8.AddressBytesToStringResponse): _8.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _8.AddressBytesToStringResponseAminoMsg): _8.AddressBytesToStringResponse;
                toAminoMsg(message: _8.AddressBytesToStringResponse): _8.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _8.AddressBytesToStringResponseProtoMsg): _8.AddressBytesToStringResponse;
                toProto(message: _8.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _8.AddressBytesToStringResponse): _8.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                encode(message: _8.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AddressStringToBytesRequest;
                fromPartial(object: {
                    addressString?: string;
                }): _8.AddressStringToBytesRequest;
                fromAmino(object: _8.AddressStringToBytesRequestAmino): _8.AddressStringToBytesRequest;
                toAmino(message: _8.AddressStringToBytesRequest): _8.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _8.AddressStringToBytesRequestAminoMsg): _8.AddressStringToBytesRequest;
                toAminoMsg(message: _8.AddressStringToBytesRequest): _8.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _8.AddressStringToBytesRequestProtoMsg): _8.AddressStringToBytesRequest;
                toProto(message: _8.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _8.AddressStringToBytesRequest): _8.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                encode(message: _8.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AddressStringToBytesResponse;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _8.AddressStringToBytesResponse;
                fromAmino(object: _8.AddressStringToBytesResponseAmino): _8.AddressStringToBytesResponse;
                toAmino(message: _8.AddressStringToBytesResponse): _8.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _8.AddressStringToBytesResponseAminoMsg): _8.AddressStringToBytesResponse;
                toAminoMsg(message: _8.AddressStringToBytesResponse): _8.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _8.AddressStringToBytesResponseProtoMsg): _8.AddressStringToBytesResponse;
                toProto(message: _8.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _8.AddressStringToBytesResponse): _8.AddressStringToBytesResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _7.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.GenesisState;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: string | number | import("long").Long;
                        txSigLimit?: string | number | import("long").Long;
                        txSizeCostPerByte?: string | number | import("long").Long;
                        sigVerifyCostEd25519?: string | number | import("long").Long;
                        sigVerifyCostSecp256k1?: string | number | import("long").Long;
                    };
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _7.GenesisState;
                fromAmino(object: _7.GenesisStateAmino): _7.GenesisState;
                toAmino(message: _7.GenesisState): _7.GenesisStateAmino;
                fromAminoMsg(object: _7.GenesisStateAminoMsg): _7.GenesisState;
                toAminoMsg(message: _7.GenesisState): _7.GenesisStateAminoMsg;
                fromProtoMsg(message: _7.GenesisStateProtoMsg): _7.GenesisState;
                toProto(message: _7.GenesisState): Uint8Array;
                toProtoMsg(message: _7.GenesisState): _7.GenesisStateProtoMsg;
            };
            BaseAccount: {
                encode(message: _6.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.BaseAccount;
                fromPartial(object: {
                    address?: string;
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    accountNumber?: string | number | import("long").Long;
                    sequence?: string | number | import("long").Long;
                }): _6.BaseAccount;
                fromAmino(object: _6.BaseAccountAmino): _6.BaseAccount;
                toAmino(message: _6.BaseAccount): _6.BaseAccountAmino;
                fromAminoMsg(object: _6.BaseAccountAminoMsg): _6.BaseAccount;
                toAminoMsg(message: _6.BaseAccount): _6.BaseAccountAminoMsg;
                fromProtoMsg(message: _6.BaseAccountProtoMsg): _6.BaseAccount;
                toProto(message: _6.BaseAccount): Uint8Array;
                toProtoMsg(message: _6.BaseAccount): _6.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                encode(message: _6.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.ModuleAccount;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: string | number | import("long").Long;
                        sequence?: string | number | import("long").Long;
                    };
                    name?: string;
                    permissions?: string[];
                }): _6.ModuleAccount;
                fromAmino(object: _6.ModuleAccountAmino): _6.ModuleAccount;
                toAmino(message: _6.ModuleAccount): _6.ModuleAccountAmino;
                fromAminoMsg(object: _6.ModuleAccountAminoMsg): _6.ModuleAccount;
                toAminoMsg(message: _6.ModuleAccount): _6.ModuleAccountAminoMsg;
                fromProtoMsg(message: _6.ModuleAccountProtoMsg): _6.ModuleAccount;
                toProto(message: _6.ModuleAccount): Uint8Array;
                toProtoMsg(message: _6.ModuleAccount): _6.ModuleAccountProtoMsg;
            };
            Params: {
                encode(message: _6.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Params;
                fromPartial(object: {
                    maxMemoCharacters?: string | number | import("long").Long;
                    txSigLimit?: string | number | import("long").Long;
                    txSizeCostPerByte?: string | number | import("long").Long;
                    sigVerifyCostEd25519?: string | number | import("long").Long;
                    sigVerifyCostSecp256k1?: string | number | import("long").Long;
                }): _6.Params;
                fromAmino(object: _6.ParamsAmino): _6.Params;
                toAmino(message: _6.Params): _6.ParamsAmino;
                fromAminoMsg(object: _6.ParamsAminoMsg): _6.Params;
                toAminoMsg(message: _6.Params): _6.ParamsAminoMsg;
                fromProtoMsg(message: _6.ParamsProtoMsg): _6.Params;
                toProto(message: _6.Params): Uint8Array;
                toProtoMsg(message: _6.Params): _6.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _224.MsgClientImpl;
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _12.QueryGrantsRequest): Promise<_12.QueryGrantsResponse>;
                granterGrants(request: _12.QueryGranterGrantsRequest): Promise<_12.QueryGranterGrantsResponse>;
                granteeGrants(request: _12.QueryGranteeGrantsRequest): Promise<_12.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: _13.MsgGrant;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: _13.MsgExec;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: _13.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: _13.MsgGrant;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: _13.MsgExec;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: _13.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _13.MsgGrant) => _13.MsgGrantAmino;
                    fromAmino: (object: _13.MsgGrantAmino) => _13.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _13.MsgExec) => _13.MsgExecAmino;
                    fromAmino: (object: _13.MsgExecAmino) => _13.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _13.MsgRevoke) => _13.MsgRevokeAmino;
                    fromAmino: (object: _13.MsgRevokeAmino) => _13.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _13.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgGrant;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    };
                }): _13.MsgGrant;
                fromAmino(object: _13.MsgGrantAmino): _13.MsgGrant;
                toAmino(message: _13.MsgGrant): _13.MsgGrantAmino;
                fromAminoMsg(object: _13.MsgGrantAminoMsg): _13.MsgGrant;
                toAminoMsg(message: _13.MsgGrant): _13.MsgGrantAminoMsg;
                fromProtoMsg(message: _13.MsgGrantProtoMsg): _13.MsgGrant;
                toProto(message: _13.MsgGrant): Uint8Array;
                toProtoMsg(message: _13.MsgGrant): _13.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                encode(message: _13.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgExecResponse;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _13.MsgExecResponse;
                fromAmino(object: _13.MsgExecResponseAmino): _13.MsgExecResponse;
                toAmino(message: _13.MsgExecResponse): _13.MsgExecResponseAmino;
                fromAminoMsg(object: _13.MsgExecResponseAminoMsg): _13.MsgExecResponse;
                toAminoMsg(message: _13.MsgExecResponse): _13.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _13.MsgExecResponseProtoMsg): _13.MsgExecResponse;
                toProto(message: _13.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _13.MsgExecResponse): _13.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _13.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgExec;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _13.MsgExec;
                fromAmino(object: _13.MsgExecAmino): _13.MsgExec;
                toAmino(message: _13.MsgExec): _13.MsgExecAmino;
                fromAminoMsg(object: _13.MsgExecAminoMsg): _13.MsgExec;
                toAminoMsg(message: _13.MsgExec): _13.MsgExecAminoMsg;
                fromProtoMsg(message: _13.MsgExecProtoMsg): _13.MsgExec;
                toProto(message: _13.MsgExec): Uint8Array;
                toProtoMsg(message: _13.MsgExec): _13.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                encode(_: _13.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgGrantResponse;
                fromPartial(_: {}): _13.MsgGrantResponse;
                fromAmino(_: _13.MsgGrantResponseAmino): _13.MsgGrantResponse;
                toAmino(_: _13.MsgGrantResponse): _13.MsgGrantResponseAmino;
                fromAminoMsg(object: _13.MsgGrantResponseAminoMsg): _13.MsgGrantResponse;
                toAminoMsg(message: _13.MsgGrantResponse): _13.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _13.MsgGrantResponseProtoMsg): _13.MsgGrantResponse;
                toProto(message: _13.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _13.MsgGrantResponse): _13.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                encode(message: _13.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgRevoke;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _13.MsgRevoke;
                fromAmino(object: _13.MsgRevokeAmino): _13.MsgRevoke;
                toAmino(message: _13.MsgRevoke): _13.MsgRevokeAmino;
                fromAminoMsg(object: _13.MsgRevokeAminoMsg): _13.MsgRevoke;
                toAminoMsg(message: _13.MsgRevoke): _13.MsgRevokeAminoMsg;
                fromProtoMsg(message: _13.MsgRevokeProtoMsg): _13.MsgRevoke;
                toProto(message: _13.MsgRevoke): Uint8Array;
                toProtoMsg(message: _13.MsgRevoke): _13.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                encode(_: _13.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgRevokeResponse;
                fromPartial(_: {}): _13.MsgRevokeResponse;
                fromAmino(_: _13.MsgRevokeResponseAmino): _13.MsgRevokeResponse;
                toAmino(_: _13.MsgRevokeResponse): _13.MsgRevokeResponseAmino;
                fromAminoMsg(object: _13.MsgRevokeResponseAminoMsg): _13.MsgRevokeResponse;
                toAminoMsg(message: _13.MsgRevokeResponse): _13.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _13.MsgRevokeResponseProtoMsg): _13.MsgRevokeResponse;
                toProto(message: _13.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _13.MsgRevokeResponse): _13.MsgRevokeResponseProtoMsg;
            };
            QueryGrantsRequest: {
                encode(message: _12.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGrantsRequest;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _12.QueryGrantsRequest;
                fromAmino(object: _12.QueryGrantsRequestAmino): _12.QueryGrantsRequest;
                toAmino(message: _12.QueryGrantsRequest): _12.QueryGrantsRequestAmino;
                fromAminoMsg(object: _12.QueryGrantsRequestAminoMsg): _12.QueryGrantsRequest;
                toAminoMsg(message: _12.QueryGrantsRequest): _12.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _12.QueryGrantsRequestProtoMsg): _12.QueryGrantsRequest;
                toProto(message: _12.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryGrantsRequest): _12.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                encode(message: _12.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _12.QueryGrantsResponse;
                fromAmino(object: _12.QueryGrantsResponseAmino): _12.QueryGrantsResponse;
                toAmino(message: _12.QueryGrantsResponse): _12.QueryGrantsResponseAmino;
                fromAminoMsg(object: _12.QueryGrantsResponseAminoMsg): _12.QueryGrantsResponse;
                toAminoMsg(message: _12.QueryGrantsResponse): _12.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _12.QueryGrantsResponseProtoMsg): _12.QueryGrantsResponse;
                toProto(message: _12.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryGrantsResponse): _12.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                encode(message: _12.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGranterGrantsRequest;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _12.QueryGranterGrantsRequest;
                fromAmino(object: _12.QueryGranterGrantsRequestAmino): _12.QueryGranterGrantsRequest;
                toAmino(message: _12.QueryGranterGrantsRequest): _12.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _12.QueryGranterGrantsRequestAminoMsg): _12.QueryGranterGrantsRequest;
                toAminoMsg(message: _12.QueryGranterGrantsRequest): _12.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _12.QueryGranterGrantsRequestProtoMsg): _12.QueryGranterGrantsRequest;
                toProto(message: _12.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryGranterGrantsRequest): _12.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                encode(message: _12.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGranterGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _12.QueryGranterGrantsResponse;
                fromAmino(object: _12.QueryGranterGrantsResponseAmino): _12.QueryGranterGrantsResponse;
                toAmino(message: _12.QueryGranterGrantsResponse): _12.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _12.QueryGranterGrantsResponseAminoMsg): _12.QueryGranterGrantsResponse;
                toAminoMsg(message: _12.QueryGranterGrantsResponse): _12.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _12.QueryGranterGrantsResponseProtoMsg): _12.QueryGranterGrantsResponse;
                toProto(message: _12.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryGranterGrantsResponse): _12.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _12.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGranteeGrantsRequest;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _12.QueryGranteeGrantsRequest;
                fromAmino(object: _12.QueryGranteeGrantsRequestAmino): _12.QueryGranteeGrantsRequest;
                toAmino(message: _12.QueryGranteeGrantsRequest): _12.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _12.QueryGranteeGrantsRequestAminoMsg): _12.QueryGranteeGrantsRequest;
                toAminoMsg(message: _12.QueryGranteeGrantsRequest): _12.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _12.QueryGranteeGrantsRequestProtoMsg): _12.QueryGranteeGrantsRequest;
                toProto(message: _12.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryGranteeGrantsRequest): _12.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _12.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryGranteeGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _12.QueryGranteeGrantsResponse;
                fromAmino(object: _12.QueryGranteeGrantsResponseAmino): _12.QueryGranteeGrantsResponse;
                toAmino(message: _12.QueryGranteeGrantsResponse): _12.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _12.QueryGranteeGrantsResponseAminoMsg): _12.QueryGranteeGrantsResponse;
                toAminoMsg(message: _12.QueryGranteeGrantsResponse): _12.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _12.QueryGranteeGrantsResponseProtoMsg): _12.QueryGranteeGrantsResponse;
                toProto(message: _12.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryGranteeGrantsResponse): _12.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GenesisState;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                }): _11.GenesisState;
                fromAmino(object: _11.GenesisStateAmino): _11.GenesisState;
                toAmino(message: _11.GenesisState): _11.GenesisStateAmino;
                fromAminoMsg(object: _11.GenesisStateAminoMsg): _11.GenesisState;
                toAminoMsg(message: _11.GenesisState): _11.GenesisStateAminoMsg;
                fromProtoMsg(message: _11.GenesisStateProtoMsg): _11.GenesisState;
                toProto(message: _11.GenesisState): Uint8Array;
                toProtoMsg(message: _11.GenesisState): _11.GenesisStateProtoMsg;
            };
            EventGrant: {
                encode(message: _10.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.EventGrant;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _10.EventGrant;
                fromAmino(object: _10.EventGrantAmino): _10.EventGrant;
                toAmino(message: _10.EventGrant): _10.EventGrantAmino;
                fromAminoMsg(object: _10.EventGrantAminoMsg): _10.EventGrant;
                toAminoMsg(message: _10.EventGrant): _10.EventGrantAminoMsg;
                fromProtoMsg(message: _10.EventGrantProtoMsg): _10.EventGrant;
                toProto(message: _10.EventGrant): Uint8Array;
                toProtoMsg(message: _10.EventGrant): _10.EventGrantProtoMsg;
            };
            EventRevoke: {
                encode(message: _10.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.EventRevoke;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _10.EventRevoke;
                fromAmino(object: _10.EventRevokeAmino): _10.EventRevoke;
                toAmino(message: _10.EventRevoke): _10.EventRevokeAmino;
                fromAminoMsg(object: _10.EventRevokeAminoMsg): _10.EventRevoke;
                toAminoMsg(message: _10.EventRevoke): _10.EventRevokeAminoMsg;
                fromProtoMsg(message: _10.EventRevokeProtoMsg): _10.EventRevoke;
                toProto(message: _10.EventRevoke): Uint8Array;
                toProtoMsg(message: _10.EventRevoke): _10.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                encode(message: _9.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GenericAuthorization;
                fromPartial(object: {
                    msg?: string;
                }): _9.GenericAuthorization;
                fromAmino(object: _9.GenericAuthorizationAmino): _9.GenericAuthorization;
                toAmino(message: _9.GenericAuthorization): _9.GenericAuthorizationAmino;
                fromAminoMsg(object: _9.GenericAuthorizationAminoMsg): _9.GenericAuthorization;
                toAminoMsg(message: _9.GenericAuthorization): _9.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _9.GenericAuthorizationProtoMsg): _9.GenericAuthorization;
                toProto(message: _9.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _9.GenericAuthorization): _9.GenericAuthorizationProtoMsg;
            };
            Grant: {
                encode(message: _9.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Grant;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _9.Grant;
                fromAmino(object: _9.GrantAmino): _9.Grant;
                toAmino(message: _9.Grant): _9.GrantAmino;
                fromAminoMsg(object: _9.GrantAminoMsg): _9.Grant;
                toAminoMsg(message: _9.Grant): _9.GrantAminoMsg;
                fromProtoMsg(message: _9.GrantProtoMsg): _9.Grant;
                toProto(message: _9.Grant): Uint8Array;
                toProtoMsg(message: _9.Grant): _9.GrantProtoMsg;
            };
            GrantAuthorization: {
                encode(message: _9.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GrantAuthorization;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _9.GrantAuthorization;
                fromAmino(object: _9.GrantAuthorizationAmino): _9.GrantAuthorization;
                toAmino(message: _9.GrantAuthorization): _9.GrantAuthorizationAmino;
                fromAminoMsg(object: _9.GrantAuthorizationAminoMsg): _9.GrantAuthorization;
                toAminoMsg(message: _9.GrantAuthorization): _9.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _9.GrantAuthorizationProtoMsg): _9.GrantAuthorization;
                toProto(message: _9.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _9.GrantAuthorization): _9.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                encode(message: _9.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GrantQueueItem;
                fromPartial(object: {
                    msgTypeUrls?: string[];
                }): _9.GrantQueueItem;
                fromAmino(object: _9.GrantQueueItemAmino): _9.GrantQueueItem;
                toAmino(message: _9.GrantQueueItem): _9.GrantQueueItemAmino;
                fromAminoMsg(object: _9.GrantQueueItemAminoMsg): _9.GrantQueueItem;
                toAminoMsg(message: _9.GrantQueueItem): _9.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _9.GrantQueueItemProtoMsg): _9.GrantQueueItem;
                toProto(message: _9.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _9.GrantQueueItem): _9.GrantQueueItemProtoMsg;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _225.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _17.QueryBalanceRequest): Promise<_17.QueryBalanceResponse>;
                allBalances(request: _17.QueryAllBalancesRequest): Promise<_17.QueryAllBalancesResponse>;
                spendableBalances(request: _17.QuerySpendableBalancesRequest): Promise<_17.QuerySpendableBalancesResponse>;
                totalSupply(request?: _17.QueryTotalSupplyRequest): Promise<_17.QueryTotalSupplyResponse>;
                supplyOf(request: _17.QuerySupplyOfRequest): Promise<_17.QuerySupplyOfResponse>;
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                denomMetadata(request: _17.QueryDenomMetadataRequest): Promise<_17.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _17.QueryDenomsMetadataRequest): Promise<_17.QueryDenomsMetadataResponse>;
                denomOwners(request: _17.QueryDenomOwnersRequest): Promise<_17.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: _18.MsgSend;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: _18.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: _18.MsgSend;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: _18.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _18.MsgSend) => _18.MsgSendAmino;
                    fromAmino: (object: _18.MsgSendAmino) => _18.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _18.MsgMultiSend) => _18.MsgMultiSendAmino;
                    fromAmino: (object: _18.MsgMultiSendAmino) => _18.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _18.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgSend;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _18.MsgSend;
                fromAmino(object: _18.MsgSendAmino): _18.MsgSend;
                toAmino(message: _18.MsgSend): _18.MsgSendAmino;
                fromAminoMsg(object: _18.MsgSendAminoMsg): _18.MsgSend;
                toAminoMsg(message: _18.MsgSend): _18.MsgSendAminoMsg;
                fromProtoMsg(message: _18.MsgSendProtoMsg): _18.MsgSend;
                toProto(message: _18.MsgSend): Uint8Array;
                toProtoMsg(message: _18.MsgSend): _18.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _18.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgSendResponse;
                fromPartial(_: {}): _18.MsgSendResponse;
                fromAmino(_: _18.MsgSendResponseAmino): _18.MsgSendResponse;
                toAmino(_: _18.MsgSendResponse): _18.MsgSendResponseAmino;
                fromAminoMsg(object: _18.MsgSendResponseAminoMsg): _18.MsgSendResponse;
                toAminoMsg(message: _18.MsgSendResponse): _18.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _18.MsgSendResponseProtoMsg): _18.MsgSendResponse;
                toProto(message: _18.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _18.MsgSendResponse): _18.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                encode(message: _18.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgMultiSend;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _18.MsgMultiSend;
                fromAmino(object: _18.MsgMultiSendAmino): _18.MsgMultiSend;
                toAmino(message: _18.MsgMultiSend): _18.MsgMultiSendAmino;
                fromAminoMsg(object: _18.MsgMultiSendAminoMsg): _18.MsgMultiSend;
                toAminoMsg(message: _18.MsgMultiSend): _18.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _18.MsgMultiSendProtoMsg): _18.MsgMultiSend;
                toProto(message: _18.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _18.MsgMultiSend): _18.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                encode(_: _18.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgMultiSendResponse;
                fromPartial(_: {}): _18.MsgMultiSendResponse;
                fromAmino(_: _18.MsgMultiSendResponseAmino): _18.MsgMultiSendResponse;
                toAmino(_: _18.MsgMultiSendResponse): _18.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _18.MsgMultiSendResponseAminoMsg): _18.MsgMultiSendResponse;
                toAminoMsg(message: _18.MsgMultiSendResponse): _18.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _18.MsgMultiSendResponseProtoMsg): _18.MsgMultiSendResponse;
                toProto(message: _18.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _18.MsgMultiSendResponse): _18.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _17.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryBalanceRequest;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _17.QueryBalanceRequest;
                fromAmino(object: _17.QueryBalanceRequestAmino): _17.QueryBalanceRequest;
                toAmino(message: _17.QueryBalanceRequest): _17.QueryBalanceRequestAmino;
                fromAminoMsg(object: _17.QueryBalanceRequestAminoMsg): _17.QueryBalanceRequest;
                toAminoMsg(message: _17.QueryBalanceRequest): _17.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _17.QueryBalanceRequestProtoMsg): _17.QueryBalanceRequest;
                toProto(message: _17.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _17.QueryBalanceRequest): _17.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _17.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryBalanceResponse;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _17.QueryBalanceResponse;
                fromAmino(object: _17.QueryBalanceResponseAmino): _17.QueryBalanceResponse;
                toAmino(message: _17.QueryBalanceResponse): _17.QueryBalanceResponseAmino;
                fromAminoMsg(object: _17.QueryBalanceResponseAminoMsg): _17.QueryBalanceResponse;
                toAminoMsg(message: _17.QueryBalanceResponse): _17.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _17.QueryBalanceResponseProtoMsg): _17.QueryBalanceResponse;
                toProto(message: _17.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _17.QueryBalanceResponse): _17.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                encode(message: _17.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryAllBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryAllBalancesRequest;
                fromAmino(object: _17.QueryAllBalancesRequestAmino): _17.QueryAllBalancesRequest;
                toAmino(message: _17.QueryAllBalancesRequest): _17.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _17.QueryAllBalancesRequestAminoMsg): _17.QueryAllBalancesRequest;
                toAminoMsg(message: _17.QueryAllBalancesRequest): _17.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _17.QueryAllBalancesRequestProtoMsg): _17.QueryAllBalancesRequest;
                toProto(message: _17.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAllBalancesRequest): _17.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                encode(message: _17.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryAllBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _17.QueryAllBalancesResponse;
                fromAmino(object: _17.QueryAllBalancesResponseAmino): _17.QueryAllBalancesResponse;
                toAmino(message: _17.QueryAllBalancesResponse): _17.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _17.QueryAllBalancesResponseAminoMsg): _17.QueryAllBalancesResponse;
                toAminoMsg(message: _17.QueryAllBalancesResponse): _17.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _17.QueryAllBalancesResponseProtoMsg): _17.QueryAllBalancesResponse;
                toProto(message: _17.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAllBalancesResponse): _17.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _17.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QuerySpendableBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QuerySpendableBalancesRequest;
                fromAmino(object: _17.QuerySpendableBalancesRequestAmino): _17.QuerySpendableBalancesRequest;
                toAmino(message: _17.QuerySpendableBalancesRequest): _17.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _17.QuerySpendableBalancesRequestAminoMsg): _17.QuerySpendableBalancesRequest;
                toAminoMsg(message: _17.QuerySpendableBalancesRequest): _17.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _17.QuerySpendableBalancesRequestProtoMsg): _17.QuerySpendableBalancesRequest;
                toProto(message: _17.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _17.QuerySpendableBalancesRequest): _17.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _17.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QuerySpendableBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _17.QuerySpendableBalancesResponse;
                fromAmino(object: _17.QuerySpendableBalancesResponseAmino): _17.QuerySpendableBalancesResponse;
                toAmino(message: _17.QuerySpendableBalancesResponse): _17.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _17.QuerySpendableBalancesResponseAminoMsg): _17.QuerySpendableBalancesResponse;
                toAminoMsg(message: _17.QuerySpendableBalancesResponse): _17.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _17.QuerySpendableBalancesResponseProtoMsg): _17.QuerySpendableBalancesResponse;
                toProto(message: _17.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _17.QuerySpendableBalancesResponse): _17.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                encode(message: _17.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryTotalSupplyRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryTotalSupplyRequest;
                fromAmino(object: _17.QueryTotalSupplyRequestAmino): _17.QueryTotalSupplyRequest;
                toAmino(message: _17.QueryTotalSupplyRequest): _17.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _17.QueryTotalSupplyRequestAminoMsg): _17.QueryTotalSupplyRequest;
                toAminoMsg(message: _17.QueryTotalSupplyRequest): _17.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _17.QueryTotalSupplyRequestProtoMsg): _17.QueryTotalSupplyRequest;
                toProto(message: _17.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _17.QueryTotalSupplyRequest): _17.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                encode(message: _17.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryTotalSupplyResponse;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _17.QueryTotalSupplyResponse;
                fromAmino(object: _17.QueryTotalSupplyResponseAmino): _17.QueryTotalSupplyResponse;
                toAmino(message: _17.QueryTotalSupplyResponse): _17.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _17.QueryTotalSupplyResponseAminoMsg): _17.QueryTotalSupplyResponse;
                toAminoMsg(message: _17.QueryTotalSupplyResponse): _17.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _17.QueryTotalSupplyResponseProtoMsg): _17.QueryTotalSupplyResponse;
                toProto(message: _17.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _17.QueryTotalSupplyResponse): _17.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                encode(message: _17.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QuerySupplyOfRequest;
                fromPartial(object: {
                    denom?: string;
                }): _17.QuerySupplyOfRequest;
                fromAmino(object: _17.QuerySupplyOfRequestAmino): _17.QuerySupplyOfRequest;
                toAmino(message: _17.QuerySupplyOfRequest): _17.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _17.QuerySupplyOfRequestAminoMsg): _17.QuerySupplyOfRequest;
                toAminoMsg(message: _17.QuerySupplyOfRequest): _17.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _17.QuerySupplyOfRequestProtoMsg): _17.QuerySupplyOfRequest;
                toProto(message: _17.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _17.QuerySupplyOfRequest): _17.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                encode(message: _17.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QuerySupplyOfResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _17.QuerySupplyOfResponse;
                fromAmino(object: _17.QuerySupplyOfResponseAmino): _17.QuerySupplyOfResponse;
                toAmino(message: _17.QuerySupplyOfResponse): _17.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _17.QuerySupplyOfResponseAminoMsg): _17.QuerySupplyOfResponse;
                toAminoMsg(message: _17.QuerySupplyOfResponse): _17.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _17.QuerySupplyOfResponseProtoMsg): _17.QuerySupplyOfResponse;
                toProto(message: _17.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _17.QuerySupplyOfResponse): _17.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _17.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryParamsRequest;
                fromPartial(_: {}): _17.QueryParamsRequest;
                fromAmino(_: _17.QueryParamsRequestAmino): _17.QueryParamsRequest;
                toAmino(_: _17.QueryParamsRequest): _17.QueryParamsRequestAmino;
                fromAminoMsg(object: _17.QueryParamsRequestAminoMsg): _17.QueryParamsRequest;
                toAminoMsg(message: _17.QueryParamsRequest): _17.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryParamsRequestProtoMsg): _17.QueryParamsRequest;
                toProto(message: _17.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryParamsRequest): _17.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _17.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _17.QueryParamsResponse;
                fromAmino(object: _17.QueryParamsResponseAmino): _17.QueryParamsResponse;
                toAmino(message: _17.QueryParamsResponse): _17.QueryParamsResponseAmino;
                fromAminoMsg(object: _17.QueryParamsResponseAminoMsg): _17.QueryParamsResponse;
                toAminoMsg(message: _17.QueryParamsResponse): _17.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryParamsResponseProtoMsg): _17.QueryParamsResponse;
                toProto(message: _17.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryParamsResponse): _17.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _17.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomsMetadataRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryDenomsMetadataRequest;
                fromAmino(object: _17.QueryDenomsMetadataRequestAmino): _17.QueryDenomsMetadataRequest;
                toAmino(message: _17.QueryDenomsMetadataRequest): _17.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _17.QueryDenomsMetadataRequestAminoMsg): _17.QueryDenomsMetadataRequest;
                toAminoMsg(message: _17.QueryDenomsMetadataRequest): _17.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _17.QueryDenomsMetadataRequestProtoMsg): _17.QueryDenomsMetadataRequest;
                toProto(message: _17.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _17.QueryDenomsMetadataRequest): _17.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _17.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomsMetadataResponse;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _17.QueryDenomsMetadataResponse;
                fromAmino(object: _17.QueryDenomsMetadataResponseAmino): _17.QueryDenomsMetadataResponse;
                toAmino(message: _17.QueryDenomsMetadataResponse): _17.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _17.QueryDenomsMetadataResponseAminoMsg): _17.QueryDenomsMetadataResponse;
                toAminoMsg(message: _17.QueryDenomsMetadataResponse): _17.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _17.QueryDenomsMetadataResponseProtoMsg): _17.QueryDenomsMetadataResponse;
                toProto(message: _17.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _17.QueryDenomsMetadataResponse): _17.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                encode(message: _17.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _17.QueryDenomMetadataRequest;
                fromAmino(object: _17.QueryDenomMetadataRequestAmino): _17.QueryDenomMetadataRequest;
                toAmino(message: _17.QueryDenomMetadataRequest): _17.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _17.QueryDenomMetadataRequestAminoMsg): _17.QueryDenomMetadataRequest;
                toAminoMsg(message: _17.QueryDenomMetadataRequest): _17.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _17.QueryDenomMetadataRequestProtoMsg): _17.QueryDenomMetadataRequest;
                toProto(message: _17.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _17.QueryDenomMetadataRequest): _17.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                encode(message: _17.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomMetadataResponse;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _17.QueryDenomMetadataResponse;
                fromAmino(object: _17.QueryDenomMetadataResponseAmino): _17.QueryDenomMetadataResponse;
                toAmino(message: _17.QueryDenomMetadataResponse): _17.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _17.QueryDenomMetadataResponseAminoMsg): _17.QueryDenomMetadataResponse;
                toAminoMsg(message: _17.QueryDenomMetadataResponse): _17.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _17.QueryDenomMetadataResponseProtoMsg): _17.QueryDenomMetadataResponse;
                toProto(message: _17.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _17.QueryDenomMetadataResponse): _17.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                encode(message: _17.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomOwnersRequest;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryDenomOwnersRequest;
                fromAmino(object: _17.QueryDenomOwnersRequestAmino): _17.QueryDenomOwnersRequest;
                toAmino(message: _17.QueryDenomOwnersRequest): _17.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _17.QueryDenomOwnersRequestAminoMsg): _17.QueryDenomOwnersRequest;
                toAminoMsg(message: _17.QueryDenomOwnersRequest): _17.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _17.QueryDenomOwnersRequestProtoMsg): _17.QueryDenomOwnersRequest;
                toProto(message: _17.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _17.QueryDenomOwnersRequest): _17.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                encode(message: _17.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.DenomOwner;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _17.DenomOwner;
                fromAmino(object: _17.DenomOwnerAmino): _17.DenomOwner;
                toAmino(message: _17.DenomOwner): _17.DenomOwnerAmino;
                fromAminoMsg(object: _17.DenomOwnerAminoMsg): _17.DenomOwner;
                toAminoMsg(message: _17.DenomOwner): _17.DenomOwnerAminoMsg;
                fromProtoMsg(message: _17.DenomOwnerProtoMsg): _17.DenomOwner;
                toProto(message: _17.DenomOwner): Uint8Array;
                toProtoMsg(message: _17.DenomOwner): _17.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                encode(message: _17.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryDenomOwnersResponse;
                fromPartial(object: {
                    denomOwners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _17.QueryDenomOwnersResponse;
                fromAmino(object: _17.QueryDenomOwnersResponseAmino): _17.QueryDenomOwnersResponse;
                toAmino(message: _17.QueryDenomOwnersResponse): _17.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _17.QueryDenomOwnersResponseAminoMsg): _17.QueryDenomOwnersResponse;
                toAminoMsg(message: _17.QueryDenomOwnersResponse): _17.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _17.QueryDenomOwnersResponseProtoMsg): _17.QueryDenomOwnersResponse;
                toProto(message: _17.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _17.QueryDenomOwnersResponse): _17.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.GenesisState;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                }): _16.GenesisState;
                fromAmino(object: _16.GenesisStateAmino): _16.GenesisState;
                toAmino(message: _16.GenesisState): _16.GenesisStateAmino;
                fromAminoMsg(object: _16.GenesisStateAminoMsg): _16.GenesisState;
                toAminoMsg(message: _16.GenesisState): _16.GenesisStateAminoMsg;
                fromProtoMsg(message: _16.GenesisStateProtoMsg): _16.GenesisState;
                toProto(message: _16.GenesisState): Uint8Array;
                toProtoMsg(message: _16.GenesisState): _16.GenesisStateProtoMsg;
            };
            Balance: {
                encode(message: _16.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Balance;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _16.Balance;
                fromAmino(object: _16.BalanceAmino): _16.Balance;
                toAmino(message: _16.Balance): _16.BalanceAmino;
                fromAminoMsg(object: _16.BalanceAminoMsg): _16.Balance;
                toAminoMsg(message: _16.Balance): _16.BalanceAminoMsg;
                fromProtoMsg(message: _16.BalanceProtoMsg): _16.Balance;
                toProto(message: _16.Balance): Uint8Array;
                toProtoMsg(message: _16.Balance): _16.BalanceProtoMsg;
            };
            Params: {
                encode(message: _15.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Params;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _15.Params;
                fromAmino(object: _15.ParamsAmino): _15.Params;
                toAmino(message: _15.Params): _15.ParamsAmino;
                fromAminoMsg(object: _15.ParamsAminoMsg): _15.Params;
                toAminoMsg(message: _15.Params): _15.ParamsAminoMsg;
                fromProtoMsg(message: _15.ParamsProtoMsg): _15.Params;
                toProto(message: _15.Params): Uint8Array;
                toProtoMsg(message: _15.Params): _15.ParamsProtoMsg;
            };
            SendEnabled: {
                encode(message: _15.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SendEnabled;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _15.SendEnabled;
                fromAmino(object: _15.SendEnabledAmino): _15.SendEnabled;
                toAmino(message: _15.SendEnabled): _15.SendEnabledAmino;
                fromAminoMsg(object: _15.SendEnabledAminoMsg): _15.SendEnabled;
                toAminoMsg(message: _15.SendEnabled): _15.SendEnabledAminoMsg;
                fromProtoMsg(message: _15.SendEnabledProtoMsg): _15.SendEnabled;
                toProto(message: _15.SendEnabled): Uint8Array;
                toProtoMsg(message: _15.SendEnabled): _15.SendEnabledProtoMsg;
            };
            Input: {
                encode(message: _15.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Input;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _15.Input;
                fromAmino(object: _15.InputAmino): _15.Input;
                toAmino(message: _15.Input): _15.InputAmino;
                fromAminoMsg(object: _15.InputAminoMsg): _15.Input;
                toAminoMsg(message: _15.Input): _15.InputAminoMsg;
                fromProtoMsg(message: _15.InputProtoMsg): _15.Input;
                toProto(message: _15.Input): Uint8Array;
                toProtoMsg(message: _15.Input): _15.InputProtoMsg;
            };
            Output: {
                encode(message: _15.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Output;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _15.Output;
                fromAmino(object: _15.OutputAmino): _15.Output;
                toAmino(message: _15.Output): _15.OutputAmino;
                fromAminoMsg(object: _15.OutputAminoMsg): _15.Output;
                toAminoMsg(message: _15.Output): _15.OutputAminoMsg;
                fromProtoMsg(message: _15.OutputProtoMsg): _15.Output;
                toProto(message: _15.Output): Uint8Array;
                toProtoMsg(message: _15.Output): _15.OutputProtoMsg;
            };
            Supply: {
                encode(message: _15.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Supply;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _15.Supply;
                fromAmino(object: _15.SupplyAmino): _15.Supply;
                toAmino(message: _15.Supply): _15.SupplyAmino;
                fromAminoMsg(object: _15.SupplyAminoMsg): _15.Supply;
                toAminoMsg(message: _15.Supply): _15.SupplyAminoMsg;
                fromProtoMsg(message: _15.SupplyProtoMsg): _15.Supply;
                toProto(message: _15.Supply): Uint8Array;
                toProtoMsg(message: _15.Supply): _15.SupplyProtoMsg;
            };
            DenomUnit: {
                encode(message: _15.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DenomUnit;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _15.DenomUnit;
                fromAmino(object: _15.DenomUnitAmino): _15.DenomUnit;
                toAmino(message: _15.DenomUnit): _15.DenomUnitAmino;
                fromAminoMsg(object: _15.DenomUnitAminoMsg): _15.DenomUnit;
                toAminoMsg(message: _15.DenomUnit): _15.DenomUnitAminoMsg;
                fromProtoMsg(message: _15.DenomUnitProtoMsg): _15.DenomUnit;
                toProto(message: _15.DenomUnit): Uint8Array;
                toProtoMsg(message: _15.DenomUnit): _15.DenomUnitProtoMsg;
            };
            Metadata: {
                encode(message: _15.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Metadata;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                }): _15.Metadata;
                fromAmino(object: _15.MetadataAmino): _15.Metadata;
                toAmino(message: _15.Metadata): _15.MetadataAmino;
                fromAminoMsg(object: _15.MetadataAminoMsg): _15.Metadata;
                toAminoMsg(message: _15.Metadata): _15.MetadataAminoMsg;
                fromProtoMsg(message: _15.MetadataProtoMsg): _15.Metadata;
                toProto(message: _15.Metadata): Uint8Array;
                toProtoMsg(message: _15.Metadata): _15.MetadataProtoMsg;
            };
            SendAuthorization: {
                encode(message: _14.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SendAuthorization;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _14.SendAuthorization;
                fromAmino(object: _14.SendAuthorizationAmino): _14.SendAuthorization;
                toAmino(message: _14.SendAuthorization): _14.SendAuthorizationAmino;
                fromAminoMsg(object: _14.SendAuthorizationAminoMsg): _14.SendAuthorization;
                toAminoMsg(message: _14.SendAuthorization): _14.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _14.SendAuthorizationProtoMsg): _14.SendAuthorization;
                toProto(message: _14.SendAuthorization): Uint8Array;
                toProtoMsg(message: _14.SendAuthorization): _14.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _19.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.TxResponse;
                    fromPartial(object: {
                        height?: string | number | import("long").Long;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").Long;
                        gasUsed?: string | number | import("long").Long;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _19.TxResponse;
                    fromAmino(object: _19.TxResponseAmino): _19.TxResponse;
                    toAmino(message: _19.TxResponse): _19.TxResponseAmino;
                    fromAminoMsg(object: _19.TxResponseAminoMsg): _19.TxResponse;
                    toAminoMsg(message: _19.TxResponse): _19.TxResponseAminoMsg;
                    fromProtoMsg(message: _19.TxResponseProtoMsg): _19.TxResponse;
                    toProto(message: _19.TxResponse): Uint8Array;
                    toProtoMsg(message: _19.TxResponse): _19.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    encode(message: _19.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ABCIMessageLog;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _19.ABCIMessageLog;
                    fromAmino(object: _19.ABCIMessageLogAmino): _19.ABCIMessageLog;
                    toAmino(message: _19.ABCIMessageLog): _19.ABCIMessageLogAmino;
                    fromAminoMsg(object: _19.ABCIMessageLogAminoMsg): _19.ABCIMessageLog;
                    toAminoMsg(message: _19.ABCIMessageLog): _19.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _19.ABCIMessageLogProtoMsg): _19.ABCIMessageLog;
                    toProto(message: _19.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _19.ABCIMessageLog): _19.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    encode(message: _19.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.StringEvent;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _19.StringEvent;
                    fromAmino(object: _19.StringEventAmino): _19.StringEvent;
                    toAmino(message: _19.StringEvent): _19.StringEventAmino;
                    fromAminoMsg(object: _19.StringEventAminoMsg): _19.StringEvent;
                    toAminoMsg(message: _19.StringEvent): _19.StringEventAminoMsg;
                    fromProtoMsg(message: _19.StringEventProtoMsg): _19.StringEvent;
                    toProto(message: _19.StringEvent): Uint8Array;
                    toProtoMsg(message: _19.StringEvent): _19.StringEventProtoMsg;
                };
                Attribute: {
                    encode(message: _19.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Attribute;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _19.Attribute;
                    fromAmino(object: _19.AttributeAmino): _19.Attribute;
                    toAmino(message: _19.Attribute): _19.AttributeAmino;
                    fromAminoMsg(object: _19.AttributeAminoMsg): _19.Attribute;
                    toAminoMsg(message: _19.Attribute): _19.AttributeAminoMsg;
                    fromProtoMsg(message: _19.AttributeProtoMsg): _19.Attribute;
                    toProto(message: _19.Attribute): Uint8Array;
                    toProtoMsg(message: _19.Attribute): _19.AttributeProtoMsg;
                };
                GasInfo: {
                    encode(message: _19.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GasInfo;
                    fromPartial(object: {
                        gasWanted?: string | number | import("long").Long;
                        gasUsed?: string | number | import("long").Long;
                    }): _19.GasInfo;
                    fromAmino(object: _19.GasInfoAmino): _19.GasInfo;
                    toAmino(message: _19.GasInfo): _19.GasInfoAmino;
                    fromAminoMsg(object: _19.GasInfoAminoMsg): _19.GasInfo;
                    toAminoMsg(message: _19.GasInfo): _19.GasInfoAminoMsg;
                    fromProtoMsg(message: _19.GasInfoProtoMsg): _19.GasInfo;
                    toProto(message: _19.GasInfo): Uint8Array;
                    toProtoMsg(message: _19.GasInfo): _19.GasInfoProtoMsg;
                };
                Result: {
                    encode(message: _19.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Result;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _19.Result;
                    fromAmino(object: _19.ResultAmino): _19.Result;
                    toAmino(message: _19.Result): _19.ResultAmino;
                    fromAminoMsg(object: _19.ResultAminoMsg): _19.Result;
                    toAminoMsg(message: _19.Result): _19.ResultAminoMsg;
                    fromProtoMsg(message: _19.ResultProtoMsg): _19.Result;
                    toProto(message: _19.Result): Uint8Array;
                    toProtoMsg(message: _19.Result): _19.ResultProtoMsg;
                };
                SimulationResponse: {
                    encode(message: _19.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SimulationResponse;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: string | number | import("long").Long;
                            gasUsed?: string | number | import("long").Long;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                            msgResponses?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _19.SimulationResponse;
                    fromAmino(object: _19.SimulationResponseAmino): _19.SimulationResponse;
                    toAmino(message: _19.SimulationResponse): _19.SimulationResponseAmino;
                    fromAminoMsg(object: _19.SimulationResponseAminoMsg): _19.SimulationResponse;
                    toAminoMsg(message: _19.SimulationResponse): _19.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _19.SimulationResponseProtoMsg): _19.SimulationResponse;
                    toProto(message: _19.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _19.SimulationResponse): _19.SimulationResponseProtoMsg;
                };
                MsgData: {
                    encode(message: _19.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgData;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _19.MsgData;
                    fromAmino(object: _19.MsgDataAmino): _19.MsgData;
                    toAmino(message: _19.MsgData): _19.MsgDataAmino;
                    fromAminoMsg(object: _19.MsgDataAminoMsg): _19.MsgData;
                    toAminoMsg(message: _19.MsgData): _19.MsgDataAminoMsg;
                    fromProtoMsg(message: _19.MsgDataProtoMsg): _19.MsgData;
                    toProto(message: _19.MsgData): Uint8Array;
                    toProtoMsg(message: _19.MsgData): _19.MsgDataProtoMsg;
                };
                TxMsgData: {
                    encode(message: _19.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.TxMsgData;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _19.TxMsgData;
                    fromAmino(object: _19.TxMsgDataAmino): _19.TxMsgData;
                    toAmino(message: _19.TxMsgData): _19.TxMsgDataAmino;
                    fromAminoMsg(object: _19.TxMsgDataAminoMsg): _19.TxMsgData;
                    toAminoMsg(message: _19.TxMsgData): _19.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _19.TxMsgDataProtoMsg): _19.TxMsgData;
                    toProto(message: _19.TxMsgData): Uint8Array;
                    toProtoMsg(message: _19.TxMsgData): _19.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    encode(message: _19.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SearchTxsResult;
                    fromPartial(object: {
                        totalCount?: string | number | import("long").Long;
                        count?: string | number | import("long").Long;
                        pageNumber?: string | number | import("long").Long;
                        pageTotal?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        txs?: {
                            height?: string | number | import("long").Long;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gasWanted?: string | number | import("long").Long;
                            gasUsed?: string | number | import("long").Long;
                            tx?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _19.SearchTxsResult;
                    fromAmino(object: _19.SearchTxsResultAmino): _19.SearchTxsResult;
                    toAmino(message: _19.SearchTxsResult): _19.SearchTxsResultAmino;
                    fromAminoMsg(object: _19.SearchTxsResultAminoMsg): _19.SearchTxsResult;
                    toAminoMsg(message: _19.SearchTxsResult): _19.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _19.SearchTxsResultProtoMsg): _19.SearchTxsResult;
                    toProto(message: _19.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _19.SearchTxsResult): _19.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _20.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Pairs;
                    fromPartial(object: {
                        pairs?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _20.Pairs;
                    fromAmino(object: _20.PairsAmino): _20.Pairs;
                    toAmino(message: _20.Pairs): _20.PairsAmino;
                    fromAminoMsg(object: _20.PairsAminoMsg): _20.Pairs;
                    toAminoMsg(message: _20.Pairs): _20.PairsAminoMsg;
                    fromProtoMsg(message: _20.PairsProtoMsg): _20.Pairs;
                    toProto(message: _20.Pairs): Uint8Array;
                    toProtoMsg(message: _20.Pairs): _20.PairsProtoMsg;
                };
                Pair: {
                    encode(message: _20.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Pair;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _20.Pair;
                    fromAmino(object: _20.PairAmino): _20.Pair;
                    toAmino(message: _20.Pair): _20.PairAmino;
                    fromAminoMsg(object: _20.PairAminoMsg): _20.Pair;
                    toAminoMsg(message: _20.Pair): _20.PairAminoMsg;
                    fromProtoMsg(message: _20.PairProtoMsg): _20.Pair;
                    toProto(message: _20.Pair): Uint8Array;
                    toProtoMsg(message: _20.Pair): _20.PairProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _21.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PageRequest;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _21.PageRequest;
                    fromAmino(object: _21.PageRequestAmino): _21.PageRequest;
                    toAmino(message: _21.PageRequest): _21.PageRequestAmino;
                    fromAminoMsg(object: _21.PageRequestAminoMsg): _21.PageRequest;
                    toAminoMsg(message: _21.PageRequest): _21.PageRequestAminoMsg;
                    fromProtoMsg(message: _21.PageRequestProtoMsg): _21.PageRequest;
                    toProto(message: _21.PageRequest): Uint8Array;
                    toProtoMsg(message: _21.PageRequest): _21.PageRequestProtoMsg;
                };
                PageResponse: {
                    encode(message: _21.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PageResponse;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    }): _21.PageResponse;
                    fromAmino(object: _21.PageResponseAmino): _21.PageResponse;
                    toAmino(message: _21.PageResponse): _21.PageResponseAmino;
                    fromAminoMsg(object: _21.PageResponseAminoMsg): _21.PageResponse;
                    toAminoMsg(message: _21.PageResponse): _21.PageResponseAminoMsg;
                    fromProtoMsg(message: _21.PageResponseProtoMsg): _21.PageResponse;
                    toProto(message: _21.PageResponse): Uint8Array;
                    toProtoMsg(message: _21.PageResponse): _21.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _22.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ListAllInterfacesRequest;
                    fromPartial(_: {}): _22.ListAllInterfacesRequest;
                    fromAmino(_: _22.ListAllInterfacesRequestAmino): _22.ListAllInterfacesRequest;
                    toAmino(_: _22.ListAllInterfacesRequest): _22.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _22.ListAllInterfacesRequestAminoMsg): _22.ListAllInterfacesRequest;
                    toAminoMsg(message: _22.ListAllInterfacesRequest): _22.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _22.ListAllInterfacesRequestProtoMsg): _22.ListAllInterfacesRequest;
                    toProto(message: _22.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _22.ListAllInterfacesRequest): _22.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    encode(message: _22.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ListAllInterfacesResponse;
                    fromPartial(object: {
                        interfaceNames?: string[];
                    }): _22.ListAllInterfacesResponse;
                    fromAmino(object: _22.ListAllInterfacesResponseAmino): _22.ListAllInterfacesResponse;
                    toAmino(message: _22.ListAllInterfacesResponse): _22.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _22.ListAllInterfacesResponseAminoMsg): _22.ListAllInterfacesResponse;
                    toAminoMsg(message: _22.ListAllInterfacesResponse): _22.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _22.ListAllInterfacesResponseProtoMsg): _22.ListAllInterfacesResponse;
                    toProto(message: _22.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _22.ListAllInterfacesResponse): _22.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    encode(message: _22.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ListImplementationsRequest;
                    fromPartial(object: {
                        interfaceName?: string;
                    }): _22.ListImplementationsRequest;
                    fromAmino(object: _22.ListImplementationsRequestAmino): _22.ListImplementationsRequest;
                    toAmino(message: _22.ListImplementationsRequest): _22.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _22.ListImplementationsRequestAminoMsg): _22.ListImplementationsRequest;
                    toAminoMsg(message: _22.ListImplementationsRequest): _22.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _22.ListImplementationsRequestProtoMsg): _22.ListImplementationsRequest;
                    toProto(message: _22.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _22.ListImplementationsRequest): _22.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    encode(message: _22.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ListImplementationsResponse;
                    fromPartial(object: {
                        implementationMessageNames?: string[];
                    }): _22.ListImplementationsResponse;
                    fromAmino(object: _22.ListImplementationsResponseAmino): _22.ListImplementationsResponse;
                    toAmino(message: _22.ListImplementationsResponse): _22.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _22.ListImplementationsResponseAminoMsg): _22.ListImplementationsResponse;
                    toAminoMsg(message: _22.ListImplementationsResponse): _22.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _22.ListImplementationsResponseProtoMsg): _22.ListImplementationsResponse;
                    toProto(message: _22.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _22.ListImplementationsResponse): _22.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _23.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.AppDescriptor;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _23.AppDescriptor;
                    fromAmino(object: _23.AppDescriptorAmino): _23.AppDescriptor;
                    toAmino(message: _23.AppDescriptor): _23.AppDescriptorAmino;
                    fromAminoMsg(object: _23.AppDescriptorAminoMsg): _23.AppDescriptor;
                    toAminoMsg(message: _23.AppDescriptor): _23.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _23.AppDescriptorProtoMsg): _23.AppDescriptor;
                    toProto(message: _23.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _23.AppDescriptor): _23.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    encode(message: _23.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.TxDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _23.TxDescriptor;
                    fromAmino(object: _23.TxDescriptorAmino): _23.TxDescriptor;
                    toAmino(message: _23.TxDescriptor): _23.TxDescriptorAmino;
                    fromAminoMsg(object: _23.TxDescriptorAminoMsg): _23.TxDescriptor;
                    toAminoMsg(message: _23.TxDescriptor): _23.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _23.TxDescriptorProtoMsg): _23.TxDescriptor;
                    toProto(message: _23.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _23.TxDescriptor): _23.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    encode(message: _23.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.AuthnDescriptor;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _23.AuthnDescriptor;
                    fromAmino(object: _23.AuthnDescriptorAmino): _23.AuthnDescriptor;
                    toAmino(message: _23.AuthnDescriptor): _23.AuthnDescriptorAmino;
                    fromAminoMsg(object: _23.AuthnDescriptorAminoMsg): _23.AuthnDescriptor;
                    toAminoMsg(message: _23.AuthnDescriptor): _23.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _23.AuthnDescriptorProtoMsg): _23.AuthnDescriptor;
                    toProto(message: _23.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _23.AuthnDescriptor): _23.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    encode(message: _23.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SigningModeDescriptor;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _23.SigningModeDescriptor;
                    fromAmino(object: _23.SigningModeDescriptorAmino): _23.SigningModeDescriptor;
                    toAmino(message: _23.SigningModeDescriptor): _23.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _23.SigningModeDescriptorAminoMsg): _23.SigningModeDescriptor;
                    toAminoMsg(message: _23.SigningModeDescriptor): _23.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _23.SigningModeDescriptorProtoMsg): _23.SigningModeDescriptor;
                    toProto(message: _23.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _23.SigningModeDescriptor): _23.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    encode(message: _23.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ChainDescriptor;
                    fromPartial(object: {
                        id?: string;
                    }): _23.ChainDescriptor;
                    fromAmino(object: _23.ChainDescriptorAmino): _23.ChainDescriptor;
                    toAmino(message: _23.ChainDescriptor): _23.ChainDescriptorAmino;
                    fromAminoMsg(object: _23.ChainDescriptorAminoMsg): _23.ChainDescriptor;
                    toAminoMsg(message: _23.ChainDescriptor): _23.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _23.ChainDescriptorProtoMsg): _23.ChainDescriptor;
                    toProto(message: _23.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _23.ChainDescriptor): _23.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    encode(message: _23.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.CodecDescriptor;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _23.CodecDescriptor;
                    fromAmino(object: _23.CodecDescriptorAmino): _23.CodecDescriptor;
                    toAmino(message: _23.CodecDescriptor): _23.CodecDescriptorAmino;
                    fromAminoMsg(object: _23.CodecDescriptorAminoMsg): _23.CodecDescriptor;
                    toAminoMsg(message: _23.CodecDescriptor): _23.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _23.CodecDescriptorProtoMsg): _23.CodecDescriptor;
                    toProto(message: _23.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _23.CodecDescriptor): _23.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    encode(message: _23.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.InterfaceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _23.InterfaceDescriptor;
                    fromAmino(object: _23.InterfaceDescriptorAmino): _23.InterfaceDescriptor;
                    toAmino(message: _23.InterfaceDescriptor): _23.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _23.InterfaceDescriptorAminoMsg): _23.InterfaceDescriptor;
                    toAminoMsg(message: _23.InterfaceDescriptor): _23.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _23.InterfaceDescriptorProtoMsg): _23.InterfaceDescriptor;
                    toProto(message: _23.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _23.InterfaceDescriptor): _23.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _23.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.InterfaceImplementerDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _23.InterfaceImplementerDescriptor;
                    fromAmino(object: _23.InterfaceImplementerDescriptorAmino): _23.InterfaceImplementerDescriptor;
                    toAmino(message: _23.InterfaceImplementerDescriptor): _23.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _23.InterfaceImplementerDescriptorAminoMsg): _23.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _23.InterfaceImplementerDescriptor): _23.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _23.InterfaceImplementerDescriptorProtoMsg): _23.InterfaceImplementerDescriptor;
                    toProto(message: _23.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _23.InterfaceImplementerDescriptor): _23.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _23.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _23.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _23.InterfaceAcceptingMessageDescriptorAmino): _23.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _23.InterfaceAcceptingMessageDescriptor): _23.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _23.InterfaceAcceptingMessageDescriptorAminoMsg): _23.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _23.InterfaceAcceptingMessageDescriptor): _23.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _23.InterfaceAcceptingMessageDescriptorProtoMsg): _23.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _23.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _23.InterfaceAcceptingMessageDescriptor): _23.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    encode(message: _23.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ConfigurationDescriptor;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _23.ConfigurationDescriptor;
                    fromAmino(object: _23.ConfigurationDescriptorAmino): _23.ConfigurationDescriptor;
                    toAmino(message: _23.ConfigurationDescriptor): _23.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _23.ConfigurationDescriptorAminoMsg): _23.ConfigurationDescriptor;
                    toAminoMsg(message: _23.ConfigurationDescriptor): _23.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _23.ConfigurationDescriptorProtoMsg): _23.ConfigurationDescriptor;
                    toProto(message: _23.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _23.ConfigurationDescriptor): _23.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    encode(message: _23.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgDescriptor;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _23.MsgDescriptor;
                    fromAmino(object: _23.MsgDescriptorAmino): _23.MsgDescriptor;
                    toAmino(message: _23.MsgDescriptor): _23.MsgDescriptorAmino;
                    fromAminoMsg(object: _23.MsgDescriptorAminoMsg): _23.MsgDescriptor;
                    toAminoMsg(message: _23.MsgDescriptor): _23.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _23.MsgDescriptorProtoMsg): _23.MsgDescriptor;
                    toProto(message: _23.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _23.MsgDescriptor): _23.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _23.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetAuthnDescriptorRequest;
                    fromPartial(_: {}): _23.GetAuthnDescriptorRequest;
                    fromAmino(_: _23.GetAuthnDescriptorRequestAmino): _23.GetAuthnDescriptorRequest;
                    toAmino(_: _23.GetAuthnDescriptorRequest): _23.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _23.GetAuthnDescriptorRequestAminoMsg): _23.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _23.GetAuthnDescriptorRequest): _23.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _23.GetAuthnDescriptorRequestProtoMsg): _23.GetAuthnDescriptorRequest;
                    toProto(message: _23.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _23.GetAuthnDescriptorRequest): _23.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _23.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetAuthnDescriptorResponse;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _23.GetAuthnDescriptorResponse;
                    fromAmino(object: _23.GetAuthnDescriptorResponseAmino): _23.GetAuthnDescriptorResponse;
                    toAmino(message: _23.GetAuthnDescriptorResponse): _23.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _23.GetAuthnDescriptorResponseAminoMsg): _23.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _23.GetAuthnDescriptorResponse): _23.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _23.GetAuthnDescriptorResponseProtoMsg): _23.GetAuthnDescriptorResponse;
                    toProto(message: _23.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _23.GetAuthnDescriptorResponse): _23.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    encode(_: _23.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetChainDescriptorRequest;
                    fromPartial(_: {}): _23.GetChainDescriptorRequest;
                    fromAmino(_: _23.GetChainDescriptorRequestAmino): _23.GetChainDescriptorRequest;
                    toAmino(_: _23.GetChainDescriptorRequest): _23.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _23.GetChainDescriptorRequestAminoMsg): _23.GetChainDescriptorRequest;
                    toAminoMsg(message: _23.GetChainDescriptorRequest): _23.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _23.GetChainDescriptorRequestProtoMsg): _23.GetChainDescriptorRequest;
                    toProto(message: _23.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _23.GetChainDescriptorRequest): _23.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    encode(message: _23.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetChainDescriptorResponse;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _23.GetChainDescriptorResponse;
                    fromAmino(object: _23.GetChainDescriptorResponseAmino): _23.GetChainDescriptorResponse;
                    toAmino(message: _23.GetChainDescriptorResponse): _23.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _23.GetChainDescriptorResponseAminoMsg): _23.GetChainDescriptorResponse;
                    toAminoMsg(message: _23.GetChainDescriptorResponse): _23.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _23.GetChainDescriptorResponseProtoMsg): _23.GetChainDescriptorResponse;
                    toProto(message: _23.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _23.GetChainDescriptorResponse): _23.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _23.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetCodecDescriptorRequest;
                    fromPartial(_: {}): _23.GetCodecDescriptorRequest;
                    fromAmino(_: _23.GetCodecDescriptorRequestAmino): _23.GetCodecDescriptorRequest;
                    toAmino(_: _23.GetCodecDescriptorRequest): _23.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _23.GetCodecDescriptorRequestAminoMsg): _23.GetCodecDescriptorRequest;
                    toAminoMsg(message: _23.GetCodecDescriptorRequest): _23.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _23.GetCodecDescriptorRequestProtoMsg): _23.GetCodecDescriptorRequest;
                    toProto(message: _23.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _23.GetCodecDescriptorRequest): _23.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _23.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetCodecDescriptorResponse;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _23.GetCodecDescriptorResponse;
                    fromAmino(object: _23.GetCodecDescriptorResponseAmino): _23.GetCodecDescriptorResponse;
                    toAmino(message: _23.GetCodecDescriptorResponse): _23.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _23.GetCodecDescriptorResponseAminoMsg): _23.GetCodecDescriptorResponse;
                    toAminoMsg(message: _23.GetCodecDescriptorResponse): _23.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _23.GetCodecDescriptorResponseProtoMsg): _23.GetCodecDescriptorResponse;
                    toProto(message: _23.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _23.GetCodecDescriptorResponse): _23.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _23.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetConfigurationDescriptorRequest;
                    fromPartial(_: {}): _23.GetConfigurationDescriptorRequest;
                    fromAmino(_: _23.GetConfigurationDescriptorRequestAmino): _23.GetConfigurationDescriptorRequest;
                    toAmino(_: _23.GetConfigurationDescriptorRequest): _23.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _23.GetConfigurationDescriptorRequestAminoMsg): _23.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _23.GetConfigurationDescriptorRequest): _23.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _23.GetConfigurationDescriptorRequestProtoMsg): _23.GetConfigurationDescriptorRequest;
                    toProto(message: _23.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _23.GetConfigurationDescriptorRequest): _23.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _23.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetConfigurationDescriptorResponse;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _23.GetConfigurationDescriptorResponse;
                    fromAmino(object: _23.GetConfigurationDescriptorResponseAmino): _23.GetConfigurationDescriptorResponse;
                    toAmino(message: _23.GetConfigurationDescriptorResponse): _23.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _23.GetConfigurationDescriptorResponseAminoMsg): _23.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _23.GetConfigurationDescriptorResponse): _23.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _23.GetConfigurationDescriptorResponseProtoMsg): _23.GetConfigurationDescriptorResponse;
                    toProto(message: _23.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _23.GetConfigurationDescriptorResponse): _23.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _23.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetQueryServicesDescriptorRequest;
                    fromPartial(_: {}): _23.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _23.GetQueryServicesDescriptorRequestAmino): _23.GetQueryServicesDescriptorRequest;
                    toAmino(_: _23.GetQueryServicesDescriptorRequest): _23.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _23.GetQueryServicesDescriptorRequestAminoMsg): _23.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _23.GetQueryServicesDescriptorRequest): _23.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _23.GetQueryServicesDescriptorRequestProtoMsg): _23.GetQueryServicesDescriptorRequest;
                    toProto(message: _23.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _23.GetQueryServicesDescriptorRequest): _23.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _23.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetQueryServicesDescriptorResponse;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _23.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _23.GetQueryServicesDescriptorResponseAmino): _23.GetQueryServicesDescriptorResponse;
                    toAmino(message: _23.GetQueryServicesDescriptorResponse): _23.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _23.GetQueryServicesDescriptorResponseAminoMsg): _23.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _23.GetQueryServicesDescriptorResponse): _23.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _23.GetQueryServicesDescriptorResponseProtoMsg): _23.GetQueryServicesDescriptorResponse;
                    toProto(message: _23.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _23.GetQueryServicesDescriptorResponse): _23.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    encode(_: _23.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetTxDescriptorRequest;
                    fromPartial(_: {}): _23.GetTxDescriptorRequest;
                    fromAmino(_: _23.GetTxDescriptorRequestAmino): _23.GetTxDescriptorRequest;
                    toAmino(_: _23.GetTxDescriptorRequest): _23.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _23.GetTxDescriptorRequestAminoMsg): _23.GetTxDescriptorRequest;
                    toAminoMsg(message: _23.GetTxDescriptorRequest): _23.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _23.GetTxDescriptorRequestProtoMsg): _23.GetTxDescriptorRequest;
                    toProto(message: _23.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _23.GetTxDescriptorRequest): _23.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    encode(message: _23.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GetTxDescriptorResponse;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _23.GetTxDescriptorResponse;
                    fromAmino(object: _23.GetTxDescriptorResponseAmino): _23.GetTxDescriptorResponse;
                    toAmino(message: _23.GetTxDescriptorResponse): _23.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _23.GetTxDescriptorResponseAminoMsg): _23.GetTxDescriptorResponse;
                    toAminoMsg(message: _23.GetTxDescriptorResponse): _23.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _23.GetTxDescriptorResponseProtoMsg): _23.GetTxDescriptorResponse;
                    toProto(message: _23.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _23.GetTxDescriptorResponse): _23.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    encode(message: _23.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryServicesDescriptor;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _23.QueryServicesDescriptor;
                    fromAmino(object: _23.QueryServicesDescriptorAmino): _23.QueryServicesDescriptor;
                    toAmino(message: _23.QueryServicesDescriptor): _23.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _23.QueryServicesDescriptorAminoMsg): _23.QueryServicesDescriptor;
                    toAminoMsg(message: _23.QueryServicesDescriptor): _23.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _23.QueryServicesDescriptorProtoMsg): _23.QueryServicesDescriptor;
                    toProto(message: _23.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _23.QueryServicesDescriptor): _23.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    encode(message: _23.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryServiceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _23.QueryServiceDescriptor;
                    fromAmino(object: _23.QueryServiceDescriptorAmino): _23.QueryServiceDescriptor;
                    toAmino(message: _23.QueryServiceDescriptor): _23.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _23.QueryServiceDescriptorAminoMsg): _23.QueryServiceDescriptor;
                    toAminoMsg(message: _23.QueryServiceDescriptor): _23.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _23.QueryServiceDescriptorProtoMsg): _23.QueryServiceDescriptor;
                    toProto(message: _23.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _23.QueryServiceDescriptor): _23.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    encode(message: _23.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryMethodDescriptor;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _23.QueryMethodDescriptor;
                    fromAmino(object: _23.QueryMethodDescriptorAmino): _23.QueryMethodDescriptor;
                    toAmino(message: _23.QueryMethodDescriptor): _23.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _23.QueryMethodDescriptorAminoMsg): _23.QueryMethodDescriptor;
                    toAminoMsg(message: _23.QueryMethodDescriptor): _23.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _23.QueryMethodDescriptorProtoMsg): _23.QueryMethodDescriptor;
                    toProto(message: _23.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _23.QueryMethodDescriptor): _23.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _24.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Snapshot;
                    fromPartial(object: {
                        height?: string | number | import("long").Long;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: {
                            chunkHashes?: Uint8Array[];
                        };
                    }): _24.Snapshot;
                    fromAmino(object: _24.SnapshotAmino): _24.Snapshot;
                    toAmino(message: _24.Snapshot): _24.SnapshotAmino;
                    fromAminoMsg(object: _24.SnapshotAminoMsg): _24.Snapshot;
                    toAminoMsg(message: _24.Snapshot): _24.SnapshotAminoMsg;
                    fromProtoMsg(message: _24.SnapshotProtoMsg): _24.Snapshot;
                    toProto(message: _24.Snapshot): Uint8Array;
                    toProtoMsg(message: _24.Snapshot): _24.SnapshotProtoMsg;
                };
                Metadata: {
                    encode(message: _24.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Metadata;
                    fromPartial(object: {
                        chunkHashes?: Uint8Array[];
                    }): _24.Metadata;
                    fromAmino(object: _24.MetadataAmino): _24.Metadata;
                    toAmino(message: _24.Metadata): _24.MetadataAmino;
                    fromAminoMsg(object: _24.MetadataAminoMsg): _24.Metadata;
                    toAminoMsg(message: _24.Metadata): _24.MetadataAminoMsg;
                    fromProtoMsg(message: _24.MetadataProtoMsg): _24.Metadata;
                    toProto(message: _24.Metadata): Uint8Array;
                    toProtoMsg(message: _24.Metadata): _24.MetadataProtoMsg;
                };
                SnapshotItem: {
                    encode(message: _24.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotItem;
                    fromPartial(object: {
                        store?: {
                            name?: string;
                        };
                        iavl?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            version?: string | number | import("long").Long;
                            height?: number;
                        };
                        extension?: {
                            name?: string;
                            format?: number;
                        };
                        extensionPayload?: {
                            payload?: Uint8Array;
                        };
                        kv?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        };
                        schema?: {
                            keys?: Uint8Array[];
                        };
                    }): _24.SnapshotItem;
                    fromAmino(object: _24.SnapshotItemAmino): _24.SnapshotItem;
                    toAmino(message: _24.SnapshotItem): _24.SnapshotItemAmino;
                    fromAminoMsg(object: _24.SnapshotItemAminoMsg): _24.SnapshotItem;
                    toAminoMsg(message: _24.SnapshotItem): _24.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _24.SnapshotItemProtoMsg): _24.SnapshotItem;
                    toProto(message: _24.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _24.SnapshotItem): _24.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    encode(message: _24.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotStoreItem;
                    fromPartial(object: {
                        name?: string;
                    }): _24.SnapshotStoreItem;
                    fromAmino(object: _24.SnapshotStoreItemAmino): _24.SnapshotStoreItem;
                    toAmino(message: _24.SnapshotStoreItem): _24.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _24.SnapshotStoreItemAminoMsg): _24.SnapshotStoreItem;
                    toAminoMsg(message: _24.SnapshotStoreItem): _24.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _24.SnapshotStoreItemProtoMsg): _24.SnapshotStoreItem;
                    toProto(message: _24.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _24.SnapshotStoreItem): _24.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    encode(message: _24.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotIAVLItem;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        version?: string | number | import("long").Long;
                        height?: number;
                    }): _24.SnapshotIAVLItem;
                    fromAmino(object: _24.SnapshotIAVLItemAmino): _24.SnapshotIAVLItem;
                    toAmino(message: _24.SnapshotIAVLItem): _24.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _24.SnapshotIAVLItemAminoMsg): _24.SnapshotIAVLItem;
                    toAminoMsg(message: _24.SnapshotIAVLItem): _24.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _24.SnapshotIAVLItemProtoMsg): _24.SnapshotIAVLItem;
                    toProto(message: _24.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _24.SnapshotIAVLItem): _24.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    encode(message: _24.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotExtensionMeta;
                    fromPartial(object: {
                        name?: string;
                        format?: number;
                    }): _24.SnapshotExtensionMeta;
                    fromAmino(object: _24.SnapshotExtensionMetaAmino): _24.SnapshotExtensionMeta;
                    toAmino(message: _24.SnapshotExtensionMeta): _24.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _24.SnapshotExtensionMetaAminoMsg): _24.SnapshotExtensionMeta;
                    toAminoMsg(message: _24.SnapshotExtensionMeta): _24.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _24.SnapshotExtensionMetaProtoMsg): _24.SnapshotExtensionMeta;
                    toProto(message: _24.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _24.SnapshotExtensionMeta): _24.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    encode(message: _24.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotExtensionPayload;
                    fromPartial(object: {
                        payload?: Uint8Array;
                    }): _24.SnapshotExtensionPayload;
                    fromAmino(object: _24.SnapshotExtensionPayloadAmino): _24.SnapshotExtensionPayload;
                    toAmino(message: _24.SnapshotExtensionPayload): _24.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _24.SnapshotExtensionPayloadAminoMsg): _24.SnapshotExtensionPayload;
                    toAminoMsg(message: _24.SnapshotExtensionPayload): _24.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _24.SnapshotExtensionPayloadProtoMsg): _24.SnapshotExtensionPayload;
                    toProto(message: _24.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _24.SnapshotExtensionPayload): _24.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    encode(message: _24.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotKVItem;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _24.SnapshotKVItem;
                    fromAmino(object: _24.SnapshotKVItemAmino): _24.SnapshotKVItem;
                    toAmino(message: _24.SnapshotKVItem): _24.SnapshotKVItemAmino;
                    fromAminoMsg(object: _24.SnapshotKVItemAminoMsg): _24.SnapshotKVItem;
                    toAminoMsg(message: _24.SnapshotKVItem): _24.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _24.SnapshotKVItemProtoMsg): _24.SnapshotKVItem;
                    toProto(message: _24.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _24.SnapshotKVItem): _24.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    encode(message: _24.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SnapshotSchema;
                    fromPartial(object: {
                        keys?: Uint8Array[];
                    }): _24.SnapshotSchema;
                    fromAmino(object: _24.SnapshotSchemaAmino): _24.SnapshotSchema;
                    toAmino(message: _24.SnapshotSchema): _24.SnapshotSchemaAmino;
                    fromAminoMsg(object: _24.SnapshotSchemaAminoMsg): _24.SnapshotSchema;
                    toAminoMsg(message: _24.SnapshotSchema): _24.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _24.SnapshotSchemaProtoMsg): _24.SnapshotSchema;
                    toProto(message: _24.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _24.SnapshotSchema): _24.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _26.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.StoreKVPair;
                    fromPartial(object: {
                        storeKey?: string;
                        delete?: boolean;
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _26.StoreKVPair;
                    fromAmino(object: _26.StoreKVPairAmino): _26.StoreKVPair;
                    toAmino(message: _26.StoreKVPair): _26.StoreKVPairAmino;
                    fromAminoMsg(object: _26.StoreKVPairAminoMsg): _26.StoreKVPair;
                    toAminoMsg(message: _26.StoreKVPair): _26.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _26.StoreKVPairProtoMsg): _26.StoreKVPair;
                    toProto(message: _26.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _26.StoreKVPair): _26.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    encode(message: _25.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CommitInfo;
                    fromPartial(object: {
                        version?: string | number | import("long").Long;
                        storeInfos?: {
                            name?: string;
                            commitId?: {
                                version?: string | number | import("long").Long;
                                hash?: Uint8Array;
                            };
                        }[];
                    }): _25.CommitInfo;
                    fromAmino(object: _25.CommitInfoAmino): _25.CommitInfo;
                    toAmino(message: _25.CommitInfo): _25.CommitInfoAmino;
                    fromAminoMsg(object: _25.CommitInfoAminoMsg): _25.CommitInfo;
                    toAminoMsg(message: _25.CommitInfo): _25.CommitInfoAminoMsg;
                    fromProtoMsg(message: _25.CommitInfoProtoMsg): _25.CommitInfo;
                    toProto(message: _25.CommitInfo): Uint8Array;
                    toProtoMsg(message: _25.CommitInfo): _25.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    encode(message: _25.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.StoreInfo;
                    fromPartial(object: {
                        name?: string;
                        commitId?: {
                            version?: string | number | import("long").Long;
                            hash?: Uint8Array;
                        };
                    }): _25.StoreInfo;
                    fromAmino(object: _25.StoreInfoAmino): _25.StoreInfo;
                    toAmino(message: _25.StoreInfo): _25.StoreInfoAmino;
                    fromAminoMsg(object: _25.StoreInfoAminoMsg): _25.StoreInfo;
                    toAminoMsg(message: _25.StoreInfo): _25.StoreInfoAminoMsg;
                    fromProtoMsg(message: _25.StoreInfoProtoMsg): _25.StoreInfo;
                    toProto(message: _25.StoreInfo): Uint8Array;
                    toProtoMsg(message: _25.StoreInfo): _25.StoreInfoProtoMsg;
                };
                CommitID: {
                    encode(message: _25.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CommitID;
                    fromPartial(object: {
                        version?: string | number | import("long").Long;
                        hash?: Uint8Array;
                    }): _25.CommitID;
                    fromAmino(object: _25.CommitIDAmino): _25.CommitID;
                    toAmino(message: _25.CommitID): _25.CommitIDAmino;
                    fromAminoMsg(object: _25.CommitIDAminoMsg): _25.CommitID;
                    toAminoMsg(message: _25.CommitID): _25.CommitIDAminoMsg;
                    fromProtoMsg(message: _25.CommitIDProtoMsg): _25.CommitID;
                    toProto(message: _25.CommitID): Uint8Array;
                    toProtoMsg(message: _25.CommitID): _25.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _210.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _27.GetNodeInfoRequest): Promise<_27.GetNodeInfoResponse>;
                    getSyncing(request?: _27.GetSyncingRequest): Promise<_27.GetSyncingResponse>;
                    getLatestBlock(request?: _27.GetLatestBlockRequest): Promise<_27.GetLatestBlockResponse>;
                    getBlockByHeight(request: _27.GetBlockByHeightRequest): Promise<_27.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _27.GetLatestValidatorSetRequest): Promise<_27.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _27.GetValidatorSetByHeightRequest): Promise<_27.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _27.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetValidatorSetByHeightRequest;
                    fromPartial(object: {
                        height?: string | number | import("long").Long;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _27.GetValidatorSetByHeightRequest;
                    fromAmino(object: _27.GetValidatorSetByHeightRequestAmino): _27.GetValidatorSetByHeightRequest;
                    toAmino(message: _27.GetValidatorSetByHeightRequest): _27.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _27.GetValidatorSetByHeightRequestAminoMsg): _27.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _27.GetValidatorSetByHeightRequest): _27.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _27.GetValidatorSetByHeightRequestProtoMsg): _27.GetValidatorSetByHeightRequest;
                    toProto(message: _27.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _27.GetValidatorSetByHeightRequest): _27.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _27.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetValidatorSetByHeightResponse;
                    fromPartial(object: {
                        blockHeight?: string | number | import("long").Long;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").Long;
                            proposerPriority?: string | number | import("long").Long;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                    }): _27.GetValidatorSetByHeightResponse;
                    fromAmino(object: _27.GetValidatorSetByHeightResponseAmino): _27.GetValidatorSetByHeightResponse;
                    toAmino(message: _27.GetValidatorSetByHeightResponse): _27.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _27.GetValidatorSetByHeightResponseAminoMsg): _27.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _27.GetValidatorSetByHeightResponse): _27.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _27.GetValidatorSetByHeightResponseProtoMsg): _27.GetValidatorSetByHeightResponse;
                    toProto(message: _27.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _27.GetValidatorSetByHeightResponse): _27.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _27.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetLatestValidatorSetRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _27.GetLatestValidatorSetRequest;
                    fromAmino(object: _27.GetLatestValidatorSetRequestAmino): _27.GetLatestValidatorSetRequest;
                    toAmino(message: _27.GetLatestValidatorSetRequest): _27.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _27.GetLatestValidatorSetRequestAminoMsg): _27.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _27.GetLatestValidatorSetRequest): _27.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _27.GetLatestValidatorSetRequestProtoMsg): _27.GetLatestValidatorSetRequest;
                    toProto(message: _27.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _27.GetLatestValidatorSetRequest): _27.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _27.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetLatestValidatorSetResponse;
                    fromPartial(object: {
                        blockHeight?: string | number | import("long").Long;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").Long;
                            proposerPriority?: string | number | import("long").Long;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                    }): _27.GetLatestValidatorSetResponse;
                    fromAmino(object: _27.GetLatestValidatorSetResponseAmino): _27.GetLatestValidatorSetResponse;
                    toAmino(message: _27.GetLatestValidatorSetResponse): _27.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _27.GetLatestValidatorSetResponseAminoMsg): _27.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _27.GetLatestValidatorSetResponse): _27.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _27.GetLatestValidatorSetResponseProtoMsg): _27.GetLatestValidatorSetResponse;
                    toProto(message: _27.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _27.GetLatestValidatorSetResponse): _27.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    encode(message: _27.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Validator;
                    fromPartial(object: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        votingPower?: string | number | import("long").Long;
                        proposerPriority?: string | number | import("long").Long;
                    }): _27.Validator;
                    fromAmino(object: _27.ValidatorAmino): _27.Validator;
                    toAmino(message: _27.Validator): _27.ValidatorAmino;
                    fromAminoMsg(object: _27.ValidatorAminoMsg): _27.Validator;
                    toAminoMsg(message: _27.Validator): _27.ValidatorAminoMsg;
                    fromProtoMsg(message: _27.ValidatorProtoMsg): _27.Validator;
                    toProto(message: _27.Validator): Uint8Array;
                    toProtoMsg(message: _27.Validator): _27.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    encode(message: _27.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetBlockByHeightRequest;
                    fromPartial(object: {
                        height?: string | number | import("long").Long;
                    }): _27.GetBlockByHeightRequest;
                    fromAmino(object: _27.GetBlockByHeightRequestAmino): _27.GetBlockByHeightRequest;
                    toAmino(message: _27.GetBlockByHeightRequest): _27.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _27.GetBlockByHeightRequestAminoMsg): _27.GetBlockByHeightRequest;
                    toAminoMsg(message: _27.GetBlockByHeightRequest): _27.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _27.GetBlockByHeightRequestProtoMsg): _27.GetBlockByHeightRequest;
                    toProto(message: _27.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _27.GetBlockByHeightRequest): _27.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    encode(message: _27.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetBlockByHeightResponse;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long;
                                    app?: string | number | import("long").Long;
                                };
                                chainId?: string;
                                height?: string | number | import("long").Long;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").Long;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").Long;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: string | number | import("long").Long;
                                        validatorPower?: string | number | import("long").Long;
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long").Long;
                                                        app?: string | number | import("long").Long;
                                                    };
                                                    chainId?: string;
                                                    height?: string | number | import("long").Long;
                                                    time?: Date;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: string | number | import("long").Long;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: string | number | import("long").Long;
                                                    proposerPriority?: string | number | import("long").Long;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: string | number | import("long").Long;
                                                    proposerPriority?: string | number | import("long").Long;
                                                };
                                                totalVotingPower?: string | number | import("long").Long;
                                            };
                                        };
                                        commonHeight?: string | number | import("long").Long;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: string | number | import("long").Long;
                                            proposerPriority?: string | number | import("long").Long;
                                        }[];
                                        totalVotingPower?: string | number | import("long").Long;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: string | number | import("long").Long;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _27.GetBlockByHeightResponse;
                    fromAmino(object: _27.GetBlockByHeightResponseAmino): _27.GetBlockByHeightResponse;
                    toAmino(message: _27.GetBlockByHeightResponse): _27.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _27.GetBlockByHeightResponseAminoMsg): _27.GetBlockByHeightResponse;
                    toAminoMsg(message: _27.GetBlockByHeightResponse): _27.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _27.GetBlockByHeightResponseProtoMsg): _27.GetBlockByHeightResponse;
                    toProto(message: _27.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _27.GetBlockByHeightResponse): _27.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    encode(_: _27.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetLatestBlockRequest;
                    fromPartial(_: {}): _27.GetLatestBlockRequest;
                    fromAmino(_: _27.GetLatestBlockRequestAmino): _27.GetLatestBlockRequest;
                    toAmino(_: _27.GetLatestBlockRequest): _27.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _27.GetLatestBlockRequestAminoMsg): _27.GetLatestBlockRequest;
                    toAminoMsg(message: _27.GetLatestBlockRequest): _27.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _27.GetLatestBlockRequestProtoMsg): _27.GetLatestBlockRequest;
                    toProto(message: _27.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _27.GetLatestBlockRequest): _27.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    encode(message: _27.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetLatestBlockResponse;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long;
                                    app?: string | number | import("long").Long;
                                };
                                chainId?: string;
                                height?: string | number | import("long").Long;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").Long;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").Long;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: string | number | import("long").Long;
                                        validatorPower?: string | number | import("long").Long;
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: string | number | import("long").Long;
                                                        app?: string | number | import("long").Long;
                                                    };
                                                    chainId?: string;
                                                    height?: string | number | import("long").Long;
                                                    time?: Date;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: string | number | import("long").Long;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: string | number | import("long").Long;
                                                    proposerPriority?: string | number | import("long").Long;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: string | number | import("long").Long;
                                                    proposerPriority?: string | number | import("long").Long;
                                                };
                                                totalVotingPower?: string | number | import("long").Long;
                                            };
                                        };
                                        commonHeight?: string | number | import("long").Long;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: string | number | import("long").Long;
                                            proposerPriority?: string | number | import("long").Long;
                                        }[];
                                        totalVotingPower?: string | number | import("long").Long;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: string | number | import("long").Long;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _27.GetLatestBlockResponse;
                    fromAmino(object: _27.GetLatestBlockResponseAmino): _27.GetLatestBlockResponse;
                    toAmino(message: _27.GetLatestBlockResponse): _27.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _27.GetLatestBlockResponseAminoMsg): _27.GetLatestBlockResponse;
                    toAminoMsg(message: _27.GetLatestBlockResponse): _27.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _27.GetLatestBlockResponseProtoMsg): _27.GetLatestBlockResponse;
                    toProto(message: _27.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _27.GetLatestBlockResponse): _27.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    encode(_: _27.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetSyncingRequest;
                    fromPartial(_: {}): _27.GetSyncingRequest;
                    fromAmino(_: _27.GetSyncingRequestAmino): _27.GetSyncingRequest;
                    toAmino(_: _27.GetSyncingRequest): _27.GetSyncingRequestAmino;
                    fromAminoMsg(object: _27.GetSyncingRequestAminoMsg): _27.GetSyncingRequest;
                    toAminoMsg(message: _27.GetSyncingRequest): _27.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _27.GetSyncingRequestProtoMsg): _27.GetSyncingRequest;
                    toProto(message: _27.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _27.GetSyncingRequest): _27.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    encode(message: _27.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetSyncingResponse;
                    fromPartial(object: {
                        syncing?: boolean;
                    }): _27.GetSyncingResponse;
                    fromAmino(object: _27.GetSyncingResponseAmino): _27.GetSyncingResponse;
                    toAmino(message: _27.GetSyncingResponse): _27.GetSyncingResponseAmino;
                    fromAminoMsg(object: _27.GetSyncingResponseAminoMsg): _27.GetSyncingResponse;
                    toAminoMsg(message: _27.GetSyncingResponse): _27.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _27.GetSyncingResponseProtoMsg): _27.GetSyncingResponse;
                    toProto(message: _27.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _27.GetSyncingResponse): _27.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    encode(_: _27.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetNodeInfoRequest;
                    fromPartial(_: {}): _27.GetNodeInfoRequest;
                    fromAmino(_: _27.GetNodeInfoRequestAmino): _27.GetNodeInfoRequest;
                    toAmino(_: _27.GetNodeInfoRequest): _27.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _27.GetNodeInfoRequestAminoMsg): _27.GetNodeInfoRequest;
                    toAminoMsg(message: _27.GetNodeInfoRequest): _27.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _27.GetNodeInfoRequestProtoMsg): _27.GetNodeInfoRequest;
                    toProto(message: _27.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _27.GetNodeInfoRequest): _27.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    encode(message: _27.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GetNodeInfoResponse;
                    fromPartial(object: {
                        nodeInfo?: {
                            protocolVersion?: {
                                p2p?: string | number | import("long").Long;
                                block?: string | number | import("long").Long;
                                app?: string | number | import("long").Long;
                            };
                            nodeId?: string;
                            listenAddr?: string;
                            network?: string;
                            version?: string;
                            channels?: Uint8Array;
                            moniker?: string;
                            other?: {
                                txIndex?: string;
                                rpcAddress?: string;
                            };
                        };
                        applicationVersion?: {
                            name?: string;
                            appName?: string;
                            version?: string;
                            gitCommit?: string;
                            buildTags?: string;
                            goVersion?: string;
                            buildDeps?: {
                                path?: string;
                                version?: string;
                                sum?: string;
                            }[];
                            cosmosSdkVersion?: string;
                        };
                    }): _27.GetNodeInfoResponse;
                    fromAmino(object: _27.GetNodeInfoResponseAmino): _27.GetNodeInfoResponse;
                    toAmino(message: _27.GetNodeInfoResponse): _27.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _27.GetNodeInfoResponseAminoMsg): _27.GetNodeInfoResponse;
                    toAminoMsg(message: _27.GetNodeInfoResponse): _27.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _27.GetNodeInfoResponseProtoMsg): _27.GetNodeInfoResponse;
                    toProto(message: _27.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _27.GetNodeInfoResponse): _27.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    encode(message: _27.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.VersionInfo;
                    fromPartial(object: {
                        name?: string;
                        appName?: string;
                        version?: string;
                        gitCommit?: string;
                        buildTags?: string;
                        goVersion?: string;
                        buildDeps?: {
                            path?: string;
                            version?: string;
                            sum?: string;
                        }[];
                        cosmosSdkVersion?: string;
                    }): _27.VersionInfo;
                    fromAmino(object: _27.VersionInfoAmino): _27.VersionInfo;
                    toAmino(message: _27.VersionInfo): _27.VersionInfoAmino;
                    fromAminoMsg(object: _27.VersionInfoAminoMsg): _27.VersionInfo;
                    toAminoMsg(message: _27.VersionInfo): _27.VersionInfoAminoMsg;
                    fromProtoMsg(message: _27.VersionInfoProtoMsg): _27.VersionInfo;
                    toProto(message: _27.VersionInfo): Uint8Array;
                    toProtoMsg(message: _27.VersionInfo): _27.VersionInfoProtoMsg;
                };
                Module: {
                    encode(message: _27.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Module;
                    fromPartial(object: {
                        path?: string;
                        version?: string;
                        sum?: string;
                    }): _27.Module;
                    fromAmino(object: _27.ModuleAmino): _27.Module;
                    toAmino(message: _27.Module): _27.ModuleAmino;
                    fromAminoMsg(object: _27.ModuleAminoMsg): _27.Module;
                    toAminoMsg(message: _27.Module): _27.ModuleAminoMsg;
                    fromProtoMsg(message: _27.ModuleProtoMsg): _27.Module;
                    toProto(message: _27.Module): Uint8Array;
                    toProtoMsg(message: _27.Module): _27.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _28.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Coin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _28.Coin;
                fromAmino(object: _28.CoinAmino): _28.Coin;
                toAmino(message: _28.Coin): _28.CoinAmino;
                fromAminoMsg(object: _28.CoinAminoMsg): _28.Coin;
                toAminoMsg(message: _28.Coin): _28.CoinAminoMsg;
                fromProtoMsg(message: _28.CoinProtoMsg): _28.Coin;
                toProto(message: _28.Coin): Uint8Array;
                toProtoMsg(message: _28.Coin): _28.CoinProtoMsg;
            };
            DecCoin: {
                encode(message: _28.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.DecCoin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _28.DecCoin;
                fromAmino(object: _28.DecCoinAmino): _28.DecCoin;
                toAmino(message: _28.DecCoin): _28.DecCoinAmino;
                fromAminoMsg(object: _28.DecCoinAminoMsg): _28.DecCoin;
                toAminoMsg(message: _28.DecCoin): _28.DecCoinAminoMsg;
                fromProtoMsg(message: _28.DecCoinProtoMsg): _28.DecCoin;
                toProto(message: _28.DecCoin): Uint8Array;
                toProtoMsg(message: _28.DecCoin): _28.DecCoinProtoMsg;
            };
            IntProto: {
                encode(message: _28.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.IntProto;
                fromPartial(object: {
                    int?: string;
                }): _28.IntProto;
                fromAmino(object: _28.IntProtoAmino): _28.IntProto;
                toAmino(message: _28.IntProto): _28.IntProtoAmino;
                fromAminoMsg(object: _28.IntProtoAminoMsg): _28.IntProto;
                toAminoMsg(message: _28.IntProto): _28.IntProtoAminoMsg;
                fromProtoMsg(message: _28.IntProtoProtoMsg): _28.IntProto;
                toProto(message: _28.IntProto): Uint8Array;
                toProtoMsg(message: _28.IntProto): _28.IntProtoProtoMsg;
            };
            DecProto: {
                encode(message: _28.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.DecProto;
                fromPartial(object: {
                    dec?: string;
                }): _28.DecProto;
                fromAmino(object: _28.DecProtoAmino): _28.DecProto;
                toAmino(message: _28.DecProto): _28.DecProtoAmino;
                fromAminoMsg(object: _28.DecProtoAminoMsg): _28.DecProto;
                toAminoMsg(message: _28.DecProto): _28.DecProtoAminoMsg;
                fromProtoMsg(message: _28.DecProtoProtoMsg): _28.DecProto;
                toProto(message: _28.DecProto): Uint8Array;
                toProtoMsg(message: _28.DecProto): _28.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _30.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisOwners;
                fromPartial(object: {
                    index?: string | number | import("long").Long;
                    indexOwners?: {
                        owners?: {
                            module?: string;
                            name?: string;
                        }[];
                    };
                }): _30.GenesisOwners;
                fromAmino(object: _30.GenesisOwnersAmino): _30.GenesisOwners;
                toAmino(message: _30.GenesisOwners): _30.GenesisOwnersAmino;
                fromAminoMsg(object: _30.GenesisOwnersAminoMsg): _30.GenesisOwners;
                toAminoMsg(message: _30.GenesisOwners): _30.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _30.GenesisOwnersProtoMsg): _30.GenesisOwners;
                toProto(message: _30.GenesisOwners): Uint8Array;
                toProtoMsg(message: _30.GenesisOwners): _30.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromPartial(object: {
                    index?: string | number | import("long").Long;
                    owners?: {
                        index?: string | number | import("long").Long;
                        indexOwners?: {
                            owners?: {
                                module?: string;
                                name?: string;
                            }[];
                        };
                    }[];
                }): _30.GenesisState;
                fromAmino(object: _30.GenesisStateAmino): _30.GenesisState;
                toAmino(message: _30.GenesisState): _30.GenesisStateAmino;
                fromAminoMsg(object: _30.GenesisStateAminoMsg): _30.GenesisState;
                toAminoMsg(message: _30.GenesisState): _30.GenesisStateAminoMsg;
                fromProtoMsg(message: _30.GenesisStateProtoMsg): _30.GenesisState;
                toProto(message: _30.GenesisState): Uint8Array;
                toProtoMsg(message: _30.GenesisState): _30.GenesisStateProtoMsg;
            };
            Capability: {
                encode(message: _29.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Capability;
                fromPartial(object: {
                    index?: string | number | import("long").Long;
                }): _29.Capability;
                fromAmino(object: _29.CapabilityAmino): _29.Capability;
                toAmino(message: _29.Capability): _29.CapabilityAmino;
                fromAminoMsg(object: _29.CapabilityAminoMsg): _29.Capability;
                toAminoMsg(message: _29.Capability): _29.CapabilityAminoMsg;
                fromProtoMsg(message: _29.CapabilityProtoMsg): _29.Capability;
                toProto(message: _29.Capability): Uint8Array;
                toProtoMsg(message: _29.Capability): _29.CapabilityProtoMsg;
            };
            Owner: {
                encode(message: _29.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Owner;
                fromPartial(object: {
                    module?: string;
                    name?: string;
                }): _29.Owner;
                fromAmino(object: _29.OwnerAmino): _29.Owner;
                toAmino(message: _29.Owner): _29.OwnerAmino;
                fromAminoMsg(object: _29.OwnerAminoMsg): _29.Owner;
                toAminoMsg(message: _29.Owner): _29.OwnerAminoMsg;
                fromProtoMsg(message: _29.OwnerProtoMsg): _29.Owner;
                toProto(message: _29.Owner): Uint8Array;
                toProtoMsg(message: _29.Owner): _29.OwnerProtoMsg;
            };
            CapabilityOwners: {
                encode(message: _29.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.CapabilityOwners;
                fromPartial(object: {
                    owners?: {
                        module?: string;
                        name?: string;
                    }[];
                }): _29.CapabilityOwners;
                fromAmino(object: _29.CapabilityOwnersAmino): _29.CapabilityOwners;
                toAmino(message: _29.CapabilityOwners): _29.CapabilityOwnersAmino;
                fromAminoMsg(object: _29.CapabilityOwnersAminoMsg): _29.CapabilityOwners;
                toAminoMsg(message: _29.CapabilityOwners): _29.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _29.CapabilityOwnersProtoMsg): _29.CapabilityOwners;
                toProto(message: _29.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _29.CapabilityOwners): _29.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _226.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _32.MsgVerifyInvariant) => _32.MsgVerifyInvariantAmino;
                    fromAmino: (object: _32.MsgVerifyInvariantAmino) => _32.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _32.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVerifyInvariant;
                fromPartial(object: {
                    sender?: string;
                    invariantModuleName?: string;
                    invariantRoute?: string;
                }): _32.MsgVerifyInvariant;
                fromAmino(object: _32.MsgVerifyInvariantAmino): _32.MsgVerifyInvariant;
                toAmino(message: _32.MsgVerifyInvariant): _32.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _32.MsgVerifyInvariantAminoMsg): _32.MsgVerifyInvariant;
                toAminoMsg(message: _32.MsgVerifyInvariant): _32.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _32.MsgVerifyInvariantProtoMsg): _32.MsgVerifyInvariant;
                toProto(message: _32.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _32.MsgVerifyInvariant): _32.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _32.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVerifyInvariantResponse;
                fromPartial(_: {}): _32.MsgVerifyInvariantResponse;
                fromAmino(_: _32.MsgVerifyInvariantResponseAmino): _32.MsgVerifyInvariantResponse;
                toAmino(_: _32.MsgVerifyInvariantResponse): _32.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _32.MsgVerifyInvariantResponseAminoMsg): _32.MsgVerifyInvariantResponse;
                toAminoMsg(message: _32.MsgVerifyInvariantResponse): _32.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _32.MsgVerifyInvariantResponseProtoMsg): _32.MsgVerifyInvariantResponse;
                toProto(message: _32.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _32.MsgVerifyInvariantResponse): _32.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.GenesisState;
                fromPartial(object: {
                    constantFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _31.GenesisState;
                fromAmino(object: _31.GenesisStateAmino): _31.GenesisState;
                toAmino(message: _31.GenesisState): _31.GenesisStateAmino;
                fromAminoMsg(object: _31.GenesisStateAminoMsg): _31.GenesisState;
                toAminoMsg(message: _31.GenesisState): _31.GenesisStateAminoMsg;
                fromProtoMsg(message: _31.GenesisStateProtoMsg): _31.GenesisState;
                toProto(message: _31.GenesisState): Uint8Array;
                toProtoMsg(message: _31.GenesisState): _31.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _33.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _33.PubKey;
                fromAmino(object: _33.PubKeyAmino): _33.PubKey;
                toAmino(message: _33.PubKey): _33.PubKeyAmino;
                fromAminoMsg(object: _33.PubKeyAminoMsg): _33.PubKey;
                toAminoMsg(message: _33.PubKey): _33.PubKeyAminoMsg;
                fromProtoMsg(message: _33.PubKeyProtoMsg): _33.PubKey;
                toProto(message: _33.PubKey): Uint8Array;
                toProtoMsg(message: _33.PubKey): _33.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _33.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _33.PrivKey;
                fromAmino(object: _33.PrivKeyAmino): _33.PrivKey;
                toAmino(message: _33.PrivKey): _33.PrivKeyAmino;
                fromAminoMsg(object: _33.PrivKeyAminoMsg): _33.PrivKey;
                toAminoMsg(message: _33.PrivKey): _33.PrivKeyAminoMsg;
                fromProtoMsg(message: _33.PrivKeyProtoMsg): _33.PrivKey;
                toProto(message: _33.PrivKey): Uint8Array;
                toProtoMsg(message: _33.PrivKey): _33.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _34.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.BIP44Params;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _34.BIP44Params;
                    fromAmino(object: _34.BIP44ParamsAmino): _34.BIP44Params;
                    toAmino(message: _34.BIP44Params): _34.BIP44ParamsAmino;
                    fromAminoMsg(object: _34.BIP44ParamsAminoMsg): _34.BIP44Params;
                    toAminoMsg(message: _34.BIP44Params): _34.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _34.BIP44ParamsProtoMsg): _34.BIP44Params;
                    toProto(message: _34.BIP44Params): Uint8Array;
                    toProtoMsg(message: _34.BIP44Params): _34.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _35.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record;
                    fromPartial(object: {
                        name?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            privKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            privKeyType?: string;
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coinType?: number;
                                account?: number;
                                change?: boolean;
                                addressIndex?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _35.Record;
                    fromAmino(object: _35.RecordAmino): _35.Record;
                    toAmino(message: _35.Record): _35.RecordAmino;
                    fromAminoMsg(object: _35.RecordAminoMsg): _35.Record;
                    toAminoMsg(message: _35.Record): _35.RecordAminoMsg;
                    fromProtoMsg(message: _35.RecordProtoMsg): _35.Record;
                    toProto(message: _35.Record): Uint8Array;
                    toProtoMsg(message: _35.Record): _35.RecordProtoMsg;
                };
                Record_Local: {
                    encode(message: _35.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record_Local;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        privKeyType?: string;
                    }): _35.Record_Local;
                    fromAmino(object: _35.Record_LocalAmino): _35.Record_Local;
                    toAmino(message: _35.Record_Local): _35.Record_LocalAmino;
                    fromAminoMsg(object: _35.Record_LocalAminoMsg): _35.Record_Local;
                    toAminoMsg(message: _35.Record_Local): _35.Record_LocalAminoMsg;
                    fromProtoMsg(message: _35.Record_LocalProtoMsg): _35.Record_Local;
                    toProto(message: _35.Record_Local): Uint8Array;
                    toProtoMsg(message: _35.Record_Local): _35.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    encode(message: _35.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record_Ledger;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _35.Record_Ledger;
                    fromAmino(object: _35.Record_LedgerAmino): _35.Record_Ledger;
                    toAmino(message: _35.Record_Ledger): _35.Record_LedgerAmino;
                    fromAminoMsg(object: _35.Record_LedgerAminoMsg): _35.Record_Ledger;
                    toAminoMsg(message: _35.Record_Ledger): _35.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _35.Record_LedgerProtoMsg): _35.Record_Ledger;
                    toProto(message: _35.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _35.Record_Ledger): _35.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    encode(_: _35.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record_Multi;
                    fromPartial(_: {}): _35.Record_Multi;
                    fromAmino(_: _35.Record_MultiAmino): _35.Record_Multi;
                    toAmino(_: _35.Record_Multi): _35.Record_MultiAmino;
                    fromAminoMsg(object: _35.Record_MultiAminoMsg): _35.Record_Multi;
                    toAminoMsg(message: _35.Record_Multi): _35.Record_MultiAminoMsg;
                    fromProtoMsg(message: _35.Record_MultiProtoMsg): _35.Record_Multi;
                    toProto(message: _35.Record_Multi): Uint8Array;
                    toProtoMsg(message: _35.Record_Multi): _35.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    encode(_: _35.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Record_Offline;
                    fromPartial(_: {}): _35.Record_Offline;
                    fromAmino(_: _35.Record_OfflineAmino): _35.Record_Offline;
                    toAmino(_: _35.Record_Offline): _35.Record_OfflineAmino;
                    fromAminoMsg(object: _35.Record_OfflineAminoMsg): _35.Record_Offline;
                    toAminoMsg(message: _35.Record_Offline): _35.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _35.Record_OfflineProtoMsg): _35.Record_Offline;
                    toProto(message: _35.Record_Offline): Uint8Array;
                    toProtoMsg(message: _35.Record_Offline): _35.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _36.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.LegacyAminoPubKey;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _36.LegacyAminoPubKey;
                fromAmino(object: _36.LegacyAminoPubKeyAmino): _36.LegacyAminoPubKey;
                toAmino(message: _36.LegacyAminoPubKey): _36.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _36.LegacyAminoPubKeyAminoMsg): _36.LegacyAminoPubKey;
                toAminoMsg(message: _36.LegacyAminoPubKey): _36.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _36.LegacyAminoPubKeyProtoMsg): _36.LegacyAminoPubKey;
                toProto(message: _36.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _36.LegacyAminoPubKey): _36.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _37.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _37.PubKey;
                fromAmino(object: _37.PubKeyAmino): _37.PubKey;
                toAmino(message: _37.PubKey): _37.PubKeyAmino;
                fromAminoMsg(object: _37.PubKeyAminoMsg): _37.PubKey;
                toAminoMsg(message: _37.PubKey): _37.PubKeyAminoMsg;
                fromProtoMsg(message: _37.PubKeyProtoMsg): _37.PubKey;
                toProto(message: _37.PubKey): Uint8Array;
                toProtoMsg(message: _37.PubKey): _37.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _37.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _37.PrivKey;
                fromAmino(object: _37.PrivKeyAmino): _37.PrivKey;
                toAmino(message: _37.PrivKey): _37.PrivKeyAmino;
                fromAminoMsg(object: _37.PrivKeyAminoMsg): _37.PrivKey;
                toAminoMsg(message: _37.PrivKey): _37.PrivKeyAminoMsg;
                fromProtoMsg(message: _37.PrivKeyProtoMsg): _37.PrivKey;
                toProto(message: _37.PrivKey): Uint8Array;
                toProtoMsg(message: _37.PrivKey): _37.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _38.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _38.PubKey;
                fromAmino(object: _38.PubKeyAmino): _38.PubKey;
                toAmino(message: _38.PubKey): _38.PubKeyAmino;
                fromAminoMsg(object: _38.PubKeyAminoMsg): _38.PubKey;
                toAminoMsg(message: _38.PubKey): _38.PubKeyAminoMsg;
                fromProtoMsg(message: _38.PubKeyProtoMsg): _38.PubKey;
                toProto(message: _38.PubKey): Uint8Array;
                toProtoMsg(message: _38.PubKey): _38.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _38.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.PrivKey;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _38.PrivKey;
                fromAmino(object: _38.PrivKeyAmino): _38.PrivKey;
                toAmino(message: _38.PrivKey): _38.PrivKeyAmino;
                fromAminoMsg(object: _38.PrivKeyAminoMsg): _38.PrivKey;
                toAminoMsg(message: _38.PrivKey): _38.PrivKeyAminoMsg;
                fromProtoMsg(message: _38.PrivKeyProtoMsg): _38.PrivKey;
                toProto(message: _38.PrivKey): Uint8Array;
                toProtoMsg(message: _38.PrivKey): _38.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                validatorOutstandingRewards(request: _41.QueryValidatorOutstandingRewardsRequest): Promise<_41.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _41.QueryValidatorCommissionRequest): Promise<_41.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _41.QueryValidatorSlashesRequest): Promise<_41.QueryValidatorSlashesResponse>;
                delegationRewards(request: _41.QueryDelegationRewardsRequest): Promise<_41.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _41.QueryDelegationTotalRewardsRequest): Promise<_41.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _41.QueryDelegatorValidatorsRequest): Promise<_41.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _41.QueryDelegatorWithdrawAddressRequest): Promise<_41.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _41.QueryCommunityPoolRequest): Promise<_41.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _42.MsgSetWithdrawAddress) => _42.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _42.MsgSetWithdrawAddressAmino) => _42.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _42.MsgWithdrawDelegatorReward) => _42.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _42.MsgWithdrawDelegatorRewardAmino) => _42.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _42.MsgWithdrawValidatorCommission) => _42.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _42.MsgWithdrawValidatorCommissionAmino) => _42.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _42.MsgFundCommunityPool) => _42.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _42.MsgFundCommunityPoolAmino) => _42.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _42.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgSetWithdrawAddress;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _42.MsgSetWithdrawAddress;
                fromAmino(object: _42.MsgSetWithdrawAddressAmino): _42.MsgSetWithdrawAddress;
                toAmino(message: _42.MsgSetWithdrawAddress): _42.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _42.MsgSetWithdrawAddressAminoMsg): _42.MsgSetWithdrawAddress;
                toAminoMsg(message: _42.MsgSetWithdrawAddress): _42.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _42.MsgSetWithdrawAddressProtoMsg): _42.MsgSetWithdrawAddress;
                toProto(message: _42.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _42.MsgSetWithdrawAddress): _42.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _42.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgSetWithdrawAddressResponse;
                fromPartial(_: {}): _42.MsgSetWithdrawAddressResponse;
                fromAmino(_: _42.MsgSetWithdrawAddressResponseAmino): _42.MsgSetWithdrawAddressResponse;
                toAmino(_: _42.MsgSetWithdrawAddressResponse): _42.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _42.MsgSetWithdrawAddressResponseAminoMsg): _42.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _42.MsgSetWithdrawAddressResponse): _42.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _42.MsgSetWithdrawAddressResponseProtoMsg): _42.MsgSetWithdrawAddressResponse;
                toProto(message: _42.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _42.MsgSetWithdrawAddressResponse): _42.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _42.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgWithdrawDelegatorReward;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _42.MsgWithdrawDelegatorReward;
                fromAmino(object: _42.MsgWithdrawDelegatorRewardAmino): _42.MsgWithdrawDelegatorReward;
                toAmino(message: _42.MsgWithdrawDelegatorReward): _42.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _42.MsgWithdrawDelegatorRewardAminoMsg): _42.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _42.MsgWithdrawDelegatorReward): _42.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _42.MsgWithdrawDelegatorRewardProtoMsg): _42.MsgWithdrawDelegatorReward;
                toProto(message: _42.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _42.MsgWithdrawDelegatorReward): _42.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _42.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _42.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _42.MsgWithdrawDelegatorRewardResponseAmino): _42.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _42.MsgWithdrawDelegatorRewardResponse): _42.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _42.MsgWithdrawDelegatorRewardResponseAminoMsg): _42.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _42.MsgWithdrawDelegatorRewardResponse): _42.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _42.MsgWithdrawDelegatorRewardResponseProtoMsg): _42.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _42.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _42.MsgWithdrawDelegatorRewardResponse): _42.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _42.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgWithdrawValidatorCommission;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _42.MsgWithdrawValidatorCommission;
                fromAmino(object: _42.MsgWithdrawValidatorCommissionAmino): _42.MsgWithdrawValidatorCommission;
                toAmino(message: _42.MsgWithdrawValidatorCommission): _42.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _42.MsgWithdrawValidatorCommissionAminoMsg): _42.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _42.MsgWithdrawValidatorCommission): _42.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _42.MsgWithdrawValidatorCommissionProtoMsg): _42.MsgWithdrawValidatorCommission;
                toProto(message: _42.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _42.MsgWithdrawValidatorCommission): _42.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _42.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _42.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _42.MsgWithdrawValidatorCommissionResponseAmino): _42.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _42.MsgWithdrawValidatorCommissionResponse): _42.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _42.MsgWithdrawValidatorCommissionResponseAminoMsg): _42.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _42.MsgWithdrawValidatorCommissionResponse): _42.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _42.MsgWithdrawValidatorCommissionResponseProtoMsg): _42.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _42.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _42.MsgWithdrawValidatorCommissionResponse): _42.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                encode(message: _42.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgFundCommunityPool;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _42.MsgFundCommunityPool;
                fromAmino(object: _42.MsgFundCommunityPoolAmino): _42.MsgFundCommunityPool;
                toAmino(message: _42.MsgFundCommunityPool): _42.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _42.MsgFundCommunityPoolAminoMsg): _42.MsgFundCommunityPool;
                toAminoMsg(message: _42.MsgFundCommunityPool): _42.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _42.MsgFundCommunityPoolProtoMsg): _42.MsgFundCommunityPool;
                toProto(message: _42.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _42.MsgFundCommunityPool): _42.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _42.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgFundCommunityPoolResponse;
                fromPartial(_: {}): _42.MsgFundCommunityPoolResponse;
                fromAmino(_: _42.MsgFundCommunityPoolResponseAmino): _42.MsgFundCommunityPoolResponse;
                toAmino(_: _42.MsgFundCommunityPoolResponse): _42.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _42.MsgFundCommunityPoolResponseAminoMsg): _42.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _42.MsgFundCommunityPoolResponse): _42.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _42.MsgFundCommunityPoolResponseProtoMsg): _42.MsgFundCommunityPoolResponse;
                toProto(message: _42.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _42.MsgFundCommunityPoolResponse): _42.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _41.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryParamsRequest;
                fromPartial(_: {}): _41.QueryParamsRequest;
                fromAmino(_: _41.QueryParamsRequestAmino): _41.QueryParamsRequest;
                toAmino(_: _41.QueryParamsRequest): _41.QueryParamsRequestAmino;
                fromAminoMsg(object: _41.QueryParamsRequestAminoMsg): _41.QueryParamsRequest;
                toAminoMsg(message: _41.QueryParamsRequest): _41.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryParamsRequestProtoMsg): _41.QueryParamsRequest;
                toProto(message: _41.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryParamsRequest): _41.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _41.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _41.QueryParamsResponse;
                fromAmino(object: _41.QueryParamsResponseAmino): _41.QueryParamsResponse;
                toAmino(message: _41.QueryParamsResponse): _41.QueryParamsResponseAmino;
                fromAminoMsg(object: _41.QueryParamsResponseAminoMsg): _41.QueryParamsResponse;
                toAminoMsg(message: _41.QueryParamsResponse): _41.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryParamsResponseProtoMsg): _41.QueryParamsResponse;
                toProto(message: _41.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryParamsResponse): _41.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _41.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _41.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _41.QueryValidatorOutstandingRewardsRequestAmino): _41.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _41.QueryValidatorOutstandingRewardsRequest): _41.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _41.QueryValidatorOutstandingRewardsRequestAminoMsg): _41.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _41.QueryValidatorOutstandingRewardsRequest): _41.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryValidatorOutstandingRewardsRequestProtoMsg): _41.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _41.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryValidatorOutstandingRewardsRequest): _41.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _41.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _41.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _41.QueryValidatorOutstandingRewardsResponseAmino): _41.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _41.QueryValidatorOutstandingRewardsResponse): _41.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _41.QueryValidatorOutstandingRewardsResponseAminoMsg): _41.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _41.QueryValidatorOutstandingRewardsResponse): _41.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryValidatorOutstandingRewardsResponseProtoMsg): _41.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _41.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryValidatorOutstandingRewardsResponse): _41.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _41.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorCommissionRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _41.QueryValidatorCommissionRequest;
                fromAmino(object: _41.QueryValidatorCommissionRequestAmino): _41.QueryValidatorCommissionRequest;
                toAmino(message: _41.QueryValidatorCommissionRequest): _41.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _41.QueryValidatorCommissionRequestAminoMsg): _41.QueryValidatorCommissionRequest;
                toAminoMsg(message: _41.QueryValidatorCommissionRequest): _41.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _41.QueryValidatorCommissionRequestProtoMsg): _41.QueryValidatorCommissionRequest;
                toProto(message: _41.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _41.QueryValidatorCommissionRequest): _41.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _41.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorCommissionResponse;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _41.QueryValidatorCommissionResponse;
                fromAmino(object: _41.QueryValidatorCommissionResponseAmino): _41.QueryValidatorCommissionResponse;
                toAmino(message: _41.QueryValidatorCommissionResponse): _41.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _41.QueryValidatorCommissionResponseAminoMsg): _41.QueryValidatorCommissionResponse;
                toAminoMsg(message: _41.QueryValidatorCommissionResponse): _41.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _41.QueryValidatorCommissionResponseProtoMsg): _41.QueryValidatorCommissionResponse;
                toProto(message: _41.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _41.QueryValidatorCommissionResponse): _41.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _41.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorSlashesRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: string | number | import("long").Long;
                    endingHeight?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _41.QueryValidatorSlashesRequest;
                fromAmino(object: _41.QueryValidatorSlashesRequestAmino): _41.QueryValidatorSlashesRequest;
                toAmino(message: _41.QueryValidatorSlashesRequest): _41.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _41.QueryValidatorSlashesRequestAminoMsg): _41.QueryValidatorSlashesRequest;
                toAminoMsg(message: _41.QueryValidatorSlashesRequest): _41.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _41.QueryValidatorSlashesRequestProtoMsg): _41.QueryValidatorSlashesRequest;
                toProto(message: _41.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _41.QueryValidatorSlashesRequest): _41.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _41.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorSlashesResponse;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: string | number | import("long").Long;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _41.QueryValidatorSlashesResponse;
                fromAmino(object: _41.QueryValidatorSlashesResponseAmino): _41.QueryValidatorSlashesResponse;
                toAmino(message: _41.QueryValidatorSlashesResponse): _41.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _41.QueryValidatorSlashesResponseAminoMsg): _41.QueryValidatorSlashesResponse;
                toAminoMsg(message: _41.QueryValidatorSlashesResponse): _41.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _41.QueryValidatorSlashesResponseProtoMsg): _41.QueryValidatorSlashesResponse;
                toProto(message: _41.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _41.QueryValidatorSlashesResponse): _41.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _41.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegationRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _41.QueryDelegationRewardsRequest;
                fromAmino(object: _41.QueryDelegationRewardsRequestAmino): _41.QueryDelegationRewardsRequest;
                toAmino(message: _41.QueryDelegationRewardsRequest): _41.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _41.QueryDelegationRewardsRequestAminoMsg): _41.QueryDelegationRewardsRequest;
                toAminoMsg(message: _41.QueryDelegationRewardsRequest): _41.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryDelegationRewardsRequestProtoMsg): _41.QueryDelegationRewardsRequest;
                toProto(message: _41.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryDelegationRewardsRequest): _41.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _41.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegationRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _41.QueryDelegationRewardsResponse;
                fromAmino(object: _41.QueryDelegationRewardsResponseAmino): _41.QueryDelegationRewardsResponse;
                toAmino(message: _41.QueryDelegationRewardsResponse): _41.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _41.QueryDelegationRewardsResponseAminoMsg): _41.QueryDelegationRewardsResponse;
                toAminoMsg(message: _41.QueryDelegationRewardsResponse): _41.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryDelegationRewardsResponseProtoMsg): _41.QueryDelegationRewardsResponse;
                toProto(message: _41.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryDelegationRewardsResponse): _41.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _41.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegationTotalRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _41.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _41.QueryDelegationTotalRewardsRequestAmino): _41.QueryDelegationTotalRewardsRequest;
                toAmino(message: _41.QueryDelegationTotalRewardsRequest): _41.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _41.QueryDelegationTotalRewardsRequestAminoMsg): _41.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _41.QueryDelegationTotalRewardsRequest): _41.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryDelegationTotalRewardsRequestProtoMsg): _41.QueryDelegationTotalRewardsRequest;
                toProto(message: _41.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryDelegationTotalRewardsRequest): _41.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _41.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegationTotalRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _41.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _41.QueryDelegationTotalRewardsResponseAmino): _41.QueryDelegationTotalRewardsResponse;
                toAmino(message: _41.QueryDelegationTotalRewardsResponse): _41.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _41.QueryDelegationTotalRewardsResponseAminoMsg): _41.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _41.QueryDelegationTotalRewardsResponse): _41.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryDelegationTotalRewardsResponseProtoMsg): _41.QueryDelegationTotalRewardsResponse;
                toProto(message: _41.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryDelegationTotalRewardsResponse): _41.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _41.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _41.QueryDelegatorValidatorsRequest;
                fromAmino(object: _41.QueryDelegatorValidatorsRequestAmino): _41.QueryDelegatorValidatorsRequest;
                toAmino(message: _41.QueryDelegatorValidatorsRequest): _41.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _41.QueryDelegatorValidatorsRequestAminoMsg): _41.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _41.QueryDelegatorValidatorsRequest): _41.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryDelegatorValidatorsRequestProtoMsg): _41.QueryDelegatorValidatorsRequest;
                toProto(message: _41.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryDelegatorValidatorsRequest): _41.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _41.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: string[];
                }): _41.QueryDelegatorValidatorsResponse;
                fromAmino(object: _41.QueryDelegatorValidatorsResponseAmino): _41.QueryDelegatorValidatorsResponse;
                toAmino(message: _41.QueryDelegatorValidatorsResponse): _41.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _41.QueryDelegatorValidatorsResponseAminoMsg): _41.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _41.QueryDelegatorValidatorsResponse): _41.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryDelegatorValidatorsResponseProtoMsg): _41.QueryDelegatorValidatorsResponse;
                toProto(message: _41.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryDelegatorValidatorsResponse): _41.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _41.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _41.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _41.QueryDelegatorWithdrawAddressRequestAmino): _41.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _41.QueryDelegatorWithdrawAddressRequest): _41.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _41.QueryDelegatorWithdrawAddressRequestAminoMsg): _41.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _41.QueryDelegatorWithdrawAddressRequest): _41.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _41.QueryDelegatorWithdrawAddressRequestProtoMsg): _41.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _41.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _41.QueryDelegatorWithdrawAddressRequest): _41.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _41.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _41.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _41.QueryDelegatorWithdrawAddressResponseAmino): _41.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _41.QueryDelegatorWithdrawAddressResponse): _41.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _41.QueryDelegatorWithdrawAddressResponseAminoMsg): _41.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _41.QueryDelegatorWithdrawAddressResponse): _41.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _41.QueryDelegatorWithdrawAddressResponseProtoMsg): _41.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _41.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _41.QueryDelegatorWithdrawAddressResponse): _41.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                encode(_: _41.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryCommunityPoolRequest;
                fromPartial(_: {}): _41.QueryCommunityPoolRequest;
                fromAmino(_: _41.QueryCommunityPoolRequestAmino): _41.QueryCommunityPoolRequest;
                toAmino(_: _41.QueryCommunityPoolRequest): _41.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _41.QueryCommunityPoolRequestAminoMsg): _41.QueryCommunityPoolRequest;
                toAminoMsg(message: _41.QueryCommunityPoolRequest): _41.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _41.QueryCommunityPoolRequestProtoMsg): _41.QueryCommunityPoolRequest;
                toProto(message: _41.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _41.QueryCommunityPoolRequest): _41.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                encode(message: _41.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryCommunityPoolResponse;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _41.QueryCommunityPoolResponse;
                fromAmino(object: _41.QueryCommunityPoolResponseAmino): _41.QueryCommunityPoolResponse;
                toAmino(message: _41.QueryCommunityPoolResponse): _41.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _41.QueryCommunityPoolResponseAminoMsg): _41.QueryCommunityPoolResponse;
                toAminoMsg(message: _41.QueryCommunityPoolResponse): _41.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _41.QueryCommunityPoolResponseProtoMsg): _41.QueryCommunityPoolResponse;
                toProto(message: _41.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _41.QueryCommunityPoolResponse): _41.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                encode(message: _40.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DelegatorWithdrawInfo;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _40.DelegatorWithdrawInfo;
                fromAmino(object: _40.DelegatorWithdrawInfoAmino): _40.DelegatorWithdrawInfo;
                toAmino(message: _40.DelegatorWithdrawInfo): _40.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _40.DelegatorWithdrawInfoAminoMsg): _40.DelegatorWithdrawInfo;
                toAminoMsg(message: _40.DelegatorWithdrawInfo): _40.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _40.DelegatorWithdrawInfoProtoMsg): _40.DelegatorWithdrawInfo;
                toProto(message: _40.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _40.DelegatorWithdrawInfo): _40.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _40.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorOutstandingRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _40.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _40.ValidatorOutstandingRewardsRecordAmino): _40.ValidatorOutstandingRewardsRecord;
                toAmino(message: _40.ValidatorOutstandingRewardsRecord): _40.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _40.ValidatorOutstandingRewardsRecordAminoMsg): _40.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _40.ValidatorOutstandingRewardsRecord): _40.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _40.ValidatorOutstandingRewardsRecordProtoMsg): _40.ValidatorOutstandingRewardsRecord;
                toProto(message: _40.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _40.ValidatorOutstandingRewardsRecord): _40.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _40.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _40.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _40.ValidatorAccumulatedCommissionRecordAmino): _40.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _40.ValidatorAccumulatedCommissionRecord): _40.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _40.ValidatorAccumulatedCommissionRecordAminoMsg): _40.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _40.ValidatorAccumulatedCommissionRecord): _40.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _40.ValidatorAccumulatedCommissionRecordProtoMsg): _40.ValidatorAccumulatedCommissionRecord;
                toProto(message: _40.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _40.ValidatorAccumulatedCommissionRecord): _40.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _40.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorHistoricalRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: string | number | import("long").Long;
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _40.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _40.ValidatorHistoricalRewardsRecordAmino): _40.ValidatorHistoricalRewardsRecord;
                toAmino(message: _40.ValidatorHistoricalRewardsRecord): _40.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _40.ValidatorHistoricalRewardsRecordAminoMsg): _40.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _40.ValidatorHistoricalRewardsRecord): _40.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _40.ValidatorHistoricalRewardsRecordProtoMsg): _40.ValidatorHistoricalRewardsRecord;
                toProto(message: _40.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _40.ValidatorHistoricalRewardsRecord): _40.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _40.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorCurrentRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: string | number | import("long").Long;
                    };
                }): _40.ValidatorCurrentRewardsRecord;
                fromAmino(object: _40.ValidatorCurrentRewardsRecordAmino): _40.ValidatorCurrentRewardsRecord;
                toAmino(message: _40.ValidatorCurrentRewardsRecord): _40.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _40.ValidatorCurrentRewardsRecordAminoMsg): _40.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _40.ValidatorCurrentRewardsRecord): _40.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _40.ValidatorCurrentRewardsRecordProtoMsg): _40.ValidatorCurrentRewardsRecord;
                toProto(message: _40.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _40.ValidatorCurrentRewardsRecord): _40.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _40.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.DelegatorStartingInfoRecord;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: string | number | import("long").Long;
                        stake?: string;
                        height?: string | number | import("long").Long;
                    };
                }): _40.DelegatorStartingInfoRecord;
                fromAmino(object: _40.DelegatorStartingInfoRecordAmino): _40.DelegatorStartingInfoRecord;
                toAmino(message: _40.DelegatorStartingInfoRecord): _40.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _40.DelegatorStartingInfoRecordAminoMsg): _40.DelegatorStartingInfoRecord;
                toAminoMsg(message: _40.DelegatorStartingInfoRecord): _40.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _40.DelegatorStartingInfoRecordProtoMsg): _40.DelegatorStartingInfoRecord;
                toProto(message: _40.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _40.DelegatorStartingInfoRecord): _40.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                encode(message: _40.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ValidatorSlashEventRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: string | number | import("long").Long;
                    period?: string | number | import("long").Long;
                    validatorSlashEvent?: {
                        validatorPeriod?: string | number | import("long").Long;
                        fraction?: string;
                    };
                }): _40.ValidatorSlashEventRecord;
                fromAmino(object: _40.ValidatorSlashEventRecordAmino): _40.ValidatorSlashEventRecord;
                toAmino(message: _40.ValidatorSlashEventRecord): _40.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _40.ValidatorSlashEventRecordAminoMsg): _40.ValidatorSlashEventRecord;
                toAminoMsg(message: _40.ValidatorSlashEventRecord): _40.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _40.ValidatorSlashEventRecordProtoMsg): _40.ValidatorSlashEventRecord;
                toProto(message: _40.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _40.ValidatorSlashEventRecord): _40.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GenesisState;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: string | number | import("long").Long;
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: string | number | import("long").Long;
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: string | number | import("long").Long;
                            stake?: string;
                            height?: string | number | import("long").Long;
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: string | number | import("long").Long;
                        period?: string | number | import("long").Long;
                        validatorSlashEvent?: {
                            validatorPeriod?: string | number | import("long").Long;
                            fraction?: string;
                        };
                    }[];
                }): _40.GenesisState;
                fromAmino(object: _40.GenesisStateAmino): _40.GenesisState;
                toAmino(message: _40.GenesisState): _40.GenesisStateAmino;
                fromAminoMsg(object: _40.GenesisStateAminoMsg): _40.GenesisState;
                toAminoMsg(message: _40.GenesisState): _40.GenesisStateAminoMsg;
                fromProtoMsg(message: _40.GenesisStateProtoMsg): _40.GenesisState;
                toProto(message: _40.GenesisState): Uint8Array;
                toProtoMsg(message: _40.GenesisState): _40.GenesisStateProtoMsg;
            };
            Params: {
                encode(message: _39.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Params;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _39.Params;
                fromAmino(object: _39.ParamsAmino): _39.Params;
                toAmino(message: _39.Params): _39.ParamsAmino;
                fromAminoMsg(object: _39.ParamsAminoMsg): _39.Params;
                toAminoMsg(message: _39.Params): _39.ParamsAminoMsg;
                fromProtoMsg(message: _39.ParamsProtoMsg): _39.Params;
                toProto(message: _39.Params): Uint8Array;
                toProtoMsg(message: _39.Params): _39.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                encode(message: _39.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorHistoricalRewards;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _39.ValidatorHistoricalRewards;
                fromAmino(object: _39.ValidatorHistoricalRewardsAmino): _39.ValidatorHistoricalRewards;
                toAmino(message: _39.ValidatorHistoricalRewards): _39.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _39.ValidatorHistoricalRewardsAminoMsg): _39.ValidatorHistoricalRewards;
                toAminoMsg(message: _39.ValidatorHistoricalRewards): _39.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _39.ValidatorHistoricalRewardsProtoMsg): _39.ValidatorHistoricalRewards;
                toProto(message: _39.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _39.ValidatorHistoricalRewards): _39.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                encode(message: _39.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorCurrentRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: string | number | import("long").Long;
                }): _39.ValidatorCurrentRewards;
                fromAmino(object: _39.ValidatorCurrentRewardsAmino): _39.ValidatorCurrentRewards;
                toAmino(message: _39.ValidatorCurrentRewards): _39.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _39.ValidatorCurrentRewardsAminoMsg): _39.ValidatorCurrentRewards;
                toAminoMsg(message: _39.ValidatorCurrentRewards): _39.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _39.ValidatorCurrentRewardsProtoMsg): _39.ValidatorCurrentRewards;
                toProto(message: _39.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _39.ValidatorCurrentRewards): _39.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _39.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorAccumulatedCommission;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _39.ValidatorAccumulatedCommission;
                fromAmino(object: _39.ValidatorAccumulatedCommissionAmino): _39.ValidatorAccumulatedCommission;
                toAmino(message: _39.ValidatorAccumulatedCommission): _39.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _39.ValidatorAccumulatedCommissionAminoMsg): _39.ValidatorAccumulatedCommission;
                toAminoMsg(message: _39.ValidatorAccumulatedCommission): _39.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _39.ValidatorAccumulatedCommissionProtoMsg): _39.ValidatorAccumulatedCommission;
                toProto(message: _39.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _39.ValidatorAccumulatedCommission): _39.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                encode(message: _39.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorOutstandingRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _39.ValidatorOutstandingRewards;
                fromAmino(object: _39.ValidatorOutstandingRewardsAmino): _39.ValidatorOutstandingRewards;
                toAmino(message: _39.ValidatorOutstandingRewards): _39.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _39.ValidatorOutstandingRewardsAminoMsg): _39.ValidatorOutstandingRewards;
                toAminoMsg(message: _39.ValidatorOutstandingRewards): _39.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _39.ValidatorOutstandingRewardsProtoMsg): _39.ValidatorOutstandingRewards;
                toProto(message: _39.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _39.ValidatorOutstandingRewards): _39.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                encode(message: _39.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorSlashEvent;
                fromPartial(object: {
                    validatorPeriod?: string | number | import("long").Long;
                    fraction?: string;
                }): _39.ValidatorSlashEvent;
                fromAmino(object: _39.ValidatorSlashEventAmino): _39.ValidatorSlashEvent;
                toAmino(message: _39.ValidatorSlashEvent): _39.ValidatorSlashEventAmino;
                fromAminoMsg(object: _39.ValidatorSlashEventAminoMsg): _39.ValidatorSlashEvent;
                toAminoMsg(message: _39.ValidatorSlashEvent): _39.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _39.ValidatorSlashEventProtoMsg): _39.ValidatorSlashEvent;
                toProto(message: _39.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _39.ValidatorSlashEvent): _39.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                encode(message: _39.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorSlashEvents;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: string | number | import("long").Long;
                        fraction?: string;
                    }[];
                }): _39.ValidatorSlashEvents;
                fromAmino(object: _39.ValidatorSlashEventsAmino): _39.ValidatorSlashEvents;
                toAmino(message: _39.ValidatorSlashEvents): _39.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _39.ValidatorSlashEventsAminoMsg): _39.ValidatorSlashEvents;
                toAminoMsg(message: _39.ValidatorSlashEvents): _39.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _39.ValidatorSlashEventsProtoMsg): _39.ValidatorSlashEvents;
                toProto(message: _39.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _39.ValidatorSlashEvents): _39.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                encode(message: _39.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.FeePool;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _39.FeePool;
                fromAmino(object: _39.FeePoolAmino): _39.FeePool;
                toAmino(message: _39.FeePool): _39.FeePoolAmino;
                fromAminoMsg(object: _39.FeePoolAminoMsg): _39.FeePool;
                toAminoMsg(message: _39.FeePool): _39.FeePoolAminoMsg;
                fromProtoMsg(message: _39.FeePoolProtoMsg): _39.FeePool;
                toProto(message: _39.FeePool): Uint8Array;
                toProtoMsg(message: _39.FeePool): _39.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                encode(message: _39.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.CommunityPoolSpendProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _39.CommunityPoolSpendProposal;
                fromAmino(object: _39.CommunityPoolSpendProposalAmino): _39.CommunityPoolSpendProposal;
                toAmino(message: _39.CommunityPoolSpendProposal): _39.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _39.CommunityPoolSpendProposalAminoMsg): _39.CommunityPoolSpendProposal;
                toAminoMsg(message: _39.CommunityPoolSpendProposal): _39.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _39.CommunityPoolSpendProposalProtoMsg): _39.CommunityPoolSpendProposal;
                toProto(message: _39.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _39.CommunityPoolSpendProposal): _39.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                encode(message: _39.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegatorStartingInfo;
                fromPartial(object: {
                    previousPeriod?: string | number | import("long").Long;
                    stake?: string;
                    height?: string | number | import("long").Long;
                }): _39.DelegatorStartingInfo;
                fromAmino(object: _39.DelegatorStartingInfoAmino): _39.DelegatorStartingInfo;
                toAmino(message: _39.DelegatorStartingInfo): _39.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _39.DelegatorStartingInfoAminoMsg): _39.DelegatorStartingInfo;
                toAminoMsg(message: _39.DelegatorStartingInfo): _39.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _39.DelegatorStartingInfoProtoMsg): _39.DelegatorStartingInfo;
                toProto(message: _39.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _39.DelegatorStartingInfo): _39.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                encode(message: _39.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegationDelegatorReward;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _39.DelegationDelegatorReward;
                fromAmino(object: _39.DelegationDelegatorRewardAmino): _39.DelegationDelegatorReward;
                toAmino(message: _39.DelegationDelegatorReward): _39.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _39.DelegationDelegatorRewardAminoMsg): _39.DelegationDelegatorReward;
                toAminoMsg(message: _39.DelegationDelegatorReward): _39.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _39.DelegationDelegatorRewardProtoMsg): _39.DelegationDelegatorReward;
                toProto(message: _39.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _39.DelegationDelegatorReward): _39.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _39.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _39.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _39.CommunityPoolSpendProposalWithDepositAmino): _39.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _39.CommunityPoolSpendProposalWithDeposit): _39.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _39.CommunityPoolSpendProposalWithDepositAminoMsg): _39.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _39.CommunityPoolSpendProposalWithDeposit): _39.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _39.CommunityPoolSpendProposalWithDepositProtoMsg): _39.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _39.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _39.CommunityPoolSpendProposalWithDeposit): _39.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _45.QueryEvidenceRequest): Promise<_45.QueryEvidenceResponse>;
                allEvidence(request?: _45.QueryAllEvidenceRequest): Promise<_45.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _46.MsgSubmitEvidence) => _46.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _46.MsgSubmitEvidenceAmino) => _46.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _46.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgSubmitEvidence;
                fromPartial(object: {
                    submitter?: string;
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _46.MsgSubmitEvidence;
                fromAmino(object: _46.MsgSubmitEvidenceAmino): _46.MsgSubmitEvidence;
                toAmino(message: _46.MsgSubmitEvidence): _46.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _46.MsgSubmitEvidenceAminoMsg): _46.MsgSubmitEvidence;
                toAminoMsg(message: _46.MsgSubmitEvidence): _46.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _46.MsgSubmitEvidenceProtoMsg): _46.MsgSubmitEvidence;
                toProto(message: _46.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _46.MsgSubmitEvidence): _46.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _46.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgSubmitEvidenceResponse;
                fromPartial(object: {
                    hash?: Uint8Array;
                }): _46.MsgSubmitEvidenceResponse;
                fromAmino(object: _46.MsgSubmitEvidenceResponseAmino): _46.MsgSubmitEvidenceResponse;
                toAmino(message: _46.MsgSubmitEvidenceResponse): _46.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _46.MsgSubmitEvidenceResponseAminoMsg): _46.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _46.MsgSubmitEvidenceResponse): _46.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _46.MsgSubmitEvidenceResponseProtoMsg): _46.MsgSubmitEvidenceResponse;
                toProto(message: _46.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _46.MsgSubmitEvidenceResponse): _46.MsgSubmitEvidenceResponseProtoMsg;
            };
            QueryEvidenceRequest: {
                encode(message: _45.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryEvidenceRequest;
                fromPartial(object: {
                    evidenceHash?: Uint8Array;
                }): _45.QueryEvidenceRequest;
                fromAmino(object: _45.QueryEvidenceRequestAmino): _45.QueryEvidenceRequest;
                toAmino(message: _45.QueryEvidenceRequest): _45.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _45.QueryEvidenceRequestAminoMsg): _45.QueryEvidenceRequest;
                toAminoMsg(message: _45.QueryEvidenceRequest): _45.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _45.QueryEvidenceRequestProtoMsg): _45.QueryEvidenceRequest;
                toProto(message: _45.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _45.QueryEvidenceRequest): _45.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                encode(message: _45.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryEvidenceResponse;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _45.QueryEvidenceResponse;
                fromAmino(object: _45.QueryEvidenceResponseAmino): _45.QueryEvidenceResponse;
                toAmino(message: _45.QueryEvidenceResponse): _45.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _45.QueryEvidenceResponseAminoMsg): _45.QueryEvidenceResponse;
                toAminoMsg(message: _45.QueryEvidenceResponse): _45.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _45.QueryEvidenceResponseProtoMsg): _45.QueryEvidenceResponse;
                toProto(message: _45.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _45.QueryEvidenceResponse): _45.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                encode(message: _45.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryAllEvidenceRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _45.QueryAllEvidenceRequest;
                fromAmino(object: _45.QueryAllEvidenceRequestAmino): _45.QueryAllEvidenceRequest;
                toAmino(message: _45.QueryAllEvidenceRequest): _45.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _45.QueryAllEvidenceRequestAminoMsg): _45.QueryAllEvidenceRequest;
                toAminoMsg(message: _45.QueryAllEvidenceRequest): _45.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _45.QueryAllEvidenceRequestProtoMsg): _45.QueryAllEvidenceRequest;
                toProto(message: _45.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _45.QueryAllEvidenceRequest): _45.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                encode(message: _45.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryAllEvidenceResponse;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _45.QueryAllEvidenceResponse;
                fromAmino(object: _45.QueryAllEvidenceResponseAmino): _45.QueryAllEvidenceResponse;
                toAmino(message: _45.QueryAllEvidenceResponse): _45.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _45.QueryAllEvidenceResponseAminoMsg): _45.QueryAllEvidenceResponse;
                toAminoMsg(message: _45.QueryAllEvidenceResponse): _45.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _45.QueryAllEvidenceResponseProtoMsg): _45.QueryAllEvidenceResponse;
                toProto(message: _45.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _45.QueryAllEvidenceResponse): _45.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _44.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GenesisState;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _44.GenesisState;
                fromAmino(object: _44.GenesisStateAmino): _44.GenesisState;
                toAmino(message: _44.GenesisState): _44.GenesisStateAmino;
                fromAminoMsg(object: _44.GenesisStateAminoMsg): _44.GenesisState;
                toAminoMsg(message: _44.GenesisState): _44.GenesisStateAminoMsg;
                fromProtoMsg(message: _44.GenesisStateProtoMsg): _44.GenesisState;
                toProto(message: _44.GenesisState): Uint8Array;
                toProtoMsg(message: _44.GenesisState): _44.GenesisStateProtoMsg;
            };
            Equivocation: {
                encode(message: _43.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Equivocation;
                fromPartial(object: {
                    height?: string | number | import("long").Long;
                    time?: Date;
                    power?: string | number | import("long").Long;
                    consensusAddress?: string;
                }): _43.Equivocation;
                fromAmino(object: _43.EquivocationAmino): _43.Equivocation;
                toAmino(message: _43.Equivocation): _43.EquivocationAmino;
                fromAminoMsg(object: _43.EquivocationAminoMsg): _43.Equivocation;
                toAminoMsg(message: _43.Equivocation): _43.EquivocationAminoMsg;
                fromProtoMsg(message: _43.EquivocationProtoMsg): _43.Equivocation;
                toProto(message: _43.Equivocation): Uint8Array;
                toProtoMsg(message: _43.Equivocation): _43.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _49.QueryAllowanceRequest): Promise<_49.QueryAllowanceResponse>;
                allowances(request: _49.QueryAllowancesRequest): Promise<_49.QueryAllowancesResponse>;
                allowancesByGranter(request: _49.QueryAllowancesByGranterRequest): Promise<_49.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _50.MsgGrantAllowance) => _50.MsgGrantAllowanceAmino;
                    fromAmino: (object: _50.MsgGrantAllowanceAmino) => _50.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _50.MsgRevokeAllowance) => _50.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _50.MsgRevokeAllowanceAmino) => _50.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _50.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgGrantAllowance;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _50.MsgGrantAllowance;
                fromAmino(object: _50.MsgGrantAllowanceAmino): _50.MsgGrantAllowance;
                toAmino(message: _50.MsgGrantAllowance): _50.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _50.MsgGrantAllowanceAminoMsg): _50.MsgGrantAllowance;
                toAminoMsg(message: _50.MsgGrantAllowance): _50.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _50.MsgGrantAllowanceProtoMsg): _50.MsgGrantAllowance;
                toProto(message: _50.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _50.MsgGrantAllowance): _50.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _50.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgGrantAllowanceResponse;
                fromPartial(_: {}): _50.MsgGrantAllowanceResponse;
                fromAmino(_: _50.MsgGrantAllowanceResponseAmino): _50.MsgGrantAllowanceResponse;
                toAmino(_: _50.MsgGrantAllowanceResponse): _50.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _50.MsgGrantAllowanceResponseAminoMsg): _50.MsgGrantAllowanceResponse;
                toAminoMsg(message: _50.MsgGrantAllowanceResponse): _50.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _50.MsgGrantAllowanceResponseProtoMsg): _50.MsgGrantAllowanceResponse;
                toProto(message: _50.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _50.MsgGrantAllowanceResponse): _50.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                encode(message: _50.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgRevokeAllowance;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _50.MsgRevokeAllowance;
                fromAmino(object: _50.MsgRevokeAllowanceAmino): _50.MsgRevokeAllowance;
                toAmino(message: _50.MsgRevokeAllowance): _50.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _50.MsgRevokeAllowanceAminoMsg): _50.MsgRevokeAllowance;
                toAminoMsg(message: _50.MsgRevokeAllowance): _50.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _50.MsgRevokeAllowanceProtoMsg): _50.MsgRevokeAllowance;
                toProto(message: _50.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _50.MsgRevokeAllowance): _50.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _50.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgRevokeAllowanceResponse;
                fromPartial(_: {}): _50.MsgRevokeAllowanceResponse;
                fromAmino(_: _50.MsgRevokeAllowanceResponseAmino): _50.MsgRevokeAllowanceResponse;
                toAmino(_: _50.MsgRevokeAllowanceResponse): _50.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _50.MsgRevokeAllowanceResponseAminoMsg): _50.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _50.MsgRevokeAllowanceResponse): _50.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _50.MsgRevokeAllowanceResponseProtoMsg): _50.MsgRevokeAllowanceResponse;
                toProto(message: _50.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _50.MsgRevokeAllowanceResponse): _50.MsgRevokeAllowanceResponseProtoMsg;
            };
            QueryAllowanceRequest: {
                encode(message: _49.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowanceRequest;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _49.QueryAllowanceRequest;
                fromAmino(object: _49.QueryAllowanceRequestAmino): _49.QueryAllowanceRequest;
                toAmino(message: _49.QueryAllowanceRequest): _49.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _49.QueryAllowanceRequestAminoMsg): _49.QueryAllowanceRequest;
                toAminoMsg(message: _49.QueryAllowanceRequest): _49.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _49.QueryAllowanceRequestProtoMsg): _49.QueryAllowanceRequest;
                toProto(message: _49.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _49.QueryAllowanceRequest): _49.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                encode(message: _49.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowanceResponse;
                fromPartial(object: {
                    allowance?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _49.QueryAllowanceResponse;
                fromAmino(object: _49.QueryAllowanceResponseAmino): _49.QueryAllowanceResponse;
                toAmino(message: _49.QueryAllowanceResponse): _49.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _49.QueryAllowanceResponseAminoMsg): _49.QueryAllowanceResponse;
                toAminoMsg(message: _49.QueryAllowanceResponse): _49.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _49.QueryAllowanceResponseProtoMsg): _49.QueryAllowanceResponse;
                toProto(message: _49.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _49.QueryAllowanceResponse): _49.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                encode(message: _49.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowancesRequest;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _49.QueryAllowancesRequest;
                fromAmino(object: _49.QueryAllowancesRequestAmino): _49.QueryAllowancesRequest;
                toAmino(message: _49.QueryAllowancesRequest): _49.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _49.QueryAllowancesRequestAminoMsg): _49.QueryAllowancesRequest;
                toAminoMsg(message: _49.QueryAllowancesRequest): _49.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _49.QueryAllowancesRequestProtoMsg): _49.QueryAllowancesRequest;
                toProto(message: _49.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _49.QueryAllowancesRequest): _49.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                encode(message: _49.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowancesResponse;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _49.QueryAllowancesResponse;
                fromAmino(object: _49.QueryAllowancesResponseAmino): _49.QueryAllowancesResponse;
                toAmino(message: _49.QueryAllowancesResponse): _49.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _49.QueryAllowancesResponseAminoMsg): _49.QueryAllowancesResponse;
                toAminoMsg(message: _49.QueryAllowancesResponse): _49.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _49.QueryAllowancesResponseProtoMsg): _49.QueryAllowancesResponse;
                toProto(message: _49.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _49.QueryAllowancesResponse): _49.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _49.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowancesByGranterRequest;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _49.QueryAllowancesByGranterRequest;
                fromAmino(object: _49.QueryAllowancesByGranterRequestAmino): _49.QueryAllowancesByGranterRequest;
                toAmino(message: _49.QueryAllowancesByGranterRequest): _49.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _49.QueryAllowancesByGranterRequestAminoMsg): _49.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _49.QueryAllowancesByGranterRequest): _49.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _49.QueryAllowancesByGranterRequestProtoMsg): _49.QueryAllowancesByGranterRequest;
                toProto(message: _49.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _49.QueryAllowancesByGranterRequest): _49.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _49.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAllowancesByGranterResponse;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _49.QueryAllowancesByGranterResponse;
                fromAmino(object: _49.QueryAllowancesByGranterResponseAmino): _49.QueryAllowancesByGranterResponse;
                toAmino(message: _49.QueryAllowancesByGranterResponse): _49.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _49.QueryAllowancesByGranterResponseAminoMsg): _49.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _49.QueryAllowancesByGranterResponse): _49.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _49.QueryAllowancesByGranterResponseProtoMsg): _49.QueryAllowancesByGranterResponse;
                toProto(message: _49.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _49.QueryAllowancesByGranterResponse): _49.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.GenesisState;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _48.GenesisState;
                fromAmino(object: _48.GenesisStateAmino): _48.GenesisState;
                toAmino(message: _48.GenesisState): _48.GenesisStateAmino;
                fromAminoMsg(object: _48.GenesisStateAminoMsg): _48.GenesisState;
                toAminoMsg(message: _48.GenesisState): _48.GenesisStateAminoMsg;
                fromProtoMsg(message: _48.GenesisStateProtoMsg): _48.GenesisState;
                toProto(message: _48.GenesisState): Uint8Array;
                toProtoMsg(message: _48.GenesisState): _48.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                encode(message: _47.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.BasicAllowance;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: Date;
                }): _47.BasicAllowance;
                fromAmino(object: _47.BasicAllowanceAmino): _47.BasicAllowance;
                toAmino(message: _47.BasicAllowance): _47.BasicAllowanceAmino;
                fromAminoMsg(object: _47.BasicAllowanceAminoMsg): _47.BasicAllowance;
                toAminoMsg(message: _47.BasicAllowance): _47.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _47.BasicAllowanceProtoMsg): _47.BasicAllowance;
                toProto(message: _47.BasicAllowance): Uint8Array;
                toProtoMsg(message: _47.BasicAllowance): _47.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                encode(message: _47.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.PeriodicAllowance;
                fromPartial(object: {
                    basic?: {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: Date;
                    };
                    period?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    periodSpendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodCanSpend?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodReset?: Date;
                }): _47.PeriodicAllowance;
                fromAmino(object: _47.PeriodicAllowanceAmino): _47.PeriodicAllowance;
                toAmino(message: _47.PeriodicAllowance): _47.PeriodicAllowanceAmino;
                fromAminoMsg(object: _47.PeriodicAllowanceAminoMsg): _47.PeriodicAllowance;
                toAminoMsg(message: _47.PeriodicAllowance): _47.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _47.PeriodicAllowanceProtoMsg): _47.PeriodicAllowance;
                toProto(message: _47.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _47.PeriodicAllowance): _47.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                encode(message: _47.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.AllowedMsgAllowance;
                fromPartial(object: {
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    allowedMessages?: string[];
                }): _47.AllowedMsgAllowance;
                fromAmino(object: _47.AllowedMsgAllowanceAmino): _47.AllowedMsgAllowance;
                toAmino(message: _47.AllowedMsgAllowance): _47.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _47.AllowedMsgAllowanceAminoMsg): _47.AllowedMsgAllowance;
                toAminoMsg(message: _47.AllowedMsgAllowance): _47.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _47.AllowedMsgAllowanceProtoMsg): _47.AllowedMsgAllowance;
                toProto(message: _47.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _47.AllowedMsgAllowance): _47.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                encode(message: _47.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Grant;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _47.Grant;
                fromAmino(object: _47.GrantAmino): _47.Grant;
                toAmino(message: _47.Grant): _47.GrantAmino;
                fromAminoMsg(object: _47.GrantAminoMsg): _47.Grant;
                toAminoMsg(message: _47.Grant): _47.GrantAminoMsg;
                fromProtoMsg(message: _47.GrantProtoMsg): _47.Grant;
                toProto(message: _47.Grant): Uint8Array;
                toProtoMsg(message: _47.Grant): _47.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState;
                fromPartial(object: {
                    genTxs?: Uint8Array[];
                }): _51.GenesisState;
                fromAmino(object: _51.GenesisStateAmino): _51.GenesisState;
                toAmino(message: _51.GenesisState): _51.GenesisStateAmino;
                fromAminoMsg(object: _51.GenesisStateAminoMsg): _51.GenesisState;
                toAminoMsg(message: _51.GenesisState): _51.GenesisStateAminoMsg;
                fromProtoMsg(message: _51.GenesisStateProtoMsg): _51.GenesisState;
                toProto(message: _51.GenesisState): Uint8Array;
                toProtoMsg(message: _51.GenesisState): _51.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _230.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _54.QueryProposalRequest): Promise<_54.QueryProposalResponse>;
                proposals(request: _54.QueryProposalsRequest): Promise<_54.QueryProposalsResponse>;
                vote(request: _54.QueryVoteRequest): Promise<_54.QueryVoteResponse>;
                votes(request: _54.QueryVotesRequest): Promise<_54.QueryVotesResponse>;
                params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                deposit(request: _54.QueryDepositRequest): Promise<_54.QueryDepositResponse>;
                deposits(request: _54.QueryDepositsRequest): Promise<_54.QueryDepositsResponse>;
                tallyResult(request: _54.QueryTallyResultRequest): Promise<_54.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _55.MsgSubmitProposal) => _55.MsgSubmitProposalAmino;
                    fromAmino: (object: _55.MsgSubmitProposalAmino) => _55.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _55.MsgExecLegacyContent) => _55.MsgExecLegacyContentAmino;
                    fromAmino: (object: _55.MsgExecLegacyContentAmino) => _55.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _55.MsgVote) => _55.MsgVoteAmino;
                    fromAmino: (object: _55.MsgVoteAmino) => _55.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _55.MsgVoteWeighted) => _55.MsgVoteWeightedAmino;
                    fromAmino: (object: _55.MsgVoteWeightedAmino) => _55.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _55.MsgDeposit) => _55.MsgDepositAmino;
                    fromAmino: (object: _55.MsgDepositAmino) => _55.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _55.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSubmitProposal;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                    metadata?: string;
                }): _55.MsgSubmitProposal;
                fromAmino(object: _55.MsgSubmitProposalAmino): _55.MsgSubmitProposal;
                toAmino(message: _55.MsgSubmitProposal): _55.MsgSubmitProposalAmino;
                fromAminoMsg(object: _55.MsgSubmitProposalAminoMsg): _55.MsgSubmitProposal;
                toAminoMsg(message: _55.MsgSubmitProposal): _55.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _55.MsgSubmitProposalProtoMsg): _55.MsgSubmitProposal;
                toProto(message: _55.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _55.MsgSubmitProposal): _55.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _55.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _55.MsgSubmitProposalResponse;
                fromAmino(object: _55.MsgSubmitProposalResponseAmino): _55.MsgSubmitProposalResponse;
                toAmino(message: _55.MsgSubmitProposalResponse): _55.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _55.MsgSubmitProposalResponseAminoMsg): _55.MsgSubmitProposalResponse;
                toAminoMsg(message: _55.MsgSubmitProposalResponse): _55.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _55.MsgSubmitProposalResponseProtoMsg): _55.MsgSubmitProposalResponse;
                toProto(message: _55.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _55.MsgSubmitProposalResponse): _55.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                encode(message: _55.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgExecLegacyContent;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    authority?: string;
                }): _55.MsgExecLegacyContent;
                fromAmino(object: _55.MsgExecLegacyContentAmino): _55.MsgExecLegacyContent;
                toAmino(message: _55.MsgExecLegacyContent): _55.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _55.MsgExecLegacyContentAminoMsg): _55.MsgExecLegacyContent;
                toAminoMsg(message: _55.MsgExecLegacyContent): _55.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _55.MsgExecLegacyContentProtoMsg): _55.MsgExecLegacyContent;
                toProto(message: _55.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _55.MsgExecLegacyContent): _55.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _55.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgExecLegacyContentResponse;
                fromPartial(_: {}): _55.MsgExecLegacyContentResponse;
                fromAmino(_: _55.MsgExecLegacyContentResponseAmino): _55.MsgExecLegacyContentResponse;
                toAmino(_: _55.MsgExecLegacyContentResponse): _55.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _55.MsgExecLegacyContentResponseAminoMsg): _55.MsgExecLegacyContentResponse;
                toAminoMsg(message: _55.MsgExecLegacyContentResponse): _55.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _55.MsgExecLegacyContentResponseProtoMsg): _55.MsgExecLegacyContentResponse;
                toProto(message: _55.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _55.MsgExecLegacyContentResponse): _55.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _55.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                    option?: _53.VoteOption;
                    metadata?: string;
                }): _55.MsgVote;
                fromAmino(object: _55.MsgVoteAmino): _55.MsgVote;
                toAmino(message: _55.MsgVote): _55.MsgVoteAmino;
                fromAminoMsg(object: _55.MsgVoteAminoMsg): _55.MsgVote;
                toAminoMsg(message: _55.MsgVote): _55.MsgVoteAminoMsg;
                fromProtoMsg(message: _55.MsgVoteProtoMsg): _55.MsgVote;
                toProto(message: _55.MsgVote): Uint8Array;
                toProtoMsg(message: _55.MsgVote): _55.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _55.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgVoteResponse;
                fromPartial(_: {}): _55.MsgVoteResponse;
                fromAmino(_: _55.MsgVoteResponseAmino): _55.MsgVoteResponse;
                toAmino(_: _55.MsgVoteResponse): _55.MsgVoteResponseAmino;
                fromAminoMsg(object: _55.MsgVoteResponseAminoMsg): _55.MsgVoteResponse;
                toAminoMsg(message: _55.MsgVoteResponse): _55.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _55.MsgVoteResponseProtoMsg): _55.MsgVoteResponse;
                toProto(message: _55.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _55.MsgVoteResponse): _55.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _55.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                    options?: {
                        option?: _53.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _55.MsgVoteWeighted;
                fromAmino(object: _55.MsgVoteWeightedAmino): _55.MsgVoteWeighted;
                toAmino(message: _55.MsgVoteWeighted): _55.MsgVoteWeightedAmino;
                fromAminoMsg(object: _55.MsgVoteWeightedAminoMsg): _55.MsgVoteWeighted;
                toAminoMsg(message: _55.MsgVoteWeighted): _55.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _55.MsgVoteWeightedProtoMsg): _55.MsgVoteWeighted;
                toProto(message: _55.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _55.MsgVoteWeighted): _55.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _55.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgVoteWeightedResponse;
                fromPartial(_: {}): _55.MsgVoteWeightedResponse;
                fromAmino(_: _55.MsgVoteWeightedResponseAmino): _55.MsgVoteWeightedResponse;
                toAmino(_: _55.MsgVoteWeightedResponse): _55.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _55.MsgVoteWeightedResponseAminoMsg): _55.MsgVoteWeightedResponse;
                toAminoMsg(message: _55.MsgVoteWeightedResponse): _55.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _55.MsgVoteWeightedResponseProtoMsg): _55.MsgVoteWeightedResponse;
                toProto(message: _55.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _55.MsgVoteWeightedResponse): _55.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _55.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgDeposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _55.MsgDeposit;
                fromAmino(object: _55.MsgDepositAmino): _55.MsgDeposit;
                toAmino(message: _55.MsgDeposit): _55.MsgDepositAmino;
                fromAminoMsg(object: _55.MsgDepositAminoMsg): _55.MsgDeposit;
                toAminoMsg(message: _55.MsgDeposit): _55.MsgDepositAminoMsg;
                fromProtoMsg(message: _55.MsgDepositProtoMsg): _55.MsgDeposit;
                toProto(message: _55.MsgDeposit): Uint8Array;
                toProtoMsg(message: _55.MsgDeposit): _55.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _55.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgDepositResponse;
                fromPartial(_: {}): _55.MsgDepositResponse;
                fromAmino(_: _55.MsgDepositResponseAmino): _55.MsgDepositResponse;
                toAmino(_: _55.MsgDepositResponse): _55.MsgDepositResponseAmino;
                fromAminoMsg(object: _55.MsgDepositResponseAminoMsg): _55.MsgDepositResponse;
                toAminoMsg(message: _55.MsgDepositResponse): _55.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _55.MsgDepositResponseProtoMsg): _55.MsgDepositResponse;
                toProto(message: _55.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _55.MsgDepositResponse): _55.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                encode(message: _54.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _54.QueryProposalRequest;
                fromAmino(object: _54.QueryProposalRequestAmino): _54.QueryProposalRequest;
                toAmino(message: _54.QueryProposalRequest): _54.QueryProposalRequestAmino;
                fromAminoMsg(object: _54.QueryProposalRequestAminoMsg): _54.QueryProposalRequest;
                toAminoMsg(message: _54.QueryProposalRequest): _54.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _54.QueryProposalRequestProtoMsg): _54.QueryProposalRequest;
                toProto(message: _54.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _54.QueryProposalRequest): _54.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _54.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        id?: string | number | import("long").Long;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _53.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    };
                }): _54.QueryProposalResponse;
                fromAmino(object: _54.QueryProposalResponseAmino): _54.QueryProposalResponse;
                toAmino(message: _54.QueryProposalResponse): _54.QueryProposalResponseAmino;
                fromAminoMsg(object: _54.QueryProposalResponseAminoMsg): _54.QueryProposalResponse;
                toAminoMsg(message: _54.QueryProposalResponse): _54.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _54.QueryProposalResponseProtoMsg): _54.QueryProposalResponse;
                toProto(message: _54.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _54.QueryProposalResponse): _54.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _54.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _53.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _54.QueryProposalsRequest;
                fromAmino(object: _54.QueryProposalsRequestAmino): _54.QueryProposalsRequest;
                toAmino(message: _54.QueryProposalsRequest): _54.QueryProposalsRequestAmino;
                fromAminoMsg(object: _54.QueryProposalsRequestAminoMsg): _54.QueryProposalsRequest;
                toAminoMsg(message: _54.QueryProposalsRequest): _54.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryProposalsRequestProtoMsg): _54.QueryProposalsRequest;
                toProto(message: _54.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryProposalsRequest): _54.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _54.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        id?: string | number | import("long").Long;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _53.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _54.QueryProposalsResponse;
                fromAmino(object: _54.QueryProposalsResponseAmino): _54.QueryProposalsResponse;
                toAmino(message: _54.QueryProposalsResponse): _54.QueryProposalsResponseAmino;
                fromAminoMsg(object: _54.QueryProposalsResponseAminoMsg): _54.QueryProposalsResponse;
                toAminoMsg(message: _54.QueryProposalsResponse): _54.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryProposalsResponseProtoMsg): _54.QueryProposalsResponse;
                toProto(message: _54.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryProposalsResponse): _54.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _54.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                }): _54.QueryVoteRequest;
                fromAmino(object: _54.QueryVoteRequestAmino): _54.QueryVoteRequest;
                toAmino(message: _54.QueryVoteRequest): _54.QueryVoteRequestAmino;
                fromAminoMsg(object: _54.QueryVoteRequestAminoMsg): _54.QueryVoteRequest;
                toAminoMsg(message: _54.QueryVoteRequest): _54.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _54.QueryVoteRequestProtoMsg): _54.QueryVoteRequest;
                toProto(message: _54.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _54.QueryVoteRequest): _54.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _54.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long").Long;
                        voter?: string;
                        options?: {
                            option?: _53.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _54.QueryVoteResponse;
                fromAmino(object: _54.QueryVoteResponseAmino): _54.QueryVoteResponse;
                toAmino(message: _54.QueryVoteResponse): _54.QueryVoteResponseAmino;
                fromAminoMsg(object: _54.QueryVoteResponseAminoMsg): _54.QueryVoteResponse;
                toAminoMsg(message: _54.QueryVoteResponse): _54.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _54.QueryVoteResponseProtoMsg): _54.QueryVoteResponse;
                toProto(message: _54.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _54.QueryVoteResponse): _54.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _54.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _54.QueryVotesRequest;
                fromAmino(object: _54.QueryVotesRequestAmino): _54.QueryVotesRequest;
                toAmino(message: _54.QueryVotesRequest): _54.QueryVotesRequestAmino;
                fromAminoMsg(object: _54.QueryVotesRequestAminoMsg): _54.QueryVotesRequest;
                toAminoMsg(message: _54.QueryVotesRequest): _54.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _54.QueryVotesRequestProtoMsg): _54.QueryVotesRequest;
                toProto(message: _54.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _54.QueryVotesRequest): _54.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _54.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long").Long;
                        voter?: string;
                        options?: {
                            option?: _53.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _54.QueryVotesResponse;
                fromAmino(object: _54.QueryVotesResponseAmino): _54.QueryVotesResponse;
                toAmino(message: _54.QueryVotesResponse): _54.QueryVotesResponseAmino;
                fromAminoMsg(object: _54.QueryVotesResponseAminoMsg): _54.QueryVotesResponse;
                toAminoMsg(message: _54.QueryVotesResponse): _54.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _54.QueryVotesResponseProtoMsg): _54.QueryVotesResponse;
                toProto(message: _54.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _54.QueryVotesResponse): _54.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _54.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string;
                }): _54.QueryParamsRequest;
                fromAmino(object: _54.QueryParamsRequestAmino): _54.QueryParamsRequest;
                toAmino(message: _54.QueryParamsRequest): _54.QueryParamsRequestAmino;
                fromAminoMsg(object: _54.QueryParamsRequestAminoMsg): _54.QueryParamsRequest;
                toAminoMsg(message: _54.QueryParamsRequest): _54.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryParamsRequestProtoMsg): _54.QueryParamsRequest;
                toProto(message: _54.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryParamsRequest): _54.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _54.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsResponse;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _54.QueryParamsResponse;
                fromAmino(object: _54.QueryParamsResponseAmino): _54.QueryParamsResponse;
                toAmino(message: _54.QueryParamsResponse): _54.QueryParamsResponseAmino;
                fromAminoMsg(object: _54.QueryParamsResponseAminoMsg): _54.QueryParamsResponse;
                toAminoMsg(message: _54.QueryParamsResponse): _54.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryParamsResponseProtoMsg): _54.QueryParamsResponse;
                toProto(message: _54.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryParamsResponse): _54.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _54.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    depositor?: string;
                }): _54.QueryDepositRequest;
                fromAmino(object: _54.QueryDepositRequestAmino): _54.QueryDepositRequest;
                toAmino(message: _54.QueryDepositRequest): _54.QueryDepositRequestAmino;
                fromAminoMsg(object: _54.QueryDepositRequestAminoMsg): _54.QueryDepositRequest;
                toAminoMsg(message: _54.QueryDepositRequest): _54.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDepositRequestProtoMsg): _54.QueryDepositRequest;
                toProto(message: _54.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDepositRequest): _54.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _54.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: string | number | import("long").Long;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _54.QueryDepositResponse;
                fromAmino(object: _54.QueryDepositResponseAmino): _54.QueryDepositResponse;
                toAmino(message: _54.QueryDepositResponse): _54.QueryDepositResponseAmino;
                fromAminoMsg(object: _54.QueryDepositResponseAminoMsg): _54.QueryDepositResponse;
                toAminoMsg(message: _54.QueryDepositResponse): _54.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDepositResponseProtoMsg): _54.QueryDepositResponse;
                toProto(message: _54.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDepositResponse): _54.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _54.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _54.QueryDepositsRequest;
                fromAmino(object: _54.QueryDepositsRequestAmino): _54.QueryDepositsRequest;
                toAmino(message: _54.QueryDepositsRequest): _54.QueryDepositsRequestAmino;
                fromAminoMsg(object: _54.QueryDepositsRequestAminoMsg): _54.QueryDepositsRequest;
                toAminoMsg(message: _54.QueryDepositsRequest): _54.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDepositsRequestProtoMsg): _54.QueryDepositsRequest;
                toProto(message: _54.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDepositsRequest): _54.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _54.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: string | number | import("long").Long;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _54.QueryDepositsResponse;
                fromAmino(object: _54.QueryDepositsResponseAmino): _54.QueryDepositsResponse;
                toAmino(message: _54.QueryDepositsResponse): _54.QueryDepositsResponseAmino;
                fromAminoMsg(object: _54.QueryDepositsResponseAminoMsg): _54.QueryDepositsResponse;
                toAminoMsg(message: _54.QueryDepositsResponse): _54.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDepositsResponseProtoMsg): _54.QueryDepositsResponse;
                toProto(message: _54.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDepositsResponse): _54.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _54.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _54.QueryTallyResultRequest;
                fromAmino(object: _54.QueryTallyResultRequestAmino): _54.QueryTallyResultRequest;
                toAmino(message: _54.QueryTallyResultRequest): _54.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _54.QueryTallyResultRequestAminoMsg): _54.QueryTallyResultRequest;
                toAminoMsg(message: _54.QueryTallyResultRequest): _54.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _54.QueryTallyResultRequestProtoMsg): _54.QueryTallyResultRequest;
                toProto(message: _54.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _54.QueryTallyResultRequest): _54.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _54.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _54.QueryTallyResultResponse;
                fromAmino(object: _54.QueryTallyResultResponseAmino): _54.QueryTallyResultResponse;
                toAmino(message: _54.QueryTallyResultResponse): _54.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _54.QueryTallyResultResponseAminoMsg): _54.QueryTallyResultResponse;
                toAminoMsg(message: _54.QueryTallyResultResponse): _54.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _54.QueryTallyResultResponseProtoMsg): _54.QueryTallyResultResponse;
                toProto(message: _54.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _54.QueryTallyResultResponse): _54.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _53.VoteOption;
            voteOptionToJSON(object: _53.VoteOption): string;
            proposalStatusFromJSON(object: any): _53.ProposalStatus;
            proposalStatusToJSON(object: _53.ProposalStatus): string;
            VoteOption: typeof _53.VoteOption;
            VoteOptionSDKType: typeof _53.VoteOption;
            VoteOptionAmino: typeof _53.VoteOption;
            ProposalStatus: typeof _53.ProposalStatus;
            ProposalStatusSDKType: typeof _53.ProposalStatus;
            ProposalStatusAmino: typeof _53.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _53.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.WeightedVoteOption;
                fromPartial(object: {
                    option?: _53.VoteOption;
                    weight?: string;
                }): _53.WeightedVoteOption;
                fromAmino(object: _53.WeightedVoteOptionAmino): _53.WeightedVoteOption;
                toAmino(message: _53.WeightedVoteOption): _53.WeightedVoteOptionAmino;
                fromAminoMsg(object: _53.WeightedVoteOptionAminoMsg): _53.WeightedVoteOption;
                toAminoMsg(message: _53.WeightedVoteOption): _53.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _53.WeightedVoteOptionProtoMsg): _53.WeightedVoteOption;
                toProto(message: _53.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _53.WeightedVoteOption): _53.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                encode(message: _53.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Deposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _53.Deposit;
                fromAmino(object: _53.DepositAmino): _53.Deposit;
                toAmino(message: _53.Deposit): _53.DepositAmino;
                fromAminoMsg(object: _53.DepositAminoMsg): _53.Deposit;
                toAminoMsg(message: _53.Deposit): _53.DepositAminoMsg;
                fromProtoMsg(message: _53.DepositProtoMsg): _53.Deposit;
                toProto(message: _53.Deposit): Uint8Array;
                toProtoMsg(message: _53.Deposit): _53.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _53.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Proposal;
                fromPartial(object: {
                    id?: string | number | import("long").Long;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _53.ProposalStatus;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                    metadata?: string;
                }): _53.Proposal;
                fromAmino(object: _53.ProposalAmino): _53.Proposal;
                toAmino(message: _53.Proposal): _53.ProposalAmino;
                fromAminoMsg(object: _53.ProposalAminoMsg): _53.Proposal;
                toAminoMsg(message: _53.Proposal): _53.ProposalAminoMsg;
                fromProtoMsg(message: _53.ProposalProtoMsg): _53.Proposal;
                toProto(message: _53.Proposal): Uint8Array;
                toProtoMsg(message: _53.Proposal): _53.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _53.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.TallyResult;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _53.TallyResult;
                fromAmino(object: _53.TallyResultAmino): _53.TallyResult;
                toAmino(message: _53.TallyResult): _53.TallyResultAmino;
                fromAminoMsg(object: _53.TallyResultAminoMsg): _53.TallyResult;
                toAminoMsg(message: _53.TallyResult): _53.TallyResultAminoMsg;
                fromProtoMsg(message: _53.TallyResultProtoMsg): _53.TallyResult;
                toProto(message: _53.TallyResult): Uint8Array;
                toProtoMsg(message: _53.TallyResult): _53.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _53.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Vote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                    options?: {
                        option?: _53.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _53.Vote;
                fromAmino(object: _53.VoteAmino): _53.Vote;
                toAmino(message: _53.Vote): _53.VoteAmino;
                fromAminoMsg(object: _53.VoteAminoMsg): _53.Vote;
                toAminoMsg(message: _53.Vote): _53.VoteAminoMsg;
                fromProtoMsg(message: _53.VoteProtoMsg): _53.Vote;
                toProto(message: _53.Vote): Uint8Array;
                toProtoMsg(message: _53.Vote): _53.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _53.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                }): _53.DepositParams;
                fromAmino(object: _53.DepositParamsAmino): _53.DepositParams;
                toAmino(message: _53.DepositParams): _53.DepositParamsAmino;
                fromAminoMsg(object: _53.DepositParamsAminoMsg): _53.DepositParams;
                toAminoMsg(message: _53.DepositParams): _53.DepositParamsAminoMsg;
                fromProtoMsg(message: _53.DepositParamsProtoMsg): _53.DepositParams;
                toProto(message: _53.DepositParams): Uint8Array;
                toProtoMsg(message: _53.DepositParams): _53.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _53.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                }): _53.VotingParams;
                fromAmino(object: _53.VotingParamsAmino): _53.VotingParams;
                toAmino(message: _53.VotingParams): _53.VotingParamsAmino;
                fromAminoMsg(object: _53.VotingParamsAminoMsg): _53.VotingParams;
                toAminoMsg(message: _53.VotingParams): _53.VotingParamsAminoMsg;
                fromProtoMsg(message: _53.VotingParamsProtoMsg): _53.VotingParams;
                toProto(message: _53.VotingParams): Uint8Array;
                toProtoMsg(message: _53.VotingParams): _53.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _53.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.TallyParams;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                }): _53.TallyParams;
                fromAmino(object: _53.TallyParamsAmino): _53.TallyParams;
                toAmino(message: _53.TallyParams): _53.TallyParamsAmino;
                fromAminoMsg(object: _53.TallyParamsAminoMsg): _53.TallyParams;
                toAminoMsg(message: _53.TallyParams): _53.TallyParamsAminoMsg;
                fromProtoMsg(message: _53.TallyParamsProtoMsg): _53.TallyParams;
                toProto(message: _53.TallyParams): Uint8Array;
                toProtoMsg(message: _53.TallyParams): _53.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _52.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GenesisState;
                fromPartial(object: {
                    startingProposalId?: string | number | import("long").Long;
                    deposits?: {
                        proposalId?: string | number | import("long").Long;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: string | number | import("long").Long;
                        voter?: string;
                        options?: {
                            option?: _53.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    proposals?: {
                        id?: string | number | import("long").Long;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _53.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _52.GenesisState;
                fromAmino(object: _52.GenesisStateAmino): _52.GenesisState;
                toAmino(message: _52.GenesisState): _52.GenesisStateAmino;
                fromAminoMsg(object: _52.GenesisStateAminoMsg): _52.GenesisState;
                toAminoMsg(message: _52.GenesisState): _52.GenesisStateAminoMsg;
                fromProtoMsg(message: _52.GenesisStateProtoMsg): _52.GenesisState;
                toProto(message: _52.GenesisState): Uint8Array;
                toProtoMsg(message: _52.GenesisState): _52.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _231.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _58.QueryProposalRequest): Promise<_58.QueryProposalResponse>;
                proposals(request: _58.QueryProposalsRequest): Promise<_58.QueryProposalsResponse>;
                vote(request: _58.QueryVoteRequest): Promise<_58.QueryVoteResponse>;
                votes(request: _58.QueryVotesRequest): Promise<_58.QueryVotesResponse>;
                params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                deposit(request: _58.QueryDepositRequest): Promise<_58.QueryDepositResponse>;
                deposits(request: _58.QueryDepositsRequest): Promise<_58.QueryDepositsResponse>;
                tallyResult(request: _58.QueryTallyResultRequest): Promise<_58.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _59.MsgSubmitProposal) => _59.MsgSubmitProposalAmino;
                    fromAmino: (object: _59.MsgSubmitProposalAmino) => _59.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _59.MsgVote) => _59.MsgVoteAmino;
                    fromAmino: (object: _59.MsgVoteAmino) => _59.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _59.MsgVoteWeighted) => _59.MsgVoteWeightedAmino;
                    fromAmino: (object: _59.MsgVoteWeightedAmino) => _59.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _59.MsgDeposit) => _59.MsgDepositAmino;
                    fromAmino: (object: _59.MsgDepositAmino) => _59.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _59.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgSubmitProposal;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _59.MsgSubmitProposal;
                fromAmino(object: _59.MsgSubmitProposalAmino): _59.MsgSubmitProposal;
                toAmino(message: _59.MsgSubmitProposal): _59.MsgSubmitProposalAmino;
                fromAminoMsg(object: _59.MsgSubmitProposalAminoMsg): _59.MsgSubmitProposal;
                toAminoMsg(message: _59.MsgSubmitProposal): _59.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _59.MsgSubmitProposalProtoMsg): _59.MsgSubmitProposal;
                toProto(message: _59.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _59.MsgSubmitProposal): _59.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _59.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _59.MsgSubmitProposalResponse;
                fromAmino(object: _59.MsgSubmitProposalResponseAmino): _59.MsgSubmitProposalResponse;
                toAmino(message: _59.MsgSubmitProposalResponse): _59.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _59.MsgSubmitProposalResponseAminoMsg): _59.MsgSubmitProposalResponse;
                toAminoMsg(message: _59.MsgSubmitProposalResponse): _59.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _59.MsgSubmitProposalResponseProtoMsg): _59.MsgSubmitProposalResponse;
                toProto(message: _59.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _59.MsgSubmitProposalResponse): _59.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _59.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                    option?: _57.VoteOption;
                }): _59.MsgVote;
                fromAmino(object: _59.MsgVoteAmino): _59.MsgVote;
                toAmino(message: _59.MsgVote): _59.MsgVoteAmino;
                fromAminoMsg(object: _59.MsgVoteAminoMsg): _59.MsgVote;
                toAminoMsg(message: _59.MsgVote): _59.MsgVoteAminoMsg;
                fromProtoMsg(message: _59.MsgVoteProtoMsg): _59.MsgVote;
                toProto(message: _59.MsgVote): Uint8Array;
                toProtoMsg(message: _59.MsgVote): _59.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _59.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgVoteResponse;
                fromPartial(_: {}): _59.MsgVoteResponse;
                fromAmino(_: _59.MsgVoteResponseAmino): _59.MsgVoteResponse;
                toAmino(_: _59.MsgVoteResponse): _59.MsgVoteResponseAmino;
                fromAminoMsg(object: _59.MsgVoteResponseAminoMsg): _59.MsgVoteResponse;
                toAminoMsg(message: _59.MsgVoteResponse): _59.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _59.MsgVoteResponseProtoMsg): _59.MsgVoteResponse;
                toProto(message: _59.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _59.MsgVoteResponse): _59.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _59.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                    options?: {
                        option?: _57.VoteOption;
                        weight?: string;
                    }[];
                }): _59.MsgVoteWeighted;
                fromAmino(object: _59.MsgVoteWeightedAmino): _59.MsgVoteWeighted;
                toAmino(message: _59.MsgVoteWeighted): _59.MsgVoteWeightedAmino;
                fromAminoMsg(object: _59.MsgVoteWeightedAminoMsg): _59.MsgVoteWeighted;
                toAminoMsg(message: _59.MsgVoteWeighted): _59.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _59.MsgVoteWeightedProtoMsg): _59.MsgVoteWeighted;
                toProto(message: _59.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _59.MsgVoteWeighted): _59.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _59.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgVoteWeightedResponse;
                fromPartial(_: {}): _59.MsgVoteWeightedResponse;
                fromAmino(_: _59.MsgVoteWeightedResponseAmino): _59.MsgVoteWeightedResponse;
                toAmino(_: _59.MsgVoteWeightedResponse): _59.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _59.MsgVoteWeightedResponseAminoMsg): _59.MsgVoteWeightedResponse;
                toAminoMsg(message: _59.MsgVoteWeightedResponse): _59.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _59.MsgVoteWeightedResponseProtoMsg): _59.MsgVoteWeightedResponse;
                toProto(message: _59.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _59.MsgVoteWeightedResponse): _59.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _59.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgDeposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _59.MsgDeposit;
                fromAmino(object: _59.MsgDepositAmino): _59.MsgDeposit;
                toAmino(message: _59.MsgDeposit): _59.MsgDepositAmino;
                fromAminoMsg(object: _59.MsgDepositAminoMsg): _59.MsgDeposit;
                toAminoMsg(message: _59.MsgDeposit): _59.MsgDepositAminoMsg;
                fromProtoMsg(message: _59.MsgDepositProtoMsg): _59.MsgDeposit;
                toProto(message: _59.MsgDeposit): Uint8Array;
                toProtoMsg(message: _59.MsgDeposit): _59.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _59.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgDepositResponse;
                fromPartial(_: {}): _59.MsgDepositResponse;
                fromAmino(_: _59.MsgDepositResponseAmino): _59.MsgDepositResponse;
                toAmino(_: _59.MsgDepositResponse): _59.MsgDepositResponseAmino;
                fromAminoMsg(object: _59.MsgDepositResponseAminoMsg): _59.MsgDepositResponse;
                toAminoMsg(message: _59.MsgDepositResponse): _59.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _59.MsgDepositResponseProtoMsg): _59.MsgDepositResponse;
                toProto(message: _59.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _59.MsgDepositResponse): _59.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                encode(message: _58.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _58.QueryProposalRequest;
                fromAmino(object: _58.QueryProposalRequestAmino): _58.QueryProposalRequest;
                toAmino(message: _58.QueryProposalRequest): _58.QueryProposalRequestAmino;
                fromAminoMsg(object: _58.QueryProposalRequestAminoMsg): _58.QueryProposalRequest;
                toAminoMsg(message: _58.QueryProposalRequest): _58.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _58.QueryProposalRequestProtoMsg): _58.QueryProposalRequest;
                toProto(message: _58.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _58.QueryProposalRequest): _58.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _58.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: string | number | import("long").Long;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _57.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    };
                }): _58.QueryProposalResponse;
                fromAmino(object: _58.QueryProposalResponseAmino): _58.QueryProposalResponse;
                toAmino(message: _58.QueryProposalResponse): _58.QueryProposalResponseAmino;
                fromAminoMsg(object: _58.QueryProposalResponseAminoMsg): _58.QueryProposalResponse;
                toAminoMsg(message: _58.QueryProposalResponse): _58.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _58.QueryProposalResponseProtoMsg): _58.QueryProposalResponse;
                toProto(message: _58.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _58.QueryProposalResponse): _58.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _58.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _57.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _58.QueryProposalsRequest;
                fromAmino(object: _58.QueryProposalsRequestAmino): _58.QueryProposalsRequest;
                toAmino(message: _58.QueryProposalsRequest): _58.QueryProposalsRequestAmino;
                fromAminoMsg(object: _58.QueryProposalsRequestAminoMsg): _58.QueryProposalsRequest;
                toAminoMsg(message: _58.QueryProposalsRequest): _58.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryProposalsRequestProtoMsg): _58.QueryProposalsRequest;
                toProto(message: _58.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryProposalsRequest): _58.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _58.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: string | number | import("long").Long;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _57.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _58.QueryProposalsResponse;
                fromAmino(object: _58.QueryProposalsResponseAmino): _58.QueryProposalsResponse;
                toAmino(message: _58.QueryProposalsResponse): _58.QueryProposalsResponseAmino;
                fromAminoMsg(object: _58.QueryProposalsResponseAminoMsg): _58.QueryProposalsResponse;
                toAminoMsg(message: _58.QueryProposalsResponse): _58.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryProposalsResponseProtoMsg): _58.QueryProposalsResponse;
                toProto(message: _58.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryProposalsResponse): _58.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _58.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                }): _58.QueryVoteRequest;
                fromAmino(object: _58.QueryVoteRequestAmino): _58.QueryVoteRequest;
                toAmino(message: _58.QueryVoteRequest): _58.QueryVoteRequestAmino;
                fromAminoMsg(object: _58.QueryVoteRequestAminoMsg): _58.QueryVoteRequest;
                toAminoMsg(message: _58.QueryVoteRequest): _58.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _58.QueryVoteRequestProtoMsg): _58.QueryVoteRequest;
                toProto(message: _58.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _58.QueryVoteRequest): _58.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _58.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long").Long;
                        voter?: string;
                        option?: _57.VoteOption;
                        options?: {
                            option?: _57.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _58.QueryVoteResponse;
                fromAmino(object: _58.QueryVoteResponseAmino): _58.QueryVoteResponse;
                toAmino(message: _58.QueryVoteResponse): _58.QueryVoteResponseAmino;
                fromAminoMsg(object: _58.QueryVoteResponseAminoMsg): _58.QueryVoteResponse;
                toAminoMsg(message: _58.QueryVoteResponse): _58.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _58.QueryVoteResponseProtoMsg): _58.QueryVoteResponse;
                toProto(message: _58.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _58.QueryVoteResponse): _58.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _58.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _58.QueryVotesRequest;
                fromAmino(object: _58.QueryVotesRequestAmino): _58.QueryVotesRequest;
                toAmino(message: _58.QueryVotesRequest): _58.QueryVotesRequestAmino;
                fromAminoMsg(object: _58.QueryVotesRequestAminoMsg): _58.QueryVotesRequest;
                toAminoMsg(message: _58.QueryVotesRequest): _58.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _58.QueryVotesRequestProtoMsg): _58.QueryVotesRequest;
                toProto(message: _58.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _58.QueryVotesRequest): _58.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _58.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long").Long;
                        voter?: string;
                        option?: _57.VoteOption;
                        options?: {
                            option?: _57.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _58.QueryVotesResponse;
                fromAmino(object: _58.QueryVotesResponseAmino): _58.QueryVotesResponse;
                toAmino(message: _58.QueryVotesResponse): _58.QueryVotesResponseAmino;
                fromAminoMsg(object: _58.QueryVotesResponseAminoMsg): _58.QueryVotesResponse;
                toAminoMsg(message: _58.QueryVotesResponse): _58.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _58.QueryVotesResponseProtoMsg): _58.QueryVotesResponse;
                toProto(message: _58.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _58.QueryVotesResponse): _58.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _58.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string;
                }): _58.QueryParamsRequest;
                fromAmino(object: _58.QueryParamsRequestAmino): _58.QueryParamsRequest;
                toAmino(message: _58.QueryParamsRequest): _58.QueryParamsRequestAmino;
                fromAminoMsg(object: _58.QueryParamsRequestAminoMsg): _58.QueryParamsRequest;
                toAminoMsg(message: _58.QueryParamsRequest): _58.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryParamsRequestProtoMsg): _58.QueryParamsRequest;
                toProto(message: _58.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryParamsRequest): _58.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _58.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryParamsResponse;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _58.QueryParamsResponse;
                fromAmino(object: _58.QueryParamsResponseAmino): _58.QueryParamsResponse;
                toAmino(message: _58.QueryParamsResponse): _58.QueryParamsResponseAmino;
                fromAminoMsg(object: _58.QueryParamsResponseAminoMsg): _58.QueryParamsResponse;
                toAminoMsg(message: _58.QueryParamsResponse): _58.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryParamsResponseProtoMsg): _58.QueryParamsResponse;
                toProto(message: _58.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryParamsResponse): _58.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _58.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    depositor?: string;
                }): _58.QueryDepositRequest;
                fromAmino(object: _58.QueryDepositRequestAmino): _58.QueryDepositRequest;
                toAmino(message: _58.QueryDepositRequest): _58.QueryDepositRequestAmino;
                fromAminoMsg(object: _58.QueryDepositRequestAminoMsg): _58.QueryDepositRequest;
                toAminoMsg(message: _58.QueryDepositRequest): _58.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDepositRequestProtoMsg): _58.QueryDepositRequest;
                toProto(message: _58.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDepositRequest): _58.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _58.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: string | number | import("long").Long;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _58.QueryDepositResponse;
                fromAmino(object: _58.QueryDepositResponseAmino): _58.QueryDepositResponse;
                toAmino(message: _58.QueryDepositResponse): _58.QueryDepositResponseAmino;
                fromAminoMsg(object: _58.QueryDepositResponseAminoMsg): _58.QueryDepositResponse;
                toAminoMsg(message: _58.QueryDepositResponse): _58.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDepositResponseProtoMsg): _58.QueryDepositResponse;
                toProto(message: _58.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDepositResponse): _58.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _58.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _58.QueryDepositsRequest;
                fromAmino(object: _58.QueryDepositsRequestAmino): _58.QueryDepositsRequest;
                toAmino(message: _58.QueryDepositsRequest): _58.QueryDepositsRequestAmino;
                fromAminoMsg(object: _58.QueryDepositsRequestAminoMsg): _58.QueryDepositsRequest;
                toAminoMsg(message: _58.QueryDepositsRequest): _58.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryDepositsRequestProtoMsg): _58.QueryDepositsRequest;
                toProto(message: _58.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryDepositsRequest): _58.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _58.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: string | number | import("long").Long;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _58.QueryDepositsResponse;
                fromAmino(object: _58.QueryDepositsResponseAmino): _58.QueryDepositsResponse;
                toAmino(message: _58.QueryDepositsResponse): _58.QueryDepositsResponseAmino;
                fromAminoMsg(object: _58.QueryDepositsResponseAminoMsg): _58.QueryDepositsResponse;
                toAminoMsg(message: _58.QueryDepositsResponse): _58.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryDepositsResponseProtoMsg): _58.QueryDepositsResponse;
                toProto(message: _58.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryDepositsResponse): _58.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _58.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _58.QueryTallyResultRequest;
                fromAmino(object: _58.QueryTallyResultRequestAmino): _58.QueryTallyResultRequest;
                toAmino(message: _58.QueryTallyResultRequest): _58.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _58.QueryTallyResultRequestAminoMsg): _58.QueryTallyResultRequest;
                toAminoMsg(message: _58.QueryTallyResultRequest): _58.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _58.QueryTallyResultRequestProtoMsg): _58.QueryTallyResultRequest;
                toProto(message: _58.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _58.QueryTallyResultRequest): _58.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _58.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _58.QueryTallyResultResponse;
                fromAmino(object: _58.QueryTallyResultResponseAmino): _58.QueryTallyResultResponse;
                toAmino(message: _58.QueryTallyResultResponse): _58.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _58.QueryTallyResultResponseAminoMsg): _58.QueryTallyResultResponse;
                toAminoMsg(message: _58.QueryTallyResultResponse): _58.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _58.QueryTallyResultResponseProtoMsg): _58.QueryTallyResultResponse;
                toProto(message: _58.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _58.QueryTallyResultResponse): _58.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _57.VoteOption;
            voteOptionToJSON(object: _57.VoteOption): string;
            proposalStatusFromJSON(object: any): _57.ProposalStatus;
            proposalStatusToJSON(object: _57.ProposalStatus): string;
            VoteOption: typeof _57.VoteOption;
            VoteOptionSDKType: typeof _57.VoteOption;
            VoteOptionAmino: typeof _57.VoteOption;
            ProposalStatus: typeof _57.ProposalStatus;
            ProposalStatusSDKType: typeof _57.ProposalStatus;
            ProposalStatusAmino: typeof _57.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _57.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.WeightedVoteOption;
                fromPartial(object: {
                    option?: _57.VoteOption;
                    weight?: string;
                }): _57.WeightedVoteOption;
                fromAmino(object: _57.WeightedVoteOptionAmino): _57.WeightedVoteOption;
                toAmino(message: _57.WeightedVoteOption): _57.WeightedVoteOptionAmino;
                fromAminoMsg(object: _57.WeightedVoteOptionAminoMsg): _57.WeightedVoteOption;
                toAminoMsg(message: _57.WeightedVoteOption): _57.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _57.WeightedVoteOptionProtoMsg): _57.WeightedVoteOption;
                toProto(message: _57.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _57.WeightedVoteOption): _57.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                encode(message: _57.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.TextProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _57.TextProposal;
                fromAmino(object: _57.TextProposalAmino): _57.TextProposal;
                toAmino(message: _57.TextProposal): _57.TextProposalAmino;
                fromAminoMsg(object: _57.TextProposalAminoMsg): _57.TextProposal;
                toAminoMsg(message: _57.TextProposal): _57.TextProposalAminoMsg;
                fromProtoMsg(message: _57.TextProposalProtoMsg): _57.TextProposal;
                toProto(message: _57.TextProposal): Uint8Array;
                toProtoMsg(message: _57.TextProposal): _57.TextProposalProtoMsg;
            };
            Deposit: {
                encode(message: _57.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Deposit;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _57.Deposit;
                fromAmino(object: _57.DepositAmino): _57.Deposit;
                toAmino(message: _57.Deposit): _57.DepositAmino;
                fromAminoMsg(object: _57.DepositAminoMsg): _57.Deposit;
                toAminoMsg(message: _57.Deposit): _57.DepositAminoMsg;
                fromProtoMsg(message: _57.DepositProtoMsg): _57.Deposit;
                toProto(message: _57.Deposit): Uint8Array;
                toProtoMsg(message: _57.Deposit): _57.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _57.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Proposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _57.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                }): _57.Proposal;
                fromAmino(object: _57.ProposalAmino): _57.Proposal;
                toAmino(message: _57.Proposal): _57.ProposalAmino;
                fromAminoMsg(object: _57.ProposalAminoMsg): _57.Proposal;
                toAminoMsg(message: _57.Proposal): _57.ProposalAminoMsg;
                fromProtoMsg(message: _57.ProposalProtoMsg): _57.Proposal;
                toProto(message: _57.Proposal): Uint8Array;
                toProtoMsg(message: _57.Proposal): _57.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _57.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.TallyResult;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _57.TallyResult;
                fromAmino(object: _57.TallyResultAmino): _57.TallyResult;
                toAmino(message: _57.TallyResult): _57.TallyResultAmino;
                fromAminoMsg(object: _57.TallyResultAminoMsg): _57.TallyResult;
                toAminoMsg(message: _57.TallyResult): _57.TallyResultAminoMsg;
                fromProtoMsg(message: _57.TallyResultProtoMsg): _57.TallyResult;
                toProto(message: _57.TallyResult): Uint8Array;
                toProtoMsg(message: _57.TallyResult): _57.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _57.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Vote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                    option?: _57.VoteOption;
                    options?: {
                        option?: _57.VoteOption;
                        weight?: string;
                    }[];
                }): _57.Vote;
                fromAmino(object: _57.VoteAmino): _57.Vote;
                toAmino(message: _57.Vote): _57.VoteAmino;
                fromAminoMsg(object: _57.VoteAminoMsg): _57.Vote;
                toAminoMsg(message: _57.Vote): _57.VoteAminoMsg;
                fromProtoMsg(message: _57.VoteProtoMsg): _57.Vote;
                toProto(message: _57.Vote): Uint8Array;
                toProtoMsg(message: _57.Vote): _57.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _57.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                }): _57.DepositParams;
                fromAmino(object: _57.DepositParamsAmino): _57.DepositParams;
                toAmino(message: _57.DepositParams): _57.DepositParamsAmino;
                fromAminoMsg(object: _57.DepositParamsAminoMsg): _57.DepositParams;
                toAminoMsg(message: _57.DepositParams): _57.DepositParamsAminoMsg;
                fromProtoMsg(message: _57.DepositParamsProtoMsg): _57.DepositParams;
                toProto(message: _57.DepositParams): Uint8Array;
                toProtoMsg(message: _57.DepositParams): _57.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _57.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                }): _57.VotingParams;
                fromAmino(object: _57.VotingParamsAmino): _57.VotingParams;
                toAmino(message: _57.VotingParams): _57.VotingParamsAmino;
                fromAminoMsg(object: _57.VotingParamsAminoMsg): _57.VotingParams;
                toAminoMsg(message: _57.VotingParams): _57.VotingParamsAminoMsg;
                fromProtoMsg(message: _57.VotingParamsProtoMsg): _57.VotingParams;
                toProto(message: _57.VotingParams): Uint8Array;
                toProtoMsg(message: _57.VotingParams): _57.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _57.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.TallyParams;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _57.TallyParams;
                fromAmino(object: _57.TallyParamsAmino): _57.TallyParams;
                toAmino(message: _57.TallyParams): _57.TallyParamsAmino;
                fromAminoMsg(object: _57.TallyParamsAminoMsg): _57.TallyParams;
                toAminoMsg(message: _57.TallyParams): _57.TallyParamsAminoMsg;
                fromProtoMsg(message: _57.TallyParamsProtoMsg): _57.TallyParams;
                toProto(message: _57.TallyParams): Uint8Array;
                toProtoMsg(message: _57.TallyParams): _57.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GenesisState;
                fromPartial(object: {
                    startingProposalId?: string | number | import("long").Long;
                    deposits?: {
                        proposalId?: string | number | import("long").Long;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: string | number | import("long").Long;
                        voter?: string;
                        option?: _57.VoteOption;
                        options?: {
                            option?: _57.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: string | number | import("long").Long;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _57.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _56.GenesisState;
                fromAmino(object: _56.GenesisStateAmino): _56.GenesisState;
                toAmino(message: _56.GenesisState): _56.GenesisStateAmino;
                fromAminoMsg(object: _56.GenesisStateAminoMsg): _56.GenesisState;
                toAminoMsg(message: _56.GenesisState): _56.GenesisStateAminoMsg;
                fromProtoMsg(message: _56.GenesisStateProtoMsg): _56.GenesisState;
                toProto(message: _56.GenesisState): Uint8Array;
                toProtoMsg(message: _56.GenesisState): _56.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _232.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _62.QueryGroupInfoRequest): Promise<_62.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _62.QueryGroupPolicyInfoRequest): Promise<_62.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _62.QueryGroupMembersRequest): Promise<_62.QueryGroupMembersResponse>;
                groupsByAdmin(request: _62.QueryGroupsByAdminRequest): Promise<_62.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _62.QueryGroupPoliciesByGroupRequest): Promise<_62.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _62.QueryGroupPoliciesByAdminRequest): Promise<_62.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _62.QueryProposalsByGroupPolicyRequest): Promise<_62.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _62.QueryVoteByProposalVoterRequest): Promise<_62.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _62.QueryVotesByProposalRequest): Promise<_62.QueryVotesByProposalResponse>;
                votesByVoter(request: _62.QueryVotesByVoterRequest): Promise<_62.QueryVotesByVoterResponse>;
                groupsByMember(request: _62.QueryGroupsByMemberRequest): Promise<_62.QueryGroupsByMemberResponse>;
                tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _63.MsgCreateGroup) => _63.MsgCreateGroupAmino;
                    fromAmino: (object: _63.MsgCreateGroupAmino) => _63.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _63.MsgUpdateGroupMembers) => _63.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _63.MsgUpdateGroupMembersAmino) => _63.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _63.MsgUpdateGroupAdmin) => _63.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _63.MsgUpdateGroupAdminAmino) => _63.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _63.MsgUpdateGroupMetadata) => _63.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _63.MsgUpdateGroupMetadataAmino) => _63.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _63.MsgCreateGroupPolicy) => _63.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _63.MsgCreateGroupPolicyAmino) => _63.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _63.MsgCreateGroupWithPolicy) => _63.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _63.MsgCreateGroupWithPolicyAmino) => _63.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _63.MsgUpdateGroupPolicyAdmin) => _63.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _63.MsgUpdateGroupPolicyAdminAmino) => _63.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _63.MsgUpdateGroupPolicyDecisionPolicy) => _63.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _63.MsgUpdateGroupPolicyDecisionPolicyAmino) => _63.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _63.MsgUpdateGroupPolicyMetadata) => _63.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _63.MsgUpdateGroupPolicyMetadataAmino) => _63.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _63.MsgSubmitProposal) => _63.MsgSubmitProposalAmino;
                    fromAmino: (object: _63.MsgSubmitProposalAmino) => _63.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _63.MsgWithdrawProposal) => _63.MsgWithdrawProposalAmino;
                    fromAmino: (object: _63.MsgWithdrawProposalAmino) => _63.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _63.MsgVote) => _63.MsgVoteAmino;
                    fromAmino: (object: _63.MsgVoteAmino) => _63.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _63.MsgExec) => _63.MsgExecAmino;
                    fromAmino: (object: _63.MsgExecAmino) => _63.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _63.MsgLeaveGroup) => _63.MsgLeaveGroupAmino;
                    fromAmino: (object: _63.MsgLeaveGroupAmino) => _63.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _64.VoteOption;
            voteOptionToJSON(object: _64.VoteOption): string;
            proposalStatusFromJSON(object: any): _64.ProposalStatus;
            proposalStatusToJSON(object: _64.ProposalStatus): string;
            proposalResultFromJSON(object: any): _64.ProposalResult;
            proposalResultToJSON(object: _64.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _64.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _64.ProposalExecutorResult): string;
            VoteOption: typeof _64.VoteOption;
            VoteOptionSDKType: typeof _64.VoteOption;
            VoteOptionAmino: typeof _64.VoteOption;
            ProposalStatus: typeof _64.ProposalStatus;
            ProposalStatusSDKType: typeof _64.ProposalStatus;
            ProposalStatusAmino: typeof _64.ProposalStatus;
            ProposalResult: typeof _64.ProposalResult;
            ProposalResultSDKType: typeof _64.ProposalResult;
            ProposalResultAmino: typeof _64.ProposalResult;
            ProposalExecutorResult: typeof _64.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _64.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _64.ProposalExecutorResult;
            Member: {
                encode(message: _64.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Member;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                    metadata?: string;
                    addedAt?: Date;
                }): _64.Member;
                fromAmino(object: _64.MemberAmino): _64.Member;
                toAmino(message: _64.Member): _64.MemberAmino;
                fromAminoMsg(object: _64.MemberAminoMsg): _64.Member;
                toAminoMsg(message: _64.Member): _64.MemberAminoMsg;
                fromProtoMsg(message: _64.MemberProtoMsg): _64.Member;
                toProto(message: _64.Member): Uint8Array;
                toProtoMsg(message: _64.Member): _64.MemberProtoMsg;
            };
            Members: {
                encode(message: _64.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Members;
                fromPartial(object: {
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                }): _64.Members;
                fromAmino(object: _64.MembersAmino): _64.Members;
                toAmino(message: _64.Members): _64.MembersAmino;
                fromAminoMsg(object: _64.MembersAminoMsg): _64.Members;
                toAminoMsg(message: _64.Members): _64.MembersAminoMsg;
                fromProtoMsg(message: _64.MembersProtoMsg): _64.Members;
                toProto(message: _64.Members): Uint8Array;
                toProtoMsg(message: _64.Members): _64.MembersProtoMsg;
            };
            ThresholdDecisionPolicy: {
                encode(message: _64.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ThresholdDecisionPolicy;
                fromPartial(object: {
                    threshold?: string;
                    windows?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        minExecutionPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                }): _64.ThresholdDecisionPolicy;
                fromAmino(object: _64.ThresholdDecisionPolicyAmino): _64.ThresholdDecisionPolicy;
                toAmino(message: _64.ThresholdDecisionPolicy): _64.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _64.ThresholdDecisionPolicyAminoMsg): _64.ThresholdDecisionPolicy;
                toAminoMsg(message: _64.ThresholdDecisionPolicy): _64.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _64.ThresholdDecisionPolicyProtoMsg): _64.ThresholdDecisionPolicy;
                toProto(message: _64.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _64.ThresholdDecisionPolicy): _64.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                encode(message: _64.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.PercentageDecisionPolicy;
                fromPartial(object: {
                    percentage?: string;
                    windows?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        minExecutionPeriod?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                    };
                }): _64.PercentageDecisionPolicy;
                fromAmino(object: _64.PercentageDecisionPolicyAmino): _64.PercentageDecisionPolicy;
                toAmino(message: _64.PercentageDecisionPolicy): _64.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _64.PercentageDecisionPolicyAminoMsg): _64.PercentageDecisionPolicy;
                toAminoMsg(message: _64.PercentageDecisionPolicy): _64.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _64.PercentageDecisionPolicyProtoMsg): _64.PercentageDecisionPolicy;
                toProto(message: _64.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _64.PercentageDecisionPolicy): _64.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                encode(message: _64.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.DecisionPolicyWindows;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    minExecutionPeriod?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                }): _64.DecisionPolicyWindows;
                fromAmino(object: _64.DecisionPolicyWindowsAmino): _64.DecisionPolicyWindows;
                toAmino(message: _64.DecisionPolicyWindows): _64.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _64.DecisionPolicyWindowsAminoMsg): _64.DecisionPolicyWindows;
                toAminoMsg(message: _64.DecisionPolicyWindows): _64.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _64.DecisionPolicyWindowsProtoMsg): _64.DecisionPolicyWindows;
                toProto(message: _64.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _64.DecisionPolicyWindows): _64.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                encode(message: _64.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GroupInfo;
                fromPartial(object: {
                    id?: string | number | import("long").Long;
                    admin?: string;
                    metadata?: string;
                    version?: string | number | import("long").Long;
                    totalWeight?: string;
                    createdAt?: Date;
                }): _64.GroupInfo;
                fromAmino(object: _64.GroupInfoAmino): _64.GroupInfo;
                toAmino(message: _64.GroupInfo): _64.GroupInfoAmino;
                fromAminoMsg(object: _64.GroupInfoAminoMsg): _64.GroupInfo;
                toAminoMsg(message: _64.GroupInfo): _64.GroupInfoAminoMsg;
                fromProtoMsg(message: _64.GroupInfoProtoMsg): _64.GroupInfo;
                toProto(message: _64.GroupInfo): Uint8Array;
                toProtoMsg(message: _64.GroupInfo): _64.GroupInfoProtoMsg;
            };
            GroupMember: {
                encode(message: _64.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GroupMember;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long;
                    member?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    };
                }): _64.GroupMember;
                fromAmino(object: _64.GroupMemberAmino): _64.GroupMember;
                toAmino(message: _64.GroupMember): _64.GroupMemberAmino;
                fromAminoMsg(object: _64.GroupMemberAminoMsg): _64.GroupMember;
                toAminoMsg(message: _64.GroupMember): _64.GroupMemberAminoMsg;
                fromProtoMsg(message: _64.GroupMemberProtoMsg): _64.GroupMember;
                toProto(message: _64.GroupMember): Uint8Array;
                toProtoMsg(message: _64.GroupMember): _64.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                encode(message: _64.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GroupPolicyInfo;
                fromPartial(object: {
                    address?: string;
                    groupId?: string | number | import("long").Long;
                    admin?: string;
                    metadata?: string;
                    version?: string | number | import("long").Long;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    createdAt?: Date;
                }): _64.GroupPolicyInfo;
                fromAmino(object: _64.GroupPolicyInfoAmino): _64.GroupPolicyInfo;
                toAmino(message: _64.GroupPolicyInfo): _64.GroupPolicyInfoAmino;
                fromAminoMsg(object: _64.GroupPolicyInfoAminoMsg): _64.GroupPolicyInfo;
                toAminoMsg(message: _64.GroupPolicyInfo): _64.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _64.GroupPolicyInfoProtoMsg): _64.GroupPolicyInfo;
                toProto(message: _64.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _64.GroupPolicyInfo): _64.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                encode(message: _64.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Proposal;
                fromPartial(object: {
                    id?: string | number | import("long").Long;
                    address?: string;
                    metadata?: string;
                    proposers?: string[];
                    submitTime?: Date;
                    groupVersion?: string | number | import("long").Long;
                    groupPolicyVersion?: string | number | import("long").Long;
                    status?: _64.ProposalStatus;
                    result?: _64.ProposalResult;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    votingPeriodEnd?: Date;
                    executorResult?: _64.ProposalExecutorResult;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _64.Proposal;
                fromAmino(object: _64.ProposalAmino): _64.Proposal;
                toAmino(message: _64.Proposal): _64.ProposalAmino;
                fromAminoMsg(object: _64.ProposalAminoMsg): _64.Proposal;
                toAminoMsg(message: _64.Proposal): _64.ProposalAminoMsg;
                fromProtoMsg(message: _64.ProposalProtoMsg): _64.Proposal;
                toProto(message: _64.Proposal): Uint8Array;
                toProtoMsg(message: _64.Proposal): _64.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _64.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.TallyResult;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _64.TallyResult;
                fromAmino(object: _64.TallyResultAmino): _64.TallyResult;
                toAmino(message: _64.TallyResult): _64.TallyResultAmino;
                fromAminoMsg(object: _64.TallyResultAminoMsg): _64.TallyResult;
                toAminoMsg(message: _64.TallyResult): _64.TallyResultAminoMsg;
                fromProtoMsg(message: _64.TallyResultProtoMsg): _64.TallyResult;
                toProto(message: _64.TallyResult): Uint8Array;
                toProtoMsg(message: _64.TallyResult): _64.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _64.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Vote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                    option?: _64.VoteOption;
                    metadata?: string;
                    submitTime?: Date;
                }): _64.Vote;
                fromAmino(object: _64.VoteAmino): _64.Vote;
                toAmino(message: _64.Vote): _64.VoteAmino;
                fromAminoMsg(object: _64.VoteAminoMsg): _64.Vote;
                toAminoMsg(message: _64.Vote): _64.VoteAminoMsg;
                fromProtoMsg(message: _64.VoteProtoMsg): _64.Vote;
                toProto(message: _64.Vote): Uint8Array;
                toProtoMsg(message: _64.Vote): _64.VoteProtoMsg;
            };
            execFromJSON(object: any): _63.Exec;
            execToJSON(object: _63.Exec): string;
            Exec: typeof _63.Exec;
            ExecSDKType: typeof _63.Exec;
            ExecAmino: typeof _63.Exec;
            MsgCreateGroup: {
                encode(message: _63.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroup;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                    metadata?: string;
                }): _63.MsgCreateGroup;
                fromAmino(object: _63.MsgCreateGroupAmino): _63.MsgCreateGroup;
                toAmino(message: _63.MsgCreateGroup): _63.MsgCreateGroupAmino;
                fromAminoMsg(object: _63.MsgCreateGroupAminoMsg): _63.MsgCreateGroup;
                toAminoMsg(message: _63.MsgCreateGroup): _63.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _63.MsgCreateGroupProtoMsg): _63.MsgCreateGroup;
                toProto(message: _63.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _63.MsgCreateGroup): _63.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                encode(message: _63.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupResponse;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long;
                }): _63.MsgCreateGroupResponse;
                fromAmino(object: _63.MsgCreateGroupResponseAmino): _63.MsgCreateGroupResponse;
                toAmino(message: _63.MsgCreateGroupResponse): _63.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _63.MsgCreateGroupResponseAminoMsg): _63.MsgCreateGroupResponse;
                toAminoMsg(message: _63.MsgCreateGroupResponse): _63.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _63.MsgCreateGroupResponseProtoMsg): _63.MsgCreateGroupResponse;
                toProto(message: _63.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _63.MsgCreateGroupResponse): _63.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                encode(message: _63.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupMembers;
                fromPartial(object: {
                    admin?: string;
                    groupId?: string | number | import("long").Long;
                    memberUpdates?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                }): _63.MsgUpdateGroupMembers;
                fromAmino(object: _63.MsgUpdateGroupMembersAmino): _63.MsgUpdateGroupMembers;
                toAmino(message: _63.MsgUpdateGroupMembers): _63.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupMembersAminoMsg): _63.MsgUpdateGroupMembers;
                toAminoMsg(message: _63.MsgUpdateGroupMembers): _63.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupMembersProtoMsg): _63.MsgUpdateGroupMembers;
                toProto(message: _63.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupMembers): _63.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _63.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupMembersResponse;
                fromPartial(_: {}): _63.MsgUpdateGroupMembersResponse;
                fromAmino(_: _63.MsgUpdateGroupMembersResponseAmino): _63.MsgUpdateGroupMembersResponse;
                toAmino(_: _63.MsgUpdateGroupMembersResponse): _63.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupMembersResponseAminoMsg): _63.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _63.MsgUpdateGroupMembersResponse): _63.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupMembersResponseProtoMsg): _63.MsgUpdateGroupMembersResponse;
                toProto(message: _63.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupMembersResponse): _63.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _63.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupAdmin;
                fromPartial(object: {
                    admin?: string;
                    groupId?: string | number | import("long").Long;
                    newAdmin?: string;
                }): _63.MsgUpdateGroupAdmin;
                fromAmino(object: _63.MsgUpdateGroupAdminAmino): _63.MsgUpdateGroupAdmin;
                toAmino(message: _63.MsgUpdateGroupAdmin): _63.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupAdminAminoMsg): _63.MsgUpdateGroupAdmin;
                toAminoMsg(message: _63.MsgUpdateGroupAdmin): _63.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupAdminProtoMsg): _63.MsgUpdateGroupAdmin;
                toProto(message: _63.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupAdmin): _63.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _63.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupAdminResponse;
                fromPartial(_: {}): _63.MsgUpdateGroupAdminResponse;
                fromAmino(_: _63.MsgUpdateGroupAdminResponseAmino): _63.MsgUpdateGroupAdminResponse;
                toAmino(_: _63.MsgUpdateGroupAdminResponse): _63.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupAdminResponseAminoMsg): _63.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _63.MsgUpdateGroupAdminResponse): _63.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupAdminResponseProtoMsg): _63.MsgUpdateGroupAdminResponse;
                toProto(message: _63.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupAdminResponse): _63.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _63.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupMetadata;
                fromPartial(object: {
                    admin?: string;
                    groupId?: string | number | import("long").Long;
                    metadata?: string;
                }): _63.MsgUpdateGroupMetadata;
                fromAmino(object: _63.MsgUpdateGroupMetadataAmino): _63.MsgUpdateGroupMetadata;
                toAmino(message: _63.MsgUpdateGroupMetadata): _63.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupMetadataAminoMsg): _63.MsgUpdateGroupMetadata;
                toAminoMsg(message: _63.MsgUpdateGroupMetadata): _63.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupMetadataProtoMsg): _63.MsgUpdateGroupMetadata;
                toProto(message: _63.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupMetadata): _63.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _63.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupMetadataResponse;
                fromPartial(_: {}): _63.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _63.MsgUpdateGroupMetadataResponseAmino): _63.MsgUpdateGroupMetadataResponse;
                toAmino(_: _63.MsgUpdateGroupMetadataResponse): _63.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupMetadataResponseAminoMsg): _63.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _63.MsgUpdateGroupMetadataResponse): _63.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupMetadataResponseProtoMsg): _63.MsgUpdateGroupMetadataResponse;
                toProto(message: _63.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupMetadataResponse): _63.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                encode(message: _63.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupPolicy;
                fromPartial(object: {
                    admin?: string;
                    groupId?: string | number | import("long").Long;
                    metadata?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _63.MsgCreateGroupPolicy;
                fromAmino(object: _63.MsgCreateGroupPolicyAmino): _63.MsgCreateGroupPolicy;
                toAmino(message: _63.MsgCreateGroupPolicy): _63.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _63.MsgCreateGroupPolicyAminoMsg): _63.MsgCreateGroupPolicy;
                toAminoMsg(message: _63.MsgCreateGroupPolicy): _63.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _63.MsgCreateGroupPolicyProtoMsg): _63.MsgCreateGroupPolicy;
                toProto(message: _63.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _63.MsgCreateGroupPolicy): _63.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _63.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupPolicyResponse;
                fromPartial(object: {
                    address?: string;
                }): _63.MsgCreateGroupPolicyResponse;
                fromAmino(object: _63.MsgCreateGroupPolicyResponseAmino): _63.MsgCreateGroupPolicyResponse;
                toAmino(message: _63.MsgCreateGroupPolicyResponse): _63.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _63.MsgCreateGroupPolicyResponseAminoMsg): _63.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _63.MsgCreateGroupPolicyResponse): _63.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _63.MsgCreateGroupPolicyResponseProtoMsg): _63.MsgCreateGroupPolicyResponse;
                toProto(message: _63.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _63.MsgCreateGroupPolicyResponse): _63.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _63.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    newAdmin?: string;
                }): _63.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _63.MsgUpdateGroupPolicyAdminAmino): _63.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _63.MsgUpdateGroupPolicyAdmin): _63.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupPolicyAdminAminoMsg): _63.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _63.MsgUpdateGroupPolicyAdmin): _63.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupPolicyAdminProtoMsg): _63.MsgUpdateGroupPolicyAdmin;
                toProto(message: _63.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupPolicyAdmin): _63.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _63.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupWithPolicy;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                    groupMetadata?: string;
                    groupPolicyMetadata?: string;
                    groupPolicyAsAdmin?: boolean;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _63.MsgCreateGroupWithPolicy;
                fromAmino(object: _63.MsgCreateGroupWithPolicyAmino): _63.MsgCreateGroupWithPolicy;
                toAmino(message: _63.MsgCreateGroupWithPolicy): _63.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _63.MsgCreateGroupWithPolicyAminoMsg): _63.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _63.MsgCreateGroupWithPolicy): _63.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _63.MsgCreateGroupWithPolicyProtoMsg): _63.MsgCreateGroupWithPolicy;
                toProto(message: _63.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _63.MsgCreateGroupWithPolicy): _63.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _63.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long;
                    groupPolicyAddress?: string;
                }): _63.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _63.MsgCreateGroupWithPolicyResponseAmino): _63.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _63.MsgCreateGroupWithPolicyResponse): _63.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _63.MsgCreateGroupWithPolicyResponseAminoMsg): _63.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _63.MsgCreateGroupWithPolicyResponse): _63.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _63.MsgCreateGroupWithPolicyResponseProtoMsg): _63.MsgCreateGroupWithPolicyResponse;
                toProto(message: _63.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _63.MsgCreateGroupWithPolicyResponse): _63.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _63.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: {}): _63.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _63.MsgUpdateGroupPolicyAdminResponseAmino): _63.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _63.MsgUpdateGroupPolicyAdminResponse): _63.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupPolicyAdminResponseAminoMsg): _63.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _63.MsgUpdateGroupPolicyAdminResponse): _63.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupPolicyAdminResponseProtoMsg): _63.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _63.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupPolicyAdminResponse): _63.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _63.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _63.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _63.MsgUpdateGroupPolicyDecisionPolicyAmino): _63.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _63.MsgUpdateGroupPolicyDecisionPolicy): _63.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _63.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _63.MsgUpdateGroupPolicyDecisionPolicy): _63.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _63.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _63.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupPolicyDecisionPolicy): _63.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _63.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: {}): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _63.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _63.MsgUpdateGroupPolicyDecisionPolicyResponse): _63.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _63.MsgUpdateGroupPolicyDecisionPolicyResponse): _63.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _63.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupPolicyDecisionPolicyResponse): _63.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _63.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    metadata?: string;
                }): _63.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _63.MsgUpdateGroupPolicyMetadataAmino): _63.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _63.MsgUpdateGroupPolicyMetadata): _63.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupPolicyMetadataAminoMsg): _63.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _63.MsgUpdateGroupPolicyMetadata): _63.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupPolicyMetadataProtoMsg): _63.MsgUpdateGroupPolicyMetadata;
                toProto(message: _63.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupPolicyMetadata): _63.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _63.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: {}): _63.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _63.MsgUpdateGroupPolicyMetadataResponseAmino): _63.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _63.MsgUpdateGroupPolicyMetadataResponse): _63.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _63.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _63.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _63.MsgUpdateGroupPolicyMetadataResponse): _63.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _63.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _63.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateGroupPolicyMetadataResponse): _63.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                encode(message: _63.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgSubmitProposal;
                fromPartial(object: {
                    address?: string;
                    proposers?: string[];
                    metadata?: string;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    exec?: _63.Exec;
                }): _63.MsgSubmitProposal;
                fromAmino(object: _63.MsgSubmitProposalAmino): _63.MsgSubmitProposal;
                toAmino(message: _63.MsgSubmitProposal): _63.MsgSubmitProposalAmino;
                fromAminoMsg(object: _63.MsgSubmitProposalAminoMsg): _63.MsgSubmitProposal;
                toAminoMsg(message: _63.MsgSubmitProposal): _63.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _63.MsgSubmitProposalProtoMsg): _63.MsgSubmitProposal;
                toProto(message: _63.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _63.MsgSubmitProposal): _63.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _63.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _63.MsgSubmitProposalResponse;
                fromAmino(object: _63.MsgSubmitProposalResponseAmino): _63.MsgSubmitProposalResponse;
                toAmino(message: _63.MsgSubmitProposalResponse): _63.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _63.MsgSubmitProposalResponseAminoMsg): _63.MsgSubmitProposalResponse;
                toAminoMsg(message: _63.MsgSubmitProposalResponse): _63.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _63.MsgSubmitProposalResponseProtoMsg): _63.MsgSubmitProposalResponse;
                toProto(message: _63.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _63.MsgSubmitProposalResponse): _63.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                encode(message: _63.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgWithdrawProposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    address?: string;
                }): _63.MsgWithdrawProposal;
                fromAmino(object: _63.MsgWithdrawProposalAmino): _63.MsgWithdrawProposal;
                toAmino(message: _63.MsgWithdrawProposal): _63.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _63.MsgWithdrawProposalAminoMsg): _63.MsgWithdrawProposal;
                toAminoMsg(message: _63.MsgWithdrawProposal): _63.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _63.MsgWithdrawProposalProtoMsg): _63.MsgWithdrawProposal;
                toProto(message: _63.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _63.MsgWithdrawProposal): _63.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _63.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgWithdrawProposalResponse;
                fromPartial(_: {}): _63.MsgWithdrawProposalResponse;
                fromAmino(_: _63.MsgWithdrawProposalResponseAmino): _63.MsgWithdrawProposalResponse;
                toAmino(_: _63.MsgWithdrawProposalResponse): _63.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _63.MsgWithdrawProposalResponseAminoMsg): _63.MsgWithdrawProposalResponse;
                toAminoMsg(message: _63.MsgWithdrawProposalResponse): _63.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _63.MsgWithdrawProposalResponseProtoMsg): _63.MsgWithdrawProposalResponse;
                toProto(message: _63.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _63.MsgWithdrawProposalResponse): _63.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _63.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                    option?: _64.VoteOption;
                    metadata?: string;
                    exec?: _63.Exec;
                }): _63.MsgVote;
                fromAmino(object: _63.MsgVoteAmino): _63.MsgVote;
                toAmino(message: _63.MsgVote): _63.MsgVoteAmino;
                fromAminoMsg(object: _63.MsgVoteAminoMsg): _63.MsgVote;
                toAminoMsg(message: _63.MsgVote): _63.MsgVoteAminoMsg;
                fromProtoMsg(message: _63.MsgVoteProtoMsg): _63.MsgVote;
                toProto(message: _63.MsgVote): Uint8Array;
                toProtoMsg(message: _63.MsgVote): _63.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _63.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgVoteResponse;
                fromPartial(_: {}): _63.MsgVoteResponse;
                fromAmino(_: _63.MsgVoteResponseAmino): _63.MsgVoteResponse;
                toAmino(_: _63.MsgVoteResponse): _63.MsgVoteResponseAmino;
                fromAminoMsg(object: _63.MsgVoteResponseAminoMsg): _63.MsgVoteResponse;
                toAminoMsg(message: _63.MsgVoteResponse): _63.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _63.MsgVoteResponseProtoMsg): _63.MsgVoteResponse;
                toProto(message: _63.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _63.MsgVoteResponse): _63.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _63.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgExec;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    signer?: string;
                }): _63.MsgExec;
                fromAmino(object: _63.MsgExecAmino): _63.MsgExec;
                toAmino(message: _63.MsgExec): _63.MsgExecAmino;
                fromAminoMsg(object: _63.MsgExecAminoMsg): _63.MsgExec;
                toAminoMsg(message: _63.MsgExec): _63.MsgExecAminoMsg;
                fromProtoMsg(message: _63.MsgExecProtoMsg): _63.MsgExec;
                toProto(message: _63.MsgExec): Uint8Array;
                toProtoMsg(message: _63.MsgExec): _63.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                encode(_: _63.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgExecResponse;
                fromPartial(_: {}): _63.MsgExecResponse;
                fromAmino(_: _63.MsgExecResponseAmino): _63.MsgExecResponse;
                toAmino(_: _63.MsgExecResponse): _63.MsgExecResponseAmino;
                fromAminoMsg(object: _63.MsgExecResponseAminoMsg): _63.MsgExecResponse;
                toAminoMsg(message: _63.MsgExecResponse): _63.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _63.MsgExecResponseProtoMsg): _63.MsgExecResponse;
                toProto(message: _63.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _63.MsgExecResponse): _63.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                encode(message: _63.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgLeaveGroup;
                fromPartial(object: {
                    address?: string;
                    groupId?: string | number | import("long").Long;
                }): _63.MsgLeaveGroup;
                fromAmino(object: _63.MsgLeaveGroupAmino): _63.MsgLeaveGroup;
                toAmino(message: _63.MsgLeaveGroup): _63.MsgLeaveGroupAmino;
                fromAminoMsg(object: _63.MsgLeaveGroupAminoMsg): _63.MsgLeaveGroup;
                toAminoMsg(message: _63.MsgLeaveGroup): _63.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _63.MsgLeaveGroupProtoMsg): _63.MsgLeaveGroup;
                toProto(message: _63.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _63.MsgLeaveGroup): _63.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                encode(_: _63.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgLeaveGroupResponse;
                fromPartial(_: {}): _63.MsgLeaveGroupResponse;
                fromAmino(_: _63.MsgLeaveGroupResponseAmino): _63.MsgLeaveGroupResponse;
                toAmino(_: _63.MsgLeaveGroupResponse): _63.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _63.MsgLeaveGroupResponseAminoMsg): _63.MsgLeaveGroupResponse;
                toAminoMsg(message: _63.MsgLeaveGroupResponse): _63.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _63.MsgLeaveGroupResponseProtoMsg): _63.MsgLeaveGroupResponse;
                toProto(message: _63.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _63.MsgLeaveGroupResponse): _63.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                encode(message: _62.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupInfoRequest;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long;
                }): _62.QueryGroupInfoRequest;
                fromAmino(object: _62.QueryGroupInfoRequestAmino): _62.QueryGroupInfoRequest;
                toAmino(message: _62.QueryGroupInfoRequest): _62.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _62.QueryGroupInfoRequestAminoMsg): _62.QueryGroupInfoRequest;
                toAminoMsg(message: _62.QueryGroupInfoRequest): _62.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupInfoRequestProtoMsg): _62.QueryGroupInfoRequest;
                toProto(message: _62.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupInfoRequest): _62.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                encode(message: _62.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupInfoResponse;
                fromPartial(object: {
                    info?: {
                        id?: string | number | import("long").Long;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").Long;
                        totalWeight?: string;
                        createdAt?: Date;
                    };
                }): _62.QueryGroupInfoResponse;
                fromAmino(object: _62.QueryGroupInfoResponseAmino): _62.QueryGroupInfoResponse;
                toAmino(message: _62.QueryGroupInfoResponse): _62.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _62.QueryGroupInfoResponseAminoMsg): _62.QueryGroupInfoResponse;
                toAminoMsg(message: _62.QueryGroupInfoResponse): _62.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupInfoResponseProtoMsg): _62.QueryGroupInfoResponse;
                toProto(message: _62.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupInfoResponse): _62.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _62.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPolicyInfoRequest;
                fromPartial(object: {
                    address?: string;
                }): _62.QueryGroupPolicyInfoRequest;
                fromAmino(object: _62.QueryGroupPolicyInfoRequestAmino): _62.QueryGroupPolicyInfoRequest;
                toAmino(message: _62.QueryGroupPolicyInfoRequest): _62.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _62.QueryGroupPolicyInfoRequestAminoMsg): _62.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _62.QueryGroupPolicyInfoRequest): _62.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupPolicyInfoRequestProtoMsg): _62.QueryGroupPolicyInfoRequest;
                toProto(message: _62.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupPolicyInfoRequest): _62.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _62.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPolicyInfoResponse;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        groupId?: string | number | import("long").Long;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").Long;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    };
                }): _62.QueryGroupPolicyInfoResponse;
                fromAmino(object: _62.QueryGroupPolicyInfoResponseAmino): _62.QueryGroupPolicyInfoResponse;
                toAmino(message: _62.QueryGroupPolicyInfoResponse): _62.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _62.QueryGroupPolicyInfoResponseAminoMsg): _62.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _62.QueryGroupPolicyInfoResponse): _62.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupPolicyInfoResponseProtoMsg): _62.QueryGroupPolicyInfoResponse;
                toProto(message: _62.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupPolicyInfoResponse): _62.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                encode(message: _62.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupMembersRequest;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryGroupMembersRequest;
                fromAmino(object: _62.QueryGroupMembersRequestAmino): _62.QueryGroupMembersRequest;
                toAmino(message: _62.QueryGroupMembersRequest): _62.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _62.QueryGroupMembersRequestAminoMsg): _62.QueryGroupMembersRequest;
                toAminoMsg(message: _62.QueryGroupMembersRequest): _62.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupMembersRequestProtoMsg): _62.QueryGroupMembersRequest;
                toProto(message: _62.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupMembersRequest): _62.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                encode(message: _62.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupMembersResponse;
                fromPartial(object: {
                    members?: {
                        groupId?: string | number | import("long").Long;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: Date;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _62.QueryGroupMembersResponse;
                fromAmino(object: _62.QueryGroupMembersResponseAmino): _62.QueryGroupMembersResponse;
                toAmino(message: _62.QueryGroupMembersResponse): _62.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _62.QueryGroupMembersResponseAminoMsg): _62.QueryGroupMembersResponse;
                toAminoMsg(message: _62.QueryGroupMembersResponse): _62.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupMembersResponseProtoMsg): _62.QueryGroupMembersResponse;
                toProto(message: _62.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupMembersResponse): _62.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _62.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupsByAdminRequest;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryGroupsByAdminRequest;
                fromAmino(object: _62.QueryGroupsByAdminRequestAmino): _62.QueryGroupsByAdminRequest;
                toAmino(message: _62.QueryGroupsByAdminRequest): _62.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _62.QueryGroupsByAdminRequestAminoMsg): _62.QueryGroupsByAdminRequest;
                toAminoMsg(message: _62.QueryGroupsByAdminRequest): _62.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupsByAdminRequestProtoMsg): _62.QueryGroupsByAdminRequest;
                toProto(message: _62.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupsByAdminRequest): _62.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _62.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupsByAdminResponse;
                fromPartial(object: {
                    groups?: {
                        id?: string | number | import("long").Long;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").Long;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _62.QueryGroupsByAdminResponse;
                fromAmino(object: _62.QueryGroupsByAdminResponseAmino): _62.QueryGroupsByAdminResponse;
                toAmino(message: _62.QueryGroupsByAdminResponse): _62.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _62.QueryGroupsByAdminResponseAminoMsg): _62.QueryGroupsByAdminResponse;
                toAminoMsg(message: _62.QueryGroupsByAdminResponse): _62.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupsByAdminResponseProtoMsg): _62.QueryGroupsByAdminResponse;
                toProto(message: _62.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupsByAdminResponse): _62.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _62.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _62.QueryGroupPoliciesByGroupRequestAmino): _62.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _62.QueryGroupPoliciesByGroupRequest): _62.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _62.QueryGroupPoliciesByGroupRequestAminoMsg): _62.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _62.QueryGroupPoliciesByGroupRequest): _62.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupPoliciesByGroupRequestProtoMsg): _62.QueryGroupPoliciesByGroupRequest;
                toProto(message: _62.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupPoliciesByGroupRequest): _62.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _62.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: string | number | import("long").Long;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").Long;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _62.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _62.QueryGroupPoliciesByGroupResponseAmino): _62.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _62.QueryGroupPoliciesByGroupResponse): _62.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _62.QueryGroupPoliciesByGroupResponseAminoMsg): _62.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _62.QueryGroupPoliciesByGroupResponse): _62.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupPoliciesByGroupResponseProtoMsg): _62.QueryGroupPoliciesByGroupResponse;
                toProto(message: _62.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupPoliciesByGroupResponse): _62.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _62.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _62.QueryGroupPoliciesByAdminRequestAmino): _62.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _62.QueryGroupPoliciesByAdminRequest): _62.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _62.QueryGroupPoliciesByAdminRequestAminoMsg): _62.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _62.QueryGroupPoliciesByAdminRequest): _62.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupPoliciesByAdminRequestProtoMsg): _62.QueryGroupPoliciesByAdminRequest;
                toProto(message: _62.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupPoliciesByAdminRequest): _62.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _62.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: string | number | import("long").Long;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").Long;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _62.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _62.QueryGroupPoliciesByAdminResponseAmino): _62.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _62.QueryGroupPoliciesByAdminResponse): _62.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _62.QueryGroupPoliciesByAdminResponseAminoMsg): _62.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _62.QueryGroupPoliciesByAdminResponse): _62.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupPoliciesByAdminResponseProtoMsg): _62.QueryGroupPoliciesByAdminResponse;
                toProto(message: _62.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupPoliciesByAdminResponse): _62.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                encode(message: _62.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _62.QueryProposalRequest;
                fromAmino(object: _62.QueryProposalRequestAmino): _62.QueryProposalRequest;
                toAmino(message: _62.QueryProposalRequest): _62.QueryProposalRequestAmino;
                fromAminoMsg(object: _62.QueryProposalRequestAminoMsg): _62.QueryProposalRequest;
                toAminoMsg(message: _62.QueryProposalRequest): _62.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _62.QueryProposalRequestProtoMsg): _62.QueryProposalRequest;
                toProto(message: _62.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _62.QueryProposalRequest): _62.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _62.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        id?: string | number | import("long").Long;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: string | number | import("long").Long;
                        groupPolicyVersion?: string | number | import("long").Long;
                        status?: _64.ProposalStatus;
                        result?: _64.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _64.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _62.QueryProposalResponse;
                fromAmino(object: _62.QueryProposalResponseAmino): _62.QueryProposalResponse;
                toAmino(message: _62.QueryProposalResponse): _62.QueryProposalResponseAmino;
                fromAminoMsg(object: _62.QueryProposalResponseAminoMsg): _62.QueryProposalResponse;
                toAminoMsg(message: _62.QueryProposalResponse): _62.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _62.QueryProposalResponseProtoMsg): _62.QueryProposalResponse;
                toProto(message: _62.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _62.QueryProposalResponse): _62.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _62.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _62.QueryProposalsByGroupPolicyRequestAmino): _62.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _62.QueryProposalsByGroupPolicyRequest): _62.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _62.QueryProposalsByGroupPolicyRequestAminoMsg): _62.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _62.QueryProposalsByGroupPolicyRequest): _62.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _62.QueryProposalsByGroupPolicyRequestProtoMsg): _62.QueryProposalsByGroupPolicyRequest;
                toProto(message: _62.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _62.QueryProposalsByGroupPolicyRequest): _62.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _62.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: {
                    proposals?: {
                        id?: string | number | import("long").Long;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: string | number | import("long").Long;
                        groupPolicyVersion?: string | number | import("long").Long;
                        status?: _64.ProposalStatus;
                        result?: _64.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _64.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _62.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _62.QueryProposalsByGroupPolicyResponseAmino): _62.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _62.QueryProposalsByGroupPolicyResponse): _62.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _62.QueryProposalsByGroupPolicyResponseAminoMsg): _62.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _62.QueryProposalsByGroupPolicyResponse): _62.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _62.QueryProposalsByGroupPolicyResponseProtoMsg): _62.QueryProposalsByGroupPolicyResponse;
                toProto(message: _62.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _62.QueryProposalsByGroupPolicyResponse): _62.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _62.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVoteByProposalVoterRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    voter?: string;
                }): _62.QueryVoteByProposalVoterRequest;
                fromAmino(object: _62.QueryVoteByProposalVoterRequestAmino): _62.QueryVoteByProposalVoterRequest;
                toAmino(message: _62.QueryVoteByProposalVoterRequest): _62.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _62.QueryVoteByProposalVoterRequestAminoMsg): _62.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _62.QueryVoteByProposalVoterRequest): _62.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _62.QueryVoteByProposalVoterRequestProtoMsg): _62.QueryVoteByProposalVoterRequest;
                toProto(message: _62.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _62.QueryVoteByProposalVoterRequest): _62.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _62.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVoteByProposalVoterResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long").Long;
                        voter?: string;
                        option?: _64.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    };
                }): _62.QueryVoteByProposalVoterResponse;
                fromAmino(object: _62.QueryVoteByProposalVoterResponseAmino): _62.QueryVoteByProposalVoterResponse;
                toAmino(message: _62.QueryVoteByProposalVoterResponse): _62.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _62.QueryVoteByProposalVoterResponseAminoMsg): _62.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _62.QueryVoteByProposalVoterResponse): _62.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _62.QueryVoteByProposalVoterResponseProtoMsg): _62.QueryVoteByProposalVoterResponse;
                toProto(message: _62.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _62.QueryVoteByProposalVoterResponse): _62.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                encode(message: _62.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVotesByProposalRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryVotesByProposalRequest;
                fromAmino(object: _62.QueryVotesByProposalRequestAmino): _62.QueryVotesByProposalRequest;
                toAmino(message: _62.QueryVotesByProposalRequest): _62.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _62.QueryVotesByProposalRequestAminoMsg): _62.QueryVotesByProposalRequest;
                toAminoMsg(message: _62.QueryVotesByProposalRequest): _62.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _62.QueryVotesByProposalRequestProtoMsg): _62.QueryVotesByProposalRequest;
                toProto(message: _62.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _62.QueryVotesByProposalRequest): _62.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                encode(message: _62.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVotesByProposalResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long").Long;
                        voter?: string;
                        option?: _64.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _62.QueryVotesByProposalResponse;
                fromAmino(object: _62.QueryVotesByProposalResponseAmino): _62.QueryVotesByProposalResponse;
                toAmino(message: _62.QueryVotesByProposalResponse): _62.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _62.QueryVotesByProposalResponseAminoMsg): _62.QueryVotesByProposalResponse;
                toAminoMsg(message: _62.QueryVotesByProposalResponse): _62.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _62.QueryVotesByProposalResponseProtoMsg): _62.QueryVotesByProposalResponse;
                toProto(message: _62.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _62.QueryVotesByProposalResponse): _62.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                encode(message: _62.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVotesByVoterRequest;
                fromPartial(object: {
                    voter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryVotesByVoterRequest;
                fromAmino(object: _62.QueryVotesByVoterRequestAmino): _62.QueryVotesByVoterRequest;
                toAmino(message: _62.QueryVotesByVoterRequest): _62.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _62.QueryVotesByVoterRequestAminoMsg): _62.QueryVotesByVoterRequest;
                toAminoMsg(message: _62.QueryVotesByVoterRequest): _62.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _62.QueryVotesByVoterRequestProtoMsg): _62.QueryVotesByVoterRequest;
                toProto(message: _62.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _62.QueryVotesByVoterRequest): _62.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                encode(message: _62.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryVotesByVoterResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long").Long;
                        voter?: string;
                        option?: _64.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _62.QueryVotesByVoterResponse;
                fromAmino(object: _62.QueryVotesByVoterResponseAmino): _62.QueryVotesByVoterResponse;
                toAmino(message: _62.QueryVotesByVoterResponse): _62.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _62.QueryVotesByVoterResponseAminoMsg): _62.QueryVotesByVoterResponse;
                toAminoMsg(message: _62.QueryVotesByVoterResponse): _62.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _62.QueryVotesByVoterResponseProtoMsg): _62.QueryVotesByVoterResponse;
                toProto(message: _62.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _62.QueryVotesByVoterResponse): _62.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _62.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupsByMemberRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _62.QueryGroupsByMemberRequest;
                fromAmino(object: _62.QueryGroupsByMemberRequestAmino): _62.QueryGroupsByMemberRequest;
                toAmino(message: _62.QueryGroupsByMemberRequest): _62.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _62.QueryGroupsByMemberRequestAminoMsg): _62.QueryGroupsByMemberRequest;
                toAminoMsg(message: _62.QueryGroupsByMemberRequest): _62.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _62.QueryGroupsByMemberRequestProtoMsg): _62.QueryGroupsByMemberRequest;
                toProto(message: _62.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _62.QueryGroupsByMemberRequest): _62.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _62.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryGroupsByMemberResponse;
                fromPartial(object: {
                    groups?: {
                        id?: string | number | import("long").Long;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").Long;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _62.QueryGroupsByMemberResponse;
                fromAmino(object: _62.QueryGroupsByMemberResponseAmino): _62.QueryGroupsByMemberResponse;
                toAmino(message: _62.QueryGroupsByMemberResponse): _62.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _62.QueryGroupsByMemberResponseAminoMsg): _62.QueryGroupsByMemberResponse;
                toAminoMsg(message: _62.QueryGroupsByMemberResponse): _62.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _62.QueryGroupsByMemberResponseProtoMsg): _62.QueryGroupsByMemberResponse;
                toProto(message: _62.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _62.QueryGroupsByMemberResponse): _62.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _62.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _62.QueryTallyResultRequest;
                fromAmino(object: _62.QueryTallyResultRequestAmino): _62.QueryTallyResultRequest;
                toAmino(message: _62.QueryTallyResultRequest): _62.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _62.QueryTallyResultRequestAminoMsg): _62.QueryTallyResultRequest;
                toAminoMsg(message: _62.QueryTallyResultRequest): _62.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _62.QueryTallyResultRequestProtoMsg): _62.QueryTallyResultRequest;
                toProto(message: _62.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _62.QueryTallyResultRequest): _62.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _62.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _62.QueryTallyResultResponse;
                fromAmino(object: _62.QueryTallyResultResponseAmino): _62.QueryTallyResultResponse;
                toAmino(message: _62.QueryTallyResultResponse): _62.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _62.QueryTallyResultResponseAminoMsg): _62.QueryTallyResultResponse;
                toAminoMsg(message: _62.QueryTallyResultResponse): _62.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _62.QueryTallyResultResponseProtoMsg): _62.QueryTallyResultResponse;
                toProto(message: _62.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _62.QueryTallyResultResponse): _62.QueryTallyResultResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GenesisState;
                fromPartial(object: {
                    groupSeq?: string | number | import("long").Long;
                    groups?: {
                        id?: string | number | import("long").Long;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").Long;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    groupMembers?: {
                        groupId?: string | number | import("long").Long;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: Date;
                        };
                    }[];
                    groupPolicySeq?: string | number | import("long").Long;
                    groupPolicies?: {
                        address?: string;
                        groupId?: string | number | import("long").Long;
                        admin?: string;
                        metadata?: string;
                        version?: string | number | import("long").Long;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    proposalSeq?: string | number | import("long").Long;
                    proposals?: {
                        id?: string | number | import("long").Long;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: string | number | import("long").Long;
                        groupPolicyVersion?: string | number | import("long").Long;
                        status?: _64.ProposalStatus;
                        result?: _64.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _64.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: string | number | import("long").Long;
                        voter?: string;
                        option?: _64.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                }): _61.GenesisState;
                fromAmino(object: _61.GenesisStateAmino): _61.GenesisState;
                toAmino(message: _61.GenesisState): _61.GenesisStateAmino;
                fromAminoMsg(object: _61.GenesisStateAminoMsg): _61.GenesisState;
                toAminoMsg(message: _61.GenesisState): _61.GenesisStateAminoMsg;
                fromProtoMsg(message: _61.GenesisStateProtoMsg): _61.GenesisState;
                toProto(message: _61.GenesisState): Uint8Array;
                toProtoMsg(message: _61.GenesisState): _61.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                encode(message: _60.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventCreateGroup;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long;
                }): _60.EventCreateGroup;
                fromAmino(object: _60.EventCreateGroupAmino): _60.EventCreateGroup;
                toAmino(message: _60.EventCreateGroup): _60.EventCreateGroupAmino;
                fromAminoMsg(object: _60.EventCreateGroupAminoMsg): _60.EventCreateGroup;
                toAminoMsg(message: _60.EventCreateGroup): _60.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _60.EventCreateGroupProtoMsg): _60.EventCreateGroup;
                toProto(message: _60.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _60.EventCreateGroup): _60.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                encode(message: _60.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventUpdateGroup;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long;
                }): _60.EventUpdateGroup;
                fromAmino(object: _60.EventUpdateGroupAmino): _60.EventUpdateGroup;
                toAmino(message: _60.EventUpdateGroup): _60.EventUpdateGroupAmino;
                fromAminoMsg(object: _60.EventUpdateGroupAminoMsg): _60.EventUpdateGroup;
                toAminoMsg(message: _60.EventUpdateGroup): _60.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _60.EventUpdateGroupProtoMsg): _60.EventUpdateGroup;
                toProto(message: _60.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _60.EventUpdateGroup): _60.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                encode(message: _60.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventCreateGroupPolicy;
                fromPartial(object: {
                    address?: string;
                }): _60.EventCreateGroupPolicy;
                fromAmino(object: _60.EventCreateGroupPolicyAmino): _60.EventCreateGroupPolicy;
                toAmino(message: _60.EventCreateGroupPolicy): _60.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _60.EventCreateGroupPolicyAminoMsg): _60.EventCreateGroupPolicy;
                toAminoMsg(message: _60.EventCreateGroupPolicy): _60.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _60.EventCreateGroupPolicyProtoMsg): _60.EventCreateGroupPolicy;
                toProto(message: _60.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _60.EventCreateGroupPolicy): _60.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                encode(message: _60.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventUpdateGroupPolicy;
                fromPartial(object: {
                    address?: string;
                }): _60.EventUpdateGroupPolicy;
                fromAmino(object: _60.EventUpdateGroupPolicyAmino): _60.EventUpdateGroupPolicy;
                toAmino(message: _60.EventUpdateGroupPolicy): _60.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _60.EventUpdateGroupPolicyAminoMsg): _60.EventUpdateGroupPolicy;
                toAminoMsg(message: _60.EventUpdateGroupPolicy): _60.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _60.EventUpdateGroupPolicyProtoMsg): _60.EventUpdateGroupPolicy;
                toProto(message: _60.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _60.EventUpdateGroupPolicy): _60.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                encode(message: _60.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventSubmitProposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _60.EventSubmitProposal;
                fromAmino(object: _60.EventSubmitProposalAmino): _60.EventSubmitProposal;
                toAmino(message: _60.EventSubmitProposal): _60.EventSubmitProposalAmino;
                fromAminoMsg(object: _60.EventSubmitProposalAminoMsg): _60.EventSubmitProposal;
                toAminoMsg(message: _60.EventSubmitProposal): _60.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _60.EventSubmitProposalProtoMsg): _60.EventSubmitProposal;
                toProto(message: _60.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _60.EventSubmitProposal): _60.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                encode(message: _60.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventWithdrawProposal;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _60.EventWithdrawProposal;
                fromAmino(object: _60.EventWithdrawProposalAmino): _60.EventWithdrawProposal;
                toAmino(message: _60.EventWithdrawProposal): _60.EventWithdrawProposalAmino;
                fromAminoMsg(object: _60.EventWithdrawProposalAminoMsg): _60.EventWithdrawProposal;
                toAminoMsg(message: _60.EventWithdrawProposal): _60.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _60.EventWithdrawProposalProtoMsg): _60.EventWithdrawProposal;
                toProto(message: _60.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _60.EventWithdrawProposal): _60.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                encode(message: _60.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventVote;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                }): _60.EventVote;
                fromAmino(object: _60.EventVoteAmino): _60.EventVote;
                toAmino(message: _60.EventVote): _60.EventVoteAmino;
                fromAminoMsg(object: _60.EventVoteAminoMsg): _60.EventVote;
                toAminoMsg(message: _60.EventVote): _60.EventVoteAminoMsg;
                fromProtoMsg(message: _60.EventVoteProtoMsg): _60.EventVote;
                toProto(message: _60.EventVote): Uint8Array;
                toProtoMsg(message: _60.EventVote): _60.EventVoteProtoMsg;
            };
            EventExec: {
                encode(message: _60.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventExec;
                fromPartial(object: {
                    proposalId?: string | number | import("long").Long;
                    result?: _64.ProposalExecutorResult;
                }): _60.EventExec;
                fromAmino(object: _60.EventExecAmino): _60.EventExec;
                toAmino(message: _60.EventExec): _60.EventExecAmino;
                fromAminoMsg(object: _60.EventExecAminoMsg): _60.EventExec;
                toAminoMsg(message: _60.EventExec): _60.EventExecAminoMsg;
                fromProtoMsg(message: _60.EventExecProtoMsg): _60.EventExec;
                toProto(message: _60.EventExec): Uint8Array;
                toProtoMsg(message: _60.EventExec): _60.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                encode(message: _60.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EventLeaveGroup;
                fromPartial(object: {
                    groupId?: string | number | import("long").Long;
                    address?: string;
                }): _60.EventLeaveGroup;
                fromAmino(object: _60.EventLeaveGroupAmino): _60.EventLeaveGroup;
                toAmino(message: _60.EventLeaveGroup): _60.EventLeaveGroupAmino;
                fromAminoMsg(object: _60.EventLeaveGroupAminoMsg): _60.EventLeaveGroup;
                toAminoMsg(message: _60.EventLeaveGroup): _60.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _60.EventLeaveGroupProtoMsg): _60.EventLeaveGroup;
                toProto(message: _60.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _60.EventLeaveGroup): _60.EventLeaveGroupProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                inflation(request?: _67.QueryInflationRequest): Promise<_67.QueryInflationResponse>;
                annualProvisions(request?: _67.QueryAnnualProvisionsRequest): Promise<_67.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _67.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryParamsRequest;
                fromPartial(_: {}): _67.QueryParamsRequest;
                fromAmino(_: _67.QueryParamsRequestAmino): _67.QueryParamsRequest;
                toAmino(_: _67.QueryParamsRequest): _67.QueryParamsRequestAmino;
                fromAminoMsg(object: _67.QueryParamsRequestAminoMsg): _67.QueryParamsRequest;
                toAminoMsg(message: _67.QueryParamsRequest): _67.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryParamsRequestProtoMsg): _67.QueryParamsRequest;
                toProto(message: _67.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryParamsRequest): _67.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _67.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: string | number | import("long").Long;
                    };
                }): _67.QueryParamsResponse;
                fromAmino(object: _67.QueryParamsResponseAmino): _67.QueryParamsResponse;
                toAmino(message: _67.QueryParamsResponse): _67.QueryParamsResponseAmino;
                fromAminoMsg(object: _67.QueryParamsResponseAminoMsg): _67.QueryParamsResponse;
                toAminoMsg(message: _67.QueryParamsResponse): _67.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryParamsResponseProtoMsg): _67.QueryParamsResponse;
                toProto(message: _67.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryParamsResponse): _67.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                encode(_: _67.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryInflationRequest;
                fromPartial(_: {}): _67.QueryInflationRequest;
                fromAmino(_: _67.QueryInflationRequestAmino): _67.QueryInflationRequest;
                toAmino(_: _67.QueryInflationRequest): _67.QueryInflationRequestAmino;
                fromAminoMsg(object: _67.QueryInflationRequestAminoMsg): _67.QueryInflationRequest;
                toAminoMsg(message: _67.QueryInflationRequest): _67.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _67.QueryInflationRequestProtoMsg): _67.QueryInflationRequest;
                toProto(message: _67.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _67.QueryInflationRequest): _67.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                encode(message: _67.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryInflationResponse;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _67.QueryInflationResponse;
                fromAmino(object: _67.QueryInflationResponseAmino): _67.QueryInflationResponse;
                toAmino(message: _67.QueryInflationResponse): _67.QueryInflationResponseAmino;
                fromAminoMsg(object: _67.QueryInflationResponseAminoMsg): _67.QueryInflationResponse;
                toAminoMsg(message: _67.QueryInflationResponse): _67.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _67.QueryInflationResponseProtoMsg): _67.QueryInflationResponse;
                toProto(message: _67.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _67.QueryInflationResponse): _67.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _67.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _67.QueryAnnualProvisionsRequest;
                fromAmino(_: _67.QueryAnnualProvisionsRequestAmino): _67.QueryAnnualProvisionsRequest;
                toAmino(_: _67.QueryAnnualProvisionsRequest): _67.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _67.QueryAnnualProvisionsRequestAminoMsg): _67.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _67.QueryAnnualProvisionsRequest): _67.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryAnnualProvisionsRequestProtoMsg): _67.QueryAnnualProvisionsRequest;
                toProto(message: _67.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryAnnualProvisionsRequest): _67.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _67.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAnnualProvisionsResponse;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _67.QueryAnnualProvisionsResponse;
                fromAmino(object: _67.QueryAnnualProvisionsResponseAmino): _67.QueryAnnualProvisionsResponse;
                toAmino(message: _67.QueryAnnualProvisionsResponse): _67.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _67.QueryAnnualProvisionsResponseAminoMsg): _67.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _67.QueryAnnualProvisionsResponse): _67.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryAnnualProvisionsResponseProtoMsg): _67.QueryAnnualProvisionsResponse;
                toProto(message: _67.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryAnnualProvisionsResponse): _67.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                encode(message: _66.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Minter;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _66.Minter;
                fromAmino(object: _66.MinterAmino): _66.Minter;
                toAmino(message: _66.Minter): _66.MinterAmino;
                fromAminoMsg(object: _66.MinterAminoMsg): _66.Minter;
                toAminoMsg(message: _66.Minter): _66.MinterAminoMsg;
                fromProtoMsg(message: _66.MinterProtoMsg): _66.Minter;
                toProto(message: _66.Minter): Uint8Array;
                toProtoMsg(message: _66.Minter): _66.MinterProtoMsg;
            };
            Params: {
                encode(message: _66.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    inflationRateChange?: string;
                    inflationMax?: string;
                    inflationMin?: string;
                    goalBonded?: string;
                    blocksPerYear?: string | number | import("long").Long;
                }): _66.Params;
                fromAmino(object: _66.ParamsAmino): _66.Params;
                toAmino(message: _66.Params): _66.ParamsAmino;
                fromAminoMsg(object: _66.ParamsAminoMsg): _66.Params;
                toAminoMsg(message: _66.Params): _66.ParamsAminoMsg;
                fromProtoMsg(message: _66.ParamsProtoMsg): _66.Params;
                toProto(message: _66.Params): Uint8Array;
                toProtoMsg(message: _66.Params): _66.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _65.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GenesisState;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: string | number | import("long").Long;
                    };
                }): _65.GenesisState;
                fromAmino(object: _65.GenesisStateAmino): _65.GenesisState;
                toAmino(message: _65.GenesisState): _65.GenesisStateAmino;
                fromAminoMsg(object: _65.GenesisStateAminoMsg): _65.GenesisState;
                toAminoMsg(message: _65.GenesisState): _65.GenesisStateAminoMsg;
                fromProtoMsg(message: _65.GenesisStateProtoMsg): _65.GenesisState;
                toProto(message: _65.GenesisState): Uint8Array;
                toProtoMsg(message: _65.GenesisState): _65.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _72.QueryBalanceRequest): Promise<_72.QueryBalanceResponse>;
                owner(request: _72.QueryOwnerRequest): Promise<_72.QueryOwnerResponse>;
                supply(request: _72.QuerySupplyRequest): Promise<_72.QuerySupplyResponse>;
                nFTs(request: _72.QueryNFTsRequest): Promise<_72.QueryNFTsResponse>;
                nFT(request: _72.QueryNFTRequest): Promise<_72.QueryNFTResponse>;
                class(request: _72.QueryClassRequest): Promise<_72.QueryClassResponse>;
                classes(request?: _72.QueryClassesRequest): Promise<_72.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _73.MsgSend) => _73.MsgSendAmino;
                    fromAmino: (object: _73.MsgSendAmino) => _73.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _73.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgSend;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _73.MsgSend;
                fromAmino(object: _73.MsgSendAmino): _73.MsgSend;
                toAmino(message: _73.MsgSend): _73.MsgSendAmino;
                fromAminoMsg(object: _73.MsgSendAminoMsg): _73.MsgSend;
                toAminoMsg(message: _73.MsgSend): _73.MsgSendAminoMsg;
                fromProtoMsg(message: _73.MsgSendProtoMsg): _73.MsgSend;
                toProto(message: _73.MsgSend): Uint8Array;
                toProtoMsg(message: _73.MsgSend): _73.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _73.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgSendResponse;
                fromPartial(_: {}): _73.MsgSendResponse;
                fromAmino(_: _73.MsgSendResponseAmino): _73.MsgSendResponse;
                toAmino(_: _73.MsgSendResponse): _73.MsgSendResponseAmino;
                fromAminoMsg(object: _73.MsgSendResponseAminoMsg): _73.MsgSendResponse;
                toAminoMsg(message: _73.MsgSendResponse): _73.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _73.MsgSendResponseProtoMsg): _73.MsgSendResponse;
                toProto(message: _73.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _73.MsgSendResponse): _73.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _72.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryBalanceRequest;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                }): _72.QueryBalanceRequest;
                fromAmino(object: _72.QueryBalanceRequestAmino): _72.QueryBalanceRequest;
                toAmino(message: _72.QueryBalanceRequest): _72.QueryBalanceRequestAmino;
                fromAminoMsg(object: _72.QueryBalanceRequestAminoMsg): _72.QueryBalanceRequest;
                toAminoMsg(message: _72.QueryBalanceRequest): _72.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _72.QueryBalanceRequestProtoMsg): _72.QueryBalanceRequest;
                toProto(message: _72.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _72.QueryBalanceRequest): _72.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _72.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryBalanceResponse;
                fromPartial(object: {
                    amount?: string | number | import("long").Long;
                }): _72.QueryBalanceResponse;
                fromAmino(object: _72.QueryBalanceResponseAmino): _72.QueryBalanceResponse;
                toAmino(message: _72.QueryBalanceResponse): _72.QueryBalanceResponseAmino;
                fromAminoMsg(object: _72.QueryBalanceResponseAminoMsg): _72.QueryBalanceResponse;
                toAminoMsg(message: _72.QueryBalanceResponse): _72.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _72.QueryBalanceResponseProtoMsg): _72.QueryBalanceResponse;
                toProto(message: _72.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _72.QueryBalanceResponse): _72.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                encode(message: _72.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryOwnerRequest;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _72.QueryOwnerRequest;
                fromAmino(object: _72.QueryOwnerRequestAmino): _72.QueryOwnerRequest;
                toAmino(message: _72.QueryOwnerRequest): _72.QueryOwnerRequestAmino;
                fromAminoMsg(object: _72.QueryOwnerRequestAminoMsg): _72.QueryOwnerRequest;
                toAminoMsg(message: _72.QueryOwnerRequest): _72.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _72.QueryOwnerRequestProtoMsg): _72.QueryOwnerRequest;
                toProto(message: _72.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _72.QueryOwnerRequest): _72.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                encode(message: _72.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryOwnerResponse;
                fromPartial(object: {
                    owner?: string;
                }): _72.QueryOwnerResponse;
                fromAmino(object: _72.QueryOwnerResponseAmino): _72.QueryOwnerResponse;
                toAmino(message: _72.QueryOwnerResponse): _72.QueryOwnerResponseAmino;
                fromAminoMsg(object: _72.QueryOwnerResponseAminoMsg): _72.QueryOwnerResponse;
                toAminoMsg(message: _72.QueryOwnerResponse): _72.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _72.QueryOwnerResponseProtoMsg): _72.QueryOwnerResponse;
                toProto(message: _72.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _72.QueryOwnerResponse): _72.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                encode(message: _72.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QuerySupplyRequest;
                fromPartial(object: {
                    classId?: string;
                }): _72.QuerySupplyRequest;
                fromAmino(object: _72.QuerySupplyRequestAmino): _72.QuerySupplyRequest;
                toAmino(message: _72.QuerySupplyRequest): _72.QuerySupplyRequestAmino;
                fromAminoMsg(object: _72.QuerySupplyRequestAminoMsg): _72.QuerySupplyRequest;
                toAminoMsg(message: _72.QuerySupplyRequest): _72.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _72.QuerySupplyRequestProtoMsg): _72.QuerySupplyRequest;
                toProto(message: _72.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _72.QuerySupplyRequest): _72.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                encode(message: _72.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QuerySupplyResponse;
                fromPartial(object: {
                    amount?: string | number | import("long").Long;
                }): _72.QuerySupplyResponse;
                fromAmino(object: _72.QuerySupplyResponseAmino): _72.QuerySupplyResponse;
                toAmino(message: _72.QuerySupplyResponse): _72.QuerySupplyResponseAmino;
                fromAminoMsg(object: _72.QuerySupplyResponseAminoMsg): _72.QuerySupplyResponse;
                toAminoMsg(message: _72.QuerySupplyResponse): _72.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _72.QuerySupplyResponseProtoMsg): _72.QuerySupplyResponse;
                toProto(message: _72.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _72.QuerySupplyResponse): _72.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                encode(message: _72.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryNFTsRequest;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _72.QueryNFTsRequest;
                fromAmino(object: _72.QueryNFTsRequestAmino): _72.QueryNFTsRequest;
                toAmino(message: _72.QueryNFTsRequest): _72.QueryNFTsRequestAmino;
                fromAminoMsg(object: _72.QueryNFTsRequestAminoMsg): _72.QueryNFTsRequest;
                toAminoMsg(message: _72.QueryNFTsRequest): _72.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryNFTsRequestProtoMsg): _72.QueryNFTsRequest;
                toProto(message: _72.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryNFTsRequest): _72.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                encode(message: _72.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryNFTsResponse;
                fromPartial(object: {
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _72.QueryNFTsResponse;
                fromAmino(object: _72.QueryNFTsResponseAmino): _72.QueryNFTsResponse;
                toAmino(message: _72.QueryNFTsResponse): _72.QueryNFTsResponseAmino;
                fromAminoMsg(object: _72.QueryNFTsResponseAminoMsg): _72.QueryNFTsResponse;
                toAminoMsg(message: _72.QueryNFTsResponse): _72.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryNFTsResponseProtoMsg): _72.QueryNFTsResponse;
                toProto(message: _72.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryNFTsResponse): _72.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                encode(message: _72.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryNFTRequest;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _72.QueryNFTRequest;
                fromAmino(object: _72.QueryNFTRequestAmino): _72.QueryNFTRequest;
                toAmino(message: _72.QueryNFTRequest): _72.QueryNFTRequestAmino;
                fromAminoMsg(object: _72.QueryNFTRequestAminoMsg): _72.QueryNFTRequest;
                toAminoMsg(message: _72.QueryNFTRequest): _72.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _72.QueryNFTRequestProtoMsg): _72.QueryNFTRequest;
                toProto(message: _72.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _72.QueryNFTRequest): _72.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                encode(message: _72.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryNFTResponse;
                fromPartial(object: {
                    nft?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _72.QueryNFTResponse;
                fromAmino(object: _72.QueryNFTResponseAmino): _72.QueryNFTResponse;
                toAmino(message: _72.QueryNFTResponse): _72.QueryNFTResponseAmino;
                fromAminoMsg(object: _72.QueryNFTResponseAminoMsg): _72.QueryNFTResponse;
                toAminoMsg(message: _72.QueryNFTResponse): _72.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _72.QueryNFTResponseProtoMsg): _72.QueryNFTResponse;
                toProto(message: _72.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _72.QueryNFTResponse): _72.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                encode(message: _72.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClassRequest;
                fromPartial(object: {
                    classId?: string;
                }): _72.QueryClassRequest;
                fromAmino(object: _72.QueryClassRequestAmino): _72.QueryClassRequest;
                toAmino(message: _72.QueryClassRequest): _72.QueryClassRequestAmino;
                fromAminoMsg(object: _72.QueryClassRequestAminoMsg): _72.QueryClassRequest;
                toAminoMsg(message: _72.QueryClassRequest): _72.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _72.QueryClassRequestProtoMsg): _72.QueryClassRequest;
                toProto(message: _72.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _72.QueryClassRequest): _72.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                encode(message: _72.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClassResponse;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _72.QueryClassResponse;
                fromAmino(object: _72.QueryClassResponseAmino): _72.QueryClassResponse;
                toAmino(message: _72.QueryClassResponse): _72.QueryClassResponseAmino;
                fromAminoMsg(object: _72.QueryClassResponseAminoMsg): _72.QueryClassResponse;
                toAminoMsg(message: _72.QueryClassResponse): _72.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _72.QueryClassResponseProtoMsg): _72.QueryClassResponse;
                toProto(message: _72.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _72.QueryClassResponse): _72.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                encode(message: _72.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClassesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _72.QueryClassesRequest;
                fromAmino(object: _72.QueryClassesRequestAmino): _72.QueryClassesRequest;
                toAmino(message: _72.QueryClassesRequest): _72.QueryClassesRequestAmino;
                fromAminoMsg(object: _72.QueryClassesRequestAminoMsg): _72.QueryClassesRequest;
                toAminoMsg(message: _72.QueryClassesRequest): _72.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _72.QueryClassesRequestProtoMsg): _72.QueryClassesRequest;
                toProto(message: _72.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _72.QueryClassesRequest): _72.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                encode(message: _72.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryClassesResponse;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _72.QueryClassesResponse;
                fromAmino(object: _72.QueryClassesResponseAmino): _72.QueryClassesResponse;
                toAmino(message: _72.QueryClassesResponse): _72.QueryClassesResponseAmino;
                fromAminoMsg(object: _72.QueryClassesResponseAminoMsg): _72.QueryClassesResponse;
                toAminoMsg(message: _72.QueryClassesResponse): _72.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _72.QueryClassesResponseProtoMsg): _72.QueryClassesResponse;
                toProto(message: _72.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _72.QueryClassesResponse): _72.QueryClassesResponseProtoMsg;
            };
            Class: {
                encode(message: _71.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Class;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    symbol?: string;
                    description?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _71.Class;
                fromAmino(object: _71.ClassAmino): _71.Class;
                toAmino(message: _71.Class): _71.ClassAmino;
                fromAminoMsg(object: _71.ClassAminoMsg): _71.Class;
                toAminoMsg(message: _71.Class): _71.ClassAminoMsg;
                fromProtoMsg(message: _71.ClassProtoMsg): _71.Class;
                toProto(message: _71.Class): Uint8Array;
                toProtoMsg(message: _71.Class): _71.ClassProtoMsg;
            };
            NFT: {
                encode(message: _71.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.NFT;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _71.NFT;
                fromAmino(object: _71.NFTAmino): _71.NFT;
                toAmino(message: _71.NFT): _71.NFTAmino;
                fromAminoMsg(object: _71.NFTAminoMsg): _71.NFT;
                toAminoMsg(message: _71.NFT): _71.NFTAminoMsg;
                fromProtoMsg(message: _71.NFTProtoMsg): _71.NFT;
                toProto(message: _71.NFT): Uint8Array;
                toProtoMsg(message: _71.NFT): _71.NFTProtoMsg;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GenesisState;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    entries?: {
                        owner?: string;
                        nfts?: {
                            classId?: string;
                            id?: string;
                            uri?: string;
                            uriHash?: string;
                            data?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }[];
                }): _70.GenesisState;
                fromAmino(object: _70.GenesisStateAmino): _70.GenesisState;
                toAmino(message: _70.GenesisState): _70.GenesisStateAmino;
                fromAminoMsg(object: _70.GenesisStateAminoMsg): _70.GenesisState;
                toAminoMsg(message: _70.GenesisState): _70.GenesisStateAminoMsg;
                fromProtoMsg(message: _70.GenesisStateProtoMsg): _70.GenesisState;
                toProto(message: _70.GenesisState): Uint8Array;
                toProtoMsg(message: _70.GenesisState): _70.GenesisStateProtoMsg;
            };
            Entry: {
                encode(message: _70.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Entry;
                fromPartial(object: {
                    owner?: string;
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _70.Entry;
                fromAmino(object: _70.EntryAmino): _70.Entry;
                toAmino(message: _70.Entry): _70.EntryAmino;
                fromAminoMsg(object: _70.EntryAminoMsg): _70.Entry;
                toAminoMsg(message: _70.Entry): _70.EntryAminoMsg;
                fromProtoMsg(message: _70.EntryProtoMsg): _70.Entry;
                toProto(message: _70.Entry): Uint8Array;
                toProtoMsg(message: _70.Entry): _70.EntryProtoMsg;
            };
            EventSend: {
                encode(message: _69.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.EventSend;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _69.EventSend;
                fromAmino(object: _69.EventSendAmino): _69.EventSend;
                toAmino(message: _69.EventSend): _69.EventSendAmino;
                fromAminoMsg(object: _69.EventSendAminoMsg): _69.EventSend;
                toAminoMsg(message: _69.EventSend): _69.EventSendAminoMsg;
                fromProtoMsg(message: _69.EventSendProtoMsg): _69.EventSend;
                toProto(message: _69.EventSend): Uint8Array;
                toProtoMsg(message: _69.EventSend): _69.EventSendProtoMsg;
            };
            EventMint: {
                encode(message: _69.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.EventMint;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _69.EventMint;
                fromAmino(object: _69.EventMintAmino): _69.EventMint;
                toAmino(message: _69.EventMint): _69.EventMintAmino;
                fromAminoMsg(object: _69.EventMintAminoMsg): _69.EventMint;
                toAminoMsg(message: _69.EventMint): _69.EventMintAminoMsg;
                fromProtoMsg(message: _69.EventMintProtoMsg): _69.EventMint;
                toProto(message: _69.EventMint): Uint8Array;
                toProtoMsg(message: _69.EventMint): _69.EventMintProtoMsg;
            };
            EventBurn: {
                encode(message: _69.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.EventBurn;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _69.EventBurn;
                fromAmino(object: _69.EventBurnAmino): _69.EventBurn;
                toAmino(message: _69.EventBurn): _69.EventBurnAmino;
                fromAminoMsg(object: _69.EventBurnAminoMsg): _69.EventBurn;
                toAminoMsg(message: _69.EventBurn): _69.EventBurnAminoMsg;
                fromProtoMsg(message: _69.EventBurnProtoMsg): _69.EventBurn;
                toProto(message: _69.EventBurn): Uint8Array;
                toProtoMsg(message: _69.EventBurn): _69.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _74.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.TableDescriptor;
                fromPartial(object: {
                    primaryKey?: {
                        fields?: string;
                        autoIncrement?: boolean;
                    };
                    index?: {
                        fields?: string;
                        id?: number;
                        unique?: boolean;
                    }[];
                    id?: number;
                }): _74.TableDescriptor;
                fromAmino(object: _74.TableDescriptorAmino): _74.TableDescriptor;
                toAmino(message: _74.TableDescriptor): _74.TableDescriptorAmino;
                fromAminoMsg(object: _74.TableDescriptorAminoMsg): _74.TableDescriptor;
                toAminoMsg(message: _74.TableDescriptor): _74.TableDescriptorAminoMsg;
                fromProtoMsg(message: _74.TableDescriptorProtoMsg): _74.TableDescriptor;
                toProto(message: _74.TableDescriptor): Uint8Array;
                toProtoMsg(message: _74.TableDescriptor): _74.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                encode(message: _74.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.PrimaryKeyDescriptor;
                fromPartial(object: {
                    fields?: string;
                    autoIncrement?: boolean;
                }): _74.PrimaryKeyDescriptor;
                fromAmino(object: _74.PrimaryKeyDescriptorAmino): _74.PrimaryKeyDescriptor;
                toAmino(message: _74.PrimaryKeyDescriptor): _74.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _74.PrimaryKeyDescriptorAminoMsg): _74.PrimaryKeyDescriptor;
                toAminoMsg(message: _74.PrimaryKeyDescriptor): _74.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _74.PrimaryKeyDescriptorProtoMsg): _74.PrimaryKeyDescriptor;
                toProto(message: _74.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _74.PrimaryKeyDescriptor): _74.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                encode(message: _74.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.SecondaryIndexDescriptor;
                fromPartial(object: {
                    fields?: string;
                    id?: number;
                    unique?: boolean;
                }): _74.SecondaryIndexDescriptor;
                fromAmino(object: _74.SecondaryIndexDescriptorAmino): _74.SecondaryIndexDescriptor;
                toAmino(message: _74.SecondaryIndexDescriptor): _74.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _74.SecondaryIndexDescriptorAminoMsg): _74.SecondaryIndexDescriptor;
                toAminoMsg(message: _74.SecondaryIndexDescriptor): _74.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _74.SecondaryIndexDescriptorProtoMsg): _74.SecondaryIndexDescriptor;
                toProto(message: _74.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _74.SecondaryIndexDescriptor): _74.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                encode(message: _74.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.SingletonDescriptor;
                fromPartial(object: {
                    id?: number;
                }): _74.SingletonDescriptor;
                fromAmino(object: _74.SingletonDescriptorAmino): _74.SingletonDescriptor;
                toAmino(message: _74.SingletonDescriptor): _74.SingletonDescriptorAmino;
                fromAminoMsg(object: _74.SingletonDescriptorAminoMsg): _74.SingletonDescriptor;
                toAminoMsg(message: _74.SingletonDescriptor): _74.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _74.SingletonDescriptorProtoMsg): _74.SingletonDescriptor;
                toProto(message: _74.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _74.SingletonDescriptor): _74.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _75.StorageType;
            storageTypeToJSON(object: _75.StorageType): string;
            StorageType: typeof _75.StorageType;
            StorageTypeSDKType: typeof _75.StorageType;
            StorageTypeAmino: typeof _75.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _75.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ModuleSchemaDescriptor;
                fromPartial(object: {
                    schemaFile?: {
                        id?: number;
                        protoFileName?: string;
                        storageType?: _75.StorageType;
                    }[];
                    prefix?: Uint8Array;
                }): _75.ModuleSchemaDescriptor;
                fromAmino(object: _75.ModuleSchemaDescriptorAmino): _75.ModuleSchemaDescriptor;
                toAmino(message: _75.ModuleSchemaDescriptor): _75.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _75.ModuleSchemaDescriptorAminoMsg): _75.ModuleSchemaDescriptor;
                toAminoMsg(message: _75.ModuleSchemaDescriptor): _75.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _75.ModuleSchemaDescriptorProtoMsg): _75.ModuleSchemaDescriptor;
                toProto(message: _75.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _75.ModuleSchemaDescriptor): _75.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _75.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: {
                    id?: number;
                    protoFileName?: string;
                    storageType?: _75.StorageType;
                }): _75.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _75.ModuleSchemaDescriptor_FileEntryAmino): _75.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _75.ModuleSchemaDescriptor_FileEntry): _75.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _75.ModuleSchemaDescriptor_FileEntryAminoMsg): _75.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _75.ModuleSchemaDescriptor_FileEntry): _75.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _75.ModuleSchemaDescriptor_FileEntryProtoMsg): _75.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _75.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _75.ModuleSchemaDescriptor_FileEntry): _75.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                subspaces(request?: _77.QuerySubspacesRequest): Promise<_77.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _77.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryParamsRequest;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _77.QueryParamsRequest;
                fromAmino(object: _77.QueryParamsRequestAmino): _77.QueryParamsRequest;
                toAmino(message: _77.QueryParamsRequest): _77.QueryParamsRequestAmino;
                fromAminoMsg(object: _77.QueryParamsRequestAminoMsg): _77.QueryParamsRequest;
                toAminoMsg(message: _77.QueryParamsRequest): _77.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryParamsRequestProtoMsg): _77.QueryParamsRequest;
                toProto(message: _77.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryParamsRequest): _77.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _77.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryParamsResponse;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _77.QueryParamsResponse;
                fromAmino(object: _77.QueryParamsResponseAmino): _77.QueryParamsResponse;
                toAmino(message: _77.QueryParamsResponse): _77.QueryParamsResponseAmino;
                fromAminoMsg(object: _77.QueryParamsResponseAminoMsg): _77.QueryParamsResponse;
                toAminoMsg(message: _77.QueryParamsResponse): _77.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryParamsResponseProtoMsg): _77.QueryParamsResponse;
                toProto(message: _77.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryParamsResponse): _77.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                encode(_: _77.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QuerySubspacesRequest;
                fromPartial(_: {}): _77.QuerySubspacesRequest;
                fromAmino(_: _77.QuerySubspacesRequestAmino): _77.QuerySubspacesRequest;
                toAmino(_: _77.QuerySubspacesRequest): _77.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _77.QuerySubspacesRequestAminoMsg): _77.QuerySubspacesRequest;
                toAminoMsg(message: _77.QuerySubspacesRequest): _77.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _77.QuerySubspacesRequestProtoMsg): _77.QuerySubspacesRequest;
                toProto(message: _77.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _77.QuerySubspacesRequest): _77.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                encode(message: _77.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QuerySubspacesResponse;
                fromPartial(object: {
                    subspaces?: {
                        subspace?: string;
                        keys?: string[];
                    }[];
                }): _77.QuerySubspacesResponse;
                fromAmino(object: _77.QuerySubspacesResponseAmino): _77.QuerySubspacesResponse;
                toAmino(message: _77.QuerySubspacesResponse): _77.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _77.QuerySubspacesResponseAminoMsg): _77.QuerySubspacesResponse;
                toAminoMsg(message: _77.QuerySubspacesResponse): _77.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _77.QuerySubspacesResponseProtoMsg): _77.QuerySubspacesResponse;
                toProto(message: _77.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _77.QuerySubspacesResponse): _77.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                encode(message: _77.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Subspace;
                fromPartial(object: {
                    subspace?: string;
                    keys?: string[];
                }): _77.Subspace;
                fromAmino(object: _77.SubspaceAmino): _77.Subspace;
                toAmino(message: _77.Subspace): _77.SubspaceAmino;
                fromAminoMsg(object: _77.SubspaceAminoMsg): _77.Subspace;
                toAminoMsg(message: _77.Subspace): _77.SubspaceAminoMsg;
                fromProtoMsg(message: _77.SubspaceProtoMsg): _77.Subspace;
                toProto(message: _77.Subspace): Uint8Array;
                toProtoMsg(message: _77.Subspace): _77.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                encode(message: _76.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ParameterChangeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _76.ParameterChangeProposal;
                fromAmino(object: _76.ParameterChangeProposalAmino): _76.ParameterChangeProposal;
                toAmino(message: _76.ParameterChangeProposal): _76.ParameterChangeProposalAmino;
                fromAminoMsg(object: _76.ParameterChangeProposalAminoMsg): _76.ParameterChangeProposal;
                toAminoMsg(message: _76.ParameterChangeProposal): _76.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _76.ParameterChangeProposalProtoMsg): _76.ParameterChangeProposal;
                toProto(message: _76.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _76.ParameterChangeProposal): _76.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                encode(message: _76.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ParamChange;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _76.ParamChange;
                fromAmino(object: _76.ParamChangeAmino): _76.ParamChange;
                toAmino(message: _76.ParamChange): _76.ParamChangeAmino;
                fromAminoMsg(object: _76.ParamChangeAminoMsg): _76.ParamChange;
                toAminoMsg(message: _76.ParamChange): _76.ParamChangeAminoMsg;
                fromProtoMsg(message: _76.ParamChangeProtoMsg): _76.ParamChange;
                toProto(message: _76.ParamChange): Uint8Array;
                toProtoMsg(message: _76.ParamChange): _76.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                signingInfo(request: _79.QuerySigningInfoRequest): Promise<_79.QuerySigningInfoResponse>;
                signingInfos(request?: _79.QuerySigningInfosRequest): Promise<_79.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: _81.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _81.MsgUnjail): {
                        typeUrl: string;
                        value: _81.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUnjail) => _81.MsgUnjailAmino;
                    fromAmino: (object: _81.MsgUnjailAmino) => _81.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _81.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUnjail;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _81.MsgUnjail;
                fromAmino(object: _81.MsgUnjailAmino): _81.MsgUnjail;
                toAmino(message: _81.MsgUnjail): _81.MsgUnjailAmino;
                fromAminoMsg(object: _81.MsgUnjailAminoMsg): _81.MsgUnjail;
                toAminoMsg(message: _81.MsgUnjail): _81.MsgUnjailAminoMsg;
                fromProtoMsg(message: _81.MsgUnjailProtoMsg): _81.MsgUnjail;
                toProto(message: _81.MsgUnjail): Uint8Array;
                toProtoMsg(message: _81.MsgUnjail): _81.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                encode(_: _81.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUnjailResponse;
                fromPartial(_: {}): _81.MsgUnjailResponse;
                fromAmino(_: _81.MsgUnjailResponseAmino): _81.MsgUnjailResponse;
                toAmino(_: _81.MsgUnjailResponse): _81.MsgUnjailResponseAmino;
                fromAminoMsg(object: _81.MsgUnjailResponseAminoMsg): _81.MsgUnjailResponse;
                toAminoMsg(message: _81.MsgUnjailResponse): _81.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUnjailResponseProtoMsg): _81.MsgUnjailResponse;
                toProto(message: _81.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUnjailResponse): _81.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                encode(message: _80.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ValidatorSigningInfo;
                fromPartial(object: {
                    address?: string;
                    startHeight?: string | number | import("long").Long;
                    indexOffset?: string | number | import("long").Long;
                    jailedUntil?: Date;
                    tombstoned?: boolean;
                    missedBlocksCounter?: string | number | import("long").Long;
                }): _80.ValidatorSigningInfo;
                fromAmino(object: _80.ValidatorSigningInfoAmino): _80.ValidatorSigningInfo;
                toAmino(message: _80.ValidatorSigningInfo): _80.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _80.ValidatorSigningInfoAminoMsg): _80.ValidatorSigningInfo;
                toAminoMsg(message: _80.ValidatorSigningInfo): _80.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _80.ValidatorSigningInfoProtoMsg): _80.ValidatorSigningInfo;
                toProto(message: _80.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _80.ValidatorSigningInfo): _80.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                encode(message: _80.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Params;
                fromPartial(object: {
                    signedBlocksWindow?: string | number | import("long").Long;
                    minSignedPerWindow?: Uint8Array;
                    downtimeJailDuration?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    slashFractionDoubleSign?: Uint8Array;
                    slashFractionDowntime?: Uint8Array;
                }): _80.Params;
                fromAmino(object: _80.ParamsAmino): _80.Params;
                toAmino(message: _80.Params): _80.ParamsAmino;
                fromAminoMsg(object: _80.ParamsAminoMsg): _80.Params;
                toAminoMsg(message: _80.Params): _80.ParamsAminoMsg;
                fromProtoMsg(message: _80.ParamsProtoMsg): _80.Params;
                toProto(message: _80.Params): Uint8Array;
                toProtoMsg(message: _80.Params): _80.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _79.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryParamsRequest;
                fromPartial(_: {}): _79.QueryParamsRequest;
                fromAmino(_: _79.QueryParamsRequestAmino): _79.QueryParamsRequest;
                toAmino(_: _79.QueryParamsRequest): _79.QueryParamsRequestAmino;
                fromAminoMsg(object: _79.QueryParamsRequestAminoMsg): _79.QueryParamsRequest;
                toAminoMsg(message: _79.QueryParamsRequest): _79.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryParamsRequestProtoMsg): _79.QueryParamsRequest;
                toProto(message: _79.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryParamsRequest): _79.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _79.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: string | number | import("long").Long;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                }): _79.QueryParamsResponse;
                fromAmino(object: _79.QueryParamsResponseAmino): _79.QueryParamsResponse;
                toAmino(message: _79.QueryParamsResponse): _79.QueryParamsResponseAmino;
                fromAminoMsg(object: _79.QueryParamsResponseAminoMsg): _79.QueryParamsResponse;
                toAminoMsg(message: _79.QueryParamsResponse): _79.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryParamsResponseProtoMsg): _79.QueryParamsResponse;
                toProto(message: _79.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryParamsResponse): _79.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                encode(message: _79.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfoRequest;
                fromPartial(object: {
                    consAddress?: string;
                }): _79.QuerySigningInfoRequest;
                fromAmino(object: _79.QuerySigningInfoRequestAmino): _79.QuerySigningInfoRequest;
                toAmino(message: _79.QuerySigningInfoRequest): _79.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _79.QuerySigningInfoRequestAminoMsg): _79.QuerySigningInfoRequest;
                toAminoMsg(message: _79.QuerySigningInfoRequest): _79.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _79.QuerySigningInfoRequestProtoMsg): _79.QuerySigningInfoRequest;
                toProto(message: _79.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _79.QuerySigningInfoRequest): _79.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                encode(message: _79.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfoResponse;
                fromPartial(object: {
                    valSigningInfo?: {
                        address?: string;
                        startHeight?: string | number | import("long").Long;
                        indexOffset?: string | number | import("long").Long;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: string | number | import("long").Long;
                    };
                }): _79.QuerySigningInfoResponse;
                fromAmino(object: _79.QuerySigningInfoResponseAmino): _79.QuerySigningInfoResponse;
                toAmino(message: _79.QuerySigningInfoResponse): _79.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _79.QuerySigningInfoResponseAminoMsg): _79.QuerySigningInfoResponse;
                toAminoMsg(message: _79.QuerySigningInfoResponse): _79.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _79.QuerySigningInfoResponseProtoMsg): _79.QuerySigningInfoResponse;
                toProto(message: _79.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _79.QuerySigningInfoResponse): _79.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                encode(message: _79.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfosRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _79.QuerySigningInfosRequest;
                fromAmino(object: _79.QuerySigningInfosRequestAmino): _79.QuerySigningInfosRequest;
                toAmino(message: _79.QuerySigningInfosRequest): _79.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _79.QuerySigningInfosRequestAminoMsg): _79.QuerySigningInfosRequest;
                toAminoMsg(message: _79.QuerySigningInfosRequest): _79.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _79.QuerySigningInfosRequestProtoMsg): _79.QuerySigningInfosRequest;
                toProto(message: _79.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _79.QuerySigningInfosRequest): _79.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                encode(message: _79.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfosResponse;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        startHeight?: string | number | import("long").Long;
                        indexOffset?: string | number | import("long").Long;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _79.QuerySigningInfosResponse;
                fromAmino(object: _79.QuerySigningInfosResponseAmino): _79.QuerySigningInfosResponse;
                toAmino(message: _79.QuerySigningInfosResponse): _79.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _79.QuerySigningInfosResponseAminoMsg): _79.QuerySigningInfosResponse;
                toAminoMsg(message: _79.QuerySigningInfosResponse): _79.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _79.QuerySigningInfosResponseProtoMsg): _79.QuerySigningInfosResponse;
                toProto(message: _79.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _79.QuerySigningInfosResponse): _79.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GenesisState;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: string | number | import("long").Long;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                    signingInfos?: {
                        address?: string;
                        validatorSigningInfo?: {
                            address?: string;
                            startHeight?: string | number | import("long").Long;
                            indexOffset?: string | number | import("long").Long;
                            jailedUntil?: Date;
                            tombstoned?: boolean;
                            missedBlocksCounter?: string | number | import("long").Long;
                        };
                    }[];
                    missedBlocks?: {
                        address?: string;
                        missedBlocks?: {
                            index?: string | number | import("long").Long;
                            missed?: boolean;
                        }[];
                    }[];
                }): _78.GenesisState;
                fromAmino(object: _78.GenesisStateAmino): _78.GenesisState;
                toAmino(message: _78.GenesisState): _78.GenesisStateAmino;
                fromAminoMsg(object: _78.GenesisStateAminoMsg): _78.GenesisState;
                toAminoMsg(message: _78.GenesisState): _78.GenesisStateAminoMsg;
                fromProtoMsg(message: _78.GenesisStateProtoMsg): _78.GenesisState;
                toProto(message: _78.GenesisState): Uint8Array;
                toProtoMsg(message: _78.GenesisState): _78.GenesisStateProtoMsg;
            };
            SigningInfo: {
                encode(message: _78.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.SigningInfo;
                fromPartial(object: {
                    address?: string;
                    validatorSigningInfo?: {
                        address?: string;
                        startHeight?: string | number | import("long").Long;
                        indexOffset?: string | number | import("long").Long;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: string | number | import("long").Long;
                    };
                }): _78.SigningInfo;
                fromAmino(object: _78.SigningInfoAmino): _78.SigningInfo;
                toAmino(message: _78.SigningInfo): _78.SigningInfoAmino;
                fromAminoMsg(object: _78.SigningInfoAminoMsg): _78.SigningInfo;
                toAminoMsg(message: _78.SigningInfo): _78.SigningInfoAminoMsg;
                fromProtoMsg(message: _78.SigningInfoProtoMsg): _78.SigningInfo;
                toProto(message: _78.SigningInfo): Uint8Array;
                toProtoMsg(message: _78.SigningInfo): _78.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                encode(message: _78.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ValidatorMissedBlocks;
                fromPartial(object: {
                    address?: string;
                    missedBlocks?: {
                        index?: string | number | import("long").Long;
                        missed?: boolean;
                    }[];
                }): _78.ValidatorMissedBlocks;
                fromAmino(object: _78.ValidatorMissedBlocksAmino): _78.ValidatorMissedBlocks;
                toAmino(message: _78.ValidatorMissedBlocks): _78.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _78.ValidatorMissedBlocksAminoMsg): _78.ValidatorMissedBlocks;
                toAminoMsg(message: _78.ValidatorMissedBlocks): _78.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _78.ValidatorMissedBlocksProtoMsg): _78.ValidatorMissedBlocks;
                toProto(message: _78.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _78.ValidatorMissedBlocks): _78.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                encode(message: _78.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MissedBlock;
                fromPartial(object: {
                    index?: string | number | import("long").Long;
                    missed?: boolean;
                }): _78.MissedBlock;
                fromAmino(object: _78.MissedBlockAmino): _78.MissedBlock;
                toAmino(message: _78.MissedBlock): _78.MissedBlockAmino;
                fromAminoMsg(object: _78.MissedBlockAminoMsg): _78.MissedBlock;
                toAminoMsg(message: _78.MissedBlock): _78.MissedBlockAminoMsg;
                fromProtoMsg(message: _78.MissedBlockProtoMsg): _78.MissedBlock;
                toProto(message: _78.MissedBlock): Uint8Array;
                toProtoMsg(message: _78.MissedBlock): _78.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _84.QueryValidatorsRequest): Promise<_84.QueryValidatorsResponse>;
                validator(request: _84.QueryValidatorRequest): Promise<_84.QueryValidatorResponse>;
                validatorDelegations(request: _84.QueryValidatorDelegationsRequest): Promise<_84.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _84.QueryValidatorUnbondingDelegationsRequest): Promise<_84.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _84.QueryDelegationRequest): Promise<_84.QueryDelegationResponse>;
                unbondingDelegation(request: _84.QueryUnbondingDelegationRequest): Promise<_84.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _84.QueryDelegatorDelegationsRequest): Promise<_84.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _84.QueryDelegatorUnbondingDelegationsRequest): Promise<_84.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _84.QueryRedelegationsRequest): Promise<_84.QueryRedelegationsResponse>;
                delegatorValidators(request: _84.QueryDelegatorValidatorsRequest): Promise<_84.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _84.QueryDelegatorValidatorRequest): Promise<_84.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _84.QueryHistoricalInfoRequest): Promise<_84.QueryHistoricalInfoResponse>;
                pool(request?: _84.QueryPoolRequest): Promise<_84.QueryPoolResponse>;
                params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: _86.MsgCreateValidator;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: _86.MsgEditValidator;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: _86.MsgDelegate;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _86.MsgBeginRedelegate;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: _86.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _86.MsgCreateValidator): {
                        typeUrl: string;
                        value: _86.MsgCreateValidator;
                    };
                    editValidator(value: _86.MsgEditValidator): {
                        typeUrl: string;
                        value: _86.MsgEditValidator;
                    };
                    delegate(value: _86.MsgDelegate): {
                        typeUrl: string;
                        value: _86.MsgDelegate;
                    };
                    beginRedelegate(value: _86.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _86.MsgBeginRedelegate;
                    };
                    undelegate(value: _86.MsgUndelegate): {
                        typeUrl: string;
                        value: _86.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _86.MsgCreateValidator) => _86.MsgCreateValidatorAmino;
                    fromAmino: (object: _86.MsgCreateValidatorAmino) => _86.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _86.MsgEditValidator) => _86.MsgEditValidatorAmino;
                    fromAmino: (object: _86.MsgEditValidatorAmino) => _86.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _86.MsgDelegate) => _86.MsgDelegateAmino;
                    fromAmino: (object: _86.MsgDelegateAmino) => _86.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _86.MsgBeginRedelegate) => _86.MsgBeginRedelegateAmino;
                    fromAmino: (object: _86.MsgBeginRedelegateAmino) => _86.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUndelegate) => _86.MsgUndelegateAmino;
                    fromAmino: (object: _86.MsgUndelegateAmino) => _86.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _86.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgCreateValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _86.MsgCreateValidator;
                fromAmino(object: _86.MsgCreateValidatorAmino): _86.MsgCreateValidator;
                toAmino(message: _86.MsgCreateValidator): _86.MsgCreateValidatorAmino;
                fromAminoMsg(object: _86.MsgCreateValidatorAminoMsg): _86.MsgCreateValidator;
                toAminoMsg(message: _86.MsgCreateValidator): _86.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _86.MsgCreateValidatorProtoMsg): _86.MsgCreateValidator;
                toProto(message: _86.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _86.MsgCreateValidator): _86.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                encode(_: _86.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgCreateValidatorResponse;
                fromPartial(_: {}): _86.MsgCreateValidatorResponse;
                fromAmino(_: _86.MsgCreateValidatorResponseAmino): _86.MsgCreateValidatorResponse;
                toAmino(_: _86.MsgCreateValidatorResponse): _86.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _86.MsgCreateValidatorResponseAminoMsg): _86.MsgCreateValidatorResponse;
                toAminoMsg(message: _86.MsgCreateValidatorResponse): _86.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _86.MsgCreateValidatorResponseProtoMsg): _86.MsgCreateValidatorResponse;
                toProto(message: _86.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _86.MsgCreateValidatorResponse): _86.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                encode(message: _86.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgEditValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _86.MsgEditValidator;
                fromAmino(object: _86.MsgEditValidatorAmino): _86.MsgEditValidator;
                toAmino(message: _86.MsgEditValidator): _86.MsgEditValidatorAmino;
                fromAminoMsg(object: _86.MsgEditValidatorAminoMsg): _86.MsgEditValidator;
                toAminoMsg(message: _86.MsgEditValidator): _86.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _86.MsgEditValidatorProtoMsg): _86.MsgEditValidator;
                toProto(message: _86.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _86.MsgEditValidator): _86.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                encode(_: _86.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgEditValidatorResponse;
                fromPartial(_: {}): _86.MsgEditValidatorResponse;
                fromAmino(_: _86.MsgEditValidatorResponseAmino): _86.MsgEditValidatorResponse;
                toAmino(_: _86.MsgEditValidatorResponse): _86.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _86.MsgEditValidatorResponseAminoMsg): _86.MsgEditValidatorResponse;
                toAminoMsg(message: _86.MsgEditValidatorResponse): _86.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _86.MsgEditValidatorResponseProtoMsg): _86.MsgEditValidatorResponse;
                toProto(message: _86.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _86.MsgEditValidatorResponse): _86.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                encode(message: _86.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgDelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _86.MsgDelegate;
                fromAmino(object: _86.MsgDelegateAmino): _86.MsgDelegate;
                toAmino(message: _86.MsgDelegate): _86.MsgDelegateAmino;
                fromAminoMsg(object: _86.MsgDelegateAminoMsg): _86.MsgDelegate;
                toAminoMsg(message: _86.MsgDelegate): _86.MsgDelegateAminoMsg;
                fromProtoMsg(message: _86.MsgDelegateProtoMsg): _86.MsgDelegate;
                toProto(message: _86.MsgDelegate): Uint8Array;
                toProtoMsg(message: _86.MsgDelegate): _86.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                encode(_: _86.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgDelegateResponse;
                fromPartial(_: {}): _86.MsgDelegateResponse;
                fromAmino(_: _86.MsgDelegateResponseAmino): _86.MsgDelegateResponse;
                toAmino(_: _86.MsgDelegateResponse): _86.MsgDelegateResponseAmino;
                fromAminoMsg(object: _86.MsgDelegateResponseAminoMsg): _86.MsgDelegateResponse;
                toAminoMsg(message: _86.MsgDelegateResponse): _86.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _86.MsgDelegateResponseProtoMsg): _86.MsgDelegateResponse;
                toProto(message: _86.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _86.MsgDelegateResponse): _86.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                encode(message: _86.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgBeginRedelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _86.MsgBeginRedelegate;
                fromAmino(object: _86.MsgBeginRedelegateAmino): _86.MsgBeginRedelegate;
                toAmino(message: _86.MsgBeginRedelegate): _86.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _86.MsgBeginRedelegateAminoMsg): _86.MsgBeginRedelegate;
                toAminoMsg(message: _86.MsgBeginRedelegate): _86.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _86.MsgBeginRedelegateProtoMsg): _86.MsgBeginRedelegate;
                toProto(message: _86.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _86.MsgBeginRedelegate): _86.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _86.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgBeginRedelegateResponse;
                fromPartial(object: {
                    completionTime?: Date;
                }): _86.MsgBeginRedelegateResponse;
                fromAmino(object: _86.MsgBeginRedelegateResponseAmino): _86.MsgBeginRedelegateResponse;
                toAmino(message: _86.MsgBeginRedelegateResponse): _86.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _86.MsgBeginRedelegateResponseAminoMsg): _86.MsgBeginRedelegateResponse;
                toAminoMsg(message: _86.MsgBeginRedelegateResponse): _86.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _86.MsgBeginRedelegateResponseProtoMsg): _86.MsgBeginRedelegateResponse;
                toProto(message: _86.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _86.MsgBeginRedelegateResponse): _86.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                encode(message: _86.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgUndelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _86.MsgUndelegate;
                fromAmino(object: _86.MsgUndelegateAmino): _86.MsgUndelegate;
                toAmino(message: _86.MsgUndelegate): _86.MsgUndelegateAmino;
                fromAminoMsg(object: _86.MsgUndelegateAminoMsg): _86.MsgUndelegate;
                toAminoMsg(message: _86.MsgUndelegate): _86.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _86.MsgUndelegateProtoMsg): _86.MsgUndelegate;
                toProto(message: _86.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _86.MsgUndelegate): _86.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                encode(message: _86.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgUndelegateResponse;
                fromPartial(object: {
                    completionTime?: Date;
                }): _86.MsgUndelegateResponse;
                fromAmino(object: _86.MsgUndelegateResponseAmino): _86.MsgUndelegateResponse;
                toAmino(message: _86.MsgUndelegateResponse): _86.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _86.MsgUndelegateResponseAminoMsg): _86.MsgUndelegateResponse;
                toAminoMsg(message: _86.MsgUndelegateResponse): _86.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUndelegateResponseProtoMsg): _86.MsgUndelegateResponse;
                toProto(message: _86.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUndelegateResponse): _86.MsgUndelegateResponseProtoMsg;
            };
            bondStatusFromJSON(object: any): _85.BondStatus;
            bondStatusToJSON(object: _85.BondStatus): string;
            BondStatus: typeof _85.BondStatus;
            BondStatusSDKType: typeof _85.BondStatus;
            BondStatusAmino: typeof _85.BondStatus;
            HistoricalInfo: {
                encode(message: _85.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.HistoricalInfo;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: string | number | import("long").Long;
                            app?: string | number | import("long").Long;
                        };
                        chainId?: string;
                        height?: string | number | import("long").Long;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _85.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").Long;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _85.HistoricalInfo;
                fromAmino(object: _85.HistoricalInfoAmino): _85.HistoricalInfo;
                toAmino(message: _85.HistoricalInfo): _85.HistoricalInfoAmino;
                fromAminoMsg(object: _85.HistoricalInfoAminoMsg): _85.HistoricalInfo;
                toAminoMsg(message: _85.HistoricalInfo): _85.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _85.HistoricalInfoProtoMsg): _85.HistoricalInfo;
                toProto(message: _85.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _85.HistoricalInfo): _85.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                encode(message: _85.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.CommissionRates;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _85.CommissionRates;
                fromAmino(object: _85.CommissionRatesAmino): _85.CommissionRates;
                toAmino(message: _85.CommissionRates): _85.CommissionRatesAmino;
                fromAminoMsg(object: _85.CommissionRatesAminoMsg): _85.CommissionRates;
                toAminoMsg(message: _85.CommissionRates): _85.CommissionRatesAminoMsg;
                fromProtoMsg(message: _85.CommissionRatesProtoMsg): _85.CommissionRates;
                toProto(message: _85.CommissionRates): Uint8Array;
                toProtoMsg(message: _85.CommissionRates): _85.CommissionRatesProtoMsg;
            };
            Commission: {
                encode(message: _85.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Commission;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                }): _85.Commission;
                fromAmino(object: _85.CommissionAmino): _85.Commission;
                toAmino(message: _85.Commission): _85.CommissionAmino;
                fromAminoMsg(object: _85.CommissionAminoMsg): _85.Commission;
                toAminoMsg(message: _85.Commission): _85.CommissionAminoMsg;
                fromProtoMsg(message: _85.CommissionProtoMsg): _85.Commission;
                toProto(message: _85.Commission): Uint8Array;
                toProtoMsg(message: _85.Commission): _85.CommissionProtoMsg;
            };
            Description: {
                encode(message: _85.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Description;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _85.Description;
                fromAmino(object: _85.DescriptionAmino): _85.Description;
                toAmino(message: _85.Description): _85.DescriptionAmino;
                fromAminoMsg(object: _85.DescriptionAminoMsg): _85.Description;
                toAminoMsg(message: _85.Description): _85.DescriptionAminoMsg;
                fromProtoMsg(message: _85.DescriptionProtoMsg): _85.Description;
                toProto(message: _85.Description): Uint8Array;
                toProtoMsg(message: _85.Description): _85.DescriptionProtoMsg;
            };
            Validator: {
                encode(message: _85.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Validator;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _85.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: string | number | import("long").Long;
                    unbondingTime?: Date;
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: Date;
                    };
                    minSelfDelegation?: string;
                }): _85.Validator;
                fromAmino(object: _85.ValidatorAmino): _85.Validator;
                toAmino(message: _85.Validator): _85.ValidatorAmino;
                fromAminoMsg(object: _85.ValidatorAminoMsg): _85.Validator;
                toAminoMsg(message: _85.Validator): _85.ValidatorAminoMsg;
                fromProtoMsg(message: _85.ValidatorProtoMsg): _85.Validator;
                toProto(message: _85.Validator): Uint8Array;
                toProtoMsg(message: _85.Validator): _85.ValidatorProtoMsg;
            };
            ValAddresses: {
                encode(message: _85.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValAddresses;
                fromPartial(object: {
                    addresses?: string[];
                }): _85.ValAddresses;
                fromAmino(object: _85.ValAddressesAmino): _85.ValAddresses;
                toAmino(message: _85.ValAddresses): _85.ValAddressesAmino;
                fromAminoMsg(object: _85.ValAddressesAminoMsg): _85.ValAddresses;
                toAminoMsg(message: _85.ValAddresses): _85.ValAddressesAminoMsg;
                fromProtoMsg(message: _85.ValAddressesProtoMsg): _85.ValAddresses;
                toProto(message: _85.ValAddresses): Uint8Array;
                toProtoMsg(message: _85.ValAddresses): _85.ValAddressesProtoMsg;
            };
            DVPair: {
                encode(message: _85.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVPair;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _85.DVPair;
                fromAmino(object: _85.DVPairAmino): _85.DVPair;
                toAmino(message: _85.DVPair): _85.DVPairAmino;
                fromAminoMsg(object: _85.DVPairAminoMsg): _85.DVPair;
                toAminoMsg(message: _85.DVPair): _85.DVPairAminoMsg;
                fromProtoMsg(message: _85.DVPairProtoMsg): _85.DVPair;
                toProto(message: _85.DVPair): Uint8Array;
                toProtoMsg(message: _85.DVPair): _85.DVPairProtoMsg;
            };
            DVPairs: {
                encode(message: _85.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVPairs;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _85.DVPairs;
                fromAmino(object: _85.DVPairsAmino): _85.DVPairs;
                toAmino(message: _85.DVPairs): _85.DVPairsAmino;
                fromAminoMsg(object: _85.DVPairsAminoMsg): _85.DVPairs;
                toAminoMsg(message: _85.DVPairs): _85.DVPairsAminoMsg;
                fromProtoMsg(message: _85.DVPairsProtoMsg): _85.DVPairs;
                toProto(message: _85.DVPairs): Uint8Array;
                toProtoMsg(message: _85.DVPairs): _85.DVPairsProtoMsg;
            };
            DVVTriplet: {
                encode(message: _85.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVVTriplet;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _85.DVVTriplet;
                fromAmino(object: _85.DVVTripletAmino): _85.DVVTriplet;
                toAmino(message: _85.DVVTriplet): _85.DVVTripletAmino;
                fromAminoMsg(object: _85.DVVTripletAminoMsg): _85.DVVTriplet;
                toAminoMsg(message: _85.DVVTriplet): _85.DVVTripletAminoMsg;
                fromProtoMsg(message: _85.DVVTripletProtoMsg): _85.DVVTriplet;
                toProto(message: _85.DVVTriplet): Uint8Array;
                toProtoMsg(message: _85.DVVTriplet): _85.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                encode(message: _85.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVVTriplets;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _85.DVVTriplets;
                fromAmino(object: _85.DVVTripletsAmino): _85.DVVTriplets;
                toAmino(message: _85.DVVTriplets): _85.DVVTripletsAmino;
                fromAminoMsg(object: _85.DVVTripletsAminoMsg): _85.DVVTriplets;
                toAminoMsg(message: _85.DVVTriplets): _85.DVVTripletsAminoMsg;
                fromProtoMsg(message: _85.DVVTripletsProtoMsg): _85.DVVTriplets;
                toProto(message: _85.DVVTriplets): Uint8Array;
                toProtoMsg(message: _85.DVVTriplets): _85.DVVTripletsProtoMsg;
            };
            Delegation: {
                encode(message: _85.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Delegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _85.Delegation;
                fromAmino(object: _85.DelegationAmino): _85.Delegation;
                toAmino(message: _85.Delegation): _85.DelegationAmino;
                fromAminoMsg(object: _85.DelegationAminoMsg): _85.Delegation;
                toAminoMsg(message: _85.Delegation): _85.DelegationAminoMsg;
                fromProtoMsg(message: _85.DelegationProtoMsg): _85.Delegation;
                toProto(message: _85.Delegation): Uint8Array;
                toProtoMsg(message: _85.Delegation): _85.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                encode(message: _85.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.UnbondingDelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: string | number | import("long").Long;
                        completionTime?: Date;
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _85.UnbondingDelegation;
                fromAmino(object: _85.UnbondingDelegationAmino): _85.UnbondingDelegation;
                toAmino(message: _85.UnbondingDelegation): _85.UnbondingDelegationAmino;
                fromAminoMsg(object: _85.UnbondingDelegationAminoMsg): _85.UnbondingDelegation;
                toAminoMsg(message: _85.UnbondingDelegation): _85.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _85.UnbondingDelegationProtoMsg): _85.UnbondingDelegation;
                toProto(message: _85.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _85.UnbondingDelegation): _85.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                encode(message: _85.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.UnbondingDelegationEntry;
                fromPartial(object: {
                    creationHeight?: string | number | import("long").Long;
                    completionTime?: Date;
                    initialBalance?: string;
                    balance?: string;
                }): _85.UnbondingDelegationEntry;
                fromAmino(object: _85.UnbondingDelegationEntryAmino): _85.UnbondingDelegationEntry;
                toAmino(message: _85.UnbondingDelegationEntry): _85.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _85.UnbondingDelegationEntryAminoMsg): _85.UnbondingDelegationEntry;
                toAminoMsg(message: _85.UnbondingDelegationEntry): _85.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _85.UnbondingDelegationEntryProtoMsg): _85.UnbondingDelegationEntry;
                toProto(message: _85.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _85.UnbondingDelegationEntry): _85.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                encode(message: _85.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.RedelegationEntry;
                fromPartial(object: {
                    creationHeight?: string | number | import("long").Long;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }): _85.RedelegationEntry;
                fromAmino(object: _85.RedelegationEntryAmino): _85.RedelegationEntry;
                toAmino(message: _85.RedelegationEntry): _85.RedelegationEntryAmino;
                fromAminoMsg(object: _85.RedelegationEntryAminoMsg): _85.RedelegationEntry;
                toAminoMsg(message: _85.RedelegationEntry): _85.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _85.RedelegationEntryProtoMsg): _85.RedelegationEntry;
                toProto(message: _85.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _85.RedelegationEntry): _85.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                encode(message: _85.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Redelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: string | number | import("long").Long;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _85.Redelegation;
                fromAmino(object: _85.RedelegationAmino): _85.Redelegation;
                toAmino(message: _85.Redelegation): _85.RedelegationAmino;
                fromAminoMsg(object: _85.RedelegationAminoMsg): _85.Redelegation;
                toAminoMsg(message: _85.Redelegation): _85.RedelegationAminoMsg;
                fromProtoMsg(message: _85.RedelegationProtoMsg): _85.Redelegation;
                toProto(message: _85.Redelegation): Uint8Array;
                toProtoMsg(message: _85.Redelegation): _85.RedelegationProtoMsg;
            };
            Params: {
                encode(message: _85.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Params;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: string | number | import("long").Long;
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                    minCommissionRate?: string;
                }): _85.Params;
                fromAmino(object: _85.ParamsAmino): _85.Params;
                toAmino(message: _85.Params): _85.ParamsAmino;
                fromAminoMsg(object: _85.ParamsAminoMsg): _85.Params;
                toAminoMsg(message: _85.Params): _85.ParamsAminoMsg;
                fromProtoMsg(message: _85.ParamsProtoMsg): _85.Params;
                toProto(message: _85.Params): Uint8Array;
                toProtoMsg(message: _85.Params): _85.ParamsProtoMsg;
            };
            DelegationResponse: {
                encode(message: _85.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DelegationResponse;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _85.DelegationResponse;
                fromAmino(object: _85.DelegationResponseAmino): _85.DelegationResponse;
                toAmino(message: _85.DelegationResponse): _85.DelegationResponseAmino;
                fromAminoMsg(object: _85.DelegationResponseAminoMsg): _85.DelegationResponse;
                toAminoMsg(message: _85.DelegationResponse): _85.DelegationResponseAminoMsg;
                fromProtoMsg(message: _85.DelegationResponseProtoMsg): _85.DelegationResponse;
                toProto(message: _85.DelegationResponse): Uint8Array;
                toProtoMsg(message: _85.DelegationResponse): _85.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                encode(message: _85.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.RedelegationEntryResponse;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: string | number | import("long").Long;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _85.RedelegationEntryResponse;
                fromAmino(object: _85.RedelegationEntryResponseAmino): _85.RedelegationEntryResponse;
                toAmino(message: _85.RedelegationEntryResponse): _85.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _85.RedelegationEntryResponseAminoMsg): _85.RedelegationEntryResponse;
                toAminoMsg(message: _85.RedelegationEntryResponse): _85.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _85.RedelegationEntryResponseProtoMsg): _85.RedelegationEntryResponse;
                toProto(message: _85.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _85.RedelegationEntryResponse): _85.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                encode(message: _85.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.RedelegationResponse;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").Long;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: string | number | import("long").Long;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _85.RedelegationResponse;
                fromAmino(object: _85.RedelegationResponseAmino): _85.RedelegationResponse;
                toAmino(message: _85.RedelegationResponse): _85.RedelegationResponseAmino;
                fromAminoMsg(object: _85.RedelegationResponseAminoMsg): _85.RedelegationResponse;
                toAminoMsg(message: _85.RedelegationResponse): _85.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _85.RedelegationResponseProtoMsg): _85.RedelegationResponse;
                toProto(message: _85.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _85.RedelegationResponse): _85.RedelegationResponseProtoMsg;
            };
            Pool: {
                encode(message: _85.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Pool;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _85.Pool;
                fromAmino(object: _85.PoolAmino): _85.Pool;
                toAmino(message: _85.Pool): _85.PoolAmino;
                fromAminoMsg(object: _85.PoolAminoMsg): _85.Pool;
                toAminoMsg(message: _85.Pool): _85.PoolAminoMsg;
                fromProtoMsg(message: _85.PoolProtoMsg): _85.Pool;
                toProto(message: _85.Pool): Uint8Array;
                toProtoMsg(message: _85.Pool): _85.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                encode(message: _84.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorsRequest;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryValidatorsRequest;
                fromAmino(object: _84.QueryValidatorsRequestAmino): _84.QueryValidatorsRequest;
                toAmino(message: _84.QueryValidatorsRequest): _84.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _84.QueryValidatorsRequestAminoMsg): _84.QueryValidatorsRequest;
                toAminoMsg(message: _84.QueryValidatorsRequest): _84.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorsRequestProtoMsg): _84.QueryValidatorsRequest;
                toProto(message: _84.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorsRequest): _84.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                encode(message: _84.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _85.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").Long;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryValidatorsResponse;
                fromAmino(object: _84.QueryValidatorsResponseAmino): _84.QueryValidatorsResponse;
                toAmino(message: _84.QueryValidatorsResponse): _84.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _84.QueryValidatorsResponseAminoMsg): _84.QueryValidatorsResponse;
                toAminoMsg(message: _84.QueryValidatorsResponse): _84.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorsResponseProtoMsg): _84.QueryValidatorsResponse;
                toProto(message: _84.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorsResponse): _84.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                encode(message: _84.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _84.QueryValidatorRequest;
                fromAmino(object: _84.QueryValidatorRequestAmino): _84.QueryValidatorRequest;
                toAmino(message: _84.QueryValidatorRequest): _84.QueryValidatorRequestAmino;
                fromAminoMsg(object: _84.QueryValidatorRequestAminoMsg): _84.QueryValidatorRequest;
                toAminoMsg(message: _84.QueryValidatorRequest): _84.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorRequestProtoMsg): _84.QueryValidatorRequest;
                toProto(message: _84.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorRequest): _84.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                encode(message: _84.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _85.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").Long;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _84.QueryValidatorResponse;
                fromAmino(object: _84.QueryValidatorResponseAmino): _84.QueryValidatorResponse;
                toAmino(message: _84.QueryValidatorResponse): _84.QueryValidatorResponseAmino;
                fromAminoMsg(object: _84.QueryValidatorResponseAminoMsg): _84.QueryValidatorResponse;
                toAminoMsg(message: _84.QueryValidatorResponse): _84.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorResponseProtoMsg): _84.QueryValidatorResponse;
                toProto(message: _84.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorResponse): _84.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _84.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryValidatorDelegationsRequest;
                fromAmino(object: _84.QueryValidatorDelegationsRequestAmino): _84.QueryValidatorDelegationsRequest;
                toAmino(message: _84.QueryValidatorDelegationsRequest): _84.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _84.QueryValidatorDelegationsRequestAminoMsg): _84.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _84.QueryValidatorDelegationsRequest): _84.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorDelegationsRequestProtoMsg): _84.QueryValidatorDelegationsRequest;
                toProto(message: _84.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorDelegationsRequest): _84.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _84.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryValidatorDelegationsResponse;
                fromAmino(object: _84.QueryValidatorDelegationsResponseAmino): _84.QueryValidatorDelegationsResponse;
                toAmino(message: _84.QueryValidatorDelegationsResponse): _84.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _84.QueryValidatorDelegationsResponseAminoMsg): _84.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _84.QueryValidatorDelegationsResponse): _84.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorDelegationsResponseProtoMsg): _84.QueryValidatorDelegationsResponse;
                toProto(message: _84.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorDelegationsResponse): _84.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _84.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _84.QueryValidatorUnbondingDelegationsRequestAmino): _84.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _84.QueryValidatorUnbondingDelegationsRequest): _84.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _84.QueryValidatorUnbondingDelegationsRequestAminoMsg): _84.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _84.QueryValidatorUnbondingDelegationsRequest): _84.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorUnbondingDelegationsRequestProtoMsg): _84.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _84.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorUnbondingDelegationsRequest): _84.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _84.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").Long;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _84.QueryValidatorUnbondingDelegationsResponseAmino): _84.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _84.QueryValidatorUnbondingDelegationsResponse): _84.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _84.QueryValidatorUnbondingDelegationsResponseAminoMsg): _84.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _84.QueryValidatorUnbondingDelegationsResponse): _84.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryValidatorUnbondingDelegationsResponseProtoMsg): _84.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _84.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryValidatorUnbondingDelegationsResponse): _84.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                encode(message: _84.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _84.QueryDelegationRequest;
                fromAmino(object: _84.QueryDelegationRequestAmino): _84.QueryDelegationRequest;
                toAmino(message: _84.QueryDelegationRequest): _84.QueryDelegationRequestAmino;
                fromAminoMsg(object: _84.QueryDelegationRequestAminoMsg): _84.QueryDelegationRequest;
                toAminoMsg(message: _84.QueryDelegationRequest): _84.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDelegationRequestProtoMsg): _84.QueryDelegationRequest;
                toProto(message: _84.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDelegationRequest): _84.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                encode(message: _84.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegationResponse;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _84.QueryDelegationResponse;
                fromAmino(object: _84.QueryDelegationResponseAmino): _84.QueryDelegationResponse;
                toAmino(message: _84.QueryDelegationResponse): _84.QueryDelegationResponseAmino;
                fromAminoMsg(object: _84.QueryDelegationResponseAminoMsg): _84.QueryDelegationResponse;
                toAminoMsg(message: _84.QueryDelegationResponse): _84.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDelegationResponseProtoMsg): _84.QueryDelegationResponse;
                toProto(message: _84.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDelegationResponse): _84.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _84.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryUnbondingDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _84.QueryUnbondingDelegationRequest;
                fromAmino(object: _84.QueryUnbondingDelegationRequestAmino): _84.QueryUnbondingDelegationRequest;
                toAmino(message: _84.QueryUnbondingDelegationRequest): _84.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _84.QueryUnbondingDelegationRequestAminoMsg): _84.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _84.QueryUnbondingDelegationRequest): _84.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _84.QueryUnbondingDelegationRequestProtoMsg): _84.QueryUnbondingDelegationRequest;
                toProto(message: _84.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _84.QueryUnbondingDelegationRequest): _84.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _84.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryUnbondingDelegationResponse;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").Long;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _84.QueryUnbondingDelegationResponse;
                fromAmino(object: _84.QueryUnbondingDelegationResponseAmino): _84.QueryUnbondingDelegationResponse;
                toAmino(message: _84.QueryUnbondingDelegationResponse): _84.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _84.QueryUnbondingDelegationResponseAminoMsg): _84.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _84.QueryUnbondingDelegationResponse): _84.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _84.QueryUnbondingDelegationResponseProtoMsg): _84.QueryUnbondingDelegationResponse;
                toProto(message: _84.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _84.QueryUnbondingDelegationResponse): _84.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _84.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryDelegatorDelegationsRequest;
                fromAmino(object: _84.QueryDelegatorDelegationsRequestAmino): _84.QueryDelegatorDelegationsRequest;
                toAmino(message: _84.QueryDelegatorDelegationsRequest): _84.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _84.QueryDelegatorDelegationsRequestAminoMsg): _84.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _84.QueryDelegatorDelegationsRequest): _84.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorDelegationsRequestProtoMsg): _84.QueryDelegatorDelegationsRequest;
                toProto(message: _84.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorDelegationsRequest): _84.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _84.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryDelegatorDelegationsResponse;
                fromAmino(object: _84.QueryDelegatorDelegationsResponseAmino): _84.QueryDelegatorDelegationsResponse;
                toAmino(message: _84.QueryDelegatorDelegationsResponse): _84.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _84.QueryDelegatorDelegationsResponseAminoMsg): _84.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _84.QueryDelegatorDelegationsResponse): _84.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorDelegationsResponseProtoMsg): _84.QueryDelegatorDelegationsResponse;
                toProto(message: _84.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorDelegationsResponse): _84.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _84.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _84.QueryDelegatorUnbondingDelegationsRequestAmino): _84.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _84.QueryDelegatorUnbondingDelegationsRequest): _84.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _84.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _84.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _84.QueryDelegatorUnbondingDelegationsRequest): _84.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _84.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _84.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorUnbondingDelegationsRequest): _84.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _84.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").Long;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _84.QueryDelegatorUnbondingDelegationsResponseAmino): _84.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _84.QueryDelegatorUnbondingDelegationsResponse): _84.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _84.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _84.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _84.QueryDelegatorUnbondingDelegationsResponse): _84.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _84.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _84.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorUnbondingDelegationsResponse): _84.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                encode(message: _84.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryRedelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryRedelegationsRequest;
                fromAmino(object: _84.QueryRedelegationsRequestAmino): _84.QueryRedelegationsRequest;
                toAmino(message: _84.QueryRedelegationsRequest): _84.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _84.QueryRedelegationsRequestAminoMsg): _84.QueryRedelegationsRequest;
                toAminoMsg(message: _84.QueryRedelegationsRequest): _84.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryRedelegationsRequestProtoMsg): _84.QueryRedelegationsRequest;
                toProto(message: _84.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryRedelegationsRequest): _84.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                encode(message: _84.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryRedelegationsResponse;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: string | number | import("long").Long;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: string | number | import("long").Long;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryRedelegationsResponse;
                fromAmino(object: _84.QueryRedelegationsResponseAmino): _84.QueryRedelegationsResponse;
                toAmino(message: _84.QueryRedelegationsResponse): _84.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _84.QueryRedelegationsResponseAminoMsg): _84.QueryRedelegationsResponse;
                toAminoMsg(message: _84.QueryRedelegationsResponse): _84.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryRedelegationsResponseProtoMsg): _84.QueryRedelegationsResponse;
                toProto(message: _84.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryRedelegationsResponse): _84.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _84.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryDelegatorValidatorsRequest;
                fromAmino(object: _84.QueryDelegatorValidatorsRequestAmino): _84.QueryDelegatorValidatorsRequest;
                toAmino(message: _84.QueryDelegatorValidatorsRequest): _84.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _84.QueryDelegatorValidatorsRequestAminoMsg): _84.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _84.QueryDelegatorValidatorsRequest): _84.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorValidatorsRequestProtoMsg): _84.QueryDelegatorValidatorsRequest;
                toProto(message: _84.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorValidatorsRequest): _84.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _84.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _85.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").Long;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _84.QueryDelegatorValidatorsResponse;
                fromAmino(object: _84.QueryDelegatorValidatorsResponseAmino): _84.QueryDelegatorValidatorsResponse;
                toAmino(message: _84.QueryDelegatorValidatorsResponse): _84.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _84.QueryDelegatorValidatorsResponseAminoMsg): _84.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _84.QueryDelegatorValidatorsResponse): _84.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorValidatorsResponseProtoMsg): _84.QueryDelegatorValidatorsResponse;
                toProto(message: _84.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorValidatorsResponse): _84.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _84.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _84.QueryDelegatorValidatorRequest;
                fromAmino(object: _84.QueryDelegatorValidatorRequestAmino): _84.QueryDelegatorValidatorRequest;
                toAmino(message: _84.QueryDelegatorValidatorRequest): _84.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _84.QueryDelegatorValidatorRequestAminoMsg): _84.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _84.QueryDelegatorValidatorRequest): _84.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorValidatorRequestProtoMsg): _84.QueryDelegatorValidatorRequest;
                toProto(message: _84.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorValidatorRequest): _84.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _84.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _85.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").Long;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _84.QueryDelegatorValidatorResponse;
                fromAmino(object: _84.QueryDelegatorValidatorResponseAmino): _84.QueryDelegatorValidatorResponse;
                toAmino(message: _84.QueryDelegatorValidatorResponse): _84.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _84.QueryDelegatorValidatorResponseAminoMsg): _84.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _84.QueryDelegatorValidatorResponse): _84.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _84.QueryDelegatorValidatorResponseProtoMsg): _84.QueryDelegatorValidatorResponse;
                toProto(message: _84.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _84.QueryDelegatorValidatorResponse): _84.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _84.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryHistoricalInfoRequest;
                fromPartial(object: {
                    height?: string | number | import("long").Long;
                }): _84.QueryHistoricalInfoRequest;
                fromAmino(object: _84.QueryHistoricalInfoRequestAmino): _84.QueryHistoricalInfoRequest;
                toAmino(message: _84.QueryHistoricalInfoRequest): _84.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _84.QueryHistoricalInfoRequestAminoMsg): _84.QueryHistoricalInfoRequest;
                toAminoMsg(message: _84.QueryHistoricalInfoRequest): _84.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _84.QueryHistoricalInfoRequestProtoMsg): _84.QueryHistoricalInfoRequest;
                toProto(message: _84.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _84.QueryHistoricalInfoRequest): _84.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _84.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryHistoricalInfoResponse;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").Long;
                                app?: string | number | import("long").Long;
                            };
                            chainId?: string;
                            height?: string | number | import("long").Long;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _85.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: string | number | import("long").Long;
                            unbondingTime?: Date;
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: Date;
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _84.QueryHistoricalInfoResponse;
                fromAmino(object: _84.QueryHistoricalInfoResponseAmino): _84.QueryHistoricalInfoResponse;
                toAmino(message: _84.QueryHistoricalInfoResponse): _84.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _84.QueryHistoricalInfoResponseAminoMsg): _84.QueryHistoricalInfoResponse;
                toAminoMsg(message: _84.QueryHistoricalInfoResponse): _84.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _84.QueryHistoricalInfoResponseProtoMsg): _84.QueryHistoricalInfoResponse;
                toProto(message: _84.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _84.QueryHistoricalInfoResponse): _84.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                encode(_: _84.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryPoolRequest;
                fromPartial(_: {}): _84.QueryPoolRequest;
                fromAmino(_: _84.QueryPoolRequestAmino): _84.QueryPoolRequest;
                toAmino(_: _84.QueryPoolRequest): _84.QueryPoolRequestAmino;
                fromAminoMsg(object: _84.QueryPoolRequestAminoMsg): _84.QueryPoolRequest;
                toAminoMsg(message: _84.QueryPoolRequest): _84.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _84.QueryPoolRequestProtoMsg): _84.QueryPoolRequest;
                toProto(message: _84.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _84.QueryPoolRequest): _84.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                encode(message: _84.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryPoolResponse;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _84.QueryPoolResponse;
                fromAmino(object: _84.QueryPoolResponseAmino): _84.QueryPoolResponse;
                toAmino(message: _84.QueryPoolResponse): _84.QueryPoolResponseAmino;
                fromAminoMsg(object: _84.QueryPoolResponseAminoMsg): _84.QueryPoolResponse;
                toAminoMsg(message: _84.QueryPoolResponse): _84.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _84.QueryPoolResponseProtoMsg): _84.QueryPoolResponse;
                toProto(message: _84.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _84.QueryPoolResponse): _84.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _84.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsRequest;
                fromPartial(_: {}): _84.QueryParamsRequest;
                fromAmino(_: _84.QueryParamsRequestAmino): _84.QueryParamsRequest;
                toAmino(_: _84.QueryParamsRequest): _84.QueryParamsRequestAmino;
                fromAminoMsg(object: _84.QueryParamsRequestAminoMsg): _84.QueryParamsRequest;
                toAminoMsg(message: _84.QueryParamsRequest): _84.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _84.QueryParamsRequestProtoMsg): _84.QueryParamsRequest;
                toProto(message: _84.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _84.QueryParamsRequest): _84.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _84.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                }): _84.QueryParamsResponse;
                fromAmino(object: _84.QueryParamsResponseAmino): _84.QueryParamsResponse;
                toAmino(message: _84.QueryParamsResponse): _84.QueryParamsResponseAmino;
                fromAminoMsg(object: _84.QueryParamsResponseAminoMsg): _84.QueryParamsResponse;
                toAminoMsg(message: _84.QueryParamsResponse): _84.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _84.QueryParamsResponseProtoMsg): _84.QueryParamsResponse;
                toProto(message: _84.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _84.QueryParamsResponse): _84.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GenesisState;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: string | number | import("long").Long;
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _85.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").Long;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").Long;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").Long;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _83.GenesisState;
                fromAmino(object: _83.GenesisStateAmino): _83.GenesisState;
                toAmino(message: _83.GenesisState): _83.GenesisStateAmino;
                fromAminoMsg(object: _83.GenesisStateAminoMsg): _83.GenesisState;
                toAminoMsg(message: _83.GenesisState): _83.GenesisStateAminoMsg;
                fromProtoMsg(message: _83.GenesisStateProtoMsg): _83.GenesisState;
                toProto(message: _83.GenesisState): Uint8Array;
                toProtoMsg(message: _83.GenesisState): _83.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                encode(message: _83.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.LastValidatorPower;
                fromPartial(object: {
                    address?: string;
                    power?: string | number | import("long").Long;
                }): _83.LastValidatorPower;
                fromAmino(object: _83.LastValidatorPowerAmino): _83.LastValidatorPower;
                toAmino(message: _83.LastValidatorPower): _83.LastValidatorPowerAmino;
                fromAminoMsg(object: _83.LastValidatorPowerAminoMsg): _83.LastValidatorPower;
                toAminoMsg(message: _83.LastValidatorPower): _83.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _83.LastValidatorPowerProtoMsg): _83.LastValidatorPower;
                toProto(message: _83.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _83.LastValidatorPower): _83.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _82.AuthorizationType;
            authorizationTypeToJSON(object: _82.AuthorizationType): string;
            AuthorizationType: typeof _82.AuthorizationType;
            AuthorizationTypeSDKType: typeof _82.AuthorizationType;
            AuthorizationTypeAmino: typeof _82.AuthorizationType;
            StakeAuthorization: {
                encode(message: _82.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.StakeAuthorization;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _82.AuthorizationType;
                }): _82.StakeAuthorization;
                fromAmino(object: _82.StakeAuthorizationAmino): _82.StakeAuthorization;
                toAmino(message: _82.StakeAuthorization): _82.StakeAuthorizationAmino;
                fromAminoMsg(object: _82.StakeAuthorizationAminoMsg): _82.StakeAuthorization;
                toAminoMsg(message: _82.StakeAuthorization): _82.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _82.StakeAuthorizationProtoMsg): _82.StakeAuthorization;
                toProto(message: _82.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _82.StakeAuthorization): _82.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                encode(message: _82.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.StakeAuthorization_Validators;
                fromPartial(object: {
                    address?: string[];
                }): _82.StakeAuthorization_Validators;
                fromAmino(object: _82.StakeAuthorization_ValidatorsAmino): _82.StakeAuthorization_Validators;
                toAmino(message: _82.StakeAuthorization_Validators): _82.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _82.StakeAuthorization_ValidatorsAminoMsg): _82.StakeAuthorization_Validators;
                toAminoMsg(message: _82.StakeAuthorization_Validators): _82.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _82.StakeAuthorization_ValidatorsProtoMsg): _82.StakeAuthorization_Validators;
                toProto(message: _82.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _82.StakeAuthorization_Validators): _82.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _87.SignMode;
                signModeToJSON(object: _87.SignMode): string;
                SignMode: typeof _87.SignMode;
                SignModeSDKType: typeof _87.SignMode;
                SignModeAmino: typeof _87.SignMode;
                SignatureDescriptors: {
                    encode(message: _87.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptors;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _87.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: string | number | import("long").Long;
                        }[];
                    }): _87.SignatureDescriptors;
                    fromAmino(object: _87.SignatureDescriptorsAmino): _87.SignatureDescriptors;
                    toAmino(message: _87.SignatureDescriptors): _87.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _87.SignatureDescriptorsAminoMsg): _87.SignatureDescriptors;
                    toAminoMsg(message: _87.SignatureDescriptors): _87.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _87.SignatureDescriptorsProtoMsg): _87.SignatureDescriptors;
                    toProto(message: _87.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _87.SignatureDescriptors): _87.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    encode(message: _87.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _87.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: string | number | import("long").Long;
                    }): _87.SignatureDescriptor;
                    fromAmino(object: _87.SignatureDescriptorAmino): _87.SignatureDescriptor;
                    toAmino(message: _87.SignatureDescriptor): _87.SignatureDescriptorAmino;
                    fromAminoMsg(object: _87.SignatureDescriptorAminoMsg): _87.SignatureDescriptor;
                    toAminoMsg(message: _87.SignatureDescriptor): _87.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _87.SignatureDescriptorProtoMsg): _87.SignatureDescriptor;
                    toProto(message: _87.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _87.SignatureDescriptor): _87.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    encode(message: _87.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor_Data;
                    fromPartial(object: {
                        single?: {
                            mode?: _87.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _87.SignatureDescriptor_Data;
                    fromAmino(object: _87.SignatureDescriptor_DataAmino): _87.SignatureDescriptor_Data;
                    toAmino(message: _87.SignatureDescriptor_Data): _87.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _87.SignatureDescriptor_DataAminoMsg): _87.SignatureDescriptor_Data;
                    toAminoMsg(message: _87.SignatureDescriptor_Data): _87.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _87.SignatureDescriptor_DataProtoMsg): _87.SignatureDescriptor_Data;
                    toProto(message: _87.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _87.SignatureDescriptor_Data): _87.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _87.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor_Data_Single;
                    fromPartial(object: {
                        mode?: _87.SignMode;
                        signature?: Uint8Array;
                    }): _87.SignatureDescriptor_Data_Single;
                    fromAmino(object: _87.SignatureDescriptor_Data_SingleAmino): _87.SignatureDescriptor_Data_Single;
                    toAmino(message: _87.SignatureDescriptor_Data_Single): _87.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _87.SignatureDescriptor_Data_SingleAminoMsg): _87.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _87.SignatureDescriptor_Data_Single): _87.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _87.SignatureDescriptor_Data_SingleProtoMsg): _87.SignatureDescriptor_Data_Single;
                    toProto(message: _87.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _87.SignatureDescriptor_Data_Single): _87.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _87.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor_Data_Multi;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: {
                            single?: {
                                mode?: _87.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: any;
                        }[];
                    }): _87.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _87.SignatureDescriptor_Data_MultiAmino): _87.SignatureDescriptor_Data_Multi;
                    toAmino(message: _87.SignatureDescriptor_Data_Multi): _87.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _87.SignatureDescriptor_Data_MultiAminoMsg): _87.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _87.SignatureDescriptor_Data_Multi): _87.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _87.SignatureDescriptor_Data_MultiProtoMsg): _87.SignatureDescriptor_Data_Multi;
                    toProto(message: _87.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _87.SignatureDescriptor_Data_Multi): _87.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _222.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _88.SimulateRequest): Promise<_88.SimulateResponse>;
                getTx(request: _88.GetTxRequest): Promise<_88.GetTxResponse>;
                broadcastTx(request: _88.BroadcastTxRequest): Promise<_88.BroadcastTxResponse>;
                getTxsEvent(request: _88.GetTxsEventRequest): Promise<_88.GetTxsEventResponse>;
                getBlockWithTxs(request: _88.GetBlockWithTxsRequest): Promise<_88.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _89.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Tx;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: string | number | import("long").Long;
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _87.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: string | number | import("long").Long;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: string | number | import("long").Long;
                            payer?: string;
                            granter?: string;
                        };
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _89.Tx;
                fromAmino(object: _89.TxAmino): _89.Tx;
                toAmino(message: _89.Tx): _89.TxAmino;
                fromAminoMsg(object: _89.TxAminoMsg): _89.Tx;
                toAminoMsg(message: _89.Tx): _89.TxAminoMsg;
                fromProtoMsg(message: _89.TxProtoMsg): _89.Tx;
                toProto(message: _89.Tx): Uint8Array;
                toProtoMsg(message: _89.Tx): _89.TxProtoMsg;
            };
            TxRaw: {
                encode(message: _89.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.TxRaw;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _89.TxRaw;
                fromAmino(object: _89.TxRawAmino): _89.TxRaw;
                toAmino(message: _89.TxRaw): _89.TxRawAmino;
                fromAminoMsg(object: _89.TxRawAminoMsg): _89.TxRaw;
                toAminoMsg(message: _89.TxRaw): _89.TxRawAminoMsg;
                fromProtoMsg(message: _89.TxRawProtoMsg): _89.TxRaw;
                toProto(message: _89.TxRaw): Uint8Array;
                toProtoMsg(message: _89.TxRaw): _89.TxRawProtoMsg;
            };
            SignDoc: {
                encode(message: _89.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignDoc;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: string | number | import("long").Long;
                }): _89.SignDoc;
                fromAmino(object: _89.SignDocAmino): _89.SignDoc;
                toAmino(message: _89.SignDoc): _89.SignDocAmino;
                fromAminoMsg(object: _89.SignDocAminoMsg): _89.SignDoc;
                toAminoMsg(message: _89.SignDoc): _89.SignDocAminoMsg;
                fromProtoMsg(message: _89.SignDocProtoMsg): _89.SignDoc;
                toProto(message: _89.SignDoc): Uint8Array;
                toProtoMsg(message: _89.SignDoc): _89.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                encode(message: _89.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignDocDirectAux;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    chainId?: string;
                    accountNumber?: string | number | import("long").Long;
                    sequence?: string | number | import("long").Long;
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _89.SignDocDirectAux;
                fromAmino(object: _89.SignDocDirectAuxAmino): _89.SignDocDirectAux;
                toAmino(message: _89.SignDocDirectAux): _89.SignDocDirectAuxAmino;
                fromAminoMsg(object: _89.SignDocDirectAuxAminoMsg): _89.SignDocDirectAux;
                toAminoMsg(message: _89.SignDocDirectAux): _89.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _89.SignDocDirectAuxProtoMsg): _89.SignDocDirectAux;
                toProto(message: _89.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _89.SignDocDirectAux): _89.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                encode(message: _89.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.TxBody;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: string | number | import("long").Long;
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _89.TxBody;
                fromAmino(object: _89.TxBodyAmino): _89.TxBody;
                toAmino(message: _89.TxBody): _89.TxBodyAmino;
                fromAminoMsg(object: _89.TxBodyAminoMsg): _89.TxBody;
                toAminoMsg(message: _89.TxBody): _89.TxBodyAminoMsg;
                fromProtoMsg(message: _89.TxBodyProtoMsg): _89.TxBody;
                toProto(message: _89.TxBody): Uint8Array;
                toProtoMsg(message: _89.TxBody): _89.TxBodyProtoMsg;
            };
            AuthInfo: {
                encode(message: _89.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.AuthInfo;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _87.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: string | number | import("long").Long;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: string | number | import("long").Long;
                        payer?: string;
                        granter?: string;
                    };
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _89.AuthInfo;
                fromAmino(object: _89.AuthInfoAmino): _89.AuthInfo;
                toAmino(message: _89.AuthInfo): _89.AuthInfoAmino;
                fromAminoMsg(object: _89.AuthInfoAminoMsg): _89.AuthInfo;
                toAminoMsg(message: _89.AuthInfo): _89.AuthInfoAminoMsg;
                fromProtoMsg(message: _89.AuthInfoProtoMsg): _89.AuthInfo;
                toProto(message: _89.AuthInfo): Uint8Array;
                toProtoMsg(message: _89.AuthInfo): _89.AuthInfoProtoMsg;
            };
            SignerInfo: {
                encode(message: _89.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignerInfo;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _87.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: string | number | import("long").Long;
                }): _89.SignerInfo;
                fromAmino(object: _89.SignerInfoAmino): _89.SignerInfo;
                toAmino(message: _89.SignerInfo): _89.SignerInfoAmino;
                fromAminoMsg(object: _89.SignerInfoAminoMsg): _89.SignerInfo;
                toAminoMsg(message: _89.SignerInfo): _89.SignerInfoAminoMsg;
                fromProtoMsg(message: _89.SignerInfoProtoMsg): _89.SignerInfo;
                toProto(message: _89.SignerInfo): Uint8Array;
                toProtoMsg(message: _89.SignerInfo): _89.SignerInfoProtoMsg;
            };
            ModeInfo: {
                encode(message: _89.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ModeInfo;
                fromPartial(object: {
                    single?: {
                        mode?: _87.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _89.ModeInfo;
                fromAmino(object: _89.ModeInfoAmino): _89.ModeInfo;
                toAmino(message: _89.ModeInfo): _89.ModeInfoAmino;
                fromAminoMsg(object: _89.ModeInfoAminoMsg): _89.ModeInfo;
                toAminoMsg(message: _89.ModeInfo): _89.ModeInfoAminoMsg;
                fromProtoMsg(message: _89.ModeInfoProtoMsg): _89.ModeInfo;
                toProto(message: _89.ModeInfo): Uint8Array;
                toProtoMsg(message: _89.ModeInfo): _89.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                encode(message: _89.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ModeInfo_Single;
                fromPartial(object: {
                    mode?: _87.SignMode;
                }): _89.ModeInfo_Single;
                fromAmino(object: _89.ModeInfo_SingleAmino): _89.ModeInfo_Single;
                toAmino(message: _89.ModeInfo_Single): _89.ModeInfo_SingleAmino;
                fromAminoMsg(object: _89.ModeInfo_SingleAminoMsg): _89.ModeInfo_Single;
                toAminoMsg(message: _89.ModeInfo_Single): _89.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _89.ModeInfo_SingleProtoMsg): _89.ModeInfo_Single;
                toProto(message: _89.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _89.ModeInfo_Single): _89.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                encode(message: _89.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ModeInfo_Multi;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: {
                        single?: {
                            mode?: _87.SignMode;
                        };
                        multi?: any;
                    }[];
                }): _89.ModeInfo_Multi;
                fromAmino(object: _89.ModeInfo_MultiAmino): _89.ModeInfo_Multi;
                toAmino(message: _89.ModeInfo_Multi): _89.ModeInfo_MultiAmino;
                fromAminoMsg(object: _89.ModeInfo_MultiAminoMsg): _89.ModeInfo_Multi;
                toAminoMsg(message: _89.ModeInfo_Multi): _89.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _89.ModeInfo_MultiProtoMsg): _89.ModeInfo_Multi;
                toProto(message: _89.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _89.ModeInfo_Multi): _89.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                encode(message: _89.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Fee;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: string | number | import("long").Long;
                    payer?: string;
                    granter?: string;
                }): _89.Fee;
                fromAmino(object: _89.FeeAmino): _89.Fee;
                toAmino(message: _89.Fee): _89.FeeAmino;
                fromAminoMsg(object: _89.FeeAminoMsg): _89.Fee;
                toAminoMsg(message: _89.Fee): _89.FeeAminoMsg;
                fromProtoMsg(message: _89.FeeProtoMsg): _89.Fee;
                toProto(message: _89.Fee): Uint8Array;
                toProtoMsg(message: _89.Fee): _89.FeeProtoMsg;
            };
            Tip: {
                encode(message: _89.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Tip;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _89.Tip;
                fromAmino(object: _89.TipAmino): _89.Tip;
                toAmino(message: _89.Tip): _89.TipAmino;
                fromAminoMsg(object: _89.TipAminoMsg): _89.Tip;
                toAminoMsg(message: _89.Tip): _89.TipAminoMsg;
                fromProtoMsg(message: _89.TipProtoMsg): _89.Tip;
                toProto(message: _89.Tip): Uint8Array;
                toProtoMsg(message: _89.Tip): _89.TipProtoMsg;
            };
            AuxSignerData: {
                encode(message: _89.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.AuxSignerData;
                fromPartial(object: {
                    address?: string;
                    signDoc?: {
                        bodyBytes?: Uint8Array;
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        chainId?: string;
                        accountNumber?: string | number | import("long").Long;
                        sequence?: string | number | import("long").Long;
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _87.SignMode;
                    sig?: Uint8Array;
                }): _89.AuxSignerData;
                fromAmino(object: _89.AuxSignerDataAmino): _89.AuxSignerData;
                toAmino(message: _89.AuxSignerData): _89.AuxSignerDataAmino;
                fromAminoMsg(object: _89.AuxSignerDataAminoMsg): _89.AuxSignerData;
                toAminoMsg(message: _89.AuxSignerData): _89.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _89.AuxSignerDataProtoMsg): _89.AuxSignerData;
                toProto(message: _89.AuxSignerData): Uint8Array;
                toProtoMsg(message: _89.AuxSignerData): _89.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _88.OrderBy;
            orderByToJSON(object: _88.OrderBy): string;
            broadcastModeFromJSON(object: any): _88.BroadcastMode;
            broadcastModeToJSON(object: _88.BroadcastMode): string;
            OrderBy: typeof _88.OrderBy;
            OrderBySDKType: typeof _88.OrderBy;
            OrderByAmino: typeof _88.OrderBy;
            BroadcastMode: typeof _88.BroadcastMode;
            BroadcastModeSDKType: typeof _88.BroadcastMode;
            BroadcastModeAmino: typeof _88.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _88.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxsEventRequest;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _88.OrderBy;
                }): _88.GetTxsEventRequest;
                fromAmino(object: _88.GetTxsEventRequestAmino): _88.GetTxsEventRequest;
                toAmino(message: _88.GetTxsEventRequest): _88.GetTxsEventRequestAmino;
                fromAminoMsg(object: _88.GetTxsEventRequestAminoMsg): _88.GetTxsEventRequest;
                toAminoMsg(message: _88.GetTxsEventRequest): _88.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _88.GetTxsEventRequestProtoMsg): _88.GetTxsEventRequest;
                toProto(message: _88.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _88.GetTxsEventRequest): _88.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                encode(message: _88.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxsEventResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").Long;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _87.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").Long;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").Long;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: {
                        height?: string | number | import("long").Long;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").Long;
                        gasUsed?: string | number | import("long").Long;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _88.GetTxsEventResponse;
                fromAmino(object: _88.GetTxsEventResponseAmino): _88.GetTxsEventResponse;
                toAmino(message: _88.GetTxsEventResponse): _88.GetTxsEventResponseAmino;
                fromAminoMsg(object: _88.GetTxsEventResponseAminoMsg): _88.GetTxsEventResponse;
                toAminoMsg(message: _88.GetTxsEventResponse): _88.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _88.GetTxsEventResponseProtoMsg): _88.GetTxsEventResponse;
                toProto(message: _88.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _88.GetTxsEventResponse): _88.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                encode(message: _88.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.BroadcastTxRequest;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _88.BroadcastMode;
                }): _88.BroadcastTxRequest;
                fromAmino(object: _88.BroadcastTxRequestAmino): _88.BroadcastTxRequest;
                toAmino(message: _88.BroadcastTxRequest): _88.BroadcastTxRequestAmino;
                fromAminoMsg(object: _88.BroadcastTxRequestAminoMsg): _88.BroadcastTxRequest;
                toAminoMsg(message: _88.BroadcastTxRequest): _88.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _88.BroadcastTxRequestProtoMsg): _88.BroadcastTxRequest;
                toProto(message: _88.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _88.BroadcastTxRequest): _88.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                encode(message: _88.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.BroadcastTxResponse;
                fromPartial(object: {
                    txResponse?: {
                        height?: string | number | import("long").Long;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").Long;
                        gasUsed?: string | number | import("long").Long;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _88.BroadcastTxResponse;
                fromAmino(object: _88.BroadcastTxResponseAmino): _88.BroadcastTxResponse;
                toAmino(message: _88.BroadcastTxResponse): _88.BroadcastTxResponseAmino;
                fromAminoMsg(object: _88.BroadcastTxResponseAminoMsg): _88.BroadcastTxResponse;
                toAminoMsg(message: _88.BroadcastTxResponse): _88.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _88.BroadcastTxResponseProtoMsg): _88.BroadcastTxResponse;
                toProto(message: _88.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _88.BroadcastTxResponse): _88.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                encode(message: _88.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SimulateRequest;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").Long;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _87.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").Long;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").Long;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _88.SimulateRequest;
                fromAmino(object: _88.SimulateRequestAmino): _88.SimulateRequest;
                toAmino(message: _88.SimulateRequest): _88.SimulateRequestAmino;
                fromAminoMsg(object: _88.SimulateRequestAminoMsg): _88.SimulateRequest;
                toAminoMsg(message: _88.SimulateRequest): _88.SimulateRequestAminoMsg;
                fromProtoMsg(message: _88.SimulateRequestProtoMsg): _88.SimulateRequest;
                toProto(message: _88.SimulateRequest): Uint8Array;
                toProtoMsg(message: _88.SimulateRequest): _88.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                encode(message: _88.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SimulateResponse;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: string | number | import("long").Long;
                        gasUsed?: string | number | import("long").Long;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _88.SimulateResponse;
                fromAmino(object: _88.SimulateResponseAmino): _88.SimulateResponse;
                toAmino(message: _88.SimulateResponse): _88.SimulateResponseAmino;
                fromAminoMsg(object: _88.SimulateResponseAminoMsg): _88.SimulateResponse;
                toAminoMsg(message: _88.SimulateResponse): _88.SimulateResponseAminoMsg;
                fromProtoMsg(message: _88.SimulateResponseProtoMsg): _88.SimulateResponse;
                toProto(message: _88.SimulateResponse): Uint8Array;
                toProtoMsg(message: _88.SimulateResponse): _88.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                encode(message: _88.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxRequest;
                fromPartial(object: {
                    hash?: string;
                }): _88.GetTxRequest;
                fromAmino(object: _88.GetTxRequestAmino): _88.GetTxRequest;
                toAmino(message: _88.GetTxRequest): _88.GetTxRequestAmino;
                fromAminoMsg(object: _88.GetTxRequestAminoMsg): _88.GetTxRequest;
                toAminoMsg(message: _88.GetTxRequest): _88.GetTxRequestAminoMsg;
                fromProtoMsg(message: _88.GetTxRequestProtoMsg): _88.GetTxRequest;
                toProto(message: _88.GetTxRequest): Uint8Array;
                toProtoMsg(message: _88.GetTxRequest): _88.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                encode(message: _88.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxResponse;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").Long;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _87.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").Long;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").Long;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: string | number | import("long").Long;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").Long;
                        gasUsed?: string | number | import("long").Long;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _88.GetTxResponse;
                fromAmino(object: _88.GetTxResponseAmino): _88.GetTxResponse;
                toAmino(message: _88.GetTxResponse): _88.GetTxResponseAmino;
                fromAminoMsg(object: _88.GetTxResponseAminoMsg): _88.GetTxResponse;
                toAminoMsg(message: _88.GetTxResponse): _88.GetTxResponseAminoMsg;
                fromProtoMsg(message: _88.GetTxResponseProtoMsg): _88.GetTxResponse;
                toProto(message: _88.GetTxResponse): Uint8Array;
                toProtoMsg(message: _88.GetTxResponse): _88.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                encode(message: _88.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetBlockWithTxsRequest;
                fromPartial(object: {
                    height?: string | number | import("long").Long;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _88.GetBlockWithTxsRequest;
                fromAmino(object: _88.GetBlockWithTxsRequestAmino): _88.GetBlockWithTxsRequest;
                toAmino(message: _88.GetBlockWithTxsRequest): _88.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _88.GetBlockWithTxsRequestAminoMsg): _88.GetBlockWithTxsRequest;
                toAminoMsg(message: _88.GetBlockWithTxsRequest): _88.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _88.GetBlockWithTxsRequestProtoMsg): _88.GetBlockWithTxsRequest;
                toProto(message: _88.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _88.GetBlockWithTxsRequest): _88.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                encode(message: _88.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetBlockWithTxsResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").Long;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _87.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").Long;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").Long;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").Long;
                                app?: string | number | import("long").Long;
                            };
                            chainId?: string;
                            height?: string | number | import("long").Long;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: string | number | import("long").Long;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    voteB?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: string | number | import("long").Long;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    totalVotingPower?: string | number | import("long").Long;
                                    validatorPower?: string | number | import("long").Long;
                                    timestamp?: Date;
                                };
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: string | number | import("long").Long;
                                                    app?: string | number | import("long").Long;
                                                };
                                                chainId?: string;
                                                height?: string | number | import("long").Long;
                                                time?: Date;
                                                lastBlockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                lastCommitHash?: Uint8Array;
                                                dataHash?: Uint8Array;
                                                validatorsHash?: Uint8Array;
                                                nextValidatorsHash?: Uint8Array;
                                                consensusHash?: Uint8Array;
                                                appHash?: Uint8Array;
                                                lastResultsHash?: Uint8Array;
                                                evidenceHash?: Uint8Array;
                                                proposerAddress?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: string | number | import("long").Long;
                                                round?: number;
                                                blockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validatorAddress?: Uint8Array;
                                                    timestamp?: Date;
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: string | number | import("long").Long;
                                                proposerPriority?: string | number | import("long").Long;
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: string | number | import("long").Long;
                                                proposerPriority?: string | number | import("long").Long;
                                            };
                                            totalVotingPower?: string | number | import("long").Long;
                                        };
                                    };
                                    commonHeight?: string | number | import("long").Long;
                                    byzantineValidators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string | number | import("long").Long;
                                        proposerPriority?: string | number | import("long").Long;
                                    }[];
                                    totalVotingPower?: string | number | import("long").Long;
                                    timestamp?: Date;
                                };
                            }[];
                        };
                        lastCommit?: {
                            height?: string | number | import("long").Long;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _88.GetBlockWithTxsResponse;
                fromAmino(object: _88.GetBlockWithTxsResponseAmino): _88.GetBlockWithTxsResponse;
                toAmino(message: _88.GetBlockWithTxsResponse): _88.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _88.GetBlockWithTxsResponseAminoMsg): _88.GetBlockWithTxsResponse;
                toAminoMsg(message: _88.GetBlockWithTxsResponse): _88.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _88.GetBlockWithTxsResponseProtoMsg): _88.GetBlockWithTxsResponse;
                toProto(message: _88.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _88.GetBlockWithTxsResponse): _88.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _90.QueryCurrentPlanRequest): Promise<_90.QueryCurrentPlanResponse>;
                appliedPlan(request: _90.QueryAppliedPlanRequest): Promise<_90.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _90.QueryUpgradedConsensusStateRequest): Promise<_90.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _90.QueryModuleVersionsRequest): Promise<_90.QueryModuleVersionsResponse>;
                authority(request?: _90.QueryAuthorityRequest): Promise<_90.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _91.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _91.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _91.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _91.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _91.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _91.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _91.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _91.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _91.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _91.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _91.MsgSoftwareUpgrade) => _91.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _91.MsgSoftwareUpgradeAmino) => _91.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _91.MsgCancelUpgrade) => _91.MsgCancelUpgradeAmino;
                    fromAmino: (object: _91.MsgCancelUpgradeAmino) => _91.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _92.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Plan;
                fromPartial(object: {
                    name?: string;
                    time?: Date;
                    height?: string | number | import("long").Long;
                    info?: string;
                    upgradedClientState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _92.Plan;
                fromAmino(object: _92.PlanAmino): _92.Plan;
                toAmino(message: _92.Plan): _92.PlanAmino;
                fromAminoMsg(object: _92.PlanAminoMsg): _92.Plan;
                toAminoMsg(message: _92.Plan): _92.PlanAminoMsg;
                fromProtoMsg(message: _92.PlanProtoMsg): _92.Plan;
                toProto(message: _92.Plan): Uint8Array;
                toProtoMsg(message: _92.Plan): _92.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                encode(message: _92.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long").Long;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _92.SoftwareUpgradeProposal;
                fromAmino(object: _92.SoftwareUpgradeProposalAmino): _92.SoftwareUpgradeProposal;
                toAmino(message: _92.SoftwareUpgradeProposal): _92.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _92.SoftwareUpgradeProposalAminoMsg): _92.SoftwareUpgradeProposal;
                toAminoMsg(message: _92.SoftwareUpgradeProposal): _92.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _92.SoftwareUpgradeProposalProtoMsg): _92.SoftwareUpgradeProposal;
                toProto(message: _92.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _92.SoftwareUpgradeProposal): _92.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _92.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.CancelSoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _92.CancelSoftwareUpgradeProposal;
                fromAmino(object: _92.CancelSoftwareUpgradeProposalAmino): _92.CancelSoftwareUpgradeProposal;
                toAmino(message: _92.CancelSoftwareUpgradeProposal): _92.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _92.CancelSoftwareUpgradeProposalAminoMsg): _92.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _92.CancelSoftwareUpgradeProposal): _92.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _92.CancelSoftwareUpgradeProposalProtoMsg): _92.CancelSoftwareUpgradeProposal;
                toProto(message: _92.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _92.CancelSoftwareUpgradeProposal): _92.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                encode(message: _92.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ModuleVersion;
                fromPartial(object: {
                    name?: string;
                    version?: string | number | import("long").Long;
                }): _92.ModuleVersion;
                fromAmino(object: _92.ModuleVersionAmino): _92.ModuleVersion;
                toAmino(message: _92.ModuleVersion): _92.ModuleVersionAmino;
                fromAminoMsg(object: _92.ModuleVersionAminoMsg): _92.ModuleVersion;
                toAminoMsg(message: _92.ModuleVersion): _92.ModuleVersionAminoMsg;
                fromProtoMsg(message: _92.ModuleVersionProtoMsg): _92.ModuleVersion;
                toProto(message: _92.ModuleVersion): Uint8Array;
                toProtoMsg(message: _92.ModuleVersion): _92.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                encode(message: _91.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgSoftwareUpgrade;
                fromPartial(object: {
                    authority?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long").Long;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _91.MsgSoftwareUpgrade;
                fromAmino(object: _91.MsgSoftwareUpgradeAmino): _91.MsgSoftwareUpgrade;
                toAmino(message: _91.MsgSoftwareUpgrade): _91.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _91.MsgSoftwareUpgradeAminoMsg): _91.MsgSoftwareUpgrade;
                toAminoMsg(message: _91.MsgSoftwareUpgrade): _91.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _91.MsgSoftwareUpgradeProtoMsg): _91.MsgSoftwareUpgrade;
                toProto(message: _91.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _91.MsgSoftwareUpgrade): _91.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _91.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgSoftwareUpgradeResponse;
                fromPartial(_: {}): _91.MsgSoftwareUpgradeResponse;
                fromAmino(_: _91.MsgSoftwareUpgradeResponseAmino): _91.MsgSoftwareUpgradeResponse;
                toAmino(_: _91.MsgSoftwareUpgradeResponse): _91.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _91.MsgSoftwareUpgradeResponseAminoMsg): _91.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _91.MsgSoftwareUpgradeResponse): _91.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _91.MsgSoftwareUpgradeResponseProtoMsg): _91.MsgSoftwareUpgradeResponse;
                toProto(message: _91.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _91.MsgSoftwareUpgradeResponse): _91.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                encode(message: _91.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCancelUpgrade;
                fromPartial(object: {
                    authority?: string;
                }): _91.MsgCancelUpgrade;
                fromAmino(object: _91.MsgCancelUpgradeAmino): _91.MsgCancelUpgrade;
                toAmino(message: _91.MsgCancelUpgrade): _91.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _91.MsgCancelUpgradeAminoMsg): _91.MsgCancelUpgrade;
                toAminoMsg(message: _91.MsgCancelUpgrade): _91.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _91.MsgCancelUpgradeProtoMsg): _91.MsgCancelUpgrade;
                toProto(message: _91.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _91.MsgCancelUpgrade): _91.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _91.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCancelUpgradeResponse;
                fromPartial(_: {}): _91.MsgCancelUpgradeResponse;
                fromAmino(_: _91.MsgCancelUpgradeResponseAmino): _91.MsgCancelUpgradeResponse;
                toAmino(_: _91.MsgCancelUpgradeResponse): _91.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _91.MsgCancelUpgradeResponseAminoMsg): _91.MsgCancelUpgradeResponse;
                toAminoMsg(message: _91.MsgCancelUpgradeResponse): _91.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _91.MsgCancelUpgradeResponseProtoMsg): _91.MsgCancelUpgradeResponse;
                toProto(message: _91.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _91.MsgCancelUpgradeResponse): _91.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                encode(_: _90.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryCurrentPlanRequest;
                fromPartial(_: {}): _90.QueryCurrentPlanRequest;
                fromAmino(_: _90.QueryCurrentPlanRequestAmino): _90.QueryCurrentPlanRequest;
                toAmino(_: _90.QueryCurrentPlanRequest): _90.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _90.QueryCurrentPlanRequestAminoMsg): _90.QueryCurrentPlanRequest;
                toAminoMsg(message: _90.QueryCurrentPlanRequest): _90.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _90.QueryCurrentPlanRequestProtoMsg): _90.QueryCurrentPlanRequest;
                toProto(message: _90.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _90.QueryCurrentPlanRequest): _90.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                encode(message: _90.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryCurrentPlanResponse;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long").Long;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _90.QueryCurrentPlanResponse;
                fromAmino(object: _90.QueryCurrentPlanResponseAmino): _90.QueryCurrentPlanResponse;
                toAmino(message: _90.QueryCurrentPlanResponse): _90.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _90.QueryCurrentPlanResponseAminoMsg): _90.QueryCurrentPlanResponse;
                toAminoMsg(message: _90.QueryCurrentPlanResponse): _90.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _90.QueryCurrentPlanResponseProtoMsg): _90.QueryCurrentPlanResponse;
                toProto(message: _90.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _90.QueryCurrentPlanResponse): _90.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                encode(message: _90.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAppliedPlanRequest;
                fromPartial(object: {
                    name?: string;
                }): _90.QueryAppliedPlanRequest;
                fromAmino(object: _90.QueryAppliedPlanRequestAmino): _90.QueryAppliedPlanRequest;
                toAmino(message: _90.QueryAppliedPlanRequest): _90.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _90.QueryAppliedPlanRequestAminoMsg): _90.QueryAppliedPlanRequest;
                toAminoMsg(message: _90.QueryAppliedPlanRequest): _90.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _90.QueryAppliedPlanRequestProtoMsg): _90.QueryAppliedPlanRequest;
                toProto(message: _90.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _90.QueryAppliedPlanRequest): _90.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                encode(message: _90.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAppliedPlanResponse;
                fromPartial(object: {
                    height?: string | number | import("long").Long;
                }): _90.QueryAppliedPlanResponse;
                fromAmino(object: _90.QueryAppliedPlanResponseAmino): _90.QueryAppliedPlanResponse;
                toAmino(message: _90.QueryAppliedPlanResponse): _90.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _90.QueryAppliedPlanResponseAminoMsg): _90.QueryAppliedPlanResponse;
                toAminoMsg(message: _90.QueryAppliedPlanResponse): _90.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _90.QueryAppliedPlanResponseProtoMsg): _90.QueryAppliedPlanResponse;
                toProto(message: _90.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _90.QueryAppliedPlanResponse): _90.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _90.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryUpgradedConsensusStateRequest;
                fromPartial(object: {
                    lastHeight?: string | number | import("long").Long;
                }): _90.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _90.QueryUpgradedConsensusStateRequestAmino): _90.QueryUpgradedConsensusStateRequest;
                toAmino(message: _90.QueryUpgradedConsensusStateRequest): _90.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _90.QueryUpgradedConsensusStateRequestAminoMsg): _90.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _90.QueryUpgradedConsensusStateRequest): _90.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _90.QueryUpgradedConsensusStateRequestProtoMsg): _90.QueryUpgradedConsensusStateRequest;
                toProto(message: _90.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _90.QueryUpgradedConsensusStateRequest): _90.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _90.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryUpgradedConsensusStateResponse;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _90.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _90.QueryUpgradedConsensusStateResponseAmino): _90.QueryUpgradedConsensusStateResponse;
                toAmino(message: _90.QueryUpgradedConsensusStateResponse): _90.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _90.QueryUpgradedConsensusStateResponseAminoMsg): _90.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _90.QueryUpgradedConsensusStateResponse): _90.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _90.QueryUpgradedConsensusStateResponseProtoMsg): _90.QueryUpgradedConsensusStateResponse;
                toProto(message: _90.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _90.QueryUpgradedConsensusStateResponse): _90.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                encode(message: _90.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryModuleVersionsRequest;
                fromPartial(object: {
                    moduleName?: string;
                }): _90.QueryModuleVersionsRequest;
                fromAmino(object: _90.QueryModuleVersionsRequestAmino): _90.QueryModuleVersionsRequest;
                toAmino(message: _90.QueryModuleVersionsRequest): _90.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _90.QueryModuleVersionsRequestAminoMsg): _90.QueryModuleVersionsRequest;
                toAminoMsg(message: _90.QueryModuleVersionsRequest): _90.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryModuleVersionsRequestProtoMsg): _90.QueryModuleVersionsRequest;
                toProto(message: _90.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryModuleVersionsRequest): _90.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                encode(message: _90.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryModuleVersionsResponse;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: string | number | import("long").Long;
                    }[];
                }): _90.QueryModuleVersionsResponse;
                fromAmino(object: _90.QueryModuleVersionsResponseAmino): _90.QueryModuleVersionsResponse;
                toAmino(message: _90.QueryModuleVersionsResponse): _90.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _90.QueryModuleVersionsResponseAminoMsg): _90.QueryModuleVersionsResponse;
                toAminoMsg(message: _90.QueryModuleVersionsResponse): _90.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryModuleVersionsResponseProtoMsg): _90.QueryModuleVersionsResponse;
                toProto(message: _90.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryModuleVersionsResponse): _90.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                encode(_: _90.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAuthorityRequest;
                fromPartial(_: {}): _90.QueryAuthorityRequest;
                fromAmino(_: _90.QueryAuthorityRequestAmino): _90.QueryAuthorityRequest;
                toAmino(_: _90.QueryAuthorityRequest): _90.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _90.QueryAuthorityRequestAminoMsg): _90.QueryAuthorityRequest;
                toAminoMsg(message: _90.QueryAuthorityRequest): _90.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _90.QueryAuthorityRequestProtoMsg): _90.QueryAuthorityRequest;
                toProto(message: _90.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _90.QueryAuthorityRequest): _90.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                encode(message: _90.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAuthorityResponse;
                fromPartial(object: {
                    address?: string;
                }): _90.QueryAuthorityResponse;
                fromAmino(object: _90.QueryAuthorityResponseAmino): _90.QueryAuthorityResponse;
                toAmino(message: _90.QueryAuthorityResponse): _90.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _90.QueryAuthorityResponseAminoMsg): _90.QueryAuthorityResponse;
                toAminoMsg(message: _90.QueryAuthorityResponse): _90.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _90.QueryAuthorityResponseProtoMsg): _90.QueryAuthorityResponse;
                toProto(message: _90.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _90.QueryAuthorityResponse): _90.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _93.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _93.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _93.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _93.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _93.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _93.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _93.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _93.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _93.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _93.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _93.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _93.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _93.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _93.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _93.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _93.MsgCreateVestingAccount) => _93.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _93.MsgCreateVestingAccountAmino) => _93.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _93.MsgCreatePermanentLockedAccount) => _93.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _93.MsgCreatePermanentLockedAccountAmino) => _93.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _93.MsgCreatePeriodicVestingAccount) => _93.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _93.MsgCreatePeriodicVestingAccountAmino) => _93.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _94.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.BaseVestingAccount;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: string | number | import("long").Long;
                        sequence?: string | number | import("long").Long;
                    };
                    originalVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedFree?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: string | number | import("long").Long;
                }): _94.BaseVestingAccount;
                fromAmino(object: _94.BaseVestingAccountAmino): _94.BaseVestingAccount;
                toAmino(message: _94.BaseVestingAccount): _94.BaseVestingAccountAmino;
                fromAminoMsg(object: _94.BaseVestingAccountAminoMsg): _94.BaseVestingAccount;
                toAminoMsg(message: _94.BaseVestingAccount): _94.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _94.BaseVestingAccountProtoMsg): _94.BaseVestingAccount;
                toProto(message: _94.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _94.BaseVestingAccount): _94.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                encode(message: _94.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ContinuousVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long").Long;
                            sequence?: string | number | import("long").Long;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long").Long;
                    };
                    startTime?: string | number | import("long").Long;
                }): _94.ContinuousVestingAccount;
                fromAmino(object: _94.ContinuousVestingAccountAmino): _94.ContinuousVestingAccount;
                toAmino(message: _94.ContinuousVestingAccount): _94.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _94.ContinuousVestingAccountAminoMsg): _94.ContinuousVestingAccount;
                toAminoMsg(message: _94.ContinuousVestingAccount): _94.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _94.ContinuousVestingAccountProtoMsg): _94.ContinuousVestingAccount;
                toProto(message: _94.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _94.ContinuousVestingAccount): _94.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                encode(message: _94.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.DelayedVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long").Long;
                            sequence?: string | number | import("long").Long;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long").Long;
                    };
                }): _94.DelayedVestingAccount;
                fromAmino(object: _94.DelayedVestingAccountAmino): _94.DelayedVestingAccount;
                toAmino(message: _94.DelayedVestingAccount): _94.DelayedVestingAccountAmino;
                fromAminoMsg(object: _94.DelayedVestingAccountAminoMsg): _94.DelayedVestingAccount;
                toAminoMsg(message: _94.DelayedVestingAccount): _94.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _94.DelayedVestingAccountProtoMsg): _94.DelayedVestingAccount;
                toProto(message: _94.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _94.DelayedVestingAccount): _94.DelayedVestingAccountProtoMsg;
            };
            Period: {
                encode(message: _94.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Period;
                fromPartial(object: {
                    length?: string | number | import("long").Long;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _94.Period;
                fromAmino(object: _94.PeriodAmino): _94.Period;
                toAmino(message: _94.Period): _94.PeriodAmino;
                fromAminoMsg(object: _94.PeriodAminoMsg): _94.Period;
                toAminoMsg(message: _94.Period): _94.PeriodAminoMsg;
                fromProtoMsg(message: _94.PeriodProtoMsg): _94.Period;
                toProto(message: _94.Period): Uint8Array;
                toProtoMsg(message: _94.Period): _94.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                encode(message: _94.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PeriodicVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long").Long;
                            sequence?: string | number | import("long").Long;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long").Long;
                    };
                    startTime?: string | number | import("long").Long;
                    vestingPeriods?: {
                        length?: string | number | import("long").Long;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _94.PeriodicVestingAccount;
                fromAmino(object: _94.PeriodicVestingAccountAmino): _94.PeriodicVestingAccount;
                toAmino(message: _94.PeriodicVestingAccount): _94.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _94.PeriodicVestingAccountAminoMsg): _94.PeriodicVestingAccount;
                toAminoMsg(message: _94.PeriodicVestingAccount): _94.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _94.PeriodicVestingAccountProtoMsg): _94.PeriodicVestingAccount;
                toProto(message: _94.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _94.PeriodicVestingAccount): _94.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                encode(message: _94.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PermanentLockedAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long").Long;
                            sequence?: string | number | import("long").Long;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long").Long;
                    };
                }): _94.PermanentLockedAccount;
                fromAmino(object: _94.PermanentLockedAccountAmino): _94.PermanentLockedAccount;
                toAmino(message: _94.PermanentLockedAccount): _94.PermanentLockedAccountAmino;
                fromAminoMsg(object: _94.PermanentLockedAccountAminoMsg): _94.PermanentLockedAccount;
                toAminoMsg(message: _94.PermanentLockedAccount): _94.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _94.PermanentLockedAccountProtoMsg): _94.PermanentLockedAccount;
                toProto(message: _94.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _94.PermanentLockedAccount): _94.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                encode(message: _93.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreateVestingAccount;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: string | number | import("long").Long;
                    delayed?: boolean;
                }): _93.MsgCreateVestingAccount;
                fromAmino(object: _93.MsgCreateVestingAccountAmino): _93.MsgCreateVestingAccount;
                toAmino(message: _93.MsgCreateVestingAccount): _93.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _93.MsgCreateVestingAccountAminoMsg): _93.MsgCreateVestingAccount;
                toAminoMsg(message: _93.MsgCreateVestingAccount): _93.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _93.MsgCreateVestingAccountProtoMsg): _93.MsgCreateVestingAccount;
                toProto(message: _93.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _93.MsgCreateVestingAccount): _93.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _93.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreateVestingAccountResponse;
                fromPartial(_: {}): _93.MsgCreateVestingAccountResponse;
                fromAmino(_: _93.MsgCreateVestingAccountResponseAmino): _93.MsgCreateVestingAccountResponse;
                toAmino(_: _93.MsgCreateVestingAccountResponse): _93.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _93.MsgCreateVestingAccountResponseAminoMsg): _93.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _93.MsgCreateVestingAccountResponse): _93.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _93.MsgCreateVestingAccountResponseProtoMsg): _93.MsgCreateVestingAccountResponse;
                toProto(message: _93.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _93.MsgCreateVestingAccountResponse): _93.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _93.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePermanentLockedAccount;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _93.MsgCreatePermanentLockedAccount;
                fromAmino(object: _93.MsgCreatePermanentLockedAccountAmino): _93.MsgCreatePermanentLockedAccount;
                toAmino(message: _93.MsgCreatePermanentLockedAccount): _93.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _93.MsgCreatePermanentLockedAccountAminoMsg): _93.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _93.MsgCreatePermanentLockedAccount): _93.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _93.MsgCreatePermanentLockedAccountProtoMsg): _93.MsgCreatePermanentLockedAccount;
                toProto(message: _93.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _93.MsgCreatePermanentLockedAccount): _93.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _93.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: {}): _93.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _93.MsgCreatePermanentLockedAccountResponseAmino): _93.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _93.MsgCreatePermanentLockedAccountResponse): _93.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _93.MsgCreatePermanentLockedAccountResponseAminoMsg): _93.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _93.MsgCreatePermanentLockedAccountResponse): _93.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _93.MsgCreatePermanentLockedAccountResponseProtoMsg): _93.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _93.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _93.MsgCreatePermanentLockedAccountResponse): _93.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _93.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePeriodicVestingAccount;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    startTime?: string | number | import("long").Long;
                    vestingPeriods?: {
                        length?: string | number | import("long").Long;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _93.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _93.MsgCreatePeriodicVestingAccountAmino): _93.MsgCreatePeriodicVestingAccount;
                toAmino(message: _93.MsgCreatePeriodicVestingAccount): _93.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _93.MsgCreatePeriodicVestingAccountAminoMsg): _93.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _93.MsgCreatePeriodicVestingAccount): _93.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _93.MsgCreatePeriodicVestingAccountProtoMsg): _93.MsgCreatePeriodicVestingAccount;
                toProto(message: _93.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _93.MsgCreatePeriodicVestingAccount): _93.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _93.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: {}): _93.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _93.MsgCreatePeriodicVestingAccountResponseAmino): _93.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _93.MsgCreatePeriodicVestingAccountResponse): _93.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _93.MsgCreatePeriodicVestingAccountResponseAminoMsg): _93.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _93.MsgCreatePeriodicVestingAccountResponse): _93.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _93.MsgCreatePeriodicVestingAccountResponseProtoMsg): _93.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _93.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _93.MsgCreatePeriodicVestingAccountResponse): _93.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _224.MsgClientImpl;
                };
                bank: {
                    v1beta1: _225.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _226.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _227.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _228.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _229.MsgClientImpl;
                };
                gov: {
                    v1: _230.MsgClientImpl;
                    v1beta1: _231.MsgClientImpl;
                };
                group: {
                    v1: _232.MsgClientImpl;
                };
                nft: {
                    v1beta1: _233.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _234.MsgClientImpl;
                };
                staking: {
                    v1beta1: _235.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _236.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _237.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _5.QueryConfigRequest): Promise<_5.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _8.QueryAccountsRequest): Promise<_8.QueryAccountsResponse>;
                        account(request: _8.QueryAccountRequest): Promise<_8.QueryAccountResponse>;
                        params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                        moduleAccounts(request?: _8.QueryModuleAccountsRequest): Promise<_8.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _8.Bech32PrefixRequest): Promise<_8.Bech32PrefixResponse>;
                        addressBytesToString(request: _8.AddressBytesToStringRequest): Promise<_8.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _8.AddressStringToBytesRequest): Promise<_8.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _12.QueryGrantsRequest): Promise<_12.QueryGrantsResponse>;
                        granterGrants(request: _12.QueryGranterGrantsRequest): Promise<_12.QueryGranterGrantsResponse>;
                        granteeGrants(request: _12.QueryGranteeGrantsRequest): Promise<_12.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _17.QueryBalanceRequest): Promise<_17.QueryBalanceResponse>;
                        allBalances(request: _17.QueryAllBalancesRequest): Promise<_17.QueryAllBalancesResponse>;
                        spendableBalances(request: _17.QuerySpendableBalancesRequest): Promise<_17.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _17.QueryTotalSupplyRequest): Promise<_17.QueryTotalSupplyResponse>;
                        supplyOf(request: _17.QuerySupplyOfRequest): Promise<_17.QuerySupplyOfResponse>;
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        denomMetadata(request: _17.QueryDenomMetadataRequest): Promise<_17.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _17.QueryDenomsMetadataRequest): Promise<_17.QueryDenomsMetadataResponse>;
                        denomOwners(request: _17.QueryDenomOwnersRequest): Promise<_17.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _27.GetNodeInfoRequest): Promise<_27.GetNodeInfoResponse>;
                            getSyncing(request?: _27.GetSyncingRequest): Promise<_27.GetSyncingResponse>;
                            getLatestBlock(request?: _27.GetLatestBlockRequest): Promise<_27.GetLatestBlockResponse>;
                            getBlockByHeight(request: _27.GetBlockByHeightRequest): Promise<_27.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _27.GetLatestValidatorSetRequest): Promise<_27.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _27.GetValidatorSetByHeightRequest): Promise<_27.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _41.QueryValidatorOutstandingRewardsRequest): Promise<_41.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _41.QueryValidatorCommissionRequest): Promise<_41.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _41.QueryValidatorSlashesRequest): Promise<_41.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _41.QueryDelegationRewardsRequest): Promise<_41.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _41.QueryDelegationTotalRewardsRequest): Promise<_41.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _41.QueryDelegatorValidatorsRequest): Promise<_41.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _41.QueryDelegatorWithdrawAddressRequest): Promise<_41.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _41.QueryCommunityPoolRequest): Promise<_41.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _45.QueryEvidenceRequest): Promise<_45.QueryEvidenceResponse>;
                        allEvidence(request?: _45.QueryAllEvidenceRequest): Promise<_45.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _49.QueryAllowanceRequest): Promise<_49.QueryAllowanceResponse>;
                        allowances(request: _49.QueryAllowancesRequest): Promise<_49.QueryAllowancesResponse>;
                        allowancesByGranter(request: _49.QueryAllowancesByGranterRequest): Promise<_49.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _54.QueryProposalRequest): Promise<_54.QueryProposalResponse>;
                        proposals(request: _54.QueryProposalsRequest): Promise<_54.QueryProposalsResponse>;
                        vote(request: _54.QueryVoteRequest): Promise<_54.QueryVoteResponse>;
                        votes(request: _54.QueryVotesRequest): Promise<_54.QueryVotesResponse>;
                        params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        deposit(request: _54.QueryDepositRequest): Promise<_54.QueryDepositResponse>;
                        deposits(request: _54.QueryDepositsRequest): Promise<_54.QueryDepositsResponse>;
                        tallyResult(request: _54.QueryTallyResultRequest): Promise<_54.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _58.QueryProposalRequest): Promise<_58.QueryProposalResponse>;
                        proposals(request: _58.QueryProposalsRequest): Promise<_58.QueryProposalsResponse>;
                        vote(request: _58.QueryVoteRequest): Promise<_58.QueryVoteResponse>;
                        votes(request: _58.QueryVotesRequest): Promise<_58.QueryVotesResponse>;
                        params(request: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                        deposit(request: _58.QueryDepositRequest): Promise<_58.QueryDepositResponse>;
                        deposits(request: _58.QueryDepositsRequest): Promise<_58.QueryDepositsResponse>;
                        tallyResult(request: _58.QueryTallyResultRequest): Promise<_58.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _62.QueryGroupInfoRequest): Promise<_62.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _62.QueryGroupPolicyInfoRequest): Promise<_62.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _62.QueryGroupMembersRequest): Promise<_62.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _62.QueryGroupsByAdminRequest): Promise<_62.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _62.QueryGroupPoliciesByGroupRequest): Promise<_62.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _62.QueryGroupPoliciesByAdminRequest): Promise<_62.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _62.QueryProposalRequest): Promise<_62.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _62.QueryProposalsByGroupPolicyRequest): Promise<_62.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _62.QueryVoteByProposalVoterRequest): Promise<_62.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _62.QueryVotesByProposalRequest): Promise<_62.QueryVotesByProposalResponse>;
                        votesByVoter(request: _62.QueryVotesByVoterRequest): Promise<_62.QueryVotesByVoterResponse>;
                        groupsByMember(request: _62.QueryGroupsByMemberRequest): Promise<_62.QueryGroupsByMemberResponse>;
                        tallyResult(request: _62.QueryTallyResultRequest): Promise<_62.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                        inflation(request?: _67.QueryInflationRequest): Promise<_67.QueryInflationResponse>;
                        annualProvisions(request?: _67.QueryAnnualProvisionsRequest): Promise<_67.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _72.QueryBalanceRequest): Promise<_72.QueryBalanceResponse>;
                        owner(request: _72.QueryOwnerRequest): Promise<_72.QueryOwnerResponse>;
                        supply(request: _72.QuerySupplyRequest): Promise<_72.QuerySupplyResponse>;
                        nFTs(request: _72.QueryNFTsRequest): Promise<_72.QueryNFTsResponse>;
                        nFT(request: _72.QueryNFTRequest): Promise<_72.QueryNFTResponse>;
                        class(request: _72.QueryClassRequest): Promise<_72.QueryClassResponse>;
                        classes(request?: _72.QueryClassesRequest): Promise<_72.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                        subspaces(request?: _77.QuerySubspacesRequest): Promise<_77.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        signingInfo(request: _79.QuerySigningInfoRequest): Promise<_79.QuerySigningInfoResponse>;
                        signingInfos(request?: _79.QuerySigningInfosRequest): Promise<_79.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _84.QueryValidatorsRequest): Promise<_84.QueryValidatorsResponse>;
                        validator(request: _84.QueryValidatorRequest): Promise<_84.QueryValidatorResponse>;
                        validatorDelegations(request: _84.QueryValidatorDelegationsRequest): Promise<_84.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _84.QueryValidatorUnbondingDelegationsRequest): Promise<_84.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _84.QueryDelegationRequest): Promise<_84.QueryDelegationResponse>;
                        unbondingDelegation(request: _84.QueryUnbondingDelegationRequest): Promise<_84.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _84.QueryDelegatorDelegationsRequest): Promise<_84.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _84.QueryDelegatorUnbondingDelegationsRequest): Promise<_84.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _84.QueryRedelegationsRequest): Promise<_84.QueryRedelegationsResponse>;
                        delegatorValidators(request: _84.QueryDelegatorValidatorsRequest): Promise<_84.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _84.QueryDelegatorValidatorRequest): Promise<_84.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _84.QueryHistoricalInfoRequest): Promise<_84.QueryHistoricalInfoResponse>;
                        pool(request?: _84.QueryPoolRequest): Promise<_84.QueryPoolResponse>;
                        params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _88.SimulateRequest): Promise<_88.SimulateResponse>;
                        getTx(request: _88.GetTxRequest): Promise<_88.GetTxResponse>;
                        broadcastTx(request: _88.BroadcastTxRequest): Promise<_88.BroadcastTxResponse>;
                        getTxsEvent(request: _88.GetTxsEventRequest): Promise<_88.GetTxsEventResponse>;
                        getBlockWithTxs(request: _88.GetBlockWithTxsRequest): Promise<_88.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _90.QueryCurrentPlanRequest): Promise<_90.QueryCurrentPlanResponse>;
                        appliedPlan(request: _90.QueryAppliedPlanRequest): Promise<_90.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _90.QueryUpgradedConsensusStateRequest): Promise<_90.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _90.QueryModuleVersionsRequest): Promise<_90.QueryModuleVersionsResponse>;
                        authority(request?: _90.QueryAuthorityRequest): Promise<_90.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
