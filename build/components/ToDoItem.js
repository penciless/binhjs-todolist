Binh.component('ToDoItem', function() {
var { div, span } = Binh.elements;
var props = arguments[0];

this.style('external', '/styles/todo.css');

this.style('internal', function(css) {

    css('.btn-remove', [
        'color: red;',
        'margin-left: 10px'
    ]);

});

var todoitem = div({ style: 'margin: 3px;' });

var remove_button = span({ class: 'btn-remove' })('X');

remove_button.on('click', function() {
    todoitem.does('remove', props.id);
});

todoitem(span(props.text), span('-------'), remove_button);

// return todoitem.style('http://binh.css');

// todoitem.style(this, 'external');

// return this.applyStyle(todoitem);
return this.applyStyle(todoitem, 'external');
// return this.style.apply(todoitem, 'external shet');
// return this.useStyle(todoitem, 'external');
// return this.styleUse(todoitem, 'external');
// return this.styleApply(todoitem, 'external');

// return todoitem;
});