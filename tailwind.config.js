/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        imageDesktop: "url('./src/assets/image-michael-jordan-desktop.png')",
        imageTablet: "url('./src/assets/image-michael-jordan-tablet.png')",
        imageMobile: "url('./src/assets/image-michael-jordan-mobile.png')",
      },
    },
  },
  plugins: [],
}
