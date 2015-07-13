'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var wpConfig = require('./webpack.config.js');

gulp.task('js', function() {
  return gulp.src('./app/js/index.js')
             .pipe(webpack(wpConfig))
             .pipe(gulp.dest('./build/js'));
});

gulp.task('html', function() {
  return gulp.src('./app/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('css', function() {
  return gulp.src('./app/css/**/*.css')
             .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function() {
  gulp.watch('./app/**/*.*', ['build']);
})

gulp.task('build', ['js', 'html', 'css']);




