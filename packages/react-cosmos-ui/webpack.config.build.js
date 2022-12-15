import path from 'path';

const dist = new URL('./dist', import.meta.url).pathname;
const entry = path.join(dist, 'playground.js');

const env = process.env.NODE_ENV || 'development';

export default {
  mode: env,
  devtool: 'source-map',
  entry,
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  output: {
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'mountPlayground',
    path: dist,
    filename: 'playground.bundle.js',
  },
};
