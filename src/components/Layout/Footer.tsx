import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="w-screen h-36 bg-slate-900 flex flex-col gap-3 justify-center items-center border-t-2 border-slate-700">
    <span>A codebase made to experiment and learn!</span>
    {/* Goes to About me page */}
    <Link to="/about">About me</Link>
    {/* Add email, LinkedIn, ... */}
    <span>Contact me</span>
  </footer>
);

export default Footer;
