<section>
    {# <h1 class="sidebar__title uk-background-secondary uk-light">
        {% if package.homepage %}
            <a href="{{ package.homepage }}" class="nav-icon-flex">
                <span uk-icon="icon: home;"></span>
                {{ project_title }}{% if package.version %} - v{{ package.version }}{% endif %}
            </a>
        {% else %}
            <a href="/" class="nav-icon-flex">
                <span uk-icon="icon: home;"></span>
                {{ project_title }}{% if package.version %} - {{ package.version }}{% endif %}
            </a>
        {% endif %}
    </h1>
    <div class="uk-margin-remove-top uk-margin-bottom"></div>
    <ul class="uk-nav uk-nav-default tm-nav">
        <li class="uk-nav-header nav-icon-flex">
            <span uk-icon="icon: code;"></span>
            Coding Standards
        </li>
        <li><a href="#">Sass</a></li>
        <li><a href="#">Comments</a></li>
        <li class="uk-nav-divider"></li>
        <li><a href="#">JavaScript</a></li>
        <li><a href="#">Comments</a></li>
        <li class="uk-nav-divider"></li>
        <li><a href="#">Development</a></li>
        <li class="uk-nav-divider"></li>
    </ul>
</section> #}

<ul class="uk-nav uk-nav-default tm-nav uk-margin-top" uk-scrollspy-nav="closest: a; scroll: true; offset: 200;">
    {# No item documented #}
    {% if data.length == 0 %}
        <span class="uk-disabled">No documented item.</span>

        {# Some items documented #}
    {% else %}
        <li class="uk-nav-header nav-icon-flex uk-margin-small-bottom">
            <span uk-icon="icon: database;"></span>
            Sass Documentation
        </li>

        {# Loop over the groups #}
        {% for group_name, group in data.byGroupAndType %}
            <li class="uk-parent" data-slug="{{ group_name }}">
                <span class="parent">{{ groups[group_name] }}</span>
            

            {# Loop over the types #}
            {% for type, items in group %}
                {# {% if loop.first %}<nav>{% endif %} #}

                {# If items to be displayed in type #}
                {% if items.length > 0 %}
                    {# <p class="sidebar__item  sidebar__item--sub-heading" data-slug="{{ group_name + '-' + type }}">
                        <a href="#{{ group_name }}-{{ type }}" uk-scroll>{{ (type + 's') }}</a>
                    </p> #}

                    {# Loop over the items #}
                    {% for item in items %}
                        {% if loop.first %}<ul class="uk-nav-sub">{% endif %}
                            <li data-group="{{ group_name }}" 
                                data-name="{{ item.context.name }}" 
                                data-type="{{ item.context.type }}">
                                <a href="#{{ group_name }}-{{ item.context.type }}-{{ item.context.name }}" uk-scroll>
                                    {{ item.context.name }}

                                    {% if item.access[0] == "private" %}
                                        <span class="sidebar__annotation  sidebar__annotation--private">private</span>
                                    {% endif %}

                                    {% if item.alias != false %}
                                        <span class="sidebar__annotation  sidebar__annotation--alias">alias</span>
                                    {% endif %}
                                </a>
                            </li>
                        {% if loop.last %}</ul>{% endif %}
                    {% endfor %}
                {% endif %}
                {# {% if loop.last %}</nav>{% endif %} #}
            {% endfor %}

            </li>
        {% endfor %}
    {% endif %}
</ul>