App.module('PagesApp', function(PagesApp, App, Backbone, Marionette, $, _) {
    PagesApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "pages": "listPages",
            "pages/:id": "showPage",
            "pages/:id/edit": "editPage"
        }
    });

    var API = {
        listPages: function() {
            PagesApp.List.Controller.listPages();
        },
        showPage: function(id) {
            PagesApp.Show.Controller.showPage(id);
        },
        editPage: function(id) {
            PagesApp.Edit.Controller.editPage(id);
        }
    };

    App.on("pages:list", function() {
        App.navigate("pages");
        API.listPages();
    });

    App.on("pages:show", function(id) {
        App.navigate("pages/"+id);
        API.showPage(id);
    });

    App.on("pages:edit", function(id) {
        App.navigate("pages/"+id+"/edit");
        API.editPage(id);
    });

    App.addInitializer(function() {
        new PagesApp.Router({ controller: API });
    });
});