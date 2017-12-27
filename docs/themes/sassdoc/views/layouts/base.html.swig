<!doctype html>

{% set project_title = "SassDoc" %}

{% if package.name %}
  {% set project_title = (package.name|capitalize) %}
{% endif %}

{% if package.title %}
  {% set project_title = package.title %}
{% endif %}

<html lang="en">
<head>
    {# Include head content #}
    {% include "../includes/partials/head.html.swig" with project_title %}
</head>
    <body>
        {# Main container #}
        <main class="main uk-offcanvas-content" role="main">
            {# Header #}
            {% block header %}{% endblock %}

            {# Sidebar #}
            <aside class="tm-sidebar-left uk-visible@m" role="nav">
                {% block sidebar %}{% endblock %}
            </aside>

            {# Include top navbar #}
            {% include "../includes/partials/header.html.swig" with project_title %}

            {# Include description #}
            {% include "../includes/partials/description.html.swig" %}

            {% block content %}{% endblock %}

            {# Include footer #}
            {% include "../includes/partials/footer.html.swig" with project_title %}
        </main>

        {# Include scripts #}
        {% include "../includes/partials/scripts.html.swig" %}
    </body>
</html>
