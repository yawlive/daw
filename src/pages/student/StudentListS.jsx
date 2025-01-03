import React, { useState } from 'react';
import { Mail, Send, Search } from 'lucide-react';

import StudentsProfileS from './StudentsProfileS';

const StudentListS = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const studentsData = [
    {
      photo: "#",
      name: "Ahmed Bensaid",
      studentId: "S10001",
      level: "gl",
      grade: "L3",
      email: "ahmed.bensaid@example.com",
      status: "Supervised",
    },
    {
      photo: "#",
      name: "Fatima Chikhi",
      studentId: "S10002",
      level: "ti",
      grade: "L3",
      email: "fatima.chikhi@example.com",
      status: "Pending",
    },
    {
      photo: "#",
      name: "Mourad Belkacem",
      studentId: "S10003",
      level: "sci si",
      grade: "L3",
      email: "mourad.belkacem@example.com",
      status: "Supervised",
    },
    {
      photo: "#",
      name: "Amina Gharbi",
      studentId: "S10004",
      level: "gl",
      grade: "L3",
      email: "amina.gharbi@example.com",
      status: "Pending",
    },
    {
      photo: "#",
      name: "Nassim Khellaf",
      studentId: "S10005",
      level: "ti",
      grade: "L3",
      email: "nassim.khellaf@example.com",
      status: "Supervised",
    },
    {
      photo: "#",
      name: "Souad Mokrani",
      studentId: "S10006",
      level: "sci si",
      grade: "L3",
      email: "souad.mokrani@example.com",
      status: "Pending",
    },
  ];

  const handleViewProfile = (student) => {
    setSelectedStudent(student);
  };

  const handleSendRequest = (studentId) => {
    console.log('Sending request for student:', studentId);
  };


  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.studentId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedStudent) {
    return (
      <StudentsProfileS
        student={selectedStudent}
        goBack={() => setSelectedStudent(null)}
      />
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Student Page</h1>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search students..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-white border-b">
              <tr>
                <th className="p-4 text-left font-semibold">Photo</th>
                <th className="p-4 text-left font-semibold">Name</th>
                <th className="p-4 text-left font-semibold">Student ID</th>
                <th className="p-4 text-left font-semibold">Level</th>
                <th className="p-4 text-left font-semibold">Grade</th>
                <th className="p-4 text-left font-semibold">Email</th>
                <th className="p-4 text-left font-semibold">Status</th>
                <th className="p-4 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map((student, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-4">
                    <img
                      src={student.photo}
                      alt={student.name}
                      onClick={() => handleViewProfile(student)}
                      className="w-10 h-10 rounded-full object-cover cursor-pointer"
                    />
                  </td>
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.studentId}</td>
                  <td className="p-4">{student.level}</td>
                  <td className="p-4">{student.grade}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {student.email}
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        student.status.toLowerCase() === 'supervised'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleSendRequest(student.studentId)}
                      className="flex items-center gap-2 px-4 py-2 bg-dark-purple text-white rounded-lg hover:bg-slate-900 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      Send Request
                    </button>
                  </td>
                </tr>
              ))}
              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan="8" className="p-4 text-center text-gray-500">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentListS;
