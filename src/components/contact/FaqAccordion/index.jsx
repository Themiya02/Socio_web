import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "../../common/Container";

const FAQ_ITEMS = [
  {
    question: "How do I claim warranty for Anker, Spigen, or Apple gear?",
    answer:
      "Simply bring your item with the Socio.lk digital or physical invoice to our Colombo 03 Flagship or Thimbirigasyaya Service Lab. Qualifying hardware defects receive instant 1-to-1 replacements under our Care That Stays protocol.",
  },
  {
    question: "What are your delivery times across Sri Lanka?",
    answer:
      "Colombo and suburbs receive same-day or next-day delivery. All other districts across Sri Lanka are delivered within 2–4 working days via insured, tamper-evident courier transit.",
  },
  {
    question: "How do I verify the authenticity of my product?",
    answer:
      "Every Socio.lk product arrives factory-sealed with an official serial sticker you can verify directly on the manufacturer's global portal (Apple, Anker, Ugreen) and includes a stamped Socio.lk warranty card.",
  },
  {
    question: "Can I test headphones and chargers at the Colombo Flagship?",
    answer:
      "Yes! Our Colombo 03 Flagship Lounge features live listening stations for Sony & Apple audio gear plus high-wattage GaN charging benches so you can test before buying.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="mt-14 sm:mt-16">
      <Container>
        <div className="text-center mb-7 sm:mb-9">
          <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
            Fast Answers
          </p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
            Clear protocols on warranty claims, nationwide delivery, and
            authenticity guarantees.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200/80 bg-white shadow-xs overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={17}
                    className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-0.5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}