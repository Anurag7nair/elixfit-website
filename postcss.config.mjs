/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // We changed 'tailwindcss' to '@tailwindcss/postcss' here
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};

export default config;