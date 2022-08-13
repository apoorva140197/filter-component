import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';
import commonjs from 'rollup-plugin-commonjs';

import packageJson from './package.json';
import url from '@rollup/plugin-url';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  external: ['styled-components'],
  globals: { 'styled-components': 'styled' },
  plugins: [
    peerDepsExternal(),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'src'
      },
      preferBuiltins: false,
      mainFields: ['browser']
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    sass({
      insert: true
    }),
    url()
  ]
};
