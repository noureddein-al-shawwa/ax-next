import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      screens: {
        xsz: '280px',
        xss: '320px',
        xsa: '345px',
        xs: '480px',
        sss: '463px',
        ss: '620px',
        sm: '768px',
        hsm: '786px',
        mmd: '684px',
        lmd: '840px',
        md: '1060px',
        hmd: '1100px',
        lg: '1200px',
        hlg: '1500px',
        xl: '1700px',
        uxl: '2700px',
        ugxl: '3500px',
      }
    },
  },
  plugins: [],
} satisfies Config;
