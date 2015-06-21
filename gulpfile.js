'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var wpConfig = require('./webpack.config.js');

gulp.task('build', function() {
  return gulp.src('./app/js/index.js')
             .pipe(webpack(wpConfig))
             .pipe(gulp.dest('./build/js'));
});


