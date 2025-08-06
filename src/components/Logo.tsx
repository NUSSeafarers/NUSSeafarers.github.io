// components/Logo.tsx

interface LogoProps {
  size?: number; // size in pixels, default is 32
  className?: string; // optional Tailwind or custom classes
  alt?: string;
}

const Logo = ({ size = 32, className = "", alt = "NUS Seafarers Logo" }: LogoProps) => {
  return (
    <img
      src="/images/misc/favicon.png"
      alt={alt}
      width={size}
      height={size}
      className={`inline-block object-contain ${className}`}
    />
  );
};

export default Logo;
