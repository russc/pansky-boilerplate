<meta charset="utf-8" />
<title>{{ project_title }}{% if package.version %} - v{{ package.version }}{% endif %}</title>
<meta name="viewport" content="width=device-width">
<meta content="IE=edge, chrome=1" http-equiv="X-UA-Compatible">

<!-- stylesheets -->
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,500,700' rel='stylesheet' type='text/css'>
{# <link rel="stylesheet" href="assets/css/main.css" /> #}
<link rel="stylesheet" href="../assets/css/uikit.min.css" />
<link rel="stylesheet" href="../assets/css/uikit-theme.min.css" />
<link rel="stylesheet" href="../assets/css/hljs/atom-one-dark.css" />
<link rel="stylesheet" href="../assets/css/custom.css" />

<!-- Open Graph tags -->
<meta property="og:title" content="{{ project_title }} - SassDoc" />
<meta property="og:type" content="website" />

{% if package.description %}
    <meta property="og:description" content="{{ package.description | safe }}" />
{% else %}
    <meta property="og:description" content="Release the docs!" />
{% endif %}

<!-- Thanks to Sass-lang.com for the icons -->
<link href="{{ shortcutIcon.url }}" rel="shortcut icon">
