App.module('PagesApp.Common.Views', function(Views, App, Backbone, Marionette, $, _) {
    Views.Loading = Marionette.ItemView.extend({
        template: "#loading-view",

        serializeData: function() {
            return {
                title: this.options.title || "Loading Data",
                message: this.options.message || "Please wait, data is loading."
            }
        },

        onShow: function() {
            var opts = {
        lines: 13, // The number of lines to draw
        length: 20, // The length of each line
        width: 10, // The line thickness
        radius: 30, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#000', // #rgb or #rrggbb
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: '30px', // Top position relative to parent in px
        left: 'auto' // Left position relative to parent in px
            };
            $('#spinner').spin(opts);
        }
    });

    Views.Form = Marionette.ItemView.extend({
        tagName: "div",
        className: "modal-dialog",
        template: "#page-form",
        events: {
            "click button.js-submit": "submitClicked",
            "click button.js-cancel": "cancelClicked"
        },
        submitClicked: function(e) {
            e.preventDefault();
            var data = Backbone.Syphon.serialize(this);
            this.trigger("form:submit", data);
        },
        cancelClicked: function(e) {
            e.preventDefault();
            this.trigger("modal:close");
        },
        onFormDataInvalid: function (errors) {
            var $view = this.$el;
            var clearFormErrors = function() {
                var $form = $view.find("form");
                $form.find(".help-block").each(function () {
                    $(this).remove();
                });
                $form.find(".form-group.has-error").each(function () {
                    $(this).removeClass("has-error");
                });
            };

            var markErrors = function (value, key) {
                console.log(key, value);
                var $controlGroup = $view.find('#page-'+key).parent();
                var $errorEl = $('<span>', {class: "help-block", text: value});
                $controlGroup.append($errorEl).addClass("has-error");
            };

            clearFormErrors();
            _.each(errors, markErrors);
        }
    });

    Views.Confirm = Marionette.ItemView.extend({
        title: "Confirm page deletion",
        bodyText: "Are you sure you want to delete the page?",
        hasBody: true,
        onRender: function() {
            this.$(".js-confirm").text("Delete page");
        },
        tagName: "div",
        className: "modal-dialog",
        template: "#page-modal-confirm",
        events: {
            "click button.js-confirm": "confirmClicked",
            "click button.js-cancel": "cancelClicked"
        },
        confirmClicked: function(e) {
            e.preventDefault();
            this.trigger("page:destroy");
        },
        cancelClicked: function(e) {
            e.preventDefault();
            this.trigger("modal:close");
        }
    });
});