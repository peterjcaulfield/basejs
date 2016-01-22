module.exports = function(grunt) {

 config = grunt.util._.extend({},
    require('load-grunt-config')(grunt, {
        configPath: './grunt/tasks/options,
        loadGruntTasks: false,
        init: false
      })
  );

  grunt.loadTasks('./grunt/tasks');
  
  grunt.initConfig(config);   
}
