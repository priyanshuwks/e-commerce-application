/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors : {
            'onHover' : '#0369a1',
            'fontColor' : '#f9fafb'
        }
      },
    },
    plugins: [],
    
  }