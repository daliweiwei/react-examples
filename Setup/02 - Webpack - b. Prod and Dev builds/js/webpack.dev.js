/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global module */

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  devServer: {
    inline: true,
    contentBase: './build',
    overlay: true,
    port: 9100,
    stats: 'errors-only'
  },
  devtool: 'eval-source-map' /* fast, inline, no production */,
  mode: 'development'
});
