module.exports = function(grunt) {
  grunt.initConfig({
    lintspaces: {
      all: {
        src: [
          '*', '_includes/*', '_layouts/*', '_plugins/*', '_posts/*', 'blog/*',
          'feed/*', 'projects/*', 'projects-full/*', 'talks/*'
        ],
        options: {
          newline: false,
          trailingspaces: true,
          indentation: 'spaces',
          spaces: 2
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-lintspaces');
};