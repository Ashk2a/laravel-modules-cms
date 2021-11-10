const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const fs = require('fs');
const path = require('path');

// https://codeanddeploy.com/blog/laravel/combine-the-nwidart-laravel-modules-assets-to-public-using-laravel-mix

const moduleFolder = './modules';

const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.resolve(p,f)).isDirectory());

// Get the available modules return as array
let modules = dirs(moduleFolder);

mix
    .js("resources/js/app.js", "public/js")
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })

modules.forEach(function(mod){
    mix.js(__dirname  + "/modules/" + mod + "/Resources/assets/js/app.js", 'public/js');
    mix.sass(__dirname  + "/modules/" + mod + "/Resources/assets/sass/app.scss", 'public/css');
});

