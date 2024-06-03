import * as _221 from "./interchainquery/v1/genesis";
import * as _222 from "./interchainquery/v1/message";
import * as _223 from "./interchainquery/v1/query";
import * as _341 from "./interchainquery/v1/message.amino";
import * as _342 from "./interchainquery/v1/message.registry";
import * as _343 from "./interchainquery/v1/message.rpc.msg";
import * as _352 from "./rpc.tx";
export namespace stride {
  export namespace interchainquery {
    export const v1 = {
      ..._221,
      ..._222,
      ..._223,
      ..._341,
      ..._342,
      ..._343
    };
  }
  export const ClientFactory = {
    ..._352
  };
}