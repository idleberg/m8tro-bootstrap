 /*
  * m8tro-bootstrap
  * https://github.com/idleberg/m8tro-bootstrap
  *
  * Copyright (c) 2014 Jan T. Sott
  * Licensed under the MIT license.
  */

var debug    = true;

var concat   = require('gulp-concat'),
    csslint  = require('gulp-csslint'),
    cssmin   = require('gulp-cssmin'),
    del      = require('del'),
    gulp     = require('gulp'),
    htmlval  = require('gulp-html-validator'),
    inject   = require('gulp-inject'),
    jshint   = require('gulp-jshint'),
    less     = require('gulp-less'),
    path     = require('path'),
    prompt   = require('gulp-prompt'),
    sequence = require('run-sequence'),
    util     = require('gulp-util'),
    watch    = require('gulp-watch');

/*
 * Task combos
 */

gulp.task('css',     ['csslint']);
gulp.task('html',    ['htmlval']);
gulp.task('js',      ['jshint']);
gulp.task('build',   ['make']);

gulp.task('default', ['make']);

gulp.task('lint',    ['css', 'html', 'js']);
gulp.task('travis',  ['css', 'html']);

/*
 * Sub-tasks
 */
 gulp.task('make', ['clean'], function(callback) {

   sequence(
       'less',
       ['fa_css', 'fa_fonts'],
       'bootstrapjs',
       callback
     );
 });

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
gulp.task('less', function () {
  gulp.src('src/themes/m8tro/build.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('m8tro.css'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(concat('m8tro.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css/'));
});

// Copy tasks
gulp.task('fa_css', function() {
  gulp.src('bower_components/fontawesome/css/font-awesome.min.css')
  .pipe(gulp.dest(__dirname+'/dist/css/'));
});

// Copy tasks
gulp.task('fa_fonts', function() {
  gulp.src([
    'bower_components/fontawesome/fonts/fontawesome-webfont.eot',
    'bower_components/fontawesome/fonts/fontawesome-webfont.svg',
    'bower_components/fontawesome/fonts/fontawesome-webfont.ttf',
    'bower_components/fontawesome/fonts/fontawesome-webfont.woff'
  ])
  .pipe(gulp.dest(__dirname+'/dist/fonts/'));
});

gulp.task('bootstrapjs', function() {
  gulp.src([
      'bower_components/bootstrap/dist/js/bootstrap.min.js'
    ])
    .pipe(gulp.dest('dist/js/'));

    gulp.src([
      'bower_components/jquery/dist/jquery.min.js'
    ])
    .pipe(gulp.dest('dist/js/'));
});


// Customize Bootstrap assets (not working yet!)
gulp.task('custom', ['clean'], function(){

  var _components = [
   'Print media styles',
   'Typography',
   'Code',
   'Grid system',
   'Tables',
   'Forms',
   'Buttons',
   'Responsive utilities\n',
       'Glyphicons',
       'Button groups',
       'Input groups',
       'Navs',
       'Navbar',
       'Breadcrumbs',
       'Pagination',
       'Pager',
       'Labels',
       'Badges',
       'Jumbotron',
       'Thumbnails',
       'Alerts',
       'Progress bars',
       'Media items',
       'List groups',
       'Panels',
       'Responsive embed',
       'Wells',
       'Close icon\n'
   // 'Component animations (for JS)',
   // 'Dropdowns',
   // 'Tooltips',
   // 'Popovers',
   // 'Modals',
   // 'Carousel\n',
  ],
  _dir   = 'bower_components/bootstrap/',
  _fonts = [],
  _less  = [
    'src/themes/m8tro-variables.less',
    _dir+'less/mixins.less',
    _dir+'less/normalize.less'
  ];

   // Dialog
   return gulp.src('.')
   .pipe(prompt.prompt({
     type: 'checkbox',
     name: 'components',
     message: 'Customize included Bootstrap components',
     choices: _components,
   }, function(res){

          console.log('+Including m8tro-variables.less');
          console.log('+Including mixins.less');
          console.log('+Including normalize.less');

          if (res.components.indexOf('Print media styles')  > -1 ) {
            console.log('+Including print.less');
            _less.push(_dir+'less/print.less');
          }
          if (res.components.indexOf('Glyphicons')  > -1 ) {
            console.log('+Including glyphicons.less');
            _less.push(_dir+'less/glyphicons.less');
            console.log(' Including glyphicons-halflings-regular.eot');
            _fonts.push(_dir+'fonts/glyphicons-halflings-regular.eot');
            console.log(' Including glyphicons-halflings-regular.svg');
            _fonts.push(_dir+'fonts/glyphicons-halflings-regular.svg');
            console.log(' Including glyphicons-halflings-regular.ttf');
            _fonts.push(_dir+'fonts/glyphicons-halflings-regular.ttf');
            console.log(' Including glyphicons-halflings-regular.woff');
            _fonts.push(_dir+'fonts/glyphicons-halflings-regular.woff');
          }
          if (res.components.indexOf('Typography')  > -1 ) {
            console.log('+Including type.less');
            _less.push(_dir+'less/type.less');
          }
          if (res.components.indexOf('Code')  > -1 ) {
            console.log('+Including code.less');
            _less.push(_dir+'less/code.less');
          }
          if (res.components.indexOf('Grid system')  > -1 ) {
            console.log('+Including grid.less');
            _less.push(_dir+'less/grid.less');
          }
          if (res.components.indexOf('Tables')  > -1 ) {
            console.log('+Including tables.less');
            _less.push(_dir+'less/tables.less');
          }
          if (res.components.indexOf('Forms')  > -1 ) {
            console.log('+Including forms.less');
            _less.push(_dir+'less/forms.less');
          }
          if (res.components.indexOf('Buttons')  > -1 ) {
            console.log('+Including buttons.less');
            _less.push(_dir+'less/buttons.less');
          }
          if (res.components.indexOf('Component animations (for JS)\n')  > -1 ) {
            console.log('+Including component-animations.less');
            _less.push(_dir+'less/component-animations.less');
          }
          if (res.components.indexOf('Dropdowns')  > -1 ) {
            console.log('+Including dropdowns.less');
            _less.push(_dir+'less/dropdowns.less');
            // console.log(' Including dropdown.js')
            // _js.push(_dir+'js/dropdown.js');
          }
          if (res.components.indexOf('Button groups')  > -1 ) {
            console.log('+Including button-groups.less');
            _less.push(_dir+'less/button-groups.less');
            // console.log(' Including button.js')
            // _js.push(_dir+'js/button.js');
          }
          if (res.components.indexOf('Input groups')  > -1 ) {
            console.log('+Including input-groups.less');
            _less.push(_dir+'less/input-groups.less');
          }
          if (res.components.indexOf('Navs')  > -1 ) {
            console.log('+Including navs.less');
            _less.push(_dir+'less/navs.less');
            // console.log(' Including tab.js')
            // _js.push(_dir+'js/tab.js');
          }
          if (res.components.indexOf('Breadcrumbs')  > -1 ) {
            console.log('+Including breadcrumbs.less');
            _less.push(_dir+'less/breadcrumbs.less');
          }
          if (res.components.indexOf('Pagination')  > -1 ) {
            console.log('+Including pagination.less');
            _less.push(_dir+'less/pagination.less');
          }
          if (res.components.indexOf('Pager')  > -1 ) {
            console.log('+Including pager.less');
            _less.push(_dir+'less/pager.less');
          }
          if (res.components.indexOf('Labels')  > -1 ) {
            console.log('+Including labels.less');
            _less.push(_dir+'less/labels.less');
          }
          if (res.components.indexOf('Badges')  > -1 ) {
            console.log('+Including badges.less');
            _less.push(_dir+'less/badges.less');
          }
          if (res.components.indexOf('Jumbotron')  > -1 ) {
            console.log('+Including jumbotron.less');
            _less.push(_dir+'less/jumbotron.less');
          }
          if (res.components.indexOf('Thumbnails')  > -1 ) {
            console.log('+Including thumbnails.less');
            _less.push(_dir+'less/thumbnails.less');
          }
          if (res.components.indexOf('Alerts')  > -1 ) {
            console.log('+Including alerts.less');
            _less.push(_dir+'less/alerts.less');
            // console.log(' Including alert.js')
            // _js.push(_dir+'js/alert.js');
          }
          if (res.components.indexOf('Progress bars')  > -1 ) {
            console.log('+Including progress-bars.less');
            _less.push(_dir+'less/progress-bars.less');
          }
          if (res.components.indexOf('Media bars')  > -1 ) {
            console.log('+Including media-items.less');
            _less.push(_dir+'less/media-items.less');
          }
          if (res.components.indexOf('List groups')  > -1 ) {
            console.log('+Including list-group.less');
            _less.push(_dir+'less/list-group.less');
          }
          if (res.components.indexOf('Panels')  > -1 ) {
            console.log('+Including panels.less');
            _less.push(_dir+'less/panels.less');
          }
          if (res.components.indexOf('Responsive embed')  > -1 ) {
            console.log('+Including responsive-embed.less');
            _less.push(_dir+'less/responsive-embed.less');
          }
          if (res.components.indexOf('Wells')  > -1 ) {
            console.log('+Including wells.less');
            _less.push(_dir+'less/wells.less');
          }
          if (res.components.indexOf('Close icon\n')  > -1 ) {
            console.log('+Including close.less');
            _less.push(_dir+'less/close.less');
          }
          if (res.components.indexOf('Modals')  > -1 ) {
            console.log('+Including modals.less');
            _less.push(_dir+'less/modals.less');
            // console.log(' Including modal.js')
            // _js.push(_dir+'js/modal.js');
          }
          if (res.components.indexOf('Tooltips')  > -1 ) {
            console.log('+Including tooltips.less');
            _less.push(_dir+'less/tooltips.less');
            // console.log(' Including tooltip.js')
            // _js.push(_dir+'js/tooltip.js');
          }
          if (res.components.indexOf('Popovers')  > -1 ) {
            console.log('+Including popovers.less');
            _less.push(_dir+'less/popovers.less');
            // console.log(' Including popover.js')
            // _js.push(_dir+'js/popover.js');
          }
          if (res.components.indexOf('Carousel\n')  > -1 ) {
            console.log('+Including carousel.less');
            _less.push(_dir+'less/carousel.less');
            // console.log(' Including carousel.js')
            // _js.push(_dir+'js/carousel.js');
          }
          console.log('+Including utilities.less');
          _less.push(_dir+'less/utilities.less');
          if (res.components.indexOf('Responsive utilities')  > -1 ) {
            console.log('+Including responsive-utilities.less');
            _less.push(_dir+'less/responsive-utilities.less');
          }
          console.log('+Including m8tro-theme.less');
          _less.push('src/themes/m8tro-theme.less');

          console.log('\nA total of '+_less.length+' LESS files included. However, no files were created! ^__^\n');
          
          if (debug == true) {
            console.log(_less);
          }

          // Compile LESS - doesn't run, why?
          gulp.src(_less)
            .pipe(concat('m8tro-custom.less'))
            .pipe(less({
              paths: [ path.join(__dirname, 'less', '+includes') ]
            }))
            .pipe(concat('m8tro-custom.css'))
            .pipe(gulp.dest('dist/css/'))
            .pipe(concat('m8tro-custom.min.css'))
            .pipe(cssmin())
            .pipe(gulp.dest('dist/css/'));

        }));
});


// Cleaning task
gulp.task('clean', function () {
    return del([__dirname+'/dist/']);
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