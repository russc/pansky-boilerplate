{% if item.since.length > 1 %}
    <h3 class="item__sub-heading">Changelog</h3>
    <table class="uk-table uk-table-divider uk-table-hover uk-table-small uk-table-middle uk-table-responsive uk-margin-remove-top" data-class="item__changelog">
        <thead>
            <tr>
                <th scope="col" class="uk-table-shrink">Ver.</th>
                <th scope="col">Changes</th>
            </tr>
        </thead>
        <tbody>
            {% for since in item.since %}
                <tr data-class="item__changelog">
                    <td class="uk-text-meta" scope="row" data-label="version">
                        {{ since.version }}
                    </td>
                    {% if since.description %}
                        <td class="uk-text-small" scope="row" data-label="changes">
                            {{ since.description|safe }}
                        </td>
                    {% else %}
                        <td class="uk-text-small" scope="row" data-label="no description"></td>
                    {% endif %}
                </tr>
            {% endfor %}
        </tbody>
    </table>
{% endif %}
