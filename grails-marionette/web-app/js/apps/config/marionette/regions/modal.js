/* Uses twitter bootstrap for modal */
Marionette.Region.Modal = Marionette.Region.extend({
    onShow: function(view) {
        this.listenTo(view, "modal:close", this.onClose);
        this.$el.modal('show');
    },
    onClose: function() {
        this.stopListening();
        this.close();
        this.$el.modal('hide');
    }
});