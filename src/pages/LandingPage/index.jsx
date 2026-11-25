import { useState } from "react";
import TopBanner from "../../components/layout/TopBanner";
import Navbar from "../../components/layout/Navbar";
import HeroSection from "../../components/home/HeroSection";
import TrustBar from "../../components/home/TrustBar";
import FlashOffers from "../../components/home/FlashOffers";
import TestimonialsSection from "../../components/home/TestimonialsSection";
import CategorySection from "../../components/home/CategorySection";
import Footer from "../../components/layout/Footer";

export default function LandingPage() {
  const [cartCount, setCartCount] = useState(3);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <TopBanner />
      <Navbar cartCount={cartCount} />

      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <FlashOffers onAddToCart={handleAddToCart} />
        <TestimonialsSection />
        <CategorySection />
      </main>

      <Footer />
    </div>
  );
}