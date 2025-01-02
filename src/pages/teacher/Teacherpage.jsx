import React from 'react';
import StatCard from '../../components/statCard';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import ToolTip from '../../components/ToolTip';
import { user } from '../../data';
import { statistics, teacherchart, themes, requests2,} from '../../data';

const Teacherpage = () => {
  const renderStatusBadge = (status) => {
    if (status === "completed") {
      return (
        <span className="w-24 text-center inline-block px-2 py-0.5 text-sm font-normal text-slate-100 bg-slate-600 rounded-md">
          Completed
        </span>
      );
    } else if (status === "in progress") {
      return (
        <span className="w-24 text-center inline-block px-2 py-0.5 text-sm font-normal text-slate-600 bg-slate-100 rounded-md">
          In Progress
        </span>
      );
    } else if (status === "open") {
      return (
        <span className="w-24 h-6 text-center inline-block px-2 py-0.5 text-sm font-normal text-green-900 bg-green-100 rounded-md">
            Open
        </span>
      );
    } else if (status === "closed") {
      return (
        <span className="w-24 h-6 text-center inline-block px-2 py-0.5 text-sm font-normal text-red-900 bg-red-100 rounded-md">
          Closed
        </span>
      );
    }
  };

  return (
    <>
      {/* Header */}
      <div className="shadow-slate-800 rounded-t-lg mx-4 sm:mx-6 md:mx-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-2 py-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-700">Hello, Mayar!</h1>
            <p className="text-gray-600">Ready to see what we have today?</p>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="p-6 bg-slate-100 min-h-screen font-sans grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columns 1 & 2: Cards and Table */}
        <div className="lg:col-span-2 space-y-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {statistics.map((item) => (
              <div
                key={item.title}
                className="bg-white h-36 dark:text-gray-200 dark:bg-secondary-dark-bg p-4 pt-5 rounded-2xl shadow-md flex flex-col items-start justify-center"
              >
                <button
                  type="button"
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <p className="mt-3 text-lg font-semibold">{item.value}</p>
                <p className="text-sm text-gray-400 mt-1">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Themes Table */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Themes</h3>
            <div className="overflow-x-auto">
              <table className="table-auto w-full bg-white rounded-lg border-separate border-spacing-0">
                <thead className="bg-gray-100 border-b border-gray-300">
                  <tr>
                    <th className="px-6 py-3 text-sm font-medium text-gray-700 text-left">Theme Name</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-700 text-left">Specialization</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-700 text-left">Status</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-700 text-left">Assigned Team</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-700 text-left">Last Updated</th>
                  </tr>
                </thead>
                <tbody>
               
                  {user.themes.map((theme, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-800">{theme.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{theme.specialization}</td>
                      <td className='px-6 py-4 text-sm '>{renderStatusBadge(theme.status)}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{theme.assignedTo}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{theme.updated_at}</td>
                    </tr>
                          ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Column 3: Chart and Requests */}
        <div className="space-y-6">
          {/* Themes Chart */}
          <div className=" flex flex-row justify-between bg-white rounded-xl shadow-lg p-5">
            <div className='flex flex-col '>
            <div className="  text-left mb-1 font-semibold">
              Total Themes: {teacherchart.reduce((sum, entry) => sum + entry.value, 0)}
            </div>
            {teacherchart.map((entry, index) => (
              <div className="mb-0.5 ml-2 flex flex-row" key={index}>
                <div
                  className="w-2 h-2 mt-1.5 mr-2 rounded-lg"
                  style={{ backgroundColor: entry.color }}
                ></div>
                <p className="text-sm text-slate-700">
                  {entry.name} : {entry.value}
                </p>
              </div> 
            ))}</div>
            <div  className="flex flex-shrink-0" style={{ width: '50%', height: '150px' }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={teacherchart}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {teacherchart.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Requests Table */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">New Requests</h3>
            <ul className="space-y-2">
              {requests2.map((request, index) => (
                <li key={index} className="p-2 bg-gray-50 rounded-md shadow-sm">
                  <p className="text-sm font-medium">{request.teamName} : {request.themeName}</p>
                  <p className="text-xs text-gray-600">Request Date: {request.requestDate}</p>
                  <p className="text-xs text-gray-600">Status: {request.status}</p>
                  <p className="text-sm font-normal">Members</p>
                  <div className="flex flex-row gap-2 mt-5">
                    {request.students.map((student, idx) => (
                      <ToolTip key={idx} color='#081A51' text={student.name}>
                        <img src={student.image} className="rounded-full size-9" alt="Student" />
                      </ToolTip>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacherpage;
