var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {

  mix.delete(['./public/css', './public/js/']);

  mix.sass('app.scss',
    './public/css',
    {includePaths: ['./bower_components/foundation-sites/scss']});

  mix
    .copy([
        './bower_components/foundation-sites/dist/foundation.js',
        './bower_components/jquery/dist/jquery.js',
        './bower_components/what-input/what-input.js'
      ], './public/js/'
    );
});
