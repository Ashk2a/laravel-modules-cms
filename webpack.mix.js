const mix = require('laravel-mix');
const fs = require('fs');
const path = require('path');
const tailwind = require('tailwindcss');

// https://codeanddeploy.com/blog/laravel/combine-the-nwidart-laravel-modules-assets-to-public-using-laravel-mix

const moduleFolder = './modules';

const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.resolve(p,f)).isDirectory());

// Get the available modules return as array
let modules = dirs(moduleFolder);

modules.forEach(function(mod){
    mix.js(__dirname  + "/modules/" + mod + "/Resources/assets/js/app.js", 'public/js');
    mix.sass(__dirname  + "/modules/" + mod + "/Resources/assets/sass/app.scss", 'public/css');
});

mix
    .options({
        processCssUrls: false,
        postCss: [ tailwind('./tailwind.config.js') ],
    })

