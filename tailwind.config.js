/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hadona: {
          blue: '#2B46BB',
          'blue-dark': '#1e35a0',
          'blue-light': '#4A6EE8',
          yellow: '#ECDC43',
          'yellow-dark': '#d4c539',
        },
      },
    },
  },
  plugins: [],
}

