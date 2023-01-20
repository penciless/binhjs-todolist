Binh.component('PageContent', function() {
var { Router } = Binh;
var { div, nav, ul, li, a } = Binh.elements;

var PageContent = div({ id: 'page-content' });

var trans = this.el('trans');

// this.fetch('todos');
// this.subcribe('todos');
// this.sync('todos');

PageContent(
    new Router({
        '': div('default work!'),
        '/abc': div('abc work!'),
        '/haha': trans('haha work!')
    })
)
(
    function (thisEl) {
        setTimeout(function() {
            console.log('>>> Page Content:', thisEl);
        }, 1000);
    }
);

return PageContent;

});