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
import * as _224 from "./authz/v1beta1/tx.amino";
import * as _225 from "./bank/v1beta1/tx.amino";
import * as _226 from "./crisis/v1beta1/tx.amino";
import * as _227 from "./distribution/v1beta1/tx.amino";
import * as _228 from "./evidence/v1beta1/tx.amino";
import * as _229 from "./feegrant/v1beta1/tx.amino";
import * as _230 from "./gov/v1/tx.amino";
import * as _231 from "./gov/v1beta1/tx.amino";
import * as _232 from "./group/v1/tx.amino";
import * as _233 from "./nft/v1beta1/tx.amino";
import * as _234 from "./slashing/v1beta1/tx.amino";
import * as _235 from "./staking/v1beta1/tx.amino";
import * as _236 from "./upgrade/v1beta1/tx.amino";
import * as _237 from "./vesting/v1beta1/tx.amino";
import * as _238 from "./authz/v1beta1/tx.registry";
import * as _239 from "./bank/v1beta1/tx.registry";
import * as _240 from "./crisis/v1beta1/tx.registry";
import * as _241 from "./distribution/v1beta1/tx.registry";
import * as _242 from "./evidence/v1beta1/tx.registry";
import * as _243 from "./feegrant/v1beta1/tx.registry";
import * as _244 from "./gov/v1/tx.registry";
import * as _245 from "./gov/v1beta1/tx.registry";
import * as _246 from "./group/v1/tx.registry";
import * as _247 from "./nft/v1beta1/tx.registry";
import * as _248 from "./slashing/v1beta1/tx.registry";
import * as _249 from "./staking/v1beta1/tx.registry";
import * as _250 from "./upgrade/v1beta1/tx.registry";
import * as _251 from "./vesting/v1beta1/tx.registry";
import * as _252 from "./app/v1alpha1/query.rpc.Query";
import * as _253 from "./auth/v1beta1/query.rpc.Query";
import * as _254 from "./authz/v1beta1/query.rpc.Query";
import * as _255 from "./bank/v1beta1/query.rpc.Query";
import * as _256 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _257 from "./distribution/v1beta1/query.rpc.Query";
import * as _258 from "./evidence/v1beta1/query.rpc.Query";
import * as _259 from "./feegrant/v1beta1/query.rpc.Query";
import * as _260 from "./gov/v1/query.rpc.Query";
import * as _261 from "./gov/v1beta1/query.rpc.Query";
import * as _262 from "./group/v1/query.rpc.Query";
import * as _263 from "./mint/v1beta1/query.rpc.Query";
import * as _264 from "./nft/v1beta1/query.rpc.Query";
import * as _265 from "./params/v1beta1/query.rpc.Query";
import * as _266 from "./slashing/v1beta1/query.rpc.Query";
import * as _267 from "./staking/v1beta1/query.rpc.Query";
import * as _268 from "./tx/v1beta1/service.rpc.Service";
import * as _269 from "./upgrade/v1beta1/query.rpc.Query";
import * as _270 from "./authz/v1beta1/tx.rpc.msg";
import * as _271 from "./bank/v1beta1/tx.rpc.msg";
import * as _272 from "./crisis/v1beta1/tx.rpc.msg";
import * as _273 from "./distribution/v1beta1/tx.rpc.msg";
import * as _274 from "./evidence/v1beta1/tx.rpc.msg";
import * as _275 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _276 from "./gov/v1/tx.rpc.msg";
import * as _277 from "./gov/v1beta1/tx.rpc.msg";
import * as _278 from "./group/v1/tx.rpc.msg";
import * as _279 from "./nft/v1beta1/tx.rpc.msg";
import * as _280 from "./slashing/v1beta1/tx.rpc.msg";
import * as _281 from "./staking/v1beta1/tx.rpc.msg";
import * as _282 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _283 from "./vesting/v1beta1/tx.rpc.msg";
import * as _344 from "./rpc.query";
import * as _345 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._252
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._253
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._224,
      ..._238,
      ..._254,
      ..._270
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._225,
      ..._239,
      ..._255,
      ..._271
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._19
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._20
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._21
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._22
      };
      export const v2alpha1 = {
        ..._23
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._24
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._25,
        ..._26
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._27,
        ..._256
      };
    }
    export const v1beta1 = {
      ..._28
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._29,
      ..._30
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._226,
      ..._240,
      ..._272
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._33
    };
    export namespace hd {
      export const v1 = {
        ..._34
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._35
      };
    }
    export const multisig = {
      ..._36
    };
    export const secp256k1 = {
      ..._37
    };
    export const secp256r1 = {
      ..._38
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._227,
      ..._241,
      ..._257,
      ..._273
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._228,
      ..._242,
      ..._258,
      ..._274
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._229,
      ..._243,
      ..._259,
      ..._275
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._51
    };
  }
  export namespace gov {
    export const v1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._230,
      ..._244,
      ..._260,
      ..._276
    };
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._231,
      ..._245,
      ..._261,
      ..._277
    };
  }
  export namespace group {
    export const v1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._232,
      ..._246,
      ..._262,
      ..._278
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._263
    };
  }
  export namespace msg {
    export const v1 = {
      ..._68
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._233,
      ..._247,
      ..._264,
      ..._279
    };
  }
  export namespace orm {
    export const v1 = {
      ..._74
    };
    export const v1alpha1 = {
      ..._75
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._265
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._234,
      ..._248,
      ..._266,
      ..._280
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._235,
      ..._249,
      ..._267,
      ..._281
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._87
      };
    }
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._268
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._236,
      ..._250,
      ..._269,
      ..._282
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._237,
      ..._251,
      ..._283
    };
  }
  export const ClientFactory = {
    ..._344,
    ..._345
  };
}