import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  User,
  Package,
  LogOut,
  ChevronDown,
} from "lucide-react";
import socioLogoBlack from "../../../assets/icons/socio-logo-dark.webp";
import careSlogan from "../../../assets/icons/Slogen.webp";
import defaultAvatar from "../../../assets/images/avatar-kasun.webp";
import Container from "../../common/Container";

export default function AuthNavbar({
  cartCount = 3,
  user = {
    name: "Kasun D.",
    email: "kasun@socio.lk",
    avatar: defaultAvatar,
  },
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const profileMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
  { label: "Home", path: "/home", sectionId: "top" },
  { label: "Shop", path: "/shop", sectionId: null },
  { label: "Features", path: "/home", sectionId: "trust-features" },
  { label: "Support", path: null, sectionId: "footer" },
];

  // Close user profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (item) => {
  setMobileMenuOpen(false);

  if (!item.sectionId && item.path) {
    navigate(item.path);
    return;
  }

  if (!item.path || location.pathname === item.path) {
    const target = document.getElementById(item.sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    return;
  }

  navigate(item.path);
};

  const handleLogout = () => {
    setProfileMenuOpen(false);
    setMobileMenuOpen(false);
    navigate("/login");
  };

  const isCartPage = location.pathname === "/cart";

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
      <Container className="relative h-16 sm:h-[70px] flex items-center justify-between gap-4">
        {/* Brand Logo Group: Public Icon + Black Wordmark + Slogan */}
        <Link to="/home" className="shrink-0 flex items-center gap-2.5">
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
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item)}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Controls: Search + Cart + User Avatar */}
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
            onClick={() => navigate("/cart")}
            aria-label="Shopping Cart"
            className={`relative p-2 rounded-lg transition-colors cursor-pointer ${
              isCartPage
                ? "bg-blue-50 text-blue-600"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Avatar Dropdown */}
          <div className="relative" ref={profileMenuRef}>
            <button
              type="button"
              onClick={() => setProfileMenuOpen((prev) => !prev)}
              aria-label="User profile menu"
              aria-expanded={profileMenuOpen}
              className="flex items-center gap-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/40 cursor-pointer"
            >
              <img
                src={user.avatar || defaultAvatar}
                alt={user.name}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-slate-200 hover:border-blue-500 transition-colors"
              />
              <ChevronDown
                size={14}
                className="hidden sm:block text-slate-500"
              />
            </button>

            {profileMenuOpen && (
              <div className="absolute right-0 mt-2.5 w-52 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50">
                <div className="px-4 py-2 border-b border-slate-100">
                  <p className="text-sm font-semibold text-slate-800 truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-slate-500 truncate">
                    {user.email}
                  </p>
                </div>

                <Link
                  to="/profile"
                  onClick={() => setProfileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                >
                  <User size={15} />
                  My Profile
                </Link>

                <Link
                  to="/orders"
                  onClick={() => setProfileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                >
                  <Package size={15} />
                  My Orders
                </Link>

                <div className="my-1 border-t border-slate-100" />

                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                >
                  <LogOut size={15} />
                  Log Out
                </button>
              </div>
            )}
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

          <nav className="flex flex-col gap-2 items-start">
            {navLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`transition-colors cursor-pointer ${
  item.path && location.pathname === item.path && (!item.sectionId || item.sectionId === "top")
    ? "text-blue-600 font-semibold"
    : "hover:text-blue-600"
}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}