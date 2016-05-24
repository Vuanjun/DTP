var gulp = require('gulp');

var compass = require('gulp-compass');
var path = require('path');

var postcss = require('gulp-postcss');

gulp.task('compass', function() {
  gulp.src('sass/*.scss')
    .pipe(compass({
      project: __dirname,
      css: 'assets/css',
      sass: 'sass'
    })).on('error', console.log);
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['compass']);
});

gulp.task('postcss', function () {
    var postcss = require('gulp-postcss');
    return gulp.src('assets/css/all.css')
    .pipe( postcss([ require('autoprefixer')]) )
    .pipe( gulp.dest('build/') );
});
