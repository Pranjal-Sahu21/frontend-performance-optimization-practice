import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50
      flex items-center justify-between
      px-6 md:px-16 lg:px-24 xl:px-32 py-4
      h-20 bg-[#121313]/20
      backdrop-blur-2xl
      shadow-lg text-white"
    >
      {/* Logo */}
      <Link to="/"
        onClick={() => navigate("/")}
        className="text-xl tracking-wide cursor-pointer"
      >
        React <span className="italic text-white/70">Optimization</span>
      </Link>

      {/* MENU */}
      <div
        className={`absolute md:static top-0 left-0 h-screen md:h-auto
        bg-[#121313]/90 backdrop-blur-2xl md:bg-transparent
        flex flex-col md:flex-row items-center justify-center
        md:justify-start gap-8 text-2xl md:text-sm transition-all duration-300
        
        ${open ? "w-full bg-black/95" : "w-0 md:w-auto overflow-hidden"}`}
      >
        <Link
          to="/"
          onClick={() => {
            setOpen(false);
          }}
          className="cursor-pointer hover:text-white/70 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => {
            setOpen(false);
          }}
          className="cursor-pointer hover:text-white/70 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          to="/store"
          onClick={() => {
            setOpen(false);
          }}
          className="cursor-pointer hover:text-white/70 transition-colors duration-200"
        >
          Store
        </Link>
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="cursor-pointer hover:text-white/70 transition-colors duration-200"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className={`${open ? "hidden" : "md:hidden p-2 rounded-md"}`}
      >
        ☰
      </button>
      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className={`${!open ? "hidden" : "md:hidden p-2 z-10"}`}
      >
        ✕
      </button>
    </nav>
  );
};

export default Navbar;
