App.module('PagesApp.Edit', function(Edit, App, Backbone, Marionette, $, _) {
    Edit.Controller = {
        editPage: function(id) {
            var loadingView = new App.PagesApp.Common.Views.Loading();
            App.mainRegion.show(loadingView);

            var fetchingPage = App.request("page:entity", id);
            $.when(fetchingPage).done(function (page) {
                var view;
                if(page !== undefined) {
                    view = new Edit.Page({
                        model: page,
                        generateTitle: true
                    });

                    view.on("form:submit", function (data) {
                        if(page.save(data)) {
                            App.trigger("page:show", page.get('id'));
                        } else {
                            view.triggerMethod("form:data:invalid", page.validationError);
                        }
                    })
                } else {
                    view = new App.PagesApp.Show.MissingPage();
                }
                App.mainRegion.show(view);
            });
        }
    }
});