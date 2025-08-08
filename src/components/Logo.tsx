// components/Logo.tsx

interface LogoProps {
  size?: number; 
  className?: string; 
  alt?: string;
}

const Logo = ({ size = 32, className = "", alt = "NUS Seafarers Logo" }: LogoProps) => {
  return (
    <img
      src="/images/misc/favicon.svg"
      alt={alt}
      width={size}
      height={size}
      className={`inline-block object-contain ${className}`}
    />
  );
};

export default Logo;
