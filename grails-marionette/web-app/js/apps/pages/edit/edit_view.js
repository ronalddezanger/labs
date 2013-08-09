App.module('PagesApp.Edit', function(Edit, App, Backbone, Marionette, $, _) {
    Edit.Page = App.PagesApp.Common.Views.Form.extend({
        initialize: function() {
            this.title = "Edit "+this.model.get("title");
        },
        onRender: function() {
            if(this.options.generateTitle) {
                var $title = $('<h1>', { text: this.title });
                this.$el.prepend($title);
            }

            this.$(".js-submit").text("Update page");
        }
    });
});
