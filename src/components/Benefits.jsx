import React from "react";
import { UserCheck, Stethoscope, FlaskConical, CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "For Patients",
    icon: <UserCheck className="w-6 h-6 text-white" />,
    color: "bg-green-600",
    points: [
      ["Complete Control", "Own and manage your medical records entirely"],
      ["Enhanced Privacy", "Military-grade encryption protects your sensitive data"],
      ["Seamless Access", "Share records instantly with any healthcare provider"],
      ["Transparency", "See exactly who accessed your records and when"],
    ],
  },
  {
    title: "For Healthcare Providers",
    icon: <Stethoscope className="w-6 h-6 text-white" />,
    color: "bg-blue-600",
    points: [
      ["Instant Access", "Get patient records immediately with permission"],
      ["Complete History", "Access comprehensive medical history for better care"],
      ["Reduced Overhead", "No more complex data sharing protocols"],
      ["Compliance", "Built-in audit trails ensure regulatory compliance"],
    ],
  },
  {
    title: "For Researchers",
    icon: <FlaskConical className="w-6 h-6 text-white" />,
    color: "bg-yellow-500",
    points: [
      ["Anonymized Data", "Access rich medical data without privacy concerns"],
      ["Larger Datasets", "Patients can contribute data voluntarily"],
      ["Faster Research", "Streamlined data access accelerates studies"],
      ["Ethical Standards", "Patient consent is built into the system"],
    ],
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-white w-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits for Everyone</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            HealthChain transforms healthcare data management, delivering unprecedented value to patients, healthcare providers,
            and medical researchers through blockchain innovation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Section - Benefits List */}
          <div className="flex flex-col gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-lg shadow-sm hover:shadow-md transition p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-md flex items-center justify-center ${benefit.color}`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                </div>
                <ul className="pl-2">
                  {benefit.points.map(([title, desc], idx) => (
                    <li key={idx} className="flex items-start gap-2 mb-2">
                      <CheckCircle className="text-green-500 w-4 h-4 mt-1" />
                      <span className="text-sm">
                        <strong>{title}:</strong> {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Section - Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="./bene.jpg"
              alt="Benefits Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;