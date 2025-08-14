import React from "react";

type HamburgerButtonProps = {
  isOpen: boolean;
  toggle: () => void;
};

const HamburgerButton = ({ isOpen, toggle }: HamburgerButtonProps) => {
  return (
    <button
      onClick={toggle}
      className="w-5 h-3 flex flex-col justify-between items-center cursor-pointer md:hidden"
      aria-label="Toggle menu"
    >
      {/* Top Bar */}
      <span
        className={`block w-full h-[1px] rounded-sm bg-neutral-900 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-[5.5px] -rotate-45" : ""
        }`}
      />
      {/* Middle Bar */}
      <span
        className={`block w-full h-[1px] rounded-sm bg-neutral-900 transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Bottom Bar */}
      <span
        className={`block w-full h-[1px] rounded-sm bg-neutral-900 transition-transform duration-300 ease-in-out ${
          isOpen ? "-translate-y-[5.5px] rotate-45" : ""
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
