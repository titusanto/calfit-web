/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cal AI Base Colors
        background: '#E8E8E8',
        surface: '#FFFFFF',
        'surface-secondary': '#F5F5F5',
        
        // Text Colors
        'text-primary': '#1A1A1A',
        'text-secondary': '#737373',
        'text-tertiary': '#A3A3A3',
        
        // Cal Fit Gamification Colors
        'streak-orange': '#F97316',
        'level-gold': '#FCD34D',
        'xp-purple': '#A855F7',
        
        // Task Status
        'task-complete': '#22C55E',
        'task-incomplete': '#E5E5E5',
        'task-warning': '#F59E0B',
        'task-failed': '#EF4444',
        
        // Macros
        protein: '#EF4444',
        carbs: '#F59E0B',
        fats: '#3B82F6',
        water: '#06B6D4',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'cal': '24px',
      },
      boxShadow: {
        'cal-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'cal-md': '0 2px 8px 0 rgba(0, 0, 0, 0.08)',
        'cal-lg': '0 8px 16px 0 rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
