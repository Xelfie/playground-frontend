import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex h-16 w-full justify-end border-b border-rose-200 bg-slate-800">
    <Link
      to="/"
      className="flex h-full items-center justify-center p-8 font-['Courier_New'] text-rose-200"
    >
      Playground
    </Link>
  </nav>
);

export default Navbar;
