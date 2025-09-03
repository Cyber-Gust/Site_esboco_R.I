/** @type {import('tailwindcss').Config} */
module.exports = {
  // Corrigimos os caminhos para remover o "src/"
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0D6EFD',
        'brand-secondary': '#6C757D',
        'brand-accent': '#198754',
        'brand-background': '#FFFFFF',
        'brand-text': '#212529',
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
};
