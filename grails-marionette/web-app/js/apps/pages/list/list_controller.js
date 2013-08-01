App.module('PagesApp.List', function(List, App, Backbone, Marionette, $, _, Handlebars) {
    List.Controller = {
        listPages: function() {
            var loadingView = new App.Common.Views.Loading();
            App.mainRegion.show(loadingView);
            
            var fetchingPages = App.request("page:entities");

            $.when(fetchingPages).done(function(pages) {
                var pagesListView = new List.Pages({
                    collection: pages
                });

                pagesListView.on("itemview:page:delete", function(childview, model) {
                    model.destroy();
                });

                pagesListView.on("itemview:page:show", function(childview, model) {
                    App.trigger("pages:show", model.get('id'));
                });

                App.mainRegion.show(pagesListView);
            });
        }
    };
});