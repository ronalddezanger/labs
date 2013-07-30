App.module('PagesApp', function(PagesApp, App, Backbone, Marionette, $, _) {
    PagesApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "pages": "listPages",
            "pages/:id": "showPage"
        }
    });

    var API = {
        listPages: function() {
            PagesApp.List.Controller.listPages();
        },
        showPage: function(id) {
            PagesApp.Show.Controller.showPage();
        }
    };

    App.on("pages:list", function() {
        App.navigate("pages");
        API.listPages();
    });

    App.addInitializer(function() {
        new PagesApp.Router({ controller: API });
    });
});