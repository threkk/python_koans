var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', function() {
  gulp.watch('./koans/*.py', shell.task(['./run.sh']));
});
