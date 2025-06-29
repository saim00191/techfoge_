import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
     screens: {
        xs: "375px",
        xsm: "420px",
        xms: "500px",
        smx: "570px",
        sm: "640px",
        sml: "690px",
        md: "768px",
        mdl: "820px",
        mdll: "900px",
        lg: "1024px",
        lgl: "1100px",
        lgll: "1190px",
        xl: "1250px",
        xxl: "1440px",
        "2xl": "1536px",
      },
  },
  plugins: [],
};
export default config;
