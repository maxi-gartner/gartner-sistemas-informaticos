/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
/*         'primary':'#64748b',
        'secondary':'#64748b',
        'tertiary':'#94a3b8',
        'quaternary':'#e2e8f0',
        'quinary':'#f1f5f9',
        'senary':'#f9fafb',
        'septenary':'#f3f4f6',
        'octonary':'#cbd5e1',
        'nonary':'#94a3b8',
        'denary':'#64748b', */
      }
    },
    screens: {
      
      'tablet': '801px',
      // => @media (min-width: 801) { ... }   
 
      'laptop': '1201px',
      // => @media (min-width: 1201px) { ... }

      'desktop': '1550px',
      // => @media (min-width: 1550px) { ... }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}