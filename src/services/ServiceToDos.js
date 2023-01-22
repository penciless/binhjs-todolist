var { http, state } = Binh;

var todos = state.as('todos');

todos.schema(function(resolve) {
    new http('http://localhost:1301/todos/get')
        .get(function(response) {
            resolve(parseResponse(response));
        });
});

function handleResponse(response) {
    todos.set(parseResponse(response));
}

function parseResponse(response) {
    var todoitems = [];

    Object.keys(response).forEach(function(key) {
        var each = response[key];
        todoitems.push({ id: key, text: each.text });
    });

    return todoitems;
}

this.define('add', function(value) {
    new http('http://localhost:1301/todos/add')
        .body({ text: value })
        .post(handleResponse);
});

this.define('remove', function(id) {
    new http('http://localhost:1301/todos/remove')
        .body({ id: id })
        .post(handleResponse);
});
