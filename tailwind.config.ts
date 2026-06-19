import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          50: "#eef4fb",
          100: "#d7e7f8",
          200: "#b0cff0",
          300: "#82b1e6",
          400: "#4f8ed8",
          500: "#2d69c1",
          600: "#1f4c98",
          700: "#1c3c78",
          800: "#1a335e",
          900: "#15284b"
        },
        brandRed: {
          50: "#fce9e9",
          100: "#f8c8c8",
          200: "#f29fa0",
          300: "#ea7571",
          400: "#e54f49",
          500: "#d6372f",
          600: "#ad2f27",
          700: "#8b2822",
          800: "#6f211c",
          900: "#581b17"
        }
      }
    }
  },
  plugins: []
};

export default config;
