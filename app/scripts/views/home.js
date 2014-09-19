define(['backbone','leanModal','fitText'], function(Backbone) {
    var HomeView = Backbone.View.extend({
        el:'body',

        initialize: function() {
            console.log( 'Home page view' );
            $('[data-target="sign-in"]').leanModal({
                top : 200,
                overlay : 0.5,
                closeButton: ".modal-close"
            });

            jQuery(".testText").fitText();
        },

        events: {
            'click [data-target="start-shirt-form"]' : 'startShirtForm',
            'click [data-destination*="form-"]':'startShirtForm',
            'keydown input' : 'formSpace'
        },

        startShirtForm : function (e) {
            var form1 = this.$('[data-destination="form-1"]');
            
            $('[data-target="start-shirt-form"]').hide();

            if ($(e.currentTarget).data('target')){
                form1.focus();
            }
        },

        formSpace : function (e) {
            var keycode = e.which,
            line1 = $('[data-destination="form-1"]').val(),
            line2 = $('[data-destination="form-2"]').val(),
            line3 = $('[data-destination="form-3"]').val(),
            line4 = $('[data-destination="form-4"]').val();
                

            if (keycode === 32 || keycode === 13){
                $(e.currentTarget).next('input').focus();
                return false;
            }
            if (keycode === 8 && $(e.currentTarget).val().length < 1){
                $(e.currentTarget).prev('input').focus();
            }

            if (line1.length > 7 || line2.length > 7 || line3.length > 7 || line4.length > 7){
                $('.shirt-form').addClass('small-text');
            } else {
                $('.shirt-form').removeClass('small-text');
            }
            //if full and valid

            if (line1 && line2 && line3 && line4){
                $('[data-target="submit-button"]').removeClass('hide');
            } else {
                $('[data-target="submit-button"]').addClass('hide');
            }
        }
    });

    return HomeView;
});