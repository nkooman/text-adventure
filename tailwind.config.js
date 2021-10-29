module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Classic Console Neue', 'Courier New', 'Monaco', 'Courier'],
      body: ['Classic Console Neue', 'Courier New', 'Monaco', 'Courier'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
