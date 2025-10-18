import React, { useEffect, useRef } from "react";
import { ShieldCheck, Users, Activity } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imageRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const moveX = (clientX / innerWidth - 0.5) * 25;
        const moveY = (clientY / innerHeight - 0.5) * 25;
        imageRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center w-screen overflow-hidden bg-gradient-to-br from-gray-50 via-green-50 to-emerald-100 text-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center px-6 sm:px-10 md:px-14 lg:px-20">
        {/* LEFT CONTENT */}
        <div className="text-left space-y-8">
          <div className="inline-block border border-emerald-300 rounded-full px-5 py-1.5 text-sm text-emerald-700 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
            WCHL’25 Hackathon Project
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-400">
              Decentralized
            </span>
            <span className="block">Medical Records</span>
            <span className="block text-emerald-500">On-Chain</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-lg">
            Empowering patients with full ownership of their health data while ensuring secure, transparent collaboration with healthcare providers and researchers.
          </p>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              <span className="font-medium text-gray-800">100% Patient Control</span>
            </div>
            <div className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
              <Users className="w-6 h-6 text-emerald-500" />
              <span className="font-medium text-gray-800">Dynamic Multi-Role Access</span>
            </div>
            <div className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
              <Activity className="w-6 h-6 text-emerald-500" />
              <span className="font-medium text-gray-800">Complete Transparency</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3 rounded-xl bg-emerald-600 text-white font-semibold tracking-tight shadow-lg shadow-emerald-500/25 hover:bg-emerald-700 hover:shadow-emerald-600/30 transition-all duration-300">
              Launch Demo →
            </button>
            <button className="px-8 py-3 rounded-xl border border-emerald-400 text-emerald-600 bg-white/70 backdrop-blur-sm hover:bg-emerald-50 font-semibold transition-all duration-300 hover:shadow-md">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end relative overflow-hidden">
          <div
            ref={imageRef}
            className="max-w-full md:max-w-lg rounded-2xl shadow-2xl bg-white/50 backdrop-blur-md p-2 transition-transform duration-500 ease-out"
            style={{ willChange: "transform" }}
          >
            <img
              src="./banner-doctor.png"
              alt="Medical Records Illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
