/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    screens: {
      phone: "375px",
      "phone-lg": "425px",
      tablet: "768px",
      laptop: "1024px",
      "laptop-lg": "1440px",
      desktop: "1728px",
    },
    padding: {
      200: "200px",
      100: "100px",
      64: "64px",
      48: "48px",
      24: "24px",
      20: "20px",
      16: "16px",
      8: "8px",
    },
    gap: {
      100: "100px",
      64: "64px",
      48: "48px",
      24: "24px",
      16: "16px",
      8: "8px",
    },

    borderRadius: {
      none: "0",
      button: "100px",
      card: "15px",
    },
    fontSize: {
      title: [
        "48px",
        {
          lineHeight: "1.24",
          letterSpacing: "auto",
          fontWeight: "800",
        },
      ],
      "title-tablet": [
        "45px",
        {
          lineHeight: "1.24",
          letterSpacing: "auto",
          fontWeight: "700",
        },
      ],
      "title-phone": [
        "40px",
        {
          lineHeight: "1.24",
          letterSpacing: "auto",
          fontWeight: "700",
        },
      ],

      "tools-card": [
        "32px",
        {
          lineHeight: "normal",
          letterSpacing: "auto",
          fontWeight: "600",
        },
      ],
      "heading-study": [
        "22px",
        {
          lineHeight: "27px",
          letterSpacing: "auto",
          fontWeight: "700",
        },
      ],
      "heading-study-sm": [
        "18px",
        {
          lineHeight: "19px",
          letterSpacing: "auto",
          fontWeight: "700",
        },
      ],
      "body-study": [
        "16px",
        {
          lineHeight: "1.5",
          letterSpacing: "auto",
          fontWeight: "500",
        },
      ],
      category: [
        "12px",
        {
          lineHeight: "24px",
          letterSpacing: "0.56px",
          fontWeight: "500",
        },
      ],
      "body-desktop": [
        "18px",
        {
          lineHeight: "2",
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
      body: [
        "18px",
        {
          lineHeight: "1.5",
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
      "body-tab": [
        "16",
        {
          lineHeight: "2",
          letterSpacing: "0",
          fontWeight: "600",
        },
      ],
      button: [
        "14px",
        {
          lineHeight: "1",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      "card-category": [
        "16px",
        {
          lineHeight: "1.43",
          letterSpacing: "0px",
          fontWeight: "500",
        },
      ],
      card: [
        "24px",
        {
          lineHeight: "1",
          letterSpacing: "0px",
          fontWeight: "800",
        },
      ],
      "case-study-card": [
        "24px",
        {
          lineHeight: "1.40",
          letterSpacing: "0px",
          fontWeight: "800",
        },
      ],
      "study-nav-heading": [
        '16px',
        {
          lineHeight: 1.7,
          letterSpacing: 0,
          fontWeight: '700',
        }
      ],
      "study-nav-body": [
        '14px',
        {
          letterSpacing: 0,
          fontWeight: '500',
        }
      ],
    },
    extend: {
      colors: {
        // primary: {
        //   100: "#EFE0F4",
        //   200: "#E2C7EB",
        //   300: "#D4ACE2",
        //   400: "#C950F2",
        //   500: "#9A34BB",
        //   600: "#8207AB",
        //   700: "#5D057A",
        //   800: "#430458",
        //   900: "#2D033B",
        // },
        primary: {
          100: "#FDDDEB",
          200: "#FBBDDD",
          300: "#F399D0",
          400: "#E77CC7",
          500: "#D753BD",
          600: "#B83CAC",
          700: "#9A299A",
          800: "#741A7C",
          900: "#570F67",
        },
        heading: "#570F67",
        "body-text": "#7A7A7D",
        "background-white": "#FCFDFC",
        "background-gray": "#F8F7F7",
      },
      boxShadow: {
        // card: "9px 11px 0px rgba(201, 86, 241, 0.25);",
        card: "9px 11px 0px 0px rgba(312, 62, 58, 0.25)",
        "side-bar": "0px 0px 23px 0px rgba(192, 129, 193, 0.15)",
      },
      height: {
        button: "45px",
      },
      backgroundImage: {
        vcg: "url('/images/case-studies/thumbnails/header-bg-vcg.png')",
      },
    },
  },
  plugins: [],
};
