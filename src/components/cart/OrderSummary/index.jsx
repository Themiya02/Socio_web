import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../../common/Button";

export default function OrderSummary({
  subtotal,
  shipping,
  discount,
  total,
  itemCount,
  onCheckout,
}) {
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [termsError, setTermsError] = useState(false);

  const handleProceed = () => {
    if (!agreedTerms) {
      setTermsError(true);
      return;
    }
    setTermsError(false);
    onCheckout();
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm flex flex-col justify-between h-full">
      <div>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 text-center mb-5">
          Order Summary
        </h3>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="flex items-center justify-between text-slate-600">
            <span>Subtotal</span>
            <span className="font-semibold text-slate-900">
              Rs. {subtotal.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between text-slate-600">
            <span>Shipping</span>
            <span className="font-semibold text-slate-900">
              {shipping === 0 ? "FREE" : `Rs. ${shipping.toLocaleString()}`}
            </span>
          </div>

          <div className="flex items-center justify-between text-slate-600">
            <span>Discount</span>
            <span className="font-semibold text-slate-900">
              {discount > 0
                ? `- Rs. ${discount.toLocaleString()}`
                : "Rs. 0.00"}
            </span>
          </div>
        </div>

        <div className="my-4 border-t border-slate-100" />

        <div className="flex items-baseline justify-between">
          <span className="text-sm sm:text-base font-bold text-slate-900">
            Total
          </span>
          <span className="text-xl sm:text-2xl font-extrabold text-blue-600">
            Rs. {total.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={agreedTerms}
            onChange={(e) => {
              setAgreedTerms(e.target.checked);
              if (e.target.checked) setTermsError(false);
            }}
            className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <span className="text-[11px] sm:text-xs text-slate-600 leading-snug">
            I agree with the{" "}
            <a href="#footer" className="text-blue-600 hover:underline">
              terms and conditions
            </a>
          </span>
        </label>

        {termsError && (
          <p className="text-[11px] text-rose-500 font-medium">
            Please accept the terms and conditions to continue.
          </p>
        )}

        <Button
          type="button"
          disabled={itemCount === 0}
          onClick={handleProceed}
          className="flex items-center justify-center gap-2 !rounded-xl !py-2.5 text-sm"
        >
          <span>Proceed To Checkout</span>
          <ArrowRight size={16} />
        </Button>

        <p className="text-[11px] text-center text-slate-500">
          Taxes and{" "}
          <span className="text-blue-600">shipping</span> calculated at checkout
        </p>
      </div>
    </div>
  );
}