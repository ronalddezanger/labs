Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
    return Handlebars.compile(rawTemplate);
};

var App = new Marionette.Application();

App.addRegions({
    mainRegion: "#main-region"
});

App.Page = Backbone.Model.extend({});

App.PageCollection = Backbone.Collection.extend({
    model: App.Page,
    comparator: "title"
});

App.PageItemView = Backbone.Marionette.ItemView.extend({
    tagName: "li",
    template: "#page-list-item"
});

App.PagesView = Backbone.Marionette.CollectionView.extend({
    tagName: "ul",
    itemView: App.PageItemView
});

App.on('initialize:after', function() {
    console.log('App started');
    var pages = new App.PageCollection([
        {
            title: 'Home'
        },
        {
            title: 'About'
        },
        {
            title: 'Portfolio'
        },
        {
            title: 'Pricing'
        },
        {
            title: 'Contact'
        }
    ]);
    var pageListView = new App.PagesView({ collection: pages });
    App.mainRegion.show(pageListView);
});

App.start();
