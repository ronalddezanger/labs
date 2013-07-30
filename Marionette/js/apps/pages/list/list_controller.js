App.module('PagesApp.List', function(List, App, Backbone, Marionette, $, _, Handlebars) {
    List.Controller = {
        listPages: function() {
            var pages = App.request("pages:entities");

            var pagesListView = new List.Pages({
                collection: pages
            });

            pagesListView.on("itemview:page:delete", function(childview, model) {
                pages.remove(model);
            });

            pagesListView.on("itemview:page:show", function(childview, model) {
                App.PagesApp.Show.Controller.showPage(model);
            });

            App.mainRegion.show(pagesListView);
        }
    };
});