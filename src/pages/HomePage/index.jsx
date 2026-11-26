import { useState } from "react";
import TopBanner from "../../components/layout/TopBanner";
import AuthNavbar from "../../components/layout/AuthNavbar";
import HeroSection from "../../components/home/HeroSection";
import TrustBar from "../../components/home/TrustBar";
import NewArrivals from "../../components/home/NewArrivals";
import FlashOffers from "../../components/home/FlashOffers";
import TestimonialsSection from "../../components/home/TestimonialsSection";
import CategorySection from "../../components/home/CategorySection";
import Footer from "../../components/layout/Footer";

export default function HomePage() {
  const [cartCount, setCartCount] = useState(3);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900 flex flex-col">
      <TopBanner />
      <AuthNavbar cartCount={cartCount} />

      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <NewArrivals onAddToCart={handleAddToCart} />
        <FlashOffers onAddToCart={handleAddToCart} />
        <TestimonialsSection />
        <CategorySection />
      </main>

      <Footer />
    </div>
  );
}