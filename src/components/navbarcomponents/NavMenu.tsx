import { useState } from "react";
import NavButton from "./NavButton";
import HamburgerButton from "./HamburgerButton";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
];

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top Row: Logo + Nav + Hamburger */}
      <div className="flex items-center justify-between w-full">
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-bold uppercase text-[#002147]">
          {navItems.map((item) => (
            <NavButton key={item.href} name={item.label} href={item.href} />
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <HamburgerButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md p-4 space-y-2 text-sm font-bold uppercase text-neutral-900 transition-all duration-300 transform ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        } md:hidden`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block hover:text-blue-600"
            onClick={() => setIsOpen(false)} // close menu when clicked
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
