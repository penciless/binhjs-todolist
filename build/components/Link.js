Binh.component('Link', function() {

var { a } = Binh.elements;

var text = arguments[0];
var path = arguments[1];


var link = a(text).on('click', function() {
    Binh.Router.navigate(path);
});

return link;

});