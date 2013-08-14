
App.module('AboutApp.Show', function(Show, App, Backbone, Marionette, $, _, Handlebars) {
    Show.Controller = {
        showAbout: function() {
            console.log("show about");
            var view = new Show.About();
            App.mainRegion.show(view);
        }
    }
});