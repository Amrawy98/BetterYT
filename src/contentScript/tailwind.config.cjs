/** @type {import('tailwindcss').Config} */
module.exports = {
  important: "#playlist-better-yt",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "youtube-font": "#AAA",
      },
    },
  },
  plugins: [],
};
