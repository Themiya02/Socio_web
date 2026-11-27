import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../../common/Container";
import aboutStoryImg from "../../../assets/images/contact-about-story.webp";
import corporateSalesImg from "../../../assets/images/contact-corporate-sales.webp";
import afterSalesImg from "../../../assets/images/contact-after-sales.webp";

const EXPLORE_CARDS = [
  {
    eyebrow: "Our Heritage",
    title: "About Our Story",
    description:
      "From garage roots to Sri Lanka's Gold-award winning tech specialist boutique.",
    cta: "Read Story",
    to: "/about",
    image: aboutStoryImg,
  },
  {
    eyebrow: "Enterprise",
    title: "Corporate Sales",
    description:
      "Equip your startup or enterprise with bulk tier-1 genuine hardware & tax invoicing.",
    cta: "Explore B2B",
    href: "#drop-a-note",
    image: corporateSalesImg,
  },
  {
    eyebrow: "Reliability",
    title: "After Sales Support",
    description:
      "Care That Stays™ protocol: doorstep swaps, engineer diagnostics, and TRCSL support.",
    cta: "Learn More",
    to: "/about",
    image: afterSalesImg,
  },
];

export default function ExploreMoreCards() {
  return (
    <section className="mt-12 sm:mt-16 mb-8 sm:mb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {EXPLORE_CARDS.map((card) => (
            <div
              key={card.title}
              className="group relative h-60 sm:h-64 rounded-2xl overflow-hidden bg-slate-900 shadow-sm"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/15" />

              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-white">
                <p className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                  {card.eyebrow}
                </p>
                <h3 className="mt-1 text-lg sm:text-xl font-extrabold">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs text-slate-200 leading-relaxed line-clamp-2">
                  {card.description}
                </p>

                {card.to ? (
                  <Link
                    to={card.to}
                    onClick={() => window.scrollTo(0, 0)}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-blue-300 transition-colors"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight size={13} />
                  </Link>
                ) : (
                  <a
                    href={card.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-blue-300 transition-colors"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Channel Badges above Footer */}
        <div className="mt-6 flex items-center justify-end gap-3">
          <a
            href="#"
            aria-label="Socio.lk Facebook"
            className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-sm hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.6V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H7.6v3h2.7v8h3.2z" />
            </svg>
          </a>

          <a
            href="#"
            aria-label="Socio.lk Instagram"
            className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-sm hover:opacity-90 transition-opacity"
          >
            <svg
              className="w-5 h-5 stroke-current fill-none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}