import { Zap, ShieldCheck } from "lucide-react";
import Container from "../../common/Container";

export default function ContactHero() {
  return (
    <section className="pt-8 sm:pt-12 pb-6 sm:pb-8 text-center">
      <Container>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-[58px] leading-none tracking-wide text-slate-900">
          CONNECT WITH <span className="text-blue-600">SOCIO.LK</span>
        </h1>

        <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          Care That Stays — We are here for your tech journey. Get instant
          specialist advice, schedule device inspections, or drop by our lounge.
        </p>

        {/* Quick Trust Highlights */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-[11px] sm:text-xs font-semibold text-slate-700 shadow-xs">
            <Zap size={13} className="text-blue-600" />
            Avg Response &lt; 15 Mins
          </span>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-[11px] sm:text-xs font-semibold text-slate-700 shadow-xs">
            <ShieldCheck size={13} className="text-blue-600" />
            100% Genuine Aftercare
          </span>

          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-[11px] sm:text-xs font-semibold text-slate-700 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Colombo 03 Flagship Open Today
          </span>
        </div>
      </Container>
    </section>
  );
}