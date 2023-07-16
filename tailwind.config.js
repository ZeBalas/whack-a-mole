/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wam': "url('/assets/WAM_bg.jpg')",
      },
      backgroundSize: {
        "wam": "cover"
      },
      backgroundRepeat: {
        "wam": "no-repeat"
      },
      cursor: {
        'mallet': "url('/assets/WAM_Hammer.png'), default",
      },
    }
  },
  plugins: [],
}
