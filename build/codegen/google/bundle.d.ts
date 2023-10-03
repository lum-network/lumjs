/// <reference types="long" />
import * as _97 from "./api/http";
import * as _98 from "./protobuf/any";
import * as _99 from "./protobuf/descriptor";
import * as _100 from "./protobuf/duration";
import * as _101 from "./protobuf/empty";
import * as _102 from "./protobuf/timestamp";
import * as _103 from "./protobuf/wrappers";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _97.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Http;
            fromPartial(object: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            }): _97.Http;
            fromAmino(object: _97.HttpAmino): _97.Http;
            toAmino(message: _97.Http): _97.HttpAmino;
            fromAminoMsg(object: _97.HttpAminoMsg): _97.Http;
            fromProtoMsg(message: _97.HttpProtoMsg): _97.Http;
            toProto(message: _97.Http): Uint8Array;
            toProtoMsg(message: _97.Http): _97.HttpProtoMsg;
        };
        HttpRule: {
            encode(message: _97.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.HttpRule;
            fromPartial(object: {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                responseBody?: string;
                additionalBindings?: any[];
            }): _97.HttpRule;
            fromAmino(object: _97.HttpRuleAmino): _97.HttpRule;
            toAmino(message: _97.HttpRule): _97.HttpRuleAmino;
            fromAminoMsg(object: _97.HttpRuleAminoMsg): _97.HttpRule;
            fromProtoMsg(message: _97.HttpRuleProtoMsg): _97.HttpRule;
            toProto(message: _97.HttpRule): Uint8Array;
            toProtoMsg(message: _97.HttpRule): _97.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            encode(message: _97.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.CustomHttpPattern;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _97.CustomHttpPattern;
            fromAmino(object: _97.CustomHttpPatternAmino): _97.CustomHttpPattern;
            toAmino(message: _97.CustomHttpPattern): _97.CustomHttpPatternAmino;
            fromAminoMsg(object: _97.CustomHttpPatternAminoMsg): _97.CustomHttpPattern;
            fromProtoMsg(message: _97.CustomHttpPatternProtoMsg): _97.CustomHttpPattern;
            toProto(message: _97.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _97.CustomHttpPattern): _97.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _103.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.DoubleValue;
            fromPartial(object: {
                value?: number;
            }): _103.DoubleValue;
            fromAmino(object: _103.DoubleValueAmino): _103.DoubleValue;
            toAmino(message: _103.DoubleValue): _103.DoubleValueAmino;
            fromAminoMsg(object: _103.DoubleValueAminoMsg): _103.DoubleValue;
            fromProtoMsg(message: _103.DoubleValueProtoMsg): _103.DoubleValue;
            toProto(message: _103.DoubleValue): Uint8Array;
            toProtoMsg(message: _103.DoubleValue): _103.DoubleValueProtoMsg;
        };
        FloatValue: {
            encode(message: _103.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.FloatValue;
            fromPartial(object: {
                value?: number;
            }): _103.FloatValue;
            fromAmino(object: _103.FloatValueAmino): _103.FloatValue;
            toAmino(message: _103.FloatValue): _103.FloatValueAmino;
            fromAminoMsg(object: _103.FloatValueAminoMsg): _103.FloatValue;
            fromProtoMsg(message: _103.FloatValueProtoMsg): _103.FloatValue;
            toProto(message: _103.FloatValue): Uint8Array;
            toProtoMsg(message: _103.FloatValue): _103.FloatValueProtoMsg;
        };
        Int64Value: {
            encode(message: _103.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Int64Value;
            fromPartial(object: {
                value?: string | number | import("long").Long;
            }): _103.Int64Value;
            fromAmino(object: _103.Int64ValueAmino): _103.Int64Value;
            toAmino(message: _103.Int64Value): _103.Int64ValueAmino;
            fromAminoMsg(object: _103.Int64ValueAminoMsg): _103.Int64Value;
            fromProtoMsg(message: _103.Int64ValueProtoMsg): _103.Int64Value;
            toProto(message: _103.Int64Value): Uint8Array;
            toProtoMsg(message: _103.Int64Value): _103.Int64ValueProtoMsg;
        };
        UInt64Value: {
            encode(message: _103.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.UInt64Value;
            fromPartial(object: {
                value?: string | number | import("long").Long;
            }): _103.UInt64Value;
            fromAmino(object: _103.UInt64ValueAmino): _103.UInt64Value;
            toAmino(message: _103.UInt64Value): _103.UInt64ValueAmino;
            fromAminoMsg(object: _103.UInt64ValueAminoMsg): _103.UInt64Value;
            fromProtoMsg(message: _103.UInt64ValueProtoMsg): _103.UInt64Value;
            toProto(message: _103.UInt64Value): Uint8Array;
            toProtoMsg(message: _103.UInt64Value): _103.UInt64ValueProtoMsg;
        };
        Int32Value: {
            encode(message: _103.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Int32Value;
            fromPartial(object: {
                value?: number;
            }): _103.Int32Value;
            fromAmino(object: _103.Int32ValueAmino): _103.Int32Value;
            toAmino(message: _103.Int32Value): _103.Int32ValueAmino;
            fromAminoMsg(object: _103.Int32ValueAminoMsg): _103.Int32Value;
            fromProtoMsg(message: _103.Int32ValueProtoMsg): _103.Int32Value;
            toProto(message: _103.Int32Value): Uint8Array;
            toProtoMsg(message: _103.Int32Value): _103.Int32ValueProtoMsg;
        };
        UInt32Value: {
            encode(message: _103.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.UInt32Value;
            fromPartial(object: {
                value?: number;
            }): _103.UInt32Value;
            fromAmino(object: _103.UInt32ValueAmino): _103.UInt32Value;
            toAmino(message: _103.UInt32Value): _103.UInt32ValueAmino;
            fromAminoMsg(object: _103.UInt32ValueAminoMsg): _103.UInt32Value;
            fromProtoMsg(message: _103.UInt32ValueProtoMsg): _103.UInt32Value;
            toProto(message: _103.UInt32Value): Uint8Array;
            toProtoMsg(message: _103.UInt32Value): _103.UInt32ValueProtoMsg;
        };
        BoolValue: {
            encode(message: _103.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.BoolValue;
            fromPartial(object: {
                value?: boolean;
            }): _103.BoolValue;
            fromAmino(object: _103.BoolValueAmino): _103.BoolValue;
            toAmino(message: _103.BoolValue): _103.BoolValueAmino;
            fromAminoMsg(object: _103.BoolValueAminoMsg): _103.BoolValue;
            fromProtoMsg(message: _103.BoolValueProtoMsg): _103.BoolValue;
            toProto(message: _103.BoolValue): Uint8Array;
            toProtoMsg(message: _103.BoolValue): _103.BoolValueProtoMsg;
        };
        StringValue: {
            encode(message: _103.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.StringValue;
            fromPartial(object: {
                value?: string;
            }): _103.StringValue;
            fromAmino(object: _103.StringValueAmino): _103.StringValue;
            toAmino(message: _103.StringValue): _103.StringValueAmino;
            fromAminoMsg(object: _103.StringValueAminoMsg): _103.StringValue;
            fromProtoMsg(message: _103.StringValueProtoMsg): _103.StringValue;
            toProto(message: _103.StringValue): Uint8Array;
            toProtoMsg(message: _103.StringValue): _103.StringValueProtoMsg;
        };
        BytesValue: {
            encode(message: _103.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.BytesValue;
            fromPartial(object: {
                value?: Uint8Array;
            }): _103.BytesValue;
            fromAmino(object: _103.BytesValueAmino): _103.BytesValue;
            toAmino(message: _103.BytesValue): _103.BytesValueAmino;
            fromAminoMsg(object: _103.BytesValueAminoMsg): _103.BytesValue;
            fromProtoMsg(message: _103.BytesValueProtoMsg): _103.BytesValue;
            toProto(message: _103.BytesValue): Uint8Array;
            toProtoMsg(message: _103.BytesValue): _103.BytesValueProtoMsg;
        };
        Timestamp: {
            encode(message: _102.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Timestamp;
            fromPartial(object: {
                seconds?: string | number | import("long").Long;
                nanos?: number;
            }): _102.Timestamp;
            fromAmino(object: string): _102.Timestamp;
            toAmino(message: _102.Timestamp): string;
            fromAminoMsg(object: _102.TimestampAminoMsg): _102.Timestamp;
            fromProtoMsg(message: _102.TimestampProtoMsg): _102.Timestamp;
            toProto(message: _102.Timestamp): Uint8Array;
            toProtoMsg(message: _102.Timestamp): _102.TimestampProtoMsg;
        };
        Empty: {
            encode(_: _101.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Empty;
            fromPartial(_: {}): _101.Empty;
            fromAmino(_: _101.EmptyAmino): _101.Empty;
            toAmino(_: _101.Empty): _101.EmptyAmino;
            fromAminoMsg(object: _101.EmptyAminoMsg): _101.Empty;
            fromProtoMsg(message: _101.EmptyProtoMsg): _101.Empty;
            toProto(message: _101.Empty): Uint8Array;
            toProtoMsg(message: _101.Empty): _101.EmptyProtoMsg;
        };
        Duration: {
            encode(message: _100.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Duration;
            fromPartial(object: {
                seconds?: string | number | import("long").Long;
                nanos?: number;
            }): _100.Duration;
            fromAmino(object: string): _100.Duration;
            toAmino(message: _100.Duration): string;
            fromAminoMsg(object: _100.DurationAminoMsg): _100.Duration;
            fromProtoMsg(message: _100.DurationProtoMsg): _100.Duration;
            toProto(message: _100.Duration): Uint8Array;
            toProtoMsg(message: _100.Duration): _100.DurationProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _99.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _99.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _99.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _99.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _99.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _99.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _99.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _99.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _99.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _99.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _99.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _99.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _99.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _99.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _99.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _99.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _99.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _99.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _99.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _99.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _99.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _99.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _99.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _99.FieldOptions_CType;
        FieldOptions_JSType: typeof _99.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _99.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _99.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _99.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _99.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _99.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _99.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FileDescriptorSet;
            fromPartial(object: {
                file?: {
                    name?: string;
                    package?: string;
                    dependency?: string[];
                    publicDependency?: number[];
                    weakDependency?: number[];
                    messageType?: {
                        name?: string;
                        field?: {
                            name?: string;
                            number?: number;
                            label?: _99.FieldDescriptorProto_Label;
                            type?: _99.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _99.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _99.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        extension?: {
                            name?: string;
                            number?: number;
                            label?: _99.FieldDescriptorProto_Label;
                            type?: _99.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _99.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _99.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        nestedType?: any[];
                        enumType?: {
                            name?: string;
                            value?: {
                                name?: string;
                                number?: number;
                                options?: {
                                    deprecated?: boolean;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: string | number | import("long").Long;
                                        negativeIntValue?: string | number | import("long").Long;
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                allowAlias?: boolean;
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            reservedRange?: {
                                start?: number;
                                end?: number;
                            }[];
                            reservedName?: string[];
                        }[];
                        extensionRange?: {
                            start?: number;
                            end?: number;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        oneofDecl?: {
                            name?: string;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            messageSetWireFormat?: boolean;
                            noStandardDescriptorAccessor?: boolean;
                            deprecated?: boolean;
                            mapEntry?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    service?: {
                        name?: string;
                        method?: {
                            name?: string;
                            inputType?: string;
                            outputType?: string;
                            options?: {
                                deprecated?: boolean;
                                idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            clientStreaming?: boolean;
                            serverStreaming?: boolean;
                        }[];
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _99.FieldDescriptorProto_Label;
                        type?: _99.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _99.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _99.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        javaPackage?: string;
                        javaOuterClassname?: string;
                        javaMultipleFiles?: boolean;
                        javaGenerateEqualsAndHash?: boolean;
                        javaStringCheckUtf8?: boolean;
                        optimizeFor?: _99.FileOptions_OptimizeMode;
                        goPackage?: string;
                        ccGenericServices?: boolean;
                        javaGenericServices?: boolean;
                        pyGenericServices?: boolean;
                        phpGenericServices?: boolean;
                        deprecated?: boolean;
                        ccEnableArenas?: boolean;
                        objcClassPrefix?: string;
                        csharpNamespace?: string;
                        swiftPrefix?: string;
                        phpClassPrefix?: string;
                        phpNamespace?: string;
                        phpMetadataNamespace?: string;
                        rubyPackage?: string;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    sourceCodeInfo?: {
                        location?: {
                            path?: number[];
                            span?: number[];
                            leadingComments?: string;
                            trailingComments?: string;
                            leadingDetachedComments?: string[];
                        }[];
                    };
                    syntax?: string;
                }[];
            }): _99.FileDescriptorSet;
            fromAmino(object: _99.FileDescriptorSetAmino): _99.FileDescriptorSet;
            toAmino(message: _99.FileDescriptorSet): _99.FileDescriptorSetAmino;
            fromAminoMsg(object: _99.FileDescriptorSetAminoMsg): _99.FileDescriptorSet;
            fromProtoMsg(message: _99.FileDescriptorSetProtoMsg): _99.FileDescriptorSet;
            toProto(message: _99.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _99.FileDescriptorSet): _99.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            encode(message: _99.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FileDescriptorProto;
            fromPartial(object: {
                name?: string;
                package?: string;
                dependency?: string[];
                publicDependency?: number[];
                weakDependency?: number[];
                messageType?: {
                    name?: string;
                    field?: {
                        name?: string;
                        number?: number;
                        label?: _99.FieldDescriptorProto_Label;
                        type?: _99.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _99.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _99.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _99.FieldDescriptorProto_Label;
                        type?: _99.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _99.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _99.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    nestedType?: any[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long").Long;
                                    negativeIntValue?: string | number | import("long").Long;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    extensionRange?: {
                        start?: number;
                        end?: number;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    oneofDecl?: {
                        name?: string;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        messageSetWireFormat?: boolean;
                        noStandardDescriptorAccessor?: boolean;
                        deprecated?: boolean;
                        mapEntry?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                service?: {
                    name?: string;
                    method?: {
                        name?: string;
                        inputType?: string;
                        outputType?: string;
                        options?: {
                            deprecated?: boolean;
                            idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        clientStreaming?: boolean;
                        serverStreaming?: boolean;
                    }[];
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _99.FieldDescriptorProto_Label;
                    type?: _99.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _99.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _99.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    javaPackage?: string;
                    javaOuterClassname?: string;
                    javaMultipleFiles?: boolean;
                    javaGenerateEqualsAndHash?: boolean;
                    javaStringCheckUtf8?: boolean;
                    optimizeFor?: _99.FileOptions_OptimizeMode;
                    goPackage?: string;
                    ccGenericServices?: boolean;
                    javaGenericServices?: boolean;
                    pyGenericServices?: boolean;
                    phpGenericServices?: boolean;
                    deprecated?: boolean;
                    ccEnableArenas?: boolean;
                    objcClassPrefix?: string;
                    csharpNamespace?: string;
                    swiftPrefix?: string;
                    phpClassPrefix?: string;
                    phpNamespace?: string;
                    phpMetadataNamespace?: string;
                    rubyPackage?: string;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                sourceCodeInfo?: {
                    location?: {
                        path?: number[];
                        span?: number[];
                        leadingComments?: string;
                        trailingComments?: string;
                        leadingDetachedComments?: string[];
                    }[];
                };
                syntax?: string;
            }): _99.FileDescriptorProto;
            fromAmino(object: _99.FileDescriptorProtoAmino): _99.FileDescriptorProto;
            toAmino(message: _99.FileDescriptorProto): _99.FileDescriptorProtoAmino;
            fromAminoMsg(object: _99.FileDescriptorProtoAminoMsg): _99.FileDescriptorProto;
            fromProtoMsg(message: _99.FileDescriptorProtoProtoMsg): _99.FileDescriptorProto;
            toProto(message: _99.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _99.FileDescriptorProto): _99.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            encode(message: _99.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.DescriptorProto;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _99.FieldDescriptorProto_Label;
                    type?: _99.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _99.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _99.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _99.FieldDescriptorProto_Label;
                    type?: _99.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _99.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _99.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                nestedType?: any[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long").Long;
                                negativeIntValue?: string | number | import("long").Long;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                extensionRange?: {
                    start?: number;
                    end?: number;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                oneofDecl?: {
                    name?: string;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    messageSetWireFormat?: boolean;
                    noStandardDescriptorAccessor?: boolean;
                    deprecated?: boolean;
                    mapEntry?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _99.DescriptorProto;
            fromAmino(object: _99.DescriptorProtoAmino): _99.DescriptorProto;
            toAmino(message: _99.DescriptorProto): _99.DescriptorProtoAmino;
            fromAminoMsg(object: _99.DescriptorProtoAminoMsg): _99.DescriptorProto;
            fromProtoMsg(message: _99.DescriptorProtoProtoMsg): _99.DescriptorProto;
            toProto(message: _99.DescriptorProto): Uint8Array;
            toProtoMsg(message: _99.DescriptorProto): _99.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _99.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.DescriptorProto_ExtensionRange;
            fromPartial(object: {
                start?: number;
                end?: number;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _99.DescriptorProto_ExtensionRange;
            fromAmino(object: _99.DescriptorProto_ExtensionRangeAmino): _99.DescriptorProto_ExtensionRange;
            toAmino(message: _99.DescriptorProto_ExtensionRange): _99.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _99.DescriptorProto_ExtensionRangeAminoMsg): _99.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _99.DescriptorProto_ExtensionRangeProtoMsg): _99.DescriptorProto_ExtensionRange;
            toProto(message: _99.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _99.DescriptorProto_ExtensionRange): _99.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _99.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.DescriptorProto_ReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _99.DescriptorProto_ReservedRange;
            fromAmino(object: _99.DescriptorProto_ReservedRangeAmino): _99.DescriptorProto_ReservedRange;
            toAmino(message: _99.DescriptorProto_ReservedRange): _99.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _99.DescriptorProto_ReservedRangeAminoMsg): _99.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _99.DescriptorProto_ReservedRangeProtoMsg): _99.DescriptorProto_ReservedRange;
            toProto(message: _99.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _99.DescriptorProto_ReservedRange): _99.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            encode(message: _99.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ExtensionRangeOptions;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.ExtensionRangeOptions;
            fromAmino(object: _99.ExtensionRangeOptionsAmino): _99.ExtensionRangeOptions;
            toAmino(message: _99.ExtensionRangeOptions): _99.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _99.ExtensionRangeOptionsAminoMsg): _99.ExtensionRangeOptions;
            fromProtoMsg(message: _99.ExtensionRangeOptionsProtoMsg): _99.ExtensionRangeOptions;
            toProto(message: _99.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _99.ExtensionRangeOptions): _99.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            encode(message: _99.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FieldDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _99.FieldDescriptorProto_Label;
                type?: _99.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _99.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _99.FieldOptions_JSType;
                    lazy?: boolean;
                    deprecated?: boolean;
                    weak?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _99.FieldDescriptorProto;
            fromAmino(object: _99.FieldDescriptorProtoAmino): _99.FieldDescriptorProto;
            toAmino(message: _99.FieldDescriptorProto): _99.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _99.FieldDescriptorProtoAminoMsg): _99.FieldDescriptorProto;
            fromProtoMsg(message: _99.FieldDescriptorProtoProtoMsg): _99.FieldDescriptorProto;
            toProto(message: _99.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _99.FieldDescriptorProto): _99.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            encode(message: _99.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.OneofDescriptorProto;
            fromPartial(object: {
                name?: string;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _99.OneofDescriptorProto;
            fromAmino(object: _99.OneofDescriptorProtoAmino): _99.OneofDescriptorProto;
            toAmino(message: _99.OneofDescriptorProto): _99.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _99.OneofDescriptorProtoAminoMsg): _99.OneofDescriptorProto;
            fromProtoMsg(message: _99.OneofDescriptorProtoProtoMsg): _99.OneofDescriptorProto;
            toProto(message: _99.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _99.OneofDescriptorProto): _99.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            encode(message: _99.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumDescriptorProto;
            fromPartial(object: {
                name?: string;
                value?: {
                    name?: string;
                    number?: number;
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    allowAlias?: boolean;
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _99.EnumDescriptorProto;
            fromAmino(object: _99.EnumDescriptorProtoAmino): _99.EnumDescriptorProto;
            toAmino(message: _99.EnumDescriptorProto): _99.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _99.EnumDescriptorProtoAminoMsg): _99.EnumDescriptorProto;
            fromProtoMsg(message: _99.EnumDescriptorProtoProtoMsg): _99.EnumDescriptorProto;
            toProto(message: _99.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _99.EnumDescriptorProto): _99.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _99.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _99.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _99.EnumDescriptorProto_EnumReservedRangeAmino): _99.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _99.EnumDescriptorProto_EnumReservedRange): _99.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _99.EnumDescriptorProto_EnumReservedRangeAminoMsg): _99.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _99.EnumDescriptorProto_EnumReservedRangeProtoMsg): _99.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _99.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _99.EnumDescriptorProto_EnumReservedRange): _99.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            encode(message: _99.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumValueDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _99.EnumValueDescriptorProto;
            fromAmino(object: _99.EnumValueDescriptorProtoAmino): _99.EnumValueDescriptorProto;
            toAmino(message: _99.EnumValueDescriptorProto): _99.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _99.EnumValueDescriptorProtoAminoMsg): _99.EnumValueDescriptorProto;
            fromProtoMsg(message: _99.EnumValueDescriptorProtoProtoMsg): _99.EnumValueDescriptorProto;
            toProto(message: _99.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _99.EnumValueDescriptorProto): _99.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            encode(message: _99.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ServiceDescriptorProto;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long").Long;
                            negativeIntValue?: string | number | import("long").Long;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    clientStreaming?: boolean;
                    serverStreaming?: boolean;
                }[];
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _99.ServiceDescriptorProto;
            fromAmino(object: _99.ServiceDescriptorProtoAmino): _99.ServiceDescriptorProto;
            toAmino(message: _99.ServiceDescriptorProto): _99.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _99.ServiceDescriptorProtoAminoMsg): _99.ServiceDescriptorProto;
            fromProtoMsg(message: _99.ServiceDescriptorProtoProtoMsg): _99.ServiceDescriptorProto;
            toProto(message: _99.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _99.ServiceDescriptorProto): _99.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            encode(message: _99.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MethodDescriptorProto;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long").Long;
                        negativeIntValue?: string | number | import("long").Long;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                clientStreaming?: boolean;
                serverStreaming?: boolean;
            }): _99.MethodDescriptorProto;
            fromAmino(object: _99.MethodDescriptorProtoAmino): _99.MethodDescriptorProto;
            toAmino(message: _99.MethodDescriptorProto): _99.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _99.MethodDescriptorProtoAminoMsg): _99.MethodDescriptorProto;
            fromProtoMsg(message: _99.MethodDescriptorProtoProtoMsg): _99.MethodDescriptorProto;
            toProto(message: _99.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _99.MethodDescriptorProto): _99.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            encode(message: _99.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FileOptions;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _99.FileOptions_OptimizeMode;
                goPackage?: string;
                ccGenericServices?: boolean;
                javaGenericServices?: boolean;
                pyGenericServices?: boolean;
                phpGenericServices?: boolean;
                deprecated?: boolean;
                ccEnableArenas?: boolean;
                objcClassPrefix?: string;
                csharpNamespace?: string;
                swiftPrefix?: string;
                phpClassPrefix?: string;
                phpNamespace?: string;
                phpMetadataNamespace?: string;
                rubyPackage?: string;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.FileOptions;
            fromAmino(object: _99.FileOptionsAmino): _99.FileOptions;
            toAmino(message: _99.FileOptions): _99.FileOptionsAmino;
            fromAminoMsg(object: _99.FileOptionsAminoMsg): _99.FileOptions;
            fromProtoMsg(message: _99.FileOptionsProtoMsg): _99.FileOptions;
            toProto(message: _99.FileOptions): Uint8Array;
            toProtoMsg(message: _99.FileOptions): _99.FileOptionsProtoMsg;
        };
        MessageOptions: {
            encode(message: _99.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MessageOptions;
            fromPartial(object: {
                messageSetWireFormat?: boolean;
                noStandardDescriptorAccessor?: boolean;
                deprecated?: boolean;
                mapEntry?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.MessageOptions;
            fromAmino(object: _99.MessageOptionsAmino): _99.MessageOptions;
            toAmino(message: _99.MessageOptions): _99.MessageOptionsAmino;
            fromAminoMsg(object: _99.MessageOptionsAminoMsg): _99.MessageOptions;
            fromProtoMsg(message: _99.MessageOptionsProtoMsg): _99.MessageOptions;
            toProto(message: _99.MessageOptions): Uint8Array;
            toProtoMsg(message: _99.MessageOptions): _99.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            encode(message: _99.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.FieldOptions;
            fromPartial(object: {
                ctype?: _99.FieldOptions_CType;
                packed?: boolean;
                jstype?: _99.FieldOptions_JSType;
                lazy?: boolean;
                deprecated?: boolean;
                weak?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.FieldOptions;
            fromAmino(object: _99.FieldOptionsAmino): _99.FieldOptions;
            toAmino(message: _99.FieldOptions): _99.FieldOptionsAmino;
            fromAminoMsg(object: _99.FieldOptionsAminoMsg): _99.FieldOptions;
            fromProtoMsg(message: _99.FieldOptionsProtoMsg): _99.FieldOptions;
            toProto(message: _99.FieldOptions): Uint8Array;
            toProtoMsg(message: _99.FieldOptions): _99.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            encode(message: _99.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.OneofOptions;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.OneofOptions;
            fromAmino(object: _99.OneofOptionsAmino): _99.OneofOptions;
            toAmino(message: _99.OneofOptions): _99.OneofOptionsAmino;
            fromAminoMsg(object: _99.OneofOptionsAminoMsg): _99.OneofOptions;
            fromProtoMsg(message: _99.OneofOptionsProtoMsg): _99.OneofOptions;
            toProto(message: _99.OneofOptions): Uint8Array;
            toProtoMsg(message: _99.OneofOptions): _99.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            encode(message: _99.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumOptions;
            fromPartial(object: {
                allowAlias?: boolean;
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.EnumOptions;
            fromAmino(object: _99.EnumOptionsAmino): _99.EnumOptions;
            toAmino(message: _99.EnumOptions): _99.EnumOptionsAmino;
            fromAminoMsg(object: _99.EnumOptionsAminoMsg): _99.EnumOptions;
            fromProtoMsg(message: _99.EnumOptionsProtoMsg): _99.EnumOptions;
            toProto(message: _99.EnumOptions): Uint8Array;
            toProtoMsg(message: _99.EnumOptions): _99.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            encode(message: _99.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.EnumValueOptions;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.EnumValueOptions;
            fromAmino(object: _99.EnumValueOptionsAmino): _99.EnumValueOptions;
            toAmino(message: _99.EnumValueOptions): _99.EnumValueOptionsAmino;
            fromAminoMsg(object: _99.EnumValueOptionsAminoMsg): _99.EnumValueOptions;
            fromProtoMsg(message: _99.EnumValueOptionsProtoMsg): _99.EnumValueOptions;
            toProto(message: _99.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _99.EnumValueOptions): _99.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            encode(message: _99.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ServiceOptions;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.ServiceOptions;
            fromAmino(object: _99.ServiceOptionsAmino): _99.ServiceOptions;
            toAmino(message: _99.ServiceOptions): _99.ServiceOptionsAmino;
            fromAminoMsg(object: _99.ServiceOptionsAminoMsg): _99.ServiceOptions;
            fromProtoMsg(message: _99.ServiceOptionsProtoMsg): _99.ServiceOptions;
            toProto(message: _99.ServiceOptions): Uint8Array;
            toProtoMsg(message: _99.ServiceOptions): _99.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            encode(message: _99.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MethodOptions;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long").Long;
                    negativeIntValue?: string | number | import("long").Long;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _99.MethodOptions;
            fromAmino(object: _99.MethodOptionsAmino): _99.MethodOptions;
            toAmino(message: _99.MethodOptions): _99.MethodOptionsAmino;
            fromAminoMsg(object: _99.MethodOptionsAminoMsg): _99.MethodOptions;
            fromProtoMsg(message: _99.MethodOptionsProtoMsg): _99.MethodOptions;
            toProto(message: _99.MethodOptions): Uint8Array;
            toProtoMsg(message: _99.MethodOptions): _99.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            encode(message: _99.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.UninterpretedOption;
            fromPartial(object: {
                name?: {
                    namePart?: string;
                    isExtension?: boolean;
                }[];
                identifierValue?: string;
                positiveIntValue?: string | number | import("long").Long;
                negativeIntValue?: string | number | import("long").Long;
                doubleValue?: number;
                stringValue?: Uint8Array;
                aggregateValue?: string;
            }): _99.UninterpretedOption;
            fromAmino(object: _99.UninterpretedOptionAmino): _99.UninterpretedOption;
            toAmino(message: _99.UninterpretedOption): _99.UninterpretedOptionAmino;
            fromAminoMsg(object: _99.UninterpretedOptionAminoMsg): _99.UninterpretedOption;
            fromProtoMsg(message: _99.UninterpretedOptionProtoMsg): _99.UninterpretedOption;
            toProto(message: _99.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _99.UninterpretedOption): _99.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            encode(message: _99.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.UninterpretedOption_NamePart;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _99.UninterpretedOption_NamePart;
            fromAmino(object: _99.UninterpretedOption_NamePartAmino): _99.UninterpretedOption_NamePart;
            toAmino(message: _99.UninterpretedOption_NamePart): _99.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _99.UninterpretedOption_NamePartAminoMsg): _99.UninterpretedOption_NamePart;
            fromProtoMsg(message: _99.UninterpretedOption_NamePartProtoMsg): _99.UninterpretedOption_NamePart;
            toProto(message: _99.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _99.UninterpretedOption_NamePart): _99.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            encode(message: _99.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.SourceCodeInfo;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _99.SourceCodeInfo;
            fromAmino(object: _99.SourceCodeInfoAmino): _99.SourceCodeInfo;
            toAmino(message: _99.SourceCodeInfo): _99.SourceCodeInfoAmino;
            fromAminoMsg(object: _99.SourceCodeInfoAminoMsg): _99.SourceCodeInfo;
            fromProtoMsg(message: _99.SourceCodeInfoProtoMsg): _99.SourceCodeInfo;
            toProto(message: _99.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _99.SourceCodeInfo): _99.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            encode(message: _99.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.SourceCodeInfo_Location;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _99.SourceCodeInfo_Location;
            fromAmino(object: _99.SourceCodeInfo_LocationAmino): _99.SourceCodeInfo_Location;
            toAmino(message: _99.SourceCodeInfo_Location): _99.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _99.SourceCodeInfo_LocationAminoMsg): _99.SourceCodeInfo_Location;
            fromProtoMsg(message: _99.SourceCodeInfo_LocationProtoMsg): _99.SourceCodeInfo_Location;
            toProto(message: _99.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _99.SourceCodeInfo_Location): _99.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            encode(message: _99.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.GeneratedCodeInfo;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _99.GeneratedCodeInfo;
            fromAmino(object: _99.GeneratedCodeInfoAmino): _99.GeneratedCodeInfo;
            toAmino(message: _99.GeneratedCodeInfo): _99.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _99.GeneratedCodeInfoAminoMsg): _99.GeneratedCodeInfo;
            fromProtoMsg(message: _99.GeneratedCodeInfoProtoMsg): _99.GeneratedCodeInfo;
            toProto(message: _99.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _99.GeneratedCodeInfo): _99.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _99.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.GeneratedCodeInfo_Annotation;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _99.GeneratedCodeInfo_Annotation;
            fromAmino(object: _99.GeneratedCodeInfo_AnnotationAmino): _99.GeneratedCodeInfo_Annotation;
            toAmino(message: _99.GeneratedCodeInfo_Annotation): _99.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _99.GeneratedCodeInfo_AnnotationAminoMsg): _99.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _99.GeneratedCodeInfo_AnnotationProtoMsg): _99.GeneratedCodeInfo_Annotation;
            toProto(message: _99.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _99.GeneratedCodeInfo_Annotation): _99.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Any: {
            encode(message: _98.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Any;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _98.Any;
            fromAmino(object: _98.AnyAmino): _98.Any;
            toAmino(message: _98.Any): _98.AnyAmino;
            fromAminoMsg(object: _98.AnyAminoMsg): _98.Any;
            fromProtoMsg(message: _98.AnyProtoMsg): _98.Any;
            toProto(message: _98.Any): Uint8Array;
            toProtoMsg(message: _98.Any): _98.AnyProtoMsg;
        };
    };
}
