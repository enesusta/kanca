import typescript from "@rollup/plugin-typescript";
import path from "path";
import { terser } from "rollup-plugin-terser";

const projectRootDir = path.resolve(__dirname);
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
      typescript({
        declaration: true,
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
      typescript({
        outDir: "http",
        include: ["src/http/**"],
        declaration: true,
        declarationDir: "http",
      }),
      terser(),
    ],
    external: ["react", "@mantine/nprogress", "axios"],
  },
  {
    input: "src/form/index.ts",
    output: [
      {
        dir: "form",
        format: "es",
      },
    ],
    plugins: [
      typescript({
        include: "src/form/**",
        declaration: true,
        declarationDir: "form",
        outDir: "form",
      }),
      terser(),
    ],
    external: ["react", "@mantine/nprogress", "axios"],
  },
];
