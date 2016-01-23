module.exports = function(grunt) {

  var path = require('path');

  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
  });

  var config = grunt.util._.extend({},
    require('load-grunt-config')(grunt, {
        configPath: path.join(__dirname, 'grunt/tasks/options'),
        loadGruntTasks: false,
        init: false
      })
  );

  grunt.loadTasks('grunt/tasks');
  
  grunt.initConfig(config);   
};
