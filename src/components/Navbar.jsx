import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/store", label: "Store" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className="nav-root sticky top-0 z-50 flex items-center justify-between
          px-6 md:px-16 lg:px-28 xl:px-32 h-16
          bg-[#0a0a0a]/60 backdrop-blur-xl"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        {/* Logo */}
        <Link to="/" className="nav-logo">
          React <span>Optimization</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? "active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger / Close — single button, animates between states */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden p-2 relative"
          aria-label={open ? "Close menu" : "Open menu"}
          style={{ width: 32, height: 32 }}
        >
          {/* Top line → rotates to first arm of × */}
          <span
            style={{
              display: "block",
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 18,
              height: 1,
              background: "rgba(255,255,255,0.6)",
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: open
                ? "translate(-50%, -50%) rotate(45deg)"
                : "translate(-50%, calc(-50% - 4px)) rotate(0deg)",
            }}
          />
          {/* Bottom line — shorter at rest, equalises + rotates to second arm of × */}
          <span
            style={{
              display: "block",
              position: "absolute",
              top: "50%",
              left: "50%",
              height: 1,
              background: "rgba(255,255,255,0.6)",
              transition:
                "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1), margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              width: open ? 18 : 12,
              marginLeft: open ? 0 : 3,
              transform: open
                ? "translate(-50%, -50%) rotate(-45deg)"
                : "translate(-50%, calc(-50% + 4px)) rotate(0deg)",
            }}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${open ? "open" : "closed"} md:hidden`}>
        {/* Label */}
        <div
          style={{
            position: "absolute",
            top: "1.25rem",
            left: "1.5rem",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          Navigation
        </div>

        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setOpen(false)}
            className={`mobile-nav-link ${location.pathname === to ? "active" : ""}`}
          >
            {label}
          </Link>
        ))}

        {/* Bottom label */}
        <div
          style={{
            position: "absolute",
            bottom: "1.5rem",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.15)",
          }}
        >
          React Performance — 2025
        </div>
      </div>
    </>
  );
};

export default Navbar;
