const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        ...defaultTheme.spacing,
        100: '25rem',
        108: '27rem',
        112: '29rem',
        116: '31rem',
      },
      maxHeight: {
        ...defaultTheme.spacing,
        100: '25rem',
        108: '27rem',
        112: '29rem',
        116: '31rem',
      },
      minWidth: {
        ...defaultTheme.spacing,
        100: '25rem',
        108: '27rem',
        112: '29rem',
        116: '31rem',
      },
      minHeight: {
        ...defaultTheme.spacing,
        100: '25rem',
        108: '27rem',
        112: '29rem',
        116: '31rem',
      },
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: [
        'Atkinson Hyperlegible',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  plugins: [],
}
