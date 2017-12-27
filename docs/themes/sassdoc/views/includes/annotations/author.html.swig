{% if item.author.length > 0 %}
    <dl class="uk-description-list uk-text-small">
        <dt class="item__sub-heading">Author{% if item.author.length > 1 %}s{% endif %}</dt>
        {% for author in item.author %}
            <dd>{{ author|safe }}</dd>
        {% endfor %}
    </dl>
{% endif %}