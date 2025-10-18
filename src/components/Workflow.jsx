import React from "react";
import {
  UserPlus,
  UploadCloud,
  Settings,
  Share2,
  FlaskConical,
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: <UserPlus className="text-green-600 w-5 h-5" />,
    title: "Register & Create Identity",
    desc: "Sign up using Internet Identity or Plug Wallet to create your decentralized identity. Your Patient Profile Canister is automatically generated for secure data management.",
  },
  {
    number: 2,
    icon: <UploadCloud className="text-blue-600 w-5 h-5" />,
    title: "Upload Medical Records",
    desc: "Upload your medical documents securely. Data is encrypted client-side and stored on IPFS with metadata recorded in smart contracts. All records are private by default.",
  },
  {
    number: 3,
    icon: <Settings className="text-yellow-500 w-5 h-5" />,
    title: "Manage Permissions",
    desc: "Grant or revoke access to healthcare providers and researchers with one click. Set different permission levels: View Only, Edit, Share, or Anonymized Access.",
  },
  {
    number: 4,
    icon: <Share2 className="text-red-500 w-5 h-5" />,
    title: "Secure Sharing",
    desc: "When providers request access, you receive notifications and can approve/reject instantly. Files are shared through secure tokens with complete audit trails.",
  },
  {
    number: 5,
    icon: <FlaskConical className="text-purple-600 w-5 h-5" />,
    title: "Contribute to Research",
    desc: "Optionally contribute anonymized data to medical research. Your personal information is stripped while maintaining valuable medical insights for scientific advancement.",
  },
];

const Workflow = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20 px-6 lg:px-20 w-screen">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Steps */}
        <div>
          <p className="text-center md:text-left text-lg text-gray-600 mb-8">
            Experience the future of healthcare data management with our simple, secure,
            and transparent workflow designed for patients, providers, and researchers.
          </p>

          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white shadow-md rounded-lg p-5 flex items-start gap-4"
              >
                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-white"
                     style={{ backgroundColor: step.icon.props.className.includes("green") ? "#22c55e" :
                             step.icon.props.className.includes("blue") ? "#3b82f6" :
                             step.icon.props.className.includes("yellow") ? "#facc15" :
                             step.icon.props.className.includes("red") ? "#ef4444" :
                             "#a855f7" }}>
                  {step.number}
                </div>
                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-lg">
                    {step.icon}
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-700 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="./doc.jpg"
            alt="Workflow visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="bg-white shadow-md rounded-lg inline-block px-8 py-6">
          <h3 className="text-xl font-semibold mb-2">Ready to Take Control of Your Medical Data?</h3>
          <p className="text-gray-600 mb-4">
            Join thousands of patients who have already secured their medical records with HealthChain’s revolutionary blockchain technology.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/login" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
              Start Your Journey
            </a>
            <a href="#solutions" className="border border-green-600 text-green-600 px-6 py-3 rounded-md hover:bg-green-50 transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
