# Sass
The [Sass](http://sassnotsass.com/) rules we tend to follow are Hugo Giraudel's [Sass guidelines](https://sass-guidelin.es/), with the TLDR being:

### Key principles
* Having a styleguide is all about consistency. If you disagree with some rules from Sass Guidelines, fair enough as long as you are consistent. [🔗](https://sass-guidelin.es/#key-principles)
* Sass should be kept as simple as it can be. Avoid building complex systems unless absolutely necessary. [🔗](https://sass-guidelin.es/#key-principles)
* Keep in mind that sometimes **KISS** (_Keep It Simple, Stupid_) is better than **DRY** (_Don’t Repeat Yourself_). [🔗](https://sass-guidelin.es/#key-principles)

### Syntax & formatting
* General markup rules
   * An indentation is made of two (2) spaces, no tabs. [🔗](https://sass-guidelin.es/#syntax--formatting)
   * Lines should be, as much as possible, shorter than 80 characters. Feel free to split them into several lines when necessary. [🔗](https://sass-guidelin.es/#syntax--formatting)
   * CSS should be properly written, possibly following the [CSS Guidelines](http://cssguidelin.es/) from Harry Roberts. [🔗](https://sass-guidelin.es/#syntax--formatting)
   * Whitespace is free – use it to separate items, rules, and declarations. _Do not hesitate to leave empty lines_, it never hurts; this project's `.stylelintrc` file allows for up to three empty lines between code blocks (though comments are ignored). Whitespace is key to emphasis and readability. [🔗](https://sass-guidelin.es/#syntax--formatting)

* Strings
   * Declaring the `@charset` directive on top of the stylesheet is highly recommended. [🔗](https://sass-guidelin.es/#encoding)
   * Unless applied as CSS identifiers, e.g: `[target=_"blank"]`, strings should be quoted using single quotes. URLs should also be quoted. [🔗](https://sass-guidelin.es/#strings-as-css-values)

* Numbers
   * Sass makes no distinction between numbers, integers, floats so trailing zeros (0) should be omitted. However, leading zeros (0) help readability and should be added. [🔗](https://sass-guidelin.es/#zeros)
   * A zero (0) length should not have a unit. [🔗](https://sass-guidelin.es/#units)
   * Units manipulation should be thought as arithmetic operations, not string operations. [🔗](https://sass-guidelin.es/#units)
   * In order to improve readability, top-level calculations should be wrapped in parentheses. Also, complex math operations might be splitted into smaller chunks. [🔗](https://sass-guidelin.es/#calculations)
   * Magic numbers dramatically hurt code maintainability and should be avoided at all time. When in doubt, extensively explain the questionable value. [🔗](https://sass-guidelin.es/#magic-numbers)

* Colors
   * Colors should be expressed in HSL when possible, then RGB, then hexadecimal _(in a lowercase **and** shortened form, e.g: `#fff` instead of `#ffffff` or `#FFF`)_. Color keywords, other than `white/black` should be avoided. [🔗](https://sass-guidelin.es/#color-formats)
   * Prefer [mix(..)](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method), e.g. `color: mix(white, $primary-color, 35%);`, instead of darken(..) and lighten(..) when lightening or darkening a color. [🔗](https://sass-guidelin.es/#lightening-and-darkening-colors)

* Lists
   * Unless used as a direct mapping to space-separated CSS values, lists should be separated with commas. [🔗](https://sass-guidelin.es/#lists)
   * Wrapping parentheses should also be considered to improve readability. [🔗](https://sass-guidelin.es/#lists)
   * Inlined lists should not have a trailing comma, multi-line lists should have it. [🔗](https://sass-guidelin.es/#lists)

* Maps
   * Maps containing more than a single pair are written on several lines. [🔗](https://sass-guidelin.es/#maps)
   * To help maintainability, the last pair of a map should have a trailing comma. [🔗](https://sass-guidelin.es/#maps)
   * Map keys that happen to be strings should be quoted as any other string. [🔗](https://sass-guidelin.es/#maps)

* Declaration sorting
   * The system used for declaration sorting (alphabetical, by type, etc.) doesn’t matter as long as it is consistent. [🔗](https://sass-guidelin.es/#declaration-sorting)

* Selector nesting
   * Avoid selector nesting when it is not needed (which represents most of the cases). [🔗](https://sass-guidelin.es/#selector-nesting)
   * Use selector nesting for pseudo-classes and pseudo-elements. [🔗](https://sass-guidelin.es/#selector-nesting)
   * Media queries can also be nested inside their relevant selector. [🔗](https://sass-guidelin.es/#selector-nesting)

* Naming conventions
   * It is best to stick to CSS naming conventions which are _(except a few errors)_ lowercase and hyphen-delimited. [🔗](https://sass-guidelin.es/#naming-conventions)

* Commenting
   * CSS is a tricky language; please, feel free, to write _very_ extensive comments about code blocks that may not be inheritely understandable. If you think there's even the _slightest_ chance for a fellow dev to misunderstand a slice of code you've written, just slap down some comments to explain things. We're a team, remember! 😎 [🔗](https://sass-guidelin.es/#commenting)
   * For variables, functions, mixins, and placeholders — use SassDoc comments. [🔗](https://sass-guidelin.es/#documentation)

* Variables
   * Do use the `!default` flag for any variable part of a public API that can be safely changed. [🔗](https://sass-guidelin.es/#default-flag)
   * Do not use the `!global` flag at root level as it might constitue a violation of Sass syntax in the future. [🔗](https://sass-guidelin.es/#global-flag)

* Extend
   * Stick to extending [placeholders](https://www.sitepoint.com/sass-reference/placeholders/), **_not_** existing CSS selectors. [🔗](https://sass-guidelin.es/#extend)
   * Extend a placeholder as few times as possible in order to avoid side effects. [🔗](https://sass-guidelin.es/#extend)

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
