{% if item.link.length > 0 %}
    <dl class="uk-description-list uk-text-small">
        <dt class="item__sub-heading">Link{% if item.link.length > 1 %}s{% endif %}</dt>
        {% for link in item.link %}
            <dd>
                <a href="{{ link.url }}">
                    {% if link.caption %}
                        {{ link.caption }}
                    {% else %}
                        {{ link.url }}
                    {% endif %}
                </a>
            </dd>
        {% endfor %}
    </dl>
{% endif %}