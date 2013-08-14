App.module('Entities', function (Entities, App, Backbone, Marionette, $, _){
    Entities.Header = Backbone.Model.extend({
        initialize: function() {
            var selectable = new Backbone.Picky.Selectable(this);
            _.extend(this, selectable);
        }
    });

    Entities.HeaderCollection = Backbone.Collection.extend({
        model: Entities.Header,
        initialize: function() {
            var singleSelect = new Backbone.Picky.SingleSelect(this);
            _.extend(this, singleSelect);
        }
    });

    var initializeHeaders = function() {
        Entities.headers = new Entities.HeaderCollection([
            { name: "Pages", url: "pages"},
            { name: "About", url: "about"}
        ]);
    }

    var API = {
        getHeaders: function() {
            if(initializeHeaders === undefined) {
                initializeHeaders();
            }
            return Entities.headers;
        }
    };

    App.reqres.setHandler("header:entities", function() {
        return API.getHeaders();
    })
});