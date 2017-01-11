# Pansky-Sass File Structure

Just a simple repo with how I organize my **.scss** project files; derived from my own 'framework,' [Pansky.css](http://williampansky.com/css).

### Installation

If you're a crazy person and, for some odd reason, want to download and tinker then be my guest. You can install with the [Bower package manager](https://bower.io/).

```
bower install pansky-sass --save
```

### Comment Structure

In an attempt to write clean and legible Scss code, the following is my comment structure. Compiled code into **min.css** excludes these comments, therefore the final css filesize is not impacted.

Primary comment blocks define new sections (one per section), while secondary blocks can be reused as needed.
```
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//
// # PRIMARY
// # This block stands out from the rest and defines a section
//
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// -----------------------------------------
// ## PRIMARY - SECONDARY
// ## This block is used as a secondary comment; subsections of the primary section
```

### Atom.io Scss Snippets

The following is my Coffeescript code for [Atom.io](https://atom.io)'s snippets for easier writing. To keep the **snippets.cson** file clean, as well, I use a similar basic comment structure.

```
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
      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      //
      // #
      //
      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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
