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

let code = require('./sample-code');
let MarkdownComponent = require('./markdown');

class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
    };
  }

  render() {
    return (
      <div className="clearfix sample-container">
        <div className="container">
          <div className="sample-code-container">
            <MarkdownComponent>
            {code.toString().match(/---md-start---([\s\S]*)---md-end---/)[1]}
            </MarkdownComponent>
          </div>
          <img className="sample-sscreentshot"
               src="https://os.alipayobjects.com/rmsportal/AupRcQdJrzTdOnd.gif" />
        </div>
      </div>
    );
  }
}

module.exports = SampleComponent;
