module.exports = (grunt) => {
  grunt.registerTask('acceptance', 'run the acceptance', () => {
    grunt.task.run(['exec:wiremock_start', 'protractor:default', 'exec:wiremock_stop'])
  })
}
