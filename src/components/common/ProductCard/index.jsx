import { useState } from "react";
import { Heart, Star, ShoppingBag, ArrowRight } from "lucide-react";
import Button from "../Button";
import kokoLogo from "../../../assets/icons/koko-logo.webp";

export default function ProductCard({ product, onAddToCart }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <article className="min-w-[270px] sm:min-w-[290px] lg:min-w-[300px] snap-start bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Image Box */}
      <div className="relative bg-slate-100/80 rounded-xl h-44 p-4 flex items-center justify-center overflow-hidden">
        {/* Wishlist Button */}
        <button
          type="button"
          onClick={() => setIsWishlisted((prev) => !prev)}
          aria-label="Add to wishlist"
          className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-blue-600 shadow-xs transition-colors cursor-pointer"
        >
          <Heart
            size={16}
            className={isWishlisted ? "fill-rose-500 text-rose-500" : ""}
          />
        </button>

        {/* SALE Badge */}
        {product.badge && (
          <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-bold tracking-wide uppercase">
            {product.badge}
          </span>
        )}

        <img
          src={product.image}
          alt={product.title}
          className="max-h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="pt-3 flex-1 flex flex-col">
        {/* Rating */}
        <div className="flex items-center gap-1 text-xs">
          <Star size={13} className="fill-amber-400 text-amber-400" />
          <span className="font-bold text-slate-900">{product.rating}</span>
          <span className="text-slate-400">({product.reviews} reviews)</span>
        </div>

        {/* Specs & Title */}
        <p className="text-[11px] text-slate-500 mt-1.5 truncate">{product.specs}</p>
        <h3 className="text-sm font-bold text-slate-900 mt-0.5 line-clamp-1">
          {product.title}
        </h3>

        {/* Pricing */}
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <span className="text-lg font-extrabold text-slate-900">
            Rs. {product.price.toLocaleString()}
          </span>
          <span className="text-xs text-slate-400 line-through">
            Rs. {product.originalPrice.toLocaleString()}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-semibold">
            Save Rs. {product.saveAmount.toLocaleString()}
          </span>
        </div>

        {/* KOKO Installment Pill */}
        <div className="mt-2.5 bg-slate-50 border border-slate-200/70 rounded-lg px-2.5 py-1.5 flex items-center justify-between gap-2 text-[11px]">
          <div className="flex items-center gap-1 text-slate-700 truncate">
            <span>Or 3 x</span>
            <strong className="text-slate-900">Rs. {product.installment}</strong>
            <span>with</span>
            <img src={kokoLogo} alt="KOKO" className="h-3.5 w-auto object-contain" />
          </div>
          <span className="shrink-0 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-semibold">
            0% Interest
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-3.5">
          <Button
            variant="outline"
            onClick={() => onAddToCart(product)}
            className="!text-xs !py-2"
          >
            <ShoppingBag size={14} />
            <span>Add to cart</span>
          </Button>
          <Button
            onClick={() => console.log("Buy Now:", product.title)}
            className="!text-xs !py-2 !shadow-none"
          >
            <span>BUY NOW</span>
            <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </article>
  );
}