 var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    prefix = require('gulp-autoprefixer');

gulp.task('sass', function() {
   gulp.src('scss/*.scss')
      .pipe(watch())
      .pipe(sass())
      .pipe(prefix('last 2 versions', {map: false }))
      .pipe(gulp.dest('css'))
      .pipe(livereload());
});

// Default Task
gulp.task('default', ['sass']);