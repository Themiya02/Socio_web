import bgTech from "../../assets/images/bg-tech.jpg";
import { useDarkMode } from "../../hooks/useDarkMode";
import ThemeToggle from "../../components/ui/ThemeToggle";
import AuthCardHeader from "../../components/auth/AuthCardHeader";
import LoginForm from "../../components/auth/LoginForm";

export default function LoginPage({ onSwitchToSignup }) {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center pt-14 pb-6 px-4 sm:p-6 md:p-8"
      style={{ backgroundImage: `url(${bgTech})` }}
    >
      <div className="absolute inset-0 bg-white/10 dark:bg-slate-950/75 transition-colors duration-300 pointer-events-none" />
      <ThemeToggle isDark={isDark} onToggle={toggleDarkMode} />

      <main className="relative z-10 my-auto w-full max-w-[400px] sm:max-w-[440px] lg:max-w-[460px] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-slate-800">
        <AuthCardHeader />
        <LoginForm onSwitchToSignup={onSwitchToSignup} />
      </main>
    </div>
  );
}