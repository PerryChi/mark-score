import babel from 'rollup-plugin-babel';
import typescript from '@rollup/plugin-typescript';
import less from 'rollup-plugin-less';

export default {
  input: './src/index.ts',
  output: {
    file: './lib/index.js',
    format: 'module'
  },
  plugins: [
    babel(),
    typescript(),
    less(),
  ],
  external: ['react', 'antd']
}
