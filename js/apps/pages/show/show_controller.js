App.module('PagesApp.Show', function(Show, App, Backbone, Marionette, $, _) {
    Show.Controller = {
        showPage: function(model) {
            var pageView = new Show.Page({
                model: model
            });
            App.mainRegion.show(pageView);
        }
    };
});
