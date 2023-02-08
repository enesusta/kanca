import typescript from "rollup-plugin-typescript2";
import alias from "@rollup/plugin-alias";
import path from "path";
import { terser } from "rollup-plugin-terser";

const projectRootDir = path.resolve(__dirname);
const aliases = alias({
  entries: [
    { find: "~http", replacement: path.resolve(projectRootDir, "src/http") },
    { find: "~util", replacement: path.resolve(projectRootDir, "src/util") },
    { find: "~form", replacement: path.resolve(projectRootDir, "src/form") },
  ],
});

import pkg from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "es",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      aliases,
      typescript({
        clean: true,
        declaration: true,
        declarationDir: "dist",
      }),
      terser(),
    ],
    external: ["react", "@mantine/nprogress", "axios"],
  },
  {
    input: "src/http/index.ts",
    output: [
      {
        dir: "http",
        format: "es",
      },
    ],
    plugins: [
      aliases,
      typescript({
        clean: true,
        declaration: true,
        declarationDir: "http",
      }),
      terser(),
    ],
    external: ["react", "@mantine/nprogress", "axios"],
  },

  {
    input: "src/util/index.ts",
    output: [
      {
        dir: "util",
        format: "es",
      },
    ],
    plugins: [
      aliases,
      typescript({
        clean: true,
        declaration: true,
        declarationDir: "util",
      }),
      terser(),
    ],
    external: ["react", "@mantine/nprogress", "axios"],
  },
];
