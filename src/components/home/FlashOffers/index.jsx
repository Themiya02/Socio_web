import { ArrowRight } from "lucide-react";
import { FLASH_OFFERS } from "../../../data/mockData";
import ProductCard from "../../common/ProductCard";

export default function FlashOffers({ onAddToCart }) {
  return (
    <section
      id="flash-offers"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Flash Offers
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 hover:underline"
        >
          <span>View All</span>
          <ArrowRight size={15} />
        </a>
      </div>

      {/* Horizontal Scrollable Cards */}
      <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
        {FLASH_OFFERS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}