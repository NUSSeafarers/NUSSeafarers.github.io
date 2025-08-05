import { useEffect, useState } from "react";

type NavButtonProps = {
  name: string;
  href: string;
};

const NavButton = ({ name, href }: NavButtonProps) => {
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const isActive = currentPath === href;

  return (
    <li className="relative group">
      <a
        href={href}
        className={`uppercase tracking-[0.15em] px-2 py-2 relative inline-block font-bold text-neutral-900`}
      >
        {name}
        <span
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-20 bg-neutral-900 transition-transform duration-300 origin-center transform ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </a>
    </li>
  );
};

export default NavButton;
