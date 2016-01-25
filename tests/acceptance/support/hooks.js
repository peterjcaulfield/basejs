var hooks = function() {

  this.Before(function(scenario, callback) {
    browser.ignoreSynchronization = true; 
      callback();
  });

  this.After(function(scenario, callback) {
      callback();
  });

};

module.exports = hooks;
