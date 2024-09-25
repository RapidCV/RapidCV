import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { GiFoldedPaper } from "react-icons/gi";

export default function Navbar() {
    return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <GiFoldedPaper className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">RapidCV</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a
              href="https://github.com/RapidCV/RapidCV"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              <FaGithub  className="h-6 w-5 inline-block mr-1"/>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
};