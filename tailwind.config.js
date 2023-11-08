/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dashboard_bg: "#E7ECEF",
        dashboard_text: "#8492A6",
        dashboard_primary: "#C0CCDD",
        dashboard_stats: "#303133",
        dashboard_gray: "#6B7280",
        dashboard_offwhite: "#FCFCFC",
      },
    },
  },
  plugins: [],
}

