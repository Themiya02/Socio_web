import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import socioLogo from "../../../assets/icons/socio-logo.webp";
import { FOOTER_LINKS } from "../../../data/mockData";
import Button from "../../common/Button";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.6V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H7.6v3h2.7v8h3.2z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4 stroke-current fill-none"
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
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubscribe = (e) => {
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail.trim());
    if (!isValid) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    setStatus({ type: "success", message: "Subscribed! Welcome to Socio.lk deals." });
    setNewsletterEmail("");
  };

  return (
    <footer id="footer" className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <img
              src={socioLogo}
              alt="Socio.lk"
              className="h-7 sm:h-8 w-auto object-contain"
            />

            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="text-red-500 shrink-0 mt-0.5" />
                <span>86/10 Inner Circular Road, Ratnapura, Sri Lanka</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={15} className="text-rose-400 shrink-0" />
                <span>+94 77 882 2391</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail size={15} className="text-sky-400 shrink-0" />
                <span>info@socio.lk</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold tracking-wider uppercase text-white mb-3.5">
              SHOP
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold tracking-wider uppercase text-white mb-3.5">
              COMPANY
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xs font-bold tracking-wider uppercase text-white mb-3.5">
              SUPPORT
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold tracking-wider uppercase text-white mb-3">
              STAY UPDATED
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3.5">
              Get exclusive deals and new arrivals straight to your inbox.
            </p>
            <form
              onSubmit={handleSubscribe}
              noValidate
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 min-w-0 px-3 py-2 text-xs sm:text-sm rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500"
              />
              <Button
                type="submit"
                fullWidth={false}
                className="!py-2 !px-4 !rounded-lg text-xs shrink-0"
              >
                Subscribe
              </Button>
            </form>
            {status.message && (
              <p
                className={`text-xs mt-2 ${
                  status.type === "error" ? "text-red-400" : "text-emerald-400"
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-zinc-800/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p className="sm:mx-auto lg:ml-auto lg:mr-0">
            © 2026 Socio.lk Dev Team. All rights reserved.
          </p>
          <div className="flex items-center gap-5 lg:ml-auto">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}