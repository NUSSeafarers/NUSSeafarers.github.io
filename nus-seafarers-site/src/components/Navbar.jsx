import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import NavButton from "./NavButton";
import Logo from "./misc/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="bg-[var(--base)] text-[var(--text)] px-[10%] py-2 transition-colors duration-1000 z-50 relative">
      <nav className="flex justify-between items-center w-full">
        {/* Branding */}
        <Link
          to="/"
          className="flex items-center gap-3 uppercase tracking-[0.15em] px-5 py-4 whitespace-nowrap font-bold text-[var(--text)]"
        >
          <Logo size="w-8" />
          NUS Seafarers
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 m-0 p-0 list-none">
          {navItems.map((item) => (
            <NavButton key={item.name} name={item.name} href={item.href} />
          ))}
        </ul>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <HamburgerButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 bg-[var(--base)] p-4 rounded shadow transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`uppercase tracking-[0.15em] py-2 px-3 block font-bold text-[var(--text)] ${
                location.pathname === item.href ? "text-[var(--highlight)]" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
