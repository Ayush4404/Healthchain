import React from "react";
import {
  Mail, Phone, MapPin,
  Twitter, Linkedin, Github, Gamepad2, Infinity
} from "lucide-react";

const Footer = () => {
  return (
    <div className="pt-20 w-screen">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-center rounded-xl py-10 mx-6 lg:mx-20">
        <h2 className="text-2xl md:text-3xl font-semibold">The Future of Healthcare Data is Here</h2>
        <p className="mt-2 text-sm md:text-base">Join the revolution in medical data management and experience the power of blockchain technology.</p>
        <div className="flex justify-center gap-10 mt-6 text-lg font-semibold">
          <div>
            <div>100%</div>
            <span className="text-sm font-normal">Patient Control</span>
          </div>
          <div>
            <div>256-bit</div>
            <span className="text-sm font-normal">Encryption</span>
          </div>
          <div>
            <div>24/7</div>
            <span className="text-sm font-normal">Access</span>
          </div>
          <div>
            <Infinity className="inline-block w-6 h-6" />
            <span className="block text-sm font-normal">Possibilities</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-20 pt-16 px-6 lg:px-20">
        <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">

          {/* Logo & Social */}
          <div>
            <div className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <span className="bg-blue-600 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold">+</span>
              HealthChain
            </div>
            <p>Revolutionizing healthcare data management through blockchain technology. Take complete control of your medical records with secure, private, and decentralized access.</p>

            <div className="flex gap-4 mt-4">
              <Twitter className="w-5 h-5 text-green-400 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-green-400 cursor-pointer" />
              <Github className="w-5 h-5 text-green-400 cursor-pointer" />
              <Gamepad2 className="w-5 h-5 text-green-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-green-500 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About Us</li>
              <li>Solutions</li>
              <li>Patient Access</li>
              <li>Healthcare Providers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-blue-500 font-semibold mb-4">Support & Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Security</li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <p>Email</p>
                  <span>contact@healthchain.com</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p>Phone</p>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <p>Address</p>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm mb-3">Subscribe to our newsletter for the latest updates on HealthChain and blockchain in healthcare.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 rounded-l-md bg-gray-800 text-white border border-gray-700"
                />
                <button
                  type="submit"
                  className="bg-green-600 px-4 rounded-r-md hover:bg-green-700 transition text-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2025 HealthChain. All rights reserved. Built on Internet Computer Protocol.
          <div className="mt-1 text-green-400">Powered by: 🟢 Internet Computer</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
