import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[99] flex flex-wrap items-center justify-between px-2 py-3 bg-yellow-800">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-2xl flex items-center font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              <div>
                <img
                  src={logo}
                  alt=""
                  className="object-cover w-10 h-10 mr-4 border-y border-yellow-900 p-1 rounded"
                />
              </div>
              VR REAL ESTATE
            </Link>

            <button
              className="text-white cursor-pointer text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="/marketplace"
                  className="px-3 py-2 flex items-center text-xs md:text-xl leading-snug text-white hover:bg-yellow-900"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="ml-2">Marketplace</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="px-3 py-2 flex items-center text-xs md:text-xl leading-snug text-white hover:bg-yellow-900"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sign-in"
                  className="px-3 py-2 flex items-center text-xs md:text-xl leading-snug text-white hover:bg-yellow-900"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="ml-2">Log In</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="px-3 py-2 flex items-center text-xs md:text-xl leading-snug text-white hover:bg-yellow-900"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="ml-2">Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
