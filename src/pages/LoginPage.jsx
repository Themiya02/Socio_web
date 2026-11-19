import bgTech from "../assets/images/bg-tech.jpg"; // ඔයාගේ image path එක හරියට බලන්න
import { useDarkMode } from "../hooks/useDarkMode";
import ThemeToggle from "../components/ui/ThemeToggle";
import AuthHeader from "../components/auth/AuthHeader";
import LoginForm from "../components/auth/LoginForm";

export default function LoginPage({ onSwitchToSignup }) {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 sm:p-6 md:p-8"
      style={{ backgroundImage: `url(${bgTech})` }}
    >
      {/* Dark Mode Overlay */}
      <div className="absolute inset-0 bg-white/10 dark:bg-slate-950/75 transition-colors duration-300 pointer-events-none" />

      {/* Top-Right Theme Switch */}
      <ThemeToggle isDark={isDark} onToggle={toggleDarkMode} />

      {/* Center Login Card */}
      <main className="relative z-10 w-full max-w-[440px] rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-slate-800">
        <AuthHeader />
        <LoginForm onSwitchToSignup={onSwitchToSignup} />
      </main>
    </div>
  );
}