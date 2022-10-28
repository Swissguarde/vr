import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const { pathname } = location;
  const showNav = () => {
    setNav((prev) => !prev);
  };
  return (
    <>
      <header className="bg-yellow-800 flex justify-around fixed top-0 left-0 w-full z-[99] items-center py-[25px]">
        <Link
          to="/"
          className="flex items-center font-bold text-2xl md:text-3xl"
        >
          <div>
            <img
              src={logo}
              alt=""
              className="object-cover w-24 mr-2 sm:mr-3 rounded"
            />
          </div>
          <div className="text-white">VR BRICKS</div>
        </Link>

        <nav className="hidden md:flex gap-6 text-xl">
          <Link
            to="/marketplace"
            className={`${
              pathname === "/marketplace"
                ? "text-yellow-600 border-b-2 border-yellow-900"
                : "text-white"
            }`}
          >
            Marketplace
          </Link>
          <Link
            to="/create-listing"
            className={`${
              pathname === "/create-listing"
                ? "text-yellow-600 border-b-2 border-yellow-900"
                : "text-white"
            }`}
          >
            List Property
          </Link>
          <Link
            to="/blog"
            className={`${
              pathname === "/blog"
                ? "text-yellow-600 border-b-2 border-yellow-900"
                : "text-white"
            }`}
          >
            Blog
          </Link>
          <Link
            to="/about"
            className={`${
              pathname === "/about"
                ? "text-yellow-600 border-b-2 border-yellow-900"
                : "text-white"
            }`}
          >
            About
          </Link>
          <Link
            to="/profile"
            className={`${
              pathname === "/profile"
                ? "text-yellow-600 border-b-2 border-yellow-900"
                : "text-white"
            }`}
          >
            Profile
          </Link>
        </nav>

        {nav ? (
          <div
            onClick={showNav}
            className="fixed cursor-pointer right-[30px] text-3xl text-white z-50 md:hidden"
          >
            <FaTimes />
          </div>
        ) : (
          <div
            onClick={showNav}
            className="text-3xl text-white cursor-pointer md:hidden"
          >
            {" "}
            <FaBars />
          </div>
        )}
        <nav
          className={`h-[100vh] fixed top-0 right-0 flex flex-col justify-center items-center w-full md:hidden bg-yellow-800 z-40 text-white duration-700 gap-3  text-2xl ${
            nav ? "right-0" : "right-[-100vw]"
          }`}
        >
          <Link
            onClick={showNav}
            to="/"
            className="text-white font-bold hover:text-yellow-700 duration-200 ease-in hover:bg-white p-3"
          >
            HOME
          </Link>
          <Link
            onClick={showNav}
            to="/marketplace"
            className="text-white font-bold hover:text-yellow-700 duration-200 ease-in hover:bg-white p-3"
          >
            MARKETPLACE
          </Link>
          <Link
            onClick={showNav}
            to="/create-listing"
            className="text-white font-bold hover:text-yellow-700 duration-200 ease-in hover:bg-white p-3"
          >
            LIST PROPERTY
          </Link>

          <Link
            onClick={showNav}
            to="/blog"
            className="text-white font-bold hover:text-yellow-700 duration-200 ease-in hover:bg-white p-3"
          >
            BLOG
          </Link>
          <Link
            onClick={showNav}
            to="/about"
            className="text-white font-bold hover:text-yellow-700 duration-200 ease-in hover:bg-white p-3"
          >
            ABOUT
          </Link>
          <Link
            onClick={showNav}
            to="/profile"
            className="text-white font-bold hover:text-yellow-700 duration-200 ease-in hover:bg-white p-3"
          >
            PROFILE
          </Link>
        </nav>
      </header>
    </>
  );
};
export default Header;
