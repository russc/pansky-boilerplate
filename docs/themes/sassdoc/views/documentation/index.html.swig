{% extends '../layouts/base.html.swig' %}

{% block content %}
    {# No item documented #}
    {% if data.length == 0 %}
        <section class="tm-main uk-section uk-section-default">
            <div class="uk-container uk-container-small uk-position-relative">
                <h2 class="main__heading">Seems like nothing has been documented yet!</h2>
            </div>
        </section>

    {# Some items documented #}
    {% else %}

        {# Loop over the groups #}
        {% for group_name, group in data.byGroupAndType %}
            <section class="tm-main uk-section uk-section-default">
                <div class="uk-container uk-container-small uk-position-relative">
                    <h1 class="main__heading" id="{{ group_name }}" uk-sticky="bottom: true">
                        <div class="container">
                            {{ groups[group_name] }}
                        </div>
                    </h1>

                    {# Loop over the types #}
                    {% for type, items in group %}

                        {# If items to be displayed in type #}
                        {% if items.length > 0 %}
                            <section class="main__sub-section" id="{{ group_name }}-{{ type }}">
                                {# <h2 class="main__heading--secondary">
                                    <div class="container">
                                    {{ (type + 's') }}
                                    </div>
                                </h2> #}

                                {# Loop over the items #}
                                {% for item in items %}
                                    {% include "../includes/partials/item.html.swig" with context %}
                                {% endfor %}
                            </section>
                        {% endif %}
                    {% endfor %}
                </div>
             </section>
        {% endfor %}

    {% endif %}
{% endblock %}

{# Include sidebar #}
{% block sidebar %}
    {% include "../includes/partials/sidebar.html.swig" %}
{% endblock %}
