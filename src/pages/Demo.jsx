import React from "react";
import {
  UserRound,
  ActivitySquare,
  ShieldCheck,
} from "lucide-react";
import Navbar from "../components/Navbar";

const roles = [
  {
    title: "Patient",
    description: "Own and control your medical records",
    features: [
      "Upload records",
      "Share with doctors",
      "Monitor access",
      "Privacy controls",
    ],
    icon: <UserRound className="w-10 h-10 text-green-600" />,
    button: "Enter Patient Dashboard",
  },
  {
    title: "Doctor",
    description: "Access patient records with consent",
    features: [
      "View shared records",
      "Patient insights",
      "Treatment history",
      "Audit compliance",
    ],
    icon: <ActivitySquare className="w-10 h-10 text-green-600" />,
    button: "Enter Doctor Dashboard",
  },
  {
    title: "Researcher",
    description: "Analyze anonymized datasets securely",
    features: [
      "Access datasets",
      "Privacy-preserved analytics",
      "Global collaboration",
      "Research insights",
    ],
    icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
    button: "Enter Researcher Dashboard",
  },
];

const DemoSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f4fff7] to-[#e9f9ee] text-gray-800 flex flex-col items-center justify-center px-6 py-20 w-screen">
      <Navbar/>
      {/* Header */}
      <div className="max-w-3xl text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-gray-800">
          Choose Your Role
        </h2>
        <p className="text-gray-600 text-lg">
          Select a role to experience{" "}
          <span className="text-green-700 font-semibold">HealthifyChain</span>{" "}
          from different perspectives.
        </p>
      </div>

      {/* Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {roles.map((role, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg border border-green-200 p-8 text-center transform hover:-translate-y-2 transition duration-300 ease-in-out"
          >
            <div className="flex justify-center mb-4">{role.icon}</div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              {role.title}
            </h3>
            <p className="text-gray-600 mb-4">{role.description}</p>
            <ul className="text-gray-700 text-sm space-y-2 mb-6">
              {role.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl font-medium shadow-md transition">
              {role.button}
            </button>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-gray-600 text-sm">
        <p>
          Empowering healthcare through{" "}
          <span className="text-green-700 font-semibold">
            transparency, trust, and innovation.
          </span>
        </p>
      </div>
    </section>
  );
};

export default DemoSection;
