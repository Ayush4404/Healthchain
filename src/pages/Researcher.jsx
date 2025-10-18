import React from "react";
import { User, Database, Book, Share2, Clock } from "lucide-react";
import Navbar from "../components/Navbar";

const ResearchDashboard = () => {
  return (
    <div className="flex min-h-screen w-screen bg-gradient-to-br from-[#e8f5e9] via-[#f1f8f2] to-[#e8f5e9] text-gray-800">
      <Navbar />
      <div className="mt-20 w-full p-10">
        {/* Header */}
        <header className="flex flex-wrap justify-between items-center mb-10 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-all duration-300">
          <div>
            <h1 className="text-3xl font-bold text-green-700 tracking-tight">
              Researcher Dashboard
            </h1>
            <p className="text-gray-600 text-sm">
              Access, manage, and collaborate on research datasets
            </p>
          </div>
          <div className="text-sm bg-green-50 px-5 py-2 rounded-xl border border-green-200 shadow-inner">
            <span className="text-gray-700">Principal ID:</span>{" "}
            <span className="font-semibold text-green-700">
              55cbg-or4x-4h7s-u4g2-hmu7-u7kf-nqrq-3q2u-b-c
            </span>
          </div>
        </header>

        {/* Profile Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Profile Info */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-5">
              <div className="w-16 h-16 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center text-white shadow-md">
                <User className="w-7 h-7" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-green-800">
                  Dr. Jane Smith
                </h3>
                <p className="text-gray-500 text-sm">Role: Researcher</p>
              </div>
            </div>
            <div className="mt-4 bg-green-50 rounded-2xl p-4 border border-green-100 shadow-inner">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">Active Studies</span>
                <Book className="w-4 h-4 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-700 mt-1">3</div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="md:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                label: "Total Datasets",
                value: 12,
                icon: <Database className="w-6 h-6 text-green-600" />,
              },
              {
                label: "Shared Datasets",
                value: 2,
                icon: <Share2 className="w-6 h-6 text-green-600" />,
              },
              {
                label: "Last Updated",
                value: "Oct 17, 2025",
                icon: <Clock className="w-6 h-6 text-green-600" />,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/70 rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex justify-between items-center"
              >
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <div className="text-2xl font-bold text-green-700 mt-1">
                    {stat.value}
                  </div>
                </div>
                {stat.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Research Grants Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-6 border border-green-100 shadow-sm mb-10">
          <h3 className="text-lg font-semibold text-green-700 mb-1">
            Research Grants Available
          </h3>
          <p className="text-gray-600 text-sm">
            No new grants at the moment. Stay tuned for upcoming funding
            opportunities.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {["My Datasets", "Studies", "Publications", "Grants"].map(
            (tab, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-green-600 text-white shadow-md hover:bg-green-700"
                    : "bg-white/70 text-gray-700 border border-gray-200 hover:bg-green-50"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Research Datasets Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-sm p-6 border border-gray-100">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-green-700">
              Research Datasets
            </h3>
            <div className="flex gap-2">
              <select className="bg-gray-50 border border-gray-300 px-3 py-2 rounded-lg text-sm text-gray-700 hover:border-green-400 focus:ring-2 focus:ring-green-500 outline-none transition">
                <option>Sort by Date</option>
              </select>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm transition">
                + Request Dataset
              </button>
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 text-sm transition">
                + New Project
              </button>
            </div>
          </div>

          {/* Datasets List */}
          <div className="space-y-4">
            {[
              {
                name: "Cardiac Study",
                desc: "Anonymized patient data",
                date: "Oct 15, 2025, 02:30 PM",
              },
              {
                name: "Neurology Research",
                desc: "Brain scan dataset",
                date: "Oct 10, 2025, 09:15 AM",
              },
            ].map((data, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gradient-to-r from-white to-green-50 border border-green-100 p-4 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-tr from-green-400 to-emerald-400 flex items-center justify-center rounded-xl mr-4 shadow-sm">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-green-800">{data.name}</p>
                    <p className="text-gray-600 text-sm">{data.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">{data.date}</p>
                  <Share2 className="w-4 h-4 text-green-600 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Guide */}
        <div className="mt-10 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-3xl p-6 shadow-inner">
          <p className="text-green-700 font-medium">📘 Guide for Researchers</p>
          <p className="text-gray-600 text-sm mt-1">
            Learn how to upload datasets, manage studies, and securely share
            your findings with the research community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchDashboard;
