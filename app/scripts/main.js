require.config({
    'paths': {
        'jquery': 'bower_components/jquery/dist/jquery',
        'underscore': 'bower_components/underscore-amd/underscore',
        'backbone': 'bower_components/backbone-amd/backbone',
        'leanModal': 'bower_components/jquery-leanmodal/jquery.leanModal',
        'facebook': '//connect.facebook.net/en_US/all',
        'fitText': 'bower_components/FitText.js/jquery.fittext'
    },
    'shim' : {
        'leanModal':['jquery'],
        'fitText':['jquery'],
        'facebook' : {
            exports: 'FB'
        }
    }
});

//require(['fb']);

require(['scripts/views/home'], function(HomeView) {
    new HomeView();
});
