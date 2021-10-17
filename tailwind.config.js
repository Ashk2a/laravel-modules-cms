const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
    mode: 'jit',
    purge: [
        './resources/**/*.blade.php',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            colors: {
                gray: colors.blueGray,
            },
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
}
