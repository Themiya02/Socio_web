import { Link } from "react-router-dom";
import socioLogo from "../../assets/icons/socio-logo.webp";

export default function AuthCardHeader() {
  return (
    <div className="bg-black py-3.5 sm:py-4 px-5 flex items-center justify-center">
      <Link to="/" aria-label="Go to Home">
        <img
          src={socioLogo}
          alt="Socio.lk Logo"
          className="h-7 sm:h-8 w-auto object-contain"
        />
      </Link>
    </div>
  );
}