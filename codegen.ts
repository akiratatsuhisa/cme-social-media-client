import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:49200/graphql',
  documents: ['graphql/**/*.graphql'],
  generates: {
    './src/graphql/types-and-hooks.g.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo'],
      config: {
        withCompositionFunctions: true,
        vueCompositionApiImportFrom: 'vue',
      },
    },
  },
  config: {
    scalars: {
      ISODateTime: 'string',
      BigInt: 'string',
    },
  },
};

export default config;
