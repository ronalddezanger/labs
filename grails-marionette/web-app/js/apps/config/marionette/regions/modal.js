/* Uses twitter bootstrap for modal */
Marionette.Region.Modal = Marionette.Region.extend({
    events: {
        'shown': 'shown'
    },
    constructor: function() {
        Marionette.Region.prototype.constructor.apply(this, arguments);
        this.ensureEl();
        this.$el.on('hidden', {region:this}, function(e){
            e.data.region.close();
        });
    },
    onShow: function() {
        this.$el.modal('show');
    },
    onClose: function() {
        this.$el.modal('hide');
    },
    shown: function () {

    }
});