"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrateFromInfo = exports.PackageReference = exports.ModuleDescriptor = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseModuleDescriptor() {
    return {
        goImport: "",
        usePackage: [],
        canMigrateFrom: []
    };
}
exports.ModuleDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.goImport !== "") {
            writer.uint32(10).string(message.goImport);
        }
        for (const v of message.usePackage) {
            exports.PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.canMigrateFrom) {
            exports.MigrateFromInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.goImport = reader.string();
                    break;
                case 2:
                    message.usePackage.push(exports.PackageReference.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.canMigrateFrom.push(exports.MigrateFromInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleDescriptor();
        message.goImport = object.goImport ?? "";
        message.usePackage = object.usePackage?.map(e => exports.PackageReference.fromPartial(e)) || [];
        message.canMigrateFrom = object.canMigrateFrom?.map(e => exports.MigrateFromInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            goImport: object.go_import,
            usePackage: Array.isArray(object?.use_package) ? object.use_package.map((e) => exports.PackageReference.fromAmino(e)) : [],
            canMigrateFrom: Array.isArray(object?.can_migrate_from) ? object.can_migrate_from.map((e) => exports.MigrateFromInfo.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.go_import = message.goImport;
        if (message.usePackage) {
            obj.use_package = message.usePackage.map(e => e ? exports.PackageReference.toAmino(e) : undefined);
        }
        else {
            obj.use_package = [];
        }
        if (message.canMigrateFrom) {
            obj.can_migrate_from = message.canMigrateFrom.map(e => e ? exports.MigrateFromInfo.toAmino(e) : undefined);
        }
        else {
            obj.can_migrate_from = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleDescriptor",
            value: exports.ModuleDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
            value: exports.ModuleDescriptor.encode(message).finish()
        };
    }
};
function createBasePackageReference() {
    return {
        name: "",
        revision: 0
    };
}
exports.PackageReference = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.revision !== 0) {
            writer.uint32(16).uint32(message.revision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePackageReference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.revision = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePackageReference();
        message.name = object.name ?? "";
        message.revision = object.revision ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            revision: object.revision
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.revision = message.revision;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PackageReference.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PackageReference",
            value: exports.PackageReference.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PackageReference.decode(message.value);
    },
    toProto(message) {
        return exports.PackageReference.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.PackageReference",
            value: exports.PackageReference.encode(message).finish()
        };
    }
};
function createBaseMigrateFromInfo() {
    return {
        module: ""
    };
}
exports.MigrateFromInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigrateFromInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMigrateFromInfo();
        message.module = object.module ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            module: object.module
        };
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MigrateFromInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MigrateFromInfo",
            value: exports.MigrateFromInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MigrateFromInfo.decode(message.value);
    },
    toProto(message) {
        return exports.MigrateFromInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
            value: exports.MigrateFromInfo.encode(message).finish()
        };
    }
};
//# sourceMappingURL=module.js.map