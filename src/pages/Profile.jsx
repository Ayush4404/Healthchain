import React, { useState } from "react";
import { User, Upload, History, Key, Camera } from "lucide-react";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Data Add Option");

  const tabs = [
    { name: "Data Add Option", icon: <User className="w-5 h-5" /> },
    { name: "Data Uploaded", icon: <Upload className="w-5 h-5" /> },
    { name: "History", icon: <History className="w-5 h-5" /> },
    { name: "Giving Access", icon: <Key className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-screen w-screen bg-gradient-to-br from-[#e8f5e9] via-[#f1f8f2] to-[#e8f5e9]">
      <Navbar />

      {/* Sidebar */}
      <aside className="mt-20 w-64 bg-white shadow-md p-6 border-r border-gray-200 fixed top-0 left-0 h-full">
        <h2 className="text-xl font-bold mb-6 text-green-700">Profile Settings</h2>
        <nav>
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center w-full p-3 mb-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.name
                  ? "bg-green-100 text-green-700 shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-green-700"
              }`}
            >
              {tab.icon}
              <span className="ml-3">{tab.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 mt-24 flex-1 p-10 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          {/* Profile Header */}
          <div className="flex items-center mb-8 border-b pb-6 border-gray-200">
            <div className="relative">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="Profile Avatar"
                className="w-28 h-28 rounded-full object-cover border-4 border-green-200"
              />
              <button className="absolute bottom-0 right-0 bg-green-600 p-2 rounded-full text-white hover:bg-green-700 transition">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-green-700">John Doe</h2>
              <p className="text-gray-600">Blockchain Healthcare User</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-green-700">Personal Information</h2>

          <div className="flex justify-end mb-6">
            <button className="bg-green-600 text-white px-5 py-2 rounded-lg mr-3 hover:bg-green-700 transition">
              Save
            </button>
            <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300 transition">
              Cancel
            </button>
          </div>

          {/* Dynamic Tab Content */}
          {activeTab === "Data Add Option" && (
            <div className="space-y-5">
              {[
                { label: "Display Name", type: "text", defaultValue: "PatientDoctorResearcher" },
                { label: "Email", type: "email", defaultValue: "johndoe@example.com" },
                { label: "Role", type: "text", defaultValue: "PatientDoctorResearcher" },
                { label: "Principal ID", type: "text", defaultValue: "55cbg-or4x-4h7s-u4g2-hmu7-u7kf-nqrq-3q2u-b-c" },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    className="w-full p-3 rounded-lg border border-gray-300 bg-[#f9faf9] text-gray-800 focus:ring-2 focus:ring-green-500 outline-none transition"
                    defaultValue={field.defaultValue}
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  className="w-full p-3 rounded-lg border border-gray-300 bg-[#f9faf9] text-gray-800 focus:ring-2 focus:ring-green-500 outline-none transition"
                  rows="3"
                  placeholder="Tell us a bit about yourself..."
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {["Age", "Sex", "Ethnicity", "Nationality"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{field}</label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg border border-gray-300 bg-[#f9faf9] text-gray-800 focus:ring-2 focus:ring-green-500 outline-none transition"
                      placeholder={`Enter ${field}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Data Uploaded" && (
            <div className="text-gray-700">
              <p>No data uploaded yet.</p>
            </div>
          )}

          {activeTab === "History" && (
            <div className="text-gray-700">
              <p>No history available yet.</p>
            </div>
          )}

          {activeTab === "Giving Access" && (
            <div className="text-gray-700">
              <p>No access permissions granted yet.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
