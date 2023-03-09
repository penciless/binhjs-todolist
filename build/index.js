
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

const APP_COMPONENTS = 'https://cdn.jsdelivr.net/gh/penciless/binhjs-todolist/build/components';

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