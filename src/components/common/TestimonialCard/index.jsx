import { Quote, Star, ShoppingBag, BadgeCheck } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="min-w-[290px] sm:min-w-[340px] lg:min-w-[380px] snap-start bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {/* Top Row: Quote Icon & 5.0 Star Pill */}
        <div className="flex items-center justify-between gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Quote size={18} className="fill-blue-600" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-100">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={12}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-800 ml-0.5">
              {testimonial.rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Review Text */}
        <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          &ldquo;{testimonial.comment}&rdquo;
        </p>
      </div>

      <div className="mt-5">
        {/* Purchased Product Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] max-w-full">
          <ShoppingBag size={13} className="text-blue-600 shrink-0" />
          <span className="text-blue-600 font-medium shrink-0">Purchased:</span>
          <span className="text-slate-900 font-semibold truncate">
            {testimonial.purchasedItem}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 my-3.5" />

        {/* Reviewer Profile */}
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
          />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-sm">
              <h3 className="font-bold text-slate-900 truncate">
                {testimonial.name}
              </h3>
              <span className="text-xs text-slate-400 shrink-0">
                • {testimonial.location}
              </span>
            </div>
            <p className="flex items-center gap-1 text-xs font-medium text-emerald-600 mt-0.5">
              <BadgeCheck size={14} className="fill-emerald-500 text-white shrink-0" />
              <span>Verified Buyer</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}