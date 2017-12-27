# Comment style
In an attempt to write clean and legible Sass/JS code, the following is my comment structure. Compiled code is minified via Gulp into `*.min.css` and `*.min.js` files, which strips the comments from the production assets to avoid negatively impacting file size. Therefore, our source code _must_ contain competant and descriptive comments.

Primary comment blocks define new sections (one per section), while secondary blocks can be reused as needed.

```scss
// ========================================================================
// FILE HEADER COMMENT
// ========================================================================
```

_*Note that the periods (.) in the following two code blocks represent spaces._

```scss
.
.
.
// PRIMARY SECTION HEADER COMMENT
// ========================================================================
```

```scss
.
//_____________________________________
// PRIMARY => SECONDARY SECTION COMMENT
```

### Comment snippets
Snippets for easier commenting.

* [Alfred](https://www.alfredapp.com/extras/snippets/)
* [Atom](http://flight-manual.atom.io/using-atom/sections/snippets/)
* [VScode](https://code.visualstudio.com/docs/editor/userdefinedsnippets/)

**_!TODO:_** Compile comment styles into snippets for the various programs.
