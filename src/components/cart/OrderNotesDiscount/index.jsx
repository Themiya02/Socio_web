import { useState } from "react";

export default function OrderNotesDiscount({
  orderNote,
  onOrderNoteChange,
  onApplyPromo,
  appliedPromo,
}) {
  const [promoCode, setPromoCode] = useState("");
  const [promoFeedback, setPromoFeedback] = useState("");

  const handleApply = (e) => {
    e.preventDefault();
    const cleaned = promoCode.trim().toUpperCase();
    if (!cleaned) {
      setPromoFeedback("Please enter a discount code.");
      return;
    }

    const success = onApplyPromo(cleaned);
    if (success) {
      setPromoFeedback(`Code "${cleaned}" applied!`);
    } else {
      setPromoFeedback("Invalid code. Try SOCIO10 for 10% off.");
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-6 shadow-sm flex flex-col justify-between h-full">
      {/* Order Instructions */}
      <div>
        <textarea
          rows={4}
          value={orderNote}
          onChange={(e) => onOrderNoteChange(e.target.value)}
          placeholder="Order special instructions"
          className="w-full rounded-xl border border-slate-200 bg-white p-3.5 text-base sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 resize-none"
        />
      </div>

      <div className="my-5 border-t border-slate-200/80" />

      {/* Discounts Input */}
      <div>
        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
          Discounts
        </h3>
        <form
          onSubmit={handleApply}
          className="flex flex-col sm:flex-row gap-2.5"
        >
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Promo code (e.g. SOCIO10)"
            className="flex-1 rounded-xl border border-slate-200 px-3.5 py-2.5 text-base sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white text-sm font-semibold transition-colors shrink-0 cursor-pointer"
          >
            Apply
          </button>
        </form>

        {promoFeedback && (
          <p
            className={`mt-2 text-xs font-medium ${
              appliedPromo ? "text-emerald-600" : "text-rose-500"
            }`}
          >
            {promoFeedback}
          </p>
        )}
      </div>
    </div>
  );
}