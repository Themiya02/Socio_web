import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBanner from "../../../assets/images/hero-banner.webp";
import Button from "../../common/Button";
import Container from "../../common/Container";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="top" className="pt-5 sm:pt-7">
      <Container>
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#d8dbe0] via-[#eff1f4] to-[#e2e5ea] min-h-[380px] sm:min-h-[450px] lg:min-h-[500px] flex items-center shadow-sm">
          {/* Square hero image pinned right on tablet/desktop with seamless left fade */}
          <img
            src={heroBanner}
            alt="Premium Tech Devices"
            className="absolute inset-0 w-full h-full object-cover object-right md:inset-y-0 md:left-auto md:right-0 md:w-auto md:h-full md:object-contain md:[mask-image:linear-gradient(to_right,transparent_0%,black_30%)] pointer-events-none select-none"
          />

          {/* Readability overlay for small mobile screens */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef1f5]/95 via-[#eef1f5]/75 to-transparent md:hidden pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/90 text-blue-600 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Premium Tech Authority
            </span>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-[68px] tracking-normal leading-[0.95] text-[#1a2234] uppercase">
              CARE THAT
              <span className="block text-blue-600">STAYS</span>
            </h1>

            <p className="mt-4 text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-sm">
              Discover the world&apos;s finest smartphones and electronics, curated
              for those who demand excellence. Premium quality, unmatched support.
            </p>

            <div className="mt-6">
              <Button
                fullWidth={false}
                onClick={() => navigate("/signup")}
                className="!px-6 !py-3 !rounded-xl"
              >
                <span>Get Started</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}