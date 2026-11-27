import { Eye, Rocket, CheckCircle2 } from "lucide-react";
import Container from "../../common/Container";

export default function VisionMission() {
  return (
    <section className="mt-10 sm:mt-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {/* Vision Card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Eye size={19} />
              </div>
              <p className="text-[11px] font-bold tracking-wider uppercase text-blue-600">
                Our Vision
              </p>
              <h3 className="mt-1.5 text-lg sm:text-xl font-extrabold text-slate-900">
                To Be Sri Lanka&apos;s Most Trusted Tech Destination.
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                To define the national standard for technology retail by proving
                that integrity, transparent pricing, and relentless
                post-purchase customer advocacy can flourish as the undisputed
                gold standard in Sri Lanka.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                <span>
                  100% verified seal of genuine origin hardware in our catalog
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                <span>
                  Setting transparent warranty standards for all local retailers
                </span>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Rocket size={19} />
              </div>
              <p className="text-[11px] font-bold tracking-wider uppercase text-blue-600">
                Our Mission
              </p>
              <h3 className="mt-1.5 text-lg sm:text-xl font-extrabold text-slate-900">
                Empowering Daily Lives Through Authentic Hardware.
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                To deliver authentic global tech directly to consumers with
                total speed and friction-free service, fostering technology
                literacy and ensuring every customer feels protected long after
                purchase.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                <span>
                  Instant one-for-one replacements on qualifying claims
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                <span>
                  Transparent diagnostic reporting for all service center work
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}