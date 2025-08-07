import React from "react";
import LogoTitle from "./LogoTitle";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

type MobileDropdownProps = {
  isOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
};

const MobileDropdown = ({ isOpen, navItems, onClose }: MobileDropdownProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-neutral-900 text-white transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Close Button */}
      <div className="flex justify-between items-center p-6">
        <LogoTitle theme="dark"/>
        <button
          className="text-sm font-semibold text-white hover:underline"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      {/* Menu Items */}
      <div className="p-8 space-y-6">

        {navItems.map((item) => (
          <div key={item.href}>
            <a
              href={item.href}
              onClick={onClose}
              className="block text-2xl font-light hover:underline transition"
            >
              {item.label}
            </a>

            {/* Children */}
            {item.children?.length && (
              <div className="ml-4 mt-2 space-y-1">
                {item.children.map((child) => (
                  <a
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="block text-base text-neutral-400 hover:text-white transition"
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileDropdown;
