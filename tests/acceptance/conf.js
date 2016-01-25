exports.config = {
  seleniumServerJar: 'bin/selenium-server-standalone-2.49.1.jar',
  chromeDriver: 'bin/chromedriver',
  specs: 'features/*.feature',
  suites: {
    smoke: '',
    full: 'features/*.feature'
  },
  capabilities: {
    browserName: 'chrome'
  },
  framework: 'custom',
  frameworkPath: '../../node_modules/protractor-cucumber-framework',
  cucumberOpts: {
    require: [
      'steps/*.steps.js',
      'support/hooks.js'
    ],
    format: 'pretty'
  }
};
