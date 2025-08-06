import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" }
];

const Footer = () => {
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <div className="m-2">
      <footer className="relative bg-neutral-900 text-white py-16 px-6 md:px-20 overflow-hidden rounded-2xl mx-auto">
        {/* Outlined Logo Background */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none">
          <h1 className="text-[12rem] md:text-[18rem] font-extrabold text-white/1 tracking-tight leading-none">
            SEAFARERS
          </h1>
        </div>

        {/* Footer Content */}
        <div className="relative grid md:grid-cols-2 gap-8 z-10">
          {/* Left Section */}
          <div>
            <h2 className="flex items-center gap-3 text-4xl font-bold mb-2">
              <span>
                <span className="text-orange-500">NUS</span> Seafarers
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-4 max-w-md">
              For any enquiry about future events, drop us a message at any of our social media or through the NUS Seafarers e-mail.
            </p>

            <nav className="flex gap-4 text-lg text-gray-300">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`hover:underline ${currentPath === item.href ? "font-semibold text-white" : ""
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <p className="mt-6 text-md text-gray-500">
              Copyright © {new Date().getFullYear()}, NUS Seafarers. All Rights Reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <div className="mb-6">
              <h3 className="text-md font-semibold mb-2">Contact Us</h3>
              <a
                href="mailto:youremail@example.com"
                className="flex items-center gap-2 border border-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition"
              >
                Email
              </a>
            </div>

            {/* Back to top link */}
            <a
              href="#top"
              className="text-lg text-gray-400 hover:text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Back to top
            </a>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
