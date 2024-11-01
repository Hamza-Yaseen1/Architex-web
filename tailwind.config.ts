import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGray: "#FBFBFB", 
        'custom-light-blue': '#ccd6df',
      },
      height: {
        custom435: "435px", // Custom height added here
      },
    },
  },
  plugins: [],
};
export default config;
