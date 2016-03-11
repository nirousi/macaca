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

const React = require('react');
const ForkmeonComponent = require('forkmeon.github.io');

const pkg = require('../package');

const URL = {
  home: '/macaca',
  guide: '/macaca/guide.html',
  api: '/macaca/api.html'
}

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

  setActive(pathname, page) {
    console.log(pathname)
    return pathname === URL[page] ? 'active': null
  }

  render() {
    const path = location.pathname;

    return (
      <header>
        <div className="container nav">
          <div className="title">
            <h1>Macaca</h1>
          </div>
          <div className="items">
            <ul>
              <li>
                <a href={URL.home}
                   className={this.setActive(path, 'home')}>Home</a>
              </li>
              <li>
                <a href={URL.guide}
                   className={this.setActive(path, 'guide')}>Guide</a>
              </li>
              <li>
                <a href={URL.api}
                   className={this.setActive(path, 'api')}>API</a>
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
