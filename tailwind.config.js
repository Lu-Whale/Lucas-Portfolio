/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        profile_animate: {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
            boxShadow: 'inset 0 0 9px rgba(255, 255, 255, 0.3)', // adjust as necessary
          },
          '50%': {
            borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%',
            boxShadow: 'inset 0 0 18px rgba(255, 255, 255, 0.3)', // adjust as necessary
          },
        },
      },
      animation: {
        'profile-animate': 'profile_animate 8s ease-in-out infinite',
      },
    },
    colors: {
      ...colors,
      primary: colors.sky,
      secondary: colors.pink,
    },
  },
  plugins: [],
};
