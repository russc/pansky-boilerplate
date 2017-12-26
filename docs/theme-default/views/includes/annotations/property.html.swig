{# {% if item.property.length > 0 %}

<h3 class="item__sub-heading">Map structure</h3>

<table class="item__parameters">
  <thead>
    <tr>
      <th scope="col"><span class="uk-hidden">{{ item.type }} key </span>Name</th>
      <th scope="col"><span class="uk-hidden">{{ item.type }} key </span>Description</th>
      <th scope="col"><span class="uk-hidden">{{ item.type }} key </span>Type</th>
      <th scope="col"><span class="uk-hidden">{{ item.type }} key </span>Value</th>
    </tr>
  </thead>

  <tbody>
    {% for prop in item.property %}
      <tr class="item__parameter">
        <th scope="row" data-label="name"><code>{{ prop.name }}</code></th>
        <td data-label="desc">{{ prop.description | default('&mdash;<span class="uk-hidden"> none</span>') | safe }}</td>
        <td data-label="type">
          <code>{{ prop.type | display_as_type }}</code>
        </td>
        <td data-label="default">
        {% if not prop.default %}
          &mdash;<span class="uk-hidden"> none</span>
        {% else %}
          {% if (prop.type|lower).indexOf('color') > -1 and prop.resolvedValue|is_color == true %}
            <code class="color-preview--inline" style="background: {{ prop.resolvedValue }}; color: {{ prop.resolvedValue | yiq }};">{{ prop.default }}</code>
          {% else %}
            <code>{{ prop.default }}</code>
          {% endif %}
        {% endif %}
        </td>
      </tr>
    {% endfor %}
  </tbody>
</table>

{% endif %} #}

{% if item.property.length > 0 %}
    <h3 class="item__sub-heading">Map structure</h3>
    <table class="uk-table uk-table-divider uk-table-hover uk-table-small uk-table-middle uk-table-responsive uk-margin-remove-top" data-class="item__parameters">
        <thead>
            <tr>
                <th scope="col" class="uk-table-shrink">Name</th>
                <th scope="col" class="uk-table-expand">Description</th>
                <th scope="col" class="uk-table-shrink">Type</th>
                <th scope="col" class="uk-width-auto">Value</th>
            </tr>
        </thead>
        <tbody>
            {% for prop in item.property %}
                <tr data-class="item__parameter">
                    <td class="uk-text-meta" scope="row" data-label="name">{{ prop.name }}</td>
                    {% if prop.description %}
                        <td class="uk-text-small uk-table-expand" scope="row" data-label="description">
                            {{ prop.description | default('&mdash;<span class="uk-hidden"> none</span>') | safe }}
                        </td>
                    {% else %}
                        <td class="uk-text-small" scope="row" data-label="no description"></td>
                    {% endif %}
                    <td class="uk-text-meta" scope="row" data-label="type">{{ prop.type | display_as_type }}</td>
                    <td class="uk-text-meta" scope="row" data-label="value">{{ prop.default }}</td>
                </tr>
            {% endfor %}
        </tbody>
    </table>
{% endif %}
