import * as path from 'path';
import { Configuration, NoEmitOnErrorsPlugin, LoaderOptionsPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const configs: Configuration = {
  entry: ['./index'],
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@actions': path.resolve(__dirname, '../src/actions/index.ts'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@containers': path.resolve(__dirname, '../src/containers'),
      '@components': path.resolve(__dirname, '../src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Chat',
      filename: 'index.html',
      template: path.join(__dirname, '../index.ejs'),
      minify: false,
      hash: true,
      inject: 'body'
    }),
    new LoaderOptionsPlugin({
      debug: false
    })
  ],
  bail: true
};

export default configs;
