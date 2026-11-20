export default function Button({ children, type = "button", onClick, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-medium text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}