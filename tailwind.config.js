
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      'phone' : '375px',
      'phone-lg' : '768px',
      'tablet' : '1024px',
      'laptop' : '1280px',
      'laptop-lg' : '1440px',
      'desktop' : '1728px',
    },
    padding : {
      '200' : '200px',
      '100' : '100px',
      '64' : '64px',
      '48' : '48px',
      '24' : '24px',
      '20' : '20px',
      '16' : '16px',
      '8' : '8px',
    },
    gap : {
      '100' : '100px',
      '64' : '64px',
      '48' : '48px',
      '24' : '24px',
      '16' : '16px',
      '8' : '8px',
    },
    height: {
      'button': '56px',
      'button-m' : '40px',
    },
    borderRadius: {
      'none': '0',
      'button': '30px',
      'card': '20px'
    },
    fontSize : {
      'h1' : ['120px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '700',
      }],
      'h2' : ['64px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'h3' : ['48px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'h4' : ['36px', {
        lineHeight: 'auto',
        letterSpacing: '9.18px',
        fontWeight: '600',
      }],
      'h5' : ['24px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '700',
      }],
      'body' : ['20px', {
        lineHeight: '1.5em',
        letterSpacing: 'auto',
        fontWeight: '400',
      }],
      'subheading' : ['20px', {
        lineHeight: 'auto',
        letterSpacing: '6.2px',
        fontWeight: 'normal',
      }],
      'tablet-h1' : ['75px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '700',
      }],
      'tablet-h2' : ['40px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'tablet-h3' : ['32px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'tablet-h4' : ['20px', {
        lineHeight: 'auto',
        letterSpacing: '5.1px',
        fontWeight: '600',
      }],
      'tablet-h5' : ['20px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '700',
      }],
      'tablet-subhead' : ['18px', {
        lineHeight: 'auto',
        letterSpacing: '5.58px',
        fontWeight: '600',
      }],
      'tablet-body' : ['16px', {
        lineHeight: '1.5em',
        letterSpacing: 'auto',
        fontWeight: 'normal',
      }],
      'phone-h1' : ['45px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '700',
      }],
      'phone-h2' : ['36px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'phone-h3' : ['32px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'phone-h4' : ['20px', {
        lineHeight: 'auto',
        letterSpacing: '5.1px',
        fontWeight: '600',
      }],
      'phone-h5' : ['20px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'phone-h6' : ['18px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '600',
      }],
      'phone-subhead' : ['14px', {
        lineHeight: 'normal',
        letterSpacing: '4.34px',
        fontWeight: '600',
      }],
      'phone-body' : ['16px', {
        lineHeight: '1.5em',
        fontWeight: '400',
      }],
      'btn-lg' : ['18px', {
        lineHeight: '26px',
        letterSpacing: '0.46px',
        fontWeight: '700',
      }],
      'btn-m' : ['14px', {
        lineHeight: '26px',
        letterSpacing: '0.46px',
        fontWeight: '700',
      }],
      'email' : ['16px', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '700',
        fontFamily : 'Courier New',
      }],
    },
    extend: {},
  },
  plugins: [],
}

