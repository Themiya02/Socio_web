import TopBanner from "../../components/layout/TopBanner";
import AuthNavbar from "../../components/layout/AuthNavbar";
import AboutHero from "../../components/about/AboutHero";
import OurServices from "../../components/about/OurServices";
import CorePillars from "../../components/about/CorePillars";
import OurStorySection from "../../components/about/OurStorySection";
import VisionMission from "../../components/about/VisionMission";
import AuthorizedBrands from "../../components/about/AuthorizedBrands";
import AboutCTA from "../../components/about/AboutCTA";
import Footer from "../../components/layout/Footer";

export default function AboutPage() {
  return (
    <div id="top" className="min-h-screen bg-slate-50/40 text-slate-900 flex flex-col">
      <TopBanner />
      <AuthNavbar />

      <main className="flex-1">
        <AboutHero />
        <OurServices />
        <CorePillars />
        <OurStorySection />
        <VisionMission />
        <AuthorizedBrands />
        <AboutCTA />
      </main>

      <Footer />
    </div>
  );
}