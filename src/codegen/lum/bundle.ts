import * as _137 from "./network/airdrop/claim";
import * as _138 from "./network/airdrop/genesis";
import * as _139 from "./network/airdrop/params";
import * as _140 from "./network/airdrop/query";
import * as _141 from "./network/airdrop/tx";
import * as _142 from "./network/beam/beam";
import * as _143 from "./network/beam/genesis";
import * as _144 from "./network/beam/query";
import * as _145 from "./network/beam/tx";
import * as _146 from "./network/dfract/deposit";
import * as _147 from "./network/dfract/genesis";
import * as _148 from "./network/dfract/gov";
import * as _149 from "./network/dfract/params";
import * as _150 from "./network/dfract/proposal";
import * as _151 from "./network/dfract/query";
import * as _152 from "./network/dfract/tx";
import * as _153 from "./network/icacallbacks/callback_data";
import * as _154 from "./network/icacallbacks/genesis";
import * as _155 from "./network/icacallbacks/packet";
import * as _156 from "./network/icacallbacks/params";
import * as _157 from "./network/icacallbacks/query";
import * as _158 from "./network/icacallbacks/tx";
import * as _159 from "./network/millions/callbacks";
import * as _160 from "./network/millions/deposit";
import * as _161 from "./network/millions/draw_schedule";
import * as _162 from "./network/millions/draw";
import * as _163 from "./network/millions/epoch";
import * as _164 from "./network/millions/genesis";
import * as _165 from "./network/millions/gov";
import * as _166 from "./network/millions/params";
import * as _167 from "./network/millions/pool";
import * as _168 from "./network/millions/prize_batch";
import * as _169 from "./network/millions/prize_ref";
import * as _170 from "./network/millions/prize_strategy";
import * as _171 from "./network/millions/prize";
import * as _172 from "./network/millions/query";
import * as _173 from "./network/millions/tx";
import * as _174 from "./network/millions/withdrawal";
import * as _254 from "./network/beam/tx.amino";
import * as _255 from "./network/dfract/tx.amino";
import * as _256 from "./network/millions/tx.amino";
import * as _257 from "./network/beam/tx.registry";
import * as _258 from "./network/dfract/tx.registry";
import * as _259 from "./network/millions/tx.registry";
import * as _260 from "./network/airdrop/query.rpc.Query";
import * as _261 from "./network/beam/query.rpc.Query";
import * as _262 from "./network/dfract/query.rpc.Query";
import * as _263 from "./network/icacallbacks/query.rpc.Query";
import * as _264 from "./network/millions/query.rpc.Query";
import * as _265 from "./network/beam/tx.rpc.msg";
import * as _266 from "./network/dfract/tx.rpc.msg";
import * as _267 from "./network/millions/tx.rpc.msg";
import * as _275 from "./rpc.query";
import * as _276 from "./rpc.tx";
export namespace lum {
  export namespace network {
    export const airdrop = {
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._260
    };
    export const beam = {
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._254,
      ..._257,
      ..._261,
      ..._265
    };
    export const dfract = {
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._255,
      ..._258,
      ..._262,
      ..._266
    };
    export const icacallbacks = {
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._263
    };
    export const millions = {
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._256,
      ..._259,
      ..._264,
      ..._267
    };
  }
  export const ClientFactory = {
    ..._275,
    ..._276
  };
}