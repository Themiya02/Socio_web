export default function Button({
  children,
  type = "button",
  onClick,
  variant = "primary",
  fullWidth = true,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium text-sm rounded-xl transition-all active:scale-[0.99] cursor-pointer";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 py-2.5 sm:py-3 px-4",
    outline:
      "bg-white hover:bg-blue-50 text-blue-600 border border-blue-600 py-2 px-3",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${
        fullWidth ? "w-full" : "w-auto"
      } ${className}`}
    >
      {children}
    </button>
  );
}