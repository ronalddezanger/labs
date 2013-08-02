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

                pagesListView.on("itemview:page:show", function(childview, model) {
                    App.trigger("pages:show", model.get('id'));
                });

                pagesListView.on("itemview:page:edit", function(childview, model) {
                    var view = new App.PagesApp.Edit.Page({
                        model: model
                    });
                    view.on("show", function() {
                        this.$el.modal();
                    });
                    App.dialogRegion.show(view);
                });

                pagesListView.on("itemview:page:delete", function(childview, model) {
                    model.destroy();
                });

                App.mainRegion.show(pagesListView);
            });
        }
    };
});