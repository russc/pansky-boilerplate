{# <header class="header" role="banner">
    <div class="container">
        <div class="sassdoc__searchbar  searchbar">
            <label for="js-search-input" class="uk-hidden">Search</label>
            <div class="searchbar__form" id="js-search">
                <input name="search" type="search" class="searchbar__field" autocomplete="on" id="js-search-input" placeholder="Search" />
                <ul class="searchbar__suggestions" id="js-search-suggestions"></ul>
            </div>
        </div>
    </div>
</header> #}

<header uk-sticky class="uk-navbar-container tm-navbar-container uk-sticky uk-sticky-fixed uk-active uk-sticky-below">
    <section class="uk-container uk-container-expand">
        <nav class="uk-navbar">
            <div class="uk-navbar-left uk-visible@m">
                <ul class="uk-navbar-nav">
                    <li>
                        <a href="../">
                            {% if package.homepage %}
                                {{ project_title }}{% if package.version %} - v{{ package.version }}{% endif %}
                            {% else %}
                                {{ project_title }}{% if package.version %} - {{ package.version }}{% endif %}
                            {% endif %}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="uk-navbar-right">
                {% include "navbar.links.html.swig" %}
                <a uk-navbar-toggle-icon href="#offcanvas" uk-toggle class="uk-navbar-toggle uk-hidden@m uk-navbar-toggle-icon uk-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ratio="1">
                        <rect y="9" width="20" height="2"></rect>
                        <rect y="3" width="20" height="2"></rect>
                        <rect y="15" width="20" height="2"></rect>
                    </svg>
                </a>
            </div>
        </nav>
    </section>
</header>