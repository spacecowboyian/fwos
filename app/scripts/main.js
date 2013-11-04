require.config({
    paths: {
        'jquery': 'bower_components/jquery/jquery',
        'underscore': 'bower_components/underscore-amd/underscore',
        'backbone': 'bower_components/backbone-amd/backbone',
    }
});

require(['scripts/views/home'], function(HomeView) {
    new HomeView();
});