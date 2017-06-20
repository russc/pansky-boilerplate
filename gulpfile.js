// ==============================================================
// # PLUGINS
// ==============================================================


// -----------------------------------------
// ## Gulp
// http://gulpjs.com/
// npm install gulp
// npm install --only=dev
var gulp = require('gulp');


// -----------------------------------------
// ## AutoPrefixer
// https://www.npmjs.com/package/gulp-autoprefixer
// npm install gulp-autoprefixer --save-dev
var autoprefixer = require('autoprefixer');


// -----------------------------------------
// ## CSSnano
// https://www.npmjs.com/package/gulp-cssnano
// npm install gulp-cssnano --save-dev
var nano = require('gulp-cssnano');


// -----------------------------------------
// ## PostCSS
// https://www.npmjs.com/package/gulp-postcss
// npm install gulp-postcss --save-dev
var postcss = require('gulp-postcss');


// -----------------------------------------
// ## Rename
// https://www.npmjs.com/package/gulp-rename
// npm install gulp-rename --save-dev
var rename = require("gulp-rename");


// -----------------------------------------
// SASS
// https://www.npmjs.com/package/gulp-sass
// npm install gulp-sass --save-dev
var sass = require('gulp-sass');


// -----------------------------------------
// SourceMaps
// npm install gulp-sourcemaps --save-dev
// https://www.npmjs.com/package/gulp-sourcemaps
var sourcemaps = require('gulp-sourcemaps');


// -----------------------------------------
// ## Stylelint
// https://www.npmjs.com/package/gulp-stylelint
// https://stylelint.io/user-guide/
// npm install gulp-stylelint --save-dev
const gulpStylelint = require('gulp-stylelint');
// ## Stylelint — Standard Config
// https://www.npmjs.com/package/stylelint-config-standard
// npm install stylelint-config-standard --save-dev


// -----------------------------------------
// ## Util
// https://www.npmjs.com/package/gulp-util
// npm install gulp-util
var gutil = require('gulp-util');


// -----------------------------------------
// ## Vinyl FTP
// https://www.npmjs.com/package/vinyl-ftp
// http://loige.co/gulp-and-ftp-update-a-website-on-the-fly/
// npm install --save-dev vinyl-ftp
var ftp = require( 'vinyl-ftp' );


// -----------------------------------------
// ## Babel
// https://www.npmjs.com/package/gulp-babel
// npm install gulp-babel --save-dev babel-preset-es2015
const babel = require('gulp-babel');


// -----------------------------------------
// ## Babel — Babili
// https://www.npmjs.com/package/gulp-babili
// npm install gulp-babili --save-dev
const babili = require("gulp-babili");




// ==============================================================
// # RUN COMMANDS
// ==============================================================


// -----------------------------------------
// ## RUN CMD 'gulp' TO COMPILE SCSS
gulp.task('default', () => {
  return gulp.src('assets/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()) // using gulp-sass
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulpStylelint({
      reporters: [
        {
          formatter: 'verbose', console: true
        }
      ]
    }))
    .pipe(nano())
    .pipe(rename('app.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
});


// -----------------------------------------
// ## WATCH SCSS, COMPILE AND MINIFY ON SAVE
gulp.task('watch', () => {
  gulp.watch('assets/scss/**/*.scss', ['default']);
});


// -----------------------------------------
// ## RUN CMD 'gulp deploy' TO DEPLOY TO FTP
// discourse.roots.io/t/deploy-to-production-server-on-shared-hosting-with-gulp-with-ftp/4435
gulp.task('deploy', function() {
  var conn = ftp.create( {
    host:     'ftp.illusiveapparel.website',
    user:     'assets@illusiveapparel.website',
    password: 'miller2017',
    parallel: 10,
    log:      gutil.log
  });

  // Match files using the patterns the shell uses, like stars and stuff.
  // https://github.com/isaacs/node-glob
  var globs = [
    'assets/css/*.css',
    'assets/css/*.map',
    'assets/js/*.js',
    '!*',
    '!*.php',
    '!dist/**',
    '!lang/**',
    '!templates/*.php',
    '!lib/*.php',
    '!.git',
    '!*.json',
    '!*.md',
    '!*.xml',
    '!assets',
    '!bower_components',
    '!dist/scripts/jquery.js',
    '!dist/scripts/jquery.js.map',
    '!dist/scripts/main.js',
    '!dist/scripts/main.js.map',
    '!dist/scripts/modernizr.js',
    '!dist/scripts/modernizr.js.map',
    '!dist/styles/editor-style.css',
    '!dist/styles/editor-style.css.map',
    '!dist/styles/main.css',
    '!dist/styles/main.css.map',
    '!gulpfile.js',
    '!node_modules',
    '!node_modules/**',
  ];

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance
  return gulp.src( globs, { base: '.', buffer: false } )
    // .pipe( conn.newer( '/public_html/wp-content/themes/IllusiveApparel/assets/css' ) ) // only upload newer files
    .pipe( conn.dest( '' ) );
});


// -----------------------------------------
// ## RUN CMD 'gulp babel' TO MINIFY JS
gulp.task('babel', () => {
  return gulp.src('assets/babel/app.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('assets/js'));
});


gulp.task('babel watch', () => {
  gulp.watch('assets/babel/*.js', ['babel']);
});
