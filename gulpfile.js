 /*
  * m8tro-bootstrap
  * https://github.com/idleberg/m8tro-bootstrap
  *
  * Copyright (c) 2014 Jan T. Sott
  * Licensed under the MIT license.
  */

var concat  = require('gulp-concat');
var csslint = require('gulp-csslint');
var cssmin  = require('gulp-cssmin');
var del     = require('del');
var gulp    = require('gulp');
var htmlval = require('gulp-html-validator');
var inject  = require('gulp-inject');
var jshint  = require('gulp-jshint');
var less    = require('gulp-less');
var path    = require('path');
var util    = require('gulp-util');
var watch   = require('gulp-watch');

/*
 * Task combos
 */

gulp.task('css',     ['csslint']);
gulp.task('html',    ['htmlval']);
gulp.task('js',      ['jshint']);

gulp.task('default', ['make']);

gulp.task('lint',    ['css', 'html', 'js']);
gulp.task('make',    ['less', 'fontawesome', 'bootstrapjs']);
gulp.task('travis',  ['css', 'html']);

/*
 * Sub-tasks
 */

// HTML Page
gulp.task('htmlval', function () {
  return htmlval([
        'index.html'
    ]);
});

// Custom CSS
gulp.task('csslint', function() {
  gulp.src([
      'dist/css/*',
      '!dist/css/font-awesome.min.css'
    ])
    .pipe(csslint())
    .pipe(csslint.reporter())
});

// Custom Javascript
gulp.task('jshint', function() {
  gulp.src([
      'dist/js/*'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter())
});

// LESS
gulp.task('less', ['clean'], function () {
  gulp.src('src/themes/m8tro/build.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('m8tro.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css/'));
});

// Copy tasks
gulp.task('fontawesome', ['clean'], function() {
  gulp.src([
      'bower_components/fontawesome/css/font-awesome.min.css'
    ])
    .pipe(gulp.dest('dist/css/'));
  gulp.src([
      'bower_components/fontawesome/fonts/*'
    ])
    .pipe(gulp.dest('dist/fonts/'));
  gulp.src([
      'bower_components/jquery/dist/jquery.min.js'
    ])
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('bootstrapjs', ['clean'], function() {
  gulp.src([
      'bower_components/bootstrap/dist/js/bootstrap.min.js'
    ])
    .pipe(gulp.dest('dist/js/'));
});

// Cleaning task
gulp.task('clean', function () {
    del([
      'dist/'
    ])
});

// Injection task
gulp.task('local', function () {
  var target = gulp.src('index.html');
  var sources = gulp.src(['dist/css/*','src/js/*'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest(''));
});

// Watch task
gulp.task('watch', function () {
   gulp.watch([
            'dist/**/*',
            'index.html'
         ],
         ['lint'])
});