import { useEffect, useState } from "react";

type NavButtonProps = {
  name: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NavButton = ({ name, href, children = [] }: NavButtonProps) => {
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const isActive = currentPath === href;
  const hasDropdown = children.length > 0;

  return (
    <li className="relative group">
      <a
        href={href}
        className="uppercase tracking-[0.15em] px-2 py-2 relative inline-block font-bold text-neutral-900"
      >
        {name}
        <span
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-20 bg-neutral-900 transition-transform duration-300 origin-center transform ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </a>

      {/* ⬇ Dropdown inside same <li> so hover still works */}
      {hasDropdown && (
        <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-48 bg-white shadow-lg rounded-md p-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 space-y-2 text-sm text-neutral-900 z-50">
          {children.map((child) => (
            <li key={child.href}>
              <a
                href={child.href}
                className="block px-4 py-2 hover:bg-sky-50 rounded whitespace-nowrap"
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavButton;
