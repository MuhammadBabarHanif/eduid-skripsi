/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      
    },
    fontFamily: {
      'inter' : ['Inter', 'sans-serif'],
    },
    fontSize: {
      text_xs: ['12px', '18px'],
      text_sm: ['14px', '20px'],
      text_md: ['16px', '24px'],
      text_lg: ['18px', '28px'],
      text_xl: ['20px', '30px'],
      display_xs: ['24px', '32px'],
      display_sm: ['30px', '38px'],
      display_md: ['36px', '44px'],
      display_lg: ['48px', '60px'],
      display_xl: ['60px', '72px'],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    colors: {
      'text-base': '#101828',
      'text-darker': '#344054',
      'white': '#FFFFFF',
      'asphalt' : '#475467',
      'primary-900': '#42307D',
      'primary-700': '#6941C6',
      'primary-600': '#7F56D9',
      'primary-100': '#F2F4F7',
      'gray-50': '#F9FAFB',
      'gray-100': '#F2F4F7',
      'gray-200': '#EAECF0',
      'gray-300': '#D0D5DD',
      'gray-500': '#667085',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}