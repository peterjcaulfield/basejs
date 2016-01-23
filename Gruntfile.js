module.exports = function(grunt) {

  var path = require('path');

  var config = grunt.util._.extend({},
    require('load-grunt-config')(grunt, {
        configPath: path.join(__dirname, 'grunt/tasks/options'),
        loadGruntTasks: true,
        init: false
      })
  );
  grunt.loadTasks('grunt/tasks');
  
  grunt.initConfig(config);   
};
