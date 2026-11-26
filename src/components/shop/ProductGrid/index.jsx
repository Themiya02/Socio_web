import { PackageX } from "lucide-react";
import ProductCard from "../../common/ProductCard";
import CardSkeleton from "../../common/CardSkeleton";

export default function ProductGrid({
  products,
  isLoading,
  error,
  onRetry,
  onResetFilters,
  onAddToCart,
}) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-full min-w-0 flex justify-center sm:block"
          >
            <CardSkeleton variant="product" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
        <p className="text-sm text-red-600 font-medium">{error}</p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-3 px-4 py-2 text-xs font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200/80 bg-white p-8 sm:p-12 text-center shadow-sm">
        <PackageX size={40} className="mx-auto text-slate-300 mb-3" />
        <h2 className="text-base sm:text-lg font-bold text-slate-800">
          No matching products found
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-5">
          Try adjusting your search or clearing some filters.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Clear All Filters
        </button>
      </div>
    );
  }

  return (
    <div className="lg:max-h-[820px] lg:overflow-y-auto lg:p-1.5 lg:pr-3 lg:pb-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full min-w-0 flex justify-center sm:block"
          >
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}