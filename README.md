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


## # Sass


### ## Sass · File architecture
Sass file architecure built off Hugo Giraaudel's [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern) (_i.e. "7 folders, 1 file"_) by appending an additional `utilities/` directory at the end to house a collection of helper classes to style our content.

```
|- abstracts/ ---- Mixins, definitions, functions, selectors, etc.
|- vendors/ ------ 3rd-party vendor styles (normalize, bootstrap), etc.
|- base/ --------- Global styles such as non-vendor resets, typography, etc.
|- layout/ ------- Styling for larger layout modules; e.g. nav, header, etc.
|- components/ --- Resuable, independant, module components (buttons, etc.)
|- pages/ -------- Page-specific styling, such as homepage, if necessary.
|- themes/ ------- Styles for different themes; such as holidays, events, etc.
|- utilities/ ---- Helper utility styles for adjusting margin, padding, etc.
```

Through consistency, linting, code reviews, and standards we strive to achieve a codebase like this:

```
scss/
|
|-- abstracts/
|  |-- _!module.scss ----------- Core file for abstract @import calls
|  |-- variables/ -------------- Variables directory
|  |  |-- _colors.scss --------- Color definitions and maps
|  |  |-- _fonts.scss ---------- Typography definitions and maps
|  |  |-- ...
|  |-- mixins/ ----------------- Mixins directory
|  |  |-- _example.1.scss ------ Mixin example
|  |  |-- _example.2.scss ------ Mixin example
|  |  |-- ...
|
|-- vendors/
|  |-- _normalize.scss --------- Standard normalize.css file
|  ... ------------------------- Etc.
|
|-- base/
|  |-- _!module.scss ----------- Core file for base @import calls
|  |-- _resets.scss ------------ Specific resets and tweaks
|  |-- _typography.scss -------- Global typography styles
|  ... ------------------------- Etc.
|
|-- layout/
|  |-- _!module.scss ----------- Core file for layout @import calls
|  |-- _header.scss ------------ <header>-specific styles
|  |-- _grid.scss -------------- Project grid specs
|  ... ------------------------- Etc.
|
|-- components/
|  |-- _!module.scss ----------- Core file for component @import calls
|  |-- _buttons.scss ----------- Button settings, styles, modifiers, and states
|  |-- _dropdowns.scss --------- Dropdown settings, styles, modifiers, and states
|  |-- _lists.scss ------------- List settings, styles, and modifiers
|  ... ------------------------- Etc.
|
|-- pages/
|  |-- _!module.scss ----------- Core file for page @import calls
|  |-- _homepage.scss ---------- Homepage-specific page styles
|  |-- _contact.scss ----------- Contact-specific page styles
|  ... ------------------------- Etc.
|
|-- themes/
|  |-- _!module.scss ----------- Core file for theme @import calls
|  |-- theme-1/ ---------------- Theme-1 directory
|  |  |-- ... ------------------ Theme-1 files
|  |-- theme-2/ ---------------- Theme-2 directory
|  |  |-- ... ------------------ Theme-2 files
|  ... ------------------------- Etc.
|
|-- utilities/
|  |-- _!module.scss ----------- Core file for utility @import calls
|  |-- _display.scss ----------- Single display property override classes
|  |-- _flex.scss -------------- Stackable flex property classes
|  |-- _no-scroll.scss --------- Prevent <body> scroll during open modals
|  |-- _svg-fill.scss ---------- Fill SVGs with specific colors
|  ... ------------------------- Etc.
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