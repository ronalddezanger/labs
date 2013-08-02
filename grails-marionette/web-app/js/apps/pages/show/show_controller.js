App.module('PagesApp.Show', function(Show, App, Backbone, Marionette, $, _) {
    Show.Controller = {
        showPage: function(id) {
            var loadingView = new App.Common.Views.Loading({
                message: "loading for showing page"
            });
            App.mainRegion.show(loadingView);

			var fetchingPage = App.request("page:entity", id);
            $.when(fetchingPage).done(function(page) {
                var pageView;
                if (page !== undefined) {
                    pageView = new Show.Page({
                        model: page
                    });

                    pageView.on("page:edit", function(page) {
                        App.trigger("page:edit", page.get('id'));
                    });
                } else {
                    pageView = new Show.MissingPage();
                }

                App.mainRegion.show(pageView);
            });
        }
    };
});
