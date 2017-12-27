# Readme
Seed repository for proper Sass and JavaScript coding standards, best practices, proper commenting, and file architecture.

### Installation
Download and extract the ZIP or clone this repo to your project and then rename the folder accordingly to your needs (e.g: `assets/`). The directory structure is as follows:

```
root/
|
|-- dist/ ------------------ Distribution folder of production-ready assets
|  |-- css/ ---------------- Minified CSS files
|  |-- js/ ----------------- Minified JS files
|
|-- docs/ ------------------ Documentation folder; see index.html file
|  |-- dist/
|  |  |-- js/ -------------- Auto-generated endpoint directory for jsDoc
|  |  |-- sass/ ------------ Auto-generated endpoint directory for SassDoc
|  |-- themes/
|  |  |-- assets/ ---------- Doc-specific assets for our index.html page
|  |  |-- docdash/ --------- Docdash theme for jsDoc
|  |  |-- herman/ ---------- Herman theme for SassDoc [deprecated]
|  |  |-- sassdoc/ --------- SassDoc's default theme with custom extensions
|
|-- src/ ------------------- Source file directory; i.e. working files
|  |-- js/ ----------------- Root JavaScript file directory
|  |-- scss/ --------------- Root Sass file directory
|
| ...
```

### Usage
`cd` to your project directory and then simply `npm run gulp` in your CLI.

### SassDoc Syntax
Syntax | Description
:--- | :---
@access | Access of the documented item.
@alias | Whether the documented item is an alias of another item.
@author | Author of the documented item.
@content | Whether the documented mixin uses the @content directive.
@deprecated | Whether the documented item is deprecated.
@example | Example for the documented item.
@group | Group the documented item belongs to.
@ignore | Ignored content.
@link | Link related to the documented item.
@name | Name of the documented item.
@output | Output from the documented mixin.
@param | Parameters from the documented mixin or function.
@prop | Property of the documented map.
@requires | Requirements from the documented item.
@returns | Return from the documented function.
@see | Resource related to the documented item.
@since | Changelog for the documented item.
@throws | Exceptions raised by the documented item.
@todo | Things to do related to the documented item.
@type | Describes the type of a variable.
