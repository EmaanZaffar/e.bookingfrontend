import { Link } from "react-router-dom";
import "../../src/index.css";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-950 via-blue-700 to-red-400 py-5">
      <div className="container flex mx-auto gap-3 justify-between items-center">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold font-serif text-white tracking-tight"
        >
          e.Booking
        </Link>

        <div className="flex text-center items-center font-semibold sm:font-bold text-white gap-3 sm:gap-7">
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">
            Terms of Services
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
