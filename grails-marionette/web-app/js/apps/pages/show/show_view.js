App.module('PagesApp.Show', function(Show, App, Backbone, Marionette, $, _) {

	Show.MissingPage = Marionette.ItemView.extend({
		template: "#404-view"
	});

    Show.Page = Marionette.ItemView.extend({
        template: "#page-view"
    });
});