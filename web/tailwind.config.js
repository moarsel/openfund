module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['"Messer Condensed"', 'sans-serif'],
      body: ['"Helvetica Neue"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#000',
        accent: '#EEFF01',
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
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
