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
        sans: ['var(--font-roboto)', 'sans-serif'], 
        
        manrope: ['var(--font-manrope)', 'sans-serif'],
        
        monument: ['var(--font-monument)', 'sans-serif'], 
        
      },
      
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require('tailwindcss-animated')],
}
export default config