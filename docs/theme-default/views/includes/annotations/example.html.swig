{% if item.example.length > 0 %}
    <h3 class="item__sub-heading">Example</h3>
    {% for example in item.example %}
        <div class="item__example example">
            {% if example.description %}
                <div class="item-description-wrapper uk-overflow-auto">
                    <div class="item-description token comment" data-class="example__description">
                        // {{ example.description|safe }}
                    </div>
                    <div class="token comment" data-class="example__description">
                        // ========================================================================
                    </div>
                </div>
                <pre class="example__code language-{{ example.type }} example-with-description"><code>{{ example.code|escape|safe }}</code></pre>
            {% else %}
                <pre class="example__code language-{{ example.type }}"><code>{{ example.code|escape|safe }}</code></pre>
            {% endif %}
        </div>
    {% endfor %}
{% endif %}
