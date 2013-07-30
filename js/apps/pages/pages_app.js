App.module('PagesApp', function(PagesApp, App, Backbone, Marionette, $, _) {
    PagesApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "pages": "listPages"
        }
    });

    var API = {
        listPages: function() {
            console.log("triggered router");
        }
    };

    App.addInitializer(function() {
        new PagesApp.Router({ controller: API });
    });
});