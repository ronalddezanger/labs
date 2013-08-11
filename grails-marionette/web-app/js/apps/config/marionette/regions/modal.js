/* Uses twitter bootstrap for modal */
Marionette.Region.Modal = Marionette.Region.extend({
    onShow: function(view) {
        this.listenTo(view, "modal:close", this.onClose);
        $(".modal-header h3").text(view.title);
        if(view.hasBody) {
            $(".modal-body p").text(view.bodyText);
        }
        this.$el.modal('show');
    },
    onClose: function() {
        this.stopListening();
        this.close();
        this.$el.modal('hide');
    }
});