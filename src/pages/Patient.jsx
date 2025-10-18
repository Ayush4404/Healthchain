import React from "react";
import {
  User,
  FileText,
  Eye,
  Upload,
  Share2,
  Folder,
} from "lucide-react";
import Navbar from "../components/Navbar";

const PatientDashboard = () => {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-[#e8f5e9] via-[#f1f8f2] to-[#e8f5e9] text-gray-800 p-6 w-screen">
      <Navbar/>
      {/* Header */}
      
      <header className="mt-20 flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-green-700">Patient Dashboard</h1>
          <p className="text-green-600 text-sm">
            Manage your medical records and control access permissions
          </p>
        </div>
        <div className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-lg border border-green-200">
          <span>Principal ID: 55cbg-or4x-4h7s-u4g2-hmu7-u7kf-nqrq-3q2u-b-c</span>
        </div>
      </header>

      {/* Profile + Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-3">
              <User className="w-6 h-6 text-green-700" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Aryan Dixit</h3>
              <p className="text-gray-500 text-sm">
                Role: Patient / Doctor / Researcher
              </p>
            </div>
          </div>

          {/* Recent Views */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">Recent Views</span>
              <Eye className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-700 mt-1">6</div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              label: "Total Records",
              value: "4",
              icon: <FileText className="w-6 h-6 text-green-600" />,
            },
            {
              label: "Active Shares",
              value: "0",
              icon: <Share2 className="w-6 h-6 text-green-600" />,
            },
            {
              label: "Storage Used",
              value: "0.37 MB",
              icon: <Upload className="w-6 h-6 text-green-600" />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex justify-between items-center hover:shadow-md transition"
            >
              <div>
                <p className="text-gray-500 text-sm">{item.label}</p>
                <div className="text-2xl font-semibold text-green-700">
                  {item.value}
                </div>
              </div>
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Bounties Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-2">
          Bounties Available
        </h3>
        <p className="text-gray-600">No bounties available at the moment.</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-2 mb-6">
        {["My Records", "Sharing", "Audit Log", "Privacy"].map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              i === 0
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Medical Records Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-green-700">
            Medical Records
          </h3>
          <div className="flex space-x-3">
            <select className="bg-green-50 px-3 py-2 rounded-lg border border-green-200 text-sm focus:ring-2 focus:ring-green-400 outline-none">
              <option>Date</option>
            </select>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
              + Upload Record
            </button>
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm hover:bg-green-200 transition">
              + New Folder
            </button>
          </div>
        </div>

        {/* Record List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100 hover:shadow-sm transition">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-200 flex items-center justify-center rounded-lg mr-3">
                <Folder className="w-5 h-5 text-green-700" />
              </div>
              <div>
                <p className="font-medium text-green-800">Eye</p>
                <p className="text-gray-500 text-sm">Eye Folder</p>
              </div>
            </div>
            <div className="text-right text-gray-500">
              <p className="text-sm">09/29/2025, 10:13 PM</p>
              <Share2 className="w-4 h-4 text-green-600 mt-1 ml-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Guide */}
      <div className="mt-8 p-4 bg-green-50 rounded-2xl border border-green-100 text-center">
        <p className="text-green-700 font-medium">Guide for Judges</p>
      </div>
    </div>
  );
};

export default PatientDashboard;
