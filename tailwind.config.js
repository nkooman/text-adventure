module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Classic Console Neue', 'Courier New', 'Monaco', 'Courier'],
      body: ['Classic Console Neue', 'Courier New', 'Monaco', 'Courier'],
    },
    extend: {
      keyframes: {
        blink: {
          '0%, 49%': {
            opacity: 1,
          },
          '50%, 100%': {
            opacity: 0,
          },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
