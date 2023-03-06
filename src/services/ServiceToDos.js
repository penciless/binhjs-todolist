var { http, state } = Binh;

var todos = state.as('todos');

todos.schema(function(resolve) {
    new http(api('get'))
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
    new http(api('add'))
        .body({ text: value })
        .post(handleResponse);
});

this.define('remove', function(id) {
    new http(api('remove'))
        .body({ id: id })
        .post(handleResponse);
});

function api(relative_url) {
    return 'https://todolist-of-binh.fly.dev/todos/' + relative_url;
}
