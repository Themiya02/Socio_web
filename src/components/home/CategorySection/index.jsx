import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "../../../data/mockData";
import CategoryCard from "../../common/CategoryCard";

export default function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 mb-14 sm:mb-16">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Shop by Category
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 hover:underline"
        >
          <span>View All</span>
          <ArrowRight size={15} />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}