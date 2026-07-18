/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Ajuste de acordo com a estrutura do seu projeto
  ],
  theme: {
    extend: {
      fontFamily: {
        // Poppins como padrão sans-serif para display e corpo
        sans: ['Poppins', 'sans-serif'],
        // Lora como a opção serif para os acentos
        serif: ['Lora', 'serif'],
      },
      letterSpacing: {
        // Mapeando os trackings amplos solicitados
        'wide-label': '0.2em',
        'wide-cta': '0.25em',
      }
    },
  },
  plugins: [],
}