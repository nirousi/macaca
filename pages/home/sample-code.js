module.exports = function() {
/*
---md-start---

```js
describe('macaca test sample', function() {
  this.timeout(5 * 60 * 1000);

  var driver = wd.initPromiseChain();

  before(function() {
    return driver.initDriver();
  });

  after(function() {
    return driver
      .sleep(1000)
      .quit();
  });

  it('#1 should login success', function() {
    return driver
      .login('12345678', '111111')
      .sleep(1000);
  });

  it('#2 should display home', function() {
    return driver
      .takeScreenshot();
  });

  it('#3 should display webview', function() {
    return driver
      .elementByName('Webview')
      .click()
      .sleep(3000)
      .takeScreenshot();
  });

  it('#4 should go into webview', function() {
    return driver
      .contexts()
      .then(function(arr) {
        return driver
          .context(arr[arr.length - 1]);
      })
      .elementById('pushView')
      .click()
      .sleep(1000)
      .elementById('popView')
      .click()
      .sleep(1000)
      .takeScreenshot();
  });

  it('#5 should go into test', function() {
    return driver
      .contexts()
      .then(function(arr) {
        return driver
          .context(arr[0]);
      })
      .elementByName('Baidu')
      .click()
      .sleep(5000)
      .takeScreenshot();
  });

  it('#6 should works with web', function() {
    return driver
      .contexts()
      .then(function(arr) {
        return driver
          .context(arr[arr.length - 1]);
      })
      .elementById('index-kw')
      .sendKeys('TesterHome')
      .elementById('index-bn')
      .click()
      .sleep(5000)
      .source()
      .then(function(html) {
        html.should.containEql('TesterHome');
      })
      .takeScreenshot();
  });

  it('#7 should logout success', function() {
    return driver
      .contexts()
      .then(function(arr) {
        return driver
          .context(arr[0]);
      })
      .elementByName('PERSONAL')
      .click()
      .sleep(1000)
      .takeScreenshot()
      .elementByName('Logout')
      .click()
      .sleep(1000)
      .takeScreenshot();
  });
});

```
---md-end---
*/
};
