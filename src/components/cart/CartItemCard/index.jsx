import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartItemCard({
  item,
  onUpdateQuantity,
  onRemoveItem,
}) {
  const lineTotal = item.price * item.quantity;

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 sm:p-5 shadow-sm flex gap-3.5 sm:gap-5 items-start sm:items-center">
      {/* Product Thumbnail */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-slate-50 border border-slate-100 p-2 shrink-0 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Item Info + Controls */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
              {item.name}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 truncate">
              {item.variant}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onRemoveItem(item.id)}
            aria-label={`Remove ${item.name}`}
            className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors shrink-0 cursor-pointer"
          >
            <Trash2 size={17} />
          </button>
        </div>

        {/* Mobile & Desktop Bottom Row: Stepper + Pricing */}
        <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-between gap-3">
          {/* Quantity Stepper */}
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50/70 px-1.5 py-1">
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              aria-label="Decrease quantity"
              className="w-7 h-7 rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-xs disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
            >
              <Minus size={13} />
            </button>

            <span className="w-8 text-center text-xs sm:text-sm font-semibold text-slate-800">
              {item.quantity}
            </span>

            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
              className="w-7 h-7 rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-xs transition-all cursor-pointer"
            >
              <Plus size={13} />
            </button>
          </div>

          {/* Unit & Line Total */}
          <div className="text-right ml-auto">
            <p className="text-[11px] sm:text-xs text-slate-400">
              Rs. {item.price.toLocaleString()}
            </p>
            <p className="text-sm sm:text-base font-bold text-slate-900">
              Rs. {lineTotal.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}