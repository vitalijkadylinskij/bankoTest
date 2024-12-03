import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      fontSize: {
        ssm: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        base: '1.125rem',
        xl: '1.25rem',
        '2xl': '2rem',
      },
      lineHeight: {
        14: '14px',
        15: '15px',
        18: '18px',
        24: '24px',
        38: '38px',
      },
      spacing: {
        small: '0.313rem',
        large: '17.813rem',
        sidebarw: '18.813rem',
        extralarge: '24.875rem',
        navbarw: '27.5rem',
        tablew: '93rem',
      },

      colors: {
        black: {
          900: '#1C1C1F',
          800: '#18191B',
        },
        grey: {
          900: '#69717C',
          800: '#8A919A',
          700: '#AFAFB0',
          600: '#C7CBD0',
          500: '#ECF0F3',
          400: '#F4F6F8',
          300: '#E2E5E9',
        },
        blue: {
          900: '#166FF6',
          800: '#047AFE',
          700: '#E8F1FE',
        },
        charts: {
          20: '#D0E2FD',
          40: '#A2C5FC',
          60: '#73A8FA',
          80: '#0F53C9',
        },
        'lite-orange': '#E86405',
        'lite-green': '#F2FCF4',
        text: {
          'accent-primary': '#166FF6',
          'accent-secondary': '#E8F1FE',
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
