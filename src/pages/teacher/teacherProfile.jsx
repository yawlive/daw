import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to retrieve passed data
import { FaFilePdf, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const TeacherProfile = () => {
  const location = useLocation(); // Get the teacher's data from the location
  const item = location.state?.teacherData; // Access teacher data passed through Link or navigate

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-700";
      case "in progress":
        return "bg-blue-100 text-blue-700";
      case "submitted":
        return "bg-orange-100 text-orange-700";
      case "closed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      {/* Profile Section */}
      <div className="bg-white rounded-lg p-6">
        <h1 className="lg:text-3xl text-3xl font-bold text-gray-700">Profile</h1>
        <div className="p-6 flex flex-col lg:flex-row border-b lg:gap-6">
          {/* Profile Details */}
          <div className="flex items-center lg:gap-4">
            <img
              src={item.profile_picture || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold">{item.full_name}</h2>
              <p className="text-gray-500 text-sm">#{item.teacher_id}</p>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-4 lg:border-l-2 lg:pl-6 pt-4 lg:pt-0">
            <h3 className="text-gray-700 font-semibold mb-2">About</h3>
            <p className="text-gray-600 text-sm flex items-center gap-2">
              <FaPhone className="text-dark-purple" /> Phone: {item.phone}
            </p>
            <p className="text-gray-600 text-sm flex items-center gap-2">
              <FaEnvelope className="text-dark-purple" /> Email: {item.email}
            </p>
          </div>

          {/* Details Section */}
          <div className="mt-4 lg:border-l-2 lg:pl-6 pt-4 lg:pt-0">
            <h3 className="text-gray-700 font-semibold mb-2">Details</h3>
            <p className="text-gray-600 text-sm flex items-center gap-2">
              <FaMapMarkerAlt className="text-dark-purple" /> Specialization:{" "}
              {item.specialization}
            </p>
            <p className="text-gray-600 text-sm flex items-center gap-2">
              <FaCalendarAlt className="text-dark-purple" /> Created At:{" "}
              {item.created_at}
            </p>
          </div>
         
        </div>
       
        {/* Items Section */}
        <h3 className="text-gray-700 font-semibold font-md p-6 mb-2">Themes</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {item.themes.map((item1, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800">{item1.title}</h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                    item1.status
                  )}`}
                >
                  {item1.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mt-2 line-clamp-3">{item1.description}</p>

              {/* Metadata */}
              <div className="text-sm text-gray-500 mt-4">
                <p>Created: {new Date(item1.created_at).toLocaleDateString()}</p>
                <p>Updated: {new Date(item1.updated_at).toLocaleDateString()}</p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-6 border-t pt-4">
                {/* Keywords and Specialization */}
                <div className="flex flex-wrap gap-2">
                  {item1.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                    {item1.specialization}
                  </span>
                </div>

                {/* PDF Button */}
                {item1.pdf && (
                  <a
                    href={item1.pdf}
                    download
                    className="text-sm text-blue-600 flex items-center gap-1 hover:underline"
                  >
                    <FaFilePdf className="text-red-500" /> PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
