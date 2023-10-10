/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pale-blue': '#e0e8ff',
        'bright-blue': '#3829e0',
        'neutral-blue': '#f5f7ff',
        'desatured-blue': '#7280a7',
        'dark-blue': '#1f2f56',
      }
    },
    screens: {
      'sm': {'min': '300px', 'max': '500px'},
    }
  },
  plugins: []
}

