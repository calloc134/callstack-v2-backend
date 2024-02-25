import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // path to the GraphQL schema file
  schema: process.env.SCHEMA_PATH,
  generates: {
    "src/lib/generated/resolver-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../../context#GraphQLContext",
        strictScalars: true,
        scalars: {
          UUID: "string",
          DateTime: "Date",
          File: "File",
        },
        enumsAsTypes: true,
        skipTypename: true,
        useTypeImports: true,
      },
    },
  },
};

export default config;
