/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center: true,
        screens: {
            sm: "100%",
          md: '1110px'
        }
      },

      borderRadius: {
        radiusMain: '15px'
      },
      fontSize: {
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '30': '30px',
        '40': '40px',
        '60': '60px',

      },
      colors: {
        yellowMain: "#CC9933",
        yellowPale: '#F0BF5F',
        blackMain: '#000000',
        grayMain: '#999999',
        grayPale: '#f1f1f1',
        yellowLite: '#F0BF5F',
        bgGradient: 'rgba(48, 64, 89, 0.84)'
      }
    },
  },
  plugins: [],
}

