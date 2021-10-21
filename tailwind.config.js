const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
    mode: 'jit',
    purge: [
        './resources/**/*.blade.php',
        './src/**/*.{js,jsx,ts,tsx,vue}',
        './vendor/usernotnull/tall-toasts/config/**/*.php',
        './vendor/usernotnull/tall-toasts/resources/views/**/*.blade.php',
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.indigo,
                secondary: colors.yellow,
                neutral: colors.blueGray
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
}
