/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "delft-blue": "#293B57",
        "fern-green": "#588157",
        "seal-brown": "#512500",
        sage: "#A3B18A",
        timberwolf: "#DAD7CD",
      },
    },
  },
  plugins: [],
};
