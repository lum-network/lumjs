import * as _179 from "./interchainquery/v1/genesis";
import * as _180 from "./interchainquery/v1/message";
import * as _181 from "./interchainquery/v1/query";
import * as _274 from "./interchainquery/v1/message.amino";
import * as _275 from "./interchainquery/v1/message.registry";
import * as _276 from "./interchainquery/v1/message.rpc.msg";
import * as _283 from "./rpc.tx";
export namespace stride {
  export namespace interchainquery {
    export const v1 = {
      ..._179,
      ..._180,
      ..._181,
      ..._274,
      ..._275,
      ..._276
    };
  }
  export const ClientFactory = {
    ..._283
  };
}