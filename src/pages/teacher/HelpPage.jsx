import React from "react";
import { FaQuestionCircle, FaLightbulb, FaEnvelope, FaUserAlt } from "react-icons/fa";

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className=" mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Help & Support</h1>
        <div className="space-y-6">
          {/* Section 1: About the Platform */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaLightbulb className="text-blue-500 text-2xl mr-4" />
              <h2 className="text-xl font-semibold text-gray-800">About the Platform</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              This platform connects teachers and students for managing themes and projects efficiently. Teachers can post themes, while students can select them and submit their work for review. 
              Key features include viewing theme details, tracking status, and downloading associated materials.
            </p>
          </div>

          {/* Section 2: Common Questions */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaQuestionCircle className="text-yellow-500 text-2xl mr-4" />
              <h2 className="text-xl font-semibold text-gray-800">Common Questions</h2>
            </div>
            <ul className="list-disc pl-8 text-gray-600 leading-relaxed">
              <li>How do I select a theme? - Browse available themes and click on the "Select" button.</li>
              <li>Can I edit a theme's details? - Only teachers can update theme details.</li>
              <li>How do I contact the teacher? - Use the contact information provided in the profile section.</li>
            </ul>
          </div>

          {/* Section 3: Contact Support */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-green-500 text-2xl mr-4" />
              <h2 className="text-xl font-semibold text-gray-800">Contact Support</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Need further assistance? Reach out to us via email:
              <a href="mailto:mayardelimi@univ-constantine2.com" className="text-blue-600 underline ml-1">
                mayardelimi@univ-constantine2.com
              </a>.
            </p>
          </div>

          {/* Section 4: User Guide */}
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaUserAlt className="text-purple-500 text-2xl mr-4" />
              <h2 className="text-xl font-semibold text-gray-800">User Guide</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Navigate the dashboard to view themes, check their status, and download resources. Teachers can manage their themes by adding or updating details directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
