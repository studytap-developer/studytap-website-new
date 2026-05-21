
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
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
            <div className="flex gap-4 mt-6">
              <a  className="hover:text-blue-500 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href=" https://x.com/study_tap?t=TBlxkquZ1l4d3Cu8GWqNWg&s=08
" className="hover:text-blue-500 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/studytap.official/?igshid=MDM4ZDc5MmU%3D" className="hover:text-blue-500 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a  className="hover:text-blue-500 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-500 transition">Home</a>
              </li>
              <li>
                <a href="/products" className="hover:text-blue-500 transition">Products</a>
              </li>
              <li>
                <a href="/branches" className="hover:text-blue-500 transition">Branches</a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-500 transition">About Us</a>
              </li>
              <li>
                <a href="contact" className="hover:text-blue-500 transition">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Engineering Branches</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-500 transition">Computer Science (CSE)</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">Electrical (EEE)</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">Civil Engineering</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">Mechanical (MECH)</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">Information Technology (IT)</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">Electronics (ECE)</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">+ 8 other Branches</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-blue-500">✉</span>
                <a href="mailto:support@studytap.co.in" className="hover:text-blue-500 transition">
                Studytap21@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500">📞</span>
                <a href="tel:+919876543210" className="hover:text-blue-500 transition">
                +91 6304-702631 
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

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2022 StudyTap. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="/privacy" className="hover:text-blue-500 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-500 transition">Terms & Conditions</a>

          </div>
        </div>
      </div>
    </footer>
  );
}
