import googleIcon from "../../../assets/icons/google-icon.jpg";

export default function IconButton({
  onClick,
  label = "Continue with Google",
  icon = googleIcon,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center gap-2.5 text-sm font-medium text-slate-700 dark:text-white transition-all cursor-pointer"
    >
      <img src={icon} alt={label} className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
}