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

## SassDoc Annotation Syntax
Annotation | Description
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

## jsDoc Annotation Syntax
Annotation | Description
:--- | :---
@abstract | Identifies members that must be implemented (or overridden) by objects that inherit the member.
@access | Specify the access level of this member (private, package-private, public, or protected).
@alias | Treat a member as if it had a different name.
@async | Indicate that a function is asynchronous.
@augments | Indicate that a symbol inherits from, and adds to, a parent symbol.
@author | Identify the author of an item.
@borrows | This object uses something from another object.
@callback | Document a callback function.
@class | This function is intended to be called with the "new" keyword.
@classdesc | Use the following text to describe the entire class.
@constant | Document an object as a constant.
@constructs | This function member will be the constructor for the previous class.
@copyright | Document some copyright information.
@default | Document the default value.
@deprecated | Document that this is no longer the preferred way.
@description | Describe a symbol.
@enum | Document a collection of related properties.
@event | Document an event.
@example | Provide an example of how to use a documented item.
@exports | Identify the member that is exported by a JavaScript module.
@external | Identifies an external class, namespace, or module.
@file | Describe a file.
@fires | Describe the events this method may fire.
@function | Describe a function or method.
@generator | Indicate that a function is a generator function.
@global | Document a global object.
@hideconstructor | Indicate that the constructor should not be displayed.
@ignore | Omit a symbol from the documentation.
@implements | This symbol implements an interface.
@inheritdoc | Indicate that a symbol should inherit its parent's documentation.
@inner | Document an inner object.
@instance | Document an instance member.
@interface | This symbol is an interface that others can implement.
@kind | What kind of symbol is this?
@lends | Document properties on an object literal as if they belonged to a symbol with a given name.
@license | Identify the license that applies to this code.
@listens | List the events that a symbol listens for.
@member  | Document a member.
@memberof | This symbol belongs to a parent symbol.
@mixes | This object mixes in all the members from another object.
@mixin | Document a mixin object.
@module  | Document a JavaScript module.
@name | Document the name of an object.
@namespace | Document a namespace object.
@override | Indicate that a symbol overrides its parent.
@package | This symbol is meant to be package-private.
@param | Document the parameter to a function.
@private | This symbol is meant to be private.
@prop | Document a property of an object.
@protected | This symbol is meant to be protected.
@public | This symbol is meant to be public.
@readonly | This symbol is meant to be read-only.
@requires | This file requires a JavaScript module.
@returns | Document the return value of a function.
@see | Refer to some other documentation for more information.
@since | When was this feature added?
@static | Document a static member.
@summary | A shorter version of the full description.
@this | What does the 'this' keyword refer to here?
@throws | Describe what errors could be thrown.
@todo | Document tasks to be completed.
@tutorial | Insert a link to an included tutorial file.
@type | Document the type of an object.
@typedef | Document a custom type.
@variation | Distinguish different objects with the same name.
@version | Documents the version number of an item.
@yields | Document the value yielded by a generator function.
