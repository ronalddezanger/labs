App.module('Entities', function(Entities, App, Backbone, Marionette, $, _, Handlebars) {

    Entities.Page = Backbone.Model.extend({
        urlRoot: "api/pages",

        validate: function (attrs, options) {
            var errors = {};
            if (!attrs.title) {
                errors.title = "can't be blank";
            }
            if (!attrs.order) {
                errors.order = "can't be blank";
            }
            if (!_.isEmpty(errors)) {
                return errors;
            }
        }
    });

    Entities.PageCollection = Backbone.Collection.extend({
        url: "api/pages",
        model: Entities.Page,
        comparator: "itemorder"
    });

    var initializePages = function() {
        var pages = new Entities.PageCollection([
            {
                title: 'Home',
                pageorder: 1
            },
            {
                title: 'About',
                pageorder: 2
            },
            {
                title: 'Portfolio',
                pageorder: 3
            },
            {
                title: 'Pricing',
                pageorder: 4
            },
            {
                title: 'Contact',
                pageorder: 5
            },
        ]);
        pages.forEach(function(page) {
            page.save();
        });
        return pages.models;
    }

    var API = {
        getPageEntities: function() {
            var pages = new Entities.PageCollection();
            var defer = $.Deferred();
            pages.fetch({
                success: function(data) {
                    defer.resolve(data);
                }
            });
            var promise = defer.promise();
            $.when(promise).done(function(pages) {
                if(pages.length === 0) {
                    var models = initializePages();
                    pages.reset(models);
                }
            });
            return promise;
        },
        getPageEntity: function(pageId) {
            var page = new Entities.Page({id: pageId});
            var defer = $.Deferred();
            page.fetch({
                success: function(data) {
                    defer.resolve(data);
                },
                error: function(data) {
                    defer.resolve(undefined);
                }
            });
            return defer.promise();
        }
    };

    App.reqres.setHandler("page:entities", function(){
        return API.getPageEntities();
    });


    App.reqres.setHandler("page:entity", function(id){
        return API.getPageEntity(id);
    });
});


