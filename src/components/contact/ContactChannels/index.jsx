import { MessageSquare, Phone, Mail, ExternalLink, PhoneCall, ArrowRight } from "lucide-react";

export default function ContactChannels() {
  return (
    <div className="space-y-4">
      {/* WhatsApp Card */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <MessageSquare size={18} />
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] sm:text-[11px] font-semibold">
            Instant • ~5m reply
          </span>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          WhatsApp Us
        </h3>
        <p className="text-xs sm:text-sm font-bold text-blue-600 mt-0.5">
          +94 77 000 7624
        </p>
        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
          Direct VIP Desk for orders, device serial verification, and instant
          technical guidance.
        </p>

        <a
          href="https://wa.me/94770007624"
          target="_blank"
          rel="noreferrer"
          className="mt-4 w-full py-2.5 px-4 rounded-xl bg-blue-50/70 hover:bg-blue-600 text-blue-600 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
        >
          <span>Chat on WhatsApp</span>
          <ExternalLink size={13} />
        </a>
      </div>

      {/* Hotline Card */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Phone size={18} />
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] sm:text-[11px] font-semibold">
            9 AM – 8 PM Daily
          </span>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          Call Hotline
        </h3>
        <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
          011 205 8484 / +94 11 742 8899
        </p>
        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
          Dedicated voice support for real-time technical diagnosis and
          fast-track warranty claims.
        </p>

        <a
          href="tel:+94112058484"
          className="mt-4 w-full py-2.5 px-4 rounded-xl bg-blue-50/70 hover:bg-blue-600 text-blue-600 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
        >
          <span>Call Concierge</span>
          <PhoneCall size={13} />
        </a>
      </div>

      {/* Email Card */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Mail size={18} />
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] sm:text-[11px] font-semibold">
            Enterprise Desk
          </span>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          Official Email
        </h3>
        <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
          care@socio.lk / corporate@socio.lk
        </p>
        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
          For institutional procurement, corporate B2B quotations, and press
          inquiries.
        </p>

        <a
          href="mailto:care@socio.lk"
          className="mt-4 w-full py-2.5 px-4 rounded-xl bg-blue-50/70 hover:bg-blue-600 text-blue-600 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
        >
          <span>Email Team</span>
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}