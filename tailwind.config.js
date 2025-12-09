/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        "bg-primary": "#060a1f",
        "bg-secondary": "#040e2e",
        "bg-tertiary": "#07153c",
        "bg-quaternary": "#171f49",
        "bg-brand": "#dd522d",
        "stroke-primary": "#0a2572",
        "stroke-secondary": "#1c2559",
        "text-primary": "#ffffff",
        "text-secondary": "#ced3e3",
        "text-tertiary": "#cdcdcd",
        "text-quaternary": "#848b9e",
      },
      fontSize: {
        "title-hero": "60px",
        "title-page": "42px",
        subtitle: "32px",
        heading: "24px",
        subheading: "20px",
        "body-large": "20px",
        "body-base": "18px",
        "body-small": "16px",
        "body-xl": "24px",
        "body-xs": "14px",
      },
      spacing: {
        "spacing-lg": "120px",
        "spacing-md": "80px",
        "spacing-sm": "20px",
      },
    },
  },
  plugins: [],
};
