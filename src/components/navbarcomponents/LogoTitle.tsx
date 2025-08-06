import Logo from "../Logo";

const LogoTitle = () => {
  return (
    <a href="/" className="flex items-center gap-3 no-underline">
      <Logo />
      <span
        className="
          text-l
          font-extrabold
          tracking-[0.02em]
          text-neutral-900
          uppercase
          font-satoshi
        "
      >
        NUS Seafarers
      </span>
    </a>
  );
};

export default LogoTitle;
