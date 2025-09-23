import LogoTitle from "./LogoTitle";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <header className="bg-transparent top-0 z-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        <LogoTitle theme="light"/>
        <NavMenu />
      </nav>
    </header>
  );
}
