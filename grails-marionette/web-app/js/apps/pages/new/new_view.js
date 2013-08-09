App.module('PagesApp.New', function(New, App, Backbone, Marionette, $, _){
    New.Page = App.PagesApp.Common.Views.Form.extend({
        title: "New Contact",
        onRender: function() {
            this.$(".js-submit").text("Create page");
        }
    });
});