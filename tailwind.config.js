const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const theme = require("./theme");

module.exports = {
    mode: 'jit',
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.scss',
        './src/**/*.{js,jsx,ts,tsx,vue}',
        './config/tall-toasts.php'
    ],
    theme: {
        extend: {
            colors: theme.colors,
            fontSize: theme.fontSize,
            fontFamily: theme.fontFamily,
            boxShadow: {
                test: '0 0 5px 5px rgba(0,0,0,.2)',
            },
        }
    },
    plugins: [
        require('postcss-import'),
        require('@tailwindcss/forms'),
        require('autoprefixer')
    ]
}
