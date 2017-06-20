# Pansky-Boilerplate

Just a simple boilerplate repo with how I generally organize my project assets.

## Installation

If you're a crazy person and, for some odd reason, want to download and tinker then be my guest. You can install with the [Bower package manager](https://bower.io/).

```
bower install pansky-boilerplate --save
```

## Primary tools

```
- SCSS
- Gulp
  - Babel
    - Babili
  - CSSnano
  - PostCSS
    - AutoPrefixer
    - Stylelint
  - Rename
  - SASS
  - SourceMaps
  - Util
  - Vinyl FTP
```

## SCSS file structure

I compartmentalize my SCSS partial files into the following structure:

```
assets/scss/
|
|-- base/                 # BASE
|-- // Global styles such as non-vendor resets, typography, etc.
|   |-- _!module.scss     ## Core storage file for base @imports.
|   |-- _resets.scss      ## Personal reset tweaks.
|   |-- _typography.scss  ## Typography styles.
|   ...
|
|-- components/           # COMPONENTS
|-- // Resuable module components: buttons, forms, sliders, etc.
|   |-- _!module.scss     ## Core storage file for component @imports.
|   |-- _buttons.scss     ## Button styling.
|   |-- _lists.scss       ## List styles.
|   ...
|
|-- layout/               # LAYOUT
|-- // Styling for larger layout components: nav, header, footer, etc.
|   |-- _!module.scss     ## Core storage file for layout @imports.
|   |-- _header.scss      ## <header>-specific styles.
|   |-- _grid.scss        ## Project grid specs.
|   ...
|
|-- pages/                # PAGES
|-- // Page-specific styling, such as homepage, if necessary.
|   |-- _!module.scss     ## Core storage file for page @imports.
|   |-- _homepage.scss    ## Homepage-specific page styles.
|   |-- _contact.scss     ## Contact-specific page styles.
|   ...
|
|-- partials/             # PARTIALS
|-- // Definitions, settings, mixins, etc.
|   |-- _!module.scss     ## Core storage file for partial @imports.
|   |-- _definitions.scss ## SCSS Variables.
|   |-- _settings.scss    ## Settings file: defines global states.
|   ...
|
|-- themes/               # THEMES
|-- // Styles for different themes; such as holidays, events, etc.
|   |-- _!module.scss     ## Core storage file for theme @imports.
|   ...
|
|-- utilities/            # UTILITIES
|-- // Helper utility styles for adjusting margin, text-transform, etc.
|   |-- _!module.scss     ## Core storage file for utility @imports.
|   |-- _animations.scss  ## Animation helpers (delays, etc).
|   |-- _shadows.scss     ## Shadows (box-shadows, etc).
|   ...
|
|-- vendors/              # VENDORS
|-- // Third-party vendor styles: normalize, animate, etc.
|   |-- _animate.scss     ## Custom animate.css file.
|   |-- _normalize.scss   ## Standard normalize.css file.
|   ...
|
-- main.scss              # Primary SCSS file
|   |-- @import 'partials/!module';
|   |-- @import 'vendors/!module';
|   |-- @import 'base/!module';
|   |-- @import 'utilities/!module';
|   |-- @import 'components/!module';
|   |-- @import 'layout/!module';
|   |-- @import 'pages/!module';
|   |-- @import 'themes/!module';
```

## Gulpfile.js & Babel pipeline

I use various Gulp plugins for my stylesheets and Babel (Gulp-Babel) for my scripts. My default ``gulp`` CLI command is as follows:

```js
// -----------------------------------------
// ## RUN CMD 'gulp' TO COMPILE SCSS
gulp.task('default', () => {
  return gulp.src('assets/scss/main.scss')
    .pipe(sourcemaps.init()) // init maps
    .pipe(sass()) // using gulp-sass
    .pipe(postcss([ // postcss
      autoprefixer()
    ]))
    .pipe(gulpStylelint({
      reporters: [
        {
          formatter: 'verbose', console: true
        }
      ]
    }))
    .pipe(nano()) // nano that shiz
    .pipe(rename('app.min.css')) // rename to .min
    .pipe(sourcemaps.write('.')) // write maps
    .pipe(gulp.dest('assets/css')) // export destination
});
```

## Comment structure

In an attempt to write clean and legible SCSS/JS code, the following is my comment structure. Compiled code is minified via Gulp and Babel into **app.min.css** and **app.min.js** files, which strips the comments from the production assets to avoid negatively impacting file size.

Primary comment blocks define new sections (one per section), while secondary blocks can be reused as needed.

```scss
// ==============================================================
//
// # PRIMARY
// # This block stands out from the rest and defines a section.
//
// ==============================================================

// -----------------------------------------
// ## PRIMARY - SECONDARY
// ## This block is serves as a secondary comment; subsections of the primary section.
```

## Atom.io snippets

CoffeeScript code for [Atom.io](https://atom.io)'s snippets for easier writing; full **snippets.cson** available on my [Gist](https://gist.github.com/williampansky/869225abbb4ee5278ef9c9ea7166d2f1).

```cson
###########################################
###########################################
###########################################
#
# - SCSS
'.source.scss':
#
###########################################
###########################################
###########################################

## -----------------------------------------
##  COMMENTS - .scss Comment Styles
## -----------------------------------------
  ## COMMENTS - Comment Section Header
  'Comment Section Header':
    'prefix': 'com1'
    'body': """
      // ==============================================================
      //
      // #
      //
      // ==============================================================
    """

  ## -----------------------------------------
  ## COMMENTS - Inline (sub)Comment
  'Comment Inline':
    'prefix': 'com2'
    'body': """

      // -----------------------------------------
      // ##
    """
```
