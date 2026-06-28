/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './js/**/*.js',
  ],
  safelist: [],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1440px',
      '4xl': '1600px',
      '5xl': '1920px',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
        '3xl': '1440px',
        '4xl': '1600px',
        '5xl': '1920px',
      },
    },
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Outfit"', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
      },
      fontWeight: {
        normal: '400',
      },
      spacing: {
        'section-y': '96px',
        'section-y-mobile': '48px',
        gutter: '16px',
      },
      colors: {
        cream: {
          50: '#FFFDF8',
          100: '#FDF5E6',
          200: '#F5E8CC',
          300: '#E8CF9A',
          400: '#D4AA68',
        },
        green: {
          50: '#F0F4EF',
          100: '#D4E2D0',
          200: '#A8C5A0',
          400: '#5A8A50',
          600: '#3B6332',
          800: '#213E1A',
          900: '#112210',
        },
        sand: {
          100: '#EDE0CC',
          200: '#D9C4A0',
        },
        'text-primary': '#1A1510',
        'text-secondary': '#4A3E2C',
        'text-muted': '#8A7A62',
        'white': '#ffffff',
        'black': '#000000',
      },
      borderRadius: {
        sm: '4px',
        md: '10px',
        lg: '20px',
        full: '9999px',
      },
      boxShadow: {
        'soft-green': '0px 4px 40px 0px rgba(59,99,50,0.12)',
        'card-green': '0px 8px 32px 0px rgba(59,99,50,0.08)',
        'hover-green': '0px 12px 40px 0px rgba(59,99,50,0.18)',
        'green-md': '0px 8px 32px 0px rgba(59,99,50,0.15)',
        'green-sm': '0px 4px 16px 0px rgba(59,99,50,0.08)',
        'green-lg': '0px 16px 48px 0px rgba(59,99,50,0.12)',
        'focus-green': '0px 0px 0px 3px #D4E2D0',
        'elevation': '0px 8px 24px 0px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'hero-right-green': 'linear-gradient(145deg, #D4E2D0 0%, #A8C5A0 60%, #5A8A50 100%)',
        'contact-green': 'linear-gradient(135deg, #3B6332 0%, #112210 100%)',
        'skills-green': 'linear-gradient(180deg, #F0F4EF 0%, #FFFDF8 100%)',
        'hero-overlay':
          'radial-gradient(circle at 70% 20%, rgba(90,138,80,0.2) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(212,170,104,0.1) 0%, transparent 40%)',

        'section-light':
          'linear-gradient(180deg, #F0F4EF 0%, #FFFDF8 100%)',

        'green-soft':
          'linear-gradient(135deg, #D4E2D0 0%, #A8C5A0 100%)',

        'gold-soft':
          'linear-gradient(135deg, #F5E8CC 0%, #E8CF9A 100%)',

        'green-light':
          'linear-gradient(135deg, #F0F4EF 0%, #D4E2D0 100%)',
      },
      animation: {
        blink: 'blink 2s ease-in-out infinite',
        fadein: 'fadein 0.6s ease both',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        fadein: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
