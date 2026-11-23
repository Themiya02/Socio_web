import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category }) {
  return (
    <a
      href="#"
      className={`${category.bgClass} rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4 hover:shadow-md transition-all group overflow-hidden`}
    >
      <div>
        <h3 className="text-base sm:text-lg font-bold text-slate-900">
          {category.title}
        </h3>
        <span
          className={`inline-flex items-center gap-1 text-xs font-semibold mt-1.5 ${category.accentClass} group-hover:translate-x-1 transition-transform`}
        >
          <span>Shop Now</span>
          <ArrowRight size={13} />
        </span>
      </div>

      <img
        src={category.image}
        alt={category.title}
        className="h-20 sm:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
      />
    </a>
  );
}