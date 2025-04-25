import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <div className="m-2">
      <footer className="bg-neutral-900 text-white py-10 px-6 md:px-20 rounded-2xl shadow-xl mx-auto">
        <div className="mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div>
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-orange-500">NUS</span> Seafarers
            </h2>
            <p className="text-sm text-gray-300 mb-4 max-w-md">
              For any enquiry about future events, drop us a message at any of
              our social media or through the NUS Seafarers e-mail.
            </p>

            {/* Icon placeholder */}
            <a href="#" className="inline-block mb-4">
              <img
                src="..\..\assets\images\new-logo-2025\NUS_Seafarers_logo_svg.svg"
                alt="email icon"
                className="w-6 h-6"
              />
            </a>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-sm font-semibold mb-2">Contact Us</h3>
            <a
              href="mailto:youremail@example.com"
              className="border border-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition"
            >
              📧 Email
            </a>
          </div>

          {/* Links */}
          <div>
            <nav className="flex gap-4 text-sm text-gray-300">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`hover:underline ${
                    location.pathname === item.href
                      ? "font-semibold text-white"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            {/* Copyright */}
            <p className="mt-6 text-xs text-gray-500">
              Copyright © 2025, NUS Seafarers. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
