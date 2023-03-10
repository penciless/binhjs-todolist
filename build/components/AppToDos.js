Binh.component('AppToDos', function() {
// this.component('PageHeader', 'ToDoItem', 'InputText');

// this.service('ServiceToDos');

var { PageHeader, ToDoItem, InputText } = this.component(APP_COMPONENTS, ['PageHeader', 'ToDoItem', 'InputText']);
var { ServiceToDos } = this.service(APP_SERVICES, ['ServiceToDos']);
// var { ServiceToDos } = Binh.services;
var { div, span } = Binh.elements;

var inputbox = InputText().when('submit', ServiceToDos.does('add'));

var todolist = div({ class: 'todo-items' });

todolist.subscribe('todos', function(data) {
    todolist.empty();
    data.forEach(function(datum) {
        todolist(
            ToDoItem(datum).when('remove', ServiceToDos.does('remove'))
        );
    });
});

var maindiv = div({ class: 'container' });
var left_section = div({ id: 'left-section' })('left section')(PageHeader);
var right_section = div({ id: 'right-section' })('right section');

maindiv(
    left_section,
    right_section(
        div('To-Do List'),
        inputbox,
        todolist
    )
);

return maindiv;
});