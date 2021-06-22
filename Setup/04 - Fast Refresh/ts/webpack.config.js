/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/app.tsx'],
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[fullhash:8].js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    overlay: true,
    port: 9100,
    stats: 'errors-only'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules|packages/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.ejs',
      title: 'Setup Fast Refresh, Webpack & TypeScript'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json']
  },
  target: process.env.NODE_ENV !== 'production' ? 'web' : 'browserslist'
};
