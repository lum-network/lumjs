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
        env: 'v-next',
        removeUnusedImports: true,
        tsDisable: {
            patterns: ['**/*amino.ts', '**/*registry.ts']
        },
        interfaces: {
            enabled: false,
            useUnionTypes: false
        },
        prototypes: {
            enabled: true,
            parser: {
                keepCase: false
            },
            methods: {
                encode: true,
                decode: true,
                fromJSON: false,
                toJSON: false,
                fromPartial: true,
                fromSDK: false,
                toSDK: false
            },
            includePackageVar: false,
            allowUndefinedTypes: true,
            addAminoTypeToObjects: true,
            typingsFormat: {
                duration: 'duration',
                timestamp: 'date',
                useExact: false,
                useDeepPartial: false,
                num64: 'bigint',
                customTypes: {
                    useCosmosSDKDec: true
                }
            }
        },
        aminoEncoding: {
            enabled: true,
            exceptions: AMINO_MAP
        },
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
