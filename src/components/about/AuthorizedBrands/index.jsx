import Container from "../../common/Container";
import appleLogo from "../../../assets/icons/apple.webp";
import ankerLogo from "../../../assets/icons/anker.webp";
import spigenLogo from "../../../assets/icons/spigen.webp";
import baseusLogo from "../../../assets/icons/baseus.webp";
import ugreenLogo from "../../../assets/icons/ugreen.webp";
import sonyLogo from "../../../assets/icons/sony.webp";

const PARTNER_BRANDS = [
  {
    name: "Apple",
    logo: appleLogo,
    showText: true,
    logoClass: "h-5 sm:h-6 w-auto",
    textClass: "text-base sm:text-lg font-semibold tracking-tight text-slate-900",
  },
  {
    name: "ANKER",
    logo: ankerLogo,
    showText: false,
    logoClass: "h-4 sm:h-5 w-auto max-w-[110px]",
  },
  {
    name: "spigen",
    logo: spigenLogo,
    showText: true,
    logoClass: "h-5 sm:h-6 w-auto",
    textClass: "text-base sm:text-lg font-extrabold tracking-tight text-slate-900",
  },
  {
    name: "Baseus",
    logo: baseusLogo,
    showText: true,
    logoClass: "h-5 sm:h-6 w-auto",
    textClass: "text-base sm:text-lg font-bold tracking-tight text-slate-900",
  },
  {
    name: "UGREEN",
    logo: ugreenLogo,
    showText: true,
    logoClass: "h-5 sm:h-6 w-auto",
    textClass: "text-sm sm:text-base font-extrabold tracking-wide text-emerald-700",
  },
  {
    name: "SONY",
    logo: sonyLogo,
    showText: false,
    logoClass: "h-4 sm:h-5 w-auto max-w-[110px]",
  },
];

export default function AuthorizedBrands() {
  return (
    <section className="mt-10 sm:mt-12">
      <Container>
        <div className="rounded-2xl border border-slate-200/80 bg-white px-5 py-4 sm:px-8 sm:py-5 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-slate-500 shrink-0">
            Authorized Retail Alliances:
          </p>

          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap items-center justify-items-center gap-x-6 sm:gap-x-8 gap-y-4">
            {PARTNER_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center gap-2 select-none"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={`${brand.logoClass} object-contain shrink-0`}
                />
                {brand.showText && (
                  <span className={brand.textClass}>{brand.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}