// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn-primary": {
          backgroundColor: "#777",
          padding: "0.25rem 0.75rem",
          border: "1px solid #4B5563", // gray-600 color
          borderRadius: "0.375rem", // rounded-md
          transition: "all 0.2s",
          "&:hover": {
            backgroundColor: "#666",
          },
        },
      });
    },
  ],
};
