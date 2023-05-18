const esbuild = require('esbuild');

esbuild.buildSync({
  entryPoints: ['index.ts'],
  bundle: true,
  minify: false,
  platform: 'node',
  target: 'es2022',
  outfile: 'index.js',
});