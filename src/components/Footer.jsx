import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-yellow-800 text-white h-24 p-8 relative">
      <div className="flex justify-center items-center">
        VR BRICKS &copy; 2022
      </div>

      <div className="absolute bottom-2 sm:bottom-10 right-5">
        <div>Links</div>
        <div className="flex items-center justify-center flex-col sm:flex-row sm:space-x-4 text-gray-400">
          <Link className="text-gray-300 underline" to="/">
            Homepage
          </Link>
          <Link className="text-gray-300 underline" to="/marketplace">
            Marketplace
          </Link>
          <Link className="text-gray-300 underline" to="/about">
            About
          </Link>
          <Link className="text-gray-300 underline" to="/profile">
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
