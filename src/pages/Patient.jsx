import React from "react";
import { User, FileText, Eye, Upload, Share2, Folder } from "lucide-react";
import Navbar from "../components/Navbar";

const PatientDashboard = () => {
  const stats = [
    { label: "Total Records", value: "4", icon: FileText },
    { label: "Active Shares", value: "0", icon: Share2 },
    { label: "Storage Used", value: "0.37 MB", icon: Upload },
  ];

  const tabs = ["My Records", "Sharing", "Audit Log", "Privacy"];

  const records = [
    {
      name: "Eye",
      description: "Eye Folder",
      date: "09/29/2025, 10:13 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 text-gray-800 w-screen">
      <Navbar />

      {/* Header */}
      <header className="mt-24 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-green-700 tracking-tight">
            Patient Dashboard
          </h1>
          <p className="text-green-600 text-sm mt-2">
            Manage your medical records and control access permissions.
          </p>
        </div>
        <div className="text-sm text-green-700 bg-green-100 px-4 py-2 mt-4 md:mt-0 rounded-lg border border-green-200 shadow-sm">
          <span className="font-semibold">Principal ID:</span>{" "}
          <span className="font-mono text-green-800">
            55cbg-or4x-4h7s-u4g2-hmu7-u7kf-nqrq-3q2u-b-c
          </span>
        </div>
      </header>

      <main className="px-6 md:px-12">
        {/* Profile + Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
            <div className="flex items-center mb-5">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <User className="w-7 h-7 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Aryan Dixit</h3>
                <p className="text-gray-500 text-sm">
                  Role: Patient / Doctor / Researcher
                </p>
              </div>
            </div>

<div className="border-t border-gray-100 pt-3 mt-3">
  <div className="flex items-center justify-between text-sm">
    <span className="font-medium text-gray-700">Recent Views</span>
    <div className="flex items-center gap-1">
      <Eye className="w-4 h-4 text-green-600" />
      <span className="text-2xl font-bold text-green-700">6</span>
    </div>
  </div>
</div>

          </div>

          {/* Stats Cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 flex justify-between items-center hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div>
                  <p className="text-gray-500 text-sm">{item.label}</p>
                  <p className="text-2xl font-semibold text-green-700">{item.value}</p>
                </div>
                <item.icon className="w-6 h-6 text-green-600" />
              </div>
            ))}
          </div>
        </section>

        {/* Bounties Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-10">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Bounties Available
          </h3>
          <p className="text-gray-600">No bounties available at the moment.</p>
        </section>

        {/* Navigation Tabs */}
        <nav className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`px-6 py-2.5 rounded-lg font-medium text-sm md:text-base transition-all ${
                i === 0
                  ? "bg-green-600 text-white"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Medical Records Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-xl font-semibold text-green-700">
              Medical Records
            </h3>
            <div className="flex flex-wrap gap-3">
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

          <div className="space-y-3">
            {records.map((rec, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100 hover:shadow-md transition-all"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-200 flex items-center justify-center rounded-lg mr-3">
                    <Folder className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="font-medium text-green-800">{rec.name}</p>
                    <p className="text-gray-500 text-sm">{rec.description}</p>
                  </div>
                </div>
                <div className="text-right text-gray-500">
                  <p className="text-sm">{rec.date}</p>
                  <Share2 className="w-4 h-4 text-green-600 mt-1 ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 p-5 bg-green-50 rounded-2xl border border-green-100 text-center">
          <p className="text-green-700 font-medium tracking-wide">
            Guide for Judges
          </p>
        </footer>
      </main>
    </div>
  );
};

export default PatientDashboard;
