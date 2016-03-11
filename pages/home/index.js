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

let BannerComponent = require('./banner');
let SampleComponent = require('./sample');
let LayoutComponent = require('../layout');
let InstallationComponent = require('./installation');

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <LayoutComponent>
        <BannerComponent />
        <InstallationComponent />
        <SampleComponent />
      </LayoutComponent>
    );
  }
}

React.render(<HomePage />, document.body);
