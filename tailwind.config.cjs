/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
    ["./src/**/*.tsx",
      "./index.html"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    screens: {
      'n7': '50px',
      'n6': '360px',
      'n5': '464px',
      'n4': '564px',
      'n3': '664px',
      'n2': '800px',
      'n1': '950px',
      'n0': '1100px',
    },

    backgroundSize: {
      "icons": "1px"
    },
    textColor: {
      'T1': '#ffffffaf', //3b27535b
      'T2': '#375949', //ffffff85
    },
    animation: {
      'contentShow': '150ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
    extend: {
      backgroundColor: {
        "BG": "#030303",
        'BGH': '#1b1f23', // 0d0d0eaf
        'BGC': '#09090aea',
        'BGB': '#375949',
        'Bhover': '#22212185'
      },
      borderColor: {
        B:'#375949be',
      },
      transitionTimingFunction: {
        'in-menu': 'cubic-bezier(0.16, 1, 0.3, 1)',

      }
    },
  },
  plugins: []
}
