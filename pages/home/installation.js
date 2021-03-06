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

let MarkdownComponent = require('./markdown');
let installation = require('./installation-code');

class InstallationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
    };
  }

  render() {
    return (
      <div className="clearfix installation-container">
        <div className="install-code container">
          <MarkdownComponent>
          {installation.toString().match(/---md-start---([\s\S]*)---md-end---/)[1]}
          </MarkdownComponent>
        </div>
      </div>
    );
  }
}

module.exports = InstallationComponent;

