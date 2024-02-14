/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,ts,tsx,js}"],
  theme: {
    extend: {
      container: {
        padding: {
          sm: '15px',
          md: '40px',
          lg: '70px',
          xl: '90px',
        }
      },
      fontSize: {
        'logo': ['12px', {
          lineHeight: '18px',
          fontWeight: 600,

        }],
        'menu': ['14px', {
          lineHeight: '26px',
          fontWeight: 400,

        }],
        'let': ['14px', {
          lineHeight: '12px',
          fontWeight: 500,


        }],




      },
      colors: {
        Fgreen: '#45B36B',
        Fdarkgray: " #23262F",
        Fgray: '#EFF1F3',
        Fred: '#EF466F',
      },
      fontFamily: {
        work: ['Work Sans , sans-serif']
      },
     

    },
  },
  plugins: [],
}