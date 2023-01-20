var { div, span } = Binh.elements;
var props = arguments[0];

this.style('external', '/css/todo.css');

// this.style('internal', function(css) {

//     css('.btn-remove', [
//         'color: red;',
//         'margin-left: 10px'
//     ]);

// });

var todoitem = div({ style: 'margin: 3px;' });

var remove_button = span({ class: 'btn-remove' })('X');

remove_button.on('click', function() {
    todoitem.does('remove', props.id);
});

todoitem(span(props.text), span('-------'), remove_button);

// return todoitem.style('http://binh.css');

todoitem.style(this, 'external');

return todoitem;