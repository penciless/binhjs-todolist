
var { PageHeader, PageContent } = this.component(APP_COMPONENTS, ['PageHeader', 'PageContent']);
var { div } = Binh.elements;


var MainLayout = div({ id: 'app-main-layout' });

MainLayout
([
    PageHeader,
    PageContent
])
(
    function (thisEl) {
        setTimeout(function() {
            console.log('>>> App Main Layout:', thisEl);
        }, 1000);
    }
);

return MainLayout;
