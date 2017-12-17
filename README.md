# README.md
Just a simple boilerplate repo with how I generally organize my project assets.


## Installation
You can install this package various ways.

~~[NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/en/)~~
<!-- ```cli
npm install REPO
yarn install REPO
``` -->

~~[Git](https://github.com/)~~
<!-- ```cli
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
``` -->


# # Sass
The Sass rules we tend to follow are Hugo Giraudel's [Sass guidelines](https://sass-guidelin.es/), with the TLDR being:

### Key principles [🔗](https://sass-guidelin.es/#key-principles)
* Having a styleguide is all about consistency. If you disagree with some rules from Sass Guidelines, fair enough as long as you are consistent.
* Sass should be kept as simple as it can be. Avoid building complex systems unless absolutely necessary.
* Keep in mind that sometimes **KISS** (_Keep It Simple, Stupid_) is better than **DRY** (_Don’t Repeat Yourself_).

### Syntax & formatting [🔗](https://sass-guidelin.es/#syntax--formatting)
* An indentation is made of two (2) spaces, no tabs.
* Lines should be, as much as possible, shorter than 80 characters. Feel free to split them into several lines when necessary.
* CSS should be properly written, possibly following the [CSS Guidelines](http://cssguidelin.es/) from Harry Roberts.
* Whitespace is free, use it to separate items, rules and declarations. Do not hesitate to leave empty lines, it never hurts.

#### Strings
* Declaring the `@charset` directive on top of the stylesheet is highly recommended.
* Unless applied as CSS identifiers, strings should be quoted using single quotes. URLs should also be quoted.

#### Numbers
* Sass makes no distinction between numbers, integers, floats so trailing zeros (0) should be omitted. However, leading zeros (0) help readability and should be added.
* A zero (0) length should not have a unit.
* Units manipulation should be thought as arithmetic operations, not string operations.
* In order to improve readability, top-level calculations should be wrapped in parentheses. Also, complex math operations might be splitted into smaller chunks.
* Magic numbers dramatically hurt code maintainability and should be avoided at all time. When in doubt, extensively explain the questionable value.

#### Colors
* Colors should be expressed in HSL when possible, then RGB, then hexadecimal _(in a lowercase **and** shortened form, e.g: `#fff` instead of `#ffffff` or `#FFF`)_. Color keywords, other than `white` and `black` should be avoided.
* Prefer [mix(..)](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method), e.g. `color: mix(white, $primary-color, 35%);`, instead of darken(..) and lighten(..) when lightening or darkening a color.

#### Lists
* Unless used as a direct mapping to space-separated CSS values, lists should be separated with commas.
* Wrapping parentheses should also be considered to improve readability.
* Inlined lists should not have a trailing comma, multi-line lists should have it.

#### Maps
* Maps containing more than a single pair are written on several lines.
* To help maintainability, the last pair of a map should have a trailing comma.
* Map keys that happen to be strings should be quoted as any other string.

#### Declaration sorting
* The system used for declaration sorting (alphabetical, by type, etc.) doesn’t matter as long as it is consistent.

#### Selector nesting
* Avoid selector nesting when it is not needed (which represents most of the cases).
* Use selector nesting for pseudo-classes and pseudo-elements.
* Media queries can also be nested inside their relevant selector.


### File architecture
Sass file architecure built off Hugo Giraaudel's [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern) (_i.e. "7 folders, 1 file"_) by appending an additional `utilities/` directory at the end to house a collection of helper classes to style our content.

```
|- abstracts/ --- Mixins, definitions, functions, selectors, etc.
|- vendors/ ----- 3rd-party vendor styles (normalize, bootstrap), etc.
|- base/ -------- Global styles such as non-vendor resets, typography, etc.
|- layout/ ------ Styling for larger layout modules; e.g. nav, header, etc.
|- components/ -- Resuable, independant, module components (buttons, etc.)
|- pages/ ------- Page-specific styling, such as homepage, if necessary.
|- themes/ ------ Styles for different themes; such as holidays, events, etc.
|- utilities/ --- Helper utility styles for adjusting margin, padding, etc.
```

Through consistency, linting, code reviews, and standards we strive to achieve a codebase like this:

```
scss/
|
|-- abstracts/
|  |-- _!module.scss ------- Core file for abstract @import calls
|  |-- variables/ ---------- Variables directory
|  |  |-- _colors.scss ----- Color definitions and maps
|  |  |-- _fonts.scss ------ Typography definitions and maps
|  |  |-- ...
|  |-- mixins/ ------------- Mixins directory
|  |  |-- _example.1.scss -- Mixin example
|  |  |-- _example.2.scss -- Mixin example
|  |  |-- ...
|
|-- vendors/
|  |-- _normalize.scss ----- Standard normalize.css file
|  ... --------------------- Etc.
|
|-- base/
|  |-- _!module.scss ------- Core file for base @import calls
|  |-- _resets.scss -------- Specific resets and tweaks
|  |-- _typography.scss ---- Global typography styles
|  ... --------------------- Etc.
|
|-- layout/
|  |-- _!module.scss ------- Core file for layout @import calls
|  |-- _header.scss -------- <header>-specific styles
|  |-- _grid.scss ---------- Project grid specs
|  ... --------------------- Etc.
|
|-- components/
|  |-- _!module.scss ------- Core file for component @import calls
|  |-- _buttons.scss ------- Button settings, styles, modifiers, and states
|  |-- _dropdowns.scss ----- Dropdown settings, styles, modifiers, and states
|  |-- _lists.scss --------- List settings, styles, and modifiers
|  ... --------------------- Etc.
|
|-- pages/
|  |-- _!module.scss ------- Core file for page @import calls
|  |-- _homepage.scss ------ Homepage-specific page styles
|  |-- _contact.scss ------- Contact-specific page styles
|  ... --------------------- Etc.
|
|-- themes/
|  |-- _!module.scss ------- Core file for theme @import calls
|  |-- theme-1/ ------------ Theme-1 directory
|  |  |-- ... -------------- Theme-1 files
|  |-- theme-2/ ------------ Theme-2 directory
|  |  |-- ... -------------- Theme-2 files
|  ... --------------------- Etc.
|
|-- utilities/
|  |-- _!module.scss ------- Core file for utility @import calls
|  |-- _display.scss ------- Single display property override classes
|  |-- _flex.scss ---------- Stackable flex property classes
|  |-- _no-scroll.scss ----- Prevent <body> scroll during open modals
|  |-- _svg-fill.scss ------ Fill SVGs with specific colors
|  ... --------------------- Etc.
|
-- main.scss
|  |-- @import 'abstracts/!module';
|  |-- @import 'vendors/!module';
|  |-- @import 'base/!module';
|  |-- @import 'layout/!module';
|  |-- @import 'components/!module';
|  |-- @import 'pages/!module';
|  |-- @import 'themes/!module';
|  |-- @import 'utilities/!module';
```


### ## Sass · Comments
In an attempt to write clean and legible SCSS/JS code, the following is my comment structure. Compiled code is minified via Gulp and Babel into **app.min.css** and **app.min.js** files, which strips the comments from the production assets to avoid negatively impacting file size.

Primary comment blocks define new sections (one per section), while secondary blocks can be reused as needed.

```scss
// ========================================================================
// FILE HEADER COMMENT
// ========================================================================
```

```scss



// PRIMARY SECTION HEADER COMMENT
// ========================================================================
```

```scss

//_____________________________________
// PRIMARY => SECONDARY SECTION COMMENT
```


#### ### Sass · Comments · Snippets
Snippets for easier commenting.

* [Alfred](https://www.alfredapp.com/extras/snippets/)
* [Atom](http://flight-manual.atom.io/using-atom/sections/snippets/)
* [VScode](https://code.visualstudio.com/docs/editor/userdefinedsnippets/)


## Gulpfile.js
```js
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
```