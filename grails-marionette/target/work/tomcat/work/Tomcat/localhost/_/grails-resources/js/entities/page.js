App.module('Entities', function(Entities, App, Backbone, Marionette, $, _, Handlebars) {

    Entities.Page = Backbone.Model.extend({});
    Entities.PageCollection = Backbone.Collection.extend({
        model: Entities.Page,
        comparator: "itemorder"
    });

    var pages;

    var initializePages = function() {
        pages = new Entities.PageCollection([
            {
                id: 1, itemorder: 1, title: 'Home'
            },
            {
                id: 2, itemorder: 2, title: 'About'
            },
            {
                id: 3, itemorder: 3, title: 'Portfolio'
            },
            {
                id: 4, itemorder: 4, title: 'Pricing'
            },
            {
                id: 5, itemorder: 5, title: 'Contact'
            }
        ]);
    };

    var API = {
        getPagesEntities: function() {
            if(pages === undefined) {
                initializePages();
            }
            return pages;
        }
    };

    App.reqres.setHandler("pages:entities", function(){
        return API.getPagesEntities();
    });

});


