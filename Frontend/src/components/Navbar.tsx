import { Link, useLocation } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { GiFoldedPaper } from "react-icons/gi";
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <GiFoldedPaper className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">RapidCV</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {/* Home Button */}
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/" ? "font-bold text-white" : "text-gray-300"
              } hover:font-bold hover:text-white`}
            >
              Home
            </Link>

            {/* Our Products Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  dropdownOpen ? "font-bold text-white" : "text-gray-300"
                } hover:font-bold hover:text-white`}
              >
                Our Products
                <FaChevronDown className="ml-1" />
              </button>
              {dropdownOpen && (
                <div
                  onMouseLeave={closeDropdown}
                  className="absolute mt-2 w-48 rounded-md shadow-lg bg-white z-10"
                >
                  <ul className="py-1 text-gray-700">
                    <li>
                      <Link
                        to="/resumebuilder"
                        className="block px-4 py-2 text-sm hover:underline"
                      >
                        Resume Builder
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/atschecker"
                        className="block px-4 py-2 text-sm hover:underline"
                      >
                        ATS Score Checker
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/resumereview"
                        className="block px-4 py-2 text-sm hover:underline"
                      >
                        Resume Review
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/templates"
                        className="block px-4 py-2 text-sm hover:underline"
                      >
                        Templates
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Support Button */}
            <Link
              to="/faq"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/faq" ? "font-bold text-white" : "text-gray-300"
              } hover:font-bold hover:text-white`}
            >
              FAQ
            </Link>

            {/* GitHub Link */}
            <a
              href="https://github.com/RapidCV/RapidCV"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              <FaGithub className="h-6 w-5 inline-block mr-1" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
