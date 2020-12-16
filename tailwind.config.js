module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        104: '26rem',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '4xl': '2rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotate(-3deg)'},
          '50%': {transform: 'rotate(3deg)'},
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
};
