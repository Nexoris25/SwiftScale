import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#212121',
        'custom-white': '#FFFFFF',
        'primary': '#6A01E1',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        serif: ['Merriweather', 'serif'],
        monument: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'monument-regular': '400',
        'monument-bold': '700',
        'monument-ultrabold': '800',
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require('tailwindcss-animated')],
}
export default config
