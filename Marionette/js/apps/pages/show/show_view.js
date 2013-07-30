App.module('PagesApp.Show', function(Show, App, Backbone, Marionette, $, _) {
    Show.Page = Marionette.ItemView.extend({
        template: "#page-view"
    });
});