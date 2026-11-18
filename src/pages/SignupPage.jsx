import bgTech from "../assets/images/bg-tech.jpg";
import { useDarkMode } from "../hooks/useDarkMode";
import ThemeToggle from "../components/ui/ThemeToggle";
import AuthHeader from "../components/auth/AuthHeader";
import SignupForm from "../components/auth/SignupForm";

export default function SignupPage() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 sm:p-6 md:p-8"
      style={{ backgroundImage: `url(${bgTech})` }}
    >
      {/* Dark mode එකේදී background image එකට dark overlay එකක් */}
      <div className="absolute inset-0 bg-white/10 dark:bg-slate-950/75 transition-colors duration-300 pointer-events-none" />

      {/* Top-Right Dark/Light Switch */}
      <ThemeToggle isDark={isDark} onToggle={toggleDarkMode} />

      {/* Center Signup Card */}
      <main className="relative z-10 w-full max-w-[440px] rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-slate-800">
        <AuthHeader />
        <SignupForm />
      </main>
    </div>
  );
}