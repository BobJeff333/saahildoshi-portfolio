import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#101416',
        surface: '#181E21',
        accentneongreen: '#D39A5C',
        'primary-foreground': '#F0EEE8',
        ink: '#101416',
        paper: '#F0EEE8',
        muted: '#9DA5A7',
        line: '#30383B',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        glow: '0 14px 40px rgba(0, 0, 0, 0.22)',
      },
    },
  },
  plugins: [],
};

export default config;
