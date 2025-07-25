/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loft-wall': "url('/src/assets/bg-loft.jpg')",
      },
      fontFamily: {
        space: ['Space Mono', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '16px',
          md: '32px',
          lg: '40px',
          xl: '64px',
          '2xl': '80px',
        },
        screens: {
          sm: '100%',
          md: '640px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px'
        }
      },
      borderRadius: {
        'none': '0px',
        'sm': '2px',         // ~0.125rem
        DEFAULT: '4px',      // ~0.25rem
        'md': '6px',         // ~0.375rem
        'lg': '8px',         // ~0.5rem
        'full': '9999px',
        'large': '12px',
      }
    }
  },
  plugins: [],
}