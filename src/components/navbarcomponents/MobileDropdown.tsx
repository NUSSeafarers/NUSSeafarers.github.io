import React from "react";

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
      className={`absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md p-4 space-y-2 text-sm font-bold uppercase text-neutral-900 transition-all duration-300 transform z-50 ${
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      } md:hidden`}
    >
      {navItems.map((item) => (
        <div key={item.href}>
          <a
            href={item.href}
            className="block px-4 py-2 hover:bg-sky-50 rounded whitespace-nowrap text-md text-neutral-900"
            onClick={onClose}
          >
            {item.label}
          </a>

          {/* Child Links */}
          {item.children?.length && (
            <div className="ml-4 mt-1 space-y-1 text-xs font-medium normal-case text-sm text-neutral-700">
              {item.children.map((child) => (
                <a
                  key={child.href}
                  href={child.href}
                  className="block px-2 py-1 hover:bg-sky-100 rounded text-sm"
                  onClick={onClose}
                >
                  {child.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileDropdown;
