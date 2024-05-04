// import typescript from 'rollup-plugin-typescript2';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import jsx from 'acorn-jsx';

import pkg from './package.json' assert { type: 'json' };
import tsconfig from './tsconfig.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        declaration: true,
        // check: false,
        // compilerOptions: {
        //   declaration: true,
        //   declarationDir: "./http",
        //   declarationMap: true,
        //   ...tsconfig
        // }
      }),
      terser(),
    ],
    external: ['react', '@mantine/nprogress', 'axios'],
  },
  {
    input: 'src/http/index.ts',
    output: [
      {
        dir: 'http',
        format: 'es',
      },
    ],
    plugins: [
      typescript({
        outDir: 'http',
        include: ['src/http/**'],
        declaration: true,
        declarationDir: 'http',
        // compilerOptions: {
        //   declaration: true,
        //   declarationDir: "./http",
        //   declarationMap: true,
        //   ...tsconfig
        // }
      }),
      terser(),
    ],
    external: ['react', '@mantine/nprogress', 'axios'],
  },
  {
    input: 'src/router/index.ts',
    output: [
      {
        dir: 'router',
        format: 'es',
      },
    ],
    plugins: [
      typescript({
        include: 'src/router/**',
        declaration: true,
        declarationDir: 'router',
        outDir: 'router',
        // compilerOptions: {
        //   declaration: true,
        //   declarationDir: "./router",
        //   ...tsconfig
        // }
      }),
      terser(),
    ],
    external: ['react', 'react-router-dom'],
  },
  {
    input: 'src/text/index.ts',
    output: [
      {
        dir: 'text',
        format: 'es',
      },
    ],
    plugins: [
      typescript({
        include: 'src/text/**',
        declaration: true,
        declarationDir: 'text',
        outDir: 'text',
      }),
      terser(),
    ],
    external: ['react'],
  },
];
