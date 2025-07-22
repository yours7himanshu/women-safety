import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart, FaShieldAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-pink-800 via-rose-700 to-pink-700 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-700 rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-rose-700 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-600 rounded-full opacity-10 blur-lg"></div>
      </div>

      {/* Top wave decoration */}
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <FaShieldAlt className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-200 to-rose-200 bg-clip-text text-transparent">
                ProtectHerZone
              </h3>
            </div>
            <p className="text-pink-100 leading-relaxed mb-6 max-w-md">
              Empowering women with comprehensive tools and resources for a safer tomorrow. 
              Together, we're building a world where every woman feels secure and supported.
            </p>
            
            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-pink-800 to-rose-800 rounded-xl p-4 w-[60%] border border-pink-700">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3 animate-pulse">
                  <FaPhone className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-sm text-pink-200">24/7 Emergency Helpline</p>
                  <p className="text-lg font-bold text-white">1800-XXX-XXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-pink-200">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-pink-300 hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                Home
              </a></li>
              <li><a href="/about" className="text-pink-300 hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                About Us
              </a></li>
              <li><a href="/services" className="text-pink-300 hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                Services
              </a></li>
              <li><a href="/contact" className="text-pink-300 hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                Contact
              </a></li>
            </ul>
          </div>

          {/* Resources & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-pink-200">Resources</h3>
            <ul className="space-y-3 mb-8">
              <li><a href="/safety-tips" className="text-pink-300 hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                Safety Tips
              </a></li>
              <li><a href="/emergency" className="text-pink-300 hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                Emergency Guide
              </a></li>
              <li><a href="/support" className="text-pink-300 hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                Support Groups
              </a></li>
              <li><a href="/legal-aid" className="text-pink-300 hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                Legal Aid
              </a></li>
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-pink-200">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-700 to-rose-700 hover:from-pink-600 hover:to-rose-600 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                    <FaFacebook className="text-white text-lg" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-700 to-rose-700 hover:from-pink-600 hover:to-rose-600 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                    <FaTwitter className="text-white text-lg" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-700 to-rose-700 hover:from-pink-600 hover:to-rose-600 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                    <FaInstagram className="text-white text-lg" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-700 to-rose-700 hover:from-pink-600 hover:to-rose-600 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                    <FaLinkedin className="text-white text-lg" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-pink-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-pink-200 mb-4 md:mb-0">
              <span>&copy; {new Date().getFullYear()} ProtectHerZone. All rights reserved.</span>
              <FaHeart className="mx-2 text-pink-400 animate-pulse" />
              <span className="text-pink-300">Made with love for women's safety</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-pink-300 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-pink-300 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="text-pink-300 hover:text-white transition-colors duration-300">
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