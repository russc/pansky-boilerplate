<h3 class="item__sub-heading">Parameters</h3>

{% if item.parameter.length > 0 %}

    <table class="uk-table uk-table-divider uk-table-hover uk-table-small uk-table-middle uk-table-responsive uk-margin-remove-top" data-class="item__parameters">
        <thead>
            <tr>
                <th scope="col"><span class="uk-hidden">{{ item.type }} parameter </span>Name</th>
                <th scope="col"><span class="uk-hidden">{{ item.type }} parameter </span>Description</th>
                <th scope="col"><span class="uk-hidden">{{ item.type }} parameter </span>Type</th>
                <th scope="col"><span class="uk-hidden">{{ item.type }} parameter </span>Default</th>
            </tr>
        </thead>
        <tbody>
            {% for parameter in item.parameter %}
                <tr data-class="item__parameter">
                    <td class="uk-text-small" scope="row" data-label="name">
                        <span>${{ parameter.name }}</span>
                    </td>
                    <td class="uk-text-meta" data-label="desc">{{ parameter.description|default('&mdash;<span class="uk-hidden"> none</span>')|safe }}</td>
                    <td class="uk-text-small" data-label="type">
                        <span>
                            {% if parameter.type == '*' %}
                                Any
                            {% else %}
                                {{ parameter.type | display_as_type }}
                            {% endif %}
                        </span>
                    </td>
                    <td class="uk-text-small" data-label="default">
                        {% if not parameter.default %}
                            &mdash;<span class="uk-hidden"> none</span>
                        {% else %}
                            {% if (parameter.type|lower).indexOf('color') > -1 and parameter.resolvedValue|is_color == true %}
                                <span class="color-preview--inline" style="background:{{ parameter.resolvedValue }}; color: {{ parameter.resolvedValue | yiq }}">{{ parameter.default }}</span>
                            {% else %}
                                <span>{{ parameter.default }}</span>
                            {% endif %}
                        {% endif %}
                    </td>
                </tr>
            {% endfor %}
        </tbody>
  </table>

{% else %}

    <div class="item__description">
        <p class="uk-margin-remove">None.</p>
    </div>

{% endif %}
