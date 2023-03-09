Binh.component('PageHeader', function() {

var { Router } = Binh;
var { div, nav, ul, li, a } = Binh.elements;
// var { Link } = this.component('Link');
var { Link } = this.component('/components/', ['Link']);

var PageHeader = div({ id: 'page-header' });

PageHeader(
    div({ class: 'container' })(
        div({ class: 'row' })(
            nav({ class: 'navbar navbar-default' })(
                div({ class: 'container-fluid' })([
                    div({ class: 'navbar-header' })(
                        a({ class: 'navbar-brand', href: '#' })(
                            'Website Name'
                        )
                    ),
                    ul({ class: 'nav navbar-nav' })(
                        li({ class: 'active' })(
                            Link('Home', '/')
                        ),
                        li(
                            Link('Abc', '/abc')
                        ),
                        li(
                            Link('Haha', '/haha')
                        ),
                        li(
                            a('Page 3')
                        )
                    )
                ])
            )
        )
    ),
    function (thisEl) {
        setTimeout(function() {
            console.log('>>> Page Header:', thisEl);
        }, 1000);
    }
);

return PageHeader;
});