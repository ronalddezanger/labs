App.module('AboutApp.Show', function(Show, App, Backbone, Marionette, $, _, Handlebars) {
    Show.Controller = {
        showAbout: function() {
            var view = new Show.About();
            App.mainRegion.show(view);
        }
    };
});