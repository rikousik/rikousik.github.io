import type { Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       background: "var(--background)",
  //       foreground: "var(--foreground)",
  //     },
  //   },
  // },
  darkMode: ["class"],
  prefix: "",
  theme:{
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config;
