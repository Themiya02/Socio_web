import { useState } from "react";
import InputField from "../ui/InputField";
import Button from "../common/Button";
import IconButton from "../common/IconButton";

export default function LoginForm({ onSwitchToSignup }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted:", formData);
  };

  return (
    <div className="p-5 sm:p-7 bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Title & Subtitle */}
      <div className="text-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Welcome back
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Sign in to continue shopping
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Email Address"
          type="email"
          name="email"
          placeholder="name@company.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Remember me & Forgot password Row */}
        <div className="flex items-center justify-between gap-2 pt-0.5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-xs text-slate-600 dark:text-slate-400">
              Remember me
            </span>
          </label>

          <a
            href="#"
            className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* Sign In Button */}
        <div className="pt-1">
          <Button type="submit">Sign In</Button>
        </div>
      </form>

      {/* OR Divider */}
      <div className="flex items-center gap-3 my-5">
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        <span className="text-[11px] font-medium text-slate-400 uppercase">OR</span>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
      </div>

      {/* Continue with Google Button */}
      <IconButton
        label="Continue with Google"
        onClick={() => console.log("Continue with Google Clicked")}
      />

      {/* Footer Link */}
      <p className="text-center text-xs text-slate-600 dark:text-slate-400 mt-5">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToSignup}
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}