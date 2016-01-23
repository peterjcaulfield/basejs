module.exports = {
  test: {
    src: 'src/*.js',
    options: {
      specs: 'tests/unit/*Spec.js' 
    }
  },
  coverage: {
    src: 'src/*.js',
    options: {
      specs: 'tests/unit/*Spec.js',
      template: require('grunt-template-jasmine-istanbul'),
      templateOptions: {
        coverage: 'coverage/coverage.json',
        report: {
          type: 'html',
          options: {
            dir: 'coverage'
          }
        },
        files: 'src/*.js'
      }
    }
  }
};
