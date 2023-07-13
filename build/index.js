
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


// Binh.ScriptLoader.pattern('/', function(source_url, component_names, component_name) {

//     return '/binh/' + component_name;
// });
