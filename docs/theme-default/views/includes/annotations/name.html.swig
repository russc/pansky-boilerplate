<header class="uk-flex uk-flex-row uk-flex-wrap uk-flex-middle uk-flex-between uk-width-1-1@m uk-margin-bottom">
    <h1 class="uk-margin-remove">{{ item.context.name }}</h1>

    <div class="uk-flex uk-flex-row uk-flex-wrap uk-flex-middle uk-flex-end" data-class="item__details">
        {# <a class="uk-text-meta uk-margin-small-right" data-class="item__link" uk-icon="icon: link; ratio: 1.15;" title="Copy Permalink" href="#" data-clipboard-target="#{{ item.context.type }}-{{ item.context.name }}" uk-tooltip></a> #}

        {% if item.since.length == 1 %}
            <span class="uk-text-meta" data-class="item__since">Since {{ item.since[0].version }}{% if item.since[0].description %} &mdash; {{ item.since[0].description }}{% endif %}</span>
        {% endif %}

        {% if item.access != "public" %}
            <span class="uk-text-meta uk-margin-small-left" data-class="item__access">[{{ item.access }}]</span>
        {% endif %}

        {% if display.alias and item.aliased.length > 0 %}
            <span class="uk-text-meta uk-margin-small-left" data-class="item__aliased">
                (aliased as{% for alias in item.aliased %}
                <a href="#{{ item.context.type }}-{{ alias }}">
                    <code>{{ alias }}</code>
                </a>
                {% endfor %})
            </span>
        {% endif %}

        {% if item.alias %}
            <span class="uk-text-meta uk-margin-small-left" data-class="item__alias">
                (alias for <a href="#{{ item.context.type }}-{{ item.alias }}">
                    <code>{{ item.alias }}</code>
                </a>)
            </span>
        {% endif %}
    </div>

</header>
