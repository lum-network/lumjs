import * as _181 from "./network/airdrop/claim";
import * as _182 from "./network/airdrop/genesis";
import * as _183 from "./network/airdrop/params";
import * as _184 from "./network/airdrop/query";
import * as _185 from "./network/airdrop/tx";
import * as _186 from "./network/beam/beam";
import * as _187 from "./network/beam/genesis";
import * as _188 from "./network/beam/query";
import * as _189 from "./network/beam/tx";
import * as _190 from "./network/dfract/deposit";
import * as _191 from "./network/dfract/genesis";
import * as _192 from "./network/dfract/gov";
import * as _193 from "./network/dfract/params";
import * as _194 from "./network/dfract/proposal";
import * as _195 from "./network/dfract/query";
import * as _196 from "./network/dfract/tx";
import * as _197 from "./network/epochs/genesis";
import * as _198 from "./network/epochs/query";
import * as _199 from "./network/icacallbacks/callback_data";
import * as _200 from "./network/icacallbacks/genesis";
import * as _201 from "./network/icacallbacks/packet";
import * as _202 from "./network/icacallbacks/params";
import * as _203 from "./network/icacallbacks/query";
import * as _204 from "./network/icacallbacks/tx";
import * as _205 from "./network/millions/callbacks";
import * as _206 from "./network/millions/deposit";
import * as _207 from "./network/millions/draw_schedule";
import * as _208 from "./network/millions/draw";
import * as _209 from "./network/millions/epoch";
import * as _210 from "./network/millions/genesis";
import * as _211 from "./network/millions/gov";
import * as _212 from "./network/millions/params";
import * as _213 from "./network/millions/pool";
import * as _214 from "./network/millions/prize_batch";
import * as _215 from "./network/millions/prize_ref";
import * as _216 from "./network/millions/prize_strategy";
import * as _217 from "./network/millions/prize";
import * as _218 from "./network/millions/query";
import * as _219 from "./network/millions/tx";
import * as _220 from "./network/millions/withdrawal";
import * as _326 from "./network/beam/tx.amino";
import * as _327 from "./network/dfract/tx.amino";
import * as _328 from "./network/millions/tx.amino";
import * as _329 from "./network/beam/tx.registry";
import * as _330 from "./network/dfract/tx.registry";
import * as _331 from "./network/millions/tx.registry";
import * as _332 from "./network/airdrop/query.rpc.Query";
import * as _333 from "./network/beam/query.rpc.Query";
import * as _334 from "./network/dfract/query.rpc.Query";
import * as _335 from "./network/epochs/query.rpc.Query";
import * as _336 from "./network/icacallbacks/query.rpc.Query";
import * as _337 from "./network/millions/query.rpc.Query";
import * as _338 from "./network/beam/tx.rpc.msg";
import * as _339 from "./network/dfract/tx.rpc.msg";
import * as _340 from "./network/millions/tx.rpc.msg";
import * as _350 from "./rpc.query";
import * as _351 from "./rpc.tx";
export namespace lum {
  export namespace network {
    export const airdrop = {
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._332
    };
    export const beam = {
      ..._186,
      ..._187,
      ..._188,
      ..._189,
      ..._326,
      ..._329,
      ..._333,
      ..._338
    };
    export const dfract = {
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._327,
      ..._330,
      ..._334,
      ..._339
    };
    export const epochs = {
      ..._197,
      ..._198,
      ..._335
    };
    export const icacallbacks = {
      ..._199,
      ..._200,
      ..._201,
      ..._202,
      ..._203,
      ..._204,
      ..._336
    };
    export const millions = {
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._328,
      ..._331,
      ..._337,
      ..._340
    };
  }
  export const ClientFactory = {
    ..._350,
    ..._351
  };
}