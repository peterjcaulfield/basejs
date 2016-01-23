exports.config = {
  chromeDriver: 'bin/chromedriver',
  specs: 'features/*.feature',
  suites: {
    smoke: '',
    full: 'features/*.feature'
  },
  capabilities: {
    browserName: 'chrome'
  },
  framework: 'mocha',
  cucumberOpts: {
    require: 'steps/*.steps.js',
    format: 'pretty'
  }
};
