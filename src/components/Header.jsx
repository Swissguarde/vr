import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const location = useLocation();

  const { pathname } = location;
  const showNav = () => {
    setNav((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`${
          scroll && "bg-blue-800"
        } flex justify-between px-8 sm:px-12 py-2 fixed top-0 left-0 w-full z-[100] items-center shadow-md`}
      >
        <Link
          to="/"
          className="flex items-center font-bold text-xl md:text-3xl"
        >
          <div>
            <img
              src={logo}
              alt="logo"
              className="object-cover w-24 h-12 sm:h-20 sm:w-28 mr-1 sm:mr-3 rounded"
            />
          </div>
          <div
            className={`${
              scroll ? "text-white" : "text-blue-500"
            } hidden sm:block customFont tracking-wider`}
          >
            VR BRICKS
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 text-xl customFont">
          <Link
            to="/marketplace"
            className={`${
              pathname === "/marketplace"
                ? "text-blue-600 border-b-2 border-blue-900"
                : "text-blue-400"
            }`}
          >
            Marketplace
          </Link>
          <Link
            to="/create-listing"
            className={`${
              pathname === "/create-listing"
                ? "text-blue-600 border-b-2 border-blue-900"
                : "text-blue-400"
            }`}
          >
            List Property
          </Link>
          <Link
            to="/blog"
            className={`${
              pathname === "/blog"
                ? "text-blue-600 border-b-2 border-blue-900"
                : "text-blue-400"
            }`}
          >
            Technical Paper
          </Link>
          <Link
            to="/about"
            className={`${
              pathname === "/about"
                ? "text-blue-600 border-b-2 border-blue-900"
                : "text-blue-400"
            }`}
          >
            About
          </Link>
          <Link
            to="/profile"
            className={`${
              pathname === "/profile"
                ? "text-blue-600 border-b-2 border-blue-900"
                : "text-blue-400"
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
          className={`h-[100vh] fixed top-0 right-0 flex flex-col justify-center items-center w-full md:hidden bg-blue-800 z-40 text-white duration-700 gap-3  text-2xl ${
            nav ? "right-0" : "right-[-100vw]"
          }`}
        >
          <Link
            onClick={showNav}
            to="/"
            className="text-white font-bold hover:text-blue-700 duration-200 ease-in hover:bg-white p-3"
          >
            HOME
          </Link>
          <Link
            onClick={showNav}
            to="/marketplace"
            className="text-white font-bold hover:text-blue-700 duration-200 ease-in hover:bg-white p-3"
          >
            MARKETPLACE
          </Link>
          <Link
            onClick={showNav}
            to="/create-listing"
            className="text-white font-bold hover:text-blue-700 duration-200 ease-in hover:bg-white p-3"
          >
            LIST PROPERTY
          </Link>

          <Link
            onClick={showNav}
            to="/blog"
            className="text-white font-bold hover:text-blue-700 duration-200 ease-in hover:bg-white p-3"
          >
            TECHNICAL PAPER
          </Link>
          <Link
            onClick={showNav}
            to="/about"
            className="text-white font-bold hover:text-blue-700 duration-200 ease-in hover:bg-white p-3"
          >
            ABOUT
          </Link>
          <Link
            onClick={showNav}
            to="/profile"
            className="text-white font-bold hover:text-blue-700 duration-200 ease-in hover:bg-white p-3"
          >
            PROFILE
          </Link>
        </nav>
      </header>
    </>
  );
};
export default Header;
