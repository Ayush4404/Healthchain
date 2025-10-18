import React, { useState, useEffect } from "react";
import { LogOut } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`bg-white fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-9xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo1.jpg"
            alt="Logo"
            className="w-35 h-10"
          />
          {/* <span className="text-xl font-semibold text-gray-800">Health chain</span> */}
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/patient" className="hover:text-blue-600 transition">Patient</Link>
          <Link to="/doctor" className="hover:text-blue-600 transition">Doctor</Link>
          <Link to="/research" className="hover:text-blue-600 transition">Research</Link>
          <Link to="/demo" className="hover:text-blue-600 transition">
            Demo
          </Link>
          <Link to='/profile' className="hover:text-blue-600 transition">Profile</Link>
        </div>

        {/* Logout Button */}
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;