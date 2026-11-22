import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function InputField({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error = "",
  required = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        htmlFor={name}
        className="text-xs font-medium text-slate-700 dark:text-slate-100"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          aria-invalid={Boolean(error)}
          className={`w-full pl-3.5 pr-10 py-2.5 text-base sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-300 focus:outline-none focus:ring-2 transition-all ${
            error
              ? "border-red-500 dark:border-red-400 focus:ring-red-500/30 focus:border-red-500"
              : "border-slate-200 dark:border-slate-700 focus:ring-blue-500/40 focus:border-blue-500"
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-300 hover:text-slate-600 dark:hover:text-white cursor-pointer"
          >
            {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
          </button>
        )}
      </div>

      {error && (
        <p className="text-xs text-red-600 dark:text-red-400 mt-0.5">
          {error}
        </p>
      )}
    </div>
  );
}