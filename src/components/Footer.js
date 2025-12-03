import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/study.png" 
                alt="StudyTap Logo" 
                className="w-14 h-14 object-contain" 
              />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop solution for engineering question papers. Excel in your exams with StudyTap.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
         

              <a 
                href="https://x.com/study_tap?t=TBlxkquZ1l4d3Cu8GWqNWg&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a 
                href="https://www.instagram.com/studytap.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a 
  href="https://t.me/studytapofficial" 
  target="_blank" 
  rel="noopener noreferrer"
  className="hover:text-blue-400 transition"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="22" 
    height="22" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12s12-5.372 12-12C24 5.373 18.627 0 12 0zm5.59 8.221l-1.837 8.644c-.138.617-.504.768-1.02.477l-2.832-2.088-1.366 1.315c-.151.151-.278.278-.57.278l.204-2.882 5.251-4.74c.228-.203-.05-.317-.354-.114l-6.492 4.086-2.798-.873c-.607-.19-.62-.605.127-.895l10.94-4.214c.507-.186.951.123.787.893z"/>
  </svg>
</a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-500 transition">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-500 transition">Products</Link>
              </li>
              <li>
                <Link to="/branches" className="hover:text-blue-500 transition">Branches</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500 transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Branch List */}
          <div>
            <h4 className="text-white font-bold mb-6">Engineering Branches</h4>
            <ul className="space-y-3 text-sm">
              <li>CSE</li>
              <li>EEE</li>
              <li>Civil Engineering</li>
              <li>Mechanical (MECH)</li>
              <li>Information Technology (IT)</li>
              <li>Electronics (ECE)</li>
              <li>+ 8 other Branches</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">

              <li className="flex gap-3">
                <span className="text-blue-500">✉</span>
                <a href="mailto:studytap21@gmail.com" className="hover:text-blue-500 transition">
                  studytap21@gmail.com
                </a>
              </li>

              <li className="flex flex-col text-blue-500 gap-2">
                <span className="text-gray-300">📞</span>

                <a href="tel:+916304702631" className="hover:text-blue-500 transition">
                  +91 6304-702631
                </a>

                <a href="tel:+917816024370" className="hover:text-blue-500 transition">
                  +91 7816-024370
                </a>
              </li>

              <li className="flex gap-3">
                <span className="text-blue-500">📍</span>
                <span>
                  Hyderabad, Telangana<br/>
                  India - 500001
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2022 StudyTap. All rights reserved.</p>

          <div className="flex gap-6 mt-6 md:mt-0">
            <Link to="/privacy" className="hover:text-blue-500 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-500 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
