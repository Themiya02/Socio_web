import { useState } from "react";
import { Building2, MapPin, Wrench, ArrowRight, Plus, Minus } from "lucide-react";
import Container from "../../common/Container";

const LOUNGES = [
  {
    id: "colombo-03",
    name: "Colombo 03 Flagship Lounge",
    badge: "Open Now",
    badgeClass: "bg-emerald-50 text-emerald-600",
    showDot: true,
    address: "245 R. A. De Mel Mawatha, Colombo 03",
    hours: "Mon–Sat 9:30 AM – 7:30 PM • Sun 10:00 AM – 5:00 PM",
    mapUrl: "https://maps.google.com/?q=245+R.+A.+De+Mel+Mawatha,+Colombo+03",
    pinLabel: "Colombo 03 Flagship",
  },
  {
    id: "colombo-05",
    name: "Thimbirigasyaya Tech Hub & Service Lab",
    badge: "Service Lab",
    badgeClass: "bg-slate-100 text-slate-600",
    showDot: false,
    address: "84 Thimbirigasyaya Rd, Colombo 05",
    hours: "Mon–Sat 9:00 AM – 6:00 PM • Dedicated Diagnostics",
    mapUrl: "https://maps.google.com/?q=84+Thimbirigasyaya+Rd,+Colombo+05",
    pinLabel: "Thimbirigasyaya Lab",
  },
];

export default function ExperienceLounges() {
  const [selectedLounge, setSelectedLounge] = useState("colombo-03");
  const [mapZoom, setMapZoom] = useState(1);

  const handleZoomIn = () => setMapZoom((z) => Math.min(1.25, +(z + 0.1).toFixed(2)));
  const handleZoomOut = () => setMapZoom((z) => Math.max(0.9, +(z - 0.1).toFixed(2)));

  return (
    <section className="mt-2 sm:mt-4">
      <Container>
        <div className="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Column: Lounge Info & Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-600">
                  <Building2 size={13} />
                  Official Lounges
                </p>
                <h2 className="mt-1.5 text-lg sm:text-xl font-extrabold text-slate-900">
                  Experience Lounges &amp; Labs
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Walk in to experience high-wattage charging stations, live
                  headphone listening, and express repair intakes.
                </p>
              </div>

              <div className="mt-5 space-y-3.5">
                {LOUNGES.map((lounge) => {
                  const isSelected = selectedLounge === lounge.id;
                  return (
                    <div
                      key={lounge.id}
                      onClick={() => setSelectedLounge(lounge.id)}
                      className={`rounded-2xl border p-4 transition-all cursor-pointer ${
                        isSelected
                          ? "border-blue-500 bg-blue-50/30 shadow-xs"
                          : "border-slate-200/80 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                          {lounge.name}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold shrink-0 ${lounge.badgeClass}`}
                        >
                          {lounge.showDot && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          )}
                          {lounge.badge}
                        </span>
                      </div>

                      <p className="mt-1.5 text-xs text-slate-600">
                        {lounge.address}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-400">
                        {lounge.hours}
                      </p>

                      <a
                        href={lounge.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
                      >
                        <span>Get Directions</span>
                        <ArrowRight size={13} />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Interactive Colombo Map Card */}
            <div className="lg:col-span-7 relative rounded-2xl border border-slate-200/80 bg-[#EFF4FA] min-h-[280px] sm:min-h-[340px] overflow-hidden">
              {/* Stylized Map Canvas */}
              <div
                className="absolute inset-0 transition-transform duration-300"
                style={{ transform: `scale(${mapZoom})` }}
              >
                <svg
                  viewBox="0 0 600 400"
                  className="w-full h-full object-cover"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  {/* Coastline / Water */}
                  <path
                    d="M0 0 H155 C165 140 185 260 205 400 H0 Z"
                    fill="#DCE9F9"
                  />
                  {/* Park / Lake Accent */}
                  <ellipse cx="380" cy="195" rx="34" ry="18" fill="#BBD6F7" />
                  {/* Main Roads */}
                  <path
                    d="M170 0 L240 400 M265 0 L345 400 M120 120 L600 180 M145 250 L600 310 M210 155 L460 65"
                    stroke="#FFFFFF"
                    strokeWidth="6"
                    fill="none"
                  />
                  <path
                    d="M165 0 L225 400"
                    stroke="#60A5FA"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    fill="none"
                  />
                </svg>

                {/* Pin 1: Colombo 03 Flagship */}
                <button
                  type="button"
                  onClick={() => setSelectedLounge("colombo-03")}
                  className={`absolute top-[30%] left-[44%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer transition-transform ${
                    selectedLounge === "colombo-03" ? "scale-110 z-20" : "z-10"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white shadow-md flex items-center justify-center ring-4 ring-white">
                    <MapPin size={15} />
                  </div>
                  <span className="mt-1 px-2.5 py-0.5 rounded-md bg-slate-900 text-white text-[10px] font-semibold shadow-sm whitespace-nowrap">
                    Colombo 03 Flagship
                  </span>
                </button>

                {/* Pin 2: Thimbirigasyaya Lab */}
                <button
                  type="button"
                  onClick={() => setSelectedLounge("colombo-05")}
                  className={`absolute top-[60%] left-[62%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer transition-transform ${
                    selectedLounge === "colombo-05" ? "scale-110 z-20" : "z-10"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-white shadow-md flex items-center justify-center ring-4 ring-white">
                    <Wrench size={14} />
                  </div>
                  <span className="mt-1 px-2.5 py-0.5 rounded-md bg-slate-900 text-white text-[10px] font-semibold shadow-sm whitespace-nowrap">
                    Thimbirigasyaya Lab
                  </span>
                </button>
              </div>

              {/* Bottom Left GPS Tag */}
              <div className="absolute bottom-3 left-3 z-20 px-3 py-1.5 rounded-lg bg-white/95 border border-slate-200/80 shadow-xs text-[10px] sm:text-[11px] font-medium text-slate-600 backdrop-blur-xs">
                GPS: 6.8974° N, 79.8542° E • Colombo, Sri Lanka
              </div>

              {/* Bottom Right Zoom Controls */}
              <div className="absolute bottom-3 right-3 z-20 flex flex-col rounded-xl bg-white border border-slate-200 shadow-xs overflow-hidden">
                <button
                  type="button"
                  onClick={handleZoomIn}
                  aria-label="Zoom in map"
                  className="p-2 text-slate-700 hover:bg-slate-100 border-b border-slate-100 cursor-pointer"
                >
                  <Plus size={14} />
                </button>
                <button
                  type="button"
                  onClick={handleZoomOut}
                  aria-label="Zoom out map"
                  className="p-2 text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  <Minus size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}