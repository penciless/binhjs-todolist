
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

Binh({
    '':         ['/components/', 'AppMainLayout'],
    '/todos':   ['/components/', 'AppToDos']
});

// Binh({
//     '':         Binh.requires('/components/', 'AppMainLayout'),
//     '/todos':   Binh.requires('/components/', 'AppToDos')
// });



// Binh({
//     '':         '/component/AppMainLayout',
//     '/todos':   '/component/AppToDos'
// });