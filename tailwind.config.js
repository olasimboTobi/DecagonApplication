
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
      "xsm":"280px",
      "sm":"412px",
      "md":"768px",
      "lg":"1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "navDashboard": "url('/src/Components/Assets/DashboardImage/navDashboard.svg')",
        
      },

      width: {
        
      },
      height: {
        
      },
      colors: {
       
      },
    },
  },
 
  plugins: [require('@tailwindcss/forms'),require('tailwind-scrollbar-hide')],
};

