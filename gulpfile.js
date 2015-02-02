var gulp = require('gulp');

/*gulp.task('default', function(){



});*/
var minifyHTML = require('gulp-minify-html');
 
gulp.task('minify-html', function() {
    var opts = {comments:true,spare:true};
    
  gulp.src('index2.htm')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist/'))
});
