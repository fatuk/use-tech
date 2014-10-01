module.exports = {
    dist: {
        options: {
            sourceMap: true
        },
        files: {
            'vendors/plugins.min.js': [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/fractionslider/jquery.fractionslider.min.js',
                'bower_components/jQuery-Open-Carousel/jquery.openCarousel.js'
            ]
        }
    }
};