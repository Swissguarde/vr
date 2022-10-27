import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav((prev) => !prev);
  };
  return (
    <>
      <header className="bg-yellow-800 flex justify-around items-center py-[25px]">
        <Link
          to="/"
          className="flex items-center font-bold text-2xl md:text-3xl"
        >
          <div>
            <img
              src={logo}
              alt=""
              className="object-cover w-10 h-10 mr-2 sm:mr-4 border-x border-yellow-900 bg-black/30 p-1 rounded"
            />
          </div>
          <div className="text-white">VR BRICKS</div>
        </Link>

        <nav className="hidden md:flex gap-3 text-xl">
          <Link to="/marketplace" className="text-white">
            Marketplace
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/profile" className="text-white">
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
