'use strict';

var gulp = require('gulp');
var run = require('gulp-run');
var browserSync = require('browser-sync');

function runTests(done) {


  run('python ./test_plan.py;', {
    cwd: '../selenium/'
  }).exec(function() {
    browserSync.exit();
    console.log('ended', arguments);
  })
  done();
};

gulp.task('selenium', ['serve:e2e'], runTests);
