/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      spacing: {
        15: '60px', // Custom spacing value
      },
      container:{
      padding:{
       md:"5rem",
       lg:"10rem",
      },
      
    },
  
  
  },
    
  },
  plugins: [],
}

