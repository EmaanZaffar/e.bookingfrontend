import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex w-full bg-gradient-to-r from-blue-950 via-blue-700 to-red-400 py-4">
      <div className="relative container mx-auto flex w-full items-center justify-between">
        <span className="flex text-2xl md:text-3xl text-white font-serif font-bold tracking-tight hover:text-gray-100">
          <Link to="/">e.Booking</Link>
        </span>

        <div className="hidden md:flex space-x-5 lg:space-x-2">
          <Link
            to="/my-bookings"
            className="flex items-center text-white text-nowrap text-lg font-semibold px-4 max-lg:text-base max-lg:px-0 hover:underline"
          >
            My Bookings
          </Link>
          <Link
            to="/my-hotels"
            className="flex items-center text-white text-nowrap text-lg font-semibold px-4 max-lg:text-base max-lg:px-0 hover:underline"
          >
            My Hotels
          </Link>
          <div className="border border-white p-1 hover:border-red-400">
            {/* w-full */}
            <Link
              to="/sign-in"
              className="flex text-nowrap text-blue-600 bg-white p-2 px-3 text-lg font-bold hover:bg-gray-100"
            >
              Sign in
            </Link>
          </div>
        </div>

        {/* small to medium */}

        <div className="flex flex-col md:hidden z-40">
          {toggleMenu ? (
            <RxCross2
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
              className="cross cursor-pointer"
            />
          ) : (
            <GiHamburgerMenu
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
              className="hamburger cursor-pointer"
            />
          )}

          {toggleMenu && (
            //relative one step up md:hidden
            <div
              className={`absolute top-8 right-5 flex flex-col items-center p-3 border border-blue-600 bg-white text-blue-700 ${
                toggleMenu && "menu"
              }`}
            >
              {/* flex text-nowrap */}
              <Link
                to="/my-bookings"
                className={`p-1 font-semibold text-lg hover:text-blue-500 ${
                  toggleMenu && "bookings"
                }`}
                onClick={() => setToggleMenu(false)}
              >
                My Bookings
              </Link>
              <Link
                to="/my-hotels"
                className={`p-1 font-semibold text-lg hover:text-blue-500 ${
                  toggleMenu && "hotels"
                }`}
                onClick={() => setToggleMenu(false)}
              >
                My Hotels
              </Link>

              <hr
                className={`border-blue-600 w-28 my-2 ${toggleMenu && "line"}`}
              />

              <Link to="/sign-in">
                {/* flex justify-center items-center */}
                <button
                  className={`text-nowrap p-2 px-7 text-lg font-semibold bg-blue-600 text-white hover:text-blue-100 ${
                    toggleMenu && "sign-in"
                  }`}
                >
                  Sign In
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
