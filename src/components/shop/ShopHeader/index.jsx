import { Search, SlidersHorizontal, X } from "lucide-react";

export default function ShopHeader({
  title,
  totalCount,
  filters,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  onRemoveFilter,
  onOpenMobileFilters,
}) {
  const activeChips = [];

  if (filters.brand) {
    activeChips.push({ key: "brand", label: filters.brand });
  }
  if (filters.category) {
    activeChips.push({ key: "category", label: filters.category });
  }
  if (filters.onSale) {
    activeChips.push({ key: "onSale", label: "On Sale" });
  }
  if (filters.inStockOnly) {
    activeChips.push({ key: "inStockOnly", label: "In Stock Only" });
  }

  return (
    <div className="mb-6 space-y-4">
      {/* Top Row: Heading + Dark Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Showing {totalCount > 0 ? `1-${totalCount}` : "0"} of {totalCount}{" "}
            premium products
          </p>
        </div>

        {/* Search Input + Mobile Filter Trigger */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={onOpenMobileFilters}
            className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 shadow-xs shrink-0 cursor-pointer"
          >
            <SlidersHorizontal size={15} className="text-blue-600" />
            Filters
          </button>

          <div className="relative flex-1 sm:w-64 md:w-72">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-[#0F172A] text-white placeholder:text-slate-300 text-base sm:text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white cursor-pointer"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Row: Active Filter Chips + Sort Dropdown */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 min-h-[32px]">
          {activeChips.map((chip) => (
            <button
              key={chip.key}
              type="button"
              onClick={() => onRemoveFilter(chip.key)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs hover:border-blue-400 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <span>{chip.label}</span>
              <X size={12} className="text-slate-400" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <label
            htmlFor="shop-sort"
            className="text-xs text-slate-500 font-medium shrink-0"
          >
            Sort by:
          </label>
          <select
            id="shop-sort"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 cursor-pointer"
          >
            <option value="recommended">Recommended</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
}