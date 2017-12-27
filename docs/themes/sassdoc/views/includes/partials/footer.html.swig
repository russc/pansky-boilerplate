{# {% if project_title or display.watermark %}
<footer class="footer" role="contentinfo">
    <div class="container">
        {% if project_title %}
        <div class="footer__project-info  project-info">
            <!-- Name and URL -->
            {% if package.homepage %}
            <a class="project-info__name" href="{{ package.homepage }}">{{ project_title }}</a>
            {% else %}
            <span class="project-info__name">{{ project_title }}</span>
            {% endif %}

            <!-- Version -->
            {% if package.version %}
            <span class="project-info__version"> - v{{ package.version }}</span>{% endif %}

            <!-- License -->
            {% if package.license %}
            <span class="project-info__license">, under {% if package.license.type %} {% if package.license.url %}
                <a href="{{ package.license.url }}">{{ package.license.type }}</a>
                {% else %} {{ package.license.type }} {% endif %} {% else %} {{ package.license }} {% endif %}
            </span>
            {% endif %}
        </div>
        {% endif %} {% if display.watermark %}
        <a class="footer__watermark" href="http://sassdoc.com">
            <img src="assets/images/logo_light_inline.svg" alt="SassDoc Logo" />
        </a>
        {% endif %}
    </div>
</footer>
{% endif %} #}

{% if project_title or display.watermark %}
    <hr class="uk-margin-small-bottom" />
    <footer class="tm-main" role="contentinfo">
        <div class="uk-container uk-container-small">
            <div class="uk-margin-top uk-margin-bottom">
                <div class="uk-child-width-auto@m uk-flex-middle uk-flex-between" uk-grid>
                    <div>
                        <div class="uk-text-left@m uk-text-center">
                            <div class="credits">
                                <span class="powered-by">Powered by&nbsp;</span>
                                <a href="http://sassdoc.com/" target="_blank" class="uk-logo">
                                    SassDoc
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="uk-text-right@m uk-text-center">
                            {% include "navbar.links.html.swig" %}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
{% endif %}

