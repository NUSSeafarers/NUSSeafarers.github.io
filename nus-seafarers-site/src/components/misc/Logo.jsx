import { Link } from "react-router-dom";

const Logo = ({ size = "w-32" }) => {
  return (
    <div className="flex items-center gap-2">
      <Link to="/">
        <img
          src="/NUS_Seafarers_logo.svg"
          alt="NUS Seafarers Logo"
          className={`${size} h-auto object-contain`}
        />
      </Link>
    </div>
  );
};

export default Logo;
