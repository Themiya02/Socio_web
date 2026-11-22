import { useState } from "react";
import InputField from "../ui/InputField";
import Button from "../common/Button";
import IconButton from "../common/IconButton";
import { validateLoginField, validateLoginForm } from "../../utils/validation";

export default function LoginForm({ onSwitchToSignup, onForgotPassword }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateLoginField(name, fieldValue),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateLoginField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateLoginForm(formData);
    setErrors(validationErrors);
    setTouched({ email: true, password: true });

    if (Object.keys(validationErrors).length > 0) return;

    console.log("Valid Login Submitted:", formData);
  };

  return (
    <div className="p-5 sm:p-6  bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Title & Subtitle */}
      <div className="text-center mb-4 sm:mb-5">
        <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          Welcome back
        </h1>
        <p className="text-x text-slate-500 dark:text-slate-200 mt-1">
          Sign in to continue shopping
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-3">
        <InputField
          label="Email Address"
          type="email"
          name="email"
          placeholder="name@company.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          required
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          required
        />

        {/* Remember me & Forgot password Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-xs text-slate-600 dark:text-slate-200">
              Remember me
            </span>
          </label>

          <button
              type="button"
              onClick={onForgotPassword}
               className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
>
            Forgot password?
          </button>
          
        </div>

        <div className="pt-1">
          <Button type="submit">Sign In</Button>
        </div>
      </form>

      {/* OR Divider */}
      <div className="flex items-center gap-3 my-3.5">
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        <span className="text-[11px] font-medium text-slate-400 dark:text-slate-200 uppercase">
          OR
        </span>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
      </div>

      {/* Continue with Google Button */}
      <IconButton
        label="Continue with Google"
        onClick={() => console.log("Continue with Google Clicked")}
      />

      {/* Footer Link */}
      <p className="text-center text-xs text-slate-600 dark:text-slate-200 mt-4">
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