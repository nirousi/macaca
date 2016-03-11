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
let LogoComponent = require('react-logo');

let pkg = require('../package');

class FooterComponent extends React.Component {
  render() {
    return (
      <footer className="text-center">
        <hr/>
        &copy;&nbsp;<a href={pkg.homepage}>{pkg.name}</a> {new Date().getFullYear()}
        <div className="logo">
          <LogoComponent bigCircleFillColor='#8e4a3a'/>
        </div>
      </footer>
    );
  }
}

module.exports = FooterComponent;
