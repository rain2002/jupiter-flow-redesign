/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jup: {
          dark: '#080A0F',
          card: '#121620',
          hover: '#1B2232',
          border: '#232C3F',
          lime: '#C7F284',
          cyan: '#00BEF0',
          orange: '#F97316',
          muted: '#8A99AD'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
