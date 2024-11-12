import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "blue-violet": "#5825C1",
        violet: "#9914C1",
        "blue-violet-claire": "#847DD3",
        pink: "#E58FFF",
        "gray-pink": "#DED0EB",
        "white-pink": "#F5F5FF",
        "gray-black": "#0f0f0f",
      },
      fontFamily: {
        sora: '"Sora", sans-serif',
        Quicksand: "'Quicksand', sans-serif",
      },
    },
  },
  plugins: [],
};
export default config;
