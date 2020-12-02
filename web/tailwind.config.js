module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
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
    customForms: (theme) => ({
      default: {
        // 'input, textarea, multiselect, select': {
        //   borderRadius: 0,
        //   borderRadiusTopLeft: theme('borderRadius.sm'),
        //   borderRadiusTopRight: theme('borderRadius.sm'),
        //   boxShadow: '0 2px 0 0 #000',
        //   borderWidth: '0',
        //   '&:focus': {
        //     borderWidth: '0',
        //     boxShadow: '0 0 0 2px #000',
        //     borderColor: 'transparent',
        //   },
        // },
      },
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
}
