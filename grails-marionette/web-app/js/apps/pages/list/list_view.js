App.module('PagesApp.List', function(List, App, Backbone, Marionette, $, _, Handlebars) {

    var NoPagesView = Marionette.ItemView.extend({
        template: "#page-list-none",
        tagName: "tr",
        className: "alert"
    });

    List.Page = Backbone.Marionette.ItemView.extend({
        tagName: "tr",
        template: "#page-list-item",
        events: {
            "click": "highlightTitle",
            "click td a.js-show": "showClicked",
            "click td a.js-edit": "editClicked",
            "click button.js-delete": "deleteClicked"
        },
        flash: function (cssClass) {
            var $view = this.$el;
            $view.hide().toggleClass(cssClass).fadeIn(800, function() {
                setTimeout(function() {
                    $view.toggleClass(cssClass)
                }, 500);
            });
        },
        highlightTitle: function() {
            this.$el.toggleClass('warning');
        },
        showClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.trigger("page:show", this.model);
        },
        editClicked: function  (e) {
            e.preventDefault();
            e.stopPropagation();
            this.trigger("page:edit", this.model);
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
        emptyView: NoPagesView,
        itemView: List.Page,
        itemViewContainer: "tbody",
        initialize: function() {
            this.listenTo(this.collection, "reset", function() {
                this.appendHtml = function(collectionView, itemView, index) {
                    collectionView.$el.append(itemView.el);
                }
            });
        },
        onItemviewPageDelete: function() {
            this.$el.fadeOut(500, function() {
                $(this).fadeIn(500);
            });
        },
        onCompositeCollectionRendered: function() {
            this.appendHtml = function(collectionView, itemView, index) {
                collectionView.$el.append(itemView.el);
            }

        }
    });

    List.Layout = Marionette.Layout.extend({
        template: "#page-list-layout",
        regions: {
            panelRegion: "#panel-region",
            pagesRegion: "#pages-region"
        }
    });

    List.Panel = Marionette.ItemView.extend({
        template: "#page-list-panel",
        triggers: {
            'click button.js-new': "page:new"
        },
        events: {
            "click button.js-filter": "filterClicked"
        },
        ui: {
            criterion: "input.js-filter-criterion"
        },
        filterClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();
            var criterion = this.$(".js-filter-criterion").val();
            this.trigger("page:filter", criterion);
        },
        onSetFilterCriterion: function(criterion) {
            $(this.ui.criterion).val(criterion);
        }
    });

});