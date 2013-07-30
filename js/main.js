Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
    return Handlebars.compile(rawTemplate);
};

var App = new Marionette.Application();

App.addRegions({
    mainRegion: "#main-region"
});

App.on('initialize:after', function() {
    if(Backbone.history){
        Backbone.history.start();
    }
    App.PagesApp.List.Controller.listPages();
});
