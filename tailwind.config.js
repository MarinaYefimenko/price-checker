/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#59bc06',      
          secondary: '#c9ff96',   
          white: '#ffffff',       
          black: '#142901',
          error: '#e91800',
          grey: "#c2c5bb",
          offwhite: "#f9ffed"      
        },
      },
    },
    plugins: [],
  }