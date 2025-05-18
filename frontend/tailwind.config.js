/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(225, 25%, 7%)',
        foreground: 'hsl(210, 25%, 98%)',
        card: 'hsl(225, 25%, 9%)',
        'card-foreground': 'hsl(210, 25%, 98%)',
        popover: 'hsl(225, 45%, 8%)',
        'popover-foreground': 'hsl(210, 25%, 98%)',
        primary: 'hsl(230, 60%, 60%)',
        'primary-foreground': 'hsl(210, 25%, 98%)',
        secondary: 'hsl(240, 15%, 16%)',
        'secondary-foreground': 'hsl(210, 25%, 98%)',
        muted: 'hsl(240, 10%, 20%)',
        'muted-foreground': 'hsl(240, 5%, 65%)',
        accent: 'hsl(240, 10%, 20%)',
        'accent-foreground': 'hsl(210, 25%, 98%)',
        destructive: 'hsl(0, 70%, 50%)',
        'destructive-foreground': 'hsl(210, 25%, 98%)',
        border: 'hsl(240, 10%, 20%)',
        input: 'hsl(240, 10%, 20%)',
        ring: 'hsl(230, 60%, 60%)',

        // Neon gradient support
        'neon-blue': '#33c3f0',
        'neon-purple': '#a855f7',
        neon: {
          blue: '#33C3F0',
          cyan: '#1EAEDB',
          purple: '#8B5CF6',
          pink: '#D946EF',
          orange: '#F97316',
        }
      },
      borderRadius: {
        lg: '0.75rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        blurIn: {
          '0%': {
            filter: 'blur(10px)',
            opacity: '0',
            transform: 'scale(0.98)',
          },
          '100%': {
            filter: 'blur(0)',
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        blurIn: 'blurIn 1s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
