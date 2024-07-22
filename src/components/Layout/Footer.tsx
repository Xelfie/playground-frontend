import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="flex h-36 w-screen flex-col items-center justify-center gap-3 border-t border-slate-700 bg-slate-900">
    <span>A codebase made to experiment and learn!</span>
    {/* Goes to About me page */}
    <Link to="/about">About me</Link>
    {/* Add email, LinkedIn, ... */}
    <span>Contact me</span>
  </footer>
);

export default Footer;
