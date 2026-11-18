import { useState } from "react";
import InputField from "../ui/InputField";
import PasswordStrength from "../ui/PasswordStrength";
import Button from "../ui/Button";
import SocialButton from "./SocialButton";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.agreeTerms) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Title & Subtitle */}
      <div className="text-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Create Your Account
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Join the community for exclusive tech deals
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Responsive Row: Mobile වලදී 1 col, Tablet/Desktop වලදී 2 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <InputField
            label="First Name"
            name="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <InputField
            label="Last Name"
            name="lastName"
            placeholder="Perera"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <InputField
          label="Phone Number"
          type="tel"
          name="phone"
          placeholder="+94 77 123 4567"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <InputField
          label="Email Address"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div>
          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="Min. 8 characters"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <PasswordStrength password={formData.password} />
        </div>

        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Re-enter your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {/* Terms Checkbox */}
        <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-xs text-slate-600 dark:text-slate-400 leading-tight">
            I agree to the{" "}
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Privacy Policy
            </a>
          </span>
        </label>

        {/* Create Account Button */}
        <div className="pt-1">
          <Button type="submit">Create Account</Button>
        </div>
      </form>

      {/* OR Divider */}
      <div className="flex items-center gap-3 my-4">
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        <span className="text-[11px] font-medium text-slate-400 uppercase">OR</span>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
      </div>

      {/* Google Signup */}
      <SocialButton onClick={() => console.log("Google Sign Up Clicked")} />

      {/* Footer Link */}
      <p className="text-center text-xs text-slate-600 dark:text-slate-400 mt-5">
        Already have an account?{" "}
        <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
          Sign In
        </a>
      </p>
    </div>
  );
}