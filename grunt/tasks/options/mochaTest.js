modules.exports = {
  test: {
    src: 'tests/unit/*.js',
    options: {
      reporter: 'nyan',
      require: 'coverage/blanket'
    }
  },
  coverage: {
    src: 'tests/unit/*.js',
    options: {
      reporter: 'html-cov',
      quiet: true,
      captureFile: 'coverage.html'
    }
  }
};
