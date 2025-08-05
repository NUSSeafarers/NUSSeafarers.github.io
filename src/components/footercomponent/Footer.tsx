import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
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
      <footer className="bg-neutral-900 text-white py-10 px-6 md:px-20 rounded-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-2">
              <span>
                <span className="text-orange-500">NUS</span> Seafarers
              </span>
            </h2>

            <p className="text-sm text-gray-300 mb-4 max-w-md">
              For any enquiry about future events, drop us a message at any of
              our social media or through the NUS Seafarers e-mail.
            </p>

            <nav className="flex gap-4 text-sm text-gray-300">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`hover:underline ${
                    currentPath === item.href
                      ? "font-semibold text-white"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <p className="mt-6 text-xs text-gray-500">
              Copyright © {new Date().getFullYear()}, NUS Seafarers. All Rights Reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-sm font-semibold mb-2">Contact Us</h3>
            <a
              href="mailto:youremail@example.com"
              className="flex items-center gap-2 border border-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
