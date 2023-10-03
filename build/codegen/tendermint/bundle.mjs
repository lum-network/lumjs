import * as _126 from "./abci/types";
import * as _127 from "./crypto/keys";
import * as _128 from "./crypto/proof";
import * as _129 from "./libs/bits/types";
import * as _130 from "./p2p/types";
import * as _131 from "./types/block";
import * as _132 from "./types/evidence";
import * as _133 from "./types/params";
import * as _134 from "./types/types";
import * as _135 from "./types/validator";
import * as _136 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._126
    };
    tendermint.crypto = {
        ..._127,
        ..._128
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._129
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._130
    };
    tendermint.types = {
        ..._131,
        ..._132,
        ..._133,
        ..._134,
        ..._135
    };
    tendermint.version = {
        ..._136
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map