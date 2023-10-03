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
import * as _68 from "./msg/v1/msg";
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
import * as _178 from "./authz/v1beta1/tx.amino";
import * as _179 from "./bank/v1beta1/tx.amino";
import * as _180 from "./crisis/v1beta1/tx.amino";
import * as _181 from "./distribution/v1beta1/tx.amino";
import * as _182 from "./evidence/v1beta1/tx.amino";
import * as _183 from "./feegrant/v1beta1/tx.amino";
import * as _184 from "./gov/v1/tx.amino";
import * as _185 from "./gov/v1beta1/tx.amino";
import * as _186 from "./group/v1/tx.amino";
import * as _187 from "./nft/v1beta1/tx.amino";
import * as _188 from "./slashing/v1beta1/tx.amino";
import * as _189 from "./staking/v1beta1/tx.amino";
import * as _190 from "./upgrade/v1beta1/tx.amino";
import * as _191 from "./vesting/v1beta1/tx.amino";
import * as _192 from "./authz/v1beta1/tx.registry";
import * as _193 from "./bank/v1beta1/tx.registry";
import * as _194 from "./crisis/v1beta1/tx.registry";
import * as _195 from "./distribution/v1beta1/tx.registry";
import * as _196 from "./evidence/v1beta1/tx.registry";
import * as _197 from "./feegrant/v1beta1/tx.registry";
import * as _198 from "./gov/v1/tx.registry";
import * as _199 from "./gov/v1beta1/tx.registry";
import * as _200 from "./group/v1/tx.registry";
import * as _201 from "./nft/v1beta1/tx.registry";
import * as _202 from "./slashing/v1beta1/tx.registry";
import * as _203 from "./staking/v1beta1/tx.registry";
import * as _204 from "./upgrade/v1beta1/tx.registry";
import * as _205 from "./vesting/v1beta1/tx.registry";
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
import * as _271 from "./rpc.query";
import * as _272 from "./rpc.tx";
export var cosmos;
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
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map