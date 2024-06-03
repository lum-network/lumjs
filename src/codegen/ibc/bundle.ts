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
import * as _284 from "./applications/transfer/v1/tx.amino";
import * as _285 from "./core/channel/v1/tx.amino";
import * as _286 from "./core/client/v1/tx.amino";
import * as _287 from "./core/connection/v1/tx.amino";
import * as _288 from "./applications/transfer/v1/tx.registry";
import * as _289 from "./core/channel/v1/tx.registry";
import * as _290 from "./core/client/v1/tx.registry";
import * as _291 from "./core/connection/v1/tx.registry";
import * as _292 from "./applications/transfer/v1/query.rpc.Query";
import * as _293 from "./core/channel/v1/query.rpc.Query";
import * as _294 from "./core/client/v1/query.rpc.Query";
import * as _295 from "./core/connection/v1/query.rpc.Query";
import * as _296 from "./core/port/v1/query.rpc.Query";
import * as _297 from "./applications/transfer/v1/tx.rpc.msg";
import * as _298 from "./core/channel/v1/tx.rpc.msg";
import * as _299 from "./core/client/v1/tx.rpc.msg";
import * as _300 from "./core/connection/v1/tx.rpc.msg";
import * as _346 from "./rpc.query";
import * as _347 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._104,
        ..._105,
        ..._106,
        ..._107,
        ..._284,
        ..._288,
        ..._292,
        ..._297
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
        ..._285,
        ..._289,
        ..._293,
        ..._298
      };
    }
    export namespace client {
      export const v1 = {
        ..._113,
        ..._114,
        ..._115,
        ..._116,
        ..._286,
        ..._290,
        ..._294,
        ..._299
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
        ..._287,
        ..._291,
        ..._295,
        ..._300
      };
    }
    export namespace port {
      export const v1 = {
        ..._122,
        ..._296
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
    ..._346,
    ..._347
  };
}