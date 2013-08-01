Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
    return Handlebars.compile(rawTemplate);
};

var App = new Marionette.Application();

App.addRegions({
    mainRegion: "#main-region"
});

App.navigate = function(route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
};

App.getCurrentRoute = function() {
    return Backbone.history.fragment;
};

App.on('initialize:after', function() {
    if(Backbone.history){
        Backbone.history.start();

        if(this.getCurrentRoute() === "") {
            App.trigger("pages:list");
        }
    }
});