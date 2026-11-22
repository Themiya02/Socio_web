import socioLogo from "../../assets/icons/socio-logo.jpg";

export default function AuthCardHeader() {
  return (
    <div className="bg-black py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-center">
      <img
        src={socioLogo}
        alt="Socio.lk Logo"
        className="h-8 sm:h-9 md:h-10 w-auto object-contain"
      />
    </div>
  );
}