import * as _104 from "./applications/transfer/v1/genesis";
import * as _105 from "./applications/transfer/v1/query";
import * as _106 from "./applications/transfer/v1/transfer";
import * as _107 from "./applications/transfer/v1/tx";
import * as _108 from "./applications/transfer/v2/packet";
import * as _109 from "./core/channel/v1/channel";
import * as _110 from "./core/channel/v1/genesis";
import * as _111 from "./core/channel/v1/query";
import * as _112 from "./core/channel/v1/tx";
import * as _113 from "./core/client/v1/client";
import * as _114 from "./core/client/v1/genesis";
import * as _115 from "./core/client/v1/query";
import * as _116 from "./core/client/v1/tx";
import * as _117 from "./core/commitment/v1/commitment";
import * as _118 from "./core/connection/v1/connection";
import * as _119 from "./core/connection/v1/genesis";
import * as _120 from "./core/connection/v1/query";
import * as _121 from "./core/connection/v1/tx";
import * as _122 from "./core/port/v1/query";
import * as _123 from "./core/types/v1/genesis";
import * as _124 from "./lightclients/localhost/v1/localhost";
import * as _125 from "./lightclients/solomachine/v1/solomachine";
import * as _126 from "./lightclients/solomachine/v2/solomachine";
import * as _127 from "./lightclients/tendermint/v1/tendermint";
import * as _242 from "./applications/transfer/v1/tx.amino";
import * as _243 from "./core/channel/v1/tx.amino";
import * as _244 from "./core/client/v1/tx.amino";
import * as _245 from "./core/connection/v1/tx.amino";
import * as _246 from "./applications/transfer/v1/tx.registry";
import * as _247 from "./core/channel/v1/tx.registry";
import * as _248 from "./core/client/v1/tx.registry";
import * as _249 from "./core/connection/v1/tx.registry";
import * as _250 from "./applications/transfer/v1/query.rpc.Query";
import * as _251 from "./core/channel/v1/query.rpc.Query";
import * as _252 from "./core/client/v1/query.rpc.Query";
import * as _253 from "./core/connection/v1/query.rpc.Query";
import * as _254 from "./core/port/v1/query.rpc.Query";
import * as _255 from "./applications/transfer/v1/tx.rpc.msg";
import * as _256 from "./core/channel/v1/tx.rpc.msg";
import * as _257 from "./core/client/v1/tx.rpc.msg";
import * as _258 from "./core/connection/v1/tx.rpc.msg";
import * as _279 from "./rpc.query";
import * as _280 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._104,
        ..._105,
        ..._106,
        ..._107,
        ..._242,
        ..._246,
        ..._250,
        ..._255
      };
      export const v2 = {
        ..._108
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._109,
        ..._110,
        ..._111,
        ..._112,
        ..._243,
        ..._247,
        ..._251,
        ..._256
      };
    }
    export namespace client {
      export const v1 = {
        ..._113,
        ..._114,
        ..._115,
        ..._116,
        ..._244,
        ..._248,
        ..._252,
        ..._257
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._117
      };
    }
    export namespace connection {
      export const v1 = {
        ..._118,
        ..._119,
        ..._120,
        ..._121,
        ..._245,
        ..._249,
        ..._253,
        ..._258
      };
    }
    export namespace port {
      export const v1 = {
        ..._122,
        ..._254
      };
    }
    export namespace types {
      export const v1 = {
        ..._123
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._124
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._125
      };
      export const v2 = {
        ..._126
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._127
      };
    }
  }
  export const ClientFactory = {
    ..._279,
    ..._280
  };
}