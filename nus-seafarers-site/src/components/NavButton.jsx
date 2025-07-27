import { Link, useLocation } from "react-router-dom";

const NavButton = ({ name, href }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <li className="relative group">
      <Link
        to={href}
        className={`group uppercase tracking-[0.15em] px-5 py-4 relative inline-block font-bold text-[var(--text)] ${
          isActive ? "text-[var(--highlight)]" : ""
        }`}
      >
        {name}
        <span
          className={`absolute bottom-0 left-0 h-[2px] w-full bg-[var(--text)] transition-transform duration-300 origin-center transform ${
            isActive
              ? "scale-x-100"
              : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </Link>
    </li>
  );
};

export default NavButton;
