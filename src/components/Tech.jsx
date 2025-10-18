import React from "react";
import { ShieldCheck, Server, KeyRound, Clock, FileSearch, Smartphone } from "lucide-react";

const techFeatures = [
  {
    icon: <ShieldCheck className="text-green-600 w-6 h-6" />,
    title: "End-to-End Encryption",
    desc: "Your medical records are protected with military-grade encryption, ensuring absolute privacy and security from unauthorized access.",
  },
  {
    icon: <Server className="text-blue-600 w-6 h-6" />,
    title: "Decentralized Storage",
    desc: "Built on Internet Computer Protocol, your data is distributed across multiple nodes, eliminating single points of failure.",
  },
  {
    icon: <KeyRound className="text-yellow-500 w-6 h-6" />,
    title: "Self-Sovereign Identity",
    desc: "You own your identity and data completely. No central authority can access or control your medical information.",
  },
  {
    icon: <Clock className="text-orange-500 w-6 h-6" />,
    title: "Instant Access Control",
    desc: "Grant or revoke access to your medical records instantly with just a few clicks. Real-time permissions management.",
  },
  {
    icon: <FileSearch className="text-purple-600 w-6 h-6" />,
    title: "Immutable Audit Trail",
    desc: "Every access to your medical records is logged permanently on the blockchain, providing complete transparency.",
  },
  {
    icon: <Smartphone className="text-green-600 w-6 h-6" />,
    title: "Cross-Platform Access",
    desc: "Access your medical records from any device, anywhere in the world. Seamless integration across all platforms.",
  },
];

const tags = [
  { label: "Internet Computer", color: "bg-green-100 text-green-800" },
  { label: "React Frontend", color: "bg-blue-100 text-blue-800" },
  { label: "IPFS Storage", color: "bg-yellow-100 text-yellow-800" },
  { label: "AES Encryption", color: "bg-red-100 text-red-800" },
];

const Technology = () => {
  return (
    <section className="bg-[#f8f9fa] py-20 px-6 lg:px-24 w-screen" id="solutions">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Revolutionary Healthcare Technology
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Built on cutting-edge blockchain technology, HealthChain delivers unprecedented security, transparency, and patient empowerment in medical data management.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techFeatures.map((item, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-lg shadow-sm hover:shadow-md transition p-6 text-left"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`px-4 py-2 rounded-full text-sm font-medium ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
