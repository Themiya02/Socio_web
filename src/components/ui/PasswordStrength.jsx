export default function PasswordStrength({ password = "" }) {
  // Password length  strength level  (0 to 3 )
  const getStrength = () => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 6) score++;
    if (password.length >= 8 && /[A-Z0-9]/.test(password)) score++;
    if (password.length >= 10 && /[^A-Za-z0-9]/.test(password)) score++;
    return score || 1;
  };

  const strength = getStrength();

  const getColor = (index) => {
    if (index >= strength) return "bg-slate-200 dark:bg-slate-700";
    if (strength === 1) return "bg-red-500";
    if (strength === 2) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="flex gap-1.5 mt-1">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`h-1 flex-1 rounded-full transition-colors duration-300 ${getColor(index)}`}
        />
      ))}
    </div>
  );
}