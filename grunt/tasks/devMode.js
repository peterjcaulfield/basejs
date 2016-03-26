module.exports = (grunt) => {
  grunt.registerTask('dev', 'start all the things', () => {
    grunt.task.run(['exec:webpack_server_start'])
  })
}
