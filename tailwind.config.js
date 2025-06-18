/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'storehub': {
          'orange': '#FA8C16',
          'orange-hover': '#FFA940',
          'blue': '#1890FF',
          'blue-hover': '#40A9FF',
          'bg-light': '#F6F7FB',
          'bg-white': '#FFFFFF',
          'text-dark': '#1A1A1A',
          'text-gray': '#666666',
          'text-light': '#999999',
          'gray-dark': '#3D3D3D',
          'gray-medium': '#808080',
          'gray-light': '#E6E6E6',
          'success': '#52C41A',
          'error': '#FF4D4F',
          'warning': '#FAAD14',
        }
      },
      fontFamily: {
        'storehub': ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        'storehub-xl': ['1.75rem', '1.3'],    // 28px
        'storehub-lg': ['1.25rem', '1.4'],    // 20px
        'storehub-base': ['0.875rem', '1.5'], // 14px
        'storehub-sm': ['0.75rem', '1.3'],    // 12px
      },
      spacing: {
        'storehub-xs': '0.25rem',  // 4px
        'storehub-sm': '0.5rem',   // 8px
        'storehub-md': '1rem',     // 16px
        'storehub-lg': '1.5rem',   // 24px
        'storehub-xl': '2rem',     // 32px
        'storehub-xxl': '3rem',    // 48px
      },
      borderRadius: {
        'storehub': '6px',
      },
      boxShadow: {
        'storehub-card': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'storehub-subtle': '0 2px 4px rgba(0, 0, 0, 0.05)',
      },
      screens: {
        'mobile': '768px',
        'tablet': '1024px',
      }
    },
  },
  plugins: [],
} 