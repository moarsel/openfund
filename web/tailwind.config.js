module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['"Poppins"', 'sans-serif'],
      body: ['"Roboto"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#000',
        accent: '#EEFF01',
        // gray - 1
        // 474747
        // gray - 2
        // CBCBCB
        // gray - 3
        // EFEFEF
        gray: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        purple: {
          DEFAULT: '#9451EB',
          darker: '#260B74',
          darkest: '#110F4C',
          lighter: '#DFCAF9',
          lightest: '#F2EAFD',
        },
        blue: {
          DEFAULT: '#6B37FF',
          darker: '#050889',
          lighter: '#C3C7FF',
        },
        green: {
          DEFAULT: '#02E2AC',
          lighter: '#B3F6E6',
          darker: '#00543E',
        },
        red: {
          DEFAULT: '#FF584E',
          darker: '#710D0D',
          lighter: '#FFCDCA',
        },
        yellow: {
          DEFAULT: '#FFDB5E',
          dark: '#EBBB51',
          darker: '#714F12',
          lighter: '#FFF4CE',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
