import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle Dark Mode"
      className="absolute top-3.5 right-4 sm:top-6 sm:right-6 z-50 flex items-center w-14 h-7 p-1 rounded-full bg-white/90 dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
    >
      <div
        className={`flex items-center justify-center w-5 h-5 rounded-full bg-slate-900 dark:bg-blue-500 text-white transform transition-transform duration-300 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? <Moon size={12} /> : <Sun size={12} />}
      </div>
    </button>
  );
}