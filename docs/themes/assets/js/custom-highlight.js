$(document).ready(function() {
    $('<style data-file="custom-highlight.js">'+ styles +'</style>').appendTo(document.head);

    $('span').each(function() {
        var self = $(this);
        if (self.html() == 'template')                  { self.addClass('typ'); }
        if (self.html() == 'require')                   { self.addClass('req'); }
        if (self.html() == 'this')                      { self.addClass('this'); }
        if ($.inArray(self.text(), struct) !== -1 )     { self.closest('span').addClass('jsConstructor'); }
        if ($.inArray(self.text(), jsVars) !== -1 )     { self.closest('span').addClass('var'); }
        if ($.inArray(self.text(), jqKeywords) !== -1 ) { self.closest('span').addClass('$'); }
        if ($.inArray(self.text(), jsKeywords) !== -1 ) { self.closest('span').addClass('js'); }
        if ($.inArray(self.text(), bools) !== -1 )      { self.closest('span').addClass('bool'); }
    });

    // forked from jsdoc file `linenumber.js`
    (function() {
        var source = document.getElementsByClassName('prettyprint source linenums');
        var i = 0;
        var lineNumber = 0;
        var lineId;
        var lines;
        var totalLines;
        var anchorHash;

        if (source && source[0]) {
            anchorHash = document.location.hash.substring(1);
            lines = source[0].getElementsByTagName('li');
            totalLines = lines.length;

            for (; i < totalLines; i++) {
                lineNumber++;
                lineId = 'line' + lineNumber;
                lines[i].id = lineId;
                if (lineId === anchorHash) {
                    lines[i].className += ' selected';
                }
            }
        }
    })();
});

var jqKeywords = [
    '"+ \s + "$',
    '$',
    'ScrollReveal',
    '\"\"$',
    'addClass',
    'addClass',
    'addTo',
    'atLeast',
    'attr',
    'children',
    'component',
    'css',
    'data',
    'each',
    'getQueryVariable',
    'hasClass',
    'hide',
    'html',
    'is',
    'keypress',
    'mouseenter',
    'offset',
    'on',
    'parents',
    'post',
    'prop',
    'removeAttr',
    'removeClass',
    'removeClass',
    'removeProp',
    'toggleClass',
    'val',
    'val',
];

var jsKeywords = [
    '!',
    '!=',
    '!==',
    '!===',
    '&&',
    '+',
    '+=',
    '+==',
    '+===',
    '-=',
    '-==',
    '-===',
    '==',
    '===',
    'animate',
    'blur',
    'charAt',
    'click',
    'closest',
    'find',
    'get',
    'indexOf',
    'preventDefault',
    'reload',
    'replace',
    'scrollTo',
    'scrollTop',
    'set',
    'setTimeout',
    'split',
    'stop',
    'substr',
    'substring',
    'test',
    'toLowerCase',
    'toString',
];

var bools   = ['true', 'false', 'null'];
var jsVars  = ['const', 'const ', 'let', 'let ', 'var', 'var '];
var struct  = ['Array', 'module ', 'exports '];

var styles = [
    '.prettyprint.linenums li * { white-space: pre; }',
    '.prettyprint, .prettyprint code { color: #abb2bf; background: #282c34; }',
    '.prettyprint .com { color: #7e8592; font-style: italic; }',
    '.prettyprint .var { color: #c678dd; }',
    '.prettyprint .kwd { color: #c678dd; }',
    '.prettyprint .this { color: #e6c07b; }',
    '.prettyprint .jsConstructor { color: #e6c07b; }',
    '.prettyprint .bool { color: #d19a66; }',
    '.prettyprint .li { color: #d19a66; }',
    '.prettyprint .str { color: #98c379; }',
    '.prettyprint .pun { color: #abb2bf; }',
    '.prettyprint .js { color: #56b6c2; }',
    '.prettyprint .req { color: #56b6c2; }',
    '.prettyprint .\$ { color: #61aeee; }',
    '.prettyprint .vue { color: #61aeee; }',
    '.prettyprint .pln { color: #e06c75; background: transparent; }',
    '.prettyprint .typ  { color: #e06c75; background: transparent; }',
    '.prettyprint.light { color: #333; font-family: Consolas, monaco, monospace; }',
    '.prettyprint.light .req { color: #0184bc; }',
    '.prettyprint.light .pun { color: #333; }',
    '.prettyprint.light .str { color: #50a14f; }',
];