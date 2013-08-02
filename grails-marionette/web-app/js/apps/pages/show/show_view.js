App.module('PagesApp.Show', function(Show, App, Backbone, Marionette, $, _) {

	Show.MissingPage = Marionette.ItemView.extend({
		template: "#404-view"
	});

    Show.Page = Marionette.ItemView.extend({
        template: "#page-view",
        events: {
            "click a.js-edit": "editClicked"
        },
        editClicked: function(e) {
            e.preventDefault();
            this.trigger("page:edit", this.model);
        }
    });
});