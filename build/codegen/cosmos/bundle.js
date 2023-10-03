"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cosmos = void 0;
const _3 = __importStar(require("./app/v1alpha1/config"));
const _4 = __importStar(require("./app/v1alpha1/module"));
const _5 = __importStar(require("./app/v1alpha1/query"));
const _6 = __importStar(require("./auth/v1beta1/auth"));
const _7 = __importStar(require("./auth/v1beta1/genesis"));
const _8 = __importStar(require("./auth/v1beta1/query"));
const _9 = __importStar(require("./authz/v1beta1/authz"));
const _10 = __importStar(require("./authz/v1beta1/event"));
const _11 = __importStar(require("./authz/v1beta1/genesis"));
const _12 = __importStar(require("./authz/v1beta1/query"));
const _13 = __importStar(require("./authz/v1beta1/tx"));
const _14 = __importStar(require("./bank/v1beta1/authz"));
const _15 = __importStar(require("./bank/v1beta1/bank"));
const _16 = __importStar(require("./bank/v1beta1/genesis"));
const _17 = __importStar(require("./bank/v1beta1/query"));
const _18 = __importStar(require("./bank/v1beta1/tx"));
const _19 = __importStar(require("./base/abci/v1beta1/abci"));
const _20 = __importStar(require("./base/kv/v1beta1/kv"));
const _21 = __importStar(require("./base/query/v1beta1/pagination"));
const _22 = __importStar(require("./base/reflection/v1beta1/reflection"));
const _23 = __importStar(require("./base/reflection/v2alpha1/reflection"));
const _24 = __importStar(require("./base/snapshots/v1beta1/snapshot"));
const _25 = __importStar(require("./base/store/v1beta1/commit_info"));
const _26 = __importStar(require("./base/store/v1beta1/listening"));
const _27 = __importStar(require("./base/tendermint/v1beta1/query"));
const _28 = __importStar(require("./base/v1beta1/coin"));
const _29 = __importStar(require("./capability/v1beta1/capability"));
const _30 = __importStar(require("./capability/v1beta1/genesis"));
const _31 = __importStar(require("./crisis/v1beta1/genesis"));
const _32 = __importStar(require("./crisis/v1beta1/tx"));
const _33 = __importStar(require("./crypto/ed25519/keys"));
const _34 = __importStar(require("./crypto/hd/v1/hd"));
const _35 = __importStar(require("./crypto/keyring/v1/record"));
const _36 = __importStar(require("./crypto/multisig/keys"));
const _37 = __importStar(require("./crypto/secp256k1/keys"));
const _38 = __importStar(require("./crypto/secp256r1/keys"));
const _39 = __importStar(require("./distribution/v1beta1/distribution"));
const _40 = __importStar(require("./distribution/v1beta1/genesis"));
const _41 = __importStar(require("./distribution/v1beta1/query"));
const _42 = __importStar(require("./distribution/v1beta1/tx"));
const _43 = __importStar(require("./evidence/v1beta1/evidence"));
const _44 = __importStar(require("./evidence/v1beta1/genesis"));
const _45 = __importStar(require("./evidence/v1beta1/query"));
const _46 = __importStar(require("./evidence/v1beta1/tx"));
const _47 = __importStar(require("./feegrant/v1beta1/feegrant"));
const _48 = __importStar(require("./feegrant/v1beta1/genesis"));
const _49 = __importStar(require("./feegrant/v1beta1/query"));
const _50 = __importStar(require("./feegrant/v1beta1/tx"));
const _51 = __importStar(require("./genutil/v1beta1/genesis"));
const _52 = __importStar(require("./gov/v1/genesis"));
const _53 = __importStar(require("./gov/v1/gov"));
const _54 = __importStar(require("./gov/v1/query"));
const _55 = __importStar(require("./gov/v1/tx"));
const _56 = __importStar(require("./gov/v1beta1/genesis"));
const _57 = __importStar(require("./gov/v1beta1/gov"));
const _58 = __importStar(require("./gov/v1beta1/query"));
const _59 = __importStar(require("./gov/v1beta1/tx"));
const _60 = __importStar(require("./group/v1/events"));
const _61 = __importStar(require("./group/v1/genesis"));
const _62 = __importStar(require("./group/v1/query"));
const _63 = __importStar(require("./group/v1/tx"));
const _64 = __importStar(require("./group/v1/types"));
const _65 = __importStar(require("./mint/v1beta1/genesis"));
const _66 = __importStar(require("./mint/v1beta1/mint"));
const _67 = __importStar(require("./mint/v1beta1/query"));
const _68 = __importStar(require("./msg/v1/msg"));
const _69 = __importStar(require("./nft/v1beta1/event"));
const _70 = __importStar(require("./nft/v1beta1/genesis"));
const _71 = __importStar(require("./nft/v1beta1/nft"));
const _72 = __importStar(require("./nft/v1beta1/query"));
const _73 = __importStar(require("./nft/v1beta1/tx"));
const _74 = __importStar(require("./orm/v1/orm"));
const _75 = __importStar(require("./orm/v1alpha1/schema"));
const _76 = __importStar(require("./params/v1beta1/params"));
const _77 = __importStar(require("./params/v1beta1/query"));
const _78 = __importStar(require("./slashing/v1beta1/genesis"));
const _79 = __importStar(require("./slashing/v1beta1/query"));
const _80 = __importStar(require("./slashing/v1beta1/slashing"));
const _81 = __importStar(require("./slashing/v1beta1/tx"));
const _82 = __importStar(require("./staking/v1beta1/authz"));
const _83 = __importStar(require("./staking/v1beta1/genesis"));
const _84 = __importStar(require("./staking/v1beta1/query"));
const _85 = __importStar(require("./staking/v1beta1/staking"));
const _86 = __importStar(require("./staking/v1beta1/tx"));
const _87 = __importStar(require("./tx/signing/v1beta1/signing"));
const _88 = __importStar(require("./tx/v1beta1/service"));
const _89 = __importStar(require("./tx/v1beta1/tx"));
const _90 = __importStar(require("./upgrade/v1beta1/query"));
const _91 = __importStar(require("./upgrade/v1beta1/tx"));
const _92 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _93 = __importStar(require("./vesting/v1beta1/tx"));
const _94 = __importStar(require("./vesting/v1beta1/vesting"));
const _178 = __importStar(require("./authz/v1beta1/tx.amino"));
const _179 = __importStar(require("./bank/v1beta1/tx.amino"));
const _180 = __importStar(require("./crisis/v1beta1/tx.amino"));
const _181 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _182 = __importStar(require("./evidence/v1beta1/tx.amino"));
const _183 = __importStar(require("./feegrant/v1beta1/tx.amino"));
const _184 = __importStar(require("./gov/v1/tx.amino"));
const _185 = __importStar(require("./gov/v1beta1/tx.amino"));
const _186 = __importStar(require("./group/v1/tx.amino"));
const _187 = __importStar(require("./nft/v1beta1/tx.amino"));
const _188 = __importStar(require("./slashing/v1beta1/tx.amino"));
const _189 = __importStar(require("./staking/v1beta1/tx.amino"));
const _190 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _191 = __importStar(require("./vesting/v1beta1/tx.amino"));
const _192 = __importStar(require("./authz/v1beta1/tx.registry"));
const _193 = __importStar(require("./bank/v1beta1/tx.registry"));
const _194 = __importStar(require("./crisis/v1beta1/tx.registry"));
const _195 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _196 = __importStar(require("./evidence/v1beta1/tx.registry"));
const _197 = __importStar(require("./feegrant/v1beta1/tx.registry"));
const _198 = __importStar(require("./gov/v1/tx.registry"));
const _199 = __importStar(require("./gov/v1beta1/tx.registry"));
const _200 = __importStar(require("./group/v1/tx.registry"));
const _201 = __importStar(require("./nft/v1beta1/tx.registry"));
const _202 = __importStar(require("./slashing/v1beta1/tx.registry"));
const _203 = __importStar(require("./staking/v1beta1/tx.registry"));
const _204 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _205 = __importStar(require("./vesting/v1beta1/tx.registry"));
const _206 = __importStar(require("./app/v1alpha1/query.rpc.Query"));
const _207 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _208 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _209 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _210 = __importStar(require("./base/tendermint/v1beta1/query.rpc.Service"));
const _211 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _212 = __importStar(require("./evidence/v1beta1/query.rpc.Query"));
const _213 = __importStar(require("./feegrant/v1beta1/query.rpc.Query"));
const _214 = __importStar(require("./gov/v1/query.rpc.Query"));
const _215 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _216 = __importStar(require("./group/v1/query.rpc.Query"));
const _217 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _218 = __importStar(require("./nft/v1beta1/query.rpc.Query"));
const _219 = __importStar(require("./params/v1beta1/query.rpc.Query"));
const _220 = __importStar(require("./slashing/v1beta1/query.rpc.Query"));
const _221 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _222 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _223 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _224 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _225 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _226 = __importStar(require("./crisis/v1beta1/tx.rpc.msg"));
const _227 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _228 = __importStar(require("./evidence/v1beta1/tx.rpc.msg"));
const _229 = __importStar(require("./feegrant/v1beta1/tx.rpc.msg"));
const _230 = __importStar(require("./gov/v1/tx.rpc.msg"));
const _231 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _232 = __importStar(require("./group/v1/tx.rpc.msg"));
const _233 = __importStar(require("./nft/v1beta1/tx.rpc.msg"));
const _234 = __importStar(require("./slashing/v1beta1/tx.rpc.msg"));
const _235 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _236 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _237 = __importStar(require("./vesting/v1beta1/tx.rpc.msg"));
const _271 = __importStar(require("./rpc.query"));
const _272 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let app;
    (function (app) {
        app.v1alpha1 = {
            ..._3,
            ..._4,
            ..._5,
            ..._206
        };
    })(app = cosmos.app || (cosmos.app = {}));
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._6,
            ..._7,
            ..._8,
            ..._207
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._9,
            ..._10,
            ..._11,
            ..._12,
            ..._13,
            ..._178,
            ..._192,
            ..._208,
            ..._224
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._14,
            ..._15,
            ..._16,
            ..._17,
            ..._18,
            ..._179,
            ..._193,
            ..._209,
            ..._225
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._19
            };
        })(abci = base.abci || (base.abci = {}));
        let kv;
        (function (kv) {
            kv.v1beta1 = {
                ..._20
            };
        })(kv = base.kv || (base.kv = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._21
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v1beta1 = {
                ..._22
            };
            reflection.v2alpha1 = {
                ..._23
            };
        })(reflection = base.reflection || (base.reflection = {}));
        let snapshots;
        (function (snapshots) {
            snapshots.v1beta1 = {
                ..._24
            };
        })(snapshots = base.snapshots || (base.snapshots = {}));
        let store;
        (function (store) {
            store.v1beta1 = {
                ..._25,
                ..._26
            };
        })(store = base.store || (base.store = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1beta1 = {
                ..._27,
                ..._210
            };
        })(tendermint = base.tendermint || (base.tendermint = {}));
        base.v1beta1 = {
            ..._28
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let capability;
    (function (capability) {
        capability.v1beta1 = {
            ..._29,
            ..._30
        };
    })(capability = cosmos.capability || (cosmos.capability = {}));
    let crisis;
    (function (crisis) {
        crisis.v1beta1 = {
            ..._31,
            ..._32,
            ..._180,
            ..._194,
            ..._226
        };
    })(crisis = cosmos.crisis || (cosmos.crisis = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._33
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._34
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._35
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._36
        };
        crypto.secp256k1 = {
            ..._37
        };
        crypto.secp256r1 = {
            ..._38
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._39,
            ..._40,
            ..._41,
            ..._42,
            ..._181,
            ..._195,
            ..._211,
            ..._227
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let evidence;
    (function (evidence) {
        evidence.v1beta1 = {
            ..._43,
            ..._44,
            ..._45,
            ..._46,
            ..._182,
            ..._196,
            ..._212,
            ..._228
        };
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
    let feegrant;
    (function (feegrant) {
        feegrant.v1beta1 = {
            ..._47,
            ..._48,
            ..._49,
            ..._50,
            ..._183,
            ..._197,
            ..._213,
            ..._229
        };
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let genutil;
    (function (genutil) {
        genutil.v1beta1 = {
            ..._51
        };
    })(genutil = cosmos.genutil || (cosmos.genutil = {}));
    let gov;
    (function (gov) {
        gov.v1 = {
            ..._52,
            ..._53,
            ..._54,
            ..._55,
            ..._184,
            ..._198,
            ..._214,
            ..._230
        };
        gov.v1beta1 = {
            ..._56,
            ..._57,
            ..._58,
            ..._59,
            ..._185,
            ..._199,
            ..._215,
            ..._231
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        group.v1 = {
            ..._60,
            ..._61,
            ..._62,
            ..._63,
            ..._64,
            ..._186,
            ..._200,
            ..._216,
            ..._232
        };
    })(group = cosmos.group || (cosmos.group = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._65,
            ..._66,
            ..._67,
            ..._217
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let msg;
    (function (msg) {
        msg.v1 = {
            ..._68
        };
    })(msg = cosmos.msg || (cosmos.msg = {}));
    let nft;
    (function (nft) {
        nft.v1beta1 = {
            ..._69,
            ..._70,
            ..._71,
            ..._72,
            ..._73,
            ..._187,
            ..._201,
            ..._218,
            ..._233
        };
    })(nft = cosmos.nft || (cosmos.nft = {}));
    let orm;
    (function (orm) {
        orm.v1 = {
            ..._74
        };
        orm.v1alpha1 = {
            ..._75
        };
    })(orm = cosmos.orm || (cosmos.orm = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._76,
            ..._77,
            ..._219
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let slashing;
    (function (slashing) {
        slashing.v1beta1 = {
            ..._78,
            ..._79,
            ..._80,
            ..._81,
            ..._188,
            ..._202,
            ..._220,
            ..._234
        };
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._82,
            ..._83,
            ..._84,
            ..._85,
            ..._86,
            ..._189,
            ..._203,
            ..._221,
            ..._235
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._87
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._88,
            ..._89,
            ..._222
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._90,
            ..._91,
            ..._92,
            ..._190,
            ..._204,
            ..._223,
            ..._236
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        vesting.v1beta1 = {
            ..._93,
            ..._94,
            ..._191,
            ..._205,
            ..._237
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._271,
        ..._272
    };
})(cosmos || (exports.cosmos = cosmos = {}));
//# sourceMappingURL=bundle.js.map