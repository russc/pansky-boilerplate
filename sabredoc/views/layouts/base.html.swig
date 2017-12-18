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
        {# Sidebar #}
        <aside class="sidebar" role="nav">
            {% block sidebar %}
            {% endblock %}
        </aside>

        {# Main container #}
        <main class="main" role="main">
            {# Include top navbar #}
            {% include "../includes/partials/header.html.swig" with project_title %}

            {# Include description #}
            {% include "../includes/partials/description.html.swig" %}

            <article>
                {# Main content #}
                {% block content %}
                {% endblock %}
            </article>

            {# Include footer #}
            {% include "../includes/partials/footer.html.swig" with project_title %}
        </main>

        {# Include scripts #}
        {% include "../includes/partials/scripts.html.swig" %}
    </body>
</html>
