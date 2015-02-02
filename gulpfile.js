var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify');

gulp.task('minify', function() {
  gulp.src('index.htm')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('min'))
});

 
gulp.task('compressjs', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('min'))
});
