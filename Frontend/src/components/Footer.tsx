import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-white font-semibold mb-4">Connect with Us</h2>
            <p>India</p>
            <p>Email: developers@rapidcv.com</p>
          </div>

          {/* Our Products */}
          <div>
            <h2 className="text-white font-semibold mb-4">Our Products</h2>
            <ul>
              <li><Link to="/resumebuilder" className="hover:underline">Resume Builder</Link></li>
              <li><Link to="/atschecker" className="hover:underline">ATS Score Checker</Link></li>
              <li><Link to="/resumereview" className="hover:underline">Resume Review</Link></li>
              <li><Link to="/templates" className="hover:underline">Templates</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-4">Rapid CV</h2>
            <ul>
              <li><Link to="/home" className="hover:underline">Home</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/faq" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center mt-8">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400" target='_blank' rel='noopener noreferrer'>
              <FaTwitter className="text-blue-400 w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400" target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className="text-blue-600 w-6 h-6" />
            </a>
          </div>

          {/* Privacy & Policies */}
          <div>
            <Link to="privacyandpolicy" className="hover:underline">Privacy & Policies</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {currentYear} RapidCV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
