import Logo from "../Logo";

type LogoTitleProps = {
  theme?: 'light' | 'dark';
};

const LogoTitle = ({ theme = 'light' }: LogoTitleProps) => {
  const textColor =
    theme === 'dark' ? 'text-white' : 'text-neutral-900';

  return (
    <a href="/" className="flex items-center gap-3 no-underline">
      <Logo />
      <span
        className={`text-l font-extrabold tracking-[0.02em] uppercase font-satoshi ${textColor}`}
      >
        NUS Seafarers
      </span>
    </a>
  );
};

export default LogoTitle;
