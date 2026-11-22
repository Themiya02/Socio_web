import { useState } from "react";
import InputField from "../ui/InputField";
import PasswordStrength from "../ui/PasswordStrength";
import Button from "../common/Button";
import IconButton from "../common/IconButton";
import { validateSignupField, validateSignupForm } from "../../utils/validation";

export default function SignupForm({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    const updatedData = {
      ...formData,
      [name]: fieldValue,
    };
    setFormData(updatedData);

    //  live validate
    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateSignupField(name, fieldValue, updatedData),
      }));
    }

    // Password  Confirm Password  match 
    if (name === "password" && touched.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: validateSignupField(
          "confirmPassword",
          updatedData.confirmPassword,
          updatedData
        ),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateSignupField(name, fieldValue, formData),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateSignupForm(formData);
    setErrors(validationErrors);
    setTouched({
      firstName: true,
      lastName: true,
      phone: true,
      email: true,
      password: true,
      confirmPassword: true,
      agreeTerms: true,
    });

    if (Object.keys(validationErrors).length > 0) return;

    console.log("Valid Signup Submitted:", formData);
  };

  return (
    <div className="p-5 sm:p-6  bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Title & Subtitle */}
      <div className="text-center mb-6">
        <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          Create Your Account
        </h1>
        <p className="text-x text-slate-500 dark:text-slate-200 mt-1">
          Join the community for exclusive tech deals
        </p>
      </div>

      {/* Form (noValidate browser bubbles not comming ) */}
      <form onSubmit={handleSubmit} noValidate className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-3">
          <InputField
            label="First Name"
            name="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.firstName}
            required
          />
          <InputField
            label="Last Name"
            name="lastName"
            placeholder="Perera"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.lastName}
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
          onBlur={handleBlur}
          error={errors.phone}
          required
        />

        <InputField
          label="Email Address"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
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
            onBlur={handleBlur}
            error={errors.password}
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
          onBlur={handleBlur}
          error={errors.confirmPassword}
          required
        />

        {/* Terms Checkbox + Inline Error */}
        <div>
          <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-xs text-slate-600 dark:text-slate-200 leading-tight">
              I agree to the{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.agreeTerms && (
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">
              {errors.agreeTerms}
            </p>
          )}
        </div>

        <div className="pt-1">
          <Button type="submit">Create Account</Button>
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

      {/* Google Signup */}
      <IconButton
        label="Sign up with Google"
        onClick={() => console.log("Google Sign Up Clicked")}
      />

      {/* Footer Link */}
      <p className="text-center text-xs text-slate-600 dark:text-slate-200 mt-4">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer"
        >
          Sign In
        </button>
      </p>
    </div>
  );
}