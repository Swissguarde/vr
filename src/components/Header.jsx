import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-yellow-700 z-[99] sticky top-0 left-0 px-6 py-4 text-white flex justify-between items-center">
      <div>VR REAL ESTATE</div>
      <div className="flex space-x-3 items-center">
        <Link to="/about" className="text-white">
          About Us
        </Link>
      </div>
    </div>
  );
};
export default Header;
