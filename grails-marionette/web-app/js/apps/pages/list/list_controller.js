App.module('PagesApp.List', function(List, App, Backbone, Marionette, $, _, Handlebars) {
    List.Controller = {
        listPages: function() {
            var loadingView = new App.PagesApp.Common.Views.Loading();
            App.mainRegion.show(loadingView);
            
            var fetchingPages = App.request("page:entities");

            pagesListLayout = new List.Layout();
            pagesListPanel = new List.Panel();

            $.when(fetchingPages).done(function(pages) {
                var pagesListView = new List.Pages({
                    collection: pages
                });

                pagesListLayout.on("show", function() {
                    pagesListLayout.panelRegion.show(pagesListPanel);
                    pagesListLayout.pagesRegion.show(pagesListView);
                });

                pagesListPanel.on("page:new", function() {
                    var newPage = new App.Entities.Page();
                    var view = new App.PagesApp.New.Page({
                        model: newPage
                    });
                    view.on("form:submit", function(data) {
                        if(newPage.save(data)) {
                            pages.add(newPage);
                            view.trigger("dialog:close");
                            pagesListView.children.findByModel(newPage).flash("success");
                        } else {
                            view.triggerMethod("form:data:invalid", newPage.validationError);
                        }
                    });
                    App.modalRegion.show(view);
                });

                pagesListView.on("itemview:page:show", function(childview, model) {
                    App.trigger("pages:show", model.get('id'));
                });

                pagesListView.on("itemview:page:edit", function(childview, model) {
                    var view = new App.PagesApp.Edit.Page({
                        model: model
                    });
                    view.on("form:submit", function (data) {
                        if(model.save(data)) {
                            childview.render();
                            view.trigger("dialog:close");
                            childview.flash("success");
                        }
                        else {
                            view.triggerMethod("form:data:invalid", model.validationError)
                        }
                    });
                    App.modalRegion.show(view);
                });

                pagesListView.on("itemview:page:delete", function(childview, model) {
                    model.destroy();
                });

                App.mainRegion.show(pagesListLayout);
            });
        }
    };
});