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

let React = require('react')

class BannerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
    };
  }

  render() {
    return (
      <div className="clearfix home-container">
        <div className="container">
          <div className="banner-title">
            <div className="clearfix description">
              <img className="banner-logo" src="./assets/macaca-icon.svg" width="140" />
              <h1>Macaca</h1>
            </div>
            <h2>Automation Test with ease.</h2>
          </div>
          <div className="sample-code">
          </div>
        </div>
      </div>
    );
  }
}

module.exports = BannerComponent;
