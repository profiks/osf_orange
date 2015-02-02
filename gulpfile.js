var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify');

gulp.task('minihtm', function() {
  gulp.src('*.htm')
    .pipe(htmlmin({"removeComments": true,}))
    .pipe(gulp.dest('min'))
});

 
gulp.task('compressjs', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('min'))
});
