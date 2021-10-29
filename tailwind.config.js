const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

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
            // Use https://www.tailwindshades.com to generate shades of color
            colors: {
                primary: colors.blueGray,
                secondary: colors.sky,
                promoted: colors.yellow,
                neutral: colors.gray,
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('autoprefixer')
    ]
}
