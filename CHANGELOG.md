# v1.0.0
##### 20170111
 - Initial commit structure
 - main.scss

 ```
 // PARTIALS
 // Mixins, definitions (colors, font-families), functions, selectors, etc.
 @import 'partials/!module';

 // VENDORS
 // 3rd-party vendor styles (normalize, bootstrap), etc.
 @import 'vendors/!module';

 // BASE
 // Global styles such as non-vendor resets, typography, etc.
 @import 'base/!module';

 // COMPONENTS
 // Resuable / independant module components (buttons, sliders, etc.)
 @import 'components/!module';

 // LAYOUT
 // Styling for larger layout components; e.g. nav, header, footer, etc.
 @import 'layout/!module';

 // PAGES
 // Page-specific styling, such as homepage, if necessary.
 @import 'pages/!module';

 // THEMES
 // Styles for different themes; such as holidays, events, etc.
 @import 'themes/!module';
 ```

 - [Atom.io](https://atom.io) snippets.cson

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
