/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/Project2/*.html"],
  safelist: [
    'w-[120px]', 'h-[120px]', 'border-2', 'border-black', 
    'rounded-md', 'shadow-lg', 'flex', 'items-center', 
    'justify-center', 'bg-white'
  ],
  theme: {
    extend: {
  },
  plugins: [],
}
}

