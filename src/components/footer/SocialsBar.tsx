import {
  Mail,
  Youtube,
  Instagram,
} from "lucide-react"; 
import { FaTelegramPlane } from "react-icons/fa"; 

const socials = [
  { href: "mailto:you@example.com", icon: Mail },
  { href: "https://www.youtube.com/@nusseafarers4547", icon: Youtube },
  { href: "https://t.me/nusseafarers", icon: FaTelegramPlane },
  { href: "https://www.instagram.com/nus.seafarers.official/", icon: Instagram },
];

const SocialsBar = () => {
  return (
    <div className="flex gap-4">
      {socials.map(({ href, icon: Icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black shadow-sm hover:scale-105 transition"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialsBar;
