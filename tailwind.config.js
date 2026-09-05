/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{json,html}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background, #ffffff)',
        foreground: 'var(--color-foreground, #0f0f0f)',
        card: {
          DEFAULT: 'var(--color-card, #ffffff)',
          foreground: 'var(--color-card-foreground, #2e2e2e)',
        },
        popover: {
          DEFAULT: 'var(--color-popover, #ffffff)',
          foreground: 'var(--color-popover-foreground, #2e2e2e)',
        },
        primary: {
          DEFAULT: 'var(--color-primary, #920dff)',
          foreground: 'var(--color-primary-foreground, #ffffff)',
          hover: 'var(--color-primary-hover, #1b2841)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary, #ff6900)',
          foreground: 'var(--color-secondary-foreground, #ffffff)',
        },
        accent: {
          DEFAULT: 'var(--color-accent, #6a32ff)',
          foreground: 'var(--color-accent-foreground, #ffffff)',
          hover: 'var(--color-accent-hover, #1cc1ca)',
        },
        muted: {
          DEFAULT: 'var(--color-muted, #f9f9f9)',
          foreground: 'var(--color-muted-foreground, #737373)',
        },
        destructive: {
          DEFAULT: 'var(--color-destructive, #ef4343)',
        },
        border: 'var(--color-border, #e5e7eb)',
        input: 'var(--color-input, #dde0e9)',
        ring: 'var(--color-ring, #23d8e1)',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
