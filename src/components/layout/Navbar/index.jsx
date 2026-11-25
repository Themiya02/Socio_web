import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import socioLogoBlack from "../../../assets/icons/socio-logo-dark.webp";
import careSlogan from "../../../assets/icons/Slogen.webp";
import Button from "../../common/Button";
import Container from "../../common/Container";

export default function Navbar({ cartCount = 3 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Shop", href: "#flash-offers" },
    { label: "Features", href: "#trust-features" },
    { label: "Support", href: "#footer" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
      <Container className="relative h-16 sm:h-[70px] flex items-center justify-between gap-4">

        {/* Brand Logo Group: Public Icon + Black Wordmark + Slogan */}
        <Link to="/" className="shrink-0 flex items-center gap-2.5">
          <img
            src="/Icon.webp"
            alt="Socio Icon"
            className="h-8 sm:h-9 w-auto object-contain"
          />
          <div className="flex flex-col items-end">
            <img
              src={socioLogoBlack}
              alt="SOCIO.LK"
              className="h-3.5 sm:h-4 w-auto object-contain"
            />
            <img
              src={careSlogan}
              alt="Care That Stays"
              className="h-2 sm:h-2.5 w-auto object-contain mt-0.5"
            />
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-9 text-sm font-medium text-slate-700">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Search + Cart + Log In */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          <div className="hidden lg:flex items-center relative w-44 xl:w-60">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products"
              className="w-full pl-3.5 pr-9 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-200 bg-slate-50/70 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
            />
            <Search
              size={15}
              className="absolute right-3 text-slate-400 pointer-events-none"
            />
          </div>

          <button
            type="button"
            aria-label="Shopping Cart"
            className="relative p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <div className="hidden sm:block">
            <Button
              fullWidth={false}
              onClick={() => navigate("/login")}
              className="!py-2 !px-5 !rounded-xl text-xs sm:text-sm"
            >
              Log In
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products"
              className="w-full pl-3.5 pr-9 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
            />
            <Search
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 sm:hidden">
            <Button onClick={() => navigate("/login")}>Log In</Button>
          </div>
        </div>
      )}
    </header>
  );
}