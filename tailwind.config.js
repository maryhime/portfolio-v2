
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      'inter' : ['Inter', 'sans-serif'],
    },
    screens: {
      'phone': '375px',
      'phone-lg': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'laptop-lg': '1440px',
      'desktop': '1728px',
    },
    padding: {
      '200': '200px',
      '100': '100px',
      '64': '64px',
      '48': '48px',
      '24': '24px',
      '20': '20px',
      '16': '16px',
      '8': '8px',
    },
    gap: {
      '100': '100px',
      '64': '64px',
      '48': '48px',
      '24': '24px',
      '16': '16px',
      '8': '8px',
    },
   
    borderRadius: {
      'none': '0',
      'button': '10px',
      'card': '15px'
    },
    fontSize: {
      'title': ['40px', {
        lineHeight: '68px',
        letterSpacing: 'auto',
        fontWeight: '700',
      }],
      'title-tablet': ['50px', {
        lineHeight: 'normal',
        letterSpacing: 'auto',
        fontWeight: '700',
      }],
      'title-phone': ['40px', {
        lineHeight: 'normal',
        letterSpacing: 'auto',
        fontWeight: '700',
      }],

      'tools-card': ['32px', {
        lineHeight: 'normal',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'category': ['12px', {
        lineHeight: '24px',
        letterSpacing: '0.56px',
        fontWeight: '500',
      }],
      'body-desktop': ['18px', {
        lineHeight: '41px',
        letterSpacing: '0.64px',
        fontWeight: '400',
      }],
      'body': ['16px', {
        lineHeight: '27px',
        letterSpacing: '0.64px',
        fontWeight: '400',
      }],
      'body-tab': ['18', {
        lineHeight: 'normal',
        letterSpacing: '0.64px',
        fontWeight: '400',
      }],
      'button': ['14px', {
        lineHeight: '26px',
        letterSpacing: '0.46px',
        fontWeight: '700',
      }],
      'card-category': ['14px', {
        lineHeight: '24px',
        letterSpacing: '0.46px',
        fontWeight: '500',
      }],
      'card': ['24px', {
        lineHeight: '24px',
        letterSpacing: '0.46px',
        fontWeight: '700',
      }],

    },
    extend: {
      colors: {
        'primary': {
          '100': '#FBEBF6',
          '200': '#F8D7F0',
          '300': '#ECBDE5',
          '400': '#D9A3D6',
          '500': '#C081C1',
          '600': '#9E5EA5',
          '700': '#7D418A',
          '800': '#5C296F',
          '900': '#44185C',
        },
        'heading' : '#26273B',
        'body-text' : '#828292',
        'background-white' : '#FCFDFC',
        'background-gray' : '#F8F7F7',
      },
      boxShadow : {
        'card': '9px 11px 0px 0px rgba(192, 129, 193, 0.25)',
        'side-bar': '0px 0px 23px 0px rgba(192, 129, 193, 0.15)',
      },
      height: {
        'button': '45px',
      },
    },
  },
  plugins: [],
}

