//js-show-about
App.module('AboutApp.Show', function(Show, App, Backbone, Marionette, $, _) {
    Show.About = Marionette.ItemView.extend({
        template: "#about-message"
    });
});
