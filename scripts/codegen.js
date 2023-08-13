const { join } = require('path');
const telescope = require('@cosmology/telescope').default;
const rimraf = require('rimraf').rimrafSync;
const { AMINO_MAP } = require('./aminos');

const protoDirs = [
    join(__dirname, '/../proto'),
    join(__dirname, '../lum/proto')
];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
    protoDirs,
    outPath,
    options: {
        tsDisable: {
            files: [
                'cosmos/authz/v1beta1/tx.amino.ts',
                'cosmos/staking/v1beta1/staking.ts',
                'cosmos/staking/v1beta1/tx.ts',
                'cosmos/staking/v1beta1/signing.ts',
                'cosmos/tx/signing/v1beta1/signing.ts',
                'lum/network/beam/beam.ts'
            ],
            patterns: ['**/*amino.ts', '**/*registry.ts']
        },

        prototypes: {
            includePackageVar: false,
            removeUnusedImports: true,
            allowUndefinedTypes: true,
            interfaces: {
                enabled: true,
                useUnionTypes: true
            },
            excluded: {
                packages: [
                    // 'ibc.applications.fee.v1',
                    // 'google.api',
                    'ibc.core.port.v1',
                    'ibc.core.types.v1'
                ]
            },
            methods: {
                fromJSON: false,
                toJSON: false,
                encode: true,
                decode: true,
                fromPartial: true,
                toAmino: true,
                fromAmino: true,
                fromProto: true,
                toProto: true
            },
            parser: {
                keepCase: false
            }
        },
        typingsFormat: {
            duration: 'duration',
            timestamp: 'date',
            useExact: false,
            useDeepPartial: false,
            num64: 'bigint',
            customTypes: {
                useCosmosSDKDec: true
            }
        },
        aminoEncoding: {
            enabled: true,
            exceptions: AMINO_MAP,
            useRecursiveV2encoding: true
        },
        addAminoTypeToObjects: true,
        lcdClients: {
            enabled: false
        },
        rpcClients: {
            enabled: true,
            camelCase: true
        }
    }
})
    .then(() => {
        console.log('✨ all done!');
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
