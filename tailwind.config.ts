import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#222529',
        'custom-white': '#fff00'
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require('tailwindcss-animated')],
}
export default config
