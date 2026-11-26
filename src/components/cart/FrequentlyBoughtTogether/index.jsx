import { Plus } from "lucide-react";

export default function FrequentlyBoughtTogether({ items, onAddItem }) {
  return (
    <section className="mt-10 sm:mt-12">
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-5">
        Frequently Bought Together
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-200/80 bg-white p-3.5 sm:p-4 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="w-full h-24 sm:h-28 rounded-xl bg-slate-50 flex items-center justify-center p-2 mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-auto object-contain"
                />
              </div>

              <h3 className="text-xs sm:text-sm font-semibold text-slate-900 text-center line-clamp-2">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-blue-600 text-center mt-1">
                Rs. {item.price.toLocaleString()}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onAddItem(item)}
              className="mt-3 w-full py-2 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              <Plus size={13} />
              <span>Add</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}