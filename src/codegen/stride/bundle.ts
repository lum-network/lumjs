import * as _175 from "./interchainquery/v1/genesis";
import * as _176 from "./interchainquery/v1/message";
import * as _177 from "./interchainquery/v1/query";
import * as _268 from "./interchainquery/v1/message.amino";
import * as _269 from "./interchainquery/v1/message.registry";
import * as _270 from "./interchainquery/v1/message.rpc.msg";
import * as _277 from "./rpc.tx";
export namespace stride {
  export namespace interchainquery {
    export const v1 = {
      ..._175,
      ..._176,
      ..._177,
      ..._268,
      ..._269,
      ..._270
    };
  }
  export const ClientFactory = {
    ..._277
  };
}