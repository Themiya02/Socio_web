import {
  ShieldCheck,
  CreditCard,
  Award,
  CheckCircle2,
  Lock,
  Shield,
} from "lucide-react";
import Container from "../../common/Container";

const PAYMENT_TAGS = [
  "Koko 3x Split",
  "Mintpay 0% Int.",
  "Visa / Master",
  "Doorstep COD",
];

export default function CorePillars() {
  return (
    <section className="mt-12 sm:mt-16">
      <Container>
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900">
            The Core Pillars
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Built on transparency, modern convenience, and authentic consumer
            protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {/* Pillar 1 */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                What We Do
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                We source and curate world-class consumer electronics (Apple,
                Anker, Ugreen, Spigen, Sony) at the best competitive national
                rates. Every single product passes an exhaustive physical seal
                verification and serial ledger check before release.
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Genuine Imports</span>
              <CheckCircle2 size={15} className="text-blue-600" />
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <CreditCard size={18} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Convenient Payments
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Flexible options tailored for modern Sri Lankans. Split any
                order into 3 zero-interest installments or opt for safe doorstep
                unboxing.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {PAYMENT_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-700 text-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Encrypted Checkout</span>
              <Lock size={15} className="text-blue-600" />
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Award size={18} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Why Socio?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                We eliminate the gray market gamble in Sri Lanka. When you
                purchase from Socio.lk, you receive an official computerized tax
                receipt, traceable TRCSL registration, and an active aftercare
                lifeline with zero finger-pointing.
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Care That Stays</span>
              <Shield size={15} className="text-blue-600" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}