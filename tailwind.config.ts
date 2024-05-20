import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'text-gradient': 'text-gradient 3s linear infinite',
        'text-shake': 'text-shake 1s ease 1',
      },
      keyframes: {
        'text-gradient': {
          to: {
            backgroundPosition: '200% center',
          },
        },
        'text-shake': {
          '15%': {
            transform: 'translateX(5px)',
          },
          '30%': {
            transform: 'translateX(-5px)',
          },
          '50%': {
            transform: 'translateX(3px)',
          },
          '80%': {
            transform: 'translateX(2px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
      fontFamily: {
        inter: 'var(--font-inter)',
      },
    },
  },
  plugins: [],
}
export default config
