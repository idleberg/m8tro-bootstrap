 /*
  * m8tro-bootstrap
  * https://github.com/idleberg/m8tro-bootstrap
  *
  * Copyright (c) 2014 Jan T. Sott
  * Licensed under the MIT license.
  */


// Read package.json metadata
var meta     = require('./package.json');

// Gulp plugins
var cache    = require('gulp-cached'),
    concat   = require('gulp-concat'),
    cssmin   = require('gulp-cssmin'),
    del      = require('del'),
    gulp     = require('gulp'),
    htmlval  = require('gulp-html-validator'),
    inject   = require('gulp-inject'),
    less     = require('gulp-less'),
    path     = require('path'),
    prompt   = require('gulp-prompt'),
    recess   = require('gulp-recess'),
    sequence = require('run-sequence'),
    util     = require('gulp-util'),
    uglify   = require('gulp-uglify'),
    watch    = require('gulp-watch');


/*
 * Task combos
 */
gulp.task('html',    ['htmlval']);
gulp.task('build',   ['setup']);
gulp.task('custom',  ['setup']);
gulp.task('prefs',   ['setup']);
gulp.task('clear',   ['clean']);
gulp.task('empty',   ['clean']);
gulp.task('flush',   ['clean']);
gulp.task('trash',   ['clean']);

gulp.task('default', ['help']);

gulp.task('lint',    ['lesslint', 'html']);


/*
 * Sub-tasks
 */
 gulp.task('make', ['clean'], function(callback) {

   console.log('\nBuilding M8tro theme:')
   sequence(
       ['fa_css', 'fa_fonts'],
       'bootstrapjs',
       'less',
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
gulp.task('lesslint', function() {
  gulp.src([
      'src/theme/**/*.less'
    ])
    .pipe(cache('linting_less'))
    .pipe(recess())
    .pipe(recess.reporter());
});


// LESS
gulp.task('less', function () {
  
  console.log('\nCrunching…')
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
  
  console.log('+font-awesome.min.css');
  gulp.src('bower_components/fontawesome/css/font-awesome.min.css')
  .pipe(gulp.dest(__dirname+'/dist/css/'));
});


// Copy tasks
gulp.task('fa_fonts', function() {

  console.log('+fontawesome-webfont.*');
  gulp.src([
    'bower_components/fontawesome/fonts/fontawesome-webfont.eot',
    'bower_components/fontawesome/fonts/fontawesome-webfont.svg',
    'bower_components/fontawesome/fonts/fontawesome-webfont.ttf',
    'bower_components/fontawesome/fonts/fontawesome-webfont.woff'
  ])
  .pipe(gulp.dest(__dirname+'/dist/fonts/'));
});


gulp.task('bootstrapjs', function() {
  console.log('+bootstrap.min.js');
  gulp.src([
      'bower_components/bootstrap/dist/js/bootstrap.min.js'
    ])
    .pipe(gulp.dest('dist/js/'));

  console.log('+jquery.min.js');
  gulp.src([
      'bower_components/jquery/dist/jquery.min.js'
    ])
    .pipe(gulp.dest('dist/js/'));
});


// Customize Bootstrap assets
gulp.task('setup', ['clean'], function(){
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
   'Close icon\n',

   'Component animations (for JS)',
   'Dropdowns',
   'Tooltips',
   'Popovers',
   'Modals',
   'Carousel\n',
  ],
  _dir   = 'bower_components/bootstrap/',
  _fonts = [],
  _js    = [], 
  _less  = [
    _dir+'less/variables.less',
    _dir+'less/mixins.less',
    _dir+'less/normalize.less'
  ];

   // Dialog
   return gulp.src('./')
     .pipe(prompt.prompt({
       type: 'checkbox',
       name: 'components',
       message: 'Choose Bootstrap components for custom M8tro theme',
       choices: _components,
     }, function(res){

            console.log('\nBuilding custom M8tro theme:');

            if (res.components.indexOf('Print media styles')  > -1 ) {
              console.log('+print.less');
              _less.push(_dir+'less/print.less');
            }
            if (res.components.indexOf('Glyphicons')  > -1 ) {
              console.log('+glyphicons.less');
              _less.push(_dir+'less/glyphicons.less');
              console.log('+glyphicons-halflings-regular.*');
              _fonts.push(_dir+'fonts/glyphicons-halflings-regular.eot');
              _fonts.push(_dir+'fonts/glyphicons-halflings-regular.svg');
              _fonts.push(_dir+'fonts/glyphicons-halflings-regular.ttf');
              _fonts.push(_dir+'fonts/glyphicons-halflings-regular.woff');
            }
            _less.push(_dir+'less/scaffolding.less');
            if (res.components.indexOf('Typography')  > -1 ) {
              console.log('+type.less');
              _less.push(_dir+'less/type.less');
            }
            if (res.components.indexOf('Code')  > -1 ) {
              console.log('+code.less');
              _less.push(_dir+'less/code.less');
            }
            if (res.components.indexOf('Grid system')  > -1 ) {
              console.log('+grid.less');
              _less.push(_dir+'less/grid.less');
            }
            if (res.components.indexOf('Tables')  > -1 ) {
              console.log('+tables.less');
              _less.push(_dir+'less/tables.less');
            }
            if (res.components.indexOf('Forms')  > -1 ) {
              console.log('+forms.less');
              _less.push(_dir+'less/forms.less');
            }
            if (res.components.indexOf('Buttons')  > -1 ) {
              console.log('+buttons.less');
              _less.push(_dir+'less/buttons.less');
            }
            if (res.components.indexOf('Component animations (for JS)\n')  > -1 ) {
              console.log('+component-animations.less');
              _less.push(_dir+'less/component-animations.less');
            }
            if (res.components.indexOf('Dropdowns')  > -1 ) {
              console.log('+dropdowns.less');
              _less.push(_dir+'less/dropdowns.less');
              console.log('+dropdown.js')
              _js.push(_dir+'js/dropdown.js');
            }
            if (res.components.indexOf('Button groups')  > -1 ) {
              console.log('+button-groups.less');
              _less.push(_dir+'less/button-groups.less');
              console.log('+button.js')
              _js.push(_dir+'js/button.js');
            }
            if (res.components.indexOf('Input groups')  > -1 ) {
              console.log('+input-groups.less');
              _less.push(_dir+'less/input-groups.less');
            }
            if (res.components.indexOf('Navs')  > -1 ) {
              console.log('+navs.less');
              _less.push(_dir+'less/navs.less');
              console.log('+tab.js')
              _js.push(_dir+'js/tab.js');
            }
            if (res.components.indexOf('Navbar')  > -1 ) {
              console.log('+navbar.less');
              _less.push(_dir+'less/navbar.less');
            }
            if (res.components.indexOf('Breadcrumbs')  > -1 ) {
              console.log('+breadcrumbs.less');
              _less.push(_dir+'less/breadcrumbs.less');
            }
            if (res.components.indexOf('Pagination')  > -1 ) {
              console.log('+pagination.less');
              _less.push(_dir+'less/pagination.less');
            }
            if (res.components.indexOf('Pager')  > -1 ) {
              console.log('+pager.less');
              _less.push(_dir+'less/pager.less');
            }
            if (res.components.indexOf('Labels')  > -1 ) {
              console.log('+labels.less');
              _less.push(_dir+'less/labels.less');
            }
            if (res.components.indexOf('Badges')  > -1 ) {
              console.log('+badges.less');
              _less.push(_dir+'less/badges.less');
            }
            if (res.components.indexOf('Jumbotron')  > -1 ) {
              console.log('+jumbotron.less');
              _less.push(_dir+'less/jumbotron.less');
            }
            if (res.components.indexOf('Thumbnails')  > -1 ) {
              console.log('+thumbnails.less');
              _less.push(_dir+'less/thumbnails.less');
            }
            if (res.components.indexOf('Alerts')  > -1 ) {
              console.log('+alerts.less');
              _less.push(_dir+'less/alerts.less');
              console.log('+alert.js')
              _js.push(_dir+'js/alert.js');
            }
            if (res.components.indexOf('Progress bars')  > -1 ) {
              console.log('+progress-bars.less');
              _less.push(_dir+'less/progress-bars.less');
            }
            if (res.components.indexOf('Media bars')  > -1 ) {
              console.log('+media-items.less');
              _less.push(_dir+'less/media-items.less');
            }
            if (res.components.indexOf('List groups')  > -1 ) {
              console.log('+list-group.less');
              _less.push(_dir+'less/list-group.less');
            }
            if (res.components.indexOf('Panels')  > -1 ) {
              console.log('+panels.less');
              _less.push(_dir+'less/panels.less');
            }
            if (res.components.indexOf('Responsive embed')  > -1 ) {
              console.log('+responsive-embed.less');
              _less.push(_dir+'less/responsive-embed.less');
            }
            if (res.components.indexOf('Wells')  > -1 ) {
              console.log('+wells.less');
              _less.push(_dir+'less/wells.less');
            }
            if (res.components.indexOf('Close icon\n')  > -1 ) {
              console.log('+close.less');
              _less.push(_dir+'less/close.less');
            }
            if (res.components.indexOf('Modals')  > -1 ) {
              console.log('+modals.less');
              _less.push(_dir+'less/modals.less');
              console.log('+modal.js')
              _js.push(_dir+'js/modal.js');
            }
            if (res.components.indexOf('Tooltips')  > -1 ) {
              console.log('+tooltips.less');
              _less.push(_dir+'less/tooltips.less');
              console.log('+tooltip.js')
              _js.push(_dir+'js/tooltip.js');
            }
            if (res.components.indexOf('Popovers')  > -1 ) {
              console.log('+popovers.less');
              _less.push(_dir+'less/popovers.less');
              console.log('+popover.js')
              _js.push(_dir+'js/popover.js');
            }
            if (res.components.indexOf('Carousel\n')  > -1 ) {
              console.log('+carousel.less');
              _less.push(_dir+'less/carousel.less');
              console.log('+carousel.js')
              _js.push(_dir+'js/carousel.js');
            }
            console.log('+utilities.less');
            _less.push(_dir+'less/utilities.less');
            if (res.components.indexOf('Responsive utilities')  > -1 ) {
              console.log('+responsive-utilities.less');
              _less.push(_dir+'less/responsive-utilities.less');
            }

            _less.push('src/themes/m8tro/palette.less');
            _less.push('src/themes/m8tro-variables.less');
            _less.push('src/themes/m8tro-theme.less');

            console.log('\n'+_less.length+' styles, '+_js.length+' scripts and '+_fonts.length+' fonts in total')
            console.log('Crunching…');


            // Concatenate LESS & compile CSS
            gulp.src(_less)
                .pipe(concat('m8tro.less'))
                .pipe(less({
                      generateSourceMap: false, // default true
                      paths: [ path.join(__dirname, 'less', 'includes') ]
                    }))
                .pipe(concat('m8tro.css'))
                .pipe(gulp.dest('dist/css/'))
                .pipe(concat('m8tro.min.css'))
                .pipe(cssmin())
                .pipe(gulp.dest('dist/css/'));


            // Copy Fonts
            gulp.src(_fonts)
                .pipe(gulp.dest('dist/fonts/'));
            

            // Compile JavaScript
            gulp.src(_js)
                .pipe(concat('bootstrap.js'))
                .pipe(gulp.dest('dist/js/'))
                .pipe(concat('bootstrap.min.js'))
                .pipe(uglify())
                .pipe(gulp.dest('dist/js/'));

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
            'src/**/*',
            'index.html'
         ],
         ['lint'])
});


// Help dialog
gulp.task('help', function() {

  var title_length =  meta.name + ' v' + meta.version;

  console.log('\n' + meta.name + ' v' + meta.version);
  console.log('The MIT License (MIT)');
  console.log('\nAvailable tasks:')
  console.log('         help - this dialog')
  console.log('        clean - delete dist-folder')
  console.log('         lint - lint included CSS and JavaScript files')
  console.log('         make - build M8tro Bootstrap theme')
  console.log('        setup - customize & build M8tro Bootstrap theme')

} )