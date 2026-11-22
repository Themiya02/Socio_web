import socioLogo from "../../assets/icons/socio-logo.webp";

export default function AuthCardHeader() {
  return (
    <div className="bg-black py-3.5 sm:py-5 px-4 sm:px-5 flex items-center justify-center">
      <img
        src={socioLogo}
        alt="Socio.lk Logo"
        className="h-7 sm:h-8 md:h-9 w-auto object-contain"
      />
    </div>
  );
}