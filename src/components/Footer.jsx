import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bottom-0 left-0 bg-yellow-700 w-full h-24 text-white">
      <div className="flex items-center justify-center gap-3">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
      </div>
    </div>
  );
};
export default Footer;
