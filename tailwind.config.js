module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Avenir',
          '"Helvetica Neue"',
          'Helvetica',
          '"Hiragino Sans"',
          'ヒラギノ角ゴシック',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
};
