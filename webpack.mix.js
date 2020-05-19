const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'js')
    //.js('resources/js/Company/company.js', 'public/js/company.js')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    // .extract([
    //     'autosize',
    //     'codemirror',
    //     'chartist',
    //     'chartist-plugin-tooltips',
    //     'flatpickr',
    //     'form-backend-validation',
    //     'inflector-js',
    //     'markdown-it',
    //     'marked',
    //     'moment',
    //     'numeral',
    //     'places.js',
    //     'popper.js',
    //     'vue-async-computed',
    //     'vue-clickaway',
    //     'vue-toasted',
    //     'vue',
    //     'vue-router',
    //     'portal-vue',
    //     'lodash',
    //     'moment-timezone',
    //     'axios',
    //     'jquery',
    //     'bootstrap'
    // ])
    .setPublicPath('public')
    .webpackConfig({
        output: {
            chunkFilename: 'js/[name].js' + (mix.inProduction() ? '?id=[chunkhash]' : ''),
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js/'),
            },
        },
    });
