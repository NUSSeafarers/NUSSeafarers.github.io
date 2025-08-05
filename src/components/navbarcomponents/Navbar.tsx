import { useState, useEffect, useState as useReactState } from "react";
import LogoTitle from "./LogoTitle";
import NavMenu from "./NavMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useReactState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <header className="bg-transparent sticky top-0 z-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        <LogoTitle />
        <NavMenu />
      </nav>
    </header>
  );
}
