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
    const path = location.pathname
    return (
      <header>
        <div className="container nav">
          <div className="title pull-left">
            <h1>Macaca</h1>
          </div>
          <div className="items pull-right">
            <ul>
              <li>
                <a href="/"
                   className={path === '/' ? 'active': null}>Home</a>
              </li>
              <li>
                <a href="/guide.html"
                   className={path === '/guide.html' ? 'active': null}>Guide</a>
              </li>
              <li>
                <a href="/api.html"
                   className={path === '/api.html' ? 'active': null}>API</a>
              </li>
            </ul>
          </div>
        </div>
        <ForkmeonComponent {...this.getForkmeonProps()}/>
      </header>
    );
  }
}

module.exports = HeaderComponent;
