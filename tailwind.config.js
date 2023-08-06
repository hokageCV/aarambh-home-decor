/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Consolas", "Cascadia Code", "Menlo", "ui-monospace", "monospace"],
      },
      colors: {
        baseBG: "var(--baseBG)",
        primaryText: "var(--primaryText)",
        secondaryText: "var(--secondaryText)",
        cardBG: "var(--cardBG)",
        cardBorder: "var(--cardBorder)",
        btnBG: "var(--btnBG)",
        btnText: "var(--btnText)",
      }
    },
  },
  plugins: [],
}
