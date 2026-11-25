export default function CardSkeleton({ variant = "product" }) {
  if (variant === "testimonial") {
    return (
      <div className="min-w-[290px] sm:min-w-[340px] lg:min-w-[380px] bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 animate-pulse">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-slate-200" />
          <div className="w-28 h-6 rounded-full bg-slate-200" />
        </div>
        <div className="space-y-2.5 mt-5">
          <div className="h-3.5 bg-slate-200 rounded w-full" />
          <div className="h-3.5 bg-slate-200 rounded w-11/12" />
          <div className="h-3.5 bg-slate-200 rounded w-4/5" />
        </div>
        <div className="h-7 w-48 bg-slate-200 rounded-full mt-5" />
        <div className="border-t border-slate-100 my-3.5" />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0" />
          <div className="space-y-1.5 flex-1">
            <div className="h-3.5 bg-slate-200 rounded w-32" />
            <div className="h-3 bg-slate-200 rounded w-24" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-[270px] sm:min-w-[290px] lg:min-w-[300px] bg-white rounded-2xl border border-slate-200/80 p-3.5 animate-pulse">
      <div className="h-44 rounded-xl bg-slate-200" />
      <div className="pt-3 space-y-2.5">
        <div className="h-3 bg-slate-200 rounded w-24" />
        <div className="h-3 bg-slate-200 rounded w-4/5" />
        <div className="h-4 bg-slate-200 rounded w-11/12" />
        <div className="h-5 bg-slate-200 rounded w-36 mt-2" />
        <div className="h-8 bg-slate-200 rounded-lg mt-2" />
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="h-9 bg-slate-200 rounded-xl" />
          <div className="h-9 bg-slate-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
}