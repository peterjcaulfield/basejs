module.exports = function() {

  this.Given('I navigate to google', function(callback) {
    browser.get('http://google.com');
    callback();
  });

};

