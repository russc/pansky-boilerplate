{# Placeholders #}
{% if item.context.type == "placeholder" %}
    <div class="item__code-wrapper" data-type="placeholder">
        <a href="#{{ item.context.name }}" uk-toggle>
            <pre class="item__code item__code--togglable language-scss" data-example="{{ item.context.name }} { ... }"><code>%{{ item.context.name }} { ... }</code></pre>
        </a>

        <article id="{{ item.context.name }}" uk-modal>
            <div class="uk-modal-dialog">
                <button class="uk-modal-close-default uk-light" type="button" uk-close></button>
                <header class="uk-modal-header">
                    <h2 class="uk-modal-title uk-light">%{{ item.context.name }}</h2>
                </header>
                <div class="uk-modal-body" uk-overflow-auto>
                    <pre class="language-scss"><code>
%{{ item.context.name }} {
  {{ item.context.value }}
}</code>
                    </pre>
                </div>
                <footer class="uk-modal-footer uk-text-right">
                    <h5 class="uk-margin-remove uk-light">{{ item.file.path }}</h5>
                </footer>
            </div>
        </article>

        {% if basePath %}
            <a href="{{ basePath }}/{{ item.file.path }}#L{{ item.context.line.start }}-L{{ item.context.line.end }}" class="item__source-link" target="_blank">View source</a>
        {% endif %}
    </div>

{# Variables #}
{% elseif item.context.type == "variable" %}
    <div class="item__code-wrapper" data-type="variable">
        <pre class="item__code  language-scss"><code>${{ item.context.name }}: {{ item.context.value }}{% if item.context.scope !== "private" %} !{{ item.context.scope }}{% endif %};</code></pre>

        {% if (item.type|lower).indexOf('color') > -1 and item.resolvedValue|is_color == true %}
            <span class="color-preview--block" style="background: {{ item.resolvedValue }};"></span>
        {% endif %}

        {% if basePath %}
            <a href="{{ basePath }}/{{ item.file.path }}#L{{ item.context.line.start }}-L{{ item.context.line.end }}" class="item__source-link" target="_blank">View source</a>
        {% endif %}
    </div>

{# Plain CSS #}
{% elseif item.context.type == "css" %}
    <div class="item__code-wrapper" data-type="plain-css">
        <a href="#{{ item.context.name }}" uk-toggle>
            <pre class="item__code item__code--togglable language-scss" data-example=".{{ item.context.name }} { ... }"><code>.{{ item.context.name }} { ... }</code></pre>
        </a>

        <article id="{{ item.context.name }}" uk-modal>
            <div class="uk-modal-dialog">
                <button class="uk-modal-close-default uk-light" type="button" uk-close></button>
                <header class="uk-modal-header">
                    <h2 class="uk-modal-title uk-light uk-text-lowercase">.{{ item.context.name }}</h2>
                </header>
                <div class="uk-modal-body" uk-overflow-auto>
                    <pre class="language-scss">
<code>.{{ item.context.name }} {
  {{ item.context.value }}
}</code></pre>
                </div>
                <footer class="uk-modal-footer uk-text-right">
                    <h5 class="uk-margin-remove uk-light">{{ item.file.path }}</h5>
                </footer>
            </div>
        </article>
    </div>

{# Functions and mixins #}
{% else %}

{% set parameters_string = '' %}
{% for parameter in item.parameter %}
    {% set value = '$' + parameter.name %}

    {% if parameter.default %}
        {% set value = value + ': ' + parameter.default %}
    {% endif %}

    {% if parameter.type|lower === "arglist" %}
        {% set value = value + '...' %}
    {% endif %}

    {% if loop.first %}
        {% set parameters_string = value %}
    {% else %}
        {% set parameters_string = parameters_string + ', ' + value %}
    {% endif %}
{% endfor %}

    <div class="item__code-wrapper" data-type="parameter">
        <a class="modal-link" href="#{{ item.context.name }}" uk-toggle>
            <pre class="item__code item__code--togglable language-scss" data-example="@{{ item.context.type }} {{ item.context.name }}({{ parameters_string }}) { {{ item.context.code }} }">
<code>@{{ item.context.type }} {{ item.context.name }}({{ parameters_string }}) { ... }</code></pre>
        </a>

        <article id="{{ item.context.name }}" uk-modal>
            <div class="uk-modal-dialog">
                <button class="uk-modal-close-default uk-light" type="button" uk-close></button>
                <header class="uk-modal-header">
                    <h2 class="uk-modal-title uk-light">{{ item.context.name }}</h2>
                </header>
                <div class="uk-modal-body" uk-overflow-auto>
                    <pre class="language-scss">
<code>@{{ item.context.type }} {{ item.context.name }}({{ parameters_string }}) { {{ item.context.code }} }</code></pre>
                </div>
                <footer class="uk-modal-footer uk-text-right">
                    <h5 class="uk-margin-remove uk-light">{{ item.file.path }}</h5>
                </footer>
            </div>
        </article>

        {% if basePath %}
            <a href="{{ basePath }}/{{ item.file.path }}#L{{ item.context.line.start }}-L{{ item.context.line.end }}" class="item__source-link" target="_blank">View source</a>
        {% endif %}
    </div>

{% endif %}
