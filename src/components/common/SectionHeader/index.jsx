import { ArrowRight } from "lucide-react";

export default function SectionHeader({ title, viewAllHref = "" }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{title}</h2>
      {viewAllHref && (
        <a
          href={viewAllHref}
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 hover:underline"
        >
          <span>View All</span>
          <ArrowRight size={15} />
        </a>
      )}
    </div>
  );
}