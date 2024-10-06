/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{html,js,jsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx',
        './src/hooks/**/*.{js,ts,jsx,tsx}',
        './index.html',
    ],
    theme: {
        colors: {
            white: '#FFFFFF',
            black: '#000000',
            blue: '#1fb6ff',
            purple: '#7e5bef',
            pink: '#ff49db',
            orange: '#ff7849',
            green: '#13ce66',
            yellow: '#ffc82c',
            'gray-dark': '#273444',
            gray: '#8492a6',
            'gray-light': '#d3dce6',
        },
        extend: {},
    },
    plugins: [],
}
