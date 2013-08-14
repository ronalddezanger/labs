App.module('PagesApp.List', function(List, App, Backbone, Marionette, $, _, Handlebars) {
    List.Controller = {
        listPages: function(criterion) {
            var loadingView = new App.PagesApp.Common.Views.Loading();
            App.mainRegion.show(loadingView);
            
            var fetchingPages = App.request("page:entities");

            pagesListLayout = new List.Layout();
            pagesListPanel = new List.Panel();

            $.when(fetchingPages).done(function(pages) {
                var filteredPages = App.Entities.FilteredCollection({
                    collection: pages,
                    filterFunction: function(filterCriterion) {
                        var criterion = filterCriterion.toLowerCase();
                        return function(page) {
                            if(page.get('title').toLowerCase().indexOf(criterion) !== -1) {
                                return page;
                            } else {
                                return false;
                            }
                        };
                    }
                });

                var pagesListView = new List.Pages({
                    collection: filteredPages
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
                            view.trigger("modal:close");
                            var newPagesView = pagesListView.children.findByModel(newPage);
                            if(newPagesView) {
                                newPagesView.flash("success");
                            }
                        } else {
                            view.triggerMethod("form:data:invalid", newPage.validationError);
                        }
                    });
                    App.modalRegion.show(view);
                });

                pagesListPanel.on("page:filter", function (filterCriterion) {
                    filteredPages.filter(filterCriterion);
                    App.trigger("page:filter", filterCriterion);
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
                            view.trigger("modal:close");
                            childview.flash("success");
                        }
                        else {
                            view.triggerMethod("form:data:invalid", model.validationError)
                        }
                    });
                    App.modalRegion.show(view);
                });

                pagesListView.on("itemview:page:delete", function(childview, model) {
                    var confirmView = new App.PagesApp.Common.Views.Confirm();
                    App.modalRegion.show(confirmView);
                    confirmView.on("page:destroy", function() {
                        this.trigger("modal:close");
                        model.destroy();
                    });
                });

                App.mainRegion.show(pagesListLayout);
            });
        }
    };
});