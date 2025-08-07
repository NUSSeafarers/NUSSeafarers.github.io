import React from "react";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

type InlineNavProps = {
  navItems: NavItem[];
  currentPath: string;
};

const InlineNav: React.FC<InlineNavProps> = ({ navItems, currentPath }) => {
  return (
    <nav className="flex justify-between w-full text-lg text-gray-300">
      {navItems.map((item) => (
        <div key={item.href} className="relative group">
          <a
            href={item.href}
            className={`hover:underline ${
              currentPath === item.href ? "font-semibold text-white" : ""
            }`}
          >
            {item.label}
          </a>

          {item.children && item.children.length > 0 && (
            <ul className="space-y-1 text-sm text-gray-300">
              {item.children.map((child) => (
                <li key={child.href}>
                  <a
                    href={child.href}
                    className={`hover:underline ${
                      currentPath === child.href
                        ? "text-white font-semibold"
                        : ""
                    }`}
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
};

export default InlineNav;
