import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex justify-end w-screen h-16 bg-slate-700 border-b-2 border-rose-200">
    <Link
      to="/"
      className="flex justify-center items-center h-full p-8 text-rose-200 font-['Courier_New']"
    >
      Playground
    </Link>
  </nav>
);

export default Navbar;
