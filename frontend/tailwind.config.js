/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can extend the theme here if needed
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'), // Add DaisyUI plugin
  ],
  daisyui: {
    // Optional: DaisyUI configuration options
    themes: ['light', 'dark', 'cupcake'], // Example themes
    darkTheme: 'dark', // Default dark theme
  },
}
