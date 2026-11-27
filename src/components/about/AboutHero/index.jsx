import { ArrowUpRight } from "lucide-react";
import Container from "../../common/Container";
import techBg from "../../../assets/images/about.webp";

export default function AboutHero() {
  const scrollToServices = () => {
    const el = document.getElementById("our-services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="mt-6 sm:mt-8">
      <Container>
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Left Content */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-wide text-slate-900">
              ABOUT SOCIO.LK
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Sri Lanka&apos;s most trusted electronics destination, introducing
              global innovation directly to your doorstep with guaranteed
              factory authenticity and unwavering aftercare.
            </p>

            {/* Key Metrics */}
            <div className="mt-6 sm:mt-7 flex items-center gap-8 sm:gap-12">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                  50k+
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Satisfied Clients
                </p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                  100%
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Genuine Origin
                </p>
              </div>
            </div>

            {/* Hero Actions */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={scrollToServices}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold text-center shadow-sm transition-colors cursor-pointer"
              >
                Explore Services
              </button>

              <a
                href="#our-story"
                className="px-6 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
              >
                <span>Blogs</span>
                <ArrowUpRight size={15} className="text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Brand Showroom Panel */}
          <div className="lg:col-span-6 relative min-h-[220px] sm:min-h-[300px] lg:min-h-full bg-slate-950 overflow-hidden">
            <img
              src={techBg}
              alt="Socio.lk Tech Store"
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}