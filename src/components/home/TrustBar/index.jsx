import { Truck, ShieldCheck, Gift } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: <Truck size={20} />,
    title: "Island-Wide Delivery",
    subtitle: "Free shipping on orders over LKR 5,000",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Official Warranty",
    subtitle: "100% authentic products with manufacturer warranty",
  },
  {
    icon: <Gift size={20} />,
    title: "Easy Returns",
    subtitle: "7-day hassle-free returns and exchanges",
  },
];

export default function TrustBar() {
  return (
    <section
      id="trust-features"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8"
    >
      <div className="bg-slate-50/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {TRUST_ITEMS.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}