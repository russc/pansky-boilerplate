// ========================================================================
// gulpfile.js
// ========================================================================

/**
 * Gulp is a tool that helps automate our workflow by performing different 
 * tasks such as: compiling (and prefixing) Sass and minifying images.
 * 
 * To get started, navigate to your project's root directory and
 * run the following CLI command: `npm install`
 * 
 * CLI Command Index
 * =======================
 * npm install          Installs Gulp & dependecies via package.json
 * gulp --help, -h      Displays Gulp options
 * gulp --tasks, -T     Prints the task dependency tree
 * 
 * More info: http://wiki.esitelabs.com:1081/index.php/Gulp_Workflow
 */


 
/**
 * | TABLE OF CONTENTS
 * =======================
 * |– PLUGINS (const * = require('*'))
 * |  |- ...
 * |
 * |– VARIABLES
 * |  |- Localhost
 * |  |- Paths
 * |  |- Entry Points
 * |  |- Additionals
 * |  |- Browser Support
 * |  |- Flags
 * |
 * |– TASKS LIST
 * |  |- Descriptions
 * |  |- ...
 * |  |- TASKS => *
 * |  |  |- defaultTask()
 * |  |  |- sassTask()
 * |  |  |- imageTask()
 * |  |  |- watchTask()
 * |  |  |- deployTask()
 * |  |  |- exportTask()
 * |  |  |- statsTask()
 * |  |  |- docsTask()
 * |
 * |– LINKS & RESOURCES
 * |  |- ...
 */



// ========================================================================
// PLUGINS
// ========================================================================
// For documentation on these plugins, see the 'LINKS & RESOURCES' section.
const gulp          = require('gulp'),
    _               = require('lodash'),
    autoprefixer    = require('autoprefixer'),
    babel           = require('gulp-babel'),
    browserSync     = require('browser-sync').create(),
    chug            = require('gulp-chug'),
    color           = require('gulp-color'),
    concat          = require('gulp-concat'),
    cssnano         = require('cssnano'),
    cssstats        = require('postcss-cssstats'),
    es              = require('event-stream'),
    eslint          = require('gulp-eslint'),
    gulpIgnore      = require('gulp-ignore'),
    gulpStylelint   = require('gulp-stylelint'),
    gulpif          = require('gulp-if'),
    imagemin        = require('gulp-imagemin'),
    minify          = require('gulp-babel-minify'),
    minimist        = require('minimist'),
    postcss         = require('gulp-postcss'),
    rename          = require("gulp-rename"),
    sass            = require('gulp-sass'),
    sassdoc         = require('sassdoc'),
    size            = require('gulp-size'),
    sourcemaps      = require('gulp-sourcemaps'),
    uglify          = require('gulp-uglify'),
    webpack         = require('webpack'),
    webpackConfig   = require('./webpack.config.js'),
    zip             = require('gulp-zip');



// ========================================================================
// VARIABLES
// ========================================================================
// Localhost URL for BrowserSync
// Use the --proxy flag to change without editing this file
const localhost = 'project.localhost';

// Paths
const paths = {
    // source files
    sass:       './src/scss/',
    scripts:    './src/js/',
    amplify:    './src/amplify/',
    funnel:     './src/booking/',
    search:     './src/search/',
    offer:      './src/offer-search/',

    // distribution (production-ready) files
    css:        './dist/css/',
    js:         './dist/js/',
    img:        './dist/images/',
    booking:    './dist/booking/'
};

// Entry Points
const bundledEntryPointPaths = {
    funnel:     paths.funnel,
    search:     paths.search,
    offer:      paths.offer,
    amplify:    paths.amplify
};

// Additionals
const additionalJsFiles = [
    './dist/js/index.js',
    './dist/js/special.js',
    './dist/js/shared/**/*.js',
    './dist/**/*.js',
    './dist/**/*.html'
];

// Browser Support
// https://github.com/ai/browserslist#queries
const support = [
    'last 2 versions',  // last 2 ver of major browsers
    'ie >= 9',          // IE v9+
    'iOS >= 8'          // iOS v8+
];

// Flags
const knownFlags = {
    boolean: ['dev', 'bs'],
    string: ['proxy'],
    default: {
        dev: false,
        bs: false,
        proxy: localhost
    }
};
const flags = minimist(
    process.argv.slice(2),
    knownFlags
);



// ========================================================================
// TASKS LIST
// ========================================================================
gulp.task('default', [ // e.g. CLI command: 'gulp'
    'sass', 
    'images', 
    'deploy', 
    'docs', 
    'watch'
], defaultTask);
gulp.task('deploy',     deployTask);
gulp.task('export',     exportTask);
gulp.task('images',     imageTask);
gulp.task('reference',  referenceTask);
gulp.task('sass',       sassTask);
gulp.task('stats',      statsTask);
gulp.task('docs',       docsTask);
gulp.task('test',       testTask);
gulp.task('watch',      watchTask);



// ========================================================================
// TASKS => DESCRIPTIONS
// ========================================================================
// tasks
defaultTask.description     = 'Runs all tasks.';
deployTask.description      = 'Bundles all JS/HTML assets into entry point *.min.js bundles.';
exportTask.description      = 'ZIPs all files relevant for security testing (excludes conf and vendor).';
imageTask.description       = `Optimizes images in ${paths.img}`;
referenceTask.description   = '-';
sassTask.description        = `Run Stylelint and PostCSS, compile Sass, then save to ${paths.sass}`;
statsTask.description       = 'Analyzes CSS and returns a comprehensive report object.';
docsTask.description        = 'Parse SCSS and compile SassDoc comments to docs/ dir.';
testTask.description        = '-';
watchTask.description       = 'Watches files for changes, compiles on file saves, and reloads BrowserSync if necessary.';

// task flags
sassTask.flags = {
    default: ' 🏁  Output style is compressed and minified.',
    '--dev': ' 🏁  Output style is expanded and uses sourcemaps.',
};
imageTask.flags = {
    default: ' 🏁  Compress images.',
    '--dev': ' 🏁  Skips image compression.',
};



// TASKS => DEFAULT
// ========================================================================
function defaultTask() {
    console.log(color('                                      ', 'WHITE'));
    console.log(color('**************************************', 'WHITE'));
    console.log(color('                                      ', 'WHITE'));
    console.log(color('      defaultTask() COMPLETE          ', 'GREEN'));
    console.log(color('      ======================          ', 'WHITE'));
    console.log(color('      Be sure to check for errors.    ', 'RED'));
    console.log(color('                                      ', 'WHITE'));
    console.log(color('**************************************', 'WHITE'));
    console.log(color('                                      ', 'WHITE'));

    if (flags.bs) {
        return browserSync.init({
            proxy: flags.proxy,
            online: true,
        });
    }
}

function testTask() {
  return gulp.src('./node_modules/backstopjs/gulpfile.js')
      .pipe(chug({ tasks: ['test'] }));
}

function referenceTask() {
  return gulp.src('./node_modules/backstopjs/gulpfile.js')
      .pipe(chug({ tasks: ['reference'] }));
}



// ========================================================================
// TASKS => SASS
// ========================================================================
function sassTask() {
    // postCSS plugin calls
    let plugins = [
        autoprefixer({ browsers: support }),
        cssnano({
            preset: ['default', {
                discardComments: { removeAll: true },
            }]
        }),
    ];

    // display cli log msg
    console.log(color('                                      ', 'WHITE'));
    console.log(color('✅  ', 'WHITE') + color('sassTask()', 'GREEN'));
    console.log(color('                                      ', 'WHITE'));

    // sass pipeline
    return gulp.src(`${paths.sass}/**/*.scss`)
        .pipe(gulpif(flags.dev, sourcemaps.init()))
        .pipe(gulpStylelint({
            reporters: [{
                formatter: 'string',
                console: true,
            }]
        }))
        .pipe(sass({ outputStyle: 'compressed' })
        .on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulpif(flags.dev, sourcemaps.write('./')))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.css))
        .pipe(size({
            title: 'CSS:',
            pretty: true,
            showFiles: true,
            showTotal: true
        }))
        .pipe(gulpif(flags.bs, browserSync.stream()));
}



// ========================================================================
// TASKS => IMAGES
// ========================================================================
function imageTask() {
    // display cli log msg
    console.log(color('✅  ', 'WHITE') + color('imageTask()', 'GREEN'));

    // image pipeline
    gulp.src(`${paths.img}/**/*`)
        .pipe(gulpif(flags.dev, gulpIgnore.exclude())) // skips if using --dev
        .pipe(imagemin({ verbose: true }))
        .pipe(gulp.dest(paths.img));
}



// ========================================================================
// TASK => WATCH
// ========================================================================
function watchTask() {
    // display cli log msg
    console.log(color('✅  ', 'WHITE') + color('watchTask()', 'GREEN'));

    // watch sass
    gulp.watch(`${paths.sass}**/*.scss`, ['sass'])
        .on('change', (event) => {
            console.log(color('                                      ', 'WHITE'));
            console.log(color('**************************************', 'WHITE'));
            console.log(color('SCSS FILECHANGE DETECTED              ', 'WHITE'));
            console.log(color('=========================             ', 'WHITE'));
            console.log(color('FILE:', 'WHITE'), color(`${event.path}`, 'YELLOW'));
            console.log(color('EVENT:', 'WHITE'), color(`${event.type}`, 'YELLOW'));
            console.log(color('RETURN:', 'WHITE'), color('Running sassTask() ...   ', 'GREEN'));
            console.log(color('**************************************', 'WHITE'));
            console.log(color('                                      ', 'WHITE'));
        });

    // watch js
    const jsPaths = _.reduce(bundledEntryPointPaths, function(sum, value, key) {
        const returnValue = sum.slice();
        returnValue.push(value + 'source/**/*.js');
        returnValue.push(value + '**/*.html');
        return returnValue;
    }, []).concat(additionalJsFiles);

    console.log(color('Gulp Watch JS/HTML paths:', 'BLUE'));
    console.log(jsPaths);

    return gulp.watch(jsPaths, ['deploy'])
        .on('change', function(event) {
            console.log(color('                                      ', 'WHITE'));
            console.log(color('**************************************', 'WHITE'));
            console.log(color('JAVASCRIPT FILECHANGE DETECTED        ', 'WHITE'));
            console.log(color('==============================        ', 'WHITE'));
            console.log(color('FILE:', 'WHITE'), color(`${event.path}`, 'YELLOW'));
            console.log(color('EVENT:', 'WHITE'), color(`${event.type}`, 'YELLOW'));
            console.log(color('RETURN:', 'WHITE'), color('Running deployTask() ... ', 'GREEN'));
            console.log(color('**************************************', 'WHITE'));
            console.log(color('                                      ', 'WHITE'));

            // if --bs is active, reload browser after .js compile
            if (flags.bs) { browserSync.reload(event); }
        });
}



// ========================================================================
// TASK => DEPLOY (webpack)
// ========================================================================
function deployTask() {
    // display cli log msg
    console.log(color('✅  ', 'WHITE') + color('deployTask()', 'GREEN'));
    return webpack(webpackConfig, function(error, stats) {
        if (error) {
            console.error(error);
        } else {
            console.log(stats.toString({ colors: true }));
        }
  });
}



// ========================================================================
// TASK => EXPORT
// ========================================================================
function exportTask() {
    return gulp.src([
        '../../carlsonhotels_api/**/*.php',
        '!../../carlsonhotels_api/conf/**',
        '!../../carlsonhotels_api/oauth2nc/**',
        '!../../carlsonhotels_api/oauth2-server-5.1.1/**',
        '../../carlsonhotels_cms/protected/**',
        '!../../carlsonhotels_cms/protected/extensions/**',
        '!../../carlsonhotels_cms/protected/config/**',
        '!../../carlsonhotels_cms/protected/migrations/**',
        '!../../carlsonhotels_cms/protected/tests/**',
        '../../carlsonhotels_cms/wwww/**',
        '../../carlsonhotels_cms/ssoclient/**',
        '../../carlsonhotels_com/lib/**/*.php',
        '!../../carlsonhotels_com/lib/_swiftmailer/**',
        '!../../carlsonhotels_com/lib/esite/classes/class.phpmailer.php',
        '!../../carlsonhotels_com/lib/libphonenumber/**',
        '../../carlsonhotels_com/www/classes/**',
        '../../carlsonhotels_com/www/media/**',
        '../../carlsonhotels_com/www/modules/**',
        '../../carlsonhotels_com/www/smart/**',
        '../../carlsonhotels_com/www/templates/**/*.js',
        '!../../carlsonhotels_com/www/templates/**/moment-with-locales.js',
        '!../../carlsonhotels_com/www/templates/**/moment.js'
    ], { base: '../../' })
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('../../'));
}



// ========================================================================
// TASK => CSS STATS
// ========================================================================
function statsTask() {
    // display cli log msg
    console.log(color('✅  ', 'WHITE') + color('statsTask()', 'GREEN'));
    
    return gulp.src(`${paths.css}/**/*.css`)
        .pipe(postcss([
            cssstats(function(stats) {
                console.log(stats);
            })
        ]));
}



// ========================================================================
// TASK => SASSDOCS
// ========================================================================
function docsTask() {
    // display cli log msg
    console.log(color('✅  ', 'WHITE') + color('docsTask()', 'GREEN'));
    
    let docs = './docs/assets/docs';
    let options = {
        dest: './docs/dist/', 
        verbose: true, 
        display: {
            access: 'public', 
            alias: true, 
            watermark: true, 
        },
        groups: {
            'components':   'Components',
            'mixins':       'Mixins',
            'settings':     'Settings',
            'undefined':    'Ungrouped',
            'utilities':    'Utilities',
            'variables':    'Variables'
        },
        theme: './docs/theme', 
        herman: {
            customCSS: '',
            extraDocs: [
                { name: 'Installation',         path: `${docs}/install.md` }, 
                { name: 'Sass',                 path: `${docs}/sass.md` }, 
                { name: 'Comment style',        path: `${docs}/comments.md` }, 
                { name: 'Development pipeline', path: `${docs}/development.md` }, 
                { name: 'License',              path: './LICENSE.md' }, 
            ],
            displayColors: 'hex'
        },
        basePath: 'https://github.com/williampansky/pansky-boilerplate/tree/master/src/scss',
    };
    
    return gulp.src(`${paths.sass}/**/*.scss`)
        .pipe(sassdoc(options));
}



// ========================================================================
// LINKS & RESOURCES
// ========================================================================
/**
 * Autoprefixer             https://github.com/postcss/autoprefixer
 * BrowserSync              https://browsersync.io/docs/gulp
 * CSS Nano                 http://cssnano.co/
 * CSS Stats                https://github.com/cssstats/postcss-cssstats
 * Event Stream             https://github.com/dominictarr/event-stream
 * Gulp                     https://gulpjs.com/
 * Gulp Babel               https://github.com/babel/gulp-babel
 * Gulp Babel Minify        https://github.com/babel/minify/tree/master/packages/gulp-babel-minify
 * Gulp Chug                https://github.com/robatron/gulp-chug
 * Gulp CLI                 https://github.com/gulpjs/gulp-cli
 * Gulp Color               https://github.com/jikkai/gulp-color
 * Gulp Concat              https://github.com/contra/gulp-concat
 * Gulp ESLint              https://github.com/adametry/gulp-eslint
 * Gulp If                  https://github.com/robrich/gulp-if
 * Gulp Ignore              https://github.com/robrich/gulp-ignore
 * Gulp Imagemin            https://github.com/sindresorhus/gulp-imagemin
 * Gulp Rename              https://github.com/hparra/gulp-rename
 * Gulp Sass                https://www.npmjs.com/package/gulp-sass
 * Gulp Size                https://github.com/sindresorhus/gulp-size
 * Gulp Sourcemaps          https://github.com/gulp-sourcemaps/gulp-sourcemaps
 * Gulp Stylelint           https://github.com/olegskl/gulp-stylelint
 * Gulp Stylelint           https://www.npmjs.com/package/gulp-stylelint
 * Gulp Uglify              https://github.com/terinjokes/gulp-uglify
 * Gulp Util                https://github.com/gulpjs/gulp-util
 * Gulp Zip                 https://github.com/sindresorhus/gulp-zip
 * Lodash                   https://lodash.com/
 * Minimist                 https://github.com/substack/minimist
 * PostCSS                  http://postcss.org/
 * SassDoc                  http://sassdoc.com/
 * Stylelint                https://stylelint.io/
 * Stylelint Standard       https://github.com/stylelint/stylelint-config-standard
 * Webpack                  http://webpack.github.io/docs/usage-with-gulp.html
 */