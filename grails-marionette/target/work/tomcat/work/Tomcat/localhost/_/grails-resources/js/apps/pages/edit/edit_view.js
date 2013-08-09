App.module('PagesApp.Edit', function(Edit, App, Backbone, Marionette, $, _) {
    Edit.Page = App.PagesApp.Common.Views.Form.extend({
        initialize: function() {
            this.title = "Edit "+this.model.get("title");
        }
    });
});
