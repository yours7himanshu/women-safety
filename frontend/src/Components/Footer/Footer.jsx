import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart, FaShieldAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 text-gray-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gray-200 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gray-300 rounded-full opacity-25 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gray-200 rounded-full opacity-30 blur-lg"></div>
      </div>

      {/* Top wave decoration */}
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <FaShieldAlt className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                ProtectHerZone
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              Empowering women with comprehensive tools and resources for a safer tomorrow. 
              Together, we're building a world where every woman feels secure and supported.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-700">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600 transition-colors duration-300"></span>
                Home
              </a></li>
              <li><a href="/about" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600 transition-colors duration-300"></span>
                About Us
              </a></li>
              <li><a href="/services" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600 transition-colors duration-300"></span>
                Services
              </a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600 transition-colors duration-300"></span>
                Contact
              </a></li>
            </ul>
          </div>

          {/* Resources & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-700">Resources</h3>
            <ul className="space-y-3 mb-8">
              <li><a href="/safety-tips" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600 transition-colors duration-300"></span>
                Safety Tips
              </a></li>
              <li><a href="/emergency" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600 transition-colors duration-300"></span>
                Emergency Guide
              </a></li>
              <li><a href="/support" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600 transition-colors duration-300"></span>
                Support Groups
              </a></li>
              <li><a href="/legal-aid" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600 transition-colors duration-300"></span>
                Legal Aid
              </a></li>
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-700">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-gray-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-md">
                    <FaFacebook className="text-gray-600 group-hover:text-white text-lg transition-colors duration-300" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-gray-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-md">
                    <FaTwitter className="text-gray-600 group-hover:text-white text-lg transition-colors duration-300" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-gray-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-md">
                    <FaInstagram className="text-gray-600 group-hover:text-white text-lg transition-colors duration-300" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-gray-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-md">
                    <FaLinkedin className="text-gray-600 group-hover:text-white text-lg transition-colors duration-300" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-600 mb-4 md:mb-0">
              <span>&copy; {new Date().getFullYear()} ProtectHerZone. All rights reserved.</span>
              <FaHeart className="mx-2 text-pink-500 animate-pulse" />
              <span className="text-gray-500">Made with love for women's safety</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-pink-600 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-pink-600 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-500 hover:text-pink-600 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;