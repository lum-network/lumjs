import * as _128 from "./auction/v1beta1/auction";
import * as _129 from "./auction/v1beta1/genesis";
import * as _130 from "./auction/v1beta1/query";
import * as _131 from "./auction/v1beta1/tx";
import * as _132 from "./crypto/v1beta1/ethsecp256k1/keys";
import * as _133 from "./exchange/v1beta1/authz";
import * as _134 from "./exchange/v1beta1/events";
import * as _135 from "./exchange/v1beta1/exchange";
import * as _136 from "./exchange/v1beta1/genesis";
import * as _137 from "./exchange/v1beta1/query";
import * as _138 from "./exchange/v1beta1/tx";
import * as _139 from "./insurance/v1beta1/genesis";
import * as _140 from "./insurance/v1beta1/insurance";
import * as _141 from "./insurance/v1beta1/query";
import * as _142 from "./insurance/v1beta1/tx";
import * as _143 from "./ocr/v1beta1/genesis";
import * as _144 from "./ocr/v1beta1/ocr";
import * as _145 from "./ocr/v1beta1/query";
import * as _146 from "./ocr/v1beta1/tx";
import * as _147 from "./oracle/v1beta1/events";
import * as _148 from "./oracle/v1beta1/genesis";
import * as _149 from "./oracle/v1beta1/oracle";
import * as _150 from "./oracle/v1beta1/proposal";
import * as _151 from "./oracle/v1beta1/query";
import * as _152 from "./oracle/v1beta1/tx";
import * as _153 from "./peggy/v1/attestation";
import * as _154 from "./peggy/v1/batch";
import * as _155 from "./peggy/v1/ethereum_signer";
import * as _156 from "./peggy/v1/events";
import * as _157 from "./peggy/v1/genesis";
import * as _158 from "./peggy/v1/msgs";
import * as _159 from "./peggy/v1/pool";
import * as _160 from "./peggy/v1/proposal";
import * as _161 from "./peggy/v1/query";
import * as _162 from "./peggy/v1/types";
import * as _163 from "./types/v1beta1/account";
import * as _164 from "./types/v1beta1/tx_ext";
import * as _165 from "./types/v1beta1/tx_response";
import * as _166 from "./wasmx/v1/genesis";
import * as _167 from "./wasmx/v1/query";
import * as _168 from "./wasmx/v1/tx";
import * as _169 from "./wasmx/v1/wasmx";
import * as _301 from "./auction/v1beta1/tx.amino";
import * as _302 from "./exchange/v1beta1/tx.amino";
import * as _303 from "./insurance/v1beta1/tx.amino";
import * as _304 from "./ocr/v1beta1/tx.amino";
import * as _305 from "./oracle/v1beta1/tx.amino";
import * as _306 from "./peggy/v1/msgs.amino";
import * as _307 from "./auction/v1beta1/tx.registry";
import * as _308 from "./exchange/v1beta1/tx.registry";
import * as _309 from "./insurance/v1beta1/tx.registry";
import * as _310 from "./ocr/v1beta1/tx.registry";
import * as _311 from "./oracle/v1beta1/tx.registry";
import * as _312 from "./peggy/v1/msgs.registry";
import * as _313 from "./auction/v1beta1/query.rpc.Query";
import * as _314 from "./exchange/v1beta1/query.rpc.Query";
import * as _315 from "./insurance/v1beta1/query.rpc.Query";
import * as _316 from "./ocr/v1beta1/query.rpc.Query";
import * as _317 from "./oracle/v1beta1/query.rpc.Query";
import * as _318 from "./peggy/v1/query.rpc.Query";
import * as _319 from "./wasmx/v1/query.rpc.Query";
import * as _320 from "./auction/v1beta1/tx.rpc.msg";
import * as _321 from "./exchange/v1beta1/tx.rpc.msg";
import * as _322 from "./insurance/v1beta1/tx.rpc.msg";
import * as _323 from "./ocr/v1beta1/tx.rpc.msg";
import * as _324 from "./oracle/v1beta1/tx.rpc.msg";
import * as _325 from "./peggy/v1/msgs.rpc.msg";
import * as _348 from "./rpc.query";
import * as _349 from "./rpc.tx";
export namespace injective {
  export namespace auction {
    export const v1beta1 = {
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._301,
      ..._307,
      ..._313,
      ..._320
    };
  }
  export namespace crypto {
    export namespace v1beta1 {
      export const ethsecp256k1 = {
        ..._132
      };
    }
  }
  export namespace exchange {
    export const v1beta1 = {
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._302,
      ..._308,
      ..._314,
      ..._321
    };
  }
  export namespace insurance {
    export const v1beta1 = {
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._303,
      ..._309,
      ..._315,
      ..._322
    };
  }
  export namespace ocr {
    export const v1beta1 = {
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._304,
      ..._310,
      ..._316,
      ..._323
    };
  }
  export namespace oracle {
    export const v1beta1 = {
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._305,
      ..._311,
      ..._317,
      ..._324
    };
  }
  export namespace peggy {
    export const v1 = {
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._306,
      ..._312,
      ..._318,
      ..._325
    };
  }
  export namespace types {
    export const v1beta1 = {
      ..._163,
      ..._164,
      ..._165
    };
  }
  export namespace wasmx {
    export const v1 = {
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._319
    };
  }
  export const ClientFactory = {
    ..._348,
    ..._349
  };
}