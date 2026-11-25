import { useEffect, useState } from "react";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import InputField from "../../ui/InputField";
import Button from "../../common/Button";
import { validateLoginField } from "../../../utils/validation";

export default function ForgotPasswordModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Modal  open/close  old states clea + Escape key  close 
  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setError("");
      setTouched(false);
      setIsSent(false);
      return;
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    if (touched) {
      setError(validateLoginField("email", val));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validateLoginField("email", email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validateLoginField("email", email);
    setTouched(true);
    setError(emailError);

    if (emailError) return;

    console.log("Reset link requested for:", email);
    setIsSent(true);
  };

  // Card  blur area  click  close 
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="forgot-password-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/45 dark:bg-black/65 backdrop-blur-sm transition-opacity"
    >
      {/* Cute Modal Card (Login/Signup cards  size ) */}
      <div className="w-full max-w-[360px] sm:max-w-[390px] md:max-w-[400px] bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/70 dark:border-slate-800 p-5 sm:p-6 transition-colors duration-300">
        {/* Title & Subtitle */}
        <div className="mb-4 sm:mb-5">
          <h2
            id="forgot-password-title"
            className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white"
          >
            Forgot Password?
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-200 mt-1.5 leading-relaxed">
            No worries! Enter your registered email address and we will send you a reset link.
          </p>
        </div>

        {/* Success State vs Form */}
        {isSent ? (
          <div className="p-3.5 rounded-xl bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 flex items-start gap-2.5 mb-4">
            <CheckCircle2
              size={18}
              className="text-green-600 dark:text-green-400 shrink-0 mt-0.5"
            />
            <p className="text-xs text-green-800 dark:text-green-200 leading-relaxed">
              We have sent a password reset link to{" "}
              <span className="font-semibold">{email}</span>. Please check your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <InputField
              label="Email Address"
              type="email"
              name="resetEmail"
              placeholder="you@example.com"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={error}
              leftIcon={<Mail size={16} />}
              required
            />

            <Button type="submit">Send Reset Link</Button>
          </form>
        )}

        {/* Back to Login Link */}
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-200 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Back to Login</span>
          </button>
        </div>
      </div>
    </div>
  );
}