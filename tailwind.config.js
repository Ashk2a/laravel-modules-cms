const theme = require("./theme");

module.exports = {
    mode: 'jit',
    purge: [
        './resources/**/*.blade.php',
        './modules/**/Resources/**/*.blade.php',

        './resources/**/*.scss',
        './modules/**/Resources/**/*.scss',

        './config/tall-toasts.php',
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
        require('@tailwindcss/typography'),
        require('autoprefixer')
    ]
}
