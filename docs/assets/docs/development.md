# Development pipeline

### Gulpfile.js
> _"Gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something."_
> — [gulpjs.com](https://gulpjs.com/)

Our `gulpfile.js` files generally run a collection of the following tasks. See the [SHS Wiki](http://wiki.esitelabs.com:1081/index.php/Gulp_Workflow) for more information.

```js
// TASKS LIST
// ========================================================================
// TASKS => DEFAULT
gulp.task('default', [ // e.g. CLI command: 'gulp'
    'sass', 
    'docs', 
    'images', 
    'deploy', 
    'watch'
], defaultTask);
defaultTask.description = 'Runs all tasks.';

//_____________________________________
// TASKS => DEPLOY
gulp.task('deploy', deployTask);
deployTask.description = 'Bundles all JS/HTML assets into entry point *.min.js bundles.';

//_____________________________________
// TASKS => EXPORT
gulp.task('export', exportTask);
exportTask.description = 'ZIPs all files relevant for security testing (excludes conf and vendor).';

//_____________________________________
// TASKS => IMAGES
gulp.task('images', imageTask);
imageTask.description = `Optimizes images in ${paths.img}`;

// TASKS => Images task flags
imageTask.flags = {
    default: ' 🏁  Compress images.',
    '--dev': ' 🏁  Skips image compression.',
};

//_____________________________________
// TASKS => REFERENCE
gulp.task('reference',  referenceTask);
referenceTask.description  = '-';

//_____________________________________
// TASKS => SASS
gulp.task('sass', sassTask);
sassTask.description = `Run Stylelint and PostCSS, compile Sass, then save to ${paths.sass}`;

// TASKS => Sass task flags
sassTask.flags = {
    default: ' 🏁  Output style is compressed and minified.',
    '--dev': ' 🏁  Output style is expanded and uses sourcemaps.',
};

//_____________________________________
// TASKS => STATS
gulp.task('stats', statsTask);
statsTask.description = 'Analyzes CSS and returns a comprehensive report object.';

//_____________________________________
// TASKS => DOCS
gulp.task('docs', docsTask);
docsTask.description = 'Parse SCSS and compile SassDoc comments to docs/ dir.';

//_____________________________________
// TASKS => TEST
gulp.task('test', testTask);
testTask.description = '-';

//_____________________________________
// TASKS => WATCH
gulp.task('watch', watchTask);
watchTask.description = 'Watches files for changes, compiles on file saves, and reloads BrowserSync if necessary.';
```

### Webpack
> _"At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into one or more bundles."_
> — [webpack.js.org](https://webpack.js.org/)

**_!TODO:_** Additional Webpack information is needed here.

### SassDoc
To help us document our Sass variables, functions, mixins, and placeholders, we utilize another nifty utility written by Hugo Giraudel called SassDoc.

> _"SassDoc parses your source folder to grab documentation-specific comments. From there, it builds a data tree, that gets enhanced and filtered before being passed to the view."_
> — [sassdoc.com](http://sassdoc.com/)


![SassDoc screenshot](../assets/img/sassdoc-preview.jpg)

Here is an example of a mixin extensively documented with SassDoc:

```scss
/// Mixin helping defining both `width` and `height` simultaneously.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - Element’s `width`
/// @param {Length} $height [$width] - Element’s `height`
///
/// @example scss - Usage
///   .foo {
///     @include size(10em);
///   }
///
///   .bar {
///     @include size(100%, 10em);
///   }
///
/// @example css - CSS output
///   .foo {
///     width: 10em;
///     height: 10em;
///   }
///
///   .bar {
///     width: 100%;
///     height: 10em;
///   }

@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
```