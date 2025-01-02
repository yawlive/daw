import React from 'react';
import { Mail, Send } from 'lucide-react';

const StudentsProfileS = ({ student, goBack }) => {
  const handleSendRequest = () => {
    console.log('Sending request for student:', student.studentId);
  };

  return (
    <div className="container mx-auto p-6">
     <button
 onClick={goBack}
 className="mb-4 px-6 py-2 bg-dark-purple text-white rounded-lg hover:bg-slate-900 transition-colors flex items-center gap-2"
>
 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
   <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
 </svg>
 Back to List
</button>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={student.photo}
            alt={student.name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold">{student.name}</h2>
            <p className="text-gray-600">{student.major || 'No major specified'}</p>
            <p className="text-gray-600">{student.grade || 'No grade specified'}</p>
            <p className="text-gray-600">{student.address || 'No address specified'}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="flex items-center gap-2 mt-2">
            <Mail className="w-5 h-5" />
            <span>{student.email}</span>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {(student.skills && student.skills.length > 0) ? (
              student.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-600">No skills listed</p>
            )}
          </div>
        </div>
        <button
          onClick={handleSendRequest}
          className="mt-6 flex items-center gap-2 px-4 py-2 bg-dark-purple text-white rounded-lg hover:bg-slate-900 transition-colors"
        >
          <Send className="w-4 h-4" />
          Send Request
        </button>
      </div>
    </div>
  );
};

export default StudentsProfileS;
