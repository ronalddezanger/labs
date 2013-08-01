App.module('PagesApp.Show', function(Show, App, Backbone, Marionette, $, _) {
    Show.Controller = {
        showPage: function(id) {
			var pages = App.request("pages:entities");
			var model = pages.get(id);
            var pageView;
            if(model !== undefined) {
				pageView = new Show.Page({
					model: model
				});
			} else {
				pageView = new Show.MissingPage();
			}

            App.mainRegion.show(pageView);
        }
    };
});
