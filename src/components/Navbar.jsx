import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // adjust path if needed

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["Company", "/company"],
    ["Blogs", "/blogs"],
    ["Contact ", "/contact"],
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-custom-gradient shadow-lg z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo + Brand Text inside white container */}
          <Link
            to="/"
            className="flex items-center space-x-2 bg-white rounded-full px-3 py-1 transition-transform duration-300 hover:scale-105 shadow-md"
          >
            <img src={logo} alt="Nexotra Logo" className="h-8 w-8 object-contain" />
            <span className="bg-custom-gradient text-transparent bg-clip-text font-bold text-xl">
              NEXOTRA
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-9 items-center">
            {navLinks.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className={`px-3 py-2 rounded transition 
                  ${
                    location.pathname === path
                      ? "bg-white text-black dark:bg-gray-100 dark:text-black"
                      : "text-white dark:text-gray-100 hover:bg-white hover:text-black dark:hover:bg-gray-100 dark:hover:text-black"
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white dark:text-gray-100">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-white/90 dark:bg-black/80 backdrop-blur rounded-b-xl shadow-md space-y-2 transition-all">
          {navLinks.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded transition
                ${
                  location.pathname === path
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-800 dark:text-gray-100 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
