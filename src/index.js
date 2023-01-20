
// Binh.settings.url_comp = '/comp/';
Binh.settings.url_comp = 'http://localhost:1302/components/';
Binh.settings.url_serv = 'http://localhost:1302/services/';

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
    '': 'AppMainLayout',
    '/todos': 'AppToDos'
});