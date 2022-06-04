module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            opacity: {
                '10': '0.1',
                '20': '0.2',
                '95': '0.95',
                '96': '0.96',
            }
        },
    },
    plugins: [],
}