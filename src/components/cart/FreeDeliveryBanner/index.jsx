import { Truck, CheckCircle2 } from "lucide-react";

export default function FreeDeliveryBanner({
  subtotal,
  threshold = 15000,
}) {
  const remaining = Math.max(0, threshold - subtotal);
  const progress = Math.min(100, Math.round((subtotal / threshold) * 100));
  const isUnlocked = remaining === 0 && subtotal > 0;

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
      <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 mb-3">
        {isUnlocked ? (
          <>
            <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
            <span>
              You&apos;ve unlocked{" "}
              <strong className="text-emerald-600">FREE Islandwide Delivery!</strong>
            </span>
          </>
        ) : (
          <>
            <Truck size={16} className="text-blue-600 shrink-0" />
            <span>
              Add{" "}
              <strong className="text-blue-600">
                Rs. {remaining.toLocaleString()}
              </strong>{" "}
              more for FREE delivery!
            </span>
          </>
        )}
      </div>

      <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            isUnlocked ? "bg-emerald-500" : "bg-blue-600"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}