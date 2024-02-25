import { build } from "esbuild";

await build({
  entryPoints: ["src/index.ts"],
  format: "esm",
  platform: "node",
  outbase: "src",
  outdir: "dist",
  banner: {
    // commonjs用ライブラリをESMプロジェクトでbundleする際に生じることのある問題への対策
    js: 'import { createRequire } from "module"; import url from "url"; const require = createRequire(import.meta.url); const __filename = url.fileURLToPath(import.meta.url); const __dirname = url.fileURLToPath(new URL(".", import.meta.url));',
  },
});