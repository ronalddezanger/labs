App.module('PagesApp.List', function(List, App, Backbone, Marionette, $, _, Handlebars) {

    List.Page = Backbone.Marionette.ItemView.extend({
        tagName: "tr",
        template: "#page-list-item",
        events: {
            "click": "highlightTitle",
            "click td a.js-show": "showClicked",
            "click button.js-delete": "deleteClicked"
        },
        highlightTitle: function() {
            this.$el.toggleClass('warning');
        },
        showClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.trigger("page:show", this.model);
        },
        deleteClicked: function(e) {
            e.stopPropagation();
            this.trigger("page:delete", this.model);
        },
        remove: function() {
            this.$el.fadeOut(function() {
                $(this).remove();
            });
        }
    });

    List.Pages = Backbone.Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        template: "#page-list",
        itemView: List.Page,
        itemViewContainer: "tbody",
        onItemviewPageDelete: function() {
            this.$el.fadeOut(1000, function() {
                $(this).fadeIn(1000);
            });
        }
    });

});