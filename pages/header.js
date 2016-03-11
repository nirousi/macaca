/* ================================================================
 * macaca by xdf(xudafeng[at]126.com)
 *
 * first created at : Mon Jun 02 2014 20:15:51 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2014 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

let React = require('react');
let ForkmeonComponent = require('forkmeon.github.io');

let pkg = require('../package');

class HeaderComponent extends React.Component {

  getForkmeonProps() {
    return {
      classPrefix: pkg.name,
      fixed: true,
      text: 'Fork me on Github',
      linkUrl: pkg.homepage,
      onDemoUpdateDid: () => {},
      flat: true
    };
  }

  render() {
    return (
      <header>
        <div className="container header">
          <div className="title">
            <h1>Macaca</h1>
          </div>
          <div className="description">
            <h1>
              <p></p>
            </h1>
          </div>
        </div>
        <ForkmeonComponent {...this.getForkmeonProps()}/>
      </header>
    );
  }
}

module.exports = HeaderComponent;
