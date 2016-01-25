module.exports = function(grunt) {
  /**
   *
   *
   */
  grunt.registerTask('acceptance', 'run the acceptance', function() {
    grunt.task.run(['exec:pm2_start', 'protractor:default', 'exec:pm2_stop']);
  });

};
