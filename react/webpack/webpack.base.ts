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
    // mainFields: ['browser', 'main', 'module'],
    extensions: ['.ts', '.tsx', '.js']
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
