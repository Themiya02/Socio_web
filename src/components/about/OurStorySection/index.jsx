import { Sparkles } from "lucide-react";
import Container from "../../common/Container";

const TIMELINE_EVENTS = [
  {
    year: "2017",
    title: "Garage Roots & Tech Frustration",
    description:
      "Frustrated by counterfeit chargers and box-sellers in local markets, three passionate university friends began privately importing verified accessories.",
    dotClass: "bg-blue-500",
  },
  {
    year: "2020",
    title: "Direct Factory Alliances",
    description:
      "Secured tier-one distribution agreements with leading power and audio innovators, establishing strict pick-up quality.",
    dotClass: "bg-slate-400",
  },
  {
    year: "2022",
    title: 'The "Care That Stays" Protocol',
    description:
      "Pioneered instant replacement warranties and direct diagnostic support across Sri Lanka to overturn industry skepticism.",
    dotClass: "bg-blue-500",
  },
  {
    year: "2024",
    title: "BestWeb.lk Gold Award",
    description:
      "Recognized as Sri Lanka's leading consumer tech destination, serving over 50,000 verified customers nationwide.",
    dotClass: "bg-emerald-400",
  },
];

export default function OurStorySection() {
  return (
    <section id="our-story" className="mt-12 sm:mt-16">
      <Container>
        <div className="rounded-3xl bg-gradient-to-br from-[#0B1426] via-[#0F1B33] to-[#13254A] text-white p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading + Timeline */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-medium text-blue-300">
                <Sparkles size={12} />
                Our Story: 2017 to Today
              </span>

              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold leading-tight">
                How a Quest for Real Tech Reshaped an Industry.
              </h2>

              <div className="mt-7 relative pl-5 border-l border-white/15 space-y-6">
                {TIMELINE_EVENTS.map((item) => (
                  <div key={item.year} className="relative">
                    <span
                      className={`absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full ring-4 ring-[#0F1B33] ${item.dotClass}`}
                    />
                    <p className="text-[11px] font-bold text-slate-400">
                      {item.year}
                    </p>
                    <h3 className="text-sm font-bold text-white mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Founders Quote Card */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-5 sm:p-8 backdrop-blur-xs">
                <blockquote className="text-base sm:text-lg font-semibold leading-relaxed text-white">
                  &ldquo;We were tired of hearing &lsquo;no warranty for burn
                  marks&rsquo;, &lsquo;no exchanges after walking out of the
                  shop&rsquo;, and discovering that our expensive new gadgets
                  were gray-market reconditioned units.&rdquo;
                </blockquote>

                <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p>
                    In 2017, Socio.lk was born out of sheer ambition: creating a
                    Sri Lankan tech house where buyers never had to second-guess
                    what was inside the box. We believe that buying authentic
                    tech in Colombo, Kandy, or Jaffna should offer the exact
                    same gold-standard peace of mind as purchasing in Tokyo,
                    Singapore, or London.
                  </p>
                  <p>
                    Over seven years, that conviction helped us grow from a
                    quiet garage operation into an authoritative household name.
                    We didn&apos;t do it with flashy discounts on dubious goods,
                    but by investing in genuine inventory, building a real service
                    center on R.A. De Mel Mawatha, and standing by every single
                    serial code we ship.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    SL
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      The Socio Executive Team
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Colombo 03, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}