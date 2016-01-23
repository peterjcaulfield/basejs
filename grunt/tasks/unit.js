module.exports = function(grunt) {
  /**
   * Task to run the unit tests located in /tests/unit
   *
   * @usage grunt unit          - runs equivalent of grunt jasmine:test
   *        grunt unit:config   - attempts to run the corresponding config in the jasmine config object
   *                              e.g if you want coverage run grunt unit:coverage 
   */
  grunt.registerTask('unit', 'run the unit tests', function(config) {
    grunt.task.run('jasmine:' + (arguments.length ? config : 'test')); 
  });

};
