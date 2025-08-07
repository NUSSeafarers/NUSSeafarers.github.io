import { useState } from "react";
import NavButton from "./NavButton";
import HamburgerButton from "./HamburgerButton";
import MobileDropdown from "./MobileDropdown";
import { navItems } from "../../data/navItems";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top Row: Logo + Nav + Hamburger */}
      <div className="flex items-center justify-between w-full">
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-bold uppercase text-[#002147]">
          {navItems.map((item) => (
            <NavButton
              key={item.href}
              name={item.label}
              href={item.href}
              children={item.children}
            />
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <HamburgerButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>

      {/* Mobile Dropdown Menu */}
      <MobileDropdown
        isOpen={isOpen}
        navItems={navItems}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
