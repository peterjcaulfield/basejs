module.exports = (grunt) => {
  grunt.registerTask('acceptance', 'run the acceptance', () => {
    grunt.task.run(['exec:pm2_start', 'protractor:default', 'exec:pm2_stop'])
  })
}
