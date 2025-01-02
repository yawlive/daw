import { FaUserCircle, FaGraduationCap, FaUserTie, FaChalkboardTeacher } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import studentimg from '../assets/images/rahma.jpg';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const StudentPage = () => {
  const name = 'Rahma';
  const grade = 'L3 TI';
  const skills = ['JavaScript', 'React', 'CSS'];

  const applicationData = [
    { name: 'Accepted', value: 2, color: '#0c4a6e' },
    { name: 'Pending', value: 3, color: '#082f49' },
    { name: 'Rejected', value: 1, color: '#075985' }
  ];

  return (
    <div className="flex h-screen overflow-hidden">
     
      {/* Content */}
      <div className="flex-1 overflow-auto">


          {/* Header */}

          <div className="bg-indigo- shadow rounded-t-lg mx-4 sm:mx-6 md:mx-0 mt-4 ml-3 mr-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-2 py-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-700">Hello, {name}!</h1>
              <p className="text-gray-600">Ready to see what we have today?</p>
            </div>
            {/* <img src={student} alt="Student" className="h-29 w-24 " /> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-full">
          {/* Dashboard */}
          <div className="bg-white rounded-xl mb-6 shadow-lg p-5 mt-4">
            <h2 className="text-2xl font-bold text-slate-700 mb-4">Application Dashboard</h2>
            <div className="grid grid-cols-2 gap-4 mb-6 ">
              {/* Statistics */}
              <div>
                <div className="mb-2">
                  <p className="text-sm text-sky-600">Total Applications</p>
                  <p className="text-xl font-bold text-sky-700">6</p>
                </div>
                <div className="mb-2">
                  <p className="text-sm text-sky-600">Accepted</p>
                  <p className="text-xl font-bold text-sky-600">2</p>
                </div>
                <div>
                  <p className="text-sm text-sky-600">Pending</p>
                  <p className="text-xl font-bold text-sky-500">3</p>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={applicationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={50}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {applicationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <Link to="AppTable">
               
        <Card bg="bg-sky-50" className="mt-4">
          <h2 className="text-2xl font-bold">More application info</h2>
          <p className="mt-2 mb-4">
            Learn more about your application history
          </p>
        </Card>

            </Link>

          </div>

          {/* Cards */}
          <div className="container-xl lg:container  py-8 grid grid-cols-1 md:grid-cols-1 gap-8  ">
            <Link to="/student/themes">
              <Card bg="bg-sky-100" className='mb-7'>
                <h2 className="text-2xl font-bold">Graduation Theme</h2>
                <p className="mt-2 mb-4">
                  Choose and submit your graduation project theme
                </p>
              </Card>
            </Link>

            <Link to="/student/studentlists">
              <Card bg="bg-sky-100">
                <h2 className="text-2xl font-bold">Partner Selection</h2>
                <p className="mt-2 mb-4">
                  Find and select your project partner
                </p>
              </Card>
            </Link>

            <Link to="AppTable">
              <Card bg="bg-sky-100">
                <h2 className="text-2xl font-bold">My Applications</h2>
                <p className="mt-2 mb-4">
                  View and manage your project applications
                </p>
              </Card>
            </Link>
          </div>

          {/* Profile */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:block hidden mt-4 mb-5 ">
            <div className="flex flex-col items-center">
              <img
                src={studentimg}
                alt="Student"
                className="h-32 w-32 rounded-full border-4 border-sky-700 shadow-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-sky-700">{name}</h2>
              <p className="text-gray-600">{grade}</p>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-sky-700 mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Sidebar Toggle */}
        <div className="fixed bottom-4 right-4 md:hidden">
          <Link to="profile" >
          <button className="bg-sky-700 text-white p-2 rounded-full shadow">
            <FaUserCircle size={24} />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;