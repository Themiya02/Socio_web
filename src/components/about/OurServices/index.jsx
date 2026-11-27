import {
  TrendingUp,
  Truck,
  Headphones,
  CheckCircle2,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import Container from "../../common/Container";
import heroImg from "../../../assets/images/Global.webp";
import accessoriesImg from "../../../assets/images/Island-Wide.webp";

export default function OurServices() {
  return (
    <section id="our-services" className="mt-12 sm:mt-16">
      <Container>
        {/* Section Heading */}
        <div className="relative flex flex-col items-center text-center mb-8 sm:mb-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-wide">
            OUR SERVICES
          </h2>
          <span className="mt-2 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 inline-flex items-center px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-semibold text-blue-600">
            Standard of Excellence
          </span>
        </div>

        {/* 3-Column Responsive Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {/* Card 1: Keeping Up With The Trends */}
          <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm flex flex-col">
            <div className="relative h-44 sm:h-48 bg-slate-100 overflow-hidden">
              <img
                src={heroImg}
                alt="Global Innovation"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/75 text-white text-[11px] font-medium backdrop-blur-xs">
                Global Innovation
              </span>
            </div>

            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                  <TrendingUp size={18} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Keeping Up With The Trends
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We scout international hardware summits and forge direct
                  factory relationships to bring flagship smartphone
                  innovations, ultra-fast GaN chargers, and smart wearables
                  first to Sri Lanka.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                  <span>First-to-market releases</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                  <span>24-point technical benchmark</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Island-Wide Delivery */}
          <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm flex flex-col">
            <div className="relative h-44 sm:h-48 bg-slate-100 overflow-hidden">
              <img
                src={accessoriesImg}
                alt="Island-Wide Delivery"
                className="w-full h-full object-contain p-4 bg-gradient-to-br from-slate-100 to-blue-50"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/75 text-white text-[11px] font-medium backdrop-blur-xs">
                Island-Wide Logistics
              </span>
            </div>

            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                  <Truck size={18} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Island-Wide Delivery
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Safe &amp; Quick delivery within 2-4 working days across all 9
                  provinces. Every single parcel leaves in our signature
                  tamper-evident sealed packaging with end-to-end GPS transit
                  monitoring.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                  <span>Instant dispatch confirmation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                  <span>Cash on Delivery (COD) island-wide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Support & Care */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Headphones size={18} />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-semibold">
                  Immediate Assistance
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Support &amp; Care
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our &lsquo;Care That Stays&rsquo; promise goes far beyond the
                invoice. Access our direct Colombo technician desk for 1-to-1
                replacements, live firmware troubleshooting, and warranty claims
                without friction.
              </p>

              {/* Contact Channels */}
              <div className="mt-4 space-y-2.5">
                <a
                  href="https://wa.me/94778822391"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-2 rounded-xl bg-blue-50/70 hover:bg-blue-50 px-3 py-2.5 transition-colors"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <MessageCircle
                      size={15}
                      className="text-blue-600 shrink-0"
                    />
                    <span className="text-[11px] sm:text-xs font-medium text-slate-700 truncate">
                      WhatsApp Direct VIP Desk
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-blue-600 shrink-0">
                    +94 77 882 2391
                  </span>
                </a>

                <div className="flex items-center justify-between gap-2 rounded-xl bg-blue-50/70 px-3 py-2.5">
                  <div className="flex items-center gap-2 min-w-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-[15px] h-[15px] text-blue-600 shrink-0"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="text-[11px] sm:text-xs font-medium text-slate-700 truncate">
                      Instagram Community Care
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-blue-600 shrink-0">
                    @socio.lk
                  </span>
                </div>

                <a
                  href="tel:+94778822391"
                  className="flex items-center justify-between gap-2 rounded-xl bg-blue-50/70 hover:bg-blue-50 px-3 py-2.5 transition-colors"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Phone size={15} className="text-blue-600 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-medium text-slate-700 truncate">
                      Colombo Flagship Hotline
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-blue-600 shrink-0">
                    077 882 2391
                  </span>
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/94778822391"
              target="_blank"
              rel="noreferrer"
              className="mt-5 w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-xs sm:text-sm font-semibold text-slate-800 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Speak With a Specialist</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}