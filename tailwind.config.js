/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./App.js"
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['10px', '14px'],
      sm: ['12px', '16px'],
      base: ['14px', '20px'],
      lg: ['16px', '22px'],
      xl: ['18px', '24px'],
      '2xl': ['24px', '29px']
    },
    colors: {
      dark: {
        background: '#1f2024',
        primary: '#2f3036',
        primary500: '#414042',
        text: '#fff',
        grayLight: '#d4d6dd',
        gray: '#c5c6cc'
      },
      black: '#000',
      white: '#fff',
      background: '#fff',
      primary: '#f8f9fe',
      primary500: '#e8e9f1',
      primary300: '#f2f2f2',
      opacity: 'rgba(255,255,255,0.12)',
      loading: 'rgb(0, 0, 0, 0.3)',
      shadow: 'rgba(0,0,0,0.25)',
      text: '#1f2024',
      grayLight: '#71727a',
      gray: '#7A7A7A',
      border: '#c5c6cc',
      placeholder: '#8F9098',
      blue: '#0F48A3',
      purple: '#9186F4',
      success: '#22c55e',
      success500: '#70d093',
      success100: '#e7f4e8',
      warning: '#facc15',
      warning500: '#fde047',
      warning300: '#feed9a',
      warning200: '#fef2b3',
      warning100: '#fff4e4',
      error: '#ed3241',
      error500: '#ff616d',
      error100: '#ffe2e5',
      highlight: '#006ffd',
      highlight700: '#2897FF',
      highlight500: '#6FBAFF',
      highlight300: '#B4DBFF',
      highlight200: '#cce6ff',
      highlight100: '#EAF2FF',
      transparent: 'transparent'
    },
    extend: {
      backgroundImage: {
        'linear-blue': 'linear-gradient(270deg, #003AD2 0%, #0097EC 100%)',
        'linear-yellow':
          'linear-gradient(180deg, #FFDB0D -28.26%, #FFA332 53.48%, #B77D00 130.12%)',
        'linear-green':
          'linear-gradient(270.23deg, #00A843 0.19%, #1FD071 99.8%)',
        'linear-red': 'linear-gradient(315deg, #F5317F 0%, #FF7C6E 100%)',
        'linear-footer': 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(248,249,254,1) 0%, rgba(242,242,242,1) 100%)'
      },
      borderRadius: {
        'md': '5px',
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      rotate: {
        '65': '65deg',
      },
      animation: {
        open: 'open 0.4s ease-in-out',
      },
      keyframes: {
        closed: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        open: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
  plugins: [],
}
