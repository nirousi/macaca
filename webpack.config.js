/* ================================================================
 * macaca by xdf(xudafeng[at]126.com)
 *
 * first created at : Mon Jun 02 2014 20:15:51 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2015 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var path = require('path');

var config = {
  entry: {
    home: path.resolve('pages', 'home'),
    guide: path.resolve('pages', 'guide'),
    api: path.resolve('pages', 'api')
  },
  output: {
    path: path.join(__dirname, 'assets'),
    filename: '[name].js'
  },
  externals: {
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'jsx-loader?harmony'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};

module.exports = config;
