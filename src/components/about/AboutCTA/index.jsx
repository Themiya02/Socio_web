import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Container from "../../common/Container";

export default function AboutCTA() {
  const navigate = useNavigate();

  return (
    <section className="mt-8 sm:mt-10 mb-12 sm:mb-16">
      <Container>
        <div className="rounded-3xl bg-gradient-to-r from-[#0B3B8C] via-[#1352C4] to-[#0E64E8] text-white p-6 sm:p-10 shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-200">
              Ready to Upgrade?
            </p>
            <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold leading-tight">
              Experience The &lsquo;Care That Stays&rsquo; Difference.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-relaxed">
              Browse our full flagship catalog or talk to our Colombo tech
              advisors today for direct procurement advice.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-blue-700 text-sm font-bold text-center shadow-sm transition-colors cursor-pointer"
            >
              Browse Collection
            </button>

            <a
              href="https://wa.me/94778822391"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}