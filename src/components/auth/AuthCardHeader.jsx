import socioLogo from "../../assets/icons/socio-logo.jpg";

export default function AuthCardHeader() {
  return (
    <div className="bg-black py-5 px-6 flex items-center justify-center">
      <img
        src={socioLogo}
        alt="Socio.lk Logo"
        className="h-9 sm:h-10 w-auto object-contain"
      />
    </div>
  );
}