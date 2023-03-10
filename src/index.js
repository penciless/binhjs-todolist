
// Binh.settings.url_comp = '/comp/';
Binh.settings.url_comp = '/components/';
Binh.settings.url_serv = '/services/';

Binh.settings.buildComponentURL = function(script_name, resolve) {
    return Binh.settings.url_comp + script_name + '.js';
};

Binh.settings.buildServiceURL = function(script_name, resolve) {
    return Binh.settings.url_serv + script_name + '.js';
};

Binh.settings.loadComponentRequirements = function() {
    // TODO
};

Binh.settings.saveComponentRequirements = function() {
    // TODO
};

Binh.ScriptLoader.pattern('https://cdn.jsdelivr.net/', function(source_url, component_names) {
    var parts = [],
        path = source_url.split('https://cdn.jsdelivr.net/')[1];

    component_names.forEach(function(component_name) {
        parts.push(path + '/' + component_name + '.js');
    });

    return 'https://cdn.jsdelivr.net/combine/' + parts.join(',');
});

const APP_COMPONENTS = '/components';
// const APP_COMPONENTS = 'https://cdn.jsdelivr.net/gh/penciless/binhjs-todolist/build/components';
// const APP_COMPONENTS = 'https://binhjs-todolist.pages.dev/components';

const APP_SERVICES = '/services';
// const APP_SERVICES = 'https://cdn.jsdelivr.net/gh/penciless/binhjs-todolist/build/services';
// const APP_SERVICES = 'https://binhjs-todolist.pages.dev/services';

Binh({
    '':         [APP_COMPONENTS, 'AppMainLayout'],
    '/todos':   [APP_COMPONENTS, 'AppToDos']
});

// Binh({
//     '':         Binh.requires('/components/', 'AppMainLayout'),
//     '/todos':   Binh.requires('/components/', 'AppToDos')
// });



// Binh({
//     '':         '/component/AppMainLayout',
//     '/todos':   '/component/AppToDos'
// });