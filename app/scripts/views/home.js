define(['backbone','leanModal'], function(Backbone) {
    var HomeView = Backbone.View.extend({
        el:'body',

        initialize: function() {
            console.log( 'Home page view' );
            $('[data-target="sign-in"]').leanModal({
                top : 200,
                overlay : 0.5,
                closeButton: ".modal-close"
            });
        },

        events: {
            'click [data-target="start-shirt-form"]' : 'startShirtForm',
            'click [data-destination*="form-"]':'startShirtForm',
            'keydown input' : 'formSpace'
        },

        startShirtForm : function (e) {
            e.preventDefault();
            var form1 = this.$('[data-destination="form-1"]');
            
            $('[data-target="start-shirt-form"]').hide();
            form1.focus();
        },

        formSpace : function (e) {
            var keycode = e.which;
            if (keycode === 32 || keycode === 13){
                $(e.currentTarget).next('input').focus();
            }
            if (keycode === 8 && $(e.currentTarget).val().length < 1){
                $(e.currentTarget).prev('input').focus();
            }
            //if full and valid
        }
    });

    return HomeView;
});