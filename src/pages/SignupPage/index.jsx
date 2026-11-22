import bgTech from "../../assets/images/bg-tech.jpg";
import { useDarkMode } from "../../hooks/useDarkMode";
import ThemeToggle from "../../components/ui/ThemeToggle";
import AuthCardHeader from "../../components/auth/AuthCardHeader";
import SignupForm from "../../components/auth/SignupForm";

export default function SignupPage({ onSwitchToLogin }) {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center pt-14 pb-6 px-4 sm:p-6 md:p-8"
      style={{ backgroundImage: `url(${bgTech})` }}
    >
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />
      <ThemeToggle isDark={isDark} onToggle={toggleDarkMode} />

      <main className="relative z-10 my-auto w-full max-w-[360px] sm:max-w-[390px] md:max-w-[400px] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-slate-800">
        <AuthCardHeader />
        <SignupForm onSwitchToLogin={onSwitchToLogin} />
      </main>
    </div>
  );
}