import { Zap, Truck, ShieldCheck } from "lucide-react";

const PROMOS = [
  {
    icon: <Zap size={13} className="text-amber-400 shrink-0" />,
    highlight: "FLASH SALE:",
    highlightClass: "text-amber-400",
    text: "Limited time offer on Anker GaN II Chargers!",
  },
  {
    icon: <Truck size={13} className="text-sky-300 shrink-0" />,
    highlight: "FREE Islandwide Delivery",
    highlightClass: "text-white",
    text: "for orders above Rs. 15,000!",
  },
  {
    icon: <ShieldCheck size={13} className="text-emerald-300 shrink-0" />,
    highlight: "1-Year Official Replacement Warranty",
    highlightClass: "text-white",
    text: "on all devices.",
  },
];

function PromoItems() {
  return (
    <div className="flex items-center gap-12 sm:gap-20 pr-12 sm:pr-20 shrink-0">
      {PROMOS.map((item, idx) => (
        <p key={idx} className="flex items-center gap-1.5 whitespace-nowrap">
          {item.icon}
          <span>
            <strong className={item.highlightClass}>{item.highlight}</strong>{" "}
            {item.text}
          </span>
        </p>
      ))}
    </div>
  );
}

export default function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-[#061E4D] via-[#0B3075] to-[#061E4D] text-white text-[11px] sm:text-xs py-2 overflow-hidden">
      <div className="animate-marquee">
        <PromoItems />
        <PromoItems />
      </div>
    </div>
  );
}