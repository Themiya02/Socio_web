import {
  Smartphone,
  Plug,
  Cable,
  Zap,
  BatteryCharging,
  Headphones,
  Shield,
  Flame,
  X,
  SlidersHorizontal,
} from "lucide-react";

const BRAND_OPTIONS = [
  { label: "Apple", icon: Smartphone },
  { label: "Anker", icon: Plug },
  { label: "Ugreen", icon: Cable },
  { label: "Baseus", icon: Zap },
  { label: "Samsung", icon: Smartphone },
];

const CATEGORY_OPTIONS = [
  { label: "Cables", icon: Cable },
  { label: "GaN Chargers", icon: Zap },
  { label: "Power Banks", icon: BatteryCharging },
  { label: "Earbuds", icon: Headphones },
  { label: "Phone Cases", icon: Smartphone },
  { label: "Screen Protectors", icon: Shield },
];

function FilterContent({ filters, onFilterChange, onReset }) {
  const toggleBrand = (brand) => {
    onFilterChange({
      ...filters,
      brand: filters.brand === brand ? "" : brand,
    });
  };

  const toggleCategory = (category) => {
    onFilterChange({
      ...filters,
      category: filters.category === category ? "" : category,
    });
  };

  return (
    <div className="space-y-6">
      {/* Brands */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Brands
          </h3>
          {(filters.brand || filters.category || filters.onSale || filters.inStockOnly) && (
            <button
              type="button"
              onClick={onReset}
              className="text-[11px] font-medium text-blue-600 hover:underline cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>
        <div className="space-y-1">
          {BRAND_OPTIONS.map(({ label, icon: Icon }) => {
            const isActive = filters.brand === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => toggleBrand(label)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Icon size={14} className="shrink-0" />
                <span className="truncate">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5">
          Categories
        </h3>
        <div className="space-y-1">
          {CATEGORY_OPTIONS.map(({ label, icon: Icon }) => {
            const isActive = filters.category === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => toggleCategory(label)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Icon size={14} className="shrink-0" />
                <span className="truncate">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Slider */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-slate-800">Price Range</h3>
          <span className="text-[11px] font-semibold text-blue-600">
            Rs. 2k - {Math.round(filters.maxPrice / 1000)}k
          </span>
        </div>
        <input
          type="range"
          min={2000}
          max={120000}
          step={1000}
          value={filters.maxPrice}
          onChange={(e) =>
            onFilterChange({ ...filters, maxPrice: Number(e.target.value) })
          }
          className="w-full accent-blue-600 cursor-pointer"
        />
      </div>

      {/* Toggle Switches */}
      <div className="space-y-3 pt-1">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
            <Flame size={14} className="text-rose-500" />
            On Sale
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={filters.onSale}
            onClick={() =>
              onFilterChange({ ...filters, onSale: !filters.onSale })
            }
            className={`relative w-10 h-5 rounded-full transition-colors cursor-pointer ${
              filters.onSale ? "bg-blue-600" : "bg-slate-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                filters.onSale ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </label>

        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-xs font-medium text-slate-700">
            In Stock Only
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={filters.inStockOnly}
            onClick={() =>
              onFilterChange({ ...filters, inStockOnly: !filters.inStockOnly })
            }
            className={`relative w-10 h-5 rounded-full transition-colors cursor-pointer ${
              filters.inStockOnly ? "bg-blue-600" : "bg-slate-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                filters.inStockOnly ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </label>
      </div>
    </div>
  );
}

export default function FilterSidebar({
  filters,
  onFilterChange,
  onReset,
  mobileOpen,
  onCloseMobile,
}) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
        <div className="sticky top-24 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
          <FilterContent
            filters={filters}
            onFilterChange={onFilterChange}
            onReset={onReset}
          />
        </div>
      </aside>

      {/* Mobile Slide-Over Filter Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
            onClick={onCloseMobile}
          />
          <div className="relative w-72 max-w-[85vw] bg-white h-full shadow-2xl p-5 overflow-y-auto z-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <span className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <SlidersHorizontal size={16} className="text-blue-600" />
                  Filter Products
                </span>
                <button
                  type="button"
                  onClick={onCloseMobile}
                  aria-label="Close filters"
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
              <FilterContent
                filters={filters}
                onFilterChange={onFilterChange}
                onReset={onReset}
              />
            </div>

            <button
              type="button"
              onClick={onCloseMobile}
              className="mt-6 w-full py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}