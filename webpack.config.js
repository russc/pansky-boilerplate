// ========================================================================
// WEBPACK CONFIGURATION FILE
// ========================================================================

const webpack               = require('webpack');
const path                  = require('path');
const CommonsChunkPlugin    = webpack.optimize.CommonsChunkPlugin;

const config = {
    entry: {
        'amplify/public/amplify.min':
            ['./templates/main/amplify/source/amplify.js'],
        'search/public/search.min':
            ['./templates/main/search/source/search.js'],
        'booking/public/booking-funnel.min':
            ['babel-polyfill','./templates/main/booking/source/booking-funnel.js'],
        'offer-search/public/offer-search.min':
            ['./templates/main/offer-search/source/offer-search.js'],
    },
    plugins: [
      new CommonsChunkPlugin({
          name: 'commons',
          filename: './js/app-commons.min.js'
      })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './templates/main')
    },
    module: {
        loaders: [
            {
                test: /.json$/,
                loader: 'babel-loader!json-loader'
            },
            {
              test: /node_modules\/*.(^.json)$/,
              loader: 'imports-loader?jquery=jquery!imports-loader?jQuery=jquery!imports-loader?$=jquery'
            },
            {
              test: /foundation-sites/,
              loader: 'expose-loader?Foundation!exports-loader?Foundation!imports-loader?jQuery=jquery&$=jquery'
            },
            {
                test: /\.js$/,
                exclude: /(disposables|parsley)/,
                loader: "babel-loader!eslint-loader"
            },
            {
                test: /\.html$/,
                loader: 'vue-html-loader'
            }
        ],
    },
    externals: {
        // 'jquery': 'jQuery'
    },
    resolve: {
        alias: {
            'shared': path.resolve(__dirname, 'templates/main/js/shared/'),
            'vue$': 'vue/dist/vue.js',
            'vee-validate$': 'vee-validate/dist/vee-validate.min.js',
            'vue-resource$': 'vue-resource/dist/vue-resource.min.js',
            'vue-router$': 'vue-router/dist/vue-router.min.js',
            // 'flickity$': 'flickity/dist/flickity.pkgd.min.js',
            'jquery.cookiebar': path.resolve(__dirname, 'templates/main/lib/sabre/js/jquery.cookiebar.js'),
            'jquery.datepick': path.resolve(__dirname, 'templates/main/lib/sabre/js/jquery.datepick.js'),
            'jquery.datepick.ext': path.resolve(__dirname, 'templates/main/lib/sabre/js/jquery.datepick.ext.js'),
            'js-cookie$' : 'js-cookie/src/js.cookie.js',
            'TweenLite': 'gsap/TweenLite'
        },
    },
};

module.exports = config;
