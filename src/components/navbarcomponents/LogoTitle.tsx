const LogoTitle = () => {
  return (
    <div className="flex items-center gap-3">
      <img src="/favicon.svg" alt="Logo" className="w-8 h-8" />
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
    </div>
  );
};

export default LogoTitle;
